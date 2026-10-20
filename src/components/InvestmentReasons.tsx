import { reasons } from '../data/content';
import { SmartImage } from './SmartImage';
import './InvestmentReasons.css';

const ArrowLong = () => (
  <svg viewBox="0 0 34 20" width="34" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 10h29M23 2.5 31 10l-8 7.5" />
  </svg>
);

export function InvestmentReasons() {
  return (
    <section id="por-que-barranquilla" className="reasons" aria-labelledby="reasons-title">
      <div className="container">
        <h2 id="reasons-title" className="section-title reasons__title">
          {reasons.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <ul className="reasons__grid">
          {reasons.items.map((r) => (
            <li key={r.title} className={`reasons__card reasons__card--${r.area} ov-${r.overlay}`}>
              <a href={r.href} className="reasons__link">
                <SmartImage src={r.image} alt={r.alt} className="reasons__img" />
                <span className="reasons__overlay" aria-hidden="true" />
                <span className="reasons__body">
                  <ArrowLong />
                  <h3 className="reasons__name">{r.title}</h3>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
