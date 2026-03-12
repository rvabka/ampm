
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { type ComponentType } from 'react';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.93c-.263-.023-.718-.034-1.283-.034-1.822 0-2.525.69-2.525 2.488v1.66h3.632l-.701 3.667h-2.931v8.093c5.857-.794 10.376-5.862 10.376-11.975C23.14 5.395 18.003.259 11.831.259 5.659.259.523 5.395.523 11.829c0 5.628 3.989 10.32 9.292 11.405-.266.037-.484.057-.714.057z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  );
}

const menuCol1 = [
  { href: '/', label: 'Strona Główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/wycena', label: 'Wycena' },
  { href: '/dla-przewoznika', label: 'Dla Przewoźnika' }
];

const menuCol2 = [
  { href: '/dokumenty', label: 'Dokumenty' },
  { href: '/blog', label: 'Blog' },
  { href: '/kariera', label: 'Kariera' },
  { href: '/kontakt', label: 'Kontakt' }
];

const serviceLinks = [
  { href: '/uslugi/transport-miedzynarodowy', label: 'Transport Międzynarodowy' },
  { href: '/uslugi/transport-krajowy', label: 'Transport Krajowy' },
  { href: '/uslugi/transport-ekspresowy', label: 'Transport Ekspresowy' },
  { href: '/uslugi/transport-chlodniczy', label: 'Transport Chłodniczy' },
  { href: '/uslugi/transport-adr', label: 'Transport ADR' },
];

const socialLinks: { href: string; label: string; icon: ComponentType<{ className?: string }> }[] = [
  {
    href: 'https://www.facebook.com/profile.php?id=61586839199138',
    label: 'AMPM Spedition na Facebooku',
    icon: FacebookIcon
  },
  {
    href: 'https://www.linkedin.com/company/ampm-sp-z-o-o/',
    label: 'AMPM Spedition na LinkedIn',
    icon: LinkedinIcon
  },
  {
    href: 'https://www.instagram.com/ampmspzoo/',
    label: 'AMPM Spedition na Instagramie',
    icon: InstagramIcon
  }
];

export default function Footer() {
  return (
    <footer
      className="bg-secondary py-16 px-8 border-t border-gray-800"
      aria-label="Stopka strony"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              aria-label="AMPM Spedition – strona główna"
              className="inline-block mb-6 bg-white rounded-full"
            >
              <Image
                src="/logo.webp"
                alt="AMPM Spedition"
                width={1140}
                height={601}
                className="h-20 w-20"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Profesjonalny transport międzynarodowy z gwarancją bezpieczeństwa
              i terminowości.
            </p>
            <address className="not-italic text-gray-400 text-sm leading-relaxed mb-6 space-y-1">
              <p>ul. Zemborzycka 53B, 20-445 Lublin</p>
              <p>
                <a href="tel:+48570112512" className="hover:text-primary transition">+48 570 112 512</a>
              </p>
              <p>
                <a href="mailto:biuro@ampm.com.pl" className="hover:text-primary transition">biuro@ampm.com.pl</a>
              </p>
              <p>
                <a href="mailto:spedycja@ampm.com.pl" className="hover:text-primary transition">spedycja@ampm.com.pl</a>
              </p>
              <p className="pt-1 text-gray-500 text-xs">
                NIP: PL9462695455 &nbsp;·&nbsp; REGON: 385570176 &nbsp;·&nbsp; KRS: 0000828304
              </p>
            </address>

            <div className="flex gap-4" aria-label="Media społecznościowe">
              {socialLinks.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-300 hover:text-primary transition"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>


          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <nav aria-label="Menu główne – kolumna 1">
              <h2 className="font-bold mb-6 text-white text-sm">Menu</h2>
              <ul className="space-y-3 text-sm text-gray-400">
                {menuCol1.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Menu główne – kolumna 2">
              <h2 className="font-bold mb-6 text-white text-sm opacity-0 select-none" aria-hidden="true">
                Menu
              </h2>
              <ul className="space-y-3 text-sm text-gray-400">
                {menuCol2.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Usługi – kolumna">
              <h2 className="font-bold mb-6 text-white text-sm">Usługi</h2>
              <ul className="space-y-3 text-sm text-gray-400">
                {serviceLinks.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>


        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AM PM Sp. z o.o. Transport i Spedycja. Wszelkie
            prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-white transition"
            >
              Polityka Prywatności
            </Link>
            <Link href="/polityka-cookies" className="hover:text-white transition">
              Polityka Cookies
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              Projekt i wykonanie:
              <a
                href="https://www.linkedin.com/in/wiktor-stefaniak-4b9287279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={16} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
