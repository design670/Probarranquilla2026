import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { newsPage } from '../../data/noticias';
import { NewsListing } from './NewsListing';
import '../../styles/tokens.css';
import '../../styles/global.css';

function NoticiasPage() {
  const { hero } = newsPage;
  return (
    <SiteShell
      footerVariant="wide"
      hero={<PageHero image={hero.image} title={hero.title} description={hero.description} shade="navy" />}
    >
      <NewsListing />
    </SiteShell>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NoticiasPage />
  </StrictMode>,
);
