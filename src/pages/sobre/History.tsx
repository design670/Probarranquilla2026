import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { history } from '../../data/sobre';
import { SmartImage } from '../../components/SmartImage';
import { ArrowRight } from '../../components/Icons';
import './History.css';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Línea de tiempo: cada año es una pestaña que actualiza el panel del hito.
 * Flechas izquierda/derecha, Inicio y Fin mueven la selección. Sin autoplay.
 */
export function History() {
  const { milestones } = history;
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const strip = useRef<HTMLDivElement>(null);
  const current = milestones[index];
  const total = milestones.length;

  const select = (i: number, focus = false) => {
    const next = (i + total) % total;
    setIndex(next);
    if (focus) tabs.current[next]?.focus();
  };

  // La franja de años se desliza para dejar el año activo centrado (sin mover la página)
  useEffect(() => {
    const el = strip.current;
    const tab = tabs.current[index];
    if (!el || !tab || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({ left: tab.offsetLeft + tab.offsetWidth / 2 - el.clientWidth / 2, behavior: 'smooth' });
  }, [index]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: total - 1 };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key], true);
    }
  };

  return (
    <section id="historia" className="history" aria-labelledby="history-title">
      {history.background && <SmartImage {...history.background} className="history__bg" />}
      <div className="container">
        <h2 id="history-title" className="history__title">
          {history.title}
        </h2>
        <p className="history__subtitle">{history.subtitle}</p>

        <div className="history__timeline" ref={strip}>
          <div className="history__track" role="tablist" aria-label="Años de la historia de ProBarranquilla" style={{ '--n': total } as CSSProperties}>
            {milestones.map((m, i) => (
              <button
                key={m.year}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`history-tab-${i}`}
                aria-selected={i === index}
                aria-controls="history-panel"
                tabIndex={i === index ? 0 : -1}
                className={`history__year ${i === index ? 'is-active' : ''}`}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
              >
                <span className={`history__year-label${m.year.length > 4 ? ' history__year-label--range' : ''}`}>{m.year}</span>
                <span className="history__dot" aria-hidden="true" />
              </button>
            ))}
            <span className="history__line" aria-hidden="true">
              <ArrowRight width={12} height={12} />
            </span>
          </div>
        </div>
      </div>

      <div className="history__stage">
        <div
          id="history-panel"
          className="history__panel"
          role="tabpanel"
          aria-labelledby={`history-tab-${index}`}
          aria-live="polite"
        >
          <SmartImage key={current.image.src} {...current.image} className="history__photo" />
          <div className="history__copy">
            {/* El año ya se ve en la línea de tiempo: el panel muestra solo el título, en grande */}
            {current.title ? (
              <h3 className="history__milestone">
                {current.title.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
            ) : (
              <h3 className="visually-hidden">{current.year}</h3>
            )}
            <span className="history__rule" aria-hidden="true" />
            {current.description && <p className="history__description">{current.description}</p>}
            {current.items && (
              <ul className="history__items">
                {current.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            )}
            <p className="history__count">
              {pad(index + 1)} / {pad(total)}
            </p>
          </div>
        </div>
        <button type="button" className="history__next" onClick={() => select(index + 1)} aria-label="Siguiente hito">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 3.5 4.5 4.5L6 12.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
