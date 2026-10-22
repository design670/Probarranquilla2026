import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { ImpactStatistics } from '../../components/ImpactStatistics';
import { SuccessStories } from '../../components/SuccessStories';
import { instalateAssets, instalateHero, instalateImpactIntro, instalateImpactTitle } from '../../data/instalate';
import { Connectivity } from './Connectivity';
import { Infrastructure } from './Infrastructure';
import { FreeZonesOffer } from './FreeZones';
import { Talent } from './Talent';
import { Training, VisionBanner } from './Training';

export function InstalatePage() {
  return (
    <SiteShell
      hero={
        <PageHero
          image={instalateAssets.hero}
          title={instalateHero.title}
          primary={instalateHero.primary}
          secondary={instalateHero.secondary}
        />
      }
    >
      <ImpactStatistics id="resultados" title={instalateImpactTitle} intro={instalateImpactIntro} />
      <Connectivity />
      <Infrastructure />
      <FreeZonesOffer />
      <Talent />
      <Training />
      <VisionBanner />
      <SuccessStories className="cases--compact" />
    </SiteShell>
  );
}
