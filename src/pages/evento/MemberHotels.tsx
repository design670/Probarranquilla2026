import { useCallback, useEffect, useRef, useState } from 'react';
import { memberHotels } from '../../data/evento';
import { SmartImage } from '../../components/SmartImage';
import './MemberHotels.css';

const Star = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 1.8 1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.8Z" />
  </svg>
);

const Bed = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M1.5 4v9M1.5 10h13V13M14.5 10V8.5a2 2 0 0 0-2-2H7v3.5M3.5 8.3a1.2 1.2 0 1 0 0-.01" />
  </svg>
);

const People = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="6" cy="5" r="2.4" />
    <path d="M1.5 13.5c.4-2.4 2.2-3.8 4.5-3.8s4.1 1.4 4.5 3.8M10.5 3a2.3 2.3 0 0 1 0 4.4M12.3 9.9c1.2.5 2 1.7 2.2 3.6" />
  </svg>
);

/**
 * Carrusel de hoteles: desplazamiento horizontal con "snap" (táctil y teclado
 * nativos). Los puntos salen de las páginas reales: con todas las tarjetas a
 * la vista no se muestran. Sin avance automático.
 */
export function MemberHotels() {
  const track = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const total = Math.max(1, Math.round(t.scrollWidth / t.clientWidth));
    setPages(total);
    setPage(Math.min(total - 1, Math.round(t.scrollLeft / t.clientWidth)));
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
          {memberHotels.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>

        <ul ref={track} className="hotels__track" tabIndex={0} aria-label="Hoteles miembro" onScroll={measure}>
          {memberHotels.hotels.map((h) => (
            <li key={h.id} className="hotel">
              <SmartImage {...h.photo} className="hotel__photo" />
              <div className="hotel__body">
                <p className="hotel__location">{h.location}</p>
                <h3 className="hotel__name">{h.name}</h3>
                <p className="hotel__meta">
                  <span className="hotel__stars" role="img" aria-label={`${h.stars} estrellas`}>
                    {Array.from({ length: h.stars }, (_, i) => (
                      <Star key={i} />
                    ))}
                  </span>
                  <span className="hotel__descriptor">• {h.descriptor}</span>
                </p>
                <dl className="hotel__facts">
                  <div>
                    <dt>
                      <Bed /> {memberHotels.capacityLabel}
                    </dt>
                    <dd>{h.rooms}</dd>
                  </div>
                  <div>
                    <dt>
                      <People /> {memberHotels.venuesLabel}
                    </dt>
                    <dd>{h.venues}</dd>
                  </div>
                </dl>
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
