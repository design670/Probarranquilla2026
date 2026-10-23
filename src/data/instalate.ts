/**
 * Página "Instálate en Barranquilla": recursos gráficos y textos.
 * Textos transcritos de "Instalate en Barranquilla.jpg" (1366 px).
 *
 * Para reemplazar una imagen, copia el archivo en /public con la ruta de `src`;
 * si cambia el encuadre, ajusta `position` (object-position) o `fit`.
 * El layout no depende de las dimensiones del archivo.
 */
import type { ImageAsset } from '../components/SmartImage';
import type { ImpactResults } from '../components/ImpactStatistics';
import { successStories, type SuccessStoriesData } from './content';
import { PENDING_HREF, type Link } from './content';

const A = (src: string, alt: string, extra: Partial<ImageAsset> = {}): ImageAsset => ({
  src: `/assets/instalate/${src}`,
  alt,
  fit: 'cover',
  position: '50% 50%',
  ...extra,
});

export const instalateAssets = {
  hero: A('hero-malecon.jpg', 'Vista aérea del Gran Malecón y el río Magdalena al atardecer, con canchas iluminadas y la ciudad al fondo', { position: '50% 45%' }),
  puerto: A('plataforma-portuaria.jpg', 'Actividad portuaria en Barranquilla'),
  mapaConectividad: A('mapa-conectividad-aerea.png', 'Mapa de rutas aéreas desde Barranquilla hacia Panamá, Miami, Fort Lauderdale y Curazao', { position: '100% 50%' }),
  mapaTerminales: A('mapa-terminales-portuarias.png', 'Mapa del río Magdalena con las terminales portuarias de Barranquilla'),
  zonasFrancas: {
    barranquilla: A('zf-barranquilla.jpg', 'Vista aérea de las bodegas de la Zona Franca de Barranquilla'),
    zofia: A('zf-zofia.jpg', 'Portería de ZOFIA Zona Franca Internacional del Atlántico'),
    palermo: A('zf-palermo.jpg', 'Vista aérea de las instalaciones de Palermo Sociedad Portuaria'),
    cayena: A('zf-la-cayena.jpg', 'Vista aérea de la entrada y bodegas de la Zona Franca La Cayena'),
    zoma: A('zf-zoma.jpg', 'Imagen del proyecto de la entrada de ZOMA Zona Franca Malambo'),
  },
  logosZonasFrancas: {
    barranquilla: A('logo-zf-barranquilla.png', 'Zona Franca de Barranquilla', { fit: 'contain' }),
    zofia: A('logo-zofia.png', 'ZOFIA', { fit: 'contain' }),
    palermo: A('logo-palermo.png', 'Palermo Sociedad Portuaria', { fit: 'contain' }),
    cayena: A('logo-la-cayena.png', 'Zona Franca La Cayena', { fit: 'contain' }),
    zoma: A('logo-zoma.png', 'ZOMA Zona Franca Malambo', { fit: 'contain' }),
  },
  retrato: A('profesional.png', 'Profesional sonriente con camisa azul, celular y tableta', { fit: 'contain', position: '50% 100%' }),
  formacion: {
    servicios: A('sena-servicios.jpg', 'Edificio de una sede del SENA en Barranquilla'),
    madera: A('sena-madera-muebles.jpg', 'Sede del SENA en Galapa para madera y muebles'),
    metalurgia: A('sena-metalurgia.jpg', 'Inauguración de la sede del SENA en Malambo'),
    logistica: A('sena-logistica.jpg', 'Inicio de obras de la sede del SENA de logística en Caribe Verde'),
    agro: A('sena-agro.jpg', 'Productos lácteos del Centro de Valor Agregado del SENA en Sabanalarga'),
  },
  bannerVision: A('banner-vision.jpg', 'Puente Pumarejo sobre el río Magdalena', { position: '50% 60%' }),
};

/* ---------- A. Hero ---------- */
export const instalateHero = {
  title: ['Instálate en Barranquilla'],
  primary: { label: 'Explora las ventajas', href: PENDING_HREF } satisfies Link,
  secondary: { label: 'Solicita acompañamiento', href: PENDING_HREF } satisfies Link,
};

/* ---------- B. Impacto ---------- */
/** Frase principal sobre la sección verde (antes estaba en el hero) */
export const instalateImpactTitle = ['Barranquilla y el Atlántico: Una ubicación estratégica,', 'la principal economía del Caribe colombiano', 'y un territorio que conecta talento,', 'negocios y oportunidades.'];

