import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArticlePage } from './ArticlePage';
import '../../styles/tokens.css';
import '../../styles/global.css';

// /noticias/<slug>/ → <slug>
const slug = window.location.pathname.split('/').filter(Boolean)[1] ?? '';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArticlePage slug={slug} />
  </StrictMode>,
);
