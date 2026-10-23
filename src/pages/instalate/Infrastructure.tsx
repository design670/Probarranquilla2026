import { infrastructure } from '../../data/instalate';
import { LineIcon } from '../../components/LineIcon';
import { Eyebrow } from '../../components/Eyebrow';
import './Infrastructure.css';

/** Infraestructura con estándares internacionales: zonas francas y sus beneficios. */
export function Infrastructure() {
  const z = infrastructure.zones;
  return (
    <section id="infraestructura" className="infra" aria-labelledby="infra-title">
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

        <div className="infra__card infra__zones">
          <h3 className="infra__card-title">{z.title}</h3>
          <p className="infra__zones-text">{z.text}</p>

          <h4 className="infra__zones-sub">{z.benefitsTitle}</h4>
          <ul className="infra__benefits">
            {z.benefits.map((b) => (
              <li key={b.title}>
                <span className="infra__icon">
                  <LineIcon name={b.icon} size={26} strokeWidth={1.1} />
                </span>
                <strong className="infra__benefit-title">{b.title}</strong>
                <span className="infra__benefit-text">{b.text}</span>
              </li>
            ))}
          </ul>

          <h4 className="infra__zones-sub">{z.howTitle}</h4>
          <p className="infra__zones-text">{z.howText}</p>
        </div>
      </div>
    </section>
  );
}
