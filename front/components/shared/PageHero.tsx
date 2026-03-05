import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  titleFirst: string;
  titleHighlight: string;
  titleBreak?: boolean;
  description?: string;
  eyebrow?: string;
  breadcrumb?: BreadcrumbItem[];
  backgroundImage?: string;
  backgroundImageAlt?: string;
  layout?: 'default' | 'split';
  height?: string;
  scrollToId?: string;
}

export default function PageHero({
  titleFirst,
  titleHighlight,
  titleBreak = false,
  description,
  eyebrow,
  breadcrumb,
  backgroundImage,
  backgroundImageAlt = '',
  layout = 'default',
  height,
  scrollToId,
}: PageHeroProps) {
  const hasImage = !!backgroundImage;
  const heightClass = height ?? (hasImage ? 'h-[400px]' : 'min-h-[80vh]');

  return (
    <header
      className={`relative w-full ${heightClass} flex flex-col justify-end overflow-hidden ${
        hasImage ? '' : 'bg-secondary'
      }`}
    >
      {hasImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className="object-cover blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]"
            aria-hidden="true"
          />
        </>
      )}

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 ${
          hasImage ? 'pb-8' : 'pb-20 pt-40'
        }`}
      >
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Ścieżka nawigacji"
            className="flex items-center gap-1.5 text-sm text-gray-400 mb-12"
          >
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight size={14} className="text-gray-600" aria-hidden="true" />
                )}
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div
          className={
            layout === 'split'
              ? 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10'
              : ''
          }
        >
          <div className={layout === 'split' ? 'max-w-2xl' : ''}>
            {eyebrow && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" aria-hidden="true" />
                <span className="text-primary font-semibold tracking-wider uppercase text-xs">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1
              className={`font-display font-extrabold text-white tracking-tight leading-[1.05] ${
                hasImage
                  ? 'text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-2xl'
                  : 'text-5xl md:text-6xl lg:text-7xl'
              }`}
            >
              {titleFirst}
              {titleBreak ? <br /> : ' '}
              <span className="text-primary">{titleHighlight}</span>
            </h1>

            {description && layout === 'default' && (
              <p
                className={
                  hasImage
                    ? 'text-lg text-white/80 max-w-xl font-light drop-shadow-md tracking-wide'
                    : 'text-gray-400 text-lg leading-relaxed'
                }
              >
                {description}
              </p>
            )}
          </div>

          {layout === 'split' && description && (
            <div className="max-w-md lg:pb-2">
              <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            </div>
          )}
        </div>

        {!hasImage && (
          <div className="mt-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" aria-hidden="true" />
            {scrollToId ? (
              <>
                <style>{`
                  @keyframes arrowFly {
                    0%   { transform: translateY(-16px); opacity: 0; }
                    25%  { opacity: 1; }
                    75%  { opacity: 1; }
                    100% { transform: translateY(16px);  opacity: 0; }
                  }
                  @keyframes circleGlow {
                    0%, 100% { box-shadow: 0 0 12px 3px rgba(0,174,239,0.20); }
                    50%       { box-shadow: 0 0 28px 10px rgba(0,174,239,0.50); }
                  }
                `}</style>
                <a
                  href={`#${scrollToId}`}
                  aria-label="Przejdź do formularza"
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-full border border-primary/50 bg-primary/10 overflow-hidden flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300"
                    style={{ animation: 'circleGlow 2s ease-in-out infinite' }}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      size={22}
                      className="text-primary absolute"
                      style={{ animation: 'arrowFly 1.6s ease-in-out infinite' }}
                    />
                  </div>
                  <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-300">
                    Formularz
                  </span>
                </a>
              </>
            ) : (
              <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            )}
          </div>
        )}
      </div>
    </header>
  );
}
