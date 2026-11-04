/**
 * Página "Sobre ProBarranquilla": recursos gráficos y textos.
 * Textos transcritos de "Sobre probarranquilla.png" (1366 px).
 *
 * Para reemplazar una imagen, copia el archivo en /public con la ruta de `src`;
 * si cambia el encuadre, ajusta `position` (object-position) o `fit`.
 * Los datos que no aparecen en la referencia quedan en `null` / vacíos y
 * están listados en PENDIENTES.md: no se muestran avisos en la interfaz.
 */
import type { ImageAsset } from '../components/SmartImage';

const A = (src: string, alt: string, extra: Partial<ImageAsset> = {}): ImageAsset => ({
  src: `/assets/sobre/${src}`,
  alt,
  fit: 'cover',
  position: '50% 50%',
  ...extra,
});

/* ---------- Hero ---------- */

export const aboutHero = {
  image: A('hero-ventana-al-mundo.jpg', 'Escultura en el Malecón del río Magdalena bajo un cielo azul con nubes', { position: '70% 40%' }),
  title: ['ProBarranquilla:'],
  description: ['38 años impulsando el desarrollo económico', 'de Barranquilla, el departamento del Atlántico', 'y su área de influencia.'],
};

/* ---------- Presentación y cifras ---------- */

export const aboutIntro = {
  title: ['ProBarranquilla es la agencia de promoción', 'de inversiones y turismo de reuniones de', 'Barranquilla, el departamento del Atlántico', 'y su área de influencia.'],
  // Las cifras ahora son las del Home (impact en content.ts); el texto de entrada es propio de esta página
  intro:
    'Trabajamos para atraer nuevas inversiones, acompañar el crecimiento de las empresas instaladas y captar eventos nacionales e internacionales. Además, articulamos esfuerzos entre el sector público, privado y la academia para fortalecer el entorno de negocios y la competitividad del territorio.',
};

/* ---------- ¿Qué hace? ---------- */

export type AboutBanner = {
  id: string;
  label: string;
  title: string;
  /** Párrafos; `strong` marca el inicio en negrita del párrafo. */
  body: { strong?: string; text: string }[];
  tone: 'navy' | 'gold' | 'orange';
  image: ImageAsset;
  /** Ancho del bloque de texto en desktop (px), como en la referencia. */
  textWidth: number;
};

export const whatWeDo = {
  title: 'Tres líneas de acción, un solo propósito',
  // Textos del cliente (noviembre 2026): cada línea con su nombre y dos párrafos
  banners: [
    {
      id: 'atraccion-de-inversiones',
      label: '01',
      title: 'Atracción de inversiones',
      body: [
        { text: 'Promovemos a Barranquilla y el Atlántico como destino de inversión y acompañamos a empresas nacionales e internacionales interesadas en establecer, desarrollar o ampliar sus operaciones en el territorio.' },
        { text: 'Facilitamos sus decisiones de inversión mediante información estratégica, conexiones con actores clave y acompañamiento durante las etapas de preinversión, instalación, reinversión y expansión.' },
      ],
      tone: 'navy',
      image: A('que-hace-acompanamiento.jpg?v=2', 'Presentación de tendencias de inversión ante un grupo de empresarios', { position: '70% 40%' }),
      textWidth: 520,
    },
    {
      id: 'entorno-de-negocios',
      label: '02',
      title: 'Entorno de negocios',
      body: [
        { text: 'Acompañamos a los inversionistas instalados en el territorio, identificando necesidades y oportunidades que contribuyan a la continuidad y el crecimiento de sus operaciones.' },
        { text: 'Promovemos la articulación entre el sector público, privado y la academia para atender desafíos del entorno empresarial y fortalecer las condiciones para la inversión.' },
      ],
      tone: 'orange',
      image: A('que-hace-seguimiento.jpg?v=2', 'Hombre con gorra frente a un mural de grafiti en Barranquilla', { position: '80% 30%' }),
      textWidth: 520,
    },
    {
      id: 'turismo-de-reuniones',
      label: '03',
      title: 'Turismo de reuniones',
      body: [
        { text: 'Promovemos a Barranquilla como destino para la realización de congresos, convenciones, ferias, encuentros corporativos y otros eventos nacionales e internacionales.' },
        { text: 'Articulamos las capacidades del sector turístico y empresarial, apoyamos la captación de eventos y acompañamos a sus organizadores para fortalecer el posicionamiento del destino.' },
      ],
      tone: 'gold',
      image: A('que-hace-posicionamiento.jpg?v=2', 'Vista aérea de la Ventana al Mundo en Barranquilla', { position: '60% 50%' }),
      textWidth: 520,
    },
  ] as AboutBanner[],
};

