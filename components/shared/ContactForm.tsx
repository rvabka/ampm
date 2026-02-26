'use client';

import { Send } from 'lucide-react';

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
}

const inputBase =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-secondary placeholder-gray-400 text-sm transition-all duration-300 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10';

export default function ContactForm({
  fields,
  submitLabel = 'Wyślij wiadomość',
  className = '',
}: ContactFormProps) {
  return (
    <form
      className={`bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 ${className}`}
      onSubmit={(e) => e.preventDefault()}
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
                <span className="text-primary ml-0.5">*</span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                rows={field.rows ?? 4}
                className={`${inputBase} resize-none`}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                className={`${inputBase} cursor-pointer`}
                defaultValue=""
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
                className={inputBase}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer"
        >
          {submitLabel}
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
