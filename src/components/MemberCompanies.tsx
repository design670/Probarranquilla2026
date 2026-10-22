import type { CSSProperties } from 'react';
import { members } from '../data/content';
import { SmartImage } from './SmartImage';
import './MemberCompanies.css';

/**
 * Franjas de logos con desplazamiento horizontal infinito. Cada franja pinta
 * su lista dos veces y se mueve exactamente la mitad de su ancho, así el
 * reinicio no se nota. La copia se oculta a lectores de pantalla.
 */
export function MemberCompanies() {
  return (
    <section id="comunidad-de-miembros" className="members" aria-labelledby="members-title">
      <div className="container">
        <h2 id="members-title" className="section-title members__title">
          {members.title}
        </h2>
      </div>
      <div className="members__rows">
        {members.rows.map((row, r) => (
          <div
            key={r}
            className={`members__marquee ${row.reverse ? 'members__marquee--reverse' : ''}`}
            // Duración proporcional a la cantidad de logos: misma velocidad en todas las franjas
            style={{ '--duration': `${row.logos.length * 3.2}s` } as CSSProperties}
          >
            <div className="members__track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="members__row" aria-hidden={copy === 1 || undefined}>
                  {row.logos.map((l) => (
                    <li key={l.src} className="members__slot" style={{ '--w': l.width } as CSSProperties}>
                      <SmartImage src={l.src} alt={copy === 1 ? '' : l.name} kind="logo" width={l.width} height={l.height} className="members__logo" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
