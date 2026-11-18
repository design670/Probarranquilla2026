import { useEffect, useState } from 'react';
import { hero } from '../data/content';
import { heroImage, heroSlides } from '../data/home';
import { ArrowLabel } from './ArrowLabel';
import './HeroCarousel.css';

/** Tiempo que permanece cada noticia antes de pasar a la siguiente */
const AUTOPLAY_MS = 6000;

/**
 * Hero del Home en carrusel: primero la foto de la rueda al atardecer con el
 * titular de la página y luego las 3 noticias destacadas, cada una con su foto. Avanza solo cada 6 s (también con el cursor encima,
 * porque ocupa toda la pantalla); se pausa con el botón o mientras el teclado
 * navega dentro. Con movimiento reducido avanza sin la animación de entrada.
 */
export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  // Diapositiva 0: portada (rueda + titular); 1..3: noticias
  const total = heroSlides.length + 1;
  const slide = index > 0 ? heroSlides[index - 1] : null;
  const images = [{ src: heroImage.src, srcSet: `${heroImage.srcMobile} 900w, ${heroImage.src} 2000w`, alt: heroImage.alt }, ...heroSlides.map((n) => ({ src: n.image, srcSet: undefined, alt: n.alt }))];
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
      {/* Las fotos se apilan y la activa aparece con un fundido */}
      {images.map((im, i) => (
        <img
          key={im.src}
          className={`hero__image ${i === index ? 'is-active' : ''}`}
          src={im.src}
          srcSet={im.srcSet}
          sizes="100vw"
          alt={i === index ? im.alt : ''}
          aria-hidden={i === index ? undefined : true}
          fetchPriority={i === 0 ? 'high' : undefined}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        {/* key: cada diapositiva entra con su animación */}
        <div key={index} className="hero__slide" aria-live={running ? 'off' : 'polite'}>
          {/* Portada: el titular de la página; en las noticias queda oculto pero presente */}
          <h1 className={slide ? 'visually-hidden' : 'hero__title'}>
            {hero.title.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </h1>
          {slide && (
          <>
          <p className="hero__meta">
            <span className="hero__tag">{slide.categories[0]}</span>
          </p>
          <h2 className="hero__news-title">
            <a href={slide.href}>{slide.title}</a>
          </h2>
          {/* Mismo destino que el titular: fuera del orden de tabulación para no repetirlo */}
          <a href={slide.href} className="hero__cta" tabIndex={-1} aria-hidden="true">
            <ArrowLabel size={13}>Leer noticia</ArrowLabel>
          </a>
          </>
          )}
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
          {[hero.title.join(' '), ...heroSlides.map((s) => s.title)].map((label, i) => (
            <button
              key={label}
              type="button"
              className={`hero__dot ${i === index ? 'is-active' : ''}`}
              aria-label={i === 0 ? `Ver portada: ${label}` : `Ver noticia ${i}: ${label}`}
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
