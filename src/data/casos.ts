/**
 * Página "Casos de éxito": los mismos casos del Home (`successStories` en
 * content.ts), uno por vista con foto de ancho completo. Textos y logos se
 * toman del Home; aquí solo se define la foto ancha de cada caso.
 *
 * Bavaria usa la foto del equipo en la planta. Adama y BCCY usan la foto del
 * Home sin las esquinas redondeadas; si llega una versión más grande,
 * reemplaza el archivo. Enel aún no tiene foto (queda el placeholder).
 */
import type { ImageAsset } from '../components/SmartImage';
import { successStories } from './content';

export type CaseStudy = {
  id: string;
  company: string;
  photo: ImageAsset;
  /** Logo blanco sobre la tarjeta azul */
  logo: string;
  /** Fragmento destacado (Montserrat Bold) y fragmento regular, en un solo párrafo */
  lead: string;
  body: string;
};

const widePhotos: Record<string, Partial<ImageAsset>> = {
  Bavaria: {
    src: '/assets/casos/bavaria-equipo.jpg',
    alt: 'Equipo de Bavaria con cascos y chalecos de seguridad frente a las instalaciones de la Cervecería del Atlántico',
    // Anclada abajo: el grupo se ve completo, de los cascos a los zapatos
    position: '50% 85%',
  },
  Adama: { src: '/assets/casos/adama-ancho.jpg', position: '50% 45%' },
  'BCCY Colombia': { src: '/assets/casos/bccy-ancho.jpg', position: '50% 60%' },
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const caseStudies: CaseStudy[] = successStories.cases.map((c) => ({
  id: slug(c.company),
  company: c.company,
  photo: { src: c.image, alt: c.alt, fit: 'cover', position: '50% 50%', ...widePhotos[c.company] },
  logo: c.logo,
  lead: c.lead.trim(),
  body: c.body.trim(),
}));
