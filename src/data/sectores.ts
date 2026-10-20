/**
 * Página "Sectores". Textos transcritos de "Sectores.png" (1366 px).
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
    label: '01. MANUFACTURA',
    id: sectorIds.manufactura,
    links: [
      { label: 'Químicos y Ciencias de la Vida', id: sectorIds.quimicos },
      { label: 'Alimentos y Bebidas', id: sectorIds.alimentos },
      { label: 'Materiales para la Construcción', id: sectorIds.materiales },
    ],
  },
  {
    label: '02. SERVICIOS',
    id: sectorIds.servicios,
    links: [
      { label: 'Energía', id: sectorIds.energia },
      { label: 'BPO/KPO & IT', id: sectorIds.bpo },
      { label: 'MRO (Mantenimiento)', id: sectorIds.mro },
    ],
  },
  {
    label: '03. OTROS',
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
    text: 'Un ecosistema con oportunidades para operaciones químicas, farmacéuticas, cosméticas, de cuidado personal y soluciones especializadas orientadas al mercado nacional e internacional.',
    cta: { label: 'Conocer el sector', href: null as string | null },
    image: A('quimicos-ciencias-de-la-vida.jpg', 'Químicos y ciencias de la vida en Barranquilla'),
  },
  food: {
    title: 'Alimentos y Bebidas',
    text: 'Capacidades productivas, acceso a materias primas, conectividad logística y una industria preparada para atender mercados nacionales y de exportación.',
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
    // Igual al de Alimentos y Bebidas en la referencia
    text: 'Capacidades productivas, acceso a materias primas, conectividad logística y una industria preparada para atender mercados nacionales y de exportación.',
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
    title: 'Energía',
    text: 'Un territorio con oportunidades para proyectos energéticos, soluciones renovables, eficiencia y operaciones asociadas a la transición energética.',
    features: [
      { icon: 'sun', title: 'Energía Solar', text: 'Alta radiación solar constante', tone: 'green' },
      { icon: 'arrow', title: 'Eólica & Offshore', text: 'Vientos alisios del Caribe', tone: 'slate' },
    ] as { icon: 'sun' | 'arrow'; title: string; text: string; tone: 'green' | 'slate' }[],
    image: A('energia-transicion.jpg', 'Proyecto de energía renovable en el Caribe colombiano'),
    imageLabel: 'Transición Energética Caribe',
  },
  bpo: {
    title: 'BPO/KPO & IT',
    text: 'Talento joven, capacidades bilingües y un ecosistema en crecimiento para operaciones de servicios tercerizados, conocimiento y tecnología.',
    question: ['¿Buscas instalar tu centro de servicios', 'o software en Barranquilla?'],
    support: 'Contamos con convenios académicos y programas de formación en inglés en el Atlántico.',
    cta: { label: 'Consultar sobre BPO & IT', href: routes.contacto },
  },
  mro: {
    title: 'MRO',
    subtitle: 'Mantenimiento, reparación y operaciones',
    text: 'Capacidades técnicas, industriales y logísticas para prestar servicios especializados de mantenimiento, reparación y soporte a diferentes operaciones empresariales.',
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

export const sectorsCta = {
  image: A('cta-ventana-al-mundo.jpg', 'Vista aérea de la Ventana al Mundo y su entorno urbano', '70% 50%'),
  title: ['Encuentra el sector', 'ideal para tu inversión'],
  text: ['Conoce las capacidades de Barranquilla y el', 'Atlántico y descubre cómo ProBarranquilla puede', 'acompañar el desarrollo de tu proyecto.'],
  primary: { label: 'Hablar con nuestro equipo', href: routes.contacto },
  secondary: { label: 'Conocer nuestros servicios', href: `${routes.sobre}#acompanamiento-inversion` },
};
