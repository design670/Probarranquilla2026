import { SiteShell } from './components/SiteShell';
import { HeroCarousel } from './components/HeroCarousel';
import { InvestmentReasons } from './components/InvestmentReasons';
import { ImpactStatistics } from './components/ImpactStatistics';
import { SuccessStories } from './components/SuccessStories';
import { LatestNews } from './components/LatestNews';
import { AssistanceSection } from './components/AssistanceSection';
import { Partners } from './components/Partners';
import { MemberCompanies } from './components/MemberCompanies';
import { impact } from './data/content';

export default function App() {
  return (
    <SiteShell hero={<HeroCarousel />}>
      <InvestmentReasons />
      <ImpactStatistics id="resultados" title={impact.title} intro={impact.intro} />
      <SuccessStories />
      <LatestNews />
      <AssistanceSection />
      <Partners />
      <MemberCompanies />
    </SiteShell>
  );
}
