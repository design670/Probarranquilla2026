import { useRef, useState, type KeyboardEvent } from 'react';
import { competitiveness, type CompetitiveSlide } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { ArrowLabel } from '../../components/ArrowLabel';
import './Competitiveness.css';

/** Contenido de cada pestaña: texto a la izquierda; cifras, lista o foto a la derecha. */
function Panel({ s }: { s: CompetitiveSlide }) {
  return (
    <div key={s.id} className="compete__panel-inner">
      <div className="compete__copy">
        <h3 className="compete__panel-title">{s.title}</h3>
        <p className="compete__headline">{s.headline}</p>
        {s.text && <p className="compete__text">{s.text}</p>}

        {s.stats && (
          <ul className="compete__stats">
            {s.stats.map((st) => (
              <li key={st.value}>
                <span className="compete__value">{st.value}</span>
                <span className="compete__label">{st.label}</span>
              </li>
            ))}
          </ul>
        )}
        {s.note && <p className="compete__note">{s.note}</p>}

        {s.terms && (
          <ul className="compete__terms">
            {s.terms.map((t) => (
              <li key={t.term}>
                <strong>{t.term}</strong> {t.text}
              </li>
            ))}
          </ul>
        )}

        {s.link && (
          <a className="compete__link" href={s.link.href}>
            <ArrowLabel size={13}>{s.link.label}</ArrowLabel>
          </a>
        )}
        {s.source && <p className="compete__source">Fuente: {s.source}</p>}
      </div>

      <div className="compete__side">
        {s.photo && <SmartImage {...s.photo} className="compete__photo" />}

        {/* Incentivos: un renglón por municipio, sin tabla */}
        {s.table && (
          <ul className="compete__towns" aria-label="Beneficios por municipio">
            {s.table.rows.map(([town, benefit, req]) => (
              <li key={town}>
                <span className="compete__town">{town}</span>
                <span className="compete__benefit">{benefit}</span>
                <span className="compete__req">{req}</span>
              </li>
            ))}
          </ul>
        )}

        {s.awards && (
          <ul className="compete__awards">
            {s.awards.map((a) => (
              <li key={a.when}>
                <strong>{a.when}</strong>
                {a.text && <span>{a.text}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/** Entorno competitivo para la inversión: pestañas (mismo lenguaje de las etapas de inversión). */
export function Competitiveness() {
  const { slides } = competitiveness;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = slides[active];

  const select = (i: number) => {
    const next = (i + slides.length) % slides.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: slides.length - 1 };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

  return (
    <section id="entorno-competitivo" className="compete" aria-labelledby="compete-title">
      <div className="container">
        <h2 id="compete-title" className="compete__title">
          {competitiveness.title}
        </h2>

        <div className="compete__tabs" role="tablist" aria-label="Temas del entorno competitivo">
          {slides.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`compete-tab-${t.id}`}
              aria-selected={i === active}
              aria-controls="compete-panel"
              tabIndex={i === active ? 0 : -1}
              className={`compete__tab compete-tone-${t.tone}${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div id="compete-panel" role="tabpanel" aria-labelledby={`compete-tab-${s.id}`} className={`compete__panel compete-tone-${s.tone}`} tabIndex={0}>
          <Panel s={s} />
        </div>
      </div>
    </section>
  );
}
