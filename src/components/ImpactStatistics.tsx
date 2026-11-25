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
  /** Cifras propias de la página (sin pestañas), con título y periodo visibles */
  results?: ImpactResults;
  /**
   * Instálate: `main` muestra todo menos el bloque `more`; `more` muestra solo ese
   * bloque como sección aparte (para poder poner otra sección entre los dos).
   */
  part?: 'all' | 'main' | 'more';
};

export type ImpactResults = {
  heading?: string;
  period?: string;
  /** `image`: foto de fondo bajo el color (mosaico de Instálate) */
  stats: { tone: 'navy' | 'orange' | 'yellow' | 'blue'; value: string[]; label: string[]; image?: string }[];
  /** `false` = valores de texto ("Norte de Colombia", "2,9 millones"): sin contador animado */
  animate?: boolean;
  /** Bloque de cierre bajo las tarjetas (título + párrafo) */
  closing?: { title: string; text: string; image?: { src: string } };
  /** Segundo bloque de cifras bajo el mosaico (Instálate: las de inversión) */
  more?: ImpactResults;
};

/** Pestañas + tarjetas de cifras. Las cifras vienen de `impact.tabs`. */
export function ImpactStatistics({ id, title, intro, ariaLabel = 'Impacto y resultados', className = '', results, part = 'all' }: Props) {
  const [tabId, setTabId] = useState(impact.tabs[0].id);
  const tab = impact.tabs.find((t) => t.id === tabId)!;

  // Bloque de cifras de inversión (franja blanca)
  const more = results?.more && (
    <div className="impact__more">
      {results.more.heading && <h3 className="impact__results-title">{results.more.heading}</h3>}
      <ul className="impact__grid impact__grid--three">
        {results.more.stats.map((s) => (
          <li key={s.value.join(' ')} className={`impact__card tone-${s.tone}`}>
            <p className="impact__value">
              {s.value.map((v) => (
                <span key={v}>
                  <CountUp value={v} />
                </span>
              ))}
            </p>
            <p className="impact__label">
              {s.label.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
      {results.more.period && <p className="impact__period">*{results.more.period}</p>}
    </div>
  );

  if (part === 'more') {
    return more ? (
      <section id={id} className={`impact impact--more-only ${className}`} aria-label={results?.more?.heading ?? ariaLabel}>
        <div className="container">{more}</div>
      </section>
    ) : null;
  }

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

        {results ? (
          <div className="impact__results">
            {results.heading && <h3 className="impact__results-title">{results.heading}</h3>}
            <ul className={`impact__grid ${results.closing ? 'impact__grid--mosaic' : results.stats.length === 4 ? 'impact__grid--four' : 'impact__grid--three'}`}>
              {/* Mosaico (Instálate): el cierre va como tarjeta alta con foto en el centro */}
              {results.closing && (
                <li className="impact__feature">
                  {results.closing.image && <img className="impact__feature-img" src={results.closing.image.src} alt="" loading="lazy" />}
                  <span className="impact__feature-shade" aria-hidden="true" />
                  <div className="impact__feature-body">
                    <h3 className="impact__closing-title">{results.closing.title}</h3>
                    <p className="impact__closing-text">{results.closing.text}</p>
                  </div>
                </li>
              )}
              {results.stats.map((s) => (
                <li key={s.value.join(' ')} className={`impact__card tone-${s.tone}${s.image ? ' has-photo' : ''}`}>
                  {s.image && (
                    <>
                      <img className="impact__card-img" src={s.image} alt="" loading="lazy" />
                      <span className="impact__card-shade" aria-hidden="true" />
                    </>
                  )}
                  <p className="impact__value">
                    {s.value.map((v) => (
                      <span key={v}>{results.animate === false ? v : <CountUp value={v} />}</span>
                    ))}
                  </p>
                  <p className="impact__label">
                    {s.label.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
            {results.period && <p className="impact__period">*{results.period}</p>}
            {part !== 'main' && more}
          </div>
        ) : (
        <>
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
            <ul className="impact__grid impact__grid--three impact__grid--tabs">
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
          {tab.period && <p className="impact__period impact__period--tab">*{tab.period}</p>}
        </div>
        </>
        )}
      </div>
    </section>
  );
}
