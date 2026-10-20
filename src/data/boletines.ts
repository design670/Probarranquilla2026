import type { ImageAsset } from '../components/SmartImage';
import type { ResourcePageContent } from '../components/ResourcePage';

/**
 * Página "Boletines de Tendencia de Inversión".
 * Portadas y PDF tomados de https://probarranquilla.org/boletin-socioeconomico/
 * (verificados: cada portada, título y PDF pertenecen a la misma tarjeta del sitio oficial).
 * El orden lo define este arreglo, tal como aparece en la referencia "Botelines.png".
 */

export const bulletinsHero = {
  // Pendiente: la foto aérea de bodegas de la referencia no está en el proyecto ni en la web oficial.
  image: {
    src: '/assets/hero/boletines.jpg',
    alt: 'Vista aérea de bodegas industriales y vías en Barranquilla',
    position: '50% 50%',
  } satisfies ImageAsset,
  title: ['Boletines de Tendencia', 'de Inversión'],
  description: ['Conoce de cerca el desempeño y las tendencias de los principales', 'indicadores económicos y sociales del territorio'],
};

export type Bulletin = {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** URL oficial del PDF; `null` = pendiente (el botón se muestra como no disponible). */
  pdfUrl: string | null;
  year: number;
  /** Solo cuando la portada la confirma y coincide con el título. */
  edition?: string;
};

const PDF = 'https://probarranquilla.org/wp-content/uploads/';
const IMG = '/assets/boletines/boletin-';

const b = (id: string, title: string, year: number, pdf: string | null, edition?: string): Bulletin => ({
  id,
  title,
  thumbnail: `${IMG}${id}.webp`,
  thumbnailAlt: `Portada del ${title.charAt(0).toLowerCase()}${title.slice(1)}`,
  pdfUrl: pdf ? PDF + pdf : null,
  year,
  edition,
});

