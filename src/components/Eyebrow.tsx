import './Eyebrow.css';

type Props = {
  children: string;
  /** `pill` = etiqueta delineada; `plain` = texto pequeño sin borde. */
  variant?: 'pill' | 'pill-dark' | 'plain';
  className?: string;
};

/** Etiqueta pequeña que antecede a los títulos de sección. */
export function Eyebrow({ children, variant = 'pill', className = '' }: Props) {
  return <p className={`eyebrow eyebrow--${variant} ${className}`}>{children}</p>;
}

/** Subrayado azul corto bajo los títulos centrados. */
export function TitleRule() {
  return <span className="title-rule" aria-hidden="true" />;
}
