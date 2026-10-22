/**
 * Página "Casos de éxito": los mismos casos del Home (`successStories` en
 * content.ts), uno por vista con foto de ancho completo. Textos y logos se
 * toman del Home; aquí solo se define la foto ancha de cada caso.
 *
 * Las fotos vienen de src/Img/Home/Home/Casos de éxito. Adama usa una versión
 * ancha de la foto del Home; los demás casos usan la misma foto en ambos lugares.
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
  // Anclada abajo: el grupo se ve completo, de los cascos a los zapatos
  Bavaria: { position: '50% 85%' },
  ADAMA: { src: '/assets/casos/adama-ancho.jpg', position: '50% 45%' },
  // Fotos de grupo: se prioriza que se vean las personas completas
  'Grupo Bimbo': { position: '50% 60%' },
  'Coca-Cola FEMSA': { position: '50% 55%' },
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