/* ---------- Acompañamiento a la inversión ---------- */

export const investmentStages = {
  title: ['Fomentamos el desarrollo económico mediante la', 'atracción, retención y crecimiento de inversiones', 'extranjeras sostenibles.'],
  // Textos del cliente (noviembre 2026): frase de entrada + servicios en viñetas
  stages: [
    {
      number: '01',
      tone: 'teal',
      title: 'Preinversión',
      intro: 'Apoyamos la evaluación del territorio y la toma de decisiones de inversión mediante:',
      items: [
        'Información actualizada sobre las condiciones y ventajas competitivas del Atlántico.',
        'Perfiles sectoriales y datos de zonas francas, costos empresariales y oportunidades de inversión.',
        'Análisis de indicadores económicos, incentivos, disponibilidad de inmuebles y talento humano.',
      ],
    },
    {
      number: '02',
      tone: 'orange',
      title: 'Instalación',
      intro: 'Facilitamos el establecimiento de nuevas operaciones y la conexión con el ecosistema empresarial mediante:',
      items: [
        'Apoyo en la identificación y selección de ubicaciones.',
        'Conexión con proveedores locales, entidades públicas y academia.',
        'Orientación y seguimiento de permisos y trámites ante entidades locales.',
        'Apoyo en la identificación de talento humano.',
        'Información sobre acuerdos comerciales y acceso a mercados.',
        'Articulación con iniciativas de responsabilidad social, eficiencia energética y sostenibilidad.',
      ],
    },
    {
      number: '03',
      tone: 'yellow',
      title: 'Reinversión y expansión',
      intro: 'Acompañamos a las empresas instaladas en sus proyectos de crecimiento y fortalecimiento operativo mediante:',
      items: [
        'Identificación de oportunidades de reinversión, diversificación y expansión.',
        'Apoyo en la gestión de dificultades relacionadas con licencias, permisos y procedimientos regulatorios.',
        'Conexión con proveedores de servicios especializados.',
        'Articulación con la academia para atender necesidades de talento humano.',
      ],
    },
  ],
};

/* ---------- Nuestra historia ---------- */

export type Milestone = {
  /** Rótulo de la línea de tiempo: un año o un periodo ("1994 – 1997"). */
  year: string;
  /** `null` = pendiente: el panel muestra solo el año y la imagen. */
  title: string[] | null;
  description?: string;
  /** Logros del año en viñetas (2024, 2026). */
  items?: string[];
  image: ImageAsset;
};

/** Foto del hito: historia-<año>.jpg (los periodos usan guion: historia-1994-1997.jpg). */
const M = (year: string, title: string | null = null, items?: string[]): Milestone => ({
  year,
  title: title ? [title] : null,
  items,
  image: A(`historia-${year.replace(/\s*–\s*/g, '-').toLowerCase()}.jpg`, `Barranquilla en ${year}`),
});

