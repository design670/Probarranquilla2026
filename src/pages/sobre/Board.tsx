import { useState } from 'react';
import { board, type BoardMember } from '../../data/sobre';
import { SmartImage } from '../../components/SmartImage';
import './Board.css';

/** Tarjeta de consejero: retrato con la empresa en un círculo, nombre y cargo */
function BoardCard({ member }: { member: BoardMember }) {
  return (
    <li className="board-card">
      <div className="board-card__media">
        <SmartImage {...member.photo} className="board-card__photo" />
        <span className="board-card__company">
          {member.logo ? <img src={member.logo} alt={member.company} loading="lazy" /> : member.company}
        </span>
      </div>
      <p className="board-card__name">{member.name}</p>
      <p className="board-card__role">{member.role}</p>
    </li>
  );
}

/** Consejo directivo: acordeón único con los miembros de probarranquilla.org/nosotros. */
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
            <ul className="board__members">
              {board.members.map((m) => (
                <BoardCard key={m.name} member={m} />
              ))}
            </ul>
            <h4 className="board__group">{board.honoraryLabel}</h4>
            <ul className="board__members">
              {board.honorary.map((m) => (
                <BoardCard key={m.name} member={m} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
