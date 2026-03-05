export type DocumentIconKey =
  | 'file-text'
  | 'shield'
  | 'badge-check'
  | 'shield-plus';

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  size: string;
  dateLabel: 'Aktualizacja' | 'Ważna do';
  date: string;
  icon: DocumentIconKey;
  href: string;
}

export interface DocumentCategory {
  id: string;
  title: string;
  documents: DocumentItem[];
}

export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  {
    id: 'licencje',
    title: 'Licencje i Certyfikaty',
    documents: [
      {
        id: 'licencja-transportowa-pl',
        title: 'Licencja Transportowa PL',
        description: 'Zezwolenie na wykonywanie zawodu przewoźnika drogowego na terenie Polski.',
        size: 'PDF 206 KB',
        dateLabel: 'Aktualizacja',
        date: '05.03.2026',
        icon: 'file-text',
        href: '/Licencja transportowa PL.pdf',
      },
      {
        id: 'licencja-transportowa-eu',
        title: 'Licencja Transportowa EU',
        description: 'Zezwolenie na wykonywanie przewozów drogowych na terenie Unii Europejskiej.',
        size: 'PDF 633 KB',
        dateLabel: 'Aktualizacja',
        date: '05.03.2026',
        icon: 'file-text',
        href: '/Licencja transportowa EU.pdf',
      },
    ],
  },
  {
    id: 'polisy',
    title: 'Polisy i Ubezpieczenia',
    documents: [
      {
        id: 'ubezpieczenie',
        title: 'Ubezpieczenie',
        description: 'Aktualna polisa ubezpieczeniowa.',
        size: 'PDF 392 KB',
        dateLabel: 'Aktualizacja',
        date: '05.03.2026',
        icon: 'shield',
        href: '/Ubezpieczenie.pdf',
      },
    ],
  },
];
