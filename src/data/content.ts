/**
 * Contenido editable del Home. Todo texto proviene de Home.jpg.
 * Las rutas de imagen apuntan a /public/assets: al copiar el archivo con ese
 * nombre, el placeholder se reemplaza solo. Ver PENDIENTES.md.
 * `href: '#'` = destino pendiente de definir.
 */

export type Link = { label: string; href: string };

export const PENDING_HREF = '#';

export const brand = {
  logoWhite: '/assets/brand/probarranquilla-logo-blanco.svg',
  name: 'ProBarranquilla',
};

/** Destinos compartidos entre la barra superior, el mega menú y el Home. */
export const routes = {
  prodata: '/prodata/',
  /** Contacto general: "Contact PB" y la pestaña "Hablemos" */
  contacto: PENDING_HREF,
  home: '/',
  instalate: '/instalate-en-barranquilla/',
  sobre: '/sobre-probarranquilla/',
  equipo: '/sobre-probarranquilla/#equipo',
  noticias: '/noticias/',
  // Anclas a secciones del Home (absolutas para que funcionen desde cualquier página)
  resultados: '/#resultados',
  casosDeExito: '/casos-de-exito/',
  evento: '/haz-tu-evento-en-barranquilla/',
  sectores: '/sectores/',
  boletines: '/boletines/',
  guiaInversionista: '/guia-del-inversionista/',
  guiaTributaria: '/guia-tributaria/',
  simulador: '/simulador-de-impuestos/',
};

export const utilityBar = {
  clockPrefix: 'Colombia - GTM - 5 -',
  timeZone: 'America/Bogota',
  links: [
    { label: 'Prodata', href: routes.prodata },
    { label: 'ExpoProBarranquilla', href: PENDING_HREF },
    { label: 'Find Connections', href: PENDING_HREF },
    { label: 'Contact PB', href: routes.contacto },
  ] satisfies Link[],
  languages: [
    { code: 'ES', label: 'Español', href: PENDING_HREF },
    { code: 'EN', label: 'English', href: PENDING_HREF },
  ],
  currentLanguage: 'EN',
};

/** Columna de un mega menú. Todas las partes son opcionales salvo `links`. */
export type MegaColumn = {
  heading?: string[];
  accent?: string;
  description?: string[];
  links: Link[];
  cta?: Link;
};

export type MegaPanel = {
  id: string;
  label: string;
  title: string[];
  /** `split` = 2 columnas (título + enlaces); `three` = 3 columnas; `about` = 3 columnas con la alineación de "Sobre". */
  layout: 'split' | 'three' | 'about';
  /** Inicio de la columna de enlaces en paneles `split` (px desde el borde del contenido). */
  linksOffset?: number;
  columns: MegaColumn[];
};

const L = (label: string, href: string = PENDING_HREF): Link => ({ label, href });

export const mainNav: MegaPanel[] = [
  {
    id: 'invierte',
    label: 'Instálate en Barranquilla',
    title: ['Por qué', 'Barranquilla'],
    layout: 'split',
    linksOffset: 527,
    columns: [
      {
        links: [
          L('¿Por qué Barranquilla?', routes.instalate),
          L('¿Cómo te apoyamos?'),
          L('Resultados e impacto', routes.resultados),
          L('Guías y recursos de ciudad'),
          L('Casos de éxito', routes.casosDeExito),
        ],
      },
    ],
  },
  {
    id: 'sectores',
    label: 'Sectores',
    title: ['Principales', 'sectores de', 'inversión'],
    layout: 'three',
    columns: [
      {
        heading: ['Manufactura'],
        links: [
          L('Químicos y Ciencias de la Vida', `${routes.sectores}#quimicos-y-ciencias-de-la-vida`),
          L('Alimentos y Bebidas', `${routes.sectores}#alimentos-y-bebidas`),
          L('Materiales para la construcción', `${routes.sectores}#materiales-para-la-construccion`),
        ],
      },
      {
        heading: ['Servicios'],
        links: [L('Energía', `${routes.sectores}#energia`), L('BPO & IT', `${routes.sectores}#bpo-kpo-it`), L('MRO', `${routes.sectores}#mro`), L('OTROS', `${routes.sectores}#otros-sectores`)],
      },
    ],
  },
  {
    id: 'herramientas',
    label: 'Herramientas',
    title: ['Herramientas', 'para la toma', 'de decisión de', 'inversión'],
    layout: 'split',
    linksOffset: 423,
    columns: [
      {
        links: [L('Guía del inversionista', routes.guiaInversionista), L('Guía tributaria', routes.guiaTributaria), L('Simulador de Impuestos', routes.simulador), L('Boletines de tendencias de inversión', routes.boletines)],
        cta: L('PRODATA', routes.prodata),
      },
    ],
  },
  {
    id: 'evento',
    label: 'Haz tu evento en Barranquilla',
    title: ['Haz tu evento', 'en Barranquilla'],
    layout: 'split',
    linksOffset: 423,
    // Mismos textos que "Instálate"; llevan a la página de Turismo de reuniones.
    columns: [
      {
        links: [
          L('¿Por qué Barranquilla?', routes.evento),
          L('¿Cómo te apoyamos?', `${routes.evento}#como-te-apoyamos`),
          L('Resultados e impacto', `${routes.evento}#resultados-eventos`),
          L('Guías y recursos de ciudad', `${routes.evento}#biblioteca-de-recursos`),
          L('Casos de éxito', routes.casosDeExito),
        ],
      },
    ],
  },
  {
    id: 'sobre',
    label: 'Sobre ProBarranquilla',
    title: ['Sobre', 'ProBarranquilla'],
    layout: 'about',
    columns: [
      {
        accent: 'ProBarranquilla',
        description: ['Tu agencia de promoción', 'de inversión y turismo en', 'Barranquilla y el Atlántico.'],
        links: [L('Quienes somos', routes.sobre), L('Servicios'), L('Equipo', routes.equipo), L('Comunidad de miembros')],
      },
      { heading: ['Publicaciones y', 'Comunicados de Prensa'], links: [L('Noticias', routes.noticias), L('Informes de labores')] },
    ],
  },
];

