import { training, vision, type TrainingCard } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import { Eyebrow, TitleRule } from '../../components/Eyebrow';
import './Training.css';

function Card({ card }: { card: TrainingCard }) {
  return (
    <li className="training-card">
      <div className="training-card__photo">
        <SmartImage {...card.photo} className="training-card__img" />
      </div>
      <h3 className={`training-card__band band-${card.tone}`}>
        <LineIcon name={card.icon} size={24} />
        {card.name}
      </h3>
      <ul className="training-card__list">
        {card.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </li>
  );
}

/** I. Formación y centros educativos SENA */
export function Training() {
  const firstRow = training.cards.slice(0, 3);
  const secondRow = training.cards.slice(3);
  return (
    <section className="training" aria-labelledby="training-title">
      <div className="container">
        <header className="training__head">
          <Eyebrow>{training.eyebrow}</Eyebrow>
          <h2 id="training-title" className="section-title training__title">
            {training.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <TitleRule />
        </header>
        <ul className="training__row training__row--3">
          {firstRow.map((c) => (
            <Card key={c.name} card={c} />
          ))}
        </ul>
        <ul className="training__row training__row--2">
          {secondRow.map((c) => (
            <Card key={c.name} card={c} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/** J. Banner de visión compartida */
export function VisionBanner() {
  return (
    <section className="vision" aria-labelledby="vision-title">
      <div className="container">
        <div className="vision__banner">
          <SmartImage {...vision.background} className="vision__img" />
          <div className="vision__shade" aria-hidden="true" />
          <div className="vision__content">
            <Eyebrow variant="pill-dark">{vision.eyebrow}</Eyebrow>
            <h2 id="vision-title" className="vision__title">
              {vision.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <p className="vision__text">{vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
