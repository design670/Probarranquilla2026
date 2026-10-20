import { eventHero } from '../../data/evento';
import { ArrowLabel } from '../../components/ArrowLabel';
import { scrollToAnchor } from './scrollToAnchor';
import './EventHero.css';

/** Hero con degradado azul → rojo; la mitad derecha queda despejada. */
export function EventHero() {
  const { primary, secondary } = eventHero;
  return (
    <section className="event-hero" aria-labelledby="event-hero-title">
      <div className="container event-hero__content">
        <h1 id="event-hero-title" className="event-hero__title">
          {eventHero.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h1>
        <p className="event-hero__subtitle">
          {eventHero.subtitle.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <p className="event-hero__text">
          {eventHero.text.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <div className="event-hero__actions">
          <a href={`#${primary.anchor}`} className="event-hero__btn event-hero__btn--primary" onClick={(e) => scrollToAnchor(e, primary.anchor)}>
            <ArrowLabel size={13}>{primary.label}</ArrowLabel>
          </a>
          <a href={`#${secondary.anchor}`} className="event-hero__btn event-hero__btn--secondary" onClick={(e) => scrollToAnchor(e, secondary.anchor)}>
            <ArrowLabel size={13}>{secondary.label}</ArrowLabel>
          </a>
        </div>
      </div>
    </section>
  );
}