export const hero = {
  title: ['Barranquilla, tu', 'próximo paso', 'empresarial'],
  slides: [
    { image: '/assets/hero/hero-1.jpg', alt: 'Vista aérea del Malecón de Barranquilla al atardecer con la rueda panorámica iluminada' },
    { image: '/assets/hero/hero-2.jpg', alt: 'Slide 2 del hero (pendiente)' },
    { image: '/assets/hero/hero-3.jpg', alt: 'Slide 3 del hero (pendiente)' },
  ],
};

export type Reason = {
  title: string;
  image: string;
  alt: string;
  overlay: 'blue' | 'cyan' | 'navy' | 'steel' | 'orange';
  area: 'a' | 'b' | 'c' | 'd' | 'e';
  href: string;
};

export const reasons = {
  title: ['¿Por qué las empresa globales', 'escogen Barranquilla?'],
  items: [
    { area: 'a', overlay: 'blue', title: 'Crecimiento sostenido y confianza inversionista', image: '/assets/razones/crecimiento.png', alt: 'Edificios residenciales y corporativos de Barranquilla', href: PENDING_HREF },
    { area: 'b', overlay: 'cyan', title: 'Plataforma logística competitiva', image: '/assets/razones/logistica.png', alt: 'Bodega logística con estructura metálica', href: PENDING_HREF },
    { area: 'c', overlay: 'navy', title: 'Talento joven y productivo', image: '/assets/razones/talento.png', alt: 'Operario trabajando en una línea de producción', href: PENDING_HREF },
    { area: 'd', overlay: 'steel', title: 'Entorno pro-empresa', image: '/assets/razones/entorno.png', alt: 'Vista aérea de un parque empresarial', href: PENDING_HREF },
    { area: 'e', overlay: 'orange', title: 'Infraestructura con estandares internacionales', image: '/assets/razones/infraestructura.png', alt: 'Vista aérea del puerto y el río Magdalena', href: PENDING_HREF },
  ] satisfies Reason[],
};

/** `label` como arreglo = saltos de línea de la referencia. */
export type Stat = { value: string[]; label: string | string[]; tone: 'navy' | 'orange' | 'yellow' | 'blue' | 'amber' | 'red'; variant?: 'long' };

export const impact = {
  title: ['Por qué las empresa globales', 'escogen Barranquilla'],
  intro:
    'Nuestra labor técnica y de posicionamiento impulsa el crecimiento socioeconómico sostenible del departamento del Atlántico. Interactúa con las estadísticas y sectores para conocer el impacto real.',
  tabs: [
    {
      id: 'inversiones',
      label: 'INVERSIONES',
      align: 'end',
      stats: [
        { tone: 'navy', value: ['469', 'USD'], label: ['Millones en', 'inversión'] },
        { tone: 'orange', value: ['3.581'], label: ['Empleos', 'directo'] },
        { tone: 'yellow', value: ['+180'], label: ['Oportunidades', 'de inversión'] },
        { tone: 'blue', value: ['+20', 'Proyectos'], label: 'El 78% de los proyectos fueron orientados a la exportación.', variant: 'long' },
      ] as Stat[],
    },
    {
      id: 'turismo',
      label: 'TURISMO DE REUNIONES',
      // Cifras alineadas por la última línea del valor (la de "+USD 23M" ocupa dos)
      align: 'value-bottom',
      stats: [
        { tone: 'blue', value: ['+18'], label: 'Eventos de turismo de reuniones apoyados' },
        { tone: 'amber', value: ['+15'], label: 'Eventos de turismo de reuniones captados' },
        { tone: 'navy', value: ['+31.000'], label: 'Asistentes' },
        { tone: 'red', value: ['+USD', '23M'], label: 'En derrama económica' },
      ] as Stat[],
    },
  ],
};

