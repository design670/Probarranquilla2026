import { infrastructure } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import { Eyebrow } from '../../components/Eyebrow';
import './Infrastructure.css';
import { CountUp } from '../../components/CountUp';

export function Infrastructure() {
  return (
    <section className="infra" aria-labelledby="infra-title">
      <div className="container">
        <header className="infra__head">
          <Eyebrow>{infrastructure.eyebrow}</Eyebrow>
          <h2 id="infra-title" className="section-title infra__title">
            {infrastructure.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className="infra__intro">{infrastructure.intro}</p>
        </header>

        <div className="infra__card">
          <h3 className="infra__card-title">{infrastructure.cardTitle}</h3>
          <div className="infra__grid">
            <ul className="infra__stats">
              {infrastructure.stats.map((s) => (
                <li key={s.value + s.label}>
                  <span className="infra__icon">
                    <LineIcon name={s.icon} size={22} />
                  </span>
                  <span>
                    <strong className="infra__value">
                      <CountUp value={s.value} />
                    </strong>
                    <span className="infra__label">{s.label}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="infra__map">
              <SmartImage {...infrastructure.map} className="infra__map-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
