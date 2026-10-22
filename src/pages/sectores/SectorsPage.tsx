import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { sectorsHero, sectorsIntro } from '../../data/sectores';
import { SectorIndex } from './SectorIndex';
import { SectorBlocks } from './SectorBlocks';
import './SectorsPage.css';

/** "Principales sectores de inversión" */
export function SectorsPage() {
  return (
    <SiteShell hero={<PageHero image={sectorsHero.image} title={sectorsHero.title} description={sectorsHero.description} className="page-hero--sectors" />}>
      <div className="sectors">
        <section className="container sectors__intro" aria-labelledby="sectors-intro-title">
          <h2 id="sectors-intro-title" className="section-title sectors__intro-title">
            {sectorsIntro.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className="sectors__intro-text">
            {sectorsIntro.text.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
        </section>

        {/* Índice fijo a la izquierda (se detiene al final de esta grilla) + contenido */}
        <div className="container sectors__layout">
          <aside className="sectors__aside">
            <SectorIndex />
          </aside>
          <SectorBlocks />
        </div>
      </div>
    </SiteShell>
  );
}
