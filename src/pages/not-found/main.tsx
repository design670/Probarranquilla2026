import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from '../../components/SiteShell';
import { NotFoundHero } from '../../components/NotFound';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteShell hero={<NotFoundHero />} footerVariant="wide">
      {null}
    </SiteShell>
  </StrictMode>,
);
