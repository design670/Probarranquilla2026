import { connectivity } from '../../data/evento';
import { SmartImage } from '../../components/SmartImage';
import './AirConnectivity.css';

const Globe = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <circle cx="8" cy="8" r="6.3" />
    <path d="M1.7 8h12.6M8 1.7c2 2 2 10.6 0 12.6M8 1.7c-2 2-2 10.6 0 12.6" />
  </svg>
);

/** Ventajas del destino: tabla de rutas y frecuencias + mapa de rutas. */
export function AirConnectivity() {
  const c = connectivity;
  return (
    <section className="air" aria-labelledby="air-title">
      <div className="container">
        <h2 id="air-title" className="air__title">
          {c.title}
        </h2>
        <p className="air__subtitle">{c.subtitle}</p>

        <div className="air__card">
          <div className="air__info">
            <h3 className="air__card-title">{c.cardTitle}</h3>
            <p className="air__intro">{c.intro}</p>

            <div className="air__table-wrap">
              <p id="air-table-title" className="air__caption">
                <Globe /> {c.tableTitle}
              </p>
              <table className="air__table" aria-labelledby="air-table-title">
                <thead>
                  <tr>
                    <th scope="col">{c.columns[0]}</th>
                    <th scope="col">{c.columns[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.routes.map((r) => (
                    <tr key={r.city}>
                      <th scope="row">
                        <span className="air__swatch" style={{ background: r.color }} aria-hidden="true" />
                        <strong>{r.city}</strong> <span className="air__duration">({r.duration})</span>
                      </th>
                      <td>
                        <span className="air__pill">{r.weekly}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">{c.totalLabel}</th>
                    <td className="air__total">{c.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <p className="air__airlines-label">{c.airlinesLabel}</p>
            <ul className="air__airlines">
              {c.airlines.map((a) => (
                <li key={a.name} style={{ color: a.color }}>
                  {a.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="air__map">
            <SmartImage {...c.map} className="air__map-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