export const history = {
  title: 'Nuestra historia',
  subtitle: 'Una evolución constante al servicio del desarrollo de Barranquilla y el Atlántico.',
  /** Recurso geográfico de fondo (bajo contraste). Pendiente: sin archivo no se pinta. */
  background: null as ImageAsset | null,
  // Textos enviados por el cliente (noviembre 2026). Fotos pendientes salvo 1988.
  milestones: [
    { ...M('1988', 'Nace ProBarranquilla como Promotora de Desarrollo Urbano'), image: A('historia-1988.jpg', 'Vista aérea de Barranquilla y el río Magdalena', { position: '50% 50%' }) },
    M('1990', 'Creación de Edubar S.A. para el desarrollo industrial y tecnológico'),
    M('1992', 'Evoluciona a tanque de pensamiento: formación de líderes y comités temáticos'),
    M('1993', 'Barranquilla es declarada Distrito Especial, Industrial y Portuario'),
    M('1994 – 1997', 'Plan Maestro “Atlántico Siglo XXI” con Stanford Research Institute para impulsar competitividad e inserción global'),
    M('2002', 'ProBarranquilla se convierte en Agencia de Promoción de Inversiones y Marketing Territorial'),
    M('2008', 'Alianza con Gobernación y Alcaldía'),
    M('2011', 'Primera ExpoProBarranquilla'),
    M('2015', 'Reorientación estratégica: inversión, eventos y marketing de destino'),
    M('2016', 'Primera Rueda de Negocios PB Te Conecta; reconocimiento internacional de fDi Magazine'),
    M('2017', 'Creación del Equipo de Destino'),
    M('2018 – 2019', 'Reconocimientos internacionales a la estrategia de promoción de inversiones'),
    M('2021 – 2023', 'ProBarranquilla enfoca su gestión en inversión sostenible'),
    M('2024', 'Año récord de ProBarranquilla', [
      'Acuerdos con Microsoft y Amazon Web Services',
      'PANLAR 2024',
      '3ª ciudad de mayor crecimiento en atracción de IED en Latam y Caribe',
      'Reconocimiento nacional a ProBarranquilla Te Conecta',
      'World Travel Award como Destino Líder de Festivales y Eventos (3er año)',
      'Acuerdo de inversión Triángulo Caribe – Monterrey',
      '+1.000 citas en rueda de negocios',
    ]),
    M('2025', '15 años de ExpoProBarranquilla'),
    M('2026', null, [
      '10 años de la Rueda de Negocios ProBarranquilla Te Conecta',
      'Llegada del Programa de Competitividad de las Américas de la OEA',
    ]),
  ] satisfies Milestone[],
};

/* ---------- Equipo ---------- */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: ImageAsset;
  /** Texto de la capa que aparece al pasar el cursor. Reemplazable por persona. */
  description: string;
  hoverBackground: string;
  nameColor: string;
  bodyColor: string;
};
export type TeamArea = {
  id: string;
  /** Rótulo del filtro */
  filter: string;
  title: string;
  description: string;
  people: TeamMember[];
};

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * Descripción transcrita de las referencias de hover: por ahora las 19 cards
 * muestran el mismo párrafo (incluso la mención a Vicky Osorio). Para dar a
 * alguien su propio texto, pásalo como `description` en su entrada.
 */
const SHARED_DESCRIPTION =
  'Vicky Osorio colidera el crecimiento sostenible del Atlántico a través de la articulación del sector público, privado y la academia. Bajo su dirección ejecutiva, ProBarranquilla ha consolidado una red global de aliados y ha atraído proyectos de inversión de alto impacto que generan miles de empleos de calidad y bienestar social para el territorio. Es apasionada por la competitividad, la innovación pública y el desarrollo de talento local.';

type HoverColors = Pick<TeamMember, 'hoverBackground' | 'nameColor' | 'bodyColor'>;

