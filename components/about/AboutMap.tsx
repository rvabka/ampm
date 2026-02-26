'use client';

import { CircleCheck } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';

const routeDescriptions = [
  'Regularne trasy Polska - Niemcy - Francja - Hiszpania',
  'Obsługa rynków Skandynawskich',
  'Południe Europy: Włochy i Bałkany',
];

const EU_CODES = new Set([
  '040','056','100','112','191','196','203','208','233','246','250',
  '276','300','348','352','372','380','428','440','442','470','499',
  '528','578','616','620','642','688','703','705','724','752','756',
  '804','807','826','008','070',
]);

const cities: { name: string; coords: [number, number]; isHQ?: boolean }[] = [
  { name: 'Lublin',    coords: [22.5684, 51.2465], isHQ: true },
  { name: 'Berlin',    coords: [13.4050, 52.5200] },
  { name: 'Paryż',     coords: [2.3522,  48.8566] },
  { name: 'Madryt',    coords: [-3.7038, 40.4168] },
  { name: 'Rzym',      coords: [12.4964, 41.9028] },
  { name: 'Sztokholm', coords: [18.0686, 59.3293] },
  { name: 'Bukareszt', coords: [26.1025, 44.4268] },
];

const routeSegments: [string, string][][] = [
  [['Lublin','Berlin'],['Berlin','Paryż'],['Paryż','Madryt']],
  [['Lublin','Berlin'],['Berlin','Rzym']],
  [['Lublin','Sztokholm']],
  [['Lublin','Bukareszt']],
];

const SVG_W = 500;
const SVG_H = 400;

