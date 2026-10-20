import { instalateAssets, port } from '../../data/instalate';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import { Eyebrow } from '../../components/Eyebrow';
import './PortPlatform.css';
import { CountUp } from '../../components/CountUp';

export function PortPlatform() {
  return (
    <section className="port" aria-labelledby="port-title">
      <div className="container">
        <Eyebrow variant="plain">{port.eyebrow}</Eyebrow>
        <h2 id="port-title" className="section-title port__title">
          {port.title}
        </h2>

        <div className="port__stage">
          <SmartImage {...instalateAssets.puerto} className="port__visual" />
          <div className="port__card">
            <h3 className="port__card-title">{port.card.title}</h3>
            <p className="port__card-sub">{port.card.subtitle}</p>
            <ul className="port__stats">
              {port.card.stats.map((s) => (
                <li key={s.label}>
                  <span className="port__stat-icon">
                    <LineIcon name={s.icon} size={28} />
                  </span>
                  <span>
                    <strong className="port__stat-value">
                      <CountUp value={s.value} />
                    </strong>
                    <span className="port__stat-label">{s.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="port__highlights">
          {port.highlights.map((h) => (
            <li key={h.title} className="port__highlight">
              <span className="port__highlight-icon">
                <LineIcon name={h.icon} size={26} />
              </span>
              <span>
                <strong className="port__highlight-title">{h.title}</strong>
                <span className="port__highlight-text">{h.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
