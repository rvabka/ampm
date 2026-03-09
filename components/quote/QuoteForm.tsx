'use client';

import { useState, useCallback } from 'react';
import SubmitButton from '@/components/shared/SubmitButton';
import TurnstileWidget from '@/components/shared/TurnstileWidget';

const inputBase =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-secondary placeholder-gray-400 text-sm transition-all outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10';

const labelBase = 'block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider';

const REQUIRED = ['firstname', 'lastname', 'company', 'nip', 'phone', 'email', 'details'] as const;
type RequiredKey = typeof REQUIRED[number];

export default function QuoteForm() {
  const [values, setValues] = useState<Record<RequiredKey, string>>(
    Object.fromEntries(REQUIRED.map(k => [k, ''])) as Record<RequiredKey, string>
  );
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = REQUIRED.every(k => values[k].trim() !== '');

  const setField = (key: RequiredKey, value: string) =>
    setValues(prev => ({ ...prev, [key]: value }));

  const handleTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token);
    setError(null);
  }, []);

  const handleTurnstileExpired = useCallback(() => setTurnstileToken(null), []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    setError('Weryfikacja CAPTCHA nie powiodła się. Odśwież stronę i spróbuj ponownie.');
  }, []);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setError('Potwierdź, że nie jesteś robotem.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = { turnstileToken };
    formData.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json() as { success?: boolean; error?: string };

      if (!res.ok || !json.success) {
        setError(json.error ?? 'Wystąpił błąd. Spróbuj ponownie.');
        return;
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setValues(Object.fromEntries(REQUIRED.map(k => [k, ''])) as Record<RequiredKey, string>);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Błąd połączenia. Sprawdź internet i spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="bg-white p-4 md:p-12 rounded-2xl shadow-lg border border-gray-100"
      onSubmit={handleSubmit}
      aria-label="Formularz zapytania o wycenę transportu"
      noValidate
    >
      <div className="mb-8 pb-8 border-b border-gray-100">
        <span className="text-primary font-bold tracking-wider uppercase text-xs block mb-2">
          Formularz wyceny
        </span>
        <h2 className="text-2xl font-display font-bold text-secondary">
          Wyślij zapytanie o wycenę
        </h2>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Wypełnij formularz, a nasi specjaliści skontaktują się z Tobą.
        </p>
      </div>

      <fieldset className="mb-10 pb-8 border-b border-gray-100">
        <legend className="w-full flex items-center gap-3 mb-6">
          <span
            className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0"
            aria-hidden="true"
          >
            1
          </span>
          <span className="text-xl font-bold text-secondary">Dane kontaktowe</span>
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstname" className={labelBase}>
              Imię <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Jan"
              required
              aria-required="true"
              value={values.firstname}
              onChange={e => setField('firstname', e.target.value)}
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="lastname" className={labelBase}>
              Nazwisko <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Kowalski"
              required
              aria-required="true"
              value={values.lastname}
              onChange={e => setField('lastname', e.target.value)}
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelBase}>
              Firma <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nazwa firmy"
              required
              aria-required="true"
              value={values.company}
              onChange={e => setField('company', e.target.value)}
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="nip" className={labelBase}>
              NIP <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="nip"
              name="nip"
              type="text"
              placeholder="0000000000"
              required
              aria-required="true"
              inputMode="numeric"
              value={values.nip}
              onChange={e => setField('nip', e.target.value)}
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelBase}>
              Numer telefonu <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+48 000 000 000"
              required
              aria-required="true"
              value={values.phone}
              onChange={e => setField('phone', e.target.value)}
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelBase}>
              E-mail <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jan@firma.pl"
              required
              aria-required="true"
              value={values.email}
              onChange={e => setField('email', e.target.value)}
              className={inputBase}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="w-full flex items-center gap-3 mb-6">
          <span
            className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0"
            aria-hidden="true"
          >
            2
          </span>
          <span className="text-xl font-bold text-secondary">Szczegóły zapytania</span>
        </legend>

        <div>
          <label htmlFor="details" className={labelBase}>
            Opisz trasę transportu i szczegóły przesyłki{' '}
            <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <p id="details-hint" className="text-gray-400 text-sm mb-3">
            Podaj miejsce załadunku i rozładunku, rodzaj towaru, wymiary, wagę
            oraz preferowany termin.
          </p>
          <textarea
            id="details"
            name="details"
            placeholder="Np. Trasa: Warszawa → Berlin. Towar: 10 palet euro, 5000 kg. Odbiór: 10.03.2025, godz. 8:00..."
            required
            aria-required="true"
            aria-describedby="details-hint"
            rows={7}
            value={values.details}
            onChange={e => setField('details', e.target.value)}
            className={`${inputBase} resize-y`}
          />
        </div>
      </fieldset>

      {error && (
        <p role="alert" className="mb-4 text-sm text-red-600 font-medium">
          {error}
        </p>
      )}

      <div className="pt-4 border-t border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TurnstileWidget
            onSuccess={handleTurnstileSuccess}
            onExpired={handleTurnstileExpired}
            onError={handleTurnstileError}
          />
          <SubmitButton
            label="Wyślij zapytanie"
            loading={loading}
            success={success}
            disabled={!turnstileToken || !isFormValid}
          />
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          <span aria-hidden="true">* </span>Pola wymagane.
          Administratorem danych osobowych jest AMPM Sp. z o.o. Dane wpisane w formularzu
          będą przetwarzane w celu udzielenia odpowiedzi na przesłane zgłoszenie zgodnie
          z{' '}
          <a
            href="/polityka-prywatnosci"
            className="hover:text-primary underline underline-offset-2 transition-colors"
          >
            polityką prywatności
          </a>
          .
        </p>
      </div>
    </form>
  );
}
