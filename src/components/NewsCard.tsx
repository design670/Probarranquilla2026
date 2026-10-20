import { SmartImage } from './SmartImage';
import './NewsCard.css';

type Props = {
  title: string;
  href: string;
  image: string;
  alt: string;
  /** object-position de la foto */
  position?: string;
  place: string;
  date: string;
  /** `track` = carrusel del Home; `grid` = listado de la página de noticias */
  variant?: 'track' | 'grid';
  loading?: 'lazy' | 'eager';
};

export function MetaIcon() {
  return (
    <span className="news__meta-icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
        <path d="M8 1.5 9.3 6.7 14.5 8 9.3 9.3 8 14.5 6.7 9.3 1.5 8l5.2-1.3L8 1.5Z" />
      </svg>
    </span>
  );
}

/** Tarjeta de noticia: foto + titular (un solo enlace) + ubicación y fecha. */
export function NewsCard({ title, href, image, alt, position, place, date, variant = 'track', loading = 'lazy' }: Props) {
  return (
    <li className={`news__card news__card--${variant}`}>
      <a href={href} className="news__link" aria-label={title}>
        <div className="news__media">
          <SmartImage src={image} alt={alt} position={position} className="news__img" loading={loading} />
        </div>
        <h3 className="news__headline">{title}</h3>
      </a>
      <p className="news__meta">
        <MetaIcon />
        <span>
          {place}, {date}
        </span>
      </p>
    </li>
  );
}
