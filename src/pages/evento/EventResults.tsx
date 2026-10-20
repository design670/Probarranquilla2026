import { eventResults } from '../../data/evento';
import './EventResults.css';
import { CountUp } from '../../components/CountUp';

/** Tres cifras del turismo de reuniones sobre gris claro. */
export function EventResults() {
  return (
    <section id="resultados-eventos" className="ev-results" aria-labelledby="ev-results-title">
      <div className="container">
        <h2 id="ev-results-title" className="section-title ev-results__title">
          Resultados e impacto
        </h2>
        <p className="ev-results__text">
          {eventResults.text.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <ul className="ev-results__grid">
          {eventResults.stats.map((s) => (
            <li key={s.value} className={`ev-stat ev-stat--${s.tone} ev-stat--${s.align}`}>
              <p className="ev-stat__value">
                <CountUp value={s.value} />
                {s.unit && <span className="ev-stat__unit"> {s.unit}</span>}
              </p>
              <p className="ev-stat__label">
                {s.label.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
