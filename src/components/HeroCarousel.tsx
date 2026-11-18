import { useEffect, useState } from 'react';
import { hero } from '../data/content';
import { heroImage, heroSlides } from '../data/home';
import { ArrowLabel } from './ArrowLabel';
import './HeroCarousel.css';

/** Tiempo que permanece cada noticia antes de pasar a la siguiente */
const AUTOPLAY_MS = 6000;

/**
 * Hero del Home: foto fija de la rueda al atardecer y, encima, un carrusel con
 * las 3 noticias destacadas. Avanza solo cada 6 s (también con el cursor encima,
 * porque ocupa toda la pantalla); se pausa con el botón o mientras el teclado
 * navega dentro. Con movimiento reducido avanza sin la animación de entrada.
 */
export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const total = heroSlides.length;
  const slide = heroSlides[index];
  const running = !stopped && !keyboard && total > 1;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, running, total]);

  return (
    <section
      className="hero"
      aria-roledescription="carrusel"
      aria-label="Noticias destacadas"
      onFocus={(e) => setKeyboard((e.target as HTMLElement).matches(':focus-visible'))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setKeyboard(false);
      }}
    >
      <img
        className="hero__image"
        src={heroImage.src}
        srcSet={`${heroImage.srcMobile} 900w, ${heroImage.src} 2000w`}
        sizes="100vw"
        alt={heroImage.alt}
        fetchPriority="high"
      />
      <div className="hero__shade" aria-hidden="true" />

      {/* El titular de la página se mantiene para buscadores y lectores de pantalla */}
      <h1 className="visually-hidden">{hero.title.join(' ')}</h1>

      <div className="container hero__content">
        {/* key: cada noticia entra con su animación */}
        <div key={index} className="hero__slide" aria-live={running ? 'off' : 'polite'}>
          <p className="hero__meta">
            <span className="hero__tag">{slide.categories[0]}</span>
            <span>{slide.date}</span>
          </p>
          <h2 className="hero__news-title">
            <a href={slide.href}>{slide.title}</a>
          </h2>
          {/* Mismo destino que el titular: fuera del orden de tabulación para no repetirlo */}
          <a href={slide.href} className="hero__cta" tabIndex={-1} aria-hidden="true">
            <ArrowLabel size={13}>Leer noticia</ArrowLabel>
          </a>
        </div>
      </div>

      <div className="container hero__controls">
        <button
          type="button"
          className="hero__toggle"
          onClick={() => setStopped((v) => !v)}
          aria-label={stopped ? 'Reanudar el paso automático de las noticias' : 'Pausar el paso automático de las noticias'}
        >
          {stopped ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
              <path d="M4 2.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L4.9 1.7a.6.6 0 0 0-.9.5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
              <rect x="3" y="2" width="3" height="10" rx="0.8" fill="currentColor" />
              <rect x="8" y="2" width="3" height="10" rx="0.8" fill="currentColor" />
            </svg>
          )}
        </button>
        <div className="hero__dots">
          {heroSlides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`hero__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Ver noticia ${i + 1}: ${s.title}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            >
              {/* Barra que se llena mientras la noticia está en pantalla */}
              {i === index && running && <span className="hero__dot-fill" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