/** Paletas de la capa hover (fondo, nombre, cargo + descripción), según las referencias. */
const HOVER = {
  navy: { hoverBackground: '#001D39', nameColor: '#FFFFFF', bodyColor: '#64748B' },
  green: { hoverBackground: '#01AA75', nameColor: '#FFFFFF', bodyColor: '#FFFFFF' },
  blue: { hoverBackground: '#0055A3', nameColor: '#FFFFFF', bodyColor: '#FFFFFF' },
  yellow: { hoverBackground: '#FBBE09', nameColor: '#003F7A', bodyColor: '#003F7A' },
  magenta: { hoverBackground: '#D5306C', nameColor: '#FFFFFF', bodyColor: '#FFFFFF' },
  orange: { hoverBackground: '#F37021', nameColor: '#FFFFFF', bodyColor: '#FFFFFF' },
} satisfies Record<string, HoverColors>;

const P = (name: string, role: string, colors: HoverColors, extra: { description?: string; position?: string } = {}): TeamMember => {
  const id = slug(name);
  return {
    id,
    name,
    role,
    // Asociación explícita persona → retrato
    image: { src: `/assets/equipo/${id}.jpg`, alt: `Retrato de ${name}`, fit: 'cover', position: extra.position ?? '50% 30%' },
    description: extra.description ?? SHARED_DESCRIPTION,
    ...colors,
  };
};

/** Hero de la página /equipo/ (foto de la reunión de "Atracción de inversiones"). */
export const teamHero = {
  image: A('que-hace-acompanamiento.jpg?v=2', 'Integrante del equipo de ProBarranquilla presentando ante un grupo de empresarios', { position: '70% 40%' }),
  title: ['El equipo detrás de', 'las oportunidades'],
  description: ['Un equipo multidisciplinar organizado en cuatro grandes áreas que', 'articulan inversión, turismo de reuniones, entorno y operaciones.'],
};

export const team = {
  title: ['El equipo detrás de las', 'oportunidades'],
  intro: ['Un equipo multidisciplinar organizado en cuatro grandes áreas', 'que articulan inversión, turismo de reuniones, entorno', 'y operaciones.'],
  allLabel: 'Todo el equipo',
  areas: [
    {
      id: 'direccion',
      filter: 'Dirección',
      title: 'Dirección Ejecutiva',
      description: 'Dirección estratégica y coordinación institucional de ProBarranquilla.',
      people: [P('Vicky Osorio', 'Dirección Ejecutiva', HOVER.navy)],
    },
    {
      id: 'gerencia-corporativa',
      filter: 'Gerencia Corporativa',
      title: 'Gerencia Corporativa',
      description: 'Soporte y gestión administrativa, financiera, jurídica y de talento humano.',
      people: [
        P('Verónica Gómez', 'Gerente', HOVER.green),
        P('Estefanía Venegas', 'Asesora de Alianzas', HOVER.green),
        P('Sindy Campo', 'Analista Administrativa', HOVER.green),
        P('Kettys Camacho', 'Analista Contable', HOVER.green),
        P('Shandry Ramos', 'Asistente Administrativa', HOVER.green),
      ],
    },
    {
      id: 'comunicaciones',
      filter: 'Comunicaciones',
      title: 'Comunicaciones',
      description: 'Estrategia global de posicionamiento de marca, reputación y comunicaciones.',
      people: [P('Nathalie Daccarett', 'Gerente', HOVER.blue), P('Antonella Rivero', 'Community Manager', HOVER.blue), P('Sebastián Duarte', 'Analista de Comunicaciones', HOVER.blue)],
    },
    {
      id: 'atraccion-de-inversiones',
      filter: 'Atracción de inversores',
      title: 'Atracción de Inversiones',
      description: 'Acompañamiento, captación de capitales y facilitación de soft-landing corporativo.',
      people: [P('María Alejandra Henríquez', 'Gerente', HOVER.yellow), P('Mariana Romo', 'Asesora Senior de Inversiones', HOVER.yellow), P('Nicole Mateus', 'Asesora de Inversiones', HOVER.yellow)],
    },
    {
      id: 'turismo-de-reuniones',
      filter: 'Turismo',
      title: 'Turismo de Reuniones',
      description: 'Captación de eventos, ferias de alta gama y turismo corporativo MICE.',
      people: [P('Fiorella Rivera', 'Gerente', HOVER.magenta), P('Angelica Bolivar', 'Asesora de Turismo de Reuniones', HOVER.magenta)],
    },
    {
      id: 'entorno-de-negocios',
      filter: 'Entorno de negocios',
      title: 'Entorno de Negocios',
      description: 'Análisis de indicadores, centro de inteligencia de mercados y competitividad en la región.',
      people: [P('Daniela Gutiérrez', 'Gerente', HOVER.orange), P('Oscar Imítola', 'Asesor de Entorno de Negocios', HOVER.orange)],
    },
    {
      id: 'gestion-de-la-informacion',
      filter: 'Gestión de la información',
      title: 'Gestión de la Información',
      description: 'Monitoreo de indicadores, observatorio de inteligencia de mercados y competitividad regional.',
      people: [P('Diana Romero', 'Gerencia Gestión de la Información', HOVER.orange), P('María T. Urueta', 'Analista de Gestión de información', HOVER.orange), P('Diego Ramirez', 'Asistente de Información', HOVER.orange)],
    },
  ] satisfies TeamArea[],
};

