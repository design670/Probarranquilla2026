import { investmentStages } from '../../data/sobre';
import './InvestmentStages.css';

const Check = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3.5 8.5 3 3 6-7" />
  </svg>
);

/** Tres etapas del acompañamiento a la inversión: número + título, frase de entrada y servicios en lista. */
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
            <li key={s.number} className={`stage stage--${s.tone}`}>
              <div className="stage__head">
                <span className="stage__number" aria-hidden="true">
                  {s.number}
                </span>
                <h3 className="stage__title">{s.title}</h3>
              </div>
              <p className="stage__intro">{s.intro}</p>
              <ul className="stage__items">
                {s.items.map((it) => (
                  <li key={it}>
                    <span className="stage__check">
                      <Check />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