/** Cifras de Instálate (últimos 5 años) */
export const instalateResults = {
  heading: 'Una propuesta de valor respaldada por resultados',
  period: 'Últimos 5 años',
  stats: [
    { tone: 'navy', value: ['USD +2.000'], label: ['Millones en', 'inversión'] },
    { tone: 'orange', value: ['+14.000'], label: ['Empleos', 'directos'] },
    { tone: 'blue', value: ['80%'], label: ['De proyectos con', 'vocación exportadora'] },
  ],
} satisfies ImpactResults;

export const instalateImpactIntro =
  'Su ubicación estratégica, conectividad internacional, infraestructura portuaria y logística, talento humano y sólida base empresarial permiten a las compañías acercar sus operaciones a mercados clave, fortalecer sus cadenas de suministro y encontrar en el territorio las capacidades necesarias para crecer y expandirse desde Colombia.';

/* ---------- C. Plataforma portuaria ---------- */
export type IconName =
  | 'anchor' | 'ship' | 'globe' | 'leaf' | 'calendar' | 'dollar' | 'plane' | 'pin' | 'compass'
  | 'flame' | 'drop' | 'box' | 'archive' | 'cap' | 'flask' | 'gear' | 'chair' | 'factory' | 'conveyor' | 'tractor';

export const port = {
  eyebrow: 'CONECTIVIDAD PORTUARIA',
  title: 'Una plataforma portuaria para el mundo',
  card: {
    title: 'Conectividad portuaria',
    subtitle: 'Conectan a Barranquilla con el mundo.',
    stats: [
      { icon: 'anchor', value: '10', label: 'Terminales Portuarias' },
      { icon: 'ship', value: '11', label: 'Líneas regulares de navegación' },
      { icon: 'globe', value: '37', label: 'Rutas marítimas' },
    ] as { icon: IconName; value: string; label: string }[],
  },
  highlights: [
    { icon: 'leaf', title: '80% menos', text: 'emisiones de carbono por tonelada comparado con rutas desde China.' },
    { icon: 'calendar', title: '5 a 8 días', text: 'de tránsito marítimo entre Barranquilla y la costa este de Estados Unidos.' },
    { icon: 'dollar', title: '40% menos', text: 'en costos de flete frente a envíos desde Asia.' },
  ] as { icon: IconName; title: string; text: string }[],
};

