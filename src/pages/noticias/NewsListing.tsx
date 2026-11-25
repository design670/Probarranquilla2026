import { useEffect, useState } from 'react';
import { loadNews, newsPage, newsYears, type NewsCategory } from '../../data/noticias';
import { NewsCard } from '../../components/NewsCard';
import { ArrowLabel } from '../../components/ArrowLabel';
import { YearFilter } from './YearFilter';
import '../../components/NewsCard.css';
import './NewsListing.css';

/** Lo que necesita cada tarjeta del listado (noticias o entradas del blog). */
export type ListingItem = { id: string; title: string; href: string; image: string; alt: string; position?: string; place: string; date: string };

/** Fuente de un listado: filtros, textos y la función que entrega cada grupo de tarjetas. */
export type ListingSource = {
  /** Nombre del listado para lectores de pantalla */
  label: string;
  filters: string[];
  years: string[];
  pageSize: number;
  loadMoreLabel: string;
  /** Aviso cuando todavía no hay ninguna publicación */
  emptyText: string;
  /** Aviso cuando los filtros no dejan resultados */
  filteredEmptyText: string;
  endText: string;
  load: (q: { category: string | null; year: string | null; offset: number; limit: number }) => Promise<{ items: ListingItem[] }>;
};

/** Noticias: la fuente por defecto del listado. */
const newsSource: ListingSource = {
  label: 'Noticias',
  filters: newsPage.filters,
  years: newsYears,
  pageSize: newsPage.pageSize,
  loadMoreLabel: newsPage.loadMoreLabel,
  emptyText: 'No hay noticias publicadas.',
  filteredEmptyText: 'No hay noticias publicadas con estos filtros.',
  endText: 'No hay más noticias por ahora.',
  load: ({ category, year, offset, limit }) => loadNews({ category: category as NewsCategory | null, year, offset, limit }),
};

/** Listado con filtros por categoría y año, grilla de tarjetas y "Ver más" (Noticias y Blog). */
export function NewsListing({ source = newsSource }: { source?: ListingSource }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [items, setItems] = useState<ListingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const hasToolbar = source.filters.length > 0 || source.years.length > 0;

  // Primer grupo de cada filtro
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setStatus('');
    source.load({ category: filter, year, offset: 0, limit: source.pageSize }).then((res) => {
      if (!alive) return;
      setItems(res.items);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [filter, year, source]);

  const exhausted = status !== '';

  // Pide el siguiente grupo a la fuente; si no hay más, lo anuncia y oculta el botón
  const loadMore = async () => {
    setLoading(true);
    const res = await source.load({ category: filter, year, offset: items.length, limit: source.pageSize });
    if (res.items.length === 0) {
      setStatus(source.endText);
    } else {
      // Evita duplicados si la fuente devuelve elementos ya cargados
      setItems((prev) => [...prev, ...res.items.filter((n) => !prev.some((p) => p.id === n.id))]);
    }
    setLoading(false);
  };

  return (
    <section className="news-list" aria-label={source.label}>
      <div className="container">
        {hasToolbar && (
          <div className="news-list__toolbar">
            <div className="news-list__filters" role="group" aria-label={`Filtrar ${source.label.toLowerCase()} por categoría`}>
              {source.filters.map((f) => (
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
            <YearFilter years={source.years} value={year} onChange={setYear} />
          </div>
        )}

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
            !loading && <p className="news-list__empty">{filter || year ? source.filteredEmptyText : source.emptyText}</p>
          )}
        </div>

        {items.length > 0 && (
          <div className="news-list__more">
            {!exhausted && (
              <button type="button" className="news-list__more-btn" onClick={loadMore} disabled={loading} aria-busy={loading}>
                <ArrowLabel size={13}>{loading ? 'Cargando…' : source.loadMoreLabel}</ArrowLabel>
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
