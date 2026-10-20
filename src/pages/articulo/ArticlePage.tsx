import { useEffect } from 'react';
import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { SmartImage } from '../../components/SmartImage';
import { LatestNews } from '../../components/LatestNews';
import { NotFoundHero } from '../../components/NotFound';
import { articleSummary, articleUrl, getArticleBySlug, type NewsArticle } from '../../data/noticias';
import './ArticlePage.css';

/** Filtros visibles en la referencia del detalle (aún sin categoría asociada). */
const LATEST_FILTERS = [{ label: 'Noticias' }, { label: 'Eventos' }, { label: 'Desarrollo' }];

/** Crea o actualiza una etiqueta <meta>. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function useArticleMeta(article: NewsArticle | undefined) {
  useEffect(() => {
    if (!article) {
      document.title = 'Página no encontrada | ProBarranquilla';
      setMeta('name', 'robots', 'noindex');
      return;
    }
    const title = `${article.seo?.title ?? article.title} | ProBarranquilla`;
    const description = article.seo?.description ?? articleSummary(article);
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (article.hero) setMeta('property', 'og:image', article.hero.src);
  }, [article]);
}

function ArticleBody({ article }: { article: NewsArticle }) {
  return (
    <article className="article" aria-label={article.title}>
      <div className="article__container">
        {article.body!.map((block, i) =>
          block.type === 'paragraph' ? (
            <p key={i} className="article__p">
              {block.dateline && (
                <>
                  <strong className="article__dateline">
                    <time dateTime={block.dateline.iso}>{block.dateline.text}</time>
                  </strong>{' '}
                </>
              )}
              {block.text}
            </p>
          ) : (
            <figure key={i} className="article__figure">
              <SmartImage {...block.image} className="article__img" />
            </figure>
          ),
        )}
      </div>
    </article>
  );
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);
  useArticleMeta(article);

  if (!article) {
    return (
      <SiteShell hero={<NotFoundHero />} footerVariant="wide">
        {null}
      </SiteShell>
    );
  }

  return (
    <SiteShell
      footerVariant="wide"
      hero={
        <PageHero
          image={article.hero ?? { src: article.image, alt: article.alt, position: article.position }}
          title={[article.title]}
          description={article.description}
          shade="article"
          size="article"
        />
      }
    >
      <ArticleBody article={article} />
      <LatestNews filters={LATEST_FILTERS} exclude={{ href: articleUrl(article), title: article.title }} />
    </SiteShell>
  );
}
