import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AboutPage } from './AboutPage';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