/* ---------- Consejo directivo ---------- */

export type BoardMember = { name: string; role: string; company: string; photo: ImageAsset; logo?: string };

/** Foto pendiente: se espera en public/assets/sobre/consejo/<nombre>.jpg */
const B = (name: string, role: string, company: string, logo?: string): BoardMember => ({
  name,
  role,
  company,
  /** Logo de la empresa (probarranquilla.org): public/assets/sobre/consejo/logos/ */
  logo: logo && `/assets/sobre/consejo/logos/${logo}.png`,
  photo: A(`consejo/${name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg?v=3`, `Retrato de ${name}`, { position: '50% 25%' }),
});

export const board = {
  title: ['Empresarios expertos', 'aportando al Departamento.'],
  text: ['Contamos con el apoyo de empresarios expertos en sus sectores, con el', 'interés de aportar al crecimiento del Departamento.'],
  accordionLabel: 'Consejo directivo',
  /** Miembros, cargos y empresas tomados de probarranquilla.org/nosotros */
  members: [
    B('Ernesto Herrera', 'Presidente', 'Combarranquilla', 'combarranquilla'),
    B('Manuel Fernández', 'Presidente Ejecutivo', 'Cámara de Comercio de Barranquilla', 'camara-de-comercio'),
    B('Luis Miguel Fernández', 'Presidente', 'Tebsa', 'tebsa'),
    B('Sergio Barake', 'Director Financiero', 'Invercosur'),
    B('Felipe González', 'Presidente', 'Acesco', 'acesco'),
    B('Herman Castellanos', 'Gerente regional caribe', 'Alianza Team', 'alianza-team'),
    B('Charles Chapman', 'Socio', 'Chapman Wilches', 'chapman-wilches'),
    B('Piero Celia', 'Presidente', 'Banco Serfinanza', 'serfinanza'),
    B('Manuel Buitrago', 'Presidente', 'Puerto de Barranquilla', 'puerto-de-barranquilla'),
    B('José Francisco Aguirre', 'Director', 'Fundación Santo Domingo', 'fundacion-santo-domingo'),
    B('José Consuegra', 'Rector', 'Universidad Simón Bolívar', 'universidad-simon-bolivar'),
    B('Claudia Fuentes', 'Miembro de junta directiva', 'Solmex', 'solmex'),
    B('Manuel Herrera', 'Gerente', 'Zona Franca La Cayena', 'zona-franca-la-cayena'),
  ],
  honoraryLabel: 'Miembros honorarios',
  honorary: [
    B('Guillermo Heins', 'Representante Legal', 'TM del Caribe'),
    B('Rodrigo Plata', 'Presidente', 'Esacar LTDA', 'ensacar'),
  ],
};
