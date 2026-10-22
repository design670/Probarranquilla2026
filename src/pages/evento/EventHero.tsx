import { eventHero } from '../../data/evento';
import './EventHero.css';

/** Hero con degradado azul → rojo; la mitad derecha queda despejada. Solo la frase, en negrita. */
export function EventHero() {
  return (
    <section className="event-hero" aria-labelledby="event-hero-title">
      <div className="container event-hero__content">
        <h1 id="event-hero-title" className="event-hero__title">
          {eventHero.title}
        </h1>
      </div>
    </section>
  );
}
