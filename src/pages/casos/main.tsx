import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SiteShell } from '../../components/SiteShell';
import { CaseShowcase } from './CaseShowcase';
import '../../styles/tokens.css';
import '../../styles/global.css';

// La página es solo el caso: va en la zona del hero (bajo la navegación flotante) y termina en el footer
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteShell hero={<CaseShowcase />} footerVariant="wide">
      {null}
    </SiteShell>
  </StrictMode>,
);
