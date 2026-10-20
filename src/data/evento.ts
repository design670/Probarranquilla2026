/**
 * Página "Haz tu evento en Barranquilla — Turismo de reuniones".
 * Textos transcritos de "Haz tu evento - Turismo de reuniones.png" (1366 px).
 * Cuando el prompt y la imagen difieren, manda la imagen (ver PENDIENTES.md).
 *
 * `null` = recurso o dato pendiente: la interfaz no lo muestra como definitivo.
 */
import type { ImageAsset } from '../components/SmartImage';

const A = (src: string, alt: string, position = '50% 50%'): ImageAsset => ({ src: `/assets/evento/${src}`, alt, fit: 'cover', position });

/** Anclas internas de la página (los botones del hero desplazan hasta ellas) */
export const eventAnchors = { apoyo: 'como-te-apoyamos', formulario: 'postula-tu-evento' };

export const eventHero = {
  title: ['Trae tu evento', 'a Barranquilla'],
  subtitle: ['Barranquilla, el punto de encuentro del', 'Caribe para los grandes eventos.'],
  text: ['Barranquilla: donde los eventos crean oportunidades', 'de largo plazo, impulsan industrias estratégicas y dejan', 'legado social y científico en el territorio.'],
  primary: { label: 'Postula tu evento', anchor: eventAnchors.formulario },
  secondary: { label: 'Conoce cómo te apoyamos', anchor: eventAnchors.apoyo },
};

/* ---------- Ventajas estratégicas: conectividad aérea ---------- */

export type Route = { city: string; duration: string; weekly: number; color: string };

export const connectivity = {
  title: 'Ventajas Estratégicas del Destino',
  subtitle: 'Rutas y Frecuencias Semanales hacia Barranquilla',
  cardTitle: 'Conectividad Aérea',
  intro: 'Red de rutas aéreas y frecuencias directas hacia el Aeropuerto Internacional Ernesto Cortissoz (BAQ).',
  tableTitle: 'Internacional → Barranquilla',
  columns: ['Destino Origen', 'Frecuencias Semanales'],
  routes: [
    { city: 'Miami', duration: '2h 45m', weekly: 10, color: '#1e293b' },
    { city: 'Panamá', duration: '1h 30m', weekly: 12, color: '#f97316' },
    { city: 'Fort Lauderdale', duration: '2h 50m', weekly: 7, color: '#0ea5e9' },
    { city: 'Curazao', duration: '1h 45m', weekly: 2, color: '#f59e0b' },
    { city: 'Aruba', duration: '1h 40m', weekly: 2, color: '#8b5cf6' },
  ] satisfies Route[],
  totalLabel: 'Total Frecuencias Semanales:',
  /** Total tal como aparece en la referencia */
  total: '33 vuelos/sem',
  airlinesLabel: 'Aerolíneas que operan la ruta:',
  // La referencia muestra los nombres como etiquetas de texto con el color de cada marca.
  airlines: [
    { name: 'avianca', color: '#e30613' },
    { name: 'American', color: '#0078d2' },
    { name: 'CopaAirlines', color: '#0f2a5f' },
    { name: 'spirit', color: '#d4a106' },
    { name: 'wingo', color: '#7b2fd0' },
    { name: 'EZAir', color: '#e8590c' },
  ],
  /** Mapa con las rutas (pendiente: archivo original). */
  map: A('mapa-rutas-aereas.png', 'Mapa del Caribe con las rutas aéreas directas desde Miami, Fort Lauderdale, Panamá y Curazao hacia Barranquilla'),
};

/* ---------- ¿Cómo te apoyamos? ---------- */

export type SupportStage = {
  id: string;
  label: string[];
  title: string;
  /** Pendiente cuando la referencia no desarrolla la etapa */
  description: string | null;
  highlight: { label: string; text: string } | null;
  photo: ImageAsset;
};

export const support = {
  title: '¿Cómo te apoyamos?',
  subtitle: ['Acompañamiento técnico, logístico y de postulación gratuito para', 'organizadores nacionales e internacionales.'],
  stages: [
    {
      id: 'atraccion',
      label: ['Atracción de', 'eventos'],
      title: 'Atracción de eventos',
      description: 'Identificamos oportunidades de alto impacto y lideramos estrategias para atraer congresos, convenciones y eventos que posicionen a Barranquilla a nivel global.',
      highlight: {
        label: 'Asesoría de valor técnico',
        text: 'Elaboramos estudios de viabilidad técnica y coordinamos agendas comerciales para captar eventos de gran escala.',
      },
      photo: A('etapa-atraccion-de-eventos.jpg', 'Auditorio con luces azules durante un evento, con el público frente a la tarima'),
    },
    {
      id: 'cadena',
      label: ['Articulación de la', 'cadena de valor'],
      title: 'Articulación de la cadena de valor',
      description: null,
      highlight: null,
      photo: A('etapa-articulacion-cadena-de-valor.jpg', 'Articulación de la cadena de valor'),
    },
    {
      id: 'candidaturas',
      label: ['Apoyo a', 'candidaturas'],
      title: 'Apoyo a candidaturas',
      description: null,
      highlight: null,
      photo: A('etapa-apoyo-a-candidaturas.jpg', 'Apoyo a candidaturas'),
    },
    {
      id: 'organizador',
      label: ['Acompañamiento', 'al organizador'],
      title: 'Acompañamiento al organizador',
      description: null,
      highlight: null,
      photo: A('etapa-acompanamiento-al-organizador.jpg', 'Acompañamiento al organizador'),
    },
    {
      id: 'promocion',
      label: ['Promoción del', 'destino'],
      title: 'Promoción del destino',
      description: null,
      highlight: null,
      photo: A('etapa-promocion-del-destino.jpg', 'Promoción del destino'),
    },
  ] satisfies SupportStage[],
};

