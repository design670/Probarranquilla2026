import { useState } from 'react';
import { board } from '../../data/sobre';
import './Board.css';

/** Consejo directivo: acordeón único; solo muestra miembros oficiales cargados en los datos. */
export function Board() {
  const [open, setOpen] = useState(false);

  return (
    <section id="consejo-directivo" className="board" aria-labelledby="board-title">
      <div className="container">
        <h2 id="board-title" className="board__title">
          {board.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="board__text">
          {board.text.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <div className={`board__accordion ${open ? 'is-open' : ''}`}>
          <h3 className="board__heading">
            <button
              type="button"
              id="board-trigger"
              className="board__trigger"
              aria-expanded={open}
              aria-controls="board-panel"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="board__dot" aria-hidden="true" />
              <span className="board__label">{board.accordionLabel}</span>
              <span className="board__icon" aria-hidden="true" />
            </button>
          </h3>
          <div id="board-panel" className="board__panel" role="region" aria-labelledby="board-trigger" hidden={!open}>
            {board.members.length > 0 ? (
              <ul className="board__members">
                {board.members.map((m) => (
                  <li key={m.name}>
                    <p className="board__member-name">{m.name}</p>
                    <p className="board__member-role">{[m.role, m.company].filter(Boolean).join(' · ')}</p>
                  </li>
                ))}
              </ul>
            ) : (
              import.meta.env.DEV && <p className="board__pending">Pendiente: miembros oficiales del consejo directivo (ver PENDIENTES.md).</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
