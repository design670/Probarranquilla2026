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
  title: ['Somos la Agencia de Promoción y Atracción de', 'Inversión y Turismo de Reuniones de', 'Barranquilla, el Atlántico y su área de influencia.'],
  // Las cifras ahora son las del Home (impact en content.ts)
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
  title: '¿Qué hace?',
  banners: [
    {
      id: 'acompanamiento',
      label: '01 / Atracción de inversiones',
      title: 'Acompañamiento',
      body: [
        { text: 'Acompañamos a empresas nacionales e internacionales interesadas en establecer operaciones en Barranquilla y el Atlántico.' },
        { strong: 'Facilitamos cada etapa del proceso:', text: 'evaluación inicial, instalación y re-inversión.' },
      ],
      tone: 'navy',
      image: A('que-hace-acompanamiento.jpg?v=2', 'Presentación de tendencias de inversión ante un grupo de empresarios', { position: '70% 40%' }),
      textWidth: 400,
    },
    {
      id: 'posicionamiento',
      label: '02 / Turismo de Reuniones',
      title: 'Posicionamiento',
      body: [
        {
          text: 'Posicionamos a Barranquilla como sede estratégica para eventos corporativos, ferias, congresos y convenciones. Articulamos capacidades locales y ofrecemos acompañamiento especializado a organizadores y operadores del sector MICE.',
        },
      ],
      tone: 'gold',
      image: A('que-hace-posicionamiento.jpg?v=2', 'Vista aérea de la Ventana al Mundo en Barranquilla', { position: '60% 50%' }),
      textWidth: 520,
    },
    {
      id: 'seguimiento',
      label: '03 / Entorno de Negocios',
      title: 'Seguimiento',
      body: [
        { text: 'Seguimiento y acompañamiento al inversionista instalado.' },
        { text: 'Fomentamos el diálogo entre el sector público, privado y la academia para fortalecer el clima de inversión.' },
      ],
      tone: 'orange',
      image: A('que-hace-seguimiento.jpg?v=2', 'Hombre con gorra frente a un mural de grafiti en Barranquilla', { position: '80% 30%' }),
      textWidth: 360,
    },
  ] as AboutBanner[],
};

/* ---------- Acompañamiento a la inversión ---------- */

export const investmentStages = {
  title: ['Fomentamos el desarrollo económico mediante la', 'atracción, retención y crecimiento de inversiones', 'extranjeras sostenibles en Barranquilla y el', 'departamento del Atlántico.'],
  stages: [
    {
      number: '01',
      tone: 'teal',
      title: ['Pre-Inversión'],
      text: 'Información actualizada sobre las condiciones del Atlántico en aspectos clave para la toma de decisiones. Compilación de perfiles sectoriales, datos generales de zonas francas y resúmenes concisos de consultas esenciales y costos empresariales. Análisis de indicadores macroeconómicos, incentivos, propiedades disponibles y talento.',
      justify: true,
    },
    {
      number: '02',
      tone: 'orange',
      title: ['Instalación'],
      text: 'Servicios de selección de sitios. Facilitación de reuniones con proveedores locales, representantes del sector público y la academia. Asistencia en el seguimiento de permisos y trámites con entidades locales.',
      justify: true,
    },
    {
      number: '03',
      tone: 'yellow',
      title: ['Reinversión /', 'Expansión'],
      text: 'Asesoría sobre oportunidades de reinversión orientadas a expandir, diversificar y mejorar las operaciones actuales. Asistencia táctica para la resolución de problemas relacionados con licencias, permisos y procedimientos regulatorios.',
      justify: false,
    },
  ],
};

/* ---------- Nuestra historia ---------- */

export type Milestone = {
  /** Rótulo de la línea de tiempo ("Hoy" para el estado actual). */
  year: string;
  /** `null` = pendiente: el panel muestra solo el año y la imagen. */
  title: string[] | null;
  description?: string;
  image: ImageAsset;
};

const M = (year: string, title: string[] | null = null): Milestone => ({
  year,
  title,
  image: A(`historia-${year.toLowerCase()}.jpg`, `Barranquilla en ${year === 'Hoy' ? 'la actualidad' : year}`),
});

export const history = {
  title: 'Nuestra historia',
  subtitle: 'Una evolución constante al servicio del desarrollo de Barranquilla y el Atlántico.',
  /** Recurso geográfico de fondo (bajo contraste). Pendiente: sin archivo no se pinta. */
  background: null as ImageAsset | null,
  // Solo 1988 tiene contenido legible en la referencia; el resto queda pendiente.
  milestones: [
    { ...M('1988', ['Promotora de Desarrollo', 'Urbano']), image: A('historia-1988.jpg', 'Vista aérea de Barranquilla y el río Magdalena', { position: '50% 50%' }) },
    M('1992'),
    M('2002'),
    M('2008'),
    M('2015'),
    M('2016'),
    M('2021'),
    M('Hoy'),
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
