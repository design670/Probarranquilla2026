import { useEffect, type ReactNode } from 'react';
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
  // Enlaces del menú a una sección de otra página (p. ej. /sobre-probarranquilla/#equipo):
  // React pinta la página después de cargar, así que se baja a la sección al montarla.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const go = () => document.getElementById(id)?.scrollIntoView({ block: 'start' });
    const raf = requestAnimationFrame(go);
    // Segundo ajuste: las fotos que cargan después pueden mover la sección
    const late = window.setTimeout(go, 700);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(late);
    };
  }, []);

  return (
    <>
      <header className="site-header">
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
