/**
 * Blog (/blog/): misma estructura del listado de Noticias (hero, filtros por
 * categoría y año, grilla de tarjetas y "Ver más").
 *
 * EJEMPLO: las entradas de abajo son de muestra (autorizadas por el cliente para
 * ver el diseño) y se reemplazan por las reales. Títulos, fechas y categorías
 * son provisionales; las fotos reutilizan imágenes del sitio y no enlazan a
 * ningún artículo todavía. Ver PENDIENTES.md.
 */
import type { ImageAsset } from '../components/SmartImage';
import type { ListingItem, ListingSource } from '../pages/noticias/NewsListing';
import { PENDING_HREF } from './content';

export type BlogPost = ListingItem & {
  category: string;
};

export const blogPage = {
  hero: {
    // Pendiente: foto del hero (se ve el placeholder hasta copiar el archivo)
    image: { src: '/assets/blog/hero-blog.jpg', alt: '', fit: 'cover', position: '50% 40%' } satisfies ImageAsset,
    title: ['Blog'],
  },
};

const post = (id: string, category: string, title: string, date: string, image: string, alt: string): BlogPost => ({
  id,
  category,
  title,
  date,
  image,
  alt,
  place: 'Barranquilla',
  href: PENDING_HREF,
});

/** Entradas del blog (más recientes primero). EJEMPLO: se reemplazan por las reales. */
const posts: BlogPost[] = [
  post('b01', 'Inversión', 'Cinco razones por las que las empresas eligen Barranquilla para crecer', 'Noviembre 20 de 2026', '/assets/razones/crecimiento.png', 'Edificios de Barranquilla'),
  post('b02', 'Turismo de reuniones', 'Cómo preparar la candidatura de tu congreso para traerlo a la ciudad', 'Noviembre 12 de 2026', '/assets/evento/etapa-apoyo-a-candidaturas.jpg', 'Equipo de ProBarranquilla en una rueda de negocios'),
  post('b03', 'Talento', 'Formación técnica y bilingüismo: el talento que encuentras en el Atlántico', 'Octubre 28 de 2026', '/assets/razones/talento.png', 'Operario en una línea de producción'),
  post('b04', 'Inversión', 'Zonas francas: qué son y cómo pueden ayudar a tu operación', 'Octubre 15 de 2026', '/assets/instalate/zf-barranquilla.jpg', 'Vista aérea de una zona franca'),
  post('b05', 'Ciudad', 'Un recorrido por el Malecón del Río y la Barranquilla que se transforma', 'Septiembre 30 de 2026', '/assets/instalate/hero-malecon.jpg', 'Malecón del Río en Barranquilla'),
  post('b06', 'Turismo de reuniones', 'Visitas de inspección: qué revisar antes de elegir la sede de tu evento', 'Septiembre 18 de 2026', '/assets/evento/etapa-visitas-de-inspeccion.jpg', 'Presentación del destino durante una visita'),
  post('b07', 'Inversión', 'Infraestructura portuaria: la puerta de Barranquilla al comercio exterior', 'Agosto 27 de 2026', '/assets/razones/infraestructura.png', 'Puerto y río Magdalena'),
  post('b08', 'Talento', 'Alianzas con el SENA para formar el personal que tu empresa necesita', 'Agosto 8 de 2026', '/assets/instalate/sena-logistica.jpg', 'Aprendices en formación logística'),
  post('b09', 'Ciudad', 'Experiencias de destino para tus asistentes: cultura, gastronomía y río', 'Julio 22 de 2026', '/assets/evento/etapa-experiencias-de-destino.jpg', 'Visitantes en un muelle frente al mar'),
  post('b10', 'Inversión', 'Plataforma logística: cómo llegar a los mercados desde el Caribe', 'Diciembre 10 de 2025', '/assets/razones/logistica.png', 'Bodega logística'),
  post('b11', 'Turismo de reuniones', 'Proveedores locales para eventos: hoteles, recintos y operadores', 'Noviembre 5 de 2025', '/assets/evento/etapa-acceso-a-proveedores.jpg', 'Rueda de negocios de turismo'),
  post('b12', 'Ciudad', 'Entorno empresarial: el ecosistema que acompaña a las empresas que llegan', 'Octubre 14 de 2025', '/assets/razones/entorno.png', 'Parque empresarial'),
];

/** Año de publicación (la fecha visible termina en el año: "Julio 27 de 2026"). */
const postYear = (p: BlogPost) => p.date.slice(-4);

export const blogListing: ListingSource = {
  label: 'Blog',
  filters: [...new Set(posts.map((p) => p.category))],
  years: [...new Set(posts.map(postYear))].sort((x, y) => y.localeCompare(x)),
  pageSize: 9,
  loadMoreLabel: 'Ver más',
  emptyText: 'Muy pronto publicaremos las primeras entradas del blog.',
  filteredEmptyText: 'No hay entradas publicadas con estos filtros.',
  endText: 'No hay más entradas por ahora.',
  // Para conectar un CMS o API basta con reemplazar esta función conservando la firma
  load: async ({ category, year, offset, limit }) => {
    const filtered = posts.filter((p) => (!category || p.category === category) && (!year || postYear(p) === year));
    return { items: filtered.slice(offset, offset + limit) };
  },
};
