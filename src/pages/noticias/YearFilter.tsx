import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Chevron } from '../../components/Icons';

type Props = { years: string[]; value: string | null; onChange: (year: string | null) => void };

const ALL = 'Todos los años';

/**
 * Filtro por año con el estilo de los chips del sitio: botón + lista propia
 * (en lugar del desplegable gris del navegador). Accesible con teclado:
 * flechas, Inicio/Fin, Enter/Espacio para elegir y Escape para cerrar.
 */
export function YearFilter({ years, value, onChange }: Props) {
  const options: (string | null)[] = [null, ...years];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const id = useId();

  // Clic o toque fuera cierra la lista
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  const openList = () => {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
    requestAnimationFrame(() => list.current?.focus());
  };

  const choose = (i: number) => {
    onChange(options[i]);
    setOpen(false);
    button.current?.focus();
  };

  const onListKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const last = options.length - 1;
    const keys: Record<string, () => void> = {
      ArrowDown: () => setActive((a) => Math.min(last, a + 1)),
      ArrowUp: () => setActive((a) => Math.max(0, a - 1)),
      Home: () => setActive(0),
      End: () => setActive(last),
      Enter: () => choose(active),
      ' ': () => choose(active),
      Escape: () => {
        setOpen(false);
        button.current?.focus();
      },
      Tab: () => setOpen(false),
    };
    const fn = keys[e.key];
    if (!fn) return;
    if (e.key !== 'Tab') e.preventDefault();
    fn();
  };

  const label = value ?? ALL;

  return (
    <div ref={root} className={`year-filter${open ? ' is-open' : ''}`}>
      <button
        ref={button}
        type="button"
        className={`news__chip year-filter__btn${value ? ' is-active' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={`Filtrar por año: ${label}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            openList();
          }
        }}
      >
        {label}
        <Chevron className="year-filter__chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul
          ref={list}
          id={`${id}-list`}
          className="year-filter__list"
          role="listbox"
          tabIndex={-1}
          aria-label="Año de publicación"
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKey}
        >
          {options.map((y, i) => (
            <li
              key={y ?? 'all'}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={y === value}
              className={`year-filter__option${i === active ? ' is-active' : ''}${y === value ? ' is-selected' : ''}`}
              onPointerEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              {y ?? ALL}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