/* ---------- Resultados e impacto ---------- */

export const eventResults = {
  title: 'Resultados e impacto',
  text: ['Cada evento que llega a Barranquilla impulsa el desarrollo económico,', 'fortalece los sectores estratégicos y posiciona a la ciudad como un destino', 'competitivo para el Turismo de Reuniones.'],
  stats: [
    { tone: 'navy', value: '+57', unit: '', label: ['CAPTADOS 2021-2025', '(Últimos 5 años)'], align: 'start' },
    { tone: 'orange', value: '+$74M', unit: 'USD', label: ['DERRAMA', 'ECONÓMICA'], align: 'center' },
    { tone: 'teal', value: '+81.564', unit: '', label: ['NÚMERO DE', 'ASISTENTES'], align: 'start' },
  ] as { tone: 'navy' | 'orange' | 'teal'; value: string; unit: string; label: string[]; align: 'start' | 'center' }[],
};

/* ---------- Biblioteca de recursos ---------- */

export const cityLibrary = {
  title: 'Biblioteca de recursos de ciudad',
  text: ['Encuentra las herramientas, guías y recursos que te ayudarán a planificar,', 'promover y hacer realidad tu evento en Barranquilla.'],
  // `href: null` = documento pendiente: el botón se muestra deshabilitado.
  guides: [
    { number: '01', title: ['Guía', 'de Ciudad'], cta: 'Ver Guía', href: null as string | null },
    { number: '02', title: ['Guía', 'gastronómica'], cta: 'Ver Guía', href: null as string | null },
  ],
};

/* ---------- Bloque audiovisual ---------- */

export const eventVideo = {
  title: 'Barranquilla, un destino que se vive',
  text: ['Descubre en formato audiovisual por qué Barranquilla es el escenario', 'ideal de América Latina para conectar personas, industrias de', 'vanguardia y oportunidades de inversión.'],
  cta: 'Reproducir video',
  /** URL embebible (YouTube/Vimeo) o archivo .mp4. Pendiente. */
  url: null as string | null,
};

/* ---------- Hoteles miembro ---------- */

export type Hotel = {
  id: string;
  name: string;
  location: string;
  stars: number;
  descriptor: string;
  rooms: string;
  venues: string;
  photo: ImageAsset;
};

export const memberHotels = {
  title: ['Conoce Barranquilla desde', 'nuestros hoteles miembro'],
  capacityLabel: 'Capacidad:',
  venuesLabel: 'Salones:',
  hotels: [
    {
      id: 'dann-carlton',
      name: 'Hotel Dann Carlton',
      location: 'Barranquilla',
      stars: 5,
      descriptor: 'Premium Business',
      rooms: '178 habitaciones',
      venues: '8 salones modernos',
      photo: A('hotel-dann-carlton.jpg', 'Vista aérea del Hotel Dann Carlton en Barranquilla'),
    },
    {
      id: 'el-prado',
      name: 'Hotel El Prado',
      location: 'Barranquilla (Alto Prado)',
      stars: 5,
      descriptor: 'Alto Prado',
      rooms: '213 habitaciones',
      venues: '6 salones corporativos',
      photo: A('hotel-el-prado.jpg', 'Entrada del Hotel El Prado con palmeras y banderas'),
    },
    {
      id: 'estelar',
      name: 'Hotel Estelar',
      location: 'Barranquilla',
      stars: 5,
      descriptor: 'Centro Empresarial',
      rooms: '191 habitaciones',
      venues: 'Centro de convenciones',
      photo: A('hotel-estelar.jpg', 'Fachada iluminada del Hotel Estelar al anochecer'),
    },
  ] satisfies Hotel[],
};

/* ---------- Contacto y formulario ---------- */

export const eventContact = {
  title: ['Planifica tu próximo', 'evento en Barranquilla.'],
  people: [
    {
      name: 'Fiorella Rivera',
      role: 'Gerencia de Turismo de Reuniones',
      email: 'Fiorella.rivera@probarranquilla.org',
      photo: { src: '/assets/equipo/fiorella-rivera.jpg', alt: '', fit: 'cover', position: '50% 25%' } as ImageAsset,
    },
    {
      name: 'Angélica Bolívar',
      role: 'Asesora de Turismo de Reuniones',
      email: 'angelica.bolivar@probarranquilla.org',
      photo: { src: '/assets/equipo/angelica-bolivar.jpg', alt: '', fit: 'cover', position: '50% 25%' } as ImageAsset,
    },
  ],
};

export const eventForm = {
  title: ['Hagamos realidad tu próximo evento', 'en Barranquilla.'],
  /**
   * Destino del formulario (POST JSON). Pendiente: sin endpoint el formulario
   * valida los campos pero no simula un envío exitoso.
   */
  endpoint: null as string | null,
  fields: {
    name: 'Nombre completo',
    organization: 'Organización / asociación',
    email: 'Correo electrónico',
    phone: 'Teléfono / whatsapp',
    eventType: 'Tipo de evento',
    attendees: 'Asistentes estimados',
    details: 'Detalles o requerimientos de tu evento',
  },
  // Opciones pendientes de confirmar con el cliente (la referencia muestra los selectores vacíos)
  eventTypes: [] as string[],
  attendeeRanges: [] as string[],
  submit: 'Enviar solicitud',
  sending: 'Enviando…',
  success: 'Recibimos tu solicitud. Nuestro equipo de Turismo de Reuniones te contactará pronto.',
  error: 'No fue posible enviar la solicitud en este momento. Escríbenos directamente a los correos de contacto.',
};
