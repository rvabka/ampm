import { FileText, Shield, BadgeCheck, ShieldPlus, Download } from 'lucide-react';
import { DOCUMENT_CATEGORIES, type DocumentIconKey } from './documents-data';

const iconMap: Record<DocumentIconKey, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: 'true' }>> = {
  'file-text': FileText,
  'shield': Shield,
  'badge-check': BadgeCheck,
  'shield-plus': ShieldPlus,
};

export default function DocumentsList() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light"
      aria-label="Lista dokumentów do pobrania"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {DOCUMENT_CATEGORIES.map(category => (
          <div key={category.id}>
            
            <div
              className="flex items-center gap-4 mb-10"
              id={`category-${category.id}`}
            >
              <span
                className="w-1.5 h-8 bg-secondary rounded-full shrink-0"
                aria-hidden="true"
              />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                {category.title}
              </h2>
            </div>

            
            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              aria-labelledby={`category-${category.id}`}
            >
              {category.documents.map(doc => {
                const Icon = iconMap[doc.icon];
                return (
                  <li key={doc.id}>
                    <article className="group bg-white h-full flex flex-col justify-between p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className="bg-gray-100 p-4 rounded-xl group-hover:bg-gray-200 transition-colors">
                            <Icon
                              size={32}
                              className="text-secondary"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                            {doc.size}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {doc.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-6">
                        <span className="text-xs text-gray-400">
                          <span className="sr-only">{doc.dateLabel}: </span>
                          {doc.dateLabel}: {doc.date}
                        </span>
                        <a
                          href={doc.href}
                          className="flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary transition-colors"
                          aria-label={`Pobierz dokument: ${doc.title} (${doc.size})`}
                          download
                        >
                          Pobierz
                          <Download
                            size={16}
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
