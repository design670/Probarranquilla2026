import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight } from './Icons';
import './ArrowLabel.css';

type Props = { children: ReactNode; size?: number; gap?: number };

/**
 * Texto + flecha de los CTA. En reposo la flecha va al final; con hover o
 * foco del enlace/botón que lo contiene, pasa al inicio y el texto se corre.
 */
export function ArrowLabel({ children, size = 14, gap = 8 }: Props) {
  const style = { '--arrow-size': `${size}px`, '--arrow-gap': `${gap}px` } as CSSProperties;
  return (
    <span className="arrow-swap" style={style}>
      <ArrowRight className="arrow-swap__lead" width={size} height={size} />
      <span className="arrow-swap__text">{children}</span>
      <ArrowRight className="arrow-swap__trail" width={size} height={size} />
    </span>
  );
}
