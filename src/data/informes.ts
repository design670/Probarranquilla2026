import type { ResourcePageContent } from '../components/ResourcePage';
import type { Resource } from '../components/ResourceCard';

/**
 * Página "Informes de labores".
 * Portadas y PDF tomados de https://probarranquilla.org/nuestra-gestion/ (noviembre 2026).
 * Cada portada se revisó contra su año. Dos tarjetas oficiales abren un PDF equivocado
 * y quedan como pendientes (ver PENDIENTES.md).
 */

const PDF = 'https://probarranquilla.org/wp-content/uploads/';
const IMG = '/assets/informes/';

const report = (year: number, cover: string, pdf: string | null): Resource => ({
  id: `informe-de-labores-${year}`,
  title: `Informe de labores ${year}`,
  image: { src: `${IMG}${cover}`, alt: `Portada del Informe de labores ${year} de ProBarranquilla` },
  action: { kind: 'download', url: pdf ? PDF + pdf : null },
});

const financial = (year: number, pdf: string): Resource => ({
  id: `estados-financieros-${year}`,
  title: `Estados financieros ${year}`,
  coverText: ['Estados financieros', String(year)],
  action: { kind: 'download', url: PDF + pdf },
});

export const reportsPage: ResourcePageContent = {
  hero: {
    // Pendiente: no hay foto de hero para esta página (placeholder hasta recibirla)
    image: { src: '/assets/hero/informes-de-labores.jpg', alt: 'Barranquilla' },
    title: ['Informes de labores'],
    // Bajada propuesta: la página oficial no trae texto (ver PENDIENTES.md)
    description: ['Conoce la gestión y los resultados de ProBarranquilla año a año'],
  },
  listLabel: 'Informes de labores y estados financieros',
  items: [],
  covers: 'fill',
  groups: [
    {
      id: 'informes',
      title: 'Informes de labores',
      items: [
        // En la web oficial el botón de 2025 abre los estados financieros 2025
        report(2025, 'informe-2025.png', null),
        report(2024, 'informe-2024.jpg', '2025/03/Informe-de-Labores-PBQ-2024-comprimid.pdf'),
        report(2023, 'informe-2023.jpg', '2024/03/Informe-de-Labores-PBQ-2023.pdf'),
        report(2022, 'informe-2022.png', '2023/03/Informe-de-Labores-PBQ-2022-final.pdf'),
        report(2021, 'informe-2021.png', '2022/03/InformeProBaq2021-2_compressed.pdf'),
        // En la web oficial el botón de 2020 abre el informe de 2022
        report(2020, 'informe-2020.png', null),
        report(2019, 'informe-2019.png', '2024/02/Informe-2019-PROBAQ.pdf'),
        report(2018, 'informe-2018.png', '2021/11/Informe-labores-2018.pdf'),
        report(2017, 'informe-2017.png', '2021/11/Informe-labores-2017.pdf'),
        report(2016, 'informe-2016.png', '2021/11/Informe-Labores-2016.pdf'),
      ],
    },
    {
      id: 'estados-financieros',
      title: 'Estados financieros',
      items: [
        // Archivo enlazado por error en la tarjeta oficial de "Informe Labores 2025"
        financial(2025, '2026/06/20260624T195147_EEFF_PB_2025_ESAL_DIAN_.pdf'),
        financial(2024, '2025/06/EEFF-2024-PBQ-ESAL-DIAN.pdf'),
        financial(2023, '2024/06/EEFF-PROBARRANQUILLA-2023.pdf'),
      ],
    },
  ],
};