export type SuccessCase = { company: string; logo: string; image: string; alt: string; lead: string; body: string };

export const successStories = {
  title: 'Casos de éxito',
  subtitle: 'Conoce algunos de los eventos que han elegido Barranquilla como su sede',
  moreHref: routes.casosDeExito,
  cases: [
    {
      company: 'Bavaria',
      logo: '/assets/casos/logo-bavaria.svg',
      image: '/assets/casos/bavaria.jpg',
      alt: 'Edificio corporativo de Bavaria',
      lead: 'La Cervecería del Atlántico representa la mayor inversión de la compañía en Colombia en más de dos décadas.',
      body: ' Es referente nacional en eficiencia energética, innovación y sostenibilidad industrial.',
    },
    // `lead` va en negrita, como la primera parte del texto de Bavaria
    {
      company: 'Adama',
      logo: '/assets/casos/logo-adama.png',
      image: '/assets/casos/adama.jpg',
      alt: 'Logo de Adama sobre un cultivo de maíz al atardecer',
      lead: 'Reubicó una línea de producción desde China hacia Barranquilla',
      body: ' para aprovechar el acceso preferencial al mercado brasileño y mejorar su eficiencia logística.',
    },
    {
      company: 'BCCY Colombia',
      logo: '/assets/casos/logo-bccy.svg',
      image: '/assets/casos/bccy.jpg',
      alt: 'Contenedores verdes y equipos de una planta de BCCY Colombia en construcción',
      lead: 'Primera planta en Barranquilla que genera energía a partir de biogás,',
      body: ' capturando emisiones de metano provenientes del relleno sanitario.',
    },
    {
      company: 'Enel',
      logo: '/assets/casos/logo-enel.svg',
      image: '/assets/casos/enel.jpg', // Pendiente: foto
      alt: 'Proyecto de Enel en el Atlántico',
      lead: 'Construyó en el Atlántico el parque solar más grande de Colombia,',
      body: ' fortaleciendo la transición energética y la sostenibilidad del territorio.',
    },
  ] satisfies SuccessCase[],
};

export type NewsCategory = 'Inversiones' | 'Turismo de reuniones' | 'ExpoProBarranquilla';

export type NewsItem = { title: string; image: string; alt: string; place: string; date: string; categories: NewsCategory[]; href: string };

export const news = {
  title: 'Últimas noticias',
  filters: ['Inversiones', 'Turismo de reuniones', 'ExpoProBarranquilla'] as NewsCategory[],
  allHref: routes.noticias,
  // Categorías asignadas de forma provisional: confirmar con el cliente.
  items: [
    { title: 'Desarrollo para Colombia: Canpack y Bavaria invertirán COP $548.000 millones.', image: '/assets/noticias/canpack.jpg', alt: 'Operario de Canpack en planta de producción', place: 'Barranquilla', date: 'Febrero 9 de 2026', categories: ['Inversiones'], href: PENDING_HREF },
    { title: 'El Triángulo Caribe se posiciona en Brasil como destino estratégico para la inversión y el nearshoring.', image: '/assets/noticias/embraer.jpg', alt: 'Delegación en las oficinas de Embraer', place: 'Barranquilla', date: 'Febrero 9 de 2026', categories: ['Inversiones'], href: PENDING_HREF },
    { title: 'Inversión extranjera y eventos impulsan la economía de Barranquilla y el Atlántico.', image: '/assets/noticias/puente.jpg', alt: 'Vista aérea del puente Pumarejo sobre el río Magdalena', place: 'Barranquilla', date: 'Febrero 9 de 2026', categories: ['Inversiones', 'Turismo de reuniones'], href: PENDING_HREF },
  ] as NewsItem[],
};

export const assistance = {
  title: ['Cómo ProBarranquilla', 'puede ayudarte'],
  cta: { label: 'Contáctanos', href: PENDING_HREF },
  image: '/assets/ayuda/malecon.jpg',
  alt: 'Malecón de Barranquilla y la rueda panorámica al atardecer',
  services: [
    'Información estratégica para invertir y hacer negocios en Barranquilla y la región Caribe.',
    'Conexión con aliados clave y redes empresariales.',
    'Conocimiento del mercado local y oportunidades sectoriales.',
    'Acompañamiento especializado para expandir operaciones y fortalecer capacidades.',
  ],
};

export type Logo = { name: string; src: string; width: number; height: number };

