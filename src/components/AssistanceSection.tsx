import { assistance } from '../data/content';
import { SmartImage } from './SmartImage';
import { ArrowLabel } from './ArrowLabel';
import './AssistanceSection.css';

export function AssistanceSection() {
  return (
    <section id="como-te-apoyamos" className="assist" aria-labelledby="assist-title">
      <div className="container">
        <div className="assist__head">
          <h2 id="assist-title" className="assist__title">
            {assistance.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <a href={assistance.cta.href} className="assist__cta">
            <ArrowLabel size={13}>{assistance.cta.label}</ArrowLabel>
          </a>
        </div>
        <div className="assist__stage">
          <div className="assist__media">
            <SmartImage src={assistance.image} alt={assistance.alt} className="assist__img" />
          </div>
          <div className="assist__panel">
            <ul>
              {assistance.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
