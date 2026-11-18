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
import { homeNews } from './data/home';

export default function App() {
  return (
    <SiteShell hero={<HeroCarousel />}>
      <InvestmentReasons />
      <ImpactStatistics id="resultados" intro={impact.intro} ariaLabel="Impacto y resultados de ProBarranquilla" className="impact--home" />
      {/* En el home van sin los botones de categoría */}
      <LatestNews filters={[]} items={homeNews} />
      <SuccessStories />
      <AssistanceSection />
      <Partners />
      <MemberCompanies />
    </SiteShell>
  );
}
