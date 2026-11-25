import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { ImpactStatistics } from '../../components/ImpactStatistics';
import { SuccessStories } from '../../components/SuccessStories';
import { instalateAssets, instalateHero, instalateImpactIntro, instalateImpactTitle, instalateResults, instalateCases, instalateSupport } from '../../data/instalate';
import { Connectivity } from './Connectivity';
import { Infrastructure } from './Infrastructure';
import { FreeZonesOffer } from './FreeZones';
import { Talent } from './Talent';
import { Training, VisionBanner } from './Training';
// Mismo bloque de contacto y formulario de «Haz tu evento»
import { EventContact } from '../evento/EventContact';
// Mismo diseño de «¿Cómo te apoyamos?» de «Haz tu evento», con las etapas de inversión
import { SupportStages } from '../evento/SupportStages';

export function InstalatePage() {
  return (
    <SiteShell
      hero={
        <PageHero image={instalateAssets.hero} title={instalateHero.title} />
      }
    >
      <ImpactStatistics id="resultados" title={instalateImpactTitle} intro={instalateImpactIntro} results={instalateResults} part="main" />
      <SupportStages data={instalateSupport} id="etapas-de-inversion" />
      {/* «Una propuesta de valor respaldada por resultados», después de las etapas */}
      <ImpactStatistics intro="" results={instalateResults} part="more" />
      <Connectivity />
      <Infrastructure />
      <FreeZonesOffer />
      <Talent />
      <Training />
      <VisionBanner />
      <SuccessStories className="cases--compact" data={instalateCases} />
      <EventContact showTeam={false} title={['Tu empresa tiene un lugar en Barranquilla']} labels={{ organization: 'Nombre de la empresa', eventType: 'Sector', attendees: 'Página web de la empresa', details: 'Detalles o requerimientos' }} textFields={['eventType', 'attendees']} />
    </SiteShell>
  );
}
