import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { getArticleBySlug, publishedSlugs, articleSummary } from './src/data/noticias';

/** Plantilla única del detalle de noticia. */
const ARTICLE_TEMPLATE = 'noticias/articulo/index.html';

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Rutas /noticias/<slug>/:
 * - dev: sirve la plantilla para slugs publicados y 404.html para el resto.
 * - build: genera dist/noticias/<slug>/index.html con título y metadatos propios.
 */
function newsRoutes(): Plugin {
  return {
    name: 'probarranquilla-news-routes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const match = req.url?.match(/^\/noticias\/([^/?#.]+)\/?(\?.*)?$/);
        if (match) {
          const slug = match[1];
          req.url = publishedSlugs.includes(slug) ? `/${ARTICLE_TEMPLATE}` : '/404.html';
        }
        next();
      });
    },
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      const template = readFileSync(resolve(dist, ARTICLE_TEMPLATE), 'utf8');
      for (const slug of publishedSlugs) {
        const article = getArticleBySlug(slug)!;
        const title = `${article.seo?.title ?? article.title} | ProBarranquilla`;
        const description = article.seo?.description ?? articleSummary(article);
        const meta = [
          `<meta name="description" content="${escapeHtml(description)}" />`,
          `<meta property="og:type" content="article" />`,
          `<meta property="og:title" content="${escapeHtml(title)}" />`,
          `<meta property="og:description" content="${escapeHtml(description)}" />`,
          article.hero ? `<meta property="og:image" content="${escapeHtml(article.hero.src)}" />` : '',
        ].join('\n    ');
        const html = template
          .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>\n    ${meta}`);
        const outDir = resolve(dist, 'noticias', slug);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(resolve(outDir, 'index.html'), html);
      }
    },
  };
}

// Sitio multipágina: cada página tiene su propio index.html
export default defineConfig({
  plugins: [react(), newsRoutes()],
  server: { port: 5180, strictPort: false },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        instalate: resolve(__dirname, 'instalate-en-barranquilla/index.html'),
        sobre: resolve(__dirname, 'sobre-probarranquilla/index.html'),
        casos: resolve(__dirname, 'casos-de-exito/index.html'),
        evento: resolve(__dirname, 'haz-tu-evento-en-barranquilla/index.html'),
        sectores: resolve(__dirname, 'sectores/index.html'),
        boletines: resolve(__dirname, 'boletines/index.html'),
        guiaInversionista: resolve(__dirname, 'guia-del-inversionista/index.html'),
        guiaTributaria: resolve(__dirname, 'guia-tributaria/index.html'),
        simulador: resolve(__dirname, 'simulador-de-impuestos/index.html'),
        prodata: resolve(__dirname, 'prodata/index.html'),
        noticias: resolve(__dirname, 'noticias/index.html'),
        articulo: resolve(__dirname, ARTICLE_TEMPLATE),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
