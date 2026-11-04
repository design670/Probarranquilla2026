import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { Team } from '../sobre/Team';
import { teamHero } from '../../data/sobre';
import '../../styles/tokens.css';
import '../../styles/global.css';

/** Página "Equipo": hero propio + el equipo por áreas (el mismo bloque de Sobre ProBarranquilla). */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteShell hero={<PageHero image={teamHero.image} title={teamHero.title} description={teamHero.description} shade="navy" />}>
      <Team standalone />
    </SiteShell>
  </StrictMode>,
);
