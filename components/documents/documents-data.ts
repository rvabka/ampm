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
        id: 'licencja-transportowa',
        title: 'Licencja Transportowa',
        description: 'Zezwolenie na wykonywanie zawodu przewoźnika drogowego.',
        size: 'PDF 1.2 MB',
        dateLabel: 'Aktualizacja',
        date: '02.01.2024',
        icon: 'file-text',
        href: '#',
      },
      {
        id: 'certyfikat-euro6',
        title: 'Certyfikat Euro 6',
        description: 'Potwierdzenie spełniania norm emisji spalin dla floty.',
        size: 'PDF 0.8 MB',
        dateLabel: 'Aktualizacja',
        date: '15.03.2024',
        icon: 'file-text',
        href: '#',
      },
      {
        id: 'certyfikat-iso9001',
        title: 'Certyfikat ISO 9001',
        description: 'System zarządzania jakością w transporcie i spedycji.',
        size: 'PDF 2.4 MB',
        dateLabel: 'Aktualizacja',
        date: '10.01.2024',
        icon: 'file-text',
        href: '#',
      },
    ],
  },
  {
    id: 'polisy',
    title: 'Polisy i Ubezpieczenia',
    documents: [
      {
        id: 'polisa-ocp',
        title: 'Polisa OCP Przewoźnika',
        description:
          'Ubezpieczenie odpowiedzialności cywilnej przewoźnika do 300 000 EUR.',
        size: 'PDF 3.1 MB',
        dateLabel: 'Ważna do',
        date: '31.12.2025',
        icon: 'shield',
        href: '#',
      },
      {
        id: 'zaswiadczenie-niekaralnosc',
        title: 'Zaświadczenie o niekaralności',
        description: 'Aktualne zaświadczenie z Krajowego Rejestru Karnego.',
        size: 'PDF 1.5 MB',
        dateLabel: 'Aktualizacja',
        date: '20.02.2024',
        icon: 'badge-check',
        href: '#',
      },
      {
        id: 'ubezpieczenie-kabotaz',
        title: 'Ubezpieczenie Kabotażowe',
        description: 'Rozszerzenie polisy na przewozy wewnątrz krajów UE.',
        size: 'PDF 1.1 MB',
        dateLabel: 'Ważna do',
        date: '30.06.2025',
        icon: 'shield-plus',
        href: '#',
      },
    ],
  },
];
