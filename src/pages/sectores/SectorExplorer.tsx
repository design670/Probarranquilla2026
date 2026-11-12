import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { manufacturing, sectorIds, services, type MiniCard } from '../../data/sectores';
import { SmartImage, type ImageAsset } from '../../components/SmartImage';
import { ArrowRight } from '../../components/Icons';
import './SectorExplorer.css';

const svg = { viewBox: '0 0 16 16', width: 14, height: 14, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const Sun = () => (
  <svg {...svg} width={16} height={16}>
    <circle cx="8" cy="8" r="2.6" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
  </svg>
);

type Group = 'manufactura' | 'servicios';

type Sector = {
  id: string;
  group: Group;
  /** Nombre corto de la tarjeta del selector */
  label: string;
  title: string;
  tagline: string;
  text: string;
  image: ImageAsset;
  imageLabel?: string;
  /** Contenido propio del sector, bajo el párrafo */
  extra?: ReactNode;
};

/** Pasos de la cadena (alimentos, materiales): punto de color + título + texto. */
function Steps({ items }: { items: MiniCard[] }) {
  return (
    <ul className="sx-steps">
      {items.map((m) => (
        <li key={m.title.join(' ')} className={`sx-step sx-step--${m.tone}`}>
          <strong>{m.title.join(' ')}</strong>
          <span>{m.text.join(' ')}</span>
        </li>
      ))}
    </ul>
  );
}

const { chemicals, food, materials } = manufacturing;
const { energy, bpo, mro } = services;

const SECTORS: Sector[] = [
  {
    id: sectorIds.quimicos,
    group: 'manufactura',
    label: 'Químicos y Ciencias de la Vida',
    title: chemicals.title.join(' '),
    tagline: chemicals.tagline,
    text: chemicals.text,
    image: chemicals.image,
  },
  {
    id: sectorIds.alimentos,
    group: 'manufactura',
    label: food.title,
    title: food.title,
    tagline: food.tagline,
    text: food.text,
    image: food.image,
    extra: (
      <>
        <Steps items={food.steps} />
        <div className="sx-note">
          <strong>{food.highlight.title}</strong>
          <span>{food.highlight.text}</span>
        </div>
      </>
    ),
  },
  {
    id: sectorIds.materiales,
    group: 'manufactura',
    label: materials.title,
    title: materials.title,
    tagline: materials.tagline,
    text: materials.text,
    image: materials.image,
    extra: <Steps items={materials.steps} />,
  },
  {
    id: sectorIds.energia,
    group: 'servicios',
    label: energy.title,
    title: energy.title,
    tagline: energy.tagline,
    text: energy.text,
    image: energy.image,
    imageLabel: energy.imageLabel,
    extra: (
      <ul className="sx-features">
        {energy.features.map((f) => (
          <li key={f.title}>
            <span className={`sx-features__icon sx-features__icon--${f.tone}`}>{f.icon === 'sun' ? <Sun /> : <ArrowRight />}</span>
            <span>
              <strong>{f.title}</strong>
              <span>{f.text}</span>
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: sectorIds.bpo,
    group: 'servicios',
    label: 'BPO/KPO & IT',
    title: bpo.title,
    tagline: bpo.tagline,
    text: bpo.text,
    image: bpo.image,
    extra: (
      <div className="sx-callout">
        <p className="sx-callout__question">{bpo.question.join(' ')}</p>
        <p className="sx-callout__text">{bpo.support}</p>
      </div>
    ),
  },
  {
    id: sectorIds.mro,
    group: 'servicios',
    label: 'Servicios aeronáuticos (MRO)',
    title: mro.title.join(' '),
    tagline: mro.tagline,
    text: mro.text,
    image: mro.image,
  },
];

const GROUPS: { id: Group; anchor: string; title: string; text: string }[] = [
  { id: 'manufactura', anchor: sectorIds.manufactura, title: manufacturing.title, text: manufacturing.text },
  { id: 'servicios', anchor: sectorIds.servicios, title: services.title.join(' '), text: services.text },
];

const indexFromHash = () => {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const i = SECTORS.findIndex((s) => s.id === hash);
  if (i >= 0) return i;
  // Ancla de un grupo: abre su primer sector
  if (hash === sectorIds.servicios) return SECTORS.findIndex((s) => s.group === 'servicios');
  return 0;
};

/**
 * Selector de sectores: seis tarjetas en dos grupos y, debajo, el sector elegido
 * (foto + texto). Las anclas del menú (#energia, #mro…) abren el sector correspondiente.
 */
export function SectorExplorer() {
  const [active, setActive] = useState(indexFromHash);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const sector = SECTORS[active];

  // Enlaces del menú dentro de la misma página (/sectores/#mro)
  useEffect(() => {
    const onHash = () => {
      setActive(indexFromHash());
      document.getElementById('sectores-explorer')?.scrollIntoView({ block: 'start' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // En móvil la franja de tarjetas se desliza para mostrar la activa (sin mover la página)
  useEffect(() => {
    const tab = tabs.current[active];
    const strip = tab?.closest<HTMLElement>('.sx-picker');
    if (!tab || !strip || strip.scrollWidth <= strip.clientWidth) return;
    const left = tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: SECTORS.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = (moves[e.key] + SECTORS.length) % SECTORS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="sectores-explorer" className="sx" aria-label="Sectores de inversión">
      <div className="container">
        <div className="sx-picker">
          {GROUPS.map((g) => (
            <div key={g.id} className={`sx-group sx-group--${g.id}`}>
              <div id={g.anchor} className="sx-group__head">
                <p className="sx-group__title">{g.title}</p>
                <p className="sx-group__text">{g.text}</p>
              </div>
              <div className="sx-group__tabs" role="tablist" aria-label={`Sectores de ${g.title}`}>
                {SECTORS.map((s, i) =>
                  s.group !== g.id ? null : (
                    <button
                      key={s.id}
                      id={s.id}
                      ref={(el) => {
                        tabs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      aria-controls={`${uid}-panel`}
                      tabIndex={i === active ? 0 : -1}
                      className="sx-tab"
                      onClick={() => setActive(i)}
                      onKeyDown={onKeyDown}
                    >
                      <span className="sx-tab__num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="sx-tab__label">{s.label}</span>
                    </button>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={sector.id} className={`sx-panel sx-panel--${sector.group}`}>
          {/* key: el contenido entra con su animación al cambiar de sector */}
          <div key={sector.id} className="sx-panel__inner">
            <div className="sx-panel__media">
              <SmartImage {...sector.image} className="sx-panel__img" />
              {sector.imageLabel && <span className="sx-panel__tag">{sector.imageLabel}</span>}
            </div>
            <div className="sx-panel__body">
              <h2 className="sx-panel__title">{sector.title}</h2>
              <p className="sx-panel__tagline">{sector.tagline}</p>
              <p className="sx-panel__text">{sector.text}</p>
              {sector.extra}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
