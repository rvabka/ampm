'use client';

import { Send } from 'lucide-react';

const inputBase =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-secondary placeholder-gray-400 text-sm transition-all outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10';

const labelBase = 'block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider';

export default function QuoteForm() {
  return (
    <form
      className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
      onSubmit={e => e.preventDefault()}
      aria-label="Formularz zapytania o wycenę transportu"
      noValidate
    >
      
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
            className={`${inputBase} resize-y`}
          />
        </div>
      </fieldset>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          <span aria-hidden="true">*</span> Pola wymagane.{' '}
          <a
            href="/polityka-prywatnosci"
            className="hover:text-primary underline underline-offset-2 transition-colors"
          >
            Polityka prywatności
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer"
        >
          Wyślij zapytanie
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
