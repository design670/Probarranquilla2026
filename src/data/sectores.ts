/**
 * Página "Sectores". Diseño de "Sectores.png" (1366 px); textos de cada sector
 * enviados por el cliente (título, frase y párrafo).
 * Cuando el prompt y la imagen difieren, manda la imagen (ver PENDIENTES.md).
 * `href: null` = destino pendiente: el botón se muestra deshabilitado.
 */
import type { ImageAsset } from '../components/SmartImage';
import { routes } from './content';

const A = (src: string, alt: string, position = '50% 50%'): ImageAsset => ({ src: `/assets/sectores/${src}`, alt, fit: 'cover', position });

export const sectorsHero = {
  // Misma foto panorámica del hero del Home (rueda iluminada al atardecer)
  image: { src: '/assets/hero/hero-1.jpg', alt: 'Barranquilla al atardecer con la rueda iluminada junto al río', fit: 'cover', position: '50% 100%' } as ImageAsset,
  title: ['Principales sectores', 'de inversión'],
  description: ['Barranquilla y el Atlántico reúnen capacidades', 'industriales, talento especializado, infraestructura', 'estratégica y condiciones competitivas para el', 'desarrollo de nuevos proyectos de inversión.'],
};

export const sectorsIntro = {
  title: ['Un territorio con capacidades', 'para producir, conectar y crecer'],
  text: ['La ubicación estratégica, la infraestructura logística, la vocación exportadora y el talento', 'disponible convierten a Barranquilla y el Atlántico en un entorno competitivo para', 'empresas de manufactura, servicios especializados y nuevas industrias.'],
};

/** IDs estables de las secciones (anclas del índice y del menú). */
export const sectorIds = {
  manufactura: 'manufactura',
  quimicos: 'quimicos-y-ciencias-de-la-vida',
  alimentos: 'alimentos-y-bebidas',
  materiales: 'materiales-para-la-construccion',
  servicios: 'servicios-especializados',
  energia: 'energia',
  bpo: 'bpo-kpo-it',
  mro: 'mro',
  otros: 'otros-sectores',
};

export const sectorIndex = [
  {
    label: 'MANUFACTURA',
    id: sectorIds.manufactura,
    links: [
      { label: 'Químicos y Ciencias de la Vida', id: sectorIds.quimicos },
      { label: 'Alimentos y Bebidas', id: sectorIds.alimentos },
      { label: 'Materiales para la Construcción', id: sectorIds.materiales },
    ],
  },
  {
    label: 'SERVICIOS',
    id: sectorIds.servicios,
    links: [
      { label: 'Hub energético', id: sectorIds.energia },
      { label: 'BPO/KPO & IT', id: sectorIds.bpo },
      { label: 'Servicios aeronáuticos', id: sectorIds.mro },
    ],
  },
  {
    label: 'OTROS',
    id: sectorIds.otros,
    links: [{ label: 'Otros sectores con potencial', id: sectorIds.otros }],
  },
];

export type PillIcon = 'bolt' | 'briefcase' | 'gear';
export type Pill = { icon: PillIcon; label: string };

// Las mismas tres etiquetas aparecen en Manufactura y Servicios en la referencia
const servicePills: Pill[] = [
  { icon: 'bolt', label: 'Energía Renovable' },
  { icon: 'briefcase', label: 'BPO/KPO & IT' },
  { icon: 'gear', label: 'MRO Soporte Técnico' },
];

export type MiniCard = { tone: 'navy' | 'orange' | 'teal' | 'yellow'; title: string[]; text: string[]; tall?: boolean };

export const manufacturing = {
  title: 'Manufactura',
  text: 'Una plataforma industrial y exportadora conectada con mercados internacionales, infraestructura logística y una cadena empresarial diversificada.',
  pills: servicePills,
  chemicals: {
    title: ['Químicos y', 'Ciencias de la Vida'],
    tagline: 'Industria especializada, oportunidades de alto valor.',
    text: 'Desde la fabricación de productos químicos y farmacéuticos hasta la investigación y el desarrollo de soluciones para la salud, esta cadena reúne actividades de alto valor agregado. En el Atlántico, más de 1.500 empresas participan en su ecosistema empresarial, incluyendo 343 dedicadas a la manufactura química y farmacéutica y 176 vinculadas a actividades de investigación en salud. Esta diversidad empresarial, junto con la infraestructura industrial y portuaria del departamento, ofrece oportunidades para establecer operaciones especializadas, ampliar capacidades productivas y fortalecer cadenas de suministro.',
    cta: { label: 'Conocer el sector', href: null as string | null },
    image: A('quimicos-ciencias-de-la-vida.jpg', 'Químicos y ciencias de la vida en Barranquilla'),
  },
  food: {
    title: 'Alimentos y Bebidas',
    tagline: 'Una cadena productiva con oportunidades para crecer.',
    text: 'Transformar materias primas agrícolas y pecuarias en alimentos y bebidas de mayor valor agregado requiere capacidades de procesamiento, conservación, elaboración y distribución. En el Atlántico, más de 1.700 empresas participan en esta cadena, que incluye desde la producción de alimentos procesados y productos de panadería hasta la elaboración de bebidas. La presencia de esta base empresarial y la infraestructura logística del departamento ofrecen oportunidades para establecer nuevas líneas de producción, ampliar operaciones de transformación alimentaria y desarrollar actividades de comercialización y distribución.',
    steps: [
      { tone: 'navy', title: ['Materia prima'], text: ['Acceso', 'agroindustrial', 'y puertos'] },
      { tone: 'orange', title: ['Planta de', 'Producción'], text: ['Sistemas', 'automatizados e', 'higiene'], tall: true },
      { tone: 'teal', title: ['Empaque &', 'conservación'], text: ['Tecnología de', 'empaque sostenible'] },
      // Igual al anterior en la referencia (posible errata, ver PENDIENTES.md)
      { tone: 'yellow', title: ['Transporte &', 'Exportación'], text: ['Tecnología de', 'empaque sostenible'], tall: true },
    ] as MiniCard[],
    highlight: {
      title: 'Procesamiento de Alto Valor en el Atlántico',
      text: 'Barranquilla cuenta con un tejido empresarial sólido en confitería, procesamiento de granos, aceites, bebidas y productos listos para el consumo.',
    },
  },
  materials: {
    title: 'Materiales para la Construcción',
    tagline: 'Una base sólida para la industria que transforma.',
    text: 'Detrás de cada proyecto de infraestructura existe una cadena productiva que transforma materias primas en cemento, concreto, vidrio, cerámica, revestimientos y otros materiales esenciales para la construcción. El Atlántico cuenta con capacidades manufactureras, infraestructura industrial y conectividad portuaria que ofrecen alternativas para instalar y expandir operaciones productivas. Su entorno industrial permite explorar oportunidades en la fabricación de insumos, transformación de materiales, producción de componentes y distribución para proyectos de edificación e infraestructura.',
    image: A('materiales-construccion.jpg', 'Materiales para la construcción en Barranquilla'),
    steps: [
      { tone: 'navy', title: ['Acero y Vidrio'], text: ['Acceso', 'agroindustrial', 'y puertos'] },
      { tone: 'orange', title: ['Cemento y Agregados'], text: ['Sistemas', 'automatizados e', 'higiene'], tall: true },
    ] as MiniCard[],
  },
};

