'use client';

import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES, type FaqCategoryId } from './faq-data';

export default function FaqList() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = FAQ_ITEMS.filter(item => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Baza wiedzy
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Odpowiedzi na Twoje pytania
          </h2>
        </div>

        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div
            role="group"
            aria-label="Filtruj pytania według kategorii"
            className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden w-full md:w-auto"
          >
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search
              size={18}
              className="absolute inset-y-0 left-3 my-auto text-gray-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Czego szukasz?"
              aria-label="Wyszukaj w FAQ"
              className="w-full py-2.5 pl-10 pr-4 text-sm text-secondary bg-white border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400 transition"
            />
          </div>
        </div>

        
        {filtered.length > 0 ? (
          <div className="space-y-3" role="list" aria-live="polite">
            {filtered.map(item => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                role="listitem"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-5 bg-gray-50 hover:bg-gray-100 transition-colors gap-4">
                    <span className="text-base md:text-lg font-bold text-secondary leading-snug">
                      {item.question}
                    </span>
                    <Plus
                      size={22}
                      className="text-primary shrink-0 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-16"
            role="status"
            aria-live="polite"
          >
            <p className="text-gray-400 text-lg">
              Nie znaleziono pytań pasujących do{' '}
              <span className="font-semibold text-secondary">
                &ldquo;{searchQuery}&rdquo;
              </span>
              .
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Wyczyść filtry
            </button>
          </div>
        )}

        
        {filtered.length > 0 && (searchQuery || activeCategory !== 'all') && (
          <p className="mt-6 text-xs text-gray-400 text-center">
            Wyświetlono {filtered.length} z {FAQ_ITEMS.length} pytań
          </p>
        )}
      </div>
    </section>
  );
}
