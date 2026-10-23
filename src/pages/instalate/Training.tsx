import { useCallback, useEffect, useRef, useState } from 'react';
import { training, vision, type TrainingCard } from '../../data/instalate';
import { ArrowBig } from '../../components/Icons';
import './FreeZones.css'; // flechas, pista y puntos del carrusel (mismos que zonas francas)
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import './Training.css';

function Card({ card }: { card: TrainingCard }) {
  return (
    <li className="training-card">
      <div className="training-card__photo">
        <SmartImage {...card.photo} className="training-card__img" />
      </div>
      <h4 className={`training-card__band band-${card.tone}`}>
        <LineIcon name={card.icon} size={22} />
        {card.name}
      </h4>
    </li>
  );
}

/** I. Formación SENA: continuación de Talento (títulos más pequeños que el de la sección) */
export function Training() {
  // Carrusel: mismo comportamiento que la oferta de zonas francas
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
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i: number) => {
    const t = track.current;
    if (!t) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollTo({ left: i * t.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="training" aria-labelledby="training-title">
      <div className="container">
        <header className="training__intro">
          <h3 id="training-title" className="training__title">
            {training.title}
          </h3>
          {training.paragraphs.map((p) => (
            <p key={p} className="training__text">
              {p}
            </p>
          ))}
        </header>

        <h4 className="training__offer-title">{training.offerTitle}</h4>
        <ul className="training__offers">
          {training.offers.map((o) => (
            <li key={o.label}>
              <span className="training__offer-icon">
                <LineIcon name={o.icon} size={26} strokeWidth={1.1} />
              </span>
              <strong className="training__offer-label">{o.label}</strong>
              <span className="training__offer-text">{o.text}</span>
            </li>
          ))}
        </ul>

        <p className="training__subtitle">{training.subtitle}</p>
        {pages > 1 && (
          <div className="zones__arrows">
            <button type="button" aria-label="Especialidades anteriores" disabled={page === 0} onClick={() => goTo(page - 1)}>
              <ArrowBig dir="left" />
            </button>
            <button type="button" aria-label="Especialidades siguientes" disabled={page === pages - 1} onClick={() => goTo(page + 1)}>
              <ArrowBig dir="right" />
            </button>
          </div>
        )}
        <ul ref={track} className="zones__track training__track" tabIndex={0} aria-label="Especialidades SENA" onScroll={measure}>
          {training.cards.map((c) => (
            <Card key={c.name} card={c} />
          ))}
        </ul>
        {pages > 1 && (
          <div className="zones__dots">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className={i === page ? "zones__dot is-active" : "zones__dot"}
                aria-label={`Ver especialidades, página ${i + 1} de ${pages}`}
                aria-current={i === page ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** J. Banner de visión compartida */
export function VisionBanner() {
  return (
    <section id="colaboracion-publico-privada" className="vision" aria-labelledby="vision-title">
      {/* Banner a todo el ancho de la página, texto centrado */}
      <div className="vision__banner vision__banner--full">
        <SmartImage {...vision.background} className="vision__img" />
        <div className="vision__shade" aria-hidden="true" />
        <div className="container vision__content">
            <h2 id="vision-title" className="vision__title">
              {vision.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className="vision__text">{vision.text}</p>
        </div>
      </div>

      <div className="container">
        {/* Testimonios de empresarios: mismo diseño que las tarjetas de noticias */}
        <ul className="testimonials">
          {vision.testimonials.map((t, i) => (
            <li key={i} className="testimonial">
              <div className="testimonial__media">
                <SmartImage {...t.photo} className="testimonial__img" />
              </div>
              {t.quote ? (
                <blockquote className="testimonial__quote">“{t.quote}”</blockquote>
              ) : (
                // Pendiente: espacio de la cita mientras llega el texto
                <p className="testimonial__quote testimonial__quote--pending" aria-label="Cita pendiente">
                  <span />
                  <span />
                  <span />
                </p>
              )}
              <p className="testimonial__meta">
                <span className="testimonial__meta-icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                    <path d="M8 1.5 9.3 6.7 14.5 8 9.3 9.3 8 14.5 6.7 9.3 1.5 8l5.2-1.3L8 1.5Z" />
                  </svg>
                </span>
                <span>
                  <strong className="testimonial__name">{t.name ?? 'Nombre del empresario'}</strong>
                  <span className="testimonial__role">
                    {t.role ?? 'Cargo'} · {t.company ?? 'Empresa'}
                  </span>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
