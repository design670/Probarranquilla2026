import { aboutIntro } from '../../data/sobre';
import './AboutIntro.css';
import { CountUp } from '../../components/CountUp';

/** Presentación institucional + cuatro cifras con alturas alternadas. */
export function AboutIntro() {
  return (
    <section className="about-intro" aria-labelledby="about-intro-title">
      <div className="container">
        <h2 id="about-intro-title" className="about-intro__title">
          {aboutIntro.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <ul className="about-stats">
          {aboutIntro.stats.map((s) => (
            <li key={s.label} className={`about-stat about-stat--${s.tone} ${s.tall ? 'about-stat--tall' : ''}`}>
              <p className="about-stat__value">
                {s.value.map((v) => (
                  <span key={v}>
                    <CountUp value={v} />
                  </span>
                ))}
              </p>
              <p className="about-stat__label">{s.label}</p>
            </li>
          ))}
        </ul>
        <p className="about-intro__note">{aboutIntro.note}</p>
      </div>
    </section>
  );
}
