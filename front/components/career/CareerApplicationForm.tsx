'use client';

import { Upload } from 'lucide-react';
import SubmitButton from '@/components/shared/SubmitButton';

const inputBase =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-secondary placeholder-gray-400 text-sm transition-all duration-300 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10';

const voivodeships = [
  { value: 'remote', label: 'Praca zdalna' },
  { value: 'poland', label: 'Cała Polska' },
  { value: 'dolnoslaskie', label: 'Dolnośląskie' },
  { value: 'kujawsko-pomorskie', label: 'Kujawsko-pomorskie' },
  { value: 'lubelskie', label: 'Lubelskie' },
  { value: 'lubuskie', label: 'Lubuskie' },
  { value: 'lodzkie', label: 'Łódzkie' },
  { value: 'malopolskie', label: 'Małopolskie' },
  { value: 'mazowieckie', label: 'Mazowieckie' },
  { value: 'opolskie', label: 'Opolskie' },
  { value: 'podkarpackie', label: 'Podkarpackie' },
  { value: 'podlaskie', label: 'Podlaskie' },
  { value: 'pomorskie', label: 'Pomorskie' },
  { value: 'slaskie', label: 'Śląskie' },
  { value: 'swietokrzyskie', label: 'Świętokrzyskie' },
  { value: 'warminsko-mazurskie', label: 'Warmińsko-mazurskie' },
  { value: 'wielkopolskie', label: 'Wielkopolskie' },
  { value: 'zachodniopomorskie', label: 'Zachodniopomorskie' }
];

const steps = [
  {
    step: '1',
    title: 'Przygotuj CV',
    description: 'Upewnij się, że jest aktualne (PDF/DOC).'
  },
  {
    step: '2',
    title: 'Wyślij zgłoszenie',
    description: 'Wypełnij formularz — zajmie to mniej niż 3 minuty.'
  },
  {
    step: '3',
    title: 'Czekaj na kontakt',
    description: 'Skontaktujemy się z wybranymi kandydatami.'
  }
];

export default function CareerApplicationForm() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      id="aplikuj"
      aria-labelledby="career-form-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Rekrutacja
          </span>
          <h2
            id="career-form-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Aplikuj teraz
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Wypełnij formularz, aby dołączyć do naszego zespołu. Skontaktujemy
            się z wybranymi kandydatami.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sidebar */}
            <aside
              className="lg:col-span-2 bg-secondary p-10 flex flex-col justify-between text-white relative overflow-hidden"
              aria-label="Informacje o procesie rekrutacji"
            >
              <div
                className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6">
                  Dołącz do nas
                </span>
                <p className="text-gray-300 text-sm leading-relaxed mb-10">
                  Analizujemy każde zgłoszenie indywidualnie i odpowiadamy na
                  wszystkie aplikacje.
                </p>
                <ol className="space-y-6">
                  {steps.map(({ step, title, description }) => (
                    <li key={step} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold"
                        aria-hidden="true"
                      >
                        {step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{title}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="lg:col-span-3 p-10 lg:p-12">
              <form onSubmit={e => e.preventDefault()} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full name */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="career-fullname"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
                    >
                      Imię i nazwisko{' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="career-fullname"
                      name="fullname"
                      type="text"
                      placeholder="Jan Kowalski"
                      required
                      autoComplete="name"
                      aria-required="true"
                      className={inputBase}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="career-email"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
                    >
                      E-mail{' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      placeholder="jan@przyklad.pl"
                      required
                      autoComplete="email"
                      aria-required="true"
                      className={inputBase}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="career-phone"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
                    >
                      Telefon{' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="career-phone"
                      name="phone"
                      type="tel"
                      placeholder="+48 000 000 000"
                      required
                      autoComplete="tel"
                      aria-required="true"
                      className={inputBase}
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label
                      htmlFor="career-position"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
                    >
                      Stanowisko{' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="career-position"
                      name="position"
                      type="text"
                      placeholder="np. Spedytor Międzynarodowy"
                      required
                      aria-required="true"
                      className={inputBase}
                    />
                  </div>

                  {/* Region */}
                  <div>
                    <label
                      htmlFor="career-region"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider "
                    >
                      Województwo{' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="career-region"
                      name="region"
                      required
                      defaultValue=""
                      aria-required="true"
                      className={`${inputBase} cursor-pointer text-gray-500`}
                    >
                      <option value="" disabled>
                        Wybierz z listy
                      </option>
                      {voivodeships.map(v => (
                        <option key={v.value} value={v.value}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CV Upload */}
                  <div className="md:col-span-2">
                    <span className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                      CV (PDF/DOC/DOCX){' '}
                      <span className="text-primary" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <label
                      htmlFor="career-cv"
                      className="flex flex-col items-center justify-center gap-3 px-6 py-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      <Upload
                        size={28}
                        className="text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary">
                          Wybierz plik CV
                        </span>
                        <span className="text-sm text-gray-500">
                          {' '}
                          lub przeciągnij tutaj
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        Maks. 10 MB · PDF, DOC, DOCX
                      </span>
                      <input
                        id="career-cv"
                        name="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        aria-required="true"
                        className="sr-only"
                      />
                    </label>
                  </div>

                  {/* Cover letter */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="career-cover-letter"
                      className="block text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider"
                    >
                      List motywacyjny
                    </label>
                    <textarea
                      id="career-cover-letter"
                      name="cover-letter"
                      placeholder="Dlaczego chcesz pracować w AMPM?"
                      rows={4}
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex justify-end">
                    <SubmitButton />
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                    Administratorem danych osobowych jest AMPM Sp. z o.o. Dane
                    wpisane w formularzu będą przetwarzane w celu udzielenia
                    odpowiedzi na przesłane zgłoszenie zgodnie z{' '}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
