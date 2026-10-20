import type { ReactNode } from 'react';
import { UtilityBar } from './UtilityBar';
import { MainNavigation } from './MainNavigation';
import { Footer } from './Footer';
import { HablemosTab } from './HablemosTab';
import { DownloadGate } from './DownloadGate';

/**
 * Estructura común de todas las páginas. `hero` se pinta debajo de la
 * navegación principal, que flota sobre él. El botón flotante de contacto
 * ("Hablemos") es el mismo en todo el sitio.
 */
export function SiteShell({
  hero,
  children,
  footerVariant = 'default',
}: {
  hero: ReactNode;
  children: ReactNode;
  footerVariant?: 'default' | 'wide';
}) {
  return (
    <>
      <header>
        <UtilityBar />
      </header>
      <main>
        <div className="hero-wrap" style={{ position: 'relative' }}>
          <MainNavigation />
          {hero}
        </div>
        {children}
      </main>
      <Footer variant={footerVariant} />
      <HablemosTab />
      {/* Formulario que se pide antes de cualquier descarga del sitio */}
      <DownloadGate />
    </>
  );
}
