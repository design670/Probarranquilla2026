/**
 * Página "Haz tu evento en Barranquilla — Turismo de reuniones".
 * Textos transcritos de "Haz tu evento - Turismo de reuniones.png" (1366 px).
 * Cuando el prompt y la imagen difieren, manda la imagen (ver PENDIENTES.md).
 *
 * `null` = recurso o dato pendiente: la interfaz no lo muestra como definitivo.
 */
import type { ImageAsset } from '../components/SmartImage';
import { routes, type SuccessStoriesData } from './content';

const A = (src: string, alt: string, position = '50% 50%'): ImageAsset => ({ src: `/assets/evento/${src}`, alt, fit: 'cover', position });

/** Anclas internas de la página (los botones del hero desplazan hasta ellas) */
export const eventAnchors = { apoyo: 'como-te-apoyamos', formulario: 'postula-tu-evento' };

export const eventHero = {
  title: 'Barranquilla, el punto de encuentro del Caribe para los grandes eventos.',
};

/* ---------- Ventajas estratégicas: conectividad aérea ---------- */

/** Etiqueta de una ciudad en el mapa: desplazamiento y lado del texto respecto al punto */
export type MapLabel = { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
export type Destination = { id: string; name: string; label: MapLabel };
export type Airline = { name: string; logo: string };
export type AirView = {
  id: 'internacional' | 'nacional';
  tab: string;
  /** Frase clave del mapa */
  phrase: string;
  destinations: Destination[];
  airlines: Airline[];
  mapLabel: string;
};

/** Logos de aerolíneas: de internet (Wikimedia Commons y sitios oficiales) hasta recibir los de audiovisuales */
const logo = (slug: string, name: string): Airline => ({ name, logo: `/assets/evento/aerolineas/${slug}.png` });

export const connectivity = {
  title: 'Ventajas Estratégicas del Destino',
  subtitle: 'Rutas aéreas hacia Barranquilla',
  cardTitle: 'Conectividad aérea',
  intro: 'Red de rutas aéreas directas hacia el Aeropuerto Internacional Ernesto Cortissoz (BAQ).',
  hub: { id: 'baq', name: 'Barranquilla' },
  destinationsLabel: 'Destinos directos',
  airlinesLabel: 'Aerolíneas que operan las rutas',
  views: [
    {
      id: 'internacional',
      tab: 'Internacional',
      phrase: 'Conexiones vía Panamá y Miami que amplían nuestro alcance hacia más de 150 destinos internacionales en las Américas y Europa.',
      mapLabel: 'Mapa de rutas internacionales directas desde Barranquilla hacia Madrid, Miami, Fort Lauderdale, Ciudad de Panamá, Aruba y Curazao',
      destinations: [
        { id: 'madrid', name: 'Madrid', label: { dx: -10, dy: -12, anchor: 'end' } },
        { id: 'miami', name: 'Miami', label: { dx: -10, dy: 16, anchor: 'end' } },
        { id: 'fll', name: 'Fort Lauderdale', label: { dx: 10, dy: -6, anchor: 'start' } },
        { id: 'panama', name: 'Ciudad de Panamá', label: { dx: 0, dy: 24, anchor: 'middle' } },
        { id: 'aruba', name: 'Aruba', label: { dx: -8, dy: -12, anchor: 'end' } },
        { id: 'curazao', name: 'Curazao', label: { dx: 8, dy: -12, anchor: 'start' } },
      ],
      airlines: [
        logo('avianca', 'Avianca'),
        logo('air-europa', 'Air Europa'),
        logo('american-airlines', 'American Airlines'),
        logo('jetblue', 'JetBlue'),
        logo('wingo', 'Wingo'),
        logo('ez-air', 'EZ Air'),
        logo('copa-airlines', 'Copa Airlines'),
      ],
    },
    {
      id: 'nacional',
      tab: 'Nacional',
      phrase: 'Vuelos hacia las principales ciudades del país y conexión con Bogotá, uno de los grandes hubs aéreos de América Latina.',
      mapLabel: 'Mapa de rutas nacionales directas desde Barranquilla hacia Bogotá, Medellín, Cali, Bucaramanga, San Andrés, Cúcuta, Riohacha y Montería',
      destinations: [
        { id: 'bogota', name: 'Bogotá', label: { dx: 10, dy: 6, anchor: 'start' } },
        { id: 'medellin', name: 'Medellín', label: { dx: -10, dy: 5, anchor: 'end' } },
        { id: 'cali', name: 'Cali', label: { dx: -10, dy: 5, anchor: 'end' } },
        { id: 'bucaramanga', name: 'Bucaramanga', label: { dx: 10, dy: 8, anchor: 'start' } },
        { id: 'sanandres', name: 'San Andrés', label: { dx: 10, dy: 5, anchor: 'start' } },
        { id: 'cucuta', name: 'Cúcuta', label: { dx: 10, dy: 0, anchor: 'start' } },
        { id: 'riohacha', name: 'Riohacha', label: { dx: 10, dy: -4, anchor: 'start' } },
        { id: 'monteria', name: 'Montería', label: { dx: -10, dy: 5, anchor: 'end' } },
      ],
      airlines: [
        logo('avianca', 'Avianca'),
        logo('wingo', 'Wingo'),
        logo('latam', 'LATAM'),
        logo('jetsmart', 'JetSMART'),
        logo('satena', 'Satena'),
      ],
    },
  ] satisfies AirView[],
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
  subtitle: ['Somos tu aliado para hacer realidad tu evento en', 'Barranquilla y el Atlántico:'],
  stages: [
    {
      id: 'candidaturas',
      label: ['Apoyo a', 'candidaturas'],
      title: 'Apoyo a candidaturas',
      description: 'Te acompañamos en la postulación, preparación de propuesta y candidatura, presentaciones del destino y demás gestiones para lograr ser la sede de tu evento.',
      highlight: null,
      photo: A('etapa-apoyo-a-candidaturas.jpg', 'Apoyo a candidaturas'),
    },
    {
      id: 'aliados',
      label: ['Conexión con aliados', 'estratégicos'],
      title: 'Conexión con aliados estratégicos',
      description: 'Articulamos entidades públicas, empresas, universidades y gremios para sumar apoyos y oportunidades a tu evento.',
      highlight: null,
      photo: A('etapa-conexion-con-aliados.jpg', 'Conexión con aliados estratégicos'),
    },
    {
      id: 'proveedores',
      label: ['Acceso a proveedores', 'locales'],
      title: 'Acceso a proveedores locales',
      description: 'Te conectamos con hoteles, recintos, operadores y proveedores especializados según las necesidades de tu evento.',
      highlight: null,
      photo: A('etapa-acceso-a-proveedores.jpg', 'Acceso a proveedores locales'),
    },
    {
      id: 'inspeccion',
      label: ['Visitas de inspección', 'y asesoría'],
      title: 'Visitas de inspección y asesoría',
      description: 'Coordinamos recorridos y te brindamos información del destino para facilitar la elección de espacios y la planeación.',
      highlight: null,
      photo: A('etapa-visitas-de-inspeccion.jpg', 'Visitas de inspección y asesoría'),
    },
    {
      id: 'experiencias',
      label: ['Experiencias de', 'destino'],
      title: 'Experiencias de destino',
      description: 'Facilitamos la integración de experiencias culturales, gastronómicas y turísticas para enriquecer la visita de tus asistentes.',
      highlight: null,
      photo: A('etapa-experiencias-de-destino.jpg', 'Experiencias de destino'),
    },
  ] as SupportStage[],
};

/* ---------- Resultados e impacto ---------- */

export const eventResults = {
  title: 'Resultados e impacto',
  text: ['Cada evento que llega a Barranquilla impulsa el desarrollo económico,', 'fortalece los sectores estratégicos y posiciona a la ciudad como un destino', 'competitivo para el Turismo de Reuniones.'],
  stats: [
    { tone: 'navy', value: '+57', unit: '', label: ['EVENTOS', 'CAPTADOS'], align: 'start' },
    { tone: 'orange', value: '+USD 74', unit: '', label: ['MILLONES EN', 'DERRAMA', 'ECONÓMICA'], align: 'center' },
    { tone: 'teal', value: '+80', unit: '', label: ['MIL ASISTENTES', 'DE TODO EL MUNDO'], align: 'start' },
  ] as { tone: 'navy' | 'orange' | 'teal'; value: string; unit: string; label: string[]; align: 'start' | 'center' }[],
  note: '*Periodo: últimos 5 años',
};

/* ---------- Casos de éxito (solo esta página) ---------- */

/**
 * Eventos realizados en Barranquilla. Fotos tomadas de probarranquilla.org (OCDE) y de la prensa
 * que cubrió cada evento. Pendientes: Fedetranscarga, ExpoACCCSA y Cirugía Plástica.
 */
export const eventCases: SuccessStoriesData = {
  title: 'Casos de éxito',
  subtitle: 'Conoce algunos de los eventos que han elegido Barranquilla como su sede',
  moreHref: routes.casosDeExito,
  cases: [
    { company: 'IRONMAN 70.3', meta: '2026 — 5.000 asistentes', image: '/assets/evento/casos/ironman-70-3.jpg', alt: 'Triatleta con la bandera de Argentina celebra en la meta del IRONMAN 70.3 Barranquilla', lead: '', body: 'Competencia internacional de triatlón que reúne atletas profesionales y aficionados en pruebas de natación, ciclismo y carrera.' },
    { company: 'Fedepalma', meta: '2026 — 1.500 asistentes', image: '/assets/evento/casos/fedepalma.jpg', alt: 'Racimos de fruto de palma de aceite recién cosechados', lead: '', body: 'Encuentro del sector palmero colombiano que reúne empresarios, productores y actores de la cadena alrededor de los principales temas de la agroindustria de la palma de aceite.' },
    { company: 'Encuentro de Empresarios de Transporte de Carga y Logística de Fedetranscarga', meta: '2026 — 3.000 asistentes', image: '/assets/evento/casos/fedetranscarga.jpg', alt: 'Encuentro de Empresarios de Transporte de Carga y Logística de Fedetranscarga', lead: '', body: 'Evento empresarial del sector de transporte de carga y logística que reúne compañías, líderes y actores de esta industria para abordar tendencias y desafíos del sector.' },
    { company: 'Latam Fintech', meta: '2026 — 1.800 asistentes', image: '/assets/evento/casos/latam-fintech.jpg', alt: 'Conferencista en el escenario del Latam Fintech Market en Barranquilla', lead: '', body: 'Encuentro de la industria fintech que conecta empresas, líderes y actores del ecosistema financiero y tecnológico de América Latina.' },
    { company: 'Giro de Rigo', meta: '2025 — 10.000 asistentes', image: '/assets/evento/casos/giro-de-rigo.jpg', alt: 'Ciclista junto a la escultura de la Puerta de Oro en Barranquilla', lead: '', body: 'Evento de ciclismo liderado por Rigoberto Urán que reúne a miles de ciclistas aficionados alrededor de una experiencia deportiva de gran formato.' },
    { company: 'ExpoACCCSA', meta: '2025 — 700 asistentes', image: '/assets/evento/casos/expoacccsa.jpg', alt: 'ExpoACCCSA', lead: '', body: 'Encuentro especializado de la industria de cartón corrugado que reúne empresas, proveedores y profesionales del sector.' },
    { company: 'Curso Internacional de Cirugía Plástica', meta: '2025 — 1.200 asistentes', image: '/assets/evento/casos/curso-cirugia-plastica.jpg', alt: 'Curso Internacional de Cirugía Plástica', lead: '', body: 'Encuentro académico y científico que reúne especialistas nacionales e internacionales para actualizar conocimientos y compartir avances en cirugía plástica.' },
    { company: 'Foro de Desarrollo Local de la OCDE', meta: '2025 — 500 asistentes', image: '/assets/evento/casos/foro-ocde.jpg', alt: 'Asistentes en una sesión del Foro de Desarrollo Local de la OCDE', lead: '', body: 'Encuentro internacional de la OCDE que reúne representantes de gobiernos, sector privado, academia y organizaciones para intercambiar experiencias sobre desarrollo local.' },
    { company: 'Congreso Panamericano de Reumatología', meta: '2024 — 1.800 asistentes', image: '/assets/evento/casos/congreso-reumatologia.jpg', alt: 'Panel de especialistas en el escenario del Congreso Panamericano de Reumatología', lead: '', body: 'Congreso científico internacional que reúne especialistas de las Américas para compartir avances, investigación y conocimiento en reumatología.' },
  ],
};

/* ---------- Biblioteca de recursos ---------- */

export type CityResource = {
  id: string;
  title: string;
  description: string;
  /** Tipo visible en la tarjeta */
  kind: string;
  cta: string;
  href: string;
  /** `download`: pasa por el formulario; `link`: abre el sitio en otra pestaña */
  action: 'download' | 'link';
  cover: ImageAsset;
};

export const cityLibrary = {
  title: 'Kit de promoción de ciudad',
  text: 'Guías y recursos para planear y promocionar tu evento en Barranquilla.',
  resources: [
    {
      id: 'guia-de-ciudad',
      title: 'Guía de Ciudad',
      description: 'Lo esencial de Barranquilla para tus asistentes.',
      kind: 'PDF',
      cta: 'Descargar guía',
      href: 'https://probarranquilla.org/wp-content/uploads/2025/08/GUIA-DE-CIUDAD.pdf',
      action: 'download',
      cover: A('recursos/guia-de-ciudad.jpg', 'Portada de la Guía de Ciudad de Barranquilla', '50% 16%'),
    },
    {
      id: 'guia-gastronomica',
      title: 'Guía Gastronómica',
      description: 'Restaurantes y sabores de la ciudad.',
      kind: 'PDF',
      cta: 'Descargar guía',
      href: 'https://probarranquilla.org/wp-content/uploads/2025/08/GUIA-GASTRONOMICO-JULIO-2025.pdf',
      action: 'download',
      cover: A('recursos/guia-gastronomica.jpg', 'Portada de la Guía Gastronómica de Barranquilla', '50% 16%'),
    },
    {
      id: 'descubre-barranquilla',
      title: 'Descubre Barranquilla',
      description: 'Portal oficial de turismo de la ciudad.',
      kind: 'Sitio web',
      cta: 'Visitar sitio',
      href: 'https://baq.com.co/es/inicio/',
      action: 'link',
      cover: A('recursos/descubre-barranquilla.jpg', 'Collage del portal de turismo de Barranquilla: Carnaval, estatua de Shakira y edificio emblemático'),
    },
  ] satisfies CityResource[],
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
  /** Habitaciones */
  rooms: string;
  /** Salones y capacidad; null si el cliente no lo indicó */
  venues: string | null;
  address: string;
  href: string;
  photo: ImageAsset;
  /** Foto del interior: aparece al pasar el cursor */
  photoHover?: ImageAsset;
};

/** Fotos de hoteles y venues: pendientes (las envía el cliente) */
const H = (slug: string, alt: string) => A(`hoteles/${slug}.jpg`, alt);

export const memberHotels = {
  title: 'Infraestructura para eventos',
  venuesHeading: 'Venues',
  hotelsHeading: 'Hoteles',
  cta: 'Conoce más',
  labels: { rooms: 'Habitaciones', venues: 'Salones', address: 'Dirección', capacity: 'Capacidad' },
  venue: {
    id: 'puerta-de-oro',
    name: 'Centro de Eventos Puerta de Oro',
    capacity: 'Hasta 10.000 personas en formato cóctel y 7.000 en auditorio.',
    href: 'https://corferias.com/es/ciudad-barranquilla/2024',
    photo: H('puerta-de-oro', 'Centro de Eventos Puerta de Oro en Barranquilla'),
  },
  // Orden indicado por el cliente
  hotels: [
    {
      id: 'marriott',
      name: 'Hotel Marriott',
      rooms: '191',
      venues: '8 salones, capacidad máxima 700 personas en auditorio.',
      address: 'Calle 1A #25-40 Lote D7 Portal del Genovés, Barranquilla, Colombia',
      href: 'https://www.marriott.com/es/hotels/baqmc-barranquilla-marriott-hotel/overview/',
      photo: H('marriott', 'Hotel Marriott Barranquilla'),
      photoHover: H('marriott-interior', 'Interior del restaurante del Hotel Marriott'),
    },
    {
      id: 'ghl',
      name: 'Hotel GHL Barranquilla',
      rooms: '126',
      venues: null,
      address: 'Calle 107 No. 50-69, Barranquilla, Atlántico',
      href: 'https://www.ghlgrandbarranquilla.com/',
      photo: H('ghl', 'Hotel GHL Barranquilla'),
      photoHover: H('ghl-interior', 'Lobby del Hotel GHL Barranquilla'),
    },
    {
      id: 'el-prado',
      name: 'Hotel El Prado',
      rooms: '213',
      venues: '13 salones, capacidad máxima 600 personas en auditorio.',
      address: 'Carrera 54 #70-10, Barranquilla, Atlántico',
      href: 'https://hotelelpradobarranquilla.com/',
      photo: H('el-prado', 'Hotel El Prado en Barranquilla'),
      photoHover: H('el-prado-interior', 'Piscina y jardines del Hotel El Prado'),
    },
    {
      id: 'estelar',
      name: 'Hotel Estelar Alto Prado',
      rooms: '180',
      venues: '3 salones, capacidad máxima 150 personas en auditorio.',
      address: 'Cl. 76 No. 56-29, Barranquilla, Atlántico',
      href: 'https://www.estelarenaltoprado.com/es/',
      photo: H('estelar-alto-prado', 'Hotel Estelar Alto Prado en Barranquilla'),
      photoHover: H('estelar-alto-prado-interior', 'Lobby del Hotel Estelar Alto Prado'),
    },
    {
      id: 'hilton-garden-inn',
      name: 'Hotel Hilton Garden Inn',
      rooms: '123',
      venues: '+10 salones, capacidad máxima 900 personas en auditorio.',
      address: 'Carrera 53, Calle 100-86, Barranquilla, Atlántico',
      href: 'https://www.hilton.com/es/locations/colombia/barranquilla/hilton-garden-inn/',
      photo: H('hilton-garden-inn', 'Hotel Hilton Garden Inn Barranquilla'),
      photoHover: H('hilton-garden-inn-interior', 'Fachada del Hotel Hilton Garden Inn'),
    },
    {
      id: 'dann-carlton',
      name: 'Hotel Dann Carlton',
      rooms: '178',
      venues: '+15 salones, capacidad máxima 1.300 personas en auditorio.',
      address: 'Cl. 98 #52B-10, Barranquilla, Atlántico',
      href: 'https://www.danncarltonbaq.co/',
      photo: H('dann-carlton', 'Hotel Dann Carlton Barranquilla'),
      photoHover: H('dann-carlton-interior', 'Lobby del Hotel Dann Carlton'),
    },
    {
      id: 'dorado-plaza',
      name: 'Hotel Dorado Plaza',
      rooms: '144',
      venues: '7 salones, capacidad máxima 300 personas en auditorio.',
      // Pendiente: es la misma dirección del Hilton Garden Inn (ver PENDIENTES.md)
      address: 'Carrera 53, Calle 100-86, Barranquilla, Atlántico',
      href: 'https://www.doradoplaza.com/es',
      photo: H('dorado-plaza', 'Hotel Dorado Plaza Alto Prado'),
    },
  ] satisfies Hotel[],
};

/* ---------- Contacto y formulario ---------- */

export const eventContact = {
  title: ['Planifica tu próximo', 'evento en Barranquilla.'],
  people: [
    {
      name: 'Fiorella Rivera',
      role: 'Gerente de Turismo de Reuniones',
      email: 'fiorella.rivera@probarranquilla.org',
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
