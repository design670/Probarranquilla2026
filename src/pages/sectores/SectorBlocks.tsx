import { manufacturing, otherSectors, sectorIds, services, type MiniCard, type Pill } from '../../data/sectores';
import { SmartImage } from '../../components/SmartImage';
import { ArrowLabel } from '../../components/ArrowLabel';
import { ArrowRight } from '../../components/Icons';
import './SectorBlocks.css';

const svg = { viewBox: '0 0 16 16', width: 14, height: 14, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const pillIcons = {
  bolt: <svg {...svg}><path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8l1-5.5Z" /></svg>,
  briefcase: (
    <svg {...svg}>
      <rect x="2" y="4.5" width="12" height="8.5" rx="1.5" />
      <path d="M5.5 4.5V3h5v1.5M2 8.5h12" />
    </svg>
  ),
  gear: (
    <svg {...svg}>
      <circle cx="8" cy="8" r="2.2" />
      <path d="M8 1.8v1.6M8 12.6v1.6M1.8 8h1.6M12.6 8h1.6M3.6 3.6l1.1 1.1M11.3 11.3l1.1 1.1M3.6 12.4l1.1-1.1M11.3 4.7l1.1-1.1" />
    </svg>
  ),
};

const Sun = () => (
  <svg {...svg} width={16} height={16}>
    <circle cx="8" cy="8" r="2.6" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
  </svg>
);

/** Etiquetas informativas (sin enlace: no hay destino definido). */
function Pills({ items, size = 'md' }: { items: Pill[]; size?: 'md' | 'sm' }) {
  return (
    <ul className={`spills spills--${size}`}>
      {items.map((p) => (
        <li key={p.label}>
          {pillIcons[p.icon]}
          {p.label}
        </li>
      ))}
    </ul>
  );
}

/** Tarjetas pequeñas de color con bases alineadas; las `tall` son más altas. */
function MiniCards({ items, className = '' }: { items: MiniCard[]; className?: string }) {
  return (
    <ul className={`minis ${className}`}>
      {items.map((m) => (
        <li key={m.title.join(' ')} className={`mini mini--${m.tone} ${m.tall ? 'mini--tall' : ''}`}>
          <h4 className="mini__title">
            {m.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h4>
          <p className="mini__text">
            {m.text.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Contenido sectorial: cada bloque tiene su propia composición. */
export function SectorBlocks() {
  const { chemicals, food, materials } = manufacturing;
  const { energy, bpo, mro } = services;

  return (
    <div className="sblocks">
      {/* ---------- 01. Manufactura ---------- */}
      <section id={sectorIds.manufactura} className="sblock sbanner sbanner--blue" aria-labelledby="t-manufactura">
        <h2 id="t-manufactura" className="sbanner__title">
          {manufacturing.title}
        </h2>
        <p className="sbanner__text">{manufacturing.text}</p>
        <Pills items={manufacturing.pills} />
      </section>

      <article id={sectorIds.quimicos} className="sblock scard scard--split-left" aria-labelledby="t-quimicos">
        <SmartImage {...chemicals.image} className="scard__img scard__img--tall" />
        <div className="scard__body">
          <h3 id="t-quimicos" className="scard__title">
            {chemicals.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h3>
          <p className="scard__tagline">{chemicals.tagline}</p>
          <p className="scard__text">{chemicals.text}</p>
          {chemicals.cta.href ? (
            <a href={chemicals.cta.href} className="sbtn">
              <ArrowLabel size={13}>{chemicals.cta.label}</ArrowLabel>
            </a>
          ) : (
            <span className="sbtn sbtn--pending" aria-disabled="true" title={import.meta.env.DEV ? 'Ficha del sector pendiente (ver PENDIENTES.md)' : undefined}>
              {chemicals.cta.label} →
            </span>
          )}
        </div>
      </article>

      <article id={sectorIds.alimentos} className="sblock scard scard--pad" aria-labelledby="t-alimentos">
        <h3 id="t-alimentos" className="scard__title">
          {food.title}
        </h3>
        <p className="scard__tagline">{food.tagline}</p>
        <p className="scard__text scard__text--wide">{food.text}</p>
        <MiniCards items={food.steps} className="minis--four" />
        <div className="shighlight">
          <h4 className="shighlight__title">{food.highlight.title}</h4>
          <p className="shighlight__text">{food.highlight.text}</p>
        </div>
      </article>

      <article id={sectorIds.materiales} className="sblock scard scard--pad" aria-labelledby="t-materiales">
        <h3 id="t-materiales" className="scard__title">
          {materials.title}
        </h3>
        <p className="scard__tagline">{materials.tagline}</p>
        <p className="scard__text scard__text--wide">{materials.text}</p>
        <SmartImage {...materials.image} className="scard__img scard__img--wide" />
        <MiniCards items={materials.steps} className="minis--two" />
      </article>

      {/* ---------- 02. Servicios ---------- */}
      <section id={sectorIds.servicios} className="sblock sbanner sbanner--orange" aria-labelledby="t-servicios">
        <h2 id="t-servicios" className="sbanner__title">
          {services.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="sbanner__text">{services.text}</p>
        <Pills items={services.pills} />
      </section>

      <article id={sectorIds.energia} className="sblock scard scard--split-right" aria-labelledby="t-energia">
        <div className="scard__body">
          <h3 id="t-energia" className="scard__title">
            {energy.title}
          </h3>
          <p className="scard__tagline">{energy.tagline}</p>
          <p className="scard__text">{energy.text}</p>
          <ul className="sfeatures">
            {energy.features.map((f) => (
              <li key={f.title} className={`sfeature sfeature--${f.tone}`}>
                <span className="sfeature__icon">{f.icon === 'sun' ? <Sun /> : <ArrowRight />}</span>
                <span>
                  <strong className="sfeature__title">{f.title}</strong>
                  <span className="sfeature__text">{f.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="scard__media">
          <SmartImage {...energy.image} className="scard__img scard__img--tall" />
          <span className="scard__tag">{energy.imageLabel}</span>
        </div>
      </article>

      <article id={sectorIds.bpo} className="sblock scard scard--pad scard--bpo" aria-labelledby="t-bpo">
        <h3 id="t-bpo" className="scard__title">
          {bpo.title}
        </h3>
        <p className="scard__tagline">{bpo.tagline}</p>
        <p className="scard__text scard__text--wide">{bpo.text}</p>
        <div className="scallout">
          <div>
            <p className="scallout__question">
              {bpo.question.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
            <p className="scallout__text">{bpo.support}</p>
          </div>
          <a href={bpo.cta.href} className="sbtn">
            <ArrowLabel size={13}>{bpo.cta.label}</ArrowLabel>
          </a>
        </div>
      </article>

      <article id={sectorIds.mro} className="sblock scard scard--split-right" aria-labelledby="t-mro">
        <div className="scard__body">
          <h3 id="t-mro" className="scard__title scard__title--long">
            {mro.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h3>
          <p className="scard__tagline">{mro.tagline}</p>
          <p className="scard__text">{mro.text}</p>
        </div>
        <div className="scard__media">
          <SmartImage {...mro.image} className="scard__img scard__img--tall" />
        </div>
      </article>

      {/* ---------- 03. Otros ---------- */}
      <section id={sectorIds.otros} className="sblock sbanner sbanner--amber" aria-labelledby="t-otros">
        <h2 id="t-otros" className="sbanner__title">
          {otherSectors.title}
        </h2>
        <p className="sbanner__text">{otherSectors.text}</p>
        <Pills items={otherSectors.pills} size="sm" />
      </section>
    </div>
  );
}
