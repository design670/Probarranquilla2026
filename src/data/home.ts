/**
 * Datos del Home que combinan la portada (content.ts) con la colección de noticias (noticias.ts).
 * Va aparte para no crear una importación circular entre esos dos archivos.
 */
import { news, type NewsCategory, type NewsItem } from './content';
import { articleHrefById, getArticleById } from './noticias';

/** Foto del hero: la rueda del Malecón al atardecer (enviada por el cliente, noviembre 2026). */
export const heroImage = {
  src: '/assets/hero/hero-home-rueda.jpg',
  srcMobile: '/assets/hero/hero-home-rueda-movil.jpg',
  alt: 'Vista aérea del Malecón de Barranquilla al atardecer con la rueda panorámica iluminada',
};

/** Las 3 noticias que antes iban en "Últimas noticias" pasan al carrusel del hero. */
const HERO_NEWS_IDS = ['n11', 'n13', 'n12'];

export const heroSlides = news.items.map((n, i) => ({
  ...n,
  href: articleHrefById(HERO_NEWS_IDS[i]),
}));

/** "Últimas noticias" del Home: las 3 más recientes de la sección Noticias (distintas a las del hero). */
const HOME_NEWS_IDS = ['n01', 'n02', 'n03'];

const toHomeCategory = (c: string): NewsCategory => (c === 'Expo ProBarranquilla' ? 'ExpoProBarranquilla' : (c as NewsCategory));

export const homeNews: NewsItem[] = HOME_NEWS_IDS.map((id) => {
  const a = getArticleById(id)!;
  return {
    title: a.title,
    image: a.image,
    alt: a.alt,
    place: a.place,
    date: a.date,
    categories: [toHomeCategory(a.category)],
    href: articleHrefById(id),
  };
});
