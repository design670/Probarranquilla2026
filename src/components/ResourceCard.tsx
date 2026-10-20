import { DownloadLink } from './DownloadGate';
import './ResourceCard.css';

/** Acción de la card: descarga (pasa por el formulario de datos) o enlace externo. */
export type ResourceAction =
  | { kind: 'download'; url: string | null; label?: string }
  | { kind: 'link'; url: string; label: string };

export type Resource = {
  id: string;
  title: string;
  /** Texto corto bajo el título (opcional). */
  text?: string;
  /** Nombre del documento que se muestra en el formulario de descarga (por defecto, el título). */
  documentName?: string;
  image: { src: string; alt: string };
  action: ResourceAction;
};

function DownloadIcon() {
  return (
    <svg className="rcard__icon" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d="M6 1.2v6.3M3.4 5l2.6 2.6L8.6 5M1.5 8.6v1.9h9V8.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="rcard__icon" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d="M1.5 6h8.5M6.8 2.6 10.2 6 6.8 9.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Card de la biblioteca de Herramientas (boletines, guías, ProData):
 * portada, título, texto opcional y una acción alineada abajo.
 */
export function ResourceCard({ resource, eager = false }: { resource: Resource; eager?: boolean }) {
  const { id, title, text, image, action, documentName } = resource;
  const titleId = `resource-${id}`;

  return (
    <article className={`rcard${text ? ' rcard--with-text' : ''}`} aria-labelledby={titleId}>
      <img className="rcard__cover" src={image.src} alt={image.alt} width={800} height={440} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      <h3 id={titleId} className="rcard__title">
        {title}
      </h3>
      {text && <p className="rcard__text">{text}</p>}

      {action.kind === 'link' ? (
        <a className="rcard__btn" href={action.url} target="_blank" rel="noopener noreferrer" aria-label={`${action.label}: ${title} (se abre en una pestaña nueva)`}>
          {action.label}
          <ArrowIcon />
        </a>
      ) : action.url ? (
        // Antes de descargar se piden los datos (popup global de SiteShell)
        <DownloadLink className="rcard__btn" title={documentName ?? title} url={action.url} ariaLabel={`${action.label ?? 'Descargar PDF'}: ${title}`}>
          {action.label ?? 'Descargar PDF'}
          <DownloadIcon />
        </DownloadLink>
      ) : (
        <span className="rcard__btn rcard__btn--pending" aria-disabled="true" title="PDF pendiente">
          PDF no disponible
        </span>
      )}
    </article>
  );
}
