/**
 * Colección de noticias: listado (/noticias/) y detalle (/noticias/<slug>/).
 * Textos transcritos de "Noticias.jpg" y "Noticia independiente.jpg" (1366 px).
 * Las imágenes se reemplazan copiando el archivo en /public con la ruta indicada.
 *
 * Solo las noticias con `body` tienen página de detalle; las demás enlazan a
 * PENDING_HREF hasta que se cargue su contenido (no se inventan textos).
 */
import type { ImageAsset } from '../components/SmartImage';
import { PENDING_HREF } from './content';

export type NewsCategory = 'Turismo de reuniones' | 'Expo ProBarranquilla' | 'Inversiones';

/** Bloques del cuerpo editorial: admite cualquier secuencia de párrafos e imágenes. */
export type ArticleBlock =
  | {
      type: 'paragraph';
      text: string;
      /** Ubicación y fecha iniciales en negrita (solo el primer párrafo suele tenerla). */
      dateline?: { text: string; iso: string };
    }
  | { type: 'image'; image: ImageAsset };

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  category: NewsCategory;
  place: string;
  /** Fecha visible en la tarjeta */
  date: string;
  /** Foto de la tarjeta */
  image: string;
  alt: string;
  position?: string;
  /** Detalle (opcional mientras no exista el contenido) */
  description?: string[];
  hero?: ImageAsset;
  body?: ArticleBlock[];
  seo?: { title?: string; description?: string };
};

/** Artículo enriquecido con su destino calculado. */
export type NewsListItem = NewsArticle & { href: string };

export const newsBasePath = '/noticias/';
export const articleUrl = (a: NewsArticle) => (a.body ? `${newsBasePath}${a.slug}/` : PENDING_HREF);

const DESCRIPTION = ['Información exclusiva, de primera mano', 'y detallada. Opinión, análisis y data de', 'territorio.'];

export const newsPage = {
  hero: {
    image: {
      src: '/assets/noticias/hero-noticias.jpg',
      alt: 'Dos mujeres sonríen sosteniendo un reconocimiento en un evento',
      fit: 'cover',
      position: '70% 30%',
    } satisfies ImageAsset,
    title: ['Segmento', 'informativo con', 'énfasis en la', 'Fundación', 'ProBarranquilla.'],
    description: DESCRIPTION,
  },
  filters: ['Turismo de reuniones', 'Expo ProBarranquilla', 'Inversiones'] as NewsCategory[],
  pageSize: 9,
  loadMoreLabel: 'Ver más',
};

const img = (file: string) => `/assets/noticias/listado/${file}`;
const detailImg = (file: string) => `/assets/noticias/detalle/${file}`;
const PLACE = 'Barranquilla';
const DATE = 'Febrero 9 de 2026';

/**
 * Noticias de la referencia, en su orden. Los "..." son truncamientos de la
 * captura; al recibir los titulares completos se reemplazan aquí (el CSS limita
 * a 3 líneas). Las tarjetas 6 y 9 repiten titular en la referencia.
 * Categorías asignadas de forma provisional según el titular: confirmar.
 */