export const services = {
  title: ['Servicios', 'Especializados'],
  text: 'Talento, conocimiento, tecnología e infraestructura para desarrollar operaciones especializadas y atender mercados desde Barranquilla.',
  pills: servicePills,
  energy: {
    title: 'Hub Energético',
    tagline: 'Energía que impulsa nuevas inversiones.',
    text: 'La industria energética va más allá de generar electricidad, integra infraestructura, transformación, fabricación de equipos y servicios especializados que hacen posible el suministro y aprovechamiento de distintas fuentes de energía. En el Atlántico, los proyectos de generación solar y eólica se articulan con capacidades industriales y oportunidades de inversión en servicios técnicos, componentes y equipos para el sector. A estas actividades se suma una agenda de desarrollo de nuevas cadenas de valor energético, que amplía las posibilidades para empresas interesadas en participar en la evolución de esta industria.',
    features: [
      { icon: 'sun', title: 'Energía Solar', text: 'Alta radiación solar constante', tone: 'green' },
      { icon: 'arrow', title: 'Eólica & Offshore', text: 'Vientos alisios del Caribe', tone: 'slate' },
    ] as { icon: 'sun' | 'arrow'; title: string; text: string; tone: 'green' | 'slate' }[],
    image: A('energia-transicion.jpg', 'Proyecto de energía renovable en el Caribe colombiano'),
    imageLabel: 'Transición Energética Caribe',
  },
  bpo: {
    title: 'BPO & IT',
    tagline: 'Talento bilingüe para operaciones de alcance global.',
    text: 'Desde la atención al cliente y la gestión de procesos empresariales hasta el desarrollo de software, el soporte tecnológico y las soluciones digitales, los servicios BPO & IT permiten a las compañías gestionar y ampliar sus operaciones. Barranquilla cuenta con experiencia en servicios empresariales y presencia de operadores internacionales, respaldada por una oferta de talento y programas orientados al fortalecimiento del bilingüismo y las competencias tecnológicas. Estas condiciones ofrecen oportunidades para establecer centros de atención, operaciones de tercerización de procesos, servicios digitales y centros de servicios compartidos.',
    question: ['¿Buscas instalar tu centro de servicios', 'o software en Barranquilla?'],
    support: 'Contamos con convenios académicos y programas de formación en inglés en el Atlántico.',
    cta: { label: 'Consultar sobre BPO & IT', href: routes.contacto },
  },
  mro: {
    title: ['Servicios Aeronáuticos y', 'Mantenimiento de Aeronaves (MRO)'],
    tagline: 'Una oportunidad para la industria aeronáutica en el Caribe colombiano.',
    text: 'La operación de aeronaves comerciales depende de servicios especializados de inspección, mantenimiento, reparación y revisión de aeronaves, motores y componentes, conocidos como MRO (Maintenance, Repair and Overhaul). Barranquilla impulsa una iniciativa orientada al desarrollo de estas actividades, con una estrategia que contempla infraestructura aeroportuaria especializada, formación de talento técnico y atracción de operadores aeronáuticos. Esta apuesta busca abrir oportunidades de inversión para empresas de mantenimiento, ingeniería y servicios especializados interesadas en participar en el desarrollo de esta actividad en el Caribe colombiano.',
    image: A('mro-hangar.jpg', 'Técnicos haciendo mantenimiento al motor de un avión en un hangar', '50% 50%'),
  },
};

export type OtherIcon = 'bolt' | 'briefcase' | 'gear';

export const otherSectors = {
  title: 'Otros sectores con potencial',
  text: 'El territorio también ofrece oportunidades para empresas pertenecientes a otras industrias que pueden aprovechar su infraestructura, conectividad, talento y entorno favorable para los negocios.',
  pills: [
    { icon: 'bolt', label: 'Logística Portuaria' },
    { icon: 'briefcase', label: 'Turismo MICE' },
    { icon: 'gear', label: 'Agroindustria' },
    { icon: 'gear', label: 'Moda & Creatividad' },
  ] as Pill[],
};

