import { useState, type CSSProperties } from 'react';
import './SmartImage.css';

/** Recurso de imagen editable: ruta, texto alternativo, ajuste y punto focal. */
export type ImageAsset = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  /** Valor de `object-position`, p. ej. '50% 30%'. */
  position?: string;
};

type Props = ImageAsset & {
  className?: string;
  /** Variante del placeholder: foto (rayado) o logo (contorno). */
  kind?: 'photo' | 'logo';
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
};

/**
 * Muestra la imagen si el archivo existe en /public; si falta, deja un
 * placeholder del mismo tamaño. La ruta esperada solo se rotula en desarrollo.
 */
export function SmartImage({ src, alt, className = '', kind = 'photo', width, height, loading = 'lazy', fit, position }: Props) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    const label = kind === 'logo' ? alt : import.meta.env.DEV ? `Pendiente · ${src.replace('/assets/', '')}` : null;
    return (
      <div
        className={`smart-placeholder smart-placeholder--${kind} ${className}`}
        style={kind === 'logo' ? { width, height } : undefined}
        role="img"
        aria-label={alt}
        title={import.meta.env.DEV ? `Recurso pendiente: public${src}` : undefined}
      >
        {label && <span className="smart-placeholder__label">{label}</span>}
      </div>
    );
  }

  const style: CSSProperties = {};
  if (kind === 'logo' && height) Object.assign(style, { height, width: 'auto' });
  if (fit) style.objectFit = fit;
  if (position) style.objectPosition = position;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading={kind === 'logo' ? 'eager' : loading}
      decoding="async"
      onError={() => setMissing(true)}
    />
  );
}
