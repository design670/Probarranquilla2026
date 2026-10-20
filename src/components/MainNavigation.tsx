import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { brand, mainNav, type MegaColumn, type MegaPanel, type Link } from '../data/content';
import { SmartImage } from './SmartImage';
import { Chevron, CloseIcon, MenuIcon } from './Icons';
import { ArrowLabel } from './ArrowLabel';
import './MainNavigation.css';

const CLOSE_DELAY = 180;
/** Mismo punto de corte que el CSS: por encima, navegación horizontal con hover. */
const DESKTOP_QUERY = '(min-width: 1001px)';

const UserIcon = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="8" cy="5.5" r="2.8" />
    <path d="M2.8 14c.6-2.7 2.7-4.2 5.2-4.2s4.6 1.5 5.2 4.2" />
  </svg>
);

/** Enlace con la flecha que pasa del final al inicio en hover/foco. */
function MegaLink({ link }: { link: Link }) {
  return (
    <a href={link.href} className="mega-link">
      <ArrowLabel size={14}>{link.label}</ArrowLabel>
    </a>
  );
}

function Column({ col }: { col: MegaColumn }) {
  return (
    <div className="mega__col">
      {(col.heading || col.accent || col.description) && (
        <div className="mega__col-head">
          {col.accent && <p className="mega__accent">{col.accent}</p>}
          {col.description && (
            <p className="mega__description">
              {col.description.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          )}
          {col.heading && (
            <p className="mega__heading">
              {col.heading.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          )}
        </div>
      )}
      <div className="mega__col-body">
        <ul className="mega__links">
          {col.links.map((l) => (
            <li key={l.label}>
              <MegaLink link={l} />
            </li>
          ))}
        </ul>
        {col.cta && (
          <a href={col.cta.href} className="mega__cta">
            <UserIcon />
            <ArrowLabel size={14}>{col.cta.label}</ArrowLabel>
          </a>
        )}
      </div>
    </div>
  );
}

function Panel({ panel, open }: { panel: MegaPanel; open: boolean }) {
  return (
    <div
      id={`mega-${panel.id}`}
      className={`mega mega--${panel.layout}`}
      hidden={!open}
      style={panel.linksOffset ? ({ '--links-offset': `${panel.linksOffset}px` } as CSSProperties) : undefined}
    >
      <div className="mega__grid">
        <p className="mega__title">
          {panel.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        {panel.columns.map((c, i) => (
          <Column key={i} col={c} />
        ))}
      </div>
    </div>
  );
}

export function MainNavigation() {
  // Solo en desarrollo: ?mega=<id> abre un panel para revisiones visuales
  const [openId, setOpenId] = useState<string | null>(() =>
    import.meta.env.DEV ? new URLSearchParams(window.location.search).get('mega') : null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number>();
  const hoverOpenedAt = useRef(0);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

  const cancelClose = () => window.clearTimeout(closeTimer.current);

  const close = useCallback((returnFocus = false) => {
    window.clearTimeout(closeTimer.current);
    setOpenId((current) => {
      if (returnFocus && current) triggerRefs.current[current]?.focus();
      return null;
    });
  }, []);

  // Escape y clic/toque fuera del header cierran el panel
  useEffect(() => {
    if (!openId && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openId) close(true);
      else setMobileOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        close();
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [openId, mobileOpen, close]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Menú fijo: al llegar al borde superior de la ventana se queda pegado arriba.
  // La barra ya está fuera del flujo (absolute), así que el cambio no mueve la página.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = navRef.current?.parentElement;
      if (!anchor) return;
      setFixed(anchor.getBoundingClientRect().top <= 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isMouse = (e: ReactPointerEvent) => e.pointerType === 'mouse' && isDesktop();

  const onTriggerEnter = (id: string) => (e: ReactPointerEvent) => {
    if (!isMouse(e)) return;
    cancelClose();
    if (openId !== id) hoverOpenedAt.current = Date.now();
    setOpenId(id);
  };

  const onTriggerClick = (id: string) => () => {
    // Un clic justo después de abrir por hover no debe cerrarlo
    if (openId === id && Date.now() - hoverOpenedAt.current < 400) return;
    setOpenId((cur) => (cur === id ? null : id));
  };

  const onNavLeave = (e: ReactPointerEvent) => {
    if (!isMouse(e) || !openId) return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };

  return (
    <nav ref={navRef} className={`main-nav${fixed ? ' is-fixed' : ''}`} aria-label="Principal" onPointerEnter={cancelClose} onPointerLeave={onNavLeave}>
      <div className={`main-nav__bar ${openId ? 'has-open' : ''}`}>
        <a href="/" className="main-nav__logo" aria-label={`${brand.name}, inicio`}>
          <SmartImage src={brand.logoWhite} alt={brand.name} kind="logo" width={78} height={38} loading="eager" className="on-dark" />
        </a>
        <button
          type="button"
          className="main-nav__toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav-list"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul id="main-nav-list" className={`main-nav__list ${mobileOpen ? 'is-open' : ''}`}>
          {mainNav.map((panel) => {
            const open = openId === panel.id;
            return (
              <li key={panel.id} className="main-nav__item">
                <button
                  ref={(el) => {
                    triggerRefs.current[panel.id] = el;
                  }}
                  type="button"
                  className="main-nav__trigger"
                  aria-expanded={open}
                  aria-controls={`mega-${panel.id}`}
                  onPointerEnter={onTriggerEnter(panel.id)}
                  onClick={onTriggerClick(panel.id)}
                >
                  {panel.label}
                  <Chevron className="main-nav__chevron" />
                </button>
                <Panel panel={panel} open={open} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
