'use client';

import { useEffect, useRef, useState, CSSProperties, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: AnimationType;
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  type = 'fade-up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${type}${inView ? ' is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
