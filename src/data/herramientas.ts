import type { ResourcePageContent } from '../components/ResourcePage';

/**
 * Páginas del menú "Herramientas" (plantilla de Boletines + Guia-del-inversionista.png).
 * Textos enviados por el cliente; documentos tomados de las páginas oficiales:
 * - https://probarranquilla.org/guia-del-inversionista/
 * - https://probarranquilla.org/prodata/
 * Las fotos de hero no existen todavía: quedan como placeholder (ver PENDIENTES.md).
 */

const UPLOADS = 'https://probarranquilla.org/wp-content/uploads/';
const IMG = '/assets/herramientas/';

/* ---------- Guía del Inversionista ---------- */

export const investorGuidePage: ResourcePageContent = {
  hero: {
    image: { src: '/assets/hero/guia-inversionista.jpg', alt: 'Vista aérea de Barranquilla' },
    title: ['Guía del Inversionista'],
    description: ['Todo lo que necesitas para invertir en Barranquilla y el Atlántico'],
    text: 'Encuentra información clave para evaluar, establecer y desarrollar una operación en el territorio y las condiciones necesarias para poner en marcha tu inversión.',
  },
  layout: 'featured',
  listLabel: 'Guías del inversionista',
  // Textos de las cards según Guia-del-inversionista.png; PDF de la web oficial (mayo 2026)
  items: [
    {
      id: 'guia-del-inversionista-2026',
      title: '¡Descubre nuestra Guía del inversionista!',
      text: 'Barranquilla y el Atlántico, un destino ideal para invertir y hacer negocios.',
      documentName: 'Guía del Inversionista 2026 · Barranquilla y el Atlántico',
      image: { src: `${IMG}guia-del-inversionista-2026.webp`, alt: 'Portada de la Guía del Inversionista 2026, Barranquilla y el Atlántico' },
      action: { kind: 'download', url: `${UPLOADS}2026/05/Guia-del-Inversionista-2026-N.pdf` },
    },
    {
      id: 'investment-guide-2026',
      title: "Discover our Investor's Guide!",
      text: 'Barranquilla and the Atlántico, an ideal destination to invest and do business.',
      documentName: 'Investment Guide 2026 · Barranquilla and the Atlántico Department',
      image: { src: `${IMG}investment-guide-2026.webp`, alt: 'Cover of the Investment Guide 2026, Barranquilla and the Atlántico Department' },
      action: { kind: 'download', url: `${UPLOADS}2026/05/Investment-Guide-2026-N.pdf` },
    },
  ],
};

/* ---------- Guía Tributaria ---------- */

export const taxGuidePage: ResourcePageContent = {
  hero: {
    image: { src: '/assets/hero/guia-tributaria.jpg', alt: 'Barranquilla' },
    title: ['Guía Tributaria'],
    description: ['Entiende el entorno tributario para tu inversión'],
    text: 'Consulta información sobre los principales impuestos, obligaciones y aspectos tributarios que una empresa debe considerar al establecer o desarrollar una operación en Barranquilla y el Atlántico.',
  },
  layout: 'featured',
  listLabel: 'Guía tributaria',
  items: [
    {
      id: 'guia-tributaria-2025',
      // Título y texto tomados de la portada del PDF
      title: 'Guía Tributaria 2025',
      text: 'Barranquilla y Área Metropolitana',
      image: { src: `${IMG}guia-tributaria-2025.webp`, alt: 'Portada de la Guía Tributaria 2025, Barranquilla y Área Metropolitana' },
      action: { kind: 'download', url: `${UPLOADS}2026/02/Guia-Tributaria-2025.pdf` },
    },
  ],
};

/* ---------- Simulador de Impuestos ---------- */

export const taxSimulatorPage: ResourcePageContent = {
  hero: {
    image: { src: '/assets/hero/simulador-de-impuestos.jpg', alt: 'Barranquilla' },
    title: ['Simulador de Impuestos'],
    description: ['Proyecta los impuestos de tu operación'],
    text: 'Simula la carga tributaria asociada a tu proyecto de acuerdo con las características de la operación que planeas desarrollar y obtén una estimación que facilite tu proceso de evaluación.',
    // Etiqueta del botón por confirmar (ver PENDIENTES.md)
    cta: { label: 'Ir al simulador', href: 'https://prodata.probarranquilla.org/simulador/simulation' },
  },
  layout: 'featured',
  listLabel: 'Simulador de impuestos',
  items: [],
};

/* ---------- ProData ---------- */

const PRODATA_LOGIN = 'https://prodata.probarranquilla.org/auth/login';

export const prodataPage: ResourcePageContent = {
  hero: {
    image: { src: '/assets/hero/prodata.jpg', alt: 'Barranquilla' },
    title: ['ProData: la inteligencia territorial', 'que transforma datos en decisiones.'],
    text: 'Accede en un solo lugar a información estratégica de Barranquilla y el Atlántico. Explora indicadores, mapas interactivos, boletines, estudios sectoriales y herramientas especializadas para conocer el territorio, evaluar su entorno y tomar decisiones con información confiable.',
    cta: { label: 'Explora ProData', href: 'https://probarranquilla.org/prodata/' },
  },
  layout: 'featured',
  listLabel: 'Secciones de ProData',
  // Secciones, textos e imágenes de https://probarranquilla.org/prodata/
  items: [
    {
      id: 'prodata-mapas',
      title: 'Mapas',
      text: 'Conoce la infraestructura para negocios de Barranquilla y el departamento del Atlántico.',
      image: { src: `${IMG}prodata-mapas.webp`, alt: 'Ícono de mapas de ProData' },
      action: { kind: 'link', url: PRODATA_LOGIN, label: 'Explorar' },
    },
    {
      id: 'prodata-indicadores',
      title: 'Indicadores',
      text: 'Explora indicadores de Barranquilla y el Atlántico y compara con los principales territorios del país.',
      image: { src: `${IMG}prodata-indicadores.webp`, alt: 'Ícono de indicadores de ProData' },
      action: { kind: 'link', url: PRODATA_LOGIN, label: 'Explorar' },
    },
    {
      id: 'prodata-repositorio',
      title: 'Repositorio',
      text: 'Descubre investigaciones, informes y demás publicaciones sobre el desempeño de la ciudad y el departamento.',
      image: { src: `${IMG}prodata-repositorio.webp`, alt: 'Ícono de repositorio de ProData' },
      action: { kind: 'link', url: PRODATA_LOGIN, label: 'Explorar' },
    },
  ],
};
