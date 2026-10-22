import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { connectivity, type AirView } from '../../data/evento';
import { airMapSize, internationalGeo, nationalGeo, type AirMapGeo } from '../../data/airMaps';
import { SmartImage } from '../../components/SmartImage';
import './AirConnectivity.css';

const GEO: Record<AirView['id'], AirMapGeo> = { internacional: internationalGeo, nacional: nationalGeo };
const { width: W, height: H } = airMapSize;
const EDGE = 14;

/** Lleva un destino fuera del encuadre (Madrid) al borde del mapa, en su misma dirección. */
function clampToEdge([x0, y0]: [number, number], [x, y]: [number, number]): [number, number] {
  if (x >= EDGE && x <= W - EDGE && y >= EDGE && y <= H - EDGE) return [x, y];
  const dx = x - x0;
  const dy = y - y0;
  const ts = [dx > 0 ? (W - EDGE - x0) / dx : dx < 0 ? (EDGE - x0) / dx : Infinity, dy > 0 ? (H - EDGE - y0) / dy : dy < 0 ? (EDGE - y0) / dy : Infinity];
  const t = Math.min(...ts);
  return [x0 + dx * t, y0 + dy * t];
}

/** Arco suave entre dos puntos (curva hacia la izquierda del trayecto). */
function arc([x1, y1]: [number, number], [x2, y2]: [number, number]) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const k = 0.18;
  const cx = mx + (y2 - y1) * k;
  const cy = my - (x2 - x1) * k;
  return `M${x1} ${y1} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function RouteMap({ view }: { view: AirView }) {
  const geo = GEO[view.id];
  const hub = geo.pts[connectivity.hub.id];
  return (
    <svg className="air__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={view.mapLabel} preserveAspectRatio="xMidYMid slice">
      <path className="air__land" d={geo.land} />
      <path className="air__focus" d={geo.focus} />
      {view.destinations.map((d, i) => {
        const end = clampToEdge(hub, geo.pts[d.id]);
        const outside = end[0] !== geo.pts[d.id][0] || end[1] !== geo.pts[d.id][1];
        return (
          <g key={d.id} className="air__route" style={{ animationDelay: `${i * 90}ms` }}>
            <path className="air__line" d={arc(hub, end)} pathLength={1} />
            {outside ? (
              // Destino fuera del mapa: flecha en el borde
              <path className="air__arrow" d="M-7 -6 L5 0 L-7 6" transform={`translate(${end[0]} ${end[1]}) rotate(${(Math.atan2(end[1] - hub[1], end[0] - hub[0]) * 180) / Math.PI})`} />
            ) : (
              <circle className="air__dot" cx={end[0]} cy={end[1]} r={4.5} />
            )}
            <text className="air__label" x={end[0] + d.label.dx} y={end[1] + d.label.dy} textAnchor={d.label.anchor}>
              {d.name}
            </text>
          </g>
        );
      })}
      <circle className="air__hub-halo" cx={hub[0]} cy={hub[1]} r={13} />
      <circle className="air__hub" cx={hub[0]} cy={hub[1]} r={6.5} />
      <text className="air__label air__label--hub" x={hub[0] + (view.id === 'nacional' ? -12 : 0)} y={hub[1] + (view.id === 'nacional' ? -12 : 28)} textAnchor={view.id === 'nacional' ? 'end' : 'middle'}>
        {connectivity.hub.name}
      </text>
    </svg>
  );
}

/** Ventajas del destino: conectividad aérea con mapa internacional y nacional (pestañas). */
export function AirConnectivity() {
  const c = connectivity;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const view = c.views[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + 1) % c.views.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="air" aria-labelledby="air-title">
      <div className="container">
        <h2 id="air-title" className="air__title">
          {c.title}
        </h2>
        <p className="air__subtitle">{c.subtitle}</p>

        <div className="air__card">
          <div className="air__info">
            <h3 className="air__card-title">{c.cardTitle}</h3>
            <p className="air__intro">{c.intro}</p>

            <div className="air__tabs" role="tablist" aria-label="Tipo de rutas">
              {c.views.map((v, i) => (
                <button
                  key={v.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${v.id}`}
                  aria-selected={i === active}
                  aria-controls={`${id}-panel`}
                  tabIndex={i === active ? 0 : -1}
                  className={`air__tab${i === active ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                >
                  {v.tab}
                </button>
              ))}
            </div>

            <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${view.id}`} className="air__panel" key={view.id}>
              <p className="air__phrase">{view.phrase}</p>

              <p className="air__label-small">{c.destinationsLabel}</p>
              <ul className="air__destinations">
                {view.destinations.map((d) => (
                  <li key={d.id}>{d.name}</li>
                ))}
              </ul>

              <p className="air__label-small">{c.airlinesLabel}</p>
              <ul className="air__airlines">
                {view.airlines.map((a) => (
                  <li key={a.name}>
                    <SmartImage src={a.logo} alt={a.name} kind="logo" height={26} className="air__logo" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="air__map" key={view.id}>
            <RouteMap view={view} />
          </div>
        </div>
      </div>
    </section>
  );
}
