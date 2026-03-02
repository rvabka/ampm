import { Mail } from 'lucide-react';

export default function CareerHRContact() {
  return (
    <section
      className="py-12 px-6 lg:px-8 bg-background-light border-t border-gray-100"
      aria-labelledby="career-hr-heading"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2
            id="career-hr-heading"
            className="text-xl font-display font-bold text-secondary mb-1"
          >
            Masz pytania?
          </h2>
          <p className="text-gray-500 text-sm">Napisz do naszego działu HR bezpośrednio.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200">
            <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
            <span className="font-semibold text-secondary text-sm">biuro@ampm.com.pl</span>
          </div>
          <a
            href="mailto:biuro@ampm.com.pl"
            className="text-primary font-semibold hover:text-primary-hover transition-colors text-sm whitespace-nowrap"
            aria-label="Wyślij wiadomość do działu HR na adres biuro@ampm.com.pl"
          >
            Wyślij wiadomość →
          </a>
        </div>
      </div>
    </section>
  );
}
