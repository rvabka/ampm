'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown, Globe, Truck, Bus, Snowflake, AlertTriangle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Strona Główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/dla-przewoznika', label: 'Dla Przewoźnika' },
  { href: '/dokumenty', label: 'Dokumenty' },
  { href: '/blog', label: 'Blog' },
  { href: '/kariera', label: 'Kariera' },
  { href: '/kontakt', label: 'Kontakt' }
];

const serviceLinks = [
  { href: '/uslugi/transport-miedzynarodowy', label: 'Transport Międzynarodowy', icon: Globe, desc: 'Cała Europa i poza granicami UE' },
  { href: '/uslugi/transport-krajowy', label: 'Transport Krajowy', icon: Truck, desc: 'Zasięg ogólnopolski' },
  { href: '/uslugi/transport-ekspresowy', label: 'Transport Ekspresowy', icon: Bus, desc: 'Pilne dostawy door-to-door' },
  { href: '/uslugi/transport-chlodniczy', label: 'Transport Chłodniczy', icon: Snowflake, desc: 'Kontrolowana temperatura' },
  { href: '/uslugi/transport-adr', label: 'Transport ADR', icon: AlertTriangle, desc: 'Materiały niebezpieczne' },
];

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = pathname.startsWith('/uslugi');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Główna nawigacja"
        className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 ${
          scrolled ? 'top-3 px-6' : 'pt-4 px-8'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 border rounded-2xl ${
            scrolled
              ? 'bg-secondary/90 backdrop-blur-xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/10 px-6 py-2'
              : 'border-transparent'
          }`}
        >
          <Link
            href="/"
            aria-label="AMPM Spedition – strona główna"
            className="shrink-0 bg-white rounded-full flex items-center justify-center transition-all duration-500"
          >
            <Image
              src="/logo.webp"
              alt="AMPM Spedition"
              width={1140}
              height={601}
              className="object-contain h-16 w-16 lg:h-18 lg:w-18"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 text-[15px] font-medium text-white/90">
            {navLinks.slice(0, 2).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                    ? 'text-primary font-bold hover:text-primary'
                    : 'hover:text-white nav-underline'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Usługi dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(v => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 transition ${
                  isServicesActive
                    ? 'text-primary font-bold'
                    : 'hover:text-white nav-underline'
                }`}
              >
                Usługi
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-72 overflow-hidden">
                    {serviceLinks.map(({ href, label, icon: Icon, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition group ${
                        pathname === href ? 'bg-primary/8 text-primary' : 'hover:bg-gray-50 text-secondary'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight">{label}</p>
                        <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  pathname.startsWith(link.href)
                    ? 'text-primary font-bold hover:text-primary'
                    : 'hover:text-white nav-underline'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wycena"
              className="px-6 py-2.5 bg-primary rounded-full hover:bg-primary-hover transition text-white shadow-lg font-semibold"
            >
              Wycena
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        aria-label="Menu mobilne"
        className={`fixed top-0 right-0 h-full w-[320px] z-70 bg-white flex flex-col transition-transform duration-400 ease-in-out lg:hidden overflow-hidden shadow-[-8px_0_40px_rgba(0,0,0,0.12)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -skew-x-12 transform translate-x-20 z-0 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between px-6 py-1 border-b border-gray-100">
          <Image src="/logo.webp" alt="AMPM Spedition" width={1140} height={601} className="h-20 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Zamknij menu"
            className="p-2 rounded-lg text-secondary/50 hover:text-secondary hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="relative z-10 flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.slice(0, 2).map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-[15px] transition-all ${
                (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                  ? 'bg-primary/10 text-primary'
                  : 'text-secondary/70 hover:bg-gray-50 hover:text-secondary'
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile services expandable */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(v => !v)}
              aria-expanded={mobileServicesOpen}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-[15px] transition-all ${
                isServicesActive ? 'bg-primary/10 text-primary' : 'text-secondary/70 hover:bg-gray-50 hover:text-secondary'
              }`}
            >
              Usługi
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 ml-4 flex flex-col gap-0.5">
                {serviceLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      pathname === href ? 'bg-primary/10 text-primary' : 'text-secondary/70 hover:bg-gray-50 hover:text-secondary'
                    }`}
                  >
                    <Icon size={14} className="text-primary shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-[15px] transition-all ${
                pathname.startsWith(link.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-secondary/70 hover:bg-gray-50 hover:text-secondary'
              }`}
              style={{ animationDelay: `${(i + 3) * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 px-6 pb-4">
          <Link
            href="/wycena"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-primary-hover rounded-xl text-white font-semibold text-[15px] transition shadow-lg shadow-primary/25"
          >
            Zapytaj o wycenę
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative z-10 px-6 py-5 border-t border-gray-100 flex items-center justify-between">
          <p className="text-secondary/40 text-xs tracking-wider uppercase">Obserwuj nas</p>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/profile.php?id=61586839199138" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg text-secondary/40 hover:text-primary hover:bg-primary/8 transition">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/company/ampm-sp-z-o-o/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg text-secondary/40 hover:text-primary hover:bg-primary/8 transition">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/ampmspzoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg text-secondary/40 hover:text-primary hover:bg-primary/8 transition">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