export const bulletins: Bulletin[] = [
  // Fila 1
  b('socioeconomico-septiembre-2026', 'Boletín Indicadores Socioeconómicos Septiembre 2026', 2026, '2026/09/edicion017.pdf', '017'),
  b('tendencias-inversion-edicion-003', 'Boletín de Tendencias de Inversión. Edición 003 2021-2025', 2025, '2026/07/20260702T144054_Boleti_n___Tendencias_de_inversio_n_003__1_.pdf', '003'),
  b('tendencias-inversion-edicion-002', 'Boletín Tendencias de Inversión', 2025, '2025/12/Boletin-Tendencias-de-inversion-.pdf', '002'),
  // Fila 2
  b('turismo-edicion-001', 'Boletín Turismo', 2025, '2025/12/Boletin-Turismo_compressed.pdf', '001'),
  b('socioeconomico-diciembre-2025', 'Boletín Indicadores Socioeconómicos Diciembre 2025', 2025, '2025/12/Boletin-Indicadores-Socioeconomicos-ProBarranquilla-Diciembre-2025.pdf', '016'),
  b('socioeconomico-septiembre-2025', 'Boletín Indicadores Socioeconómicos Septiembre 2025', 2025, '2025/10/PDF.pdf', '015'),
  // Fila 3
  b('socioeconomico-julio-2025', 'Boletín Indicadores Socioeconómicos Julio 2025', 2025, '2025/07/Boletin-Indicadores-Socioeconomicos-ProBarranquilla-julio-2025.pdf', '014'),
  b('socioeconomico-mayo-2025', 'Boletín Indicadores Socioeconómicos Mayo 2025', 2025, '2025/05/Boletin-socioeconomico-mayo.pdf', '010'),
  b('socioeconomico-marzo-2025', 'Boletín Indicadores Socioeconómicos Marzo 2025', 2025, '2025/03/Boletin-Socieconomico-Marzo.pdf', '009'),
  // Fila 4
  b('socioeconomico-diciembre-2024', 'Boletín Indicadores Socioeconómicos Diciembre 2024', 2024, '2024/12/Boletin-Indicadores-Socioeconomicos-ProBarranquilla-Diciembre-2024-1.pdf', '011'),
  b('socioeconomico-octubre-2024', 'Boletín Indicadores Socioeconómicos Octubre 2024', 2024, '2024/10/Boletin-Indicadores-Socioeconomicos-ProBarranquilla-Octubre-2024.pdf', '010'),
  // La portada dice "Septiembre 2024 · Edición 009" (ver PENDIENTES.md)
  b('socioeconomico-agosto-2024', 'Boletín Indicadores Socioeconómicos Agosto 2024', 2024, '2024/08/Boletin-Indicadores-Socioeconomicos-ProBarranquilla-Agosto-2024.pdf'),
  // Fila 5
  b('socioeconomico-junio-2024', 'Boletín Indicadores Socioeconómicos Junio 2024', 2024, '2024/06/Boletin-Indicadores-Socioeconomicos-ProBAQ-Junio-2024-prodata.pdf', '009'),
  b('socioeconomico-abril-2024', 'Boletín de indicadores socioeconómicos abril 2024', 2024, '2024/04/Boletin-Indicadores-Socioeconomicos-ProBAQ-Abril-2024-vf.pdf', '008'),
  b('socioeconomico-febrero-2024', 'Boletín de indicadores socioeconómicos febrero 2024', 2024, '2024/02/Boletin-Indicadores-Socioeconomicos-ProBAQ-Febrero-2024-vf.pdf', '007'),
  // Fila 6
  b('socioeconomico-diciembre-2023', 'Boletín de indicadores socioeconómicos diciembre 2023', 2023, '2023/12/BoletinIndicadoresSocioeconomicosProBAQDiciembre2023-vf.pdf', '006'),
  // En la web oficial este botón abre el PDF de septiembre 2023 (ver PENDIENTES.md)
  b('socioeconomico-noviembre-2023', 'Boletín de indicadores socioeconómicos noviembre 2023', 2023, '2023/09/Boletin-Indicadores-Socioeconomicos-ProBAQ-Septiembre-2023-vf-1.pdf', '005'),
  // La portada repite "Edición 009" (ver PENDIENTES.md)
  b('socioeconomico-septiembre-2023', 'Boletín de indicadores socioeconómicos septiembre 2023', 2023, '2023/09/Boletin-Indicadores-Socioeconomicos-ProBAQ-Septiembre-2023-vf-1.pdf'),
  // Fila 7
  b('socioeconomico-julio-2023', 'Boletín de indicadores socioeconómicos julio 2023', 2023, '2023/08/Boletin-Indicadores-Socioeconomicos-ProBAQ-Julio-2023.pdf', '003'),
  b('socioeconomico-mayo-2023', 'Boletín de indicadores socioeconómicos mayo 2023', 2023, '2023/08/Boletin-Indicadores-Socioeconomicos-ProBAQ-Mayo-2023.pdf', '002'),
  b('socioeconomico-marzo-2023', 'Boletín de indicadores socioeconómicos marzo 2023', 2023, '2023/08/Boletin-Indicadores-Socioeconomicos-ProBAQ-Marzo-2023.pdf', '001'),
  // Fila 8
  b('socioeconomico-tercer-trimestre-2022', 'Boletín de indicadores socioeconómicos tercer trimestre 2022', 2022, '2022/11/II-Boletin-de-indicadores-socioeconomicos_compressed.pdf'),
  b('socioeconomico-primer-2022', 'Primer boletín de indicadores socioeconómicos 2022', 2022, '2022/10/Boletin-de-indicadores-socioeconomicos-vf-Segundo-reporte-1.pdf'),
  // Título según la referencia, la portada y la web oficial (el prompt decía "2022")
  b('socioeconomico-enero-diciembre-2021', 'Boletín de indicadores socioeconómicos Enero/Diciembre 2021', 2021, '2022/10/Newsletter-PB-2022-Version-anterior-Primer-reporte-1.pdf'),
];

/** Contenido de la página con la plantilla común de Herramientas. */
export const bulletinsPage: ResourcePageContent = {
  hero: bulletinsHero,
  listLabel: 'Boletines publicados',
  items: bulletins.map((b) => ({
    id: b.id,
    title: b.title,
    image: { src: b.thumbnail, alt: b.thumbnailAlt },
    action: { kind: 'download', url: b.pdfUrl },
  })),
};
