import { talent } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import './Talent.css';
import { CountUp } from '../../components/CountUp';

export function Talent() {
  const [first, second] = talent.facts;
  return (
    <section className="talent" aria-label="Talento humano">
      <div className="container">
        <p className="talent__intro">{talent.intro}</p>

        <div className="talent__main">
          <div className="talent__facts">
            {[first, second].map((f, i) => (
              <div key={f.value} className={`talent__fact ${i === 1 ? 'talent__fact--second' : ''}`}>
                <p className="talent__fact-value">
                  <CountUp value={f.value} />
                </p>
                <h3 className="talent__fact-title">
                  {f.title.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </h3>
                <p className="talent__fact-text">
                  {f.text.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </p>
              </div>
            ))}
            <p className="talent__population">
              <span className="talent__population-icon">
                <LineIcon name="cap" size={26} />
              </span>
              {talent.population}
            </p>
          </div>
          <div className="talent__portrait">
            <SmartImage {...talent.portrait} className="talent__portrait-img" />
          </div>
        </div>

        <ul className="talent__cards">
          {talent.cards.map((c) => (
            <li key={c.value} className={`talent__card talent__card--${c.tone}`}>
              <div className="talent__card-top">
                <span className="talent__card-icon">
                  <LineIcon name={c.icon} size={24} />
                </span>
                <strong className="talent__card-value">
                  <CountUp value={c.value} />
                </strong>
              </div>
              <h3 className="talent__card-title">{c.title}</h3>
              <p className="talent__card-text">{c.text}</p>
            </li>
          ))}
        </ul>

        {/* Franja que se superpone al límite con la sección siguiente */}
        <dl className="talent__programs">
          {/* dt antes que dd por semántica; el CSS muestra la cifra arriba */}
          <div className="talent__program talent__program--total">
            <dt>{talent.programs.total.label}</dt>
            <dd>
              <CountUp value={talent.programs.total.value} />
            </dd>
          </div>
          {talent.programs.levels.map((p) => (
            <div key={p.label} className="talent__program">
              <dt>{p.label}</dt>
              <dd>
                <CountUp value={p.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
