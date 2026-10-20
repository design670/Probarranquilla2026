/**
 * Página "Instálate en Barranquilla": recursos gráficos y textos.
 * Textos transcritos de "Instalate en Barranquilla.jpg" (1366 px).
 *
 * Para reemplazar una imagen, copia el archivo en /public con la ruta de `src`;
 * si cambia el encuadre, ajusta `position` (object-position) o `fit`.
 * El layout no depende de las dimensiones del archivo.
 */
import type { ImageAsset } from '../components/SmartImage';
import { PENDING_HREF, type Link } from './content';

const A = (src: string, alt: string, extra: Partial<ImageAsset> = {}): ImageAsset => ({
  src: `/assets/instalate/${src}`,
  alt,
  fit: 'cover',
  position: '50% 50%',
  ...extra,
});

export const instalateAssets = {
  hero: A('hero-malecon.jpg', 'Malecón del río Magdalena en Barranquilla al atardecer', { position: '60% 55%' }),
  puerto: A('plataforma-portuaria.jpg', 'Actividad portuaria en Barranquilla'),
  mapaConectividad: A('mapa-conectividad-aerea.png', 'Mapa de rutas aéreas desde Barranquilla hacia Panamá, Miami, Fort Lauderdale y Curazao', { position: '100% 50%' }),
  mapaTerminales: A('mapa-terminales-portuarias.png', 'Mapa del río Magdalena con las terminales portuarias de Barranquilla'),
  zonasFrancas: {
    barranquilla: A('zf-barranquilla.jpg', 'Vista aérea de la Zona Franca de Barranquilla junto al río'),
    zofia: A('zf-zofia.jpg', 'Portería de ZOFIA Zona Franca Internacional del Atlántico'),
    palermo: A('zf-palermo.jpg', 'Muelle de Palermo Sociedad Portuaria'),
    cayena: A('zf-la-cayena.jpg', 'Bodega en la Zona Franca La Cayena'),
    zoma: A('zf-zoma.jpg', 'Vista aérea de ZOMA Zona Franca Malambo'),
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
    servicios: A('sena-servicios.jpg', 'Oficina con puestos de trabajo y pantallas'),
    madera: A('sena-madera-muebles.jpg', 'Taller de carpintería con bancos de trabajo'),
    metalurgia: A('sena-metalurgia.jpg', 'Planta metalúrgica con brazos robóticos de soldadura'),
    logistica: A('sena-logistica.jpg', 'Terminal portuaria con contenedores y grúas'),
    agro: A('sena-agro.jpg', 'Planta de procesamiento de alimentos'),
  },
  bannerVision: A('banner-vision.jpg', 'Puente Pumarejo sobre el río Magdalena', { position: '50% 60%' }),
};

/* ---------- A. Hero ---------- */
export const instalateHero = {
  title: ['Barranquilla y el', 'Atlántico ofrecen una', 'plataforma competitiva', 'para el nearshoring.'],
  primary: { label: 'Explora las ventajas', href: PENDING_HREF } satisfies Link,
  secondary: { label: 'Solicita acompañamiento', href: PENDING_HREF } satisfies Link,
};

/* ---------- B. Impacto ---------- */
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

/* ---------- D. Conectividad ---------- */
export type ConnectivityContent = {
  heading: string;
  subheading: string;
  items: { icon: IconName; title: string; text: string }[];
  map: ImageAsset;
  highlight: { title: string; chips: { icon: IconName; text: string[] }[] };
};

export const connectivity = {
  number: '01',
  title: ['Conexiones que', 'acercan a mercados'],
  tabs: [
    {
      id: 'aerea',
      label: 'Conectividad aérea',
      content: {
        heading: 'CONECTIVIDAD AÉREA',
        subheading: 'Acceso eficiente a mercados internacionales',
        items: [
          { icon: 'plane', title: 'Vuelos directos', text: 'desde Barranquilla a Madrid, Panamá, Miami, Aruba y Fort Lauderdale, conectando con Norteamérica, Europa y el Caribe.' },
          { icon: 'pin', title: '3 aeropuertos internacionales a menos de 100 km:', text: 'Barranquilla, Cartagena y Santa Marta, con 9 destinos y 65 frecuencias.' },
          { icon: 'compass', title: 'Rutas estratégicas', text: 'a Ciudad de México, Lima, Miami, Panamá, Nueva York, San José y Santo Domingo.' },
        ],
        map: instalateAssets.mapaConectividad,
        highlight: {
          title: 'CONEXIÓN RÁPIDA A BOGOTÁ',
          chips: [
            { icon: 'plane', text: ['1 hora', 'de vuelo'] },
            { icon: 'globe', text: ['Acceso a 44 destinos', 'internacionales'] },
            { icon: 'calendar', text: ['164 frecuencias', 'semanales'] },
          ],
        },
      } as ConnectivityContent,
    },
    // Contenido no suministrado: la pestaña se muestra pero no se activa hasta tenerlo.
    { id: 'terrestre', label: 'Conectividad terrestre', content: null as ConnectivityContent | null },
    { id: 'telecom', label: 'Conectividad en telecomunicaciones', content: null as ConnectivityContent | null },
  ],
};

