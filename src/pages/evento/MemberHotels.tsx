import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { memberHotels } from '../../data/evento';
import { SmartImage } from '../../components/SmartImage';
import { ArrowLabel } from '../../components/ArrowLabel';
import { ArrowBig } from '../../components/Icons';
import './MemberHotels.css';

const Bed = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M1.5 4v9M1.5 10h13V13M14.5 10V8.5a2 2 0 0 0-2-2H7v3.5M3.5 8.3a1.2 1.2 0 1 0 0-.01" />
  </svg>
);

const People = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="6" cy="5" r="2.4" />
    <path d="M1.5 13.5c.4-2.4 2.2-3.8 4.5-3.8s4.1 1.4 4.5 3.8M10.5 3a2.3 2.3 0 0 1 0 4.4M12.3 9.9c1.2.5 2 1.7 2.2 3.6" />
  </svg>
);

const Pin = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 14.5s4.8-4.2 4.8-8A4.8 4.8 0 0 0 3.2 6.5c0 3.8 4.8 8 4.8 8Z" />
    <circle cx="8" cy="6.4" r="1.7" />
  </svg>
);

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

const Icon = ({ children }: { children: ReactNode }) => (
  <span className="hotel__icon" aria-hidden="true">
    {children}
  </span>
);

/**
 * Infraestructura para eventos: el venue destacado y los hoteles en un carrusel
 * (flechas, puntos y desplazamiento táctil con "snap"). Sin avance automático.
 */
export function MemberHotels() {
  const { venue, hotels, labels } = memberHotels;
  const track = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const t = track.current;
    if (!t) return;
    // 7 hoteles con 3 por vista = 3 páginas (la última, incompleta, también cuenta)
    const total = Math.max(1, Math.ceil(t.scrollWidth / t.clientWidth - 0.05));
    const atEnd = t.scrollLeft >= t.scrollWidth - t.clientWidth - 2;
    setPages(total);
    setPage(atEnd ? total - 1 : Math.min(total - 1, Math.round(t.scrollLeft / t.clientWidth)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const goTo = (i: number) => {
    const t = track.current;
    if (!t) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollTo({ left: i * t.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section className="hotels" aria-labelledby="hotels-title">
      <div className="container">
        <h2 id="hotels-title" className="section-title hotels__title">
          {memberHotels.title}
        </h2>

        {/* Venue destacado */}
        <h3 className="hotels__group">{memberHotels.venuesHeading}</h3>
        <article className="venue">
          <div className="venue__media">
            <SmartImage {...venue.photo} className="venue__photo" />
          </div>
          <div className="venue__body">
            <h4 className="venue__name">{venue.name}</h4>
            <div>
              <p className="venue__fact">
                <Icon>
                  <People />
                </Icon>
                {labels.capacity}
              </p>
              <p className="venue__capacity">{venue.capacity}</p>
            </div>
            <a href={venue.href} className="hotel__cta venue__cta" {...external}>
              <ArrowLabel size={12}>{memberHotels.cta}</ArrowLabel>
              <span className="visually-hidden"> sobre {venue.name} (abre en una pestaña nueva)</span>
            </a>
          </div>
        </article>

        {/* Hoteles */}
        <div className="hotels__head">
          <h3 className="hotels__group">{memberHotels.hotelsHeading}</h3>
          {pages > 1 && (
            <div className="hotels__arrows">
              <button type="button" aria-label="Hoteles anteriores" disabled={page === 0} onClick={() => goTo(page - 1)}>
                <ArrowBig dir="left" />
              </button>
              <button type="button" aria-label="Hoteles siguientes" disabled={page === pages - 1} onClick={() => goTo(page + 1)}>
                <ArrowBig dir="right" />
              </button>
            </div>
          )}
        </div>

        <ul ref={track} className="hotels__track" tabIndex={0} aria-label="Hoteles miembro" onScroll={measure}>
          {hotels.map((h) => (
            <li key={h.id} className="hotel">
              <div className="hotel__media">
                <SmartImage {...h.photo} className="hotel__photo" />
              </div>
              <div className="hotel__body">
                <h4 className="hotel__name">{h.name}</h4>
                <dl className="hotel__facts">
                  <div>
                    <dt>
                      <Icon>
                        <Bed />
                      </Icon>
                      {labels.rooms}
                    </dt>
                    <dd>{h.rooms}</dd>
                  </div>
                  {h.venues && (
                    <div>
                      <dt>
                        <Icon>
                          <People />
                        </Icon>
                        {labels.venues}
                      </dt>
                      <dd>{h.venues}</dd>
                    </div>
                  )}
                  <div>
                    <dt>
                      <Icon>
                        <Pin />
                      </Icon>
                      {labels.address}
                    </dt>
                    <dd>{h.address}</dd>
                  </div>
                </dl>
                <a href={h.href} className="hotel__cta" {...external}>
                  <ArrowLabel size={12}>{memberHotels.cta}</ArrowLabel>
                  <span className="visually-hidden"> sobre {h.name} (abre en una pestaña nueva)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <div className="hotels__dots">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`hotels__dot ${i === page ? 'is-active' : ''}`}
                aria-label={`Ver hoteles, página ${i + 1} de ${pages}`}
                aria-current={i === page ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
