import { useState } from 'react';
import { successStories } from '../data/content';
import { SmartImage } from './SmartImage';
import { ArrowLabel } from './ArrowLabel';
import { ArrowBig } from './Icons';
import './SuccessStories.css';

/** `cases--compact` reduce el aire superior/inferior (páginas internas). */
export function SuccessStories({ className = '' }: { className?: string }) {
  const { cases } = successStories;
  const [index, setIndex] = useState(0);
  const current = cases[index];

  return (
    <section id="casos-de-exito" className={`cases ${className}`} aria-labelledby="cases-title">
      <div className="container">
        <h2 id="cases-title" className="cases__title">
          {successStories.title}
        </h2>
        <p className="cases__subtitle">{successStories.subtitle}</p>

        <div className="cases__stage" aria-roledescription="carrusel" aria-label="Casos de éxito">
          <div className="cases__media">
            {/* `key`: cada caso monta su propia imagen (el estado "falta el archivo" no se arrastra) */}
            <SmartImage key={current.image} src={current.image} alt={current.alt} className="cases__img" />
          </div>
          <div className="cases__side">
            <article className="cases__card" aria-live="polite">
              <SmartImage key={current.logo} src={current.logo} alt={current.company} kind="logo" width={176} height={52} className="cases__logo on-dark" />
              {(current.lead || current.body) && (
                <p className="cases__text">
                  <strong>{current.lead}</strong>
                  {current.body}
                </p>
              )}
            </article>
            <div className="cases__controls">
              <div className="cases__arrows">
                <button type="button" aria-label="Caso anterior" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
                  <ArrowBig dir="left" />
                </button>
                <button type="button" aria-label="Caso siguiente" disabled={index === cases.length - 1} onClick={() => setIndex((i) => i + 1)}>
                  <ArrowBig dir="right" />
                </button>
              </div>
              <a href={successStories.moreHref} className="cases__more">
                <ArrowLabel size={12}>Ver más casos</ArrowLabel>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
