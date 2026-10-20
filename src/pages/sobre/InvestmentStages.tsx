import { investmentStages } from '../../data/sobre';
import './InvestmentStages.css';

/** Tres etapas del acompañamiento a la inversión sobre azul medio. */
export function InvestmentStages() {
  return (
    <section id="acompanamiento-inversion" className="stages" aria-labelledby="stages-title">
      <div className="container">
        <h2 id="stages-title" className="stages__title">
          {investmentStages.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <ol className="stages__list">
          {investmentStages.stages.map((s) => (
            <li key={s.number} className="stage">
              <span className={`stage__number stage__number--${s.tone}`} aria-hidden="true">
                {s.number}
              </span>
              <h3 className="stage__title">
                {s.title.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
              <p className={`stage__text ${s.justify ? 'stage__text--justify' : ''}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
