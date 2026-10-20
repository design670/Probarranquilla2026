import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InstalatePage } from './InstalatePage';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstalatePage />
  </StrictMode>,
);