const articles: NewsArticle[] = [
  {
    id: 'n01',
    slug: 'barranquilla-fortalece-posicionamiento-internacional-eventos',
    category: 'Turismo de reuniones',
    // Titular completo según el hero del detalle (la captura corta "económic")
    title: 'Barranquilla fortalece su posicionamiento internacional para atraer eventos que impulsan el desarrollo económico',
    place: PLACE,
    date: DATE,
    image: img('n01-eventos-internacionales.jpg'),
    alt: 'Asistentes posan junto a un personaje con disfraz tradicional en un stand',
    description: DESCRIPTION,
    hero: {
      src: detailImg('n01-hero.jpg'),
      alt: 'Equipo de ProBarranquilla junto a un personaje con disfraz tradicional y una mascota en un stand de Colombia',
      fit: 'cover',
      position: '62% 35%',
    },
    body: [
      {
        type: 'paragraph',
        dateline: { text: 'Barranquilla, 17 de junio de 2026.', iso: '2026-06-17' },
        text: 'Los eventos internacionales se han consolidado como una herramienta estratégica para el desarrollo económico de Barranquilla y el Atlántico. Solo los eventos captados por ProBarranquilla durante el 2025 representan un impacto económico de USD 66 millones para la ciudad, impulsando sectores como hotelería, gastronomía, transporte, comercio y servicios.',
      },
      {
        type: 'paragraph',
        text: 'Con el objetivo de seguir atrayendo oportunidades para el territorio, ProBarranquilla participó recientemente en IMEX Frankfurt en Alemania, FIEXPO Latin America en Costa Rica y el Workshop de Argentina, Uruguay y Paraguay organizado por ProColombia en Barranquilla, tres espacios clave para el relacionamiento con actores de la industria global de reuniones y eventos.',
      },
      {
        type: 'paragraph',
        text: 'En el marco de estos encuentros, ProBarranquilla desarrolló una agenda de más de 50 reuniones con asociaciones internacionales, organizadores de congresos, agencias especializadas y compradores provenientes de mercados como Estados Unidos, México, Panamá, España, Argentina, Uruguay Paraguay, entre otros. Estos espacios permitieron promover a Barranquilla y el Atlántico como destino de eventos internacionales, destacando atributos como su ubicación estratégica, infraestructura especializada, capacidad hotelera y la articulación público-privada que caracteriza al territorio.',
      },
      {
        type: 'paragraph',
        text: 'Además de la agenda comercial, ProBarranquilla participó en espacios académicos liderados por la International Congress and Convention Association (ICCA), enfocados en tendencias globales, inteligencia de mercado, fortalecimiento de capacidades para destinos y oportunidades de crecimiento de la industria de reuniones con los talleres de Candidaturas Inteligentes. Asimismo, en el marco de FIEXPO Latin America, la organización presentó el caso de éxito de la Conferencia Iberoamericana de Educación en Enfermería durante el ICCA Business Exchange, compartiendo la experiencia de este gran evento captado para la ciudad y su impacto en el posicionamiento de Barranquilla como sede de encuentros especializados.',
      },
      {
        type: 'image',
        image: {
          src: detailImg('n01-interior.jpg'),
          alt: 'Integrantes de ProBarranquilla sonríen junto a un personaje con sombrero vueltiao y una mascota con balón',
          fit: 'cover',
          position: '50% 40%',
        },
      },
      {
        type: 'paragraph',
        text: '“Los encuentros internacionales son una herramienta estratégica para el desarrollo económico del departamento. Cada congreso o convención que llega a Barranquilla genera oportunidades para múltiples sectores, fortalece nuestro posicionamiento a nivel internacional y nos permite mostrar ante el mundo las capacidades que hoy hacen de este territorio un destino competitivo para la inversión y los grandes eventos”, señaló Vicky Osorio, directora ejecutiva de ProBarranquilla.',
      },
      {
        type: 'paragraph',
        text: '“Estos escenarios nos permiten conectar directamente con asociaciones internacionales y tomadores de decisión que buscan destinos preparados para albergar eventos de alto nivel. Barranquilla cuenta con la infraestructura, la experiencia y la articulación necesaria para competir por eventos que no solo generan impacto económico, sino que también dejan un legado de relacionamiento y oportunidades para la ciudad”, afirmó Fiorella Rivera, gerente de Turismo de Reuniones de ProBarranquilla.',
      },
      {
        type: 'paragraph',
        text: 'La participación en estos escenarios hace parte de la estrategia que lidera ProBarranquilla para fortalecer la promoción internacional de Barranquilla y el Atlántico, atraer eventos de alto impacto y continuar generando oportunidades de desarrollo económico para el territorio.',
      },
    ],
  },
  { id: 'n02', slug: 'probarranquilla-te-conecta-10-anos', category: 'Inversiones', title: 'ProBarranquilla Te Conecta celebró 10 años impulsando la inversión y los negocios con más de 900 citas...', place: PLACE, date: DATE, image: img('n02-te-conecta.jpg'), alt: 'Empresarios se saludan en una rueda de negocios' },
  { id: 'n03', slug: 'lideres-empresariales-expoprobarranquilla-retos', category: 'Expo ProBarranquilla', title: 'Líderes empresariales y expertos nacionales analizaron en ExpoProBarranquilla los retos...', place: PLACE, date: DATE, image: img('n03-expo-escenario.jpg'), alt: 'Escenario de ExpoProBarranquilla con panelistas' },
  { id: 'n04', slug: 'barranquilla-competencia-global-inversion-extranjera', category: 'Inversiones', title: 'Barranquilla entra a la competencia global por la inversión extranjera con una apuesta regional de alto...', place: PLACE, date: DATE, image: img('n04-panel.jpg'), alt: 'Panel empresarial frente al público' },
  { id: 'n05', slug: 'expoprobarranquilla-2026-agenda', category: 'Expo ProBarranquilla', title: 'ExpoProBarranquilla 2026 llega con una agenda enfocada en inversión, negocios y crecimiento regional', place: PLACE, date: DATE, image: img('n05-conferencia.jpg'), alt: 'Conferencia en ExpoProBarranquilla con el público sentado' },
  { id: 'n06', slug: 'canpack-bavaria-inversion-548000-millones', category: 'Inversiones', title: 'Desarrollo para Colombia: Canpack y Bavaria invertirán COP $548.000 millones.', place: PLACE, date: DATE, image: img('n06-grupo-evento.jpg'), alt: 'Grupo de personas celebrando en un evento corporativo' },
  { id: 'n07', slug: 'wingo-vuelo-directo-aruba', category: 'Turismo de reuniones', title: 'Barranquilla despega con Wingo hacia Aruba: la Arenosa tendrá vuelo directo a la isla feliz...', place: PLACE, date: DATE, image: img('n07-wingo-aruba.jpg'), alt: 'Grupo frente a piezas de Wingo y la Alcaldía de Barranquilla' },
  { id: 'n08', slug: 'wingo-ruta-barranquilla-bucaramanga', category: 'Turismo de reuniones', title: 'Wingo inaugura nueva ruta directa entre Barranquilla y Bucaramanga-.', place: PLACE, date: DATE, image: img('n08-wingo-bucaramanga.jpg'), alt: 'Tripulación y asistentes frente a un stand de Wingo' },
  // Repite el titular de n06 en la referencia; slug propio para no duplicar URL
  { id: 'n09', slug: 'canpack-bavaria-inversion-548000-millones-2', category: 'Inversiones', title: 'Desarrollo para Colombia: Canpack y Bavaria invertirán COP $548.000 millones.', place: PLACE, date: DATE, image: img('n09-espacio-corporativo.jpg'), alt: 'Grupo de ejecutivos en un espacio corporativo' },
];

