import { useState, type CSSProperties, type FocusEvent } from 'react';
import type { TeamMember } from '../../data/sobre';
import { SmartImage } from '../../components/SmartImage';
import './PersonCard.css';

/**
 * Card de integrante. En reposo: retrato, nombre y cargo. Con hover, foco de
 * teclado o toque, una capa de color sólido muestra nombre, cargo y descripción.
 * La capa siempre ocupa espacio en el layout (misma celda de grid que el
 * frente), así que la card ya mide lo que necesita el texto completo y el
 * cambio de estado no mueve nada.
 */
export function PersonCard({ person }: { person: TeamMember }) {
  // `open`: activada por clic/toque/Enter; `keyboardFocus`: foco visible de teclado
  const [open, setOpen] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const expanded = open || keyboardFocus;
  const bioId = `person-bio-${person.id}`;

  const style = {
    '--hover-bg': person.hoverBackground,
    '--hover-name': person.nameColor,
    '--hover-body': person.bodyColor,
  } as CSSProperties;

  const onFocus = (e: FocusEvent<HTMLButtonElement>) => setKeyboardFocus(e.currentTarget.matches(':focus-visible'));

  return (
    <li className={`person ${expanded ? 'is-open' : ''}`} style={style} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="person__front"
        aria-expanded={expanded}
        aria-controls={bioId}
        onClick={() => setOpen((o) => !o)}
        onFocus={onFocus}
        onBlur={() => {
          setKeyboardFocus(false);
          setOpen(false);
        }}
      >
        {/* El nombre visible ya identifica el retrato: la imagen no se anuncia aparte */}
        <span className="person__photo-wrap" aria-hidden="true">
          <SmartImage {...person.image} alt="" className="person__photo" />
        </span>
        <span className="person__name">{person.name}</span>
        <span className="person__role">{person.role}</span>
      </button>

      <div id={bioId} className="person__bio">
        {/* Nombre y cargo ya los lee el botón: aquí solo son visuales */}
        <div className="person__bio-head" aria-hidden="true">
          <p className="person__bio-name">{person.name}</p>
          <p className="person__bio-role">{person.role}</p>
        </div>
        <p className="person__bio-text">{person.description}</p>
      </div>
    </li>
  );
}
