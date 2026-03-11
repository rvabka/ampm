'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  Briefcase,
  Banknote,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';
import type { Job } from '@/src/sanity/types';

interface CareerJobsSectionProps {
  jobs: Job[];
}

const TYPE_LABELS: Record<string, string> = {
  'full-time': 'Pełen etat',
  'part-time': 'Część etatu',
  contract: 'Kontrakt',
  b2b: 'B2B',
  internship: 'Staż',
};

const TYPE_COLORS: Record<string, string> = {
  'full-time': 'bg-green-100 text-green-700',
  'part-time': 'bg-blue-100 text-blue-700',
  contract: 'bg-purple-100 text-purple-700',
  b2b: 'bg-orange-100 text-orange-700',
  internship: 'bg-yellow-100 text-yellow-700',
};

function getTypeLabel(type: string) {
  return TYPE_LABELS[type] ?? type;
}

function getTypeColor(type: string) {
  return TYPE_COLORS[type] ?? 'bg-gray-100 text-gray-600';
}

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  function handleApply() {
    const params = new URLSearchParams();
    params.set('position', job.title);
    if (job.region) params.set('region', job.region);
    router.push(`/kariera?${params.toString()}`);
    setTimeout(() => {
      const el = document.getElementById('aplikuj');
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 80);
  }

  const hasList = (arr?: string[]) => Array.isArray(arr) && arr.length > 0;

  return (
    <article
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        job.featured
          ? 'border-primary/40 shadow-lg shadow-primary/10'
          : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
      }`}
    >
      {/* Top bar */}
      <div className="p-6 pb-0">
        {job.featured && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary bg-primary/8 px-3 py-1 rounded-full mb-3">
            <Star size={11} aria-hidden="true" />
            Wyróżnione
          </span>
        )}

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-display font-bold text-secondary leading-snug">
              {job.title}
            </h3>
            {job.category && (
              <p className="text-xs text-gray-400 mt-0.5 font-medium">{job.category}</p>
            )}
          </div>
          <span
            className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${getTypeColor(job.type)}`}
          >
            {getTypeLabel(job.type)}
          </span>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
          {job.location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary shrink-0" aria-hidden="true" />
              {job.location}
            </span>
          )}
          {job.region && (
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-gray-400 shrink-0" aria-hidden="true" />
              {job.region}
            </span>
          )}
          {job.salary && (
            <span className="flex items-center gap-1.5 font-semibold text-secondary">
              <Banknote size={14} className="text-primary shrink-0" aria-hidden="true" />
              {job.salary}
            </span>
          )}
        </div>

        {/* Short description */}
        {job.description && (
          <p className="mt-4 text-sm text-gray-500 leading-relaxed line-clamp-2">
            {job.description}
          </p>
        )}
      </div>

      {/* Expandable details */}
      {expanded && (
        <div className="px-6 pt-5 space-y-5">
          {hasList(job.requirements) && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Wymagania
              </h4>
              <ul className="space-y-1.5">
                {job.requirements!.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasList(job.responsibilities) && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Zakres obowiązków
              </h4>
              <ul className="space-y-1.5">
                {job.responsibilities!.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasList(job.benefits) && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Co oferujemy
              </h4>
              <ul className="space-y-1.5">
                {job.benefits!.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="p-6 pt-5 flex items-center justify-between gap-3 flex-wrap">
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-secondary transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} aria-hidden="true" /> Zwiń szczegóły
            </>
          ) : (
            <>
              <ChevronDown size={14} aria-hidden="true" /> Szczegóły oferty
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleApply}
          className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/25 hover:bg-primary-hover hover:shadow-primary/40 transition-all duration-200 cursor-pointer"
        >
          Aplikuj
          <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function CareerJobsSection({ jobs }: CareerJobsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(jobs.map(j => j.category).filter(Boolean)));
    return cats as string[];
  }, [jobs]);

  const types = useMemo(() => {
    return Array.from(new Set(jobs.map(j => j.type).filter(Boolean)));
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter(j => {
      const catOk = activeCategory === 'all' || j.category === activeCategory;
      const typeOk = activeType === 'all' || j.type === activeType;
      return catOk && typeOk;
    });
  }, [jobs, activeCategory, activeType]);

  const featured = filtered.filter(j => j.featured);
  const regular = filtered.filter(j => !j.featured);

  if (jobs.length === 0) {
    return (
      <section className="py-24 px-6 lg:px-8 bg-background-light" aria-labelledby="jobs-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Oferty pracy
          </span>
          <h2
            id="jobs-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
          >
            Aktualne ogłoszenia
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Aktualnie nie prowadzimy otwartej rekrutacji, ale zawsze chętnie zapoznajemy się
            z nowymi CV. Wyślij zgłoszenie ogólne — odezwiemy się, gdy pojawi się odpowiednia
            okazja.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light"
      id="oferty"
      aria-labelledby="jobs-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Oferty pracy
          </span>
          <h2
            id="jobs-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Aktualne ogłoszenia
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Dołącz do zespołu AMPM — znajdź ofertę dopasowaną do swoich kompetencji i ambicji.
          </p>
        </div>

        {/* Filters */}
        {(categories.length > 1 || types.length > 1) && (
          <div className="flex flex-wrap items-center gap-3 mb-10 justify-center" role="group" aria-label="Filtry ofert">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
              <SlidersHorizontal size={13} aria-hidden="true" /> Filtruj:
            </span>

            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Kategorie">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-secondary text-white border-secondary'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-secondary'
                  }`}
                >
                  Wszystkie kategorie
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-secondary text-white border-secondary'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-secondary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {types.length > 1 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Typ umowy">
                <button
                  type="button"
                  onClick={() => setActiveType('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                    activeType === 'all'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                  }`}
                >
                  Wszystkie typy
                </button>
                {types.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                      activeType === type
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                    }`}
                  >
                    {getTypeLabel(type)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Count */}
        <p className="text-sm text-gray-400 mb-6 text-center">
          Znaleziono{' '}
          <span className="font-semibold text-secondary">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'ofertę' : filtered.length < 5 ? 'oferty' : 'ofert'}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            Brak ofert pasujących do wybranych filtrów.
          </div>
        ) : (
          <>
            {/* Featured jobs */}
            {featured.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Wyróżnione oferty
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featured.map(job => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
              </div>
            )}

            {/* Regular jobs */}
            {regular.length > 0 && (
              <div>
                {featured.length > 0 && (
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Pozostałe oferty
                  </h3>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {regular.map(job => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
