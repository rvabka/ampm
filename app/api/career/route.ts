import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';
import { verifyTurnstile } from '@/lib/turnstile';
import { checkRateLimit } from '@/lib/rateLimit';
import { buildEmail } from '@/lib/emailTemplate';

const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d\s\-().]{7,20}$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json({ error: 'Zbyt wiele zapytań. Spróbuj ponownie za 15 minut.' }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane.' }, { status: 400 });
  }

  const fullname    = ((formData.get('fullname') as string) ?? '').trim().slice(0, 100);
  const email       = ((formData.get('email') as string) ?? '').trim().slice(0, 254);
  const phone       = ((formData.get('phone') as string) ?? '').trim().slice(0, 30);
  const position    = ((formData.get('position') as string) ?? '').trim().slice(0, 200);
  const region      = ((formData.get('region') as string) ?? '').trim().slice(0, 100);
  const coverLetter = ((formData.get('cover-letter') as string) ?? '').trim().slice(0, 5000);
  const turnstileToken = ((formData.get('turnstileToken') as string) ?? '').trim();
  const cvFile = formData.get('cv') as File | null;

  if (!fullname || !email || !phone || !position || !region) {
    return NextResponse.json({ error: 'Wypełnij wszystkie wymagane pola.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Podaj prawidłowy adres e-mail.' }, { status: 400 });
  }

  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: 'Podaj prawidłowy numer telefonu.' }, { status: 400 });
  }

  if (!cvFile || cvFile.size === 0) {
    return NextResponse.json({ error: 'Plik CV jest wymagany.' }, { status: 400 });
  }

  if (!ALLOWED_MIME.has(cvFile.type)) {
    return NextResponse.json({ error: 'Niedozwolony format pliku. Dozwolone: PDF, DOC, DOCX.' }, { status: 400 });
  }

  if (cvFile.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: 'Plik CV jest za duży. Maksymalny rozmiar: 10 MB.' }, { status: 400 });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: 'Wymagana weryfikacja CAPTCHA.' }, { status: 400 });
  }

  const valid = await verifyTurnstile(turnstileToken, ip);
  if (!valid) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
  const safeFilename = cvFile.name.replace(/[^a-zA-Z0-9._\-]/g, '_').slice(0, 100);

  await transporter.sendMail({
    from: `"Am Pm sp. z o.o. – Rekrutacja" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_RECRUITMENT,
    replyTo: email,
    subject: `Aplikacja: ${position} – ${fullname}`,
    html: buildEmail({
      category: 'Rekrutacja',
      title: 'Nowa aplikacja o pracę',
      subtitle: `Stanowisko: ${position}`,
      fields: [
        { label: 'Imię i nazwisko', value: fullname },
        { label: 'E-mail', value: email },
        { label: 'Telefon', value: phone },
        { label: 'Stanowisko', value: position },
        { label: 'Województwo', value: region },
      ],
      ...(coverLetter ? { message: { label: 'List motywacyjny', value: coverLetter } } : {}),
    }),
    attachments: [
      {
        filename: safeFilename,
        content: cvBuffer,
        contentType: cvFile.type,
      },
    ],
  });

  return NextResponse.json({ success: true });
}