/* ---------- E. Infraestructura ---------- */
export const infrastructure = {
  eyebrow: 'INFRAESTRUCTURA CON ESTÁNDARES INTERNACIONALES',
  title: ['Infraestructura con estándares', 'internacionales'],
  intro:
    'Barranquilla y el Atlántico cuentan con una infraestructura portuaria de vocación multimodal, con ocho terminales públicos en operación, que permite atender diferentes tipos de carga y conectar al territorio con más de 120 países. Esta capacidad, sumada a la ubicación estratégica del departamento y su conexión con el interior del país, fortalece su posición como plataforma logística y exportadora para empresas con visión internacional.',
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
  intro:
    'Las empresas que llegan al territorio encuentran una base de talento en crecimiento, con una oferta de formación que responde progresivamente a las necesidades de sectores productivos y de servicios. La presencia de instituciones educativas, programas de formación técnica y profesional y el desarrollo de capacidades bilingües y digitales fortalecen la competitividad del departamento y generan condiciones para que nuevas operaciones puedan instalarse, crecer y desarrollar actividades de mayor valor agregado.',
  facts: [
    { value: '38%', title: ['De los graduados del Caribe', 'colombiano'], text: ['se concentran en las instituciones de', 'educación superior del departamento.'] },
    { value: '+270.000', title: ['Graduados en el Atlántico'], text: ['durante los últimos 10 años, en todos', 'los niveles de educación superior.'] },
  ],
  population: '28% de la población es menor de 28 años',
  portrait: instalateAssets.retrato,
  cards: [
    { tone: 'teal', icon: 'cap', value: '7.738', title: 'graduados bilingües', text: 'posicionan a Barranquilla como la 3.ª ciudad con mayor proporción de dominio del inglés en el país.' },
    { tone: 'navy', icon: 'flask', value: '313', title: 'grupos de investigación', text: 'están registrados en Colciencias, de los cuales 67 están clasificados como A1, la categoría más alta del país.' },
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
  eyebrow: 'PRESENCIA REGIONAL MULTIDECIMAS',
  title: ['El Atlántico es el departamento con', 'mayor cobertura en los municipios de', 'centros educativos SENA en el país'],
  cards: [
    { tone: 'navy', icon: 'gear', name: 'Servicios', photo: f.servicios, items: ['2 nodos en Barranquilla', '36 laboratorios especializados para contabilidad, finanzas, administración, comercio y mercadeo.'] },
    { tone: 'blue', icon: 'chair', name: 'Madera y Muebles', photo: f.madera, items: ['1 Nodo en Galapa', '11 laboratorios avanzados para tapicería, ensamble, carpintería y diseño de mobiliario.'] },
    { tone: 'orange', icon: 'factory', name: 'Metalurgia', photo: f.metalurgia, items: ['1 Nodo en Malambo', '22 laboratorios para control numérico (CNC), soldadura, carpintería metálica y automatización de procesos.'] },
    { tone: 'teal', icon: 'conveyor', name: 'Logística', photo: f.logistica, items: ['1 Nodo en Barranquilla (Caribe Verde)', '21 laboratorios dotados con simuladores portuarios, de remolcadores y de montacargas de última tecnología.'] },
    { tone: 'yellow', icon: 'tractor', name: 'Agro', photo: f.agro, items: ['1 Centro de Valor Agregado en Sabanalarga', 'Capacidad de procesamiento de 450.000 litros/mes de productos lácteos y 180 toneladas/mes de alimentos, además de laboratorios especializados.'] },
  ] as TrainingCard[],
};

/* ---------- J. Banner ---------- */
export const vision = {
  eyebrow: 'Crecimiento sostenido y confianza inversionista',
  title: ['Una visión compartida', 'que genera oportunidades'],
  text: 'El desarrollo de Barranquilla y el Atlántico se ha construido sobre una visión compartida entre el sector público, privado y académico. Esta articulación permite identificar necesidades, coordinar respuestas y trabajar sobre factores que inciden directamente en el entorno de negocios, desde la facilitación de la inversión hasta el fortalecimiento de capacidades y la generación de nuevas oportunidades. Para ProBarranquilla, esta forma de trabajar ha sido fundamental para consolidar un territorio competitivo y confiable, donde los diferentes actores suman capacidades alrededor de objetivos comunes.',
  background: instalateAssets.bannerVision,
};
