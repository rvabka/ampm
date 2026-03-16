import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';
import { verifyTurnstile } from '@/lib/turnstile';
import { checkRateLimit } from '@/lib/rateLimit';
import { buildEmail } from '@/lib/emailTemplate';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json({ error: 'Zbyt wiele zapytań. Spróbuj ponownie za 15 minut.' }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane.' }, { status: 400 });
  }

  const name    = body.name?.trim().slice(0, 100) ?? '';
  const email   = body.email?.trim().slice(0, 254) ?? '';
  const subject = body.subject?.trim().slice(0, 200) ?? '';
  const message = body.message?.trim().slice(0, 5000) ?? '';
  const turnstileToken = body.turnstileToken ?? '';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Wypełnij wszystkie wymagane pola.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Podaj prawidłowy adres e-mail.' }, { status: 400 });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: 'Wymagana weryfikacja CAPTCHA.' }, { status: 400 });
  }

  const valid = await verifyTurnstile(turnstileToken, ip);
  if (!valid) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const fields = [
    { label: 'Imię i nazwisko', value: name },
    { label: 'E-mail', value: email },
    ...(subject ? [{ label: 'Temat', value: subject }] : []),
  ];

  await transporter.sendMail({
    from: `"Am Pm sp. z o.o. – Formularz kontaktowy" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_CONTACT,
    replyTo: email,
    subject: subject ? `Kontakt: ${subject}` : `Nowa wiadomość od ${name}`,
    html: buildEmail({
      category: 'Formularz kontaktowy',
      title: 'Nowa wiadomość',
      subtitle: `Wiadomość od ${name}`,
      fields,
      message: { label: 'Wiadomość', value: message },
    }),
  });

  return NextResponse.json({ success: true });
}
