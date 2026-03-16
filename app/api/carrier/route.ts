import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';
import { verifyTurnstile } from '@/lib/turnstile';
import { checkRateLimit } from '@/lib/rateLimit';
import { buildEmail } from '@/lib/emailTemplate';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d\s\-().]{7,20}$/;

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

  const name         = body.name?.trim().slice(0, 100) ?? '';
  const email        = body.email?.trim().slice(0, 254) ?? '';
  const phone        = body.phone?.trim().slice(0, 30) ?? '';
  const company      = body.company?.trim().slice(0, 200) ?? '';
  const fleet_count  = body.fleet_count?.trim().slice(0, 50) ?? '';
  const fleet_details = body.fleet_details?.trim().slice(0, 500) ?? '';
  const message      = body.message?.trim().slice(0, 5000) ?? '';
  const turnstileToken = body.turnstileToken ?? '';

  if (!name || !email || !phone || !company || !message) {
    return NextResponse.json({ error: 'Wypełnij wszystkie wymagane pola.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Podaj prawidłowy adres e-mail.' }, { status: 400 });
  }

  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: 'Podaj prawidłowy numer telefonu.' }, { status: 400 });
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
    { label: 'Telefon', value: phone },
    { label: 'Firma', value: company },
    ...(fleet_count ? [{ label: 'Liczba pojazdów', value: fleet_count }] : []),
    ...(fleet_details ? [{ label: 'Typ pojazdu / trasy', value: fleet_details }] : []),
  ];

  await transporter.sendMail({
    from: `"Am Pm sp. z o.o. – Zgłoszenie przewoźnika" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_SHIPPING,
    replyTo: email,
    subject: `Zgłoszenie przewoźnika – ${name} (${company})`,
    html: buildEmail({
      category: 'Dla przewoźnika',
      title: 'Nowe zgłoszenie przewoźnika',
      subtitle: `Od: ${name} · ${company}`,
      fields,
      message: { label: 'Wiadomość', value: message },
    }),
  });

  return NextResponse.json({ success: true });
}
