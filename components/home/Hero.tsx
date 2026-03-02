import Link from "next/link";
import { FileText, Phone, Truck } from "lucide-react";

const ctaItems = [
  {
    href: "/wycena",
    icon: FileText,
    label: "Wycena",
    sublabel: "Zapytaj o ofertę",
    border: true,
  },
  {
    href: "/kontakt",
    icon: Phone,
    label: "Kontakt",
    sublabel: "Wsparcie 24/7",
    border: true,
  },
  {
    href: "/dla-przewoznika",
    icon: Truck,
    label: "Dla Przewoźnika",
    sublabel: "Dołącz do nas",
    border: false,
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.93c-.263-.023-.718-.034-1.283-.034-1.822 0-2.525.69-2.525 2.488v1.66h3.632l-.701 3.667h-2.931v8.093c5.857-.794 10.376-5.862 10.376-11.975C23.14 5.395 18.003.259 11.831.259 5.659.259.523 5.395.523 11.829c0 5.628 3.989 10.32 9.292 11.405-.266.037-.484.057-.714.057z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header
      className="relative h-dvh w-full overflow-hidden flex flex-col justify-end pb-10"
      aria-label="Baner główny"
    >
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover [transform:translate3d(0,0,0)] will-change-transform"
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-secondary/10 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6 items-center"
        aria-label="Media społecznościowe"
      >
        <div className="h-16 w-px bg-white/30 mb-2" aria-hidden="true" />
        <a
          href="https://facebook.com"
          aria-label="AMPM Spedition na Facebooku"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://linkedin.com"
          aria-label="AMPM Spedition na LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://instagram.com"
          aria-label="AMPM Spedition na Instagramie"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <InstagramIcon />
        </a>
        <div className="h-16 w-px bg-white/30 mt-2" aria-hidden="true" />
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 flex flex-col justify-end h-full pb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
          Transport
          <br className="hidden md:block" /> i Spedycja
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-xl font-light drop-shadow-md tracking-wide mb-10 mx-auto md:mx-0">
          Profesjonalny transport międzynarodowy z gwarancją bezpieczeństwa
          i terminowości. Twój ładunek w pewnych rękach.
        </p>

        
        <div className="relative z-20 w-full flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white shadow-2xl rounded-2xl p-1.5 flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto">
            {ctaItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-6 py-4 group hover:bg-gray-50 rounded-xl transition-colors whitespace-nowrap ${
                  item.border
                    ? "border-b md:border-b-0 md:border-r border-gray-100"
                    : ""
                }`}
              >
                <div className="bg-gray-100 p-2 rounded-full mr-4 group-hover:bg-primary/10 transition-colors shrink-0">
                  <item.icon
                    className="text-secondary group-hover:text-primary transition-colors"
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-secondary text-sm font-bold group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <span className="text-gray-500 text-sm font-light">
                    {item.sublabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
