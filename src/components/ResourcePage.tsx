import { useState } from 'react';
import { SiteShell } from './SiteShell';
import { ArrowLabel } from './ArrowLabel';
import { PageHero } from './PageHero';
import { ResourceCard, type Resource } from './ResourceCard';
import type { ImageAsset } from './SmartImage';
import './NewsCard.css'; // chips de filtro, los mismos de Noticias
import './ResourcePage.css';

export type ResourcePageContent = {
  /** Todo el texto va dentro del hero, como en Boletines. */
  hero: {
    image: ImageAsset;
    title: string[];
    /** Bajada en el tamaño de Boletines (una o dos líneas). */
    description?: string[];
    /** Párrafo más largo bajo la bajada. */
    text?: string;
    /** Botón a una herramienta externa (simulador, ProData). */
    cta?: { label: string; href: string };
  };
  /** Nombre del listado para lectores de pantalla. */
  listLabel: string;
  items: Resource[];
  /**
   * `library` = grilla completa alineada a la izquierda (Boletines).
   * `featured` = pocas cards centradas y más cerca del hero (Guia-del-inversionista.png).
   */
  layout?: 'library' | 'featured';
  /**
   * Listado en bloques con título visible (Informes de labores / Estados financieros).
   * Si existe, reemplaza a `items`.
   */
  groups?: { id: string; title: string; items: Resource[] }[];
  /** Portadas 5:4 recortadas a toda la card (las de "Nuestra gestión" no son 800×440). */
  covers?: 'contain' | 'fill';
  /** Barra de filtro por categoría (usa `category` de cada item). */
  filters?: { label: string; categories: string[] };
};

/**
 * Plantilla de las páginas de Herramientas (Boletines, Guías, Simulador, ProData):
 * hero con título, descripción y botón opcional + fondo gris con las cards.
 */
export function ResourcePage({ content }: { content: ResourcePageContent }) {
  const { hero, listLabel, items, layout = 'library', groups, covers = 'contain', filters } = content;
  const [category, setCategory] = useState<string | null>(null);
  const shown = category ? items.filter((item) => item.category === category) : items;
  const sectionClass = `resources resources--${layout}${covers === 'fill' ? ' resources--fill' : ''}${filters ? ' resources--filtered' : ''}`;
  const rich = Boolean(hero.text || hero.cta);

  const extra = rich ? (
    <>
      {hero.text && <p className="resource-hero__text">{hero.text}</p>}
      {hero.cta && (
        <a className="resource-hero__cta" href={hero.cta.href} target="_blank" rel="noopener noreferrer">
          {hero.cta.label}
          <svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
            <path d="M1.5 6h8.5M6.8 2.6 10.2 6 6.8 9.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
        </a>
      )}
    </>
  ) : undefined;

  return (
    <SiteShell
      hero={
        <PageHero
          image={hero.image}
          title={hero.title}
          description={hero.description}
          shade="navy"
          className={`page-hero--resource${rich ? ' page-hero--resource-rich' : ''}`}
          extra={extra}
        />
      }
      footerVariant="wide"
    >
      {groups ? (
        <section className={`${sectionClass} resources--grouped`} aria-label={listLabel}>
          {groups.map((group, g) => (
            <div key={group.id} className="container resources__group">
              <h2 id={`resources-${group.id}`} className="resources__group-title">
                {group.title}
              </h2>
              <ul className="resources__grid" aria-labelledby={`resources-${group.id}`}>
                {group.items.map((item, i) => (
                  <li key={item.id}>
                    <ResourceCard resource={item} eager={g === 0 && i < 3} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : items.length > 0 && (
        <section className={sectionClass} aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="visually-hidden">
            {listLabel}
          </h2>
          {filters && (
            <div className="container resources__toolbar">
              <div className="resources__filters" role="group" aria-label={filters.label}>
                {filters.categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="news__chip"
                    aria-pressed={category === c}
                    onClick={() => setCategory((cur) => (cur === c ? null : c))}
                  >
                    <ArrowLabel size={12} direction="down">
                      {c}
                    </ArrowLabel>
                  </button>
                ))}
              </div>
              <p className="visually-hidden" role="status">
                {category ? `${shown.length} resultados en ${category}` : `${items.length} resultados`}
              </p>
            </div>
          )}
          <ul className="container resources__grid">
            {shown.map((item, i) => (
              <li key={item.id}>
                {/* Solo la primera fila carga de inmediato */}
                <ResourceCard resource={item} eager={i < 3} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </SiteShell>
  );
}
