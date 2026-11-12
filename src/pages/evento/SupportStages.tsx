import { eventAnchors, support } from '../../data/evento';
import './SupportStages.css';

const pad = (n: number) => String(n).padStart(2, '0');

// Mismos colores de las cards de "Sobre ProBarranquilla" (InvestmentStages), en ciclo
const TONES = ['teal', 'orange', 'yellow', 'sky', 'teal'] as const;

/**
 * "¿Cómo te apoyamos?": las cinco etapas en cards sobre fondo azul,
 * con el mismo diseño de "Fomentamos el desarrollo económico…" (Sobre ProBarranquilla).
 */
export function SupportStages() {
  return (
    <section id={eventAnchors.apoyo} className="support" aria-labelledby="support-title">
      <div className="container">
        <h2 id="support-title" className="support__title">
          {support.title}
        </h2>
        <p className="support__subtitle">
          {support.subtitle.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <ol className="support__list">
          {support.stages.map((s, i) => (
            <li key={s.id} className={`support__card support__card--${TONES[i % TONES.length]}`}>
              <div className="support__head">
                <span className="support__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3 className="support__card-title">{s.title}</h3>
              </div>
              <p className="support__desc">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
