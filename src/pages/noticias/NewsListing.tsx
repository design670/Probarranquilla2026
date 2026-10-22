import { useEffect, useState } from 'react';
import { loadNews, newsPage, newsYears, type NewsListItem, type NewsCategory } from '../../data/noticias';
import { NewsCard } from '../../components/NewsCard';
import { ArrowLabel } from '../../components/ArrowLabel';
import { YearFilter } from './YearFilter';
import '../../components/NewsCard.css';
import './NewsListing.css';

export function NewsListing() {
  const [filter, setFilter] = useState<NewsCategory | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [items, setItems] = useState<NewsListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Primer grupo de cada filtro
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setStatus('');
    loadNews({ category: filter, year, offset: 0, limit: newsPage.pageSize }).then((res) => {
      if (!alive) return;
      setItems(res.items);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [filter, year]);

  const exhausted = status !== '';

  // Pide el siguiente grupo a la fuente; si no hay más, lo anuncia y oculta el botón
  const loadMore = async () => {
    setLoading(true);
    const res = await loadNews({ category: filter, year, offset: items.length, limit: newsPage.pageSize });
    if (res.items.length === 0) {
      setStatus('No hay más noticias por ahora.');
    } else {
      // Evita duplicados si la fuente devuelve elementos ya cargados
      setItems((prev) => [...prev, ...res.items.filter((n) => !prev.some((p) => p.id === n.id))]);
    }
    setLoading(false);
  };

  return (
    <section className="news-list" aria-label="Noticias">
      <div className="container">
        <div className="news-list__toolbar">
        <div className="news-list__filters" role="group" aria-label="Filtrar noticias por categoría">
          {newsPage.filters.map((f) => (
            <button
              key={f}
              type="button"
              className="news__chip"
              aria-pressed={filter === f}
              onClick={() => setFilter((cur) => (cur === f ? null : f))}
            >
              <ArrowLabel size={12} direction="down">
                {f}
              </ArrowLabel>
            </button>
          ))}
        </div>

        {/* Filtro por año, a la derecha; se combina con la categoría */}
        <YearFilter years={newsYears} value={year} onChange={setYear} />
        </div>

        <div aria-live="polite" aria-busy={loading}>
          {items.length > 0 ? (
            <ul className="news-list__grid">
              {items.map((n, i) => (
                <NewsCard
                  key={n.id}
                  variant="grid"
                  title={n.title}
                  href={n.href}
                  image={n.image}
                  alt={n.alt}
                  position={n.position}
                  place={n.place}
                  date={n.date}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              ))}
            </ul>
          ) : (
            !loading && <p className="news-list__empty">No hay noticias publicadas con estos filtros.</p>
          )}
        </div>

        {items.length > 0 && (
          <div className="news-list__more">
            {!exhausted && (
              <button type="button" className="news-list__more-btn" onClick={loadMore} disabled={loading} aria-busy={loading}>
                <ArrowLabel size={13}>{loading ? 'Cargando…' : newsPage.loadMoreLabel}</ArrowLabel>
              </button>
            )}
            <p className="news-list__status" role="status">
              {status}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
