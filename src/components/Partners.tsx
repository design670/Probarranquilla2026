import { partners } from '../data/content';
import { SmartImage } from './SmartImage';
import './Partners.css';

export function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="partners__box">
          <h2 id="partners-title" className="section-title partners__title">
            {partners.title}
          </h2>
          <ul className="partners__logos">
            {partners.logos.map((l) => (
              <li key={l.name}>
                <SmartImage src={l.src} alt={l.name} kind="logo" width={l.width} height={l.height} className="partners__logo" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
