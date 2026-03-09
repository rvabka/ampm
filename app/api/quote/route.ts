import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';
import { verifyTurnstile } from '@/lib/turnstile';
import { checkRateLimit } from '@/lib/rateLimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NIP_RE   = /^\d{10}$/;
const PHONE_RE = /^[+\d\s\-().]{7,20}$/;

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

  const firstname = body.firstname?.trim().slice(0, 100) ?? '';
  const lastname  = body.lastname?.trim().slice(0, 100) ?? '';
  const company   = body.company?.trim().slice(0, 200) ?? '';
  const nip       = body.nip?.trim().replace(/\s/g, '') ?? '';
  const phone     = body.phone?.trim().slice(0, 30) ?? '';
  const email     = body.email?.trim().slice(0, 254) ?? '';
  const details   = body.details?.trim().slice(0, 5000) ?? '';
  const turnstileToken = body.turnstileToken ?? '';

  if (!firstname || !lastname || !company || !nip || !phone || !email || !details) {
    return NextResponse.json({ error: 'Wypełnij wszystkie wymagane pola.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Podaj prawidłowy adres e-mail.' }, { status: 400 });
  }

  if (!NIP_RE.test(nip)) {
    return NextResponse.json({ error: 'NIP musi składać się z dokładnie 10 cyfr.' }, { status: 400 });
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

  await transporter.sendMail({
    from: `"AMPM – Zapytanie o wycenę" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_OFFER,
    replyTo: email,
    subject: `Zapytanie o wycenę – ${firstname} ${lastname} (${company})`,
    html: `
      <h2>Nowe zapytanie o wycenę transportu</h2>
      <h3>Dane kontaktowe</h3>
      <p><strong>Imię i nazwisko:</strong> ${esc(firstname)} ${esc(lastname)}</p>
      <p><strong>Firma:</strong> ${esc(company)}</p>
      <p><strong>NIP:</strong> ${esc(nip)}</p>
      <p><strong>Telefon:</strong> ${esc(phone)}</p>
      <p><strong>E-mail:</strong> ${esc(email)}</p>
      <h3>Szczegóły zapytania</h3>
      <p style="white-space:pre-wrap">${esc(details)}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
