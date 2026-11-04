import { useState } from 'react';
import { team, type TeamMember } from '../../data/sobre';
import { routes } from '../../data/content';
import { ArrowLabel } from '../../components/ArrowLabel';
import { PersonCard } from './PersonCard';
import './Team.css';

/** Quien encabeza cada área: Dirección Ejecutiva y gerentes. */
const isLead = (p: TeamMember) => /^(gerent|gerencia|dirección ejecutiva)/i.test(p.role);

/**
 * Equipo agrupado por áreas, con filtros (`null` = todo el equipo).
 * - `standalone`: en la página /equipo/ el título y la bajada ya están en el hero.
 * - `leadership`: en Sobre ProBarranquilla solo la gerencia (cargo = área) y un enlace al equipo completo.
 */
export function Team({ standalone = false, leadership = false }: { standalone?: boolean; leadership?: boolean }) {
  const [area, setArea] = useState<string | null>(null);
  const filters = [{ id: null, label: team.allLabel }, ...team.areas.map((a) => ({ id: a.id, label: a.filter }))];
  const visible = area ? team.areas.filter((a) => a.id === area) : team.areas;
  // "Gerente" a secas no dice de qué área: en la vista de gerencia el cargo es el área
  const leads = team.areas.flatMap((a) => a.people.filter(isLead).map((p) => ({ ...p, role: a.title })));

  return (
    <section id="equipo" className={`team${standalone ? ' team--page' : ''}`} aria-labelledby="team-title">
      <div className="container">
        <h2 id="team-title" className={standalone ? 'visually-hidden' : 'section-title team__title'}>
          {team.title.map((l) => (
            <span key={l}>{l} </span>
          ))}
        </h2>
        {!standalone && (
          <p className="team__intro">
            {team.intro.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
        )}

        {leadership ? (
          <>
            <ul className="team__leads">
              {leads.map((p) => (
                <PersonCard key={p.id} person={p} />
              ))}
            </ul>
            <div className="team__more">
              <a href={routes.equipo} className="team__more-btn">
                <ArrowLabel size={13}>Conoce a todo el equipo</ArrowLabel>
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="team__filters" role="group" aria-label="Filtrar el equipo por área">
              {[filters.slice(0, 4), filters.slice(4)].map((row, r) => (
                // Dos filas de 4 en desktop; en pantallas menores fluyen juntas
                <div key={r} className="team__filters-row">
                  {row.map((f) => (
                    <button
                      key={f.label}
                      type="button"
                      className="team__filter"
                      aria-pressed={area === f.id}
                      aria-controls="team-groups"
                      onClick={() => setArea(f.id)}
                    >
                      <ArrowLabel size={13} gap={9}>
                        {f.label}
                      </ArrowLabel>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div id="team-groups" className="team__groups" aria-live="polite">
              {visible.map((a) => (
                <section key={a.id} className="team-group" aria-labelledby={`team-${a.id}`}>
                  <h3 id={`team-${a.id}`} className="team-group__title">
                    {a.title}
                  </h3>
                  <p className="team-group__description">{a.description}</p>
                  <ul className="team-group__grid">
                    {a.people.map((p) => (
                      <PersonCard key={p.id} person={p} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
