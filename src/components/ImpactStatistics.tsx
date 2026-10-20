import { useState } from 'react';
import { impact } from '../data/content';
import { ArrowLabel } from './ArrowLabel';
import './ImpactStatistics.css';
import { CountUp } from './CountUp';

type Props = {
  id?: string;
  /** Sin título (páginas internas), la sección se etiqueta con `ariaLabel`. */
  title?: string[];
  intro: string;
  ariaLabel?: string;
  className?: string;
};

/** Pestañas + tarjetas de cifras. Las cifras vienen de `impact.tabs`. */
export function ImpactStatistics({ id, title, intro, ariaLabel = 'Impacto y resultados', className = '' }: Props) {
  const [tabId, setTabId] = useState(impact.tabs[0].id);
  const tab = impact.tabs.find((t) => t.id === tabId)!;

  return (
    <section
      id={id}
      className={`impact ${title ? '' : 'impact--plain'} ${className}`}
      aria-labelledby={title ? 'impact-title' : undefined}
      aria-label={title ? undefined : ariaLabel}
    >
      <div className="container">
        {title && (
          <h2 id="impact-title" className="impact__title">
            {title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
        )}
        <p className="impact__intro">{intro}</p>

        <div className="impact__tabs" role="tablist" aria-label="Tipo de estadística">
          {impact.tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={t.id === tabId}
              aria-controls="impact-panel"
              className="impact__tab"
              onClick={() => setTabId(t.id)}
            >
              <ArrowLabel size={12}>{t.label}</ArrowLabel>
            </button>
          ))}
        </div>

        <div id="impact-panel" role="tabpanel" aria-labelledby={`tab-${tabId}`}>
          {tab.stats.length > 0 ? (
            <ul className={`impact__grid impact__grid--${tab.align}`}>
              {tab.stats.map((s) => (
                <li key={s.value.join(' ')} className={`impact__card tone-${s.tone} ${s.variant === 'long' ? 'is-long' : ''}`}>
                  <p className="impact__value">
                    {s.value.map((v) => (
                      <span key={v}>
                        <CountUp value={v} />
                      </span>
                    ))}
                  </p>
                  <p className="impact__label">
                    {Array.isArray(s.label) ? s.label.map((l) => <span key={l}>{l}</span>) : s.label}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="impact__empty">Las cifras de {tab.label.toLowerCase()} aún no están disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
}
