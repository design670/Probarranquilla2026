import { useEffect, useState, type MouseEvent } from 'react';
import { sectorIndex } from '../../data/sectores';
import { Chevron } from '../../components/Icons';
import './SectorIndex.css';

const allIds = [...new Set(sectorIndex.flatMap((g) => [g.id, ...g.links.map((l) => l.id)]))];

/**
 * Índice lateral: fijo (sticky) en escritorio; en móvil es un desplegable
 * (<details>) antes del contenido. Resalta la sección que se está leyendo.
 */
export function SectorIndex() {
  const desktopQuery = '(min-width: 901px)';
  const [open, setOpen] = useState(() => window.matchMedia(desktopQuery).matches);
  const [active, setActive] = useState<string | null>(null);

  // En escritorio el índice siempre está abierto
  useEffect(() => {
    const mq = window.matchMedia(desktopQuery);
    const sync = () => mq.matches && setOpen(true);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Sección activa: la última cuyo inicio ya pasó la parte superior de la pantalla
  useEffect(() => {
    const els = allIds.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    if (!window.matchMedia(desktopQuery).matches) setOpen(false);
  };

  return (
    <details
      className="sindex"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open || window.matchMedia(desktopQuery).matches)}
    >
      <summary className="sindex__summary">
        Ir a un sector
        <Chevron />
      </summary>
      <nav aria-label="Sectores de la página">
        {sectorIndex.map((g) => (
          <div key={g.label} className="sindex__group">
            <a href={`#${g.id}`} className={`sindex__heading ${active === g.id ? 'is-active' : ''}`} onClick={(e) => go(e, g.id)}>
              {g.label}
            </a>
            <ul className="sindex__links">
              {g.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={`#${l.id}`}
                    className={`sindex__link ${active === l.id ? 'is-active' : ''}`}
                    aria-current={active === l.id ? 'location' : undefined}
                    onClick={(e) => go(e, l.id)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </details>
  );
}
