import { useCallback, useEffect, useRef, useState } from 'react';
import { freeZones, freeZonesIntro } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { ArrowBig } from '../../components/Icons';
import { Eyebrow } from '../../components/Eyebrow';
import './Infrastructure.css'; // estilos de .page-intro
import './FreeZones.css';

/** F. Introducción (franja blanca). Hoy no se usa en la página. */
export function FreeZonesIntro() {
  return (
    <section className="page-intro-section" aria-label="Régimen especial y logística">
      <div className="container page-intro">
        <Eyebrow>{freeZonesIntro.eyebrow}</Eyebrow>
        <p className="page-intro__text">{freeZonesIntro.text}</p>
      </div>
    </section>
  );
}

/**
 * G. Oferta de zonas francas: carrusel como el de hoteles (flechas, puntos y
 * desplazamiento táctil). Todas las tarjetas del mismo tamaño: foto + nombre.
 */
export function FreeZonesOffer() {
  const zones = [...freeZones.featured, ...freeZones.others];
  const track = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const t = track.current;
    if (!t) return;
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
    <section className="zones" aria-labelledby="zones-title">
      <div className="container">
        <h2 id="zones-title" className="section-title zones__title">
          {freeZones.title}
        </h2>

        {pages > 1 && (
          <div className="zones__arrows">
            <button type="button" aria-label="Zonas francas anteriores" disabled={page === 0} onClick={() => goTo(page - 1)}>
              <ArrowBig dir="left" />
            </button>
            <button type="button" aria-label="Zonas francas siguientes" disabled={page === pages - 1} onClick={() => goTo(page + 1)}>
              <ArrowBig dir="right" />
            </button>
          </div>
        )}

        <ul ref={track} className="zones__track" tabIndex={0} aria-label="Zonas francas" onScroll={measure}>
          {zones.map((z) => (
            <li key={z.name} className="zone-card">
              <div className="zone-card__media">
                <SmartImage {...z.photo} className="zone-card__img" />
              </div>
              <h3 className="zone-card__name">{z.name}</h3>
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <div className="zones__dots">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`zones__dot ${i === page ? 'is-active' : ''}`}
                aria-label={`Ver zonas francas, página ${i + 1} de ${pages}`}
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
