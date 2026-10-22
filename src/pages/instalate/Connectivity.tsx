import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { connectivity } from '../../data/instalate';
import { internationalGeo, nationalGeo } from '../../data/airMaps';
import { LineIcon } from '../../components/LineIcon';
import { RouteMap } from '../../components/RouteMap';
import { ArrowLabel } from '../../components/ArrowLabel';
import './Connectivity.css';

const GEO = { internacional: internationalGeo, nacional: nationalGeo };
const HUB = 'Barranquilla';

/** Conectividad estratégica: portuaria, aérea, terrestre y telecomunicaciones (pestañas). */
export function Connectivity() {
  const { tabs } = connectivity;
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const tab = tabs[active];
  const c = tab.content;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: tabs.length - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = (moves[e.key] + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <section className="connect" aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="connect__section-title">
          {connectivity.title}
        </h2>

        <div className="connect__tabs" role="tablist" aria-label="Tipo de conectividad">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="connect__tab"
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
            >
              <ArrowLabel size={12} direction="down">
                {t.label}
              </ArrowLabel>
            </button>
          ))}
        </div>

        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${tab.id}`} className={`connect__panel connect__panel--${tab.id}${c.highlight?.text ? " connect__panel--strip" : ""}`}>
          {/* key: el mapa se vuelve a dibujar (con su animación) al cambiar de pestaña */}
          <div className="connect__map" key={tab.id}>
            <RouteMap
              geo={GEO[c.map.geo]}
              hub={{ id: 'baq', name: HUB, label: c.map.hubLabel }}
              stops={c.map.stops}
              ariaLabel={c.map.ariaLabel}
              kind={c.map.kind}
            />
          </div>

          <h3 className="connect__title">{c.title}</h3>

          <div className="connect__card" key={`card-${tab.id}`}>
            <p className="connect__card-heading">{c.heading}</p>
            {c.subheading && <p className="connect__card-sub">{c.subheading}</p>}

            {c.items && (
              <ul className="connect__items">
                {c.items.map((it) => (
                  <li key={it.text}>
                    <span className="connect__item-icon">
                      <LineIcon name={it.icon} size={20} />
                    </span>
                    <span>
                      {it.title && <strong className="connect__item-title">{it.title}</strong>}
                      <span className={`connect__item-text${it.title ? '' : ' connect__item-text--lead'}`}>{it.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {c.stats && (
              <ul className="connect__stats">
                {c.stats.map((s) => (
                  <li key={s.value}>
                    <span className="connect__stat-icon">
                      <LineIcon name={s.icon} size={22} />
                    </span>
                    <span>
                      <strong className="connect__stat-value">{s.value}</strong>
                      <span className="connect__stat-text">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {c.table && (
              <div className="connect__table-wrap">
                <table className="connect__table">
                  <thead>
                    <tr>
                      {c.table.columns.map((col) => (
                        <th key={col} scope="col">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.table.rows.map(([city, km, time]) => (
                      <tr key={city}>
                        <th scope="row">{city}</th>
                        <td>{km}</td>
                        <td>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {c.highlight?.chips && (
              <div className="connect__quick">
                {c.highlight.title && <p className="connect__quick-title">{c.highlight.title}</p>}
                <ul className="connect__chips">
                  {c.highlight.chips.map((ch) => (
                    <li key={ch.text.join(' ')}>
                      <span className="connect__chip-icon">
                        <LineIcon name={ch.icon} size={20} />
                      </span>
                      <span>
                        {ch.text.map((l) => (
                          <span key={l} className="connect__chip-line">
                            {l}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cuadro azul sobre el mapa: solo cuando es un texto (terrestre) */}
          {c.highlight?.text && (
            <div className="connect__strip">
              <p className="connect__strip-text">{c.highlight.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