export default function AboutMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [countries, setCountries] = useState<FeatureCollection<Geometry> | null>(null);

  const projection = useMemo(
    () =>
      geoMercator()
        .center([15, 54])
        .scale(450)
        .translate([SVG_W / 2, SVG_H / 2]),
    []
  );
  const pathGen = useMemo(() => geoPath().projection(projection), [projection]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then((topo: Topology) => {
        const fc = feature(
          topo,
          topo.objects.countries as GeometryCollection
        ) as FeatureCollection<Geometry>;
        setCountries(fc);
      })
      .catch(err => console.error('[AboutMap] failed to load map data', err));
  }, []);

  const projectedCities = useMemo(
    () =>
      cities.map(c => {
        const [x, y] = projection(c.coords) ?? [0, 0];
        return { ...c, x, y };
      }),
    [projection]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function cityXY(name: string) {
    return projectedCities.find(c => c.name === name)!;
  }

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(circle,rgba(255,255,255,.3) 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <style>{`
        @keyframes mapDraw{to{stroke-dashoffset:0}}
        @keyframes mapFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{r:4.5}50%{r:6.5}}
        @keyframes ring{0%{r:6;opacity:.7}100%{r:16;opacity:0}}
        @keyframes glow{0%,100%{opacity:.15}50%{opacity:.4}}
        .eu-path{transition:fill .3s ease,stroke .3s ease}
        .eu-path:hover{fill:rgba(0,174,239,.35)!important;stroke:rgba(0,174,239,.8)!important}
        .route-seg{stroke-dasharray:6 4;stroke-dashoffset:200;animation:mapDraw 2.5s ease-out forwards}
        .city-lbl{animation:mapFade .6s ease-out both}
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">
            Logistyka&nbsp;bez&nbsp;granic
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
            Zasięg Operacyjny
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Operujemy na terenie całej Unii Europejskiej oraz krajów stowarzyszonych.
            Nasze główne szlaki transportowe łączą Europę Zachodnią z Europą
            Środkowo-Wschodnią, zapewniając płynny przepływ towarów każdego dnia.
          </p>
          <ul className="space-y-4">
            {routeDescriptions.map(r => (
              <li key={r} className="flex items-center text-gray-300">
                <CircleCheck size={20} className="text-primary mr-3 shrink-0" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div
            className="relative w-full bg-surface-dark/30 rounded-2xl border border-gray-700 backdrop-blur-sm overflow-hidden"
            style={{ aspectRatio: '5/4' }}
          >
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle,rgba(0,174,239,.12) 0%,transparent 70%)',
                animation: 'glow 4s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle,rgba(0,174,239,.08) 0%,transparent 70%)',
                animation: 'glow 4s ease-in-out 2s infinite',
              }}
            />

            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full h-full relative z-10"
              aria-label="Animowana mapa Europy z trasami transportowymi AMPM"
              role="img"
            >
              {countries?.features.map((feat, idx) => {
                const id = String(feat.id ?? '');
                const isEU = EU_CODES.has(id);
                const d = pathGen(feat);
                if (!d) return null;
                return (
                  <path
                    key={id || `country-${idx}`}
                    d={d}
                    className="eu-path"
                    fill={isEU ? 'rgba(0,174,239,0.18)' : 'rgba(100,116,139,0.06)'}
                    stroke={isEU ? 'rgba(0,174,239,0.5)' : 'rgba(100,116,139,0.1)'}
                    strokeWidth={isEU ? 0.7 : 0.25}
                    strokeLinejoin="round"
                  />
                );
              })}

              {visible && routeSegments.map((segs, ri) =>
                segs.map(([a, b], si) => {
                  const from = cityXY(a);
                  const to = cityXY(b);
                  return (
                    <line
                      key={`g-${ri}-${si}`}
                      x1={from.x} y1={from.y}
                      x2={to.x}   y2={to.y}
                      stroke="#00aeef"
                      strokeWidth={5}
                      strokeOpacity={0.07}
                      strokeLinecap="round"
                      className="route-seg"
                      style={{ animationDelay: `${0.3 + ri * 0.5 + si * 0.3}s` }}
                    />
                  );
                })
              )}

              {visible && routeSegments.map((segs, ri) =>
                segs.map(([a, b], si) => {
                  const from = cityXY(a);
                  const to = cityXY(b);
                  return (
                    <line
                      key={`r-${ri}-${si}`}
                      x1={from.x} y1={from.y}
                      x2={to.x}   y2={to.y}
                      stroke="#00aeef"
                      strokeWidth={1.5}
                      strokeOpacity={0.55}
                      strokeLinecap="round"
                      className="route-seg"
                      style={{ animationDelay: `${0.3 + ri * 0.5 + si * 0.3}s` }}
                    />
                  );
                })
              )}

              {projectedCities.map((c, ci) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r={12} fill="#00aeef" opacity={0.06} />

                  {c.isHQ ? (
                    <>
                      <circle cx={c.x} cy={c.y} r={6} fill="none" stroke="#00aeef"
                        strokeWidth={1.5} opacity={0.7}
                        style={{ animation: 'ring 2s ease-out infinite' }}
                      />
                      <circle cx={c.x} cy={c.y} r={6} fill="none" stroke="#00aeef"
                        strokeWidth={1} opacity={0.5}
                        style={{ animation: 'ring 2s ease-out 1s infinite' }}
                      />
                      <circle cx={c.x} cy={c.y} r={4.5} fill="#00aeef"
                        style={{ animation: 'pulse 2s ease-in-out infinite' }}
                      />
                      <circle cx={c.x} cy={c.y} r={1.8} fill="#fff" opacity={0.9} />
                    </>
                  ) : (
                    <>
                      <circle cx={c.x} cy={c.y} r={3.5} fill="#fff" opacity={0.9} />
                      <circle cx={c.x} cy={c.y} r={1.5} fill="#00aeef" />
                    </>
                  )}

                  {visible && (
                    <text
                      x={c.x} y={c.y - 14}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={c.isHQ ? 13 : 11}
                      fontWeight={c.isHQ ? 700 : 600}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      className="city-lbl"
                      style={{
                        animationDelay: `${1 + ci * 0.12}s`,
                        textShadow: '0 1px 4px rgba(0,0,0,.9)',
                      }}
                    >
                      {c.name}
                    </text>
                  )}

                  {c.isHQ && visible && (
                    <text
                      x={c.x} y={c.y - 28}
                      textAnchor="middle"
                      fill="#00aeef"
                      fontSize={7}
                      fontWeight={700}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      className="city-lbl"
                      style={{
                        animationDelay: '1.4s',
                        textShadow: '0 1px 3px rgba(0,0,0,.9)',
                        letterSpacing: '1.2px',
                      }}
                    >
                      ● BAZA
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
