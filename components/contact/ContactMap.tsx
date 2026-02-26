import { ExternalLink } from 'lucide-react';

export default function ContactMap() {
  return (
    <section
      className="w-full h-[600px] relative overflow-hidden border-y border-gray-200 grayscale hover:grayscale-0 transition-all duration-700"
      aria-label="Mapa lokalizacji biura AMPM Spedition w Warszawie"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438507563!2d20.921112431449335!3d52.23285503525543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6690633e39%3A0x203531b402897255!2sWarsaw!5e0!3m2!1sen!2spl!4v1715600000000!5m2!1sen!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokalizacja biura AMPM Spedition, ul. Logistyczna 12/4, Warszawa"
        className="absolute inset-0"
      />

      
      <div
        className="absolute top-10 left-10 z-10 hidden lg:block"
        aria-hidden="true"
      >
        <div className="bg-white/95 backdrop-blur-md p-8 shadow-2xl border-l-4 border-secondary max-w-sm">
          <h4 className="font-display font-bold text-secondary mb-2 uppercase text-sm tracking-widest">
            Lokalizacja Centrali
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nasza siedziba znajduje się w sercu logistycznym Polski, co
            pozwala na szybki dostęp do najważniejszych korytarzy
            transportowych Europy.
          </p>
          <a
            href="https://maps.google.com/?q=Warszawa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold text-sm hover:underline flex items-center gap-2"
            aria-label="Otwórz biuro AMPM Spedition w Mapach Google (otwiera nowe okno)"
          >
            Otwórz w Mapach Google
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