/* ---------- D. Conectividad estratégica ---------- */
type L = { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
const lbl = (dx: number, dy: number, anchor: L['anchor']): L => ({ dx, dy, anchor });

export type ConnectivityMap = {
  geo: 'internacional' | 'nacional';
  kind: 'air' | 'sea' | 'road';
  hubLabel: L;
  stops: { id: string; name: string; label: L }[];
  ariaLabel: string;
};

export type ConnectivityContent = {
  /** Título del cuadro (sin número) */
  title: string;
  heading: string;
  subheading?: string;
  /** Lista con ícono (aérea, telecomunicaciones) */
  items?: { icon: IconName; title?: string; text: string }[];
  /** Cifras grandes (portuaria) */
  stats?: { icon: IconName; value: string; text: string }[];
  /** Tabla de distancias (terrestre) */
  table?: { columns: [string, string, string]; rows: [string, string, string][] };
  map: ConnectivityMap;
  /** Cuadro azul sobre el mapa: cifras en chips o un texto */
  highlight?: { title?: string; chips?: { icon: IconName; text: string[] }[]; text?: string };
};

export const connectivity = {
  title: 'Conectividad Estratégica',
  tabs: [
    {
      id: 'portuaria',
      label: 'Conectividad portuaria',
      content: {
        title: 'Una plataforma portuaria para el mundo',
        heading: 'CONECTIVIDAD PORTUARIA',
        subheading: 'Cerca de los principales mercados',
        stats: [
          { icon: 'calendar', value: '5 a 8 días', text: 'de tránsito entre Barranquilla y el Puerto de Miami, que se conecta con gran parte de Estados Unidos.' },
          { icon: 'dollar', value: '40% menos', text: 'en costos de flete frente a envíos desde Asia.' },
          { icon: 'leaf', value: '80% menos', text: 'emisiones de carbono por tonelada comparado con rutas desde China.' },
        ],
        map: {
          geo: 'internacional',
          kind: 'sea',
          hubLabel: lbl(0, 28, 'middle'),
          stops: [{ id: 'miami', name: 'Puerto de Miami', label: lbl(-10, 16, 'end') }],
          ariaLabel: 'Mapa de la ruta marítima entre Barranquilla y el Puerto de Miami',
        },
      },
    },
    {
      id: 'aerea',
      label: 'Conectividad aérea',
      content: {
        title: 'Conexiones que acercan a mercados',
        heading: 'CONECTIVIDAD AÉREA',
        subheading: 'Acceso eficiente a mercados internacionales',
        items: [
          { icon: 'plane', title: 'Vuelos directos internacionales', text: 'a Madrid, Panamá, Miami, Fort Lauderdale, Aruba y Curazao.' },
          { icon: 'pin', title: 'Vuelos directos nacionales', text: 'a Bogotá, Cali, Medellín, Bucaramanga, Cúcuta, Riohacha, San Andrés y Montería.' },
        ],
        map: {
          geo: 'internacional',
          kind: 'air',
          hubLabel: lbl(0, 28, 'middle'),
          stops: [
            { id: 'madrid', name: 'Madrid', label: lbl(-10, -12, 'end') },
            { id: 'miami', name: 'Miami', label: lbl(-10, 16, 'end') },
            { id: 'fll', name: 'Fort Lauderdale', label: lbl(10, -6, 'start') },
            { id: 'panama', name: 'Ciudad de Panamá', label: lbl(0, 24, 'middle') },
            { id: 'aruba', name: 'Aruba', label: lbl(-8, -12, 'end') },
            { id: 'curazao', name: 'Curazao', label: lbl(8, -12, 'start') },
          ],
          ariaLabel: 'Mapa de vuelos directos desde Barranquilla a Madrid, Miami, Fort Lauderdale, Ciudad de Panamá, Aruba y Curazao',
        },
        highlight: {
          title: 'CONEXIÓN RÁPIDA A BOGOTÁ',
          chips: [
            { icon: 'plane', text: ['1 hora', 'de vuelo'] },
            { icon: 'globe', text: ['Acceso a 44 destinos', 'internacionales'] },
            { icon: 'calendar', text: ['164 frecuencias', 'semanales'] },
          ],
        },
      },
    },
    {
      id: 'terrestre',
      label: 'Conectividad terrestre',
      content: {
        title: 'Una puerta de entrada a Colombia',
        heading: 'PROXIMIDAD DESDE BARRANQUILLA',
        table: {
          columns: ['Ciudad destino', 'Proximidad', 'Tiempo estimado'],
          rows: [
            ['Cartagena', '120 km', '2 h'],
            ['Santa Marta', '100 km', '1 h 40 min'],
            ['Bogotá', '1.048 km', '18 h'],
            ['Medellín', '772 km', '12 h'],
            ['Cali', '1.179 km', '19 h 34 min'],
            ['Montería', '376 km', '6 h'],
            ['Riohacha', '268 km', '4 h 49 min'],
            ['Sincelejo', '258 km', '4 h 17 min'],
            ['Bucaramanga', '699 km', '12 h'],
          ],
        },
        map: {
          geo: 'nacional',
          kind: 'road',
          hubLabel: lbl(-14, 4, 'end'),
          stops: [
            { id: 'cartagena', name: 'Cartagena', label: lbl(-10, 14, 'end') },
            { id: 'santamarta', name: 'Santa Marta', label: lbl(0, -12, 'middle') },
            { id: 'bogota', name: 'Bogotá', label: lbl(10, 6, 'start') },
            { id: 'medellin', name: 'Medellín', label: lbl(-10, 5, 'end') },
            { id: 'cali', name: 'Cali', label: lbl(-10, 5, 'end') },
            { id: 'monteria', name: 'Montería', label: lbl(-10, 6, 'end') },
            { id: 'riohacha', name: 'Riohacha', label: lbl(10, 5, 'start') },
            { id: 'sincelejo', name: 'Sincelejo', label: lbl(10, 4, 'start') },
            { id: 'bucaramanga', name: 'Bucaramanga', label: lbl(10, 5, 'start') },
          ],
          ariaLabel: 'Mapa de Colombia con las conexiones terrestres desde Barranquilla',
        },
        highlight: {
          text: 'Ubicación estratégica entre Cartagena y Santa Marta, dos importantes nodos logísticos del Caribe colombiano, con acceso terrestre a ambas ciudades en aproximadamente dos horas.',
        },
      },
    },
    {
      id: 'telecom',
      label: 'Conectividad en telecomunicaciones',
      content: {
        // Pendiente: título del cuadro propio para esta pestaña (se usa el de aérea)
        title: 'Conexiones que acercan a mercados',
        heading: 'TELECOMUNICACIONES',
        items: [
          { icon: 'globe', text: '4 de los 10 cables submarinos de fibra óptica que conectan a Colombia con el mundo entran por el Atlántico.' },
          { icon: 'compass', text: 'El territorio tiene baja exposición a desastres naturales, que favorecen la conectividad y continuidad de las operaciones empresariales.' },
        ],
        map: {
          geo: 'internacional',
          kind: 'air',
          hubLabel: lbl(0, 28, 'middle'),
          stops: [],
          ariaLabel: 'Mapa del Caribe con Barranquilla',
        },
      },
    },
  ] as { id: string; label: string; content: ConnectivityContent }[],
};

/* ---------- E. Infraestructura ---------- */
export const infrastructure = {
  eyebrow: 'INFRAESTRUCTURA CON ESTÁNDARES INTERNACIONALES',
  title: ['Un territorio con infraestructura', 'con estándares internacionales'],
  intro:
    'Barranquilla y el Atlántico cuentan con una oferta de zonas francas y parques industriales que facilita la instalación y expansión de empresas. Estos espacios ofrecen infraestructura especializada y condiciones para el desarrollo de operaciones industriales, logísticas y de servicios, conectadas con el ecosistema empresarial del territorio y los mercados nacionales e internacionales.',
  zones: {
    title: 'Zonas francas, una plataforma para operar desde Colombia',
    text: 'Las zonas francas son áreas delimitadas del territorio colombiano que cuentan con un régimen especial tributario, aduanero y de comercio exterior, diseñado para facilitar la instalación y operación de empresas industriales, logísticas y de servicios.',
    benefitsTitle: '¿Qué beneficios ofrecen?',
    benefits: [
      { icon: 'dollar', title: 'Beneficios tributarios', text: 'Tratamiento tributario especial, sujeto a requisitos.' },
      { icon: 'box', title: 'Facilidades aduaneras', text: 'Ingreso de mercancías bajo condiciones especiales.' },
      { icon: 'globe', title: 'Acceso a mercados', text: 'Operaciones para atender mercados nacionales e internacionales.' },
    ] as { icon: IconName; title: string; text: string }[],
    howTitle: '¿Cómo funcionan?',
    howText: 'Las empresas pueden establecerse en una zona franca, obtener la calificación correspondiente y desarrollar actividades autorizadas bajo este régimen, cumpliendo los requisitos establecidos por la normativa colombiana.',
  },
  cardTitle: 'Infraestructura portuaria multipropósito (2025)',
  stats: [
    { icon: 'flame', value: '+1.7 millones de toneladas', label: 'carbón al granel' },
    { icon: 'drop', value: '+2 millones de toneladas', label: 'granel líquido' },
    { icon: 'box', value: '+1.2 millones de toneladas', label: 'carga en contenedor' },
    { icon: 'box', value: '+1.5 toneladas', label: 'carga general' },
    { icon: 'archive', value: '+5.7 millones de toneladas', label: 'granel sólido' },
  ] as { icon: IconName; value: string; label: string }[],
  map: instalateAssets.mapaTerminales,
};

/* ---------- F–G. Zonas francas ---------- */
export const freeZonesIntro = {
  eyebrow: 'RÉGIMEN ESPECIAL Y LOGÍSTICA',
  text: 'Barranquilla y el Atlántico cuentan con una oferta de cinco zonas francas permanentes y más de 180 empresas operando bajo este régimen, acompañadas por una amplia red de parques industriales. Esta infraestructura ofrece condiciones competitivas para la instalación, operación y expansión de empresas, especialmente aquellas con vocación exportadora y vinculadas a cadenas globales de valor.',
};

const zf = instalateAssets.zonasFrancas;
const zfLogo = instalateAssets.logosZonasFrancas;

export const freeZones = {
  title: 'Oferta de zonas francas',
  caption: 'EMPRESA / OPERADOR',
  featured: [
    { location: 'BARRANQUILLA', name: 'ZONA FRANCA de Barranquilla S.A.S.', photo: zf.barranquilla, logo: zfLogo.barranquilla },
    { location: 'CORDIALIDAD, GALAPA', name: 'ZOFIA Zona Franca Internacional del Atlántico', photo: zf.zofia, logo: zfLogo.zofia },
  ],
  others: [
    { location: 'SITIONUEVO, MAGDALENA', name: 'PALERMO Sociedad Portuaria', photo: zf.palermo, logo: zfLogo.palermo },
    { location: 'JUAN MINA', name: 'Zona Franca LA CAYENA', photo: zf.cayena, logo: zfLogo.cayena },
    { location: 'SABANAGRANDE, MALAMBO', name: 'ZOMA (Zona Franca Malambo)', photo: zf.zoma, logo: zfLogo.zoma },
  ],
};

/* ---------- H. Talento ---------- */
export const talent = {
  title: 'Talento Joven y Productivo',
  subtitle: 'El Atlántico es el centro de educación del Caribe colombiano',
  intro:
    'Las empresas que llegan al territorio encuentran una base de talento en crecimiento, con una oferta de formación que responde progresivamente a las necesidades de sectores productivos y de servicios. La presencia de instituciones educativas, programas de formación técnica y profesional y el desarrollo de capacidades bilingües y digitales fortalecen la competitividad del departamento y generan condiciones para que nuevas operaciones puedan instalarse, crecer y desarrollar actividades de mayor valor agregado.',
  facts: [
    { value: '+270.000', title: ['Graduados en el Atlántico'], text: ['durante los últimos 10 años, en todos', 'los niveles de educación superior.'] },
  ],
  population: '28% de la población es menor de 28 años',
  portrait: instalateAssets.retrato,
  cards: [
    { tone: 'teal', icon: 'cap', value: '7.738', title: 'graduados bilingües', text: 'posicionan a Barranquilla como la 3.ª ciudad con mayor proporción de dominio del inglés en el país.' },
  ] as { tone: 'teal' | 'navy'; icon: IconName; value: string; title: string; text: string }[],
  programs: {
    total: { value: '1.344', label: 'Programas' },
    levels: [
      { value: '334', label: 'Universitario' },
      { value: '208', label: 'Tecnólogo' },
      { value: '143', label: 'Técnico' },
      { value: '471', label: 'Especialización' },
      { value: '158', label: 'Maestría' },
      { value: '30', label: 'Doctorado' },
    ],
  },
};

/* ---------- I. Formación SENA ---------- */
export type TrainingCard = { tone: 'navy' | 'blue' | 'orange' | 'teal' | 'yellow'; icon: IconName; name: string; photo: ImageAsset; items: string[] };

const f = instalateAssets.formacion;

export const training = {
  title: 'Talento que se forma para las necesidades de tu empresa',
  paragraphs: [
    'El Servicio Nacional de Aprendizaje (SENA) es una entidad pública colombiana que ofrece formación técnica, tecnológica y complementaria gratuita, orientada a desarrollar las competencias que necesita el sector empresarial.',
    'En Barranquilla y el Atlántico, el SENA cuenta con centros de formación y programas que contribuyen a preparar talento para diferentes actividades productivas.',
  ],
  offerTitle: '¿Qué ofrece a las empresas?',
  offers: [
    { icon: 'cap', label: 'Formación gratuita', text: 'Programas técnicos, tecnológicos y de actualización de competencias.' },
    { icon: 'gear', label: 'Formación a la medida', text: 'Posibilidad de desarrollar procesos de capacitación según las necesidades empresariales, sujetos a requisitos y disponibilidad.' },
    { icon: 'archive', label: 'Certificación de competencias', text: 'Reconocimiento de habilidades y conocimientos adquiridos mediante la experiencia laboral.' },
  ] as { icon: IconName; label: string; text: string }[],
  subtitle: 'Barranquilla y el Atlántico son el territorio con mayores centros de formación SENA en el país.',
  cards: [
    { tone: 'navy', icon: 'gear', name: 'Servicios', photo: f.servicios, items: ['2 nodos en Barranquilla', '36 laboratorios especializados para contabilidad, finanzas, administración, comercio y mercadeo.'] },
    { tone: 'blue', icon: 'chair', name: 'Madera y Muebles', photo: f.madera, items: ['1 Nodo en Galapa', '11 laboratorios avanzados para tapicería, ensamble, carpintería y diseño de mobiliario.'] },
    { tone: 'orange', icon: 'factory', name: 'Metalurgia', photo: f.metalurgia, items: ['1 Nodo en Malambo', '22 laboratorios para control numérico (CNC), soldadura, carpintería metálica y automatización de procesos.'] },
    { tone: 'teal', icon: 'conveyor', name: 'Logística', photo: f.logistica, items: ['1 Nodo en Barranquilla (Caribe Verde)', '21 laboratorios dotados con simuladores portuarios, de remolcadores y de montacargas de última tecnología.'] },
    { tone: 'yellow', icon: 'tractor', name: 'Agro', photo: f.agro, items: ['1 Centro de Valor Agregado en Sabanalarga', 'Capacidad de procesamiento de 450.000 litros/mes de productos lácteos y 180 toneladas/mes de alimentos, además de laboratorios especializados.'] },
  ] as TrainingCard[],
};

/* ---------- J. Banner ---------- */
export type Testimonial = { photo: ImageAsset; quote: string | null; name: string | null; role: string | null; company: string | null };

export const vision = {
  title: ['Un territorio que hace', 'que las cosas pasen'],
  text: 'El desarrollo de Barranquilla y el Atlántico se ha construido sobre una visión compartida entre el sector público, privado y académico. Esta articulación permite identificar necesidades, coordinar respuestas y trabajar sobre factores que inciden directamente en el entorno de negocios, desde la facilitación de la inversión hasta el fortalecimiento de capacidades y la generación de nuevas oportunidades. Para ProBarranquilla, esta forma de trabajar ha sido fundamental para consolidar un territorio competitivo y confiable, donde los diferentes actores suman capacidades alrededor de objetivos comunes.',
  background: instalateAssets.bannerVision,
  // Pendiente: el cliente envía foto, cita, nombre, cargo y empresa de cada empresario
  testimonials: [1, 2, 3].map((n) => ({
    photo: A(`testimonio-${n}.jpg`, 'Retrato del empresario', { position: '50% 25%' }),
    quote: null,
    name: null,
    role: null,
    company: null,
  })) as Testimonial[],
};

/* ---------- K. Casos de éxito (solo esta página) ---------- */
const homeCase = (company: string) => successStories.cases.find((x) => x.company === company)!;

/**
 * Casos de Instálate en el orden del cliente. Hada, ADAMA y Fruselva reutilizan los del Home.
 * Garsite, Steelforce y Foundever: textos redactados con información pública (prensa y sitios
 * oficiales) y fotos/logos de internet; pendientes de confirmar (ver PENDIENTES.md).
 */
export const instalateCases: SuccessStoriesData = {
  ...successStories,
  // El subtítulo general habla de eventos; aquí son empresas
  subtitle: 'Conoce algunas de las empresas que han elegido Barranquilla y el Atlántico como su sede',
  cases: [
    {
      company: 'Garsite',
      logo: '/assets/casos/logo-garsite.png',
      image: '/assets/casos/garsite.jpg',
      alt: 'Directivo de Garsite frente a la planta y a camiones cisterna de reabastecimiento de aviones',
      lead: 'Garsite fabrica en Barranquilla equipos de reabastecimiento de combustible para aviación.',
      body: ' Opera desde 2016 en la Zona Franca La Cayena y desde allí atiende aeropuertos y operadores de distintos países, como el nuevo aeropuerto de Lima.',
    },
    {
      company: 'Steelforce',
      logo: '/assets/casos/logo-steelforce.png',
      image: '/assets/casos/steelforce.jpg',
      alt: 'Planta de Steelforce con bobinas de acero y líneas de producción',
      lead: 'Steelforce, uno de los principales comercializadores de acero del mundo, abrió en el Atlántico su primera operación industrial.',
      body: ' Desde la Zona Franca ZOFIA produce empaques de acero para alimentos y bebidas con destino a los mercados de América Latina.',
    },
    {
      company: 'Enel',
      logo: '/assets/casos/logo-enel.png',
      image: '/assets/casos/enel.jpg',
      alt: 'Parque solar de Enel en el Atlántico al atardecer',
      lead: 'Construyó en el Atlántico el parque solar más grande de Colombia,',
      body: ' fortaleciendo la transición energética y la sostenibilidad del territorio.',
    },
    homeCase('Hada International'),
    homeCase('ADAMA'),
    homeCase('Fruselva'),
    {
      company: 'Foundever',
      logo: '/assets/casos/logo-foundever.png',
      image: '/assets/casos/foundever.jpg',
      alt: 'Persona sonriente usando su celular',
      lead: 'Foundever, multinacional de experiencia del cliente, opera en Barranquilla.',
      body: ' Desde la ciudad presta servicios de atención al cliente y soporte para marcas de distintos mercados.',
    },
  ],
};
