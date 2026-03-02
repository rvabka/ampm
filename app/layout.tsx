import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const plusJakartaSans = localFont({
  src: [
    {
      path: '../public/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal',
      weight: '200 800'
    },
    {
      path: '../public/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
      weight: '200 800'
    }
  ],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ampmspedition.pl'),
  title: {
    template: '%s | AMPM Spedition',
    default: 'AMPM Spedition – Transport Drogowy i Logistyka Europejska'
  },
  description:
    'AMPM Spedition – profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie. Przewozy TIR, transport do 3.5t, magazynowanie i dystrybucja. Zaufaj ekspertom logistyki.',
  keywords: [
    'transport drogowy',
    'spedycja',
    'logistyka',
    'TIR',
    'transport ciężarowy',
    'transport międzynarodowy',
    'transport ekspresowy',
    'magazynowanie',
    'dystrybucja',
    'Europa',
    'AMPM Spedition'
  ],
  authors: [{ name: 'AMPM Spedition' }],
  creator: 'AMPM Spedition',
  publisher: 'AMPM Full Time Spedition',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://ampm.com.pl',
    siteName: 'AMPM Spedition',
    title: 'AMPM Spedition – Transport Drogowy i Logistyka Europejska',
    description:
      'Profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie. Przewozy TIR, transport do 3.5t, magazynowanie i dystrybucja.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMPM Spedition – Transport Drogowy i Logistyka Europejska',
    description:
      'Profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'AMPM Full Time Spedition',
  description:
    'Profesjonalne usługi transportu drogowego ciężarowego i dostawczego na terenie całej Europy.',
  url: 'https://ampm.com.pl',
  logo: 'https://ampm.com.pl/logo.webp',
  areaServed: {
    '@type': 'Place',
    name: 'Europa'
  },
  serviceType: [
    'Transport ciężarowy TIR',
    'Transport dostawczy do 3.5t',
    'Magazynowanie i dystrybucja'
  ],
  knowsAbout: ['Logistyka', 'Spedycja', 'Transport drogowy', 'FTL', 'LTL']
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.className} bg-background-light text-text-light antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
