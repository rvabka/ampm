import { ExternalLink } from 'lucide-react';

export default function ContactMap() {
  return (
    <section
      className="w-full h-[600px] relative overflow-hidden border-y border-gray-200 grayscale hover:grayscale-0 transition-all duration-700"
      aria-label="Mapa lokalizacji biura Am Pm sp. z o.o. w Warszawie"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.5493639123342!2d22.569644099999998!3d51.2096556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722576a9f7d20ff%3A0x313714c3f3ac7df2!2sAM%20PM%20SP.%20Z%20O.O.%20Transport%20i%20Spedycja!5e1!3m2!1spl!2spl!4v1772748931275!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokalizacja biura Am Pm sp. z o.o., ul. Logistyczna 12/4, Warszawa"
        className="absolute inset-0"
      />
    </section>
  );
}
