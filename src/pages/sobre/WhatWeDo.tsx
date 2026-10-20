import type { CSSProperties } from 'react';
import { whatWeDo } from '../../data/sobre';
import { SmartImage } from '../../components/SmartImage';
import './WhatWeDo.css';

/** "¿Qué hace?": tres banners con foto y capa de color a la izquierda. */
export function WhatWeDo() {
  return (
    <section id="que-hace" className="what" aria-labelledby="what-title">
      <div className="container">
        <h2 id="what-title" className="section-title what__title">
          {whatWeDo.title}
        </h2>
        <div className="what__list">
          {whatWeDo.banners.map((b, i) => (
            <article
              key={b.id}
              className={`what-banner what-banner--${b.tone}`}
              aria-labelledby={`what-${b.id}`}
              style={{ '--i': i } as CSSProperties}
            >
              <SmartImage {...b.image} className="what-banner__img" />
              <div className="what-banner__shade" aria-hidden="true" />
              <div className="what-banner__content" style={{ '--text-width': `${b.textWidth}px` } as CSSProperties}>
                <p className="what-banner__label">{b.label}</p>
                <h3 id={`what-${b.id}`} className="what-banner__title">
                  {b.title}
                </h3>
                <div className="what-banner__body">
                  {b.body.map((p) => (
                    <p key={p.text}>
                      {p.strong && (
                        <>
                          <strong>{p.strong}</strong>{' '}
                        </>
                      )}
                      {p.text}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
