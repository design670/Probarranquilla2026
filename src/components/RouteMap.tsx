import { useEffect, useState } from 'react';
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
  /** Cables submarinos ya proyectados: cada uno con su color y sus tramos. */
  cables?: { id: string; color: string; paths: [number, number][][] }[];
  /** Puntos de llegada de los cables. */
  landings?: [number, number][];
  /** Fuente de los datos, abajo a la izquierda. */
  source?: string;
  /** Solo el país en foco (Colombia), sin los países vecinos: mapas nacional y terrestre. */
  soloFocus?: boolean;
};

const EDGE = 14;

/** Lleva un destino fuera del encuadre (p. ej. Madrid) al borde del mapa, en su misma dirección. */
function clampToEdge([x0, y0]: [number, number], [x, y]: [number, number], W: number, H: number): [number, number] {
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
export function RouteMap({ geo, hub, stops, ariaLabel, kind = 'air', cables, landings, source, soloFocus = false }: Props) {
  const { width: W, height: H } = geo.size ?? airMapSize;
  const h = geo.pts[hub.id];
  const k = kind === 'road' ? 0.08 : 0.18;
  // Aviones animados sobre las rutas aéreas (se omiten con movimiento reducido)
  const [planes, setPlanes] = useState(false);
  useEffect(() => {
    setPlanes(kind === 'air' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, [kind]);
  return (
    <svg className={`rmap rmap--${kind}`} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaLabel} preserveAspectRatio="xMidYMid meet">
      {/* Sin difuminado: mapa azul claro sobre el fondo azul oscuro de la sección.
          En los mapas de Colombia (soloFocus) no se dibujan los países vecinos. */}
      <g>
        {!soloFocus && <path className="rmap__land" d={geo.land} />}
        <path className="rmap__focus" d={geo.focus} />
        {cables?.map((c, i) => (
          <g key={c.id} className="rmap__cable" style={{ stroke: c.color, animationDelay: `${i * 120}ms` }}>
            {c.paths.map((p, j) => (
              <path key={j} className="rmap__cable-line" d={`M${p.map(([x, y]) => `${x} ${y}`).join('L')}`} pathLength={1} />
            ))}
          </g>
        ))}
      </g>
      {landings?.map(([x, y]) => (
        <circle key={`${x}-${y}`} className="rmap__landing" cx={x} cy={y} r={3.6} />
      ))}
      {stops.map((s, i) => {
        const p = geo.pts[s.id];
        const end = clampToEdge(h, p, W, H);
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
          </g>
        );
      })}
      {/* Nombres al final: así ninguna línea de ruta pasa por encima de ellos */}
      {stops.map((s, i) => {
        const end = clampToEdge(h, geo.pts[s.id], W, H);
        return (
          <text key={s.id} className="rmap__label rmap__label--stop" style={{ animationDelay: `${i * 80}ms` }} x={end[0] + s.label.dx} y={end[1] + s.label.dy} textAnchor={s.label.anchor}>
            {s.name}
          </text>
        );
      })}
      <circle className="rmap__hub-halo" cx={h[0]} cy={h[1]} r={13} />
      <circle className="rmap__hub" cx={h[0]} cy={h[1]} r={6.5} />
      <text className="rmap__label rmap__label--hub" x={h[0] + hub.label.dx} y={h[1] + hub.label.dy} textAnchor={hub.label.anchor}>
        {hub.name}
      </text>
      {source && (
        <text className="rmap__source" x={16} y={H - 16}>
          {source}
        </text>
      )}
    </svg>
  );
}
