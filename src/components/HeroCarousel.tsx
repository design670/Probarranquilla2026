import { useState } from 'react';
import { hero } from '../data/content';
import { SmartImage } from './SmartImage';
import './HeroCarousel.css';

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="hero" aria-roledescription="carrusel" aria-label="Destacados">
      {hero.slides.map((s, i) => (
        <div
          key={s.image}
          className={`hero__slide ${i === active ? 'is-active' : ''}`}
          aria-hidden={i !== active}
          role="group"
          aria-roledescription="diapositiva"
          aria-label={`${i + 1} de ${hero.slides.length}`}
        >
          <SmartImage src={s.image} alt={s.alt} className="hero__img" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <h1 className="hero__title">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
      </div>

      {hero.slides.length > 1 && (
        <div className="hero__dots">
          {hero.slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero__dot ${i === active ? 'is-active' : ''}`}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
