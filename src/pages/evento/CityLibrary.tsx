import { cityLibrary } from '../../data/evento';
import { ArrowLabel } from '../../components/ArrowLabel';
import { DownloadLink } from '../../components/DownloadGate';
import './CityLibrary.css';

/** Dos guías descargables. Sin documento cargado, el botón queda deshabilitado. */
export function CityLibrary() {
  return (
    <section id="biblioteca-de-recursos" className="library" aria-labelledby="library-title">
      <div className="container">
        <h2 id="library-title" className="library__title">
          {cityLibrary.title}
        </h2>
        <p className="library__text">
          {cityLibrary.text.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <ul className="library__grid">
          {cityLibrary.guides.map((g) => (
            <li key={g.number} className="library__card">
              <p className="library__number">{g.number}</p>
              <h3 className="library__card-title">
                {g.title.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
              {g.href ? (
                <DownloadLink url={g.href} title={g.title.join(' ')} className="library__btn">
                  <ArrowLabel size={13}>{g.cta}</ArrowLabel>
                </DownloadLink>
              ) : (
                <span className="library__btn library__btn--pending" aria-disabled="true" title={import.meta.env.DEV ? 'Documento pendiente (ver PENDIENTES.md)' : undefined}>
                  {g.cta} →
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
