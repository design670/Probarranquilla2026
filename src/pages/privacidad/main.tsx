import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrivacyPage } from './PrivacyPage';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
);
