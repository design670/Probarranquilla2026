import { routes } from '../data/content';
import { ArrowLabel } from './ArrowLabel';
import './NotFound.css';

/** Contenido de la página 404 (también se usa si un slug de noticia no existe). */
export function NotFoundHero() {
  return (
    <section className="not-found">
      <div className="container not-found__content">
        <h1 className="not-found__title">Página no encontrada</h1>
        <p className="not-found__text">La dirección que buscas no existe o fue movida.</p>
        <div className="not-found__actions">
          <a href={routes.home} className="not-found__btn">
            <ArrowLabel size={13}>Ir al inicio</ArrowLabel>
          </a>
          <a href={routes.noticias} className="not-found__btn not-found__btn--ghost">
            <ArrowLabel size={13}>Ver noticias</ArrowLabel>
          </a>
        </div>
      </div>
    </section>
  );
}
