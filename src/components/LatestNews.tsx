import { useState } from 'react';
import { news, type NewsCategory } from '../data/content';
import { ArrowLabel } from './ArrowLabel';
import { NewsCard } from './NewsCard';
import './LatestNews.css';

type FilterOption = { label: string; category?: NewsCategory };

type Props = {
  /**
   * Botones de filtro. Sin `category` el botón se muestra como en el diseño
   * pero no filtra (categoría aún no definida en los datos).
   */
  filters?: FilterOption[];
  /** URL o titular de la noticia que se está leyendo, para no repetirla. */
  exclude?: { href?: string; title?: string };
};

export function LatestNews({ filters = news.filters.map((f) => ({ label: f, category: f })), exclude }: Props) {
  const [filter, setFilter] = useState<NewsCategory | null>(null);
  const pool = news.items.filter((n) => !(exclude && ((exclude.href && n.href === exclude.href) || (exclude.title && n.title === exclude.title))));
  const items = filter ? pool.filter((n) => n.categories.includes(filter)) : pool;

  return (
    <section id="noticias" className="news" aria-labelledby="news-title">
      <div className="container">
        <h2 id="news-title" className="section-title news__title">
          {news.title}
        </h2>
        <div className="news__toolbar">
          <div className="news__filters" role="group" aria-label="Filtrar noticias">
            {filters.map(({ label, category }) => (
              <button
                key={label}
                type="button"
                className="news__chip"
                aria-pressed={category ? filter === category : false}
                aria-disabled={!category}
                onClick={() => category && setFilter((cur) => (cur === category ? null : category))}
              >
                {label}
              </button>
            ))}
          </div>
          <a href={news.allHref} className="news__chip news__all">
            <ArrowLabel size={12}>Ver todos</ArrowLabel>
          </a>
        </div>
      </div>

      {items.length > 0 ? (
        <ul className="news__track">
          {items.map((n) => (
            <NewsCard key={n.title} title={n.title} href={n.href} image={n.image} alt={n.alt} place={n.place} date={n.date} />
          ))}
        </ul>
      ) : (
        <div className="container">
          <p className="news__empty">No hay noticias publicadas en esta categoría.</p>
        </div>
      )}
    </section>
  );
}
