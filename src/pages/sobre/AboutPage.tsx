import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { Partners } from '../../components/Partners';
import { MemberCompanies } from '../../components/MemberCompanies';
import { aboutHero } from '../../data/sobre';
import { AboutIntro } from './AboutIntro';
import { WhatWeDo } from './WhatWeDo';
import { InvestmentStages } from './InvestmentStages';
import { History } from './History';
import { Team } from './Team';
import { Board } from './Board';
import './AboutPage.css';

export function AboutPage() {
  return (
    <SiteShell
      hero={
        <PageHero
          image={aboutHero.image}
          title={aboutHero.title}
          description={aboutHero.description}
          className="page-hero--about"
        />
      }
    >
      <AboutIntro />
      <WhatWeDo />
      <InvestmentStages />
      <History />
      <Team />
      <Board />
      <div className="about-tail">
        <Partners />
        <MemberCompanies />
      </div>
    </SiteShell>
  );
}
