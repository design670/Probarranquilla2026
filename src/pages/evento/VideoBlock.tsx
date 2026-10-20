import { useEffect, useRef, useState } from 'react';
import { eventVideo } from '../../data/evento';
import { ArrowLabel } from '../../components/ArrowLabel';
import { CloseIcon } from '../../components/Icons';
import './VideoBlock.css';

/** Convierte un enlace de YouTube/Vimeo a su versión embebible. */
function embedUrl(url: string) {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return null;
}

/**
 * Franja roja con el video del destino. El video se abre en un <dialog> modal:
 * cierre visible y con Escape, el foco vuelve al botón y la reproducción se
 * detiene al cerrar (el reproductor se desmonta). Nada se reproduce al cargar.
 */
export function VideoBlock() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const { url } = eventVideo;
  const embed = url ? embedUrl(url) : null;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <section className="video-block" aria-labelledby="video-title">
      <div className="container">
        <h2 id="video-title" className="video-block__title">
          {eventVideo.title}
        </h2>
        <p className="video-block__text">
          {eventVideo.text.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <button
          ref={trigger}
          type="button"
          className="video-block__btn"
          aria-disabled={!url || undefined}
          aria-haspopup="dialog"
          title={!url && import.meta.env.DEV ? 'Video pendiente (ver PENDIENTES.md)' : undefined}
          onClick={() => url && setOpen(true)}
        >
          <ArrowLabel size={13}>{eventVideo.cta}</ArrowLabel>
        </button>
      </div>

      <dialog
        ref={dialog}
        className="video-modal"
        aria-label={eventVideo.title}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" className="video-modal__close" aria-label="Cerrar video" onClick={close}>
          <CloseIcon />
        </button>
        {open && url && (
          <div className="video-modal__frame">
            {embed ? (
              <iframe src={embed} title={eventVideo.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              <video src={url} controls autoPlay playsInline />
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
