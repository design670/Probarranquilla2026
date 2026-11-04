import { useEffect, useState } from 'react';
import { caseStudies } from '../../data/casos';
import { SmartImage } from '../../components/SmartImage';
import './CaseShowcase.css';

const FADE_MS = 300;
/** Tiempo que permanece cada caso antes de pasar al siguiente */
const AUTOPLAY_MS = 6000;

/**
 * Caso de éxito a pantalla completa: foto de fondo y tarjeta azul a la derecha.
 * Avanza solo cada 6 s (en bucle); los puntos permiten saltar a un caso.
 * No se pausa con el cursor (el caso ocupa toda la pantalla y nunca avanzaría):
 * se pausa con el botón junto a los puntos o mientras el teclado navega dentro.
 * Con movimiento reducido sigue avanzando, pero sin fundido.
 */
export function CaseShowcase() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  /** Pausa elegida con el botón */
  const [stopped, setStopped] = useState(false);
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const current = caseStudies[shown];
  const total = caseStudies.length;
  const autoplay = total > 1 && !stopped;

  // Avance automático; se reinicia cada vez que cambia el caso (también al elegir un punto)
  useEffect(() => {
    if (!autoplay || paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [autoplay, paused, index, total]);

  // Fundido: se oculta el caso actual, se cambia y vuelve a aparecer
  useEffect(() => {
    if (index === shown) return;
    if (reduceMotion) {
      setShown(index);
      return;
    }
    setFading(true);
    const t = window.setTimeout(() => {
      setShown(index);
      setFading(false);
    }, FADE_MS);
    return () => window.clearTimeout(t);
  }, [index, shown, reduceMotion]);

  return (
    <section
      className="showcase"
      aria-roledescription="carrusel"
      aria-label="Casos de éxito"
      onFocus={(e) => setPaused((e.target as HTMLElement).matches(':focus-visible'))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <h1 className="visually-hidden">Casos de éxito</h1>
      {/* Mientras avanza solo no se anuncia cada cambio; en pausa, sí */}
      <div className={`showcase__slide ${fading ? 'is-fading' : ''}`} aria-live={autoplay && !paused ? 'off' : 'polite'}>
        <SmartImage key={current.photo.src} {...current.photo} className="showcase__photo" loading="eager" />
        <div className="showcase__layer">
          <article className="showcase__card" aria-label={current.company}>
            <SmartImage key={current.logo} src={current.logo} alt={current.company} kind="logo" height={52} className="showcase__logo" />
            <p className="showcase__text">
              <strong>{current.lead}</strong> {current.body}
            </p>
          </article>
        </div>

        {total > 1 && (
          <div className="showcase__dots">
            <button
              type="button"
              className="showcase__toggle"
              aria-label={stopped ? 'Reanudar el paso automático de los casos' : 'Pausar el paso automático de los casos'}
              onClick={() => setStopped((v) => !v)}
            >
              {stopped ? (
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M4.5 2.8v10.4L13 8 4.5 2.8Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <rect x="4" y="3" width="2.6" height="10" rx="0.6" />
                  <rect x="9.4" y="3" width="2.6" height="10" rx="0.6" />
                </svg>
              )}
            </button>
            {caseStudies.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`showcase__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Ver caso ${i + 1}: ${c.company}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
