import { useRef, useState, type KeyboardEvent } from 'react';
import { eventAnchors, support } from '../../data/evento';
import { SmartImage } from '../../components/SmartImage';
import './SupportStages.css';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * "¿Cómo te apoyamos?": cinco etapas como pestañas (tablist/tab/tabpanel).
 * Flechas, Inicio y Fin mueven la selección; el panel se funde al cambiar.
 */
export function SupportStages() {
  const { stages } = support;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];

  const select = (i: number) => {
    const next = (i + stages.length) % stages.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: stages.length - 1 };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

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

        <div className="support__steps-scroll">
          <div className="support__steps" role="tablist" aria-label="Etapas del acompañamiento">
            {stages.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`stage-tab-${s.id}`}
                aria-selected={i === active}
                aria-controls="stage-panel"
                tabIndex={i === active ? 0 : -1}
                className={`support__step ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                <span className="support__num" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <span className="support__label">
                  {s.label.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div id="stage-panel" className="support__panel" role="tabpanel" aria-labelledby={`stage-tab-${stage.id}`} tabIndex={0}>
          <div key={stage.id} className="support__panel-inner">
            <div className="support__copy">
              <h3 className="support__panel-title">{stage.title}</h3>
              {stage.description && <p className="support__desc">{stage.description}</p>}
              {stage.highlight && (
                <div className="support__box">
                  <p className="support__box-label">{stage.highlight.label}</p>
                  <p className="support__box-text">{stage.highlight.text}</p>
                </div>
              )}
            </div>
            <SmartImage {...stage.photo} className="support__photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