const withHref = (a: NewsArticle): NewsListItem => ({ ...a, href: articleUrl(a) });

/** Slugs con página de detalle (los usa el build para generar las rutas). */
export const publishedSlugs = articles.filter((a) => a.body).map((a) => a.slug);

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug && a.body);
}

/** URL de detalle de una noticia por id (para enlazar desde otras secciones). */
export function articleHrefById(id: string) {
  const a = articles.find((x) => x.id === id);
  return a ? articleUrl(a) : PENDING_HREF;
}

/** Texto plano del primer párrafo, recortado, para la meta descripción. */
export function articleSummary(a: NewsArticle, max = 160) {
  const first = a.body?.find((b) => b.type === 'paragraph');
  if (!first || first.type !== 'paragraph') return a.title;
  const text = `${first.dateline ? first.dateline.text + ' ' : ''}${first.text}`;
  return text.length > max ? `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…` : text;
}

/**
 * Fuente de datos del listado. Hoy lee el arreglo local; para conectar un CMS
 * o API basta con reemplazar el cuerpo de esta función conservando la firma.
 */
export async function loadNews({ category, offset, limit }: { category: NewsCategory | null; offset: number; limit: number }) {
  const filtered = category ? articles.filter((a) => a.category === category) : articles;
  return { items: filtered.slice(offset, offset + limit).map(withHref), total: filtered.length };
}
