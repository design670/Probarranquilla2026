import type { ReactNode } from 'react';
import type { Link } from '../data/content';
import { SmartImage, type ImageAsset } from './SmartImage';
import { ArrowLabel } from './ArrowLabel';
import './PageHero.css';

type Props = {
  image: ImageAsset;
  title: string[];
  description?: string[];
  primary?: Link;
  secondary?: Link;
  /** `navy` = capa azul intensa a la izquierda que se desvanece hacia la foto. */
  shade?: 'default' | 'navy' | 'article';
  /**
   * `article` = titular más contenido (48 px) y altura mínima en lugar de fija:
   * el hero crece si el titular es largo, sin quedar bajo la navegación.
   */
  size?: 'default' | 'article';
  /** Ajustes propios de una página (posición del texto, esquinas). */
  className?: string;
  /** Contenido adicional bajo la descripción (texto largo, botón propio). */
  extra?: ReactNode;
};

/** Hero fotográfico de páginas internas: titular a la izquierda y CTAs opcionales. */
export function PageHero({ image, title, description, primary, secondary, shade = 'default', size = 'default', className = '', extra }: Props) {
  return (
    <section className={`page-hero page-hero--${shade} page-hero--size-${size} ${className}`}>
      <SmartImage {...image} className="page-hero__img" loading="eager" />
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="container page-hero__content">
        <h1 className="page-hero__title">
          {title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h1>
        {description && (
          <p className="page-hero__description">
            {description.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
        )}
        {extra}
        {(primary || secondary) && (
          <div className="page-hero__actions">
            {primary && (
              <a href={primary.href} className="page-hero__btn page-hero__btn--primary">
                <ArrowLabel size={13}>{primary.label}</ArrowLabel>
              </a>
            )}
            {secondary && (
              <a href={secondary.href} className="page-hero__btn page-hero__btn--secondary">
                <ArrowLabel size={13}>{secondary.label}</ArrowLabel>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
