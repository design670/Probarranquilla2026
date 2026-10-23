import { talent } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import './Talent.css';
import { CountUp } from '../../components/CountUp';

export function Talent() {
  const [fact] = talent.facts;
  return (
    <section id="talento" className="talent" aria-labelledby="talent-title">
      <div className="container">
        <h2 id="talent-title" className="talent__title">
          {talent.title}
        </h2>
        <p className="talent__subtitle">{talent.subtitle}</p>

        <p className="talent__intro">{talent.intro}</p>

        {/* Cuadro con la persona: graduados, población joven y graduados bilingües */}
        <div className="talent__banner">
          <SmartImage {...talent.portrait} className="talent__banner-img" />
        </div>
        <div className="talent__main talent__main--below">
          <div className="talent__facts">
            <div className="talent__fact">
              <p className="talent__fact-value">
                <CountUp value={fact.value} />
              </p>
              <h3 className="talent__fact-title">
                {fact.title.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
              <p className="talent__fact-text">
                {fact.text.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </p>
            </div>
            <p className="talent__population">
              <span className="talent__population-icon">
                <LineIcon name="cap" size={26} />
              </span>
              {talent.population}
            </p>
            {talent.cards.map((card) => (
              <div key={card.value} className={`talent__card talent__card--${card.tone} talent__card--inline`}>
                <div className="talent__card-top">
                  <span className="talent__card-icon">
                    <LineIcon name={card.icon} size={24} />
                  </span>
                  <strong className="talent__card-value">
                    <CountUp value={card.value} />
                  </strong>
                </div>
                <h3 className="talent__card-title">{card.title}</h3>
                <p className="talent__card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
