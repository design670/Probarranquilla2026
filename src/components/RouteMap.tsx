import { useEffect, useId, useState } from 'react';
import { airMapSize, type AirMapGeo } from '../data/airMaps';
import './RouteMap.css';

export type MapLabel = { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
export type MapStop = { id: string; name: string; label: MapLabel };

type Props = {
  geo: AirMapGeo;
  hub: { id: string; name: string; label: MapLabel };
  stops: MapStop[];
  ariaLabel: string;
  /** `air` línea continua; `sea` y `road` punteadas */
  kind?: 'air' | 'sea' | 'road';
};

const { width: W, height: H } = airMapSize;
const EDGE = 14;

/** Lleva un destino fuera del encuadre (p. ej. Madrid) al borde del mapa, en su misma dirección. */
function clampToEdge([x0, y0]: [number, number], [x, y]: [number, number]): [number, number] {
  if (x >= EDGE && x <= W - EDGE && y >= EDGE && y <= H - EDGE) return [x, y];
  const dx = x - x0;
  const dy = y - y0;
  const t = Math.min(dx > 0 ? (W - EDGE - x0) / dx : dx < 0 ? (EDGE - x0) / dx : Infinity, dy > 0 ? (H - EDGE - y0) / dy : dy < 0 ? (EDGE - y0) / dy : Infinity);
  return [x0 + dx * t, y0 + dy * t];
}

/** Arco suave entre dos puntos. */
function arc([x1, y1]: [number, number], [x2, y2]: [number, number], k: number) {
  const cx = (x1 + x2) / 2 + (y2 - y1) * k;
  const cy = (y1 + y2) / 2 - (x2 - x1) * k;
  return `M${x1} ${y1} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

/** Mapa SVG con geografía real (Natural Earth) y rutas desde Barranquilla. */
export function RouteMap({ geo, hub, stops, ariaLabel, kind = 'air' }: Props) {
  const h = geo.pts[hub.id];
  const k = kind === 'road' ? 0.08 : 0.18;
  const uid = useId().replace(/:/g, '');
  // Aviones animados sobre las rutas aéreas (se omiten con movimiento reducido)
  const [planes, setPlanes] = useState(false);
  useEffect(() => {
    setPlanes(kind === 'air' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, [kind]);
  return (
    <svg className={`rmap rmap--${kind}`} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaLabel} preserveAspectRatio="xMidYMid meet">
      {/* Los bordes de la geografía se funden con el fondo: todos los mapas se ven iguales */}
      <defs>
        <radialGradient id={`${uid}-fade`} cx="50%" cy="50%" r="62%">
          <stop offset="70%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <mask id={`${uid}-mask`}>
          <rect width={W} height={H} fill={`url(#${uid}-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${uid}-mask)`}>
        <path className="rmap__land" d={geo.land} />
        <path className="rmap__focus" d={geo.focus} />
      </g>
      {stops.map((s, i) => {
        const p = geo.pts[s.id];
        const end = clampToEdge(h, p);
        const outside = end[0] !== p[0] || end[1] !== p[1];
        return (
          <g key={s.id} className="rmap__route" style={{ animationDelay: `${i * 80}ms` }}>
            <path className="rmap__line" d={arc(h, end, k)} pathLength={1} />
            {planes && (
              <g className="rmap__plane" opacity={0}>
                {/* Avión apuntando a la derecha; animateMotion lo gira según la ruta */}
                <path d="M9 0 L3 -1.6 L-2 -7 L-4 -7 L-1.2 -1.6 L-6 -1.4 L-8 -3.6 L-9.4 -3.6 L-8.2 0 L-9.4 3.6 L-8 3.6 L-6 1.4 L-1.2 1.6 L-4 7 L-2 7 L3 1.6 Z" />
                <animateMotion dur={`${5 + (i % 3)}s`} begin={`${0.9 + i * 0.6}s`} repeatCount="indefinite" rotate="auto" path={arc(h, end, k)} />
                <set attributeName="opacity" to="1" begin={`${0.9 + i * 0.6}s`} />
              </g>
            )}
            {outside ? (
              <path className="rmap__arrow" d="M-7 -6 L5 0 L-7 6" transform={`translate(${end[0]} ${end[1]}) rotate(${(Math.atan2(end[1] - h[1], end[0] - h[0]) * 180) / Math.PI})`} />
            ) : (
              <circle className="rmap__dot" cx={end[0]} cy={end[1]} r={4.5} />
            )}
            <text className="rmap__label" x={end[0] + s.label.dx} y={end[1] + s.label.dy} textAnchor={s.label.anchor}>
              {s.name}
            </text>
          </g>
        );
      })}
      <circle className="rmap__hub-halo" cx={h[0]} cy={h[1]} r={13} />
      <circle className="rmap__hub" cx={h[0]} cy={h[1]} r={6.5} />
      <text className="rmap__label rmap__label--hub" x={h[0] + hub.label.dx} y={h[1] + hub.label.dy} textAnchor={hub.label.anchor}>
        {hub.name}
      </text>
    </svg>
  );
}
