import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EventPage } from './EventPage';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventPage />
  </StrictMode>,
);
