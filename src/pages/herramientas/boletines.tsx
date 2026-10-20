import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ResourcePage } from '../../components/ResourcePage';
import { bulletinsPage } from '../../data/boletines';
import '../../styles/tokens.css';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResourcePage content={bulletinsPage} />
  </StrictMode>,
);
