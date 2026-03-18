import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import CookieBannerLoader from '@/components/shared/CookieBannerLoader';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';

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
  metadataBase: new URL('https://ampm.com.pl'),
  title: {
    template: '%s | Am Pm sp. z o.o.',
    default: 'Am Pm sp. z o.o. – Transport Drogowy i Logistyka Europejska'
  },
  description:
    'Am Pm sp. z o.o. – profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie. Przewozy TIR, transport do 3.5t, magazynowanie i dystrybucja. Zaufaj ekspertom logistyki.',
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
    'Am Pm sp. z o.o.'
  ],
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  authors: [{ name: 'Am Pm sp. z o.o.' }],
  creator: 'Am Pm sp. z o.o.',
  publisher: 'Am Pm sp. z o.o.',
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
    siteName: 'Am Pm sp. z o.o.',
    title: 'Am Pm sp. z o.o. – Transport Drogowy i Logistyka Europejska',
    description:
      'Profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie. Przewozy TIR, transport do 3.5t, magazynowanie i dystrybucja.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Am Pm sp. z o.o. – Transport Drogowy i Logistyka Europejska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Am Pm sp. z o.o. – Transport Drogowy i Logistyka Europejska',
    description:
      'Profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie.',
    images: ['/og-image.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Am Pm sp. z o.o.',
  description:
    'Profesjonalne usługi transportu drogowego ciężarowego i dostawczego na terenie całej Europy.',
  url: 'https://ampm.com.pl',
  logo: 'https://ampm.com.pl/logo.webp',
  image: 'https://ampm.com.pl/og-image.jpg',
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
        <CookieBannerLoader />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
