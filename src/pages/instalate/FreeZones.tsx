import { freeZones, freeZonesIntro } from '../../data/instalate';
import type { ImageAsset } from '../../components/SmartImage';
import { SmartImage } from '../../components/SmartImage';
import { LineIcon } from '../../components/LineIcon';
import { Eyebrow, TitleRule } from '../../components/Eyebrow';
import './Infrastructure.css'; // estilos de .page-intro
import './FreeZones.css';

type Zone = { location: string; name: string; photo: ImageAsset; logo: ImageAsset };

function ZoneCard({ zone, size }: { zone: Zone; size: 'lg' | 'sm' }) {
  return (
    <li className={`zone zone--${size}`}>
      <div className="zone__head">
        <span className="zone__pin">
          <LineIcon name="pin" size={15} strokeWidth={2} />
        </span>
        <span className="zone__location">{zone.location}</span>
        <SmartImage {...zone.logo} kind="logo" width={size === 'lg' ? 80 : 100} height={size === 'lg' ? 28 : 26} className="zone__logo" />
      </div>
      <div className="zone__photo">
        <SmartImage {...zone.photo} className="zone__img" />
      </div>
      <p className="zone__caption">{freeZones.caption}</p>
      <h3 className="zone__name">{zone.name}</h3>
    </li>
  );
}

/** F. Introducción (franja blanca) */
export function FreeZonesIntro() {
  return (
    <section className="page-intro-section" aria-label="Régimen especial y logística">
      <div className="container page-intro">
        <Eyebrow>{freeZonesIntro.eyebrow}</Eyebrow>
        <p className="page-intro__text">{freeZonesIntro.text}</p>
      </div>
    </section>
  );
}

/** G. Oferta: 2 tarjetas grandes + 3 pequeñas */
export function FreeZonesOffer() {
  return (
    <section className="zones" aria-labelledby="zones-title">
      <div className="container">
        <h2 id="zones-title" className="section-title zones__title">
          {freeZones.title}
        </h2>
        <TitleRule />
        <ul className="zones__row zones__row--lg">
          {freeZones.featured.map((z) => (
            <ZoneCard key={z.name} zone={z} size="lg" />
          ))}
        </ul>
        <ul className="zones__row zones__row--sm">
          {freeZones.others.map((z) => (
            <ZoneCard key={z.name} zone={z} size="sm" />
          ))}
        </ul>
      </div>
    </section>
  );
}
