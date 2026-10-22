import { useEffect, useRef, useState } from 'react';
import { hero } from '../data/content';
import './HeroCarousel.css';

/**
 * Hero del Home con el video "Hero Banner Home" de fondo: sin sonido, en bucle
 * y con botón de pausa. Si el usuario prefiere menos movimiento, no arranca solo
 * y queda la imagen fija (poster).
 */
export function HeroCarousel() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    v.play().catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => undefined);
    else v.pause();
  };

  return (
    <section className="hero" aria-label="Destacado">
      <video
        ref={video}
        className="hero__video"
        src={hero.video.src}
        poster={hero.video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={hero.video.label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <h1 className="hero__title">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
      </div>

      <button type="button" className="hero__toggle" onClick={toggle} aria-label={playing ? 'Pausar video' : 'Reproducir video'}>
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
            <rect x="3" y="2" width="3" height="10" rx="0.8" fill="currentColor" />
            <rect x="8" y="2" width="3" height="10" rx="0.8" fill="currentColor" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
            <path d="M4 2.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L4.9 1.7a.6.6 0 0 0-.9.5Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
}
