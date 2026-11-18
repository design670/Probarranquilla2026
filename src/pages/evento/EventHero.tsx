import { useEffect, useRef } from 'react';
import { eventHero } from '../../data/evento';
import './EventHero.css';

/**
 * Hero con video de fondo (silencioso y en bucle) y degradado azul a la
 * izquierda para que la frase se lea. Con "reducir movimiento" queda la portada.
 */
export function EventHero() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      v.removeAttribute('autoplay');
    }
  }, []);

  return (
    <section className="event-hero event-hero--video" aria-labelledby="event-hero-title">
      <video
        ref={video}
        className="event-hero__video"
        src={eventHero.video.src}
        poster={eventHero.video.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span className="event-hero__shade" aria-hidden="true" />
      <div className="container event-hero__content">
        <h1 id="event-hero-title" className="event-hero__title">
          {eventHero.title}
        </h1>
      </div>
    </section>
  );
}
