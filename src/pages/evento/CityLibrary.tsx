import { cityLibrary, type CityResource } from '../../data/evento';
import { ArrowLabel } from '../../components/ArrowLabel';
import { DownloadLink } from '../../components/DownloadGate';
import { SmartImage } from '../../components/SmartImage';
import './CityLibrary.css';

/** Las guías piden solo nombre, organización y ciudad antes de descargar. */
const FIELDS = ['name', 'organization', 'city'] as const;
const POLICY = 'Revisa nuestra política de privacidad y tratamiento de datos personales';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
    <path d="M6 1.2v6.3M3.4 5l2.6 2.6L8.6 5M1.5 8.6v1.9h9V8.6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Card({ r }: { r: CityResource }) {
  const body = (
    <>
      <div className="library__cover">
        <SmartImage {...r.cover} className="library__img" />
        <span className="library__kind">{r.kind}</span>
      </div>
      <div className="library__body">
        <h3 className="library__card-title">{r.title}</h3>
        <p className="library__desc">{r.description}</p>
        <span className="library__btn">
          {r.action === 'download' && <DownloadIcon />}
          <ArrowLabel size={13}>{r.cta}</ArrowLabel>
        </span>
      </div>
    </>
  );

  // Toda la tarjeta es el enlace: más fácil de tocar y más llamativa
  return (
    <li className="library__card">
      {r.action === 'download' ? (
        <DownloadLink url={r.href} title={r.title} fields={[...FIELDS]} policyLabel={POLICY} className="library__link">
          {body}
        </DownloadLink>
      ) : (
        <a href={r.href} className="library__link" target="_blank" rel="noopener noreferrer">
          {body}
          <span className="visually-hidden"> (abre en una pestaña nueva)</span>
        </a>
      )}
    </li>
  );
}

/** Kit de promoción de ciudad: guías descargables y el portal de turismo. */
export function CityLibrary() {
  return (
    <section id="biblioteca-de-recursos" className="library" aria-labelledby="library-title">
      <div className="container">
        <h2 id="library-title" className="library__title">
          {cityLibrary.title}
        </h2>
        <p className="library__text">{cityLibrary.text}</p>
        <ul className="library__grid">
          {cityLibrary.resources.map((r) => (
            <Card key={r.id} r={r} />
          ))}
        </ul>
      </div>
    </section>
  );
}
