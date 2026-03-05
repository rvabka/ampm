import { MapPin, Phone, Mail } from 'lucide-react';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.93c-.263-.023-.718-.034-1.283-.034-1.822 0-2.525.69-2.525 2.488v1.66h3.632l-.701 3.667h-2.931v8.093c5.857-.794 10.376-5.862 10.376-11.975C23.14 5.395 18.003.259 11.831.259 5.659.259.523 5.395.523 11.829c0 5.628 3.989 10.32 9.292 11.405-.266.037-.484.057-.714.057z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const contactBlocks = [
  {
    icon: MapPin,
    title: 'Nasze Biuro',
    content: (
      <address className="not-italic text-gray-500 text-lg leading-relaxed">
        ul. Zemborzycka 53b<br />
        20-445 Lublin<br />
        Polska
      </address>
    ),
  },
  {
    icon: Phone,
    title: 'Skontaktuj się',
    content: (
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-primary uppercase block mb-1">Biuro</span>
          <a
            href="tel:+48570112512"
            className="text-xl font-semibold text-secondary hover:text-primary transition-colors"
          >
            +48 570 112 512
          </a>
        </div>
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Godziny pracy</span>
          <span className="text-base text-gray-500">Pon – Pt: 07:00–15:00</span>
        </div>
      </div>
    ),
  },
  {
    icon: Mail,
    title: 'Napisz do nas',
    content: (
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase block mb-1">E-mail</span>
          <a
            href="mailto:biuro@ampm.com.pl"
            className="text-lg font-semibold text-secondary hover:text-primary transition-colors break-all"
          >
            biuro@ampm.com.pl
          </a>
        </div>
      </div>
    ),
  },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'AMPM Spedition na Facebooku', Icon: FacebookIcon },
  { href: 'https://linkedin.com', label: 'AMPM Spedition na LinkedIn', Icon: LinkedInIcon },
  { href: 'https://instagram.com', label: 'AMPM Spedition na Instagramie', Icon: InstagramIcon },
];

export default function ContactInfo() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      aria-labelledby="contact-info-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="contact-info-heading" className="sr-only">Dane kontaktowe</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {contactBlocks.map(({ icon: Icon, title, content }) => (
            <div key={title} className="flex flex-col space-y-6">
              <div
                className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <Icon size={28} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-secondary mb-4">
                  {title}
                </h3>
                {content}
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Śledź nasze trasy:
          </span>
          <nav aria-label="Media społecznościowe" className="flex gap-6">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
