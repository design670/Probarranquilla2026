import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SectorsPage } from './SectorsPage';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SectorsPage />
  </StrictMode>,
);
