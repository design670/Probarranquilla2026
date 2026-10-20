import { useState } from 'react';
import { connectivity } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import './Connectivity.css';

export function Connectivity() {
  const [activeId, setActiveId] = useState(connectivity.tabs[0].id);
  const active = connectivity.tabs.find((t) => t.id === activeId)!;
  const content = active.content!;

  return (
    <section className="connect" aria-label="Conectividad">
      <div className="container">
        <div className="connect__tabs" role="tablist" aria-label="Tipo de conectividad">
          {connectivity.tabs.map((t) => {
            // Las pestañas sin contenido se muestran, pero no se pueden activar
            const ready = t.content !== null;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`connect-tab-${t.id}`}
                aria-selected={t.id === activeId}
                aria-controls="connect-panel"
                aria-disabled={!ready}
                className="connect__tab"
                onClick={() => ready && setActiveId(t.id)}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div id="connect-panel" role="tabpanel" aria-labelledby={`connect-tab-${activeId}`} className="connect__panel">
          <SmartImage {...content.map} className="connect__map" />

          <div className="connect__head">
            <span className="connect__number">{connectivity.number}</span>
            <h2 className="connect__title">
              {connectivity.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
          </div>

          <div className="connect__card">
            <p className="connect__card-heading">{content.heading}</p>
            <p className="connect__card-sub">{content.subheading}</p>
            <ul className="connect__items">
              {content.items.map((it) => (
                <li key={it.title}>
                  <span className="connect__item-icon">
                    <LineIcon name={it.icon} size={20} />
                  </span>
                  <span>
                    <strong className="connect__item-title">{it.title}</strong>
                    <span className="connect__item-text">{it.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="connect__strip">
            <p className="connect__strip-title">{content.highlight.title}</p>
            <ul className="connect__chips">
              {content.highlight.chips.map((c) => (
                <li key={c.text.join(' ')}>
                  <span className="connect__chip-icon">
                    <LineIcon name={c.icon} size={20} />
                  </span>
                  <span>
                    {c.text.map((l) => (
                      <span key={l} className="connect__chip-line">
                        {l}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