export const partners = {
  title: 'Nuestros Aliados',
  logos: [
    { name: 'Alcaldía de Barranquilla', src: '/assets/aliados/alcaldia-barranquilla.png', width: 220, height: 65 },
    { name: 'Gobernación del Atlántico', src: '/assets/aliados/gobernacion-atlantico.png', width: 184, height: 65 },
    { name: 'Cámara de Comercio de Barranquilla', src: '/assets/aliados/camara-comercio-barranquilla.png', width: 162, height: 69 },
  ] satisfies Logo[],
};

const member = (name: string, file: string, width = 96, height = 44): Logo => ({ name, src: `/assets/miembros/${file}.png`, width, height });

/**
 * 41 empresas, en el orden alfabético de las tiras entregadas, repartidas en
 * 3 franjas que se desplazan sin fin. `width`/`height` = tamaño en pantalla,
 * calculado para que todos los logos tengan un peso visual parecido (los
 * archivos están a 2x). `reverse` invierte el sentido de la franja.
 */
export const members = {
  title: 'Empresas Miembros',
  rows: [
    {
      reverse: false,
      logos: [
        member('Acesco', 'acesco', 74, 60),
        member('ARL Sura', 'arl-sura', 143, 35),
        member('Alianza Team', 'alianza-team', 111, 45),
        member('Coremar', 'coremar', 150, 31),
        member('AMI', 'ami', 123, 41),
        member('Equinorte', 'equinorte', 98, 51),
        member('Pactia', 'pactia', 150, 22),
        member('Forvis Mazars', 'forvis-mazars', 107, 47),
        member('Gases del Caribe', 'gases-del-caribe', 102, 49),
        member('GHL Hotel Barranquilla', 'ghl-hotel-barranquilla', 76, 60),
        member('Gralco S.A.', 'gralco', 51, 60),
        member('Grant Thornton', 'grant-thornton', 150, 32),
        member('Grupo Hada', 'grupo-hada', 90, 56),
        member('Grupo Logis', 'grupo-logis', 102, 49),
      ],
    },
    {
      reverse: true,
      logos: [
        member('GSA Ingeniería', 'gsa-ingenieria', 48, 60),
        member('Hotel El Prado', 'hotel-el-prado', 58, 60),
        member('Liberty Networks', 'liberty-networks', 140, 36),
        member('Link Marketing & Servicios', 'link-marketing', 63, 60),
        member('Marriott Barranquilla', 'marriott-barranquilla', 96, 52),
        member('Monómeros', 'monomeros', 124, 40),
        member('Oben Group', 'oben-group', 130, 39),
        member('Posse Herrera Ruiz', 'posse-herrera-ruiz', 95, 53),
        member('Pópuli', 'populi', 60, 60),
        member('Protección', 'proteccion', 150, 29),
        member('Puerto de Barranquilla', 'puerto-de-barranquilla', 116, 43),
        member('Russell Bedford', 'russell-bedford', 142, 35),
        member('Sabatino', 'sabatino', 125, 40),
        member('Sempertex', 'sempertex', 133, 37),
      ],
    },
    {
      reverse: false,
      logos: [
        member('SGF Global', 'sgf-global', 129, 39),
        member('Smartfreight', 'smartfreight', 150, 21),
        member('Smurfit Westrock', 'smurfit-westrock', 138, 36),
        member('Solmex', 'solmex', 95, 53),
        member('Soluciones Inmediatas', 'soluciones-inmediatas', 128, 39),
        member('Sonovista', 'sonovista', 100, 50),
        member('TCL', 'tcl', 91, 55),
        member('TEBSA', 'tebsa', 112, 45),
        member('Ternium', 'ternium', 120, 42),
        member('TNC', 'tnc', 113, 44),
        member('Top Management', 'top-management', 112, 45),
        member('Triple A', 'triple-a', 120, 42),
        member('Ultracem', 'ultracem', 149, 34),
      ],
    },
  ],
};

export type Social = { network: 'facebook' | 'instagram' | 'x' | 'linkedin' | 'youtube'; label: string; href: string };

export const footer = {
  address: { city: 'Barranquilla, Colombia', building: 'Centro Empresarial Green Towers', street: 'Cl. 77b #57-103 - Oficina 509' },
  social: [
    { network: 'facebook', label: 'Facebook', href: PENDING_HREF },
    { network: 'instagram', label: 'Instagram', href: PENDING_HREF },
    { network: 'x', label: 'X', href: PENDING_HREF },
    { network: 'linkedin', label: 'LinkedIn', href: PENDING_HREF },
    { network: 'youtube', label: 'YouTube', href: PENDING_HREF },
  ] satisfies Social[],
  copyright: 'Todos los derechos reservados ProBarranquilla 2026',
  privacy: { label: 'Politica de privacidad', href: PENDING_HREF },
  faq: { label: '¿Tienes preguntas?', href: PENDING_HREF },
};
