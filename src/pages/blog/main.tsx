import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { blogListing, blogPage } from '../../data/blog';
import { NewsListing } from '../noticias/NewsListing';
import '../../styles/tokens.css';
import '../../styles/global.css';

/** Blog: misma plantilla del listado de Noticias. */
function BlogPage() {
  const { hero } = blogPage;
  return (
    <SiteShell footerVariant="wide" hero={<PageHero image={hero.image} title={hero.title} shade="navy" />}>
      <NewsListing source={blogListing} />
    </SiteShell>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogPage />
  </StrictMode>,
);
