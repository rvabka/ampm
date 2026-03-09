'use client';

import { useState, useCallback } from 'react';
import SubmitButton from '@/components/shared/SubmitButton';
import TurnstileWidget from '@/components/shared/TurnstileWidget';

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  colSpan?: 1 | 2;
  rows?: number;
}

interface ContactFormProps {
  fields: FormField[];
  submitLabel?: string;
  className?: string;
  endpoint?: string;
}

const inputBase =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-secondary placeholder-gray-400 text-sm transition-all duration-300 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10';

export default function ContactForm({
  fields,
  submitLabel = 'Wyślij wiadomość',
  className = '',
  endpoint = '/api/contact',
}: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>(
    () => Object.fromEntries(fields.map(f => [f.id, '']))
  );
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = fields
    .filter(f => f.required)
    .every(f => values[f.id]?.trim() !== '');

  const setField = (id: string, value: string) =>
    setValues(prev => ({ ...prev, [id]: value }));

  const handleTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token);
    setError(null);
  }, []);

  const handleTurnstileExpired = useCallback(() => {
    setTurnstileToken(null);
  }, []);

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
      const res = await fetch(endpoint, {
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
      setValues(Object.fromEntries(fields.map(f => [f.id, ''])));
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Błąd połączenia. Sprawdź internet i spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className={`bg-white p-4 md:p-12 rounded-2xl shadow-lg border border-gray-100 ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div
            key={field.id}
            className={field.colSpan === 2 ? 'md:col-span-2' : ''}
          >
            <label
              htmlFor={field.id}
              className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
            >
              {field.label}
              {field.required && (
                <span className="text-primary ml-0.5" aria-hidden="true">*</span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                aria-required={field.required}
                rows={field.rows ?? 4}
                value={values[field.id] ?? ''}
                onChange={e => setField(field.id, e.target.value)}
                className={`${inputBase} resize-none`}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                aria-required={field.required}
                value={values[field.id] ?? ''}
                onChange={e => setField(field.id, e.target.value)}
                className={`${inputBase} cursor-pointer`}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                aria-required={field.required}
                value={values[field.id] ?? ''}
                onChange={e => setField(field.id, e.target.value)}
                className={inputBase}
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-6 text-sm text-red-600 font-medium">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <TurnstileWidget
          onSuccess={handleTurnstileSuccess}
          onExpired={handleTurnstileExpired}
          onError={handleTurnstileError}
        />
        <SubmitButton
          label={submitLabel}
          loading={loading}
          success={success}
          disabled={!turnstileToken || !isFormValid}
        />
      </div>
    </form>
  );
}
