import type { MouseEvent } from 'react';

/**
 * Desplazamiento suave hasta una sección de la misma página (instantáneo si el
 * usuario prefiere reducir el movimiento). El destino define su separación del
 * borde con `scroll-margin-top`. Mantiene el `href` como respaldo sin JS.
 */
export function scrollToAnchor(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}
