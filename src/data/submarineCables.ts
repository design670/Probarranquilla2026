import { continentalProjection } from './continentalMap';

/**
 * Cables submarinos de fibra óptica que llegan al Atlántico, para el mapa continental de
 * "Conectividad en telecomunicaciones".
 *
 * Trazados a partir de la referencia enviada por el cliente (fuente citada en ella:
 * Submarine Cable Map, 2025). Las rutas son ilustrativas: siguen el recorrido de la
 * imagen, no el tendido exacto (ver PENDIENTES.md).
 */

type LatLon = [number, number];

/** Misma Mercator de d3 que la geografía del mapa continental. */
export function projectContinental([lat, lon]: LatLon): [number, number] {
  const { scale, tx, ty } = continentalProjection;
  const φ = (lat * Math.PI) / 180;
  const λ = (lon * Math.PI) / 180;
  return [+(tx + scale * λ).toFixed(1), +(ty - scale * Math.log(Math.tan(Math.PI / 4 + φ / 2))).toFixed(1)];
}

/** Puntos de llegada (lat, lon). Barranquilla usa el punto del mapa para coincidir con el marcador. */
const L = {
  bocaRaton: [26.35, -80.08],
  miami: [25.77, -80.19],
  cancun: [21.16, -86.85],
  puertoBarrios: [15.73, -88.6],
  puertoSanJose: [13.92, -90.82],
  sanJuan: [18.47, -66.11],
  stCroix: [17.73, -64.75],
  puntaCana: [18.58, -68.4],
  colon: [9.36, -79.9],
  balboa: [8.95, -79.57],
  cartagena: [10.4, -75.54],
  catiaLaMar: [10.6, -67.03],
  fortaleza: [-3.72, -38.54],
  salvador: [-12.97, -38.5],
  rio: [-22.9, -43.2],
  santos: [-24.0, -46.33],
  lasToninas: [-36.49, -56.7],
  salinas: [-2.21, -80.97],
  lurin: [-12.28, -76.87],
  arica: [-18.48, -70.32],
  valparaiso: [-33.05, -71.62],
} satisfies Record<string, LatLon>;

/** `null` = Barranquilla (se reemplaza por el punto del marcador). */
const BAQ = null;
type Waypoint = LatLon | null;

type SubmarineCable = { id: string; color: string; paths: Waypoint[][] };
const cable = (id: string, color: string, paths: Waypoint[][]): SubmarineCable => ({ id, color, paths });

/** Cuatro cables, un color cada uno, como en la referencia. */
const submarineCables: SubmarineCable[] = [
  // Morado: Florida por el Atlántico a Brasil; Barranquilla con las Antillas y Venezuela
  cable('morado', '#9b7bea', [
    [L.bocaRaton, [27.6, -76.0], [22.0, -63.0], [13.0, -53.0], [3.0, -42.0], L.fortaleza, [-8.0, -33.6], [-20.0, -37.6], L.rio],
    [L.stCroix, [19.6, -63.6], [22.0, -63.0]],
    [L.stCroix, [14.2, -70.0], BAQ],
    [BAQ, [12.0, -73.6], [12.9, -71.6], [12.2, -69.6], [11.6, -68.2], L.catiaLaMar, [11.8, -62.0], [8.0, -53.0], [2.0, -44.0], L.fortaleza],
  ]),
  // Azul: Miami a República Dominicana, Barranquilla y Brasil; ramal al golfo de Honduras
  cable('azul', '#3b8ff0', [
    [L.miami, [23.8, -79.6], [21.2, -75.4], [20.2, -71.0], [19.4, -68.6], L.puntaCana],
    [L.puntaCana, [16.8, -68.8], [13.4, -72.4], BAQ],
    [L.puntaCana, [16.6, -62.0], [7.0, -47.0], L.fortaleza, [-8.4, -34.2], L.salvador],
    [L.miami, [23.8, -82.5], [22.6, -85.6], L.cancun, [18.6, -86.6], [16.4, -87.4], L.puertoBarrios],
    [BAQ, [12.4, -77.6], [15.2, -82.4], [16.4, -86.4], L.puertoBarrios],
    [L.cartagena, [11.6, -76.4]],
  ]),
  // Verde: Florida a Puerto Rico y toda la costa atlántica hasta Argentina;
  // Barranquilla a Panamá y por el Pacífico hasta Chile
  cable('verde', '#3fbf7f', [
    [L.bocaRaton, [25.0, -77.2], [21.6, -70.6], L.sanJuan, [16.4, -61.6], [8.0, -48.0], L.fortaleza, [-6.0, -34.2], L.salvador, [-18.0, -37.4], L.rio, L.santos, [-30.0, -48.4], L.lasToninas],
    [L.sanJuan, [14.8, -69.0], BAQ],
    [BAQ, [10.2, -77.6], L.colon, L.balboa],
    [L.balboa, [5.0, -80.6], [0.0, -81.4], L.salinas, [-6.0, -82.0], L.lurin, [-15.0, -76.2], L.arica, [-25.0, -71.6], L.valparaiso],
    [L.balboa, [7.4, -83.6], [11.0, -88.0], L.puertoSanJose],
  ]),
  // Celeste: Barranquilla con el Caribe occidental y Florida
  cable('celeste', '#5ec8dc', [
    [BAQ, [13.2, -80.6], [16.2, -85.4], L.puertoBarrios],
    [L.miami, [24.2, -83.4], [22.9, -86.2], L.cancun],
    [L.colon, [11.2, -78.6], L.cartagena],
  ]),
];

/** Puertos de llegada que se marcan con un punto (además de Barranquilla). */
const cableLandings: LatLon[] = Object.values(L);

/** Cables ya proyectados al lienzo del mapa; `hub` es el punto de Barranquilla en ese lienzo. */
export function projectCables(hub: [number, number]) {
  const pt = (w: Waypoint) => (w === BAQ ? hub : projectContinental(w));
  return {
    cables: submarineCables.map((c) => ({ id: c.id, color: c.color, paths: c.paths.map((p) => p.map(pt)) })),
    landings: cableLandings.map(projectContinental),
  };
}
