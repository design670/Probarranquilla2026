import { useEffect, useRef, useState, type FormEvent, type MouseEvent, type ReactNode } from 'react';
import { downloadForm } from '../data/descargas';
import { CloseIcon } from './Icons';
import './DownloadGate.css';

/* ---------- API: cualquier botón de descarga del sitio pide el formulario ---------- */

export type DownloadRequest = { title: string; url: string };

const EVENT = 'pb:download-request';

/** Abre el formulario de datos antes de entregar `url`. */
export function requestDownload(req: DownloadRequest) {
  window.dispatchEvent(new CustomEvent<DownloadRequest>(EVENT, { detail: req }));
}

/**
 * Enlace de descarga: con JavaScript abre el formulario; el `href` real queda
 * como respaldo (clic con Ctrl/rueda o sin JS).
 */
export function DownloadLink({
  title,
  url,
  className,
  ariaLabel,
  children,
}: DownloadRequest & { className?: string; ariaLabel?: string; children: ReactNode }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    requestDownload({ title, url });
  };
  return (
    <a href={url} className={className} aria-label={ariaLabel} aria-haspopup="dialog" onClick={onClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/* ---------- Formulario ---------- */

type Key = keyof typeof downloadForm.fields;
type Values = Record<Key, string> & { policy: '' | 'yes' | 'no' };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: '', email: '', organization: '', city: '', policy: '' };
const STORAGE = 'pb-download-contact';

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Escribe tu nombre.';
  if (!v.email.trim()) e.email = 'Escribe tu correo electrónico.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Revisa el formato del correo (ejemplo: nombre@empresa.com).';
  if (!v.organization.trim()) e.organization = 'Indica tu organización.';
  if (!v.city.trim()) e.city = 'Indica tu ciudad.';
  if (!v.policy) e.policy = 'Selecciona Sí o No.';
  else if (v.policy === 'no') e.policy = 'Para descargar el documento debes aceptar la política de tratamiento de datos.';
  return e;
}

/** Recuerda los datos en esta pestaña para no reescribirlos en cada descarga. */
function loadSaved(): Values {
  try {
    const raw = sessionStorage.getItem(STORAGE);
    if (raw) return { ...empty, ...JSON.parse(raw), policy: '' };
  } catch {
    /* almacenamiento no disponible */
  }
  return empty;
}

/**
 * Popup único del sitio (montado en SiteShell). Pide nombre, correo,
 * organización, ciudad y la aceptación de la política; si todo es válido,
 * envía los datos al endpoint (cuando exista) y abre el documento.
 */
export function DownloadGate() {
  const [request, setRequest] = useState<DownloadRequest | null>(null);
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const f = downloadForm.fields;

  useEffect(() => {
    const onRequest = (e: Event) => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setValues(loadSaved());
      setErrors({});
      setRequest((e as CustomEvent<DownloadRequest>).detail);
    };
    window.addEventListener(EVENT, onRequest);
    return () => window.removeEventListener(EVENT, onRequest);
  }, []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (request && !d.open) {
      d.showModal();
      d.querySelector<HTMLInputElement>('input')?.focus();
    }
    if (!request && d.open) d.close();
  }, [request]);

  const close = () => {
    setRequest(null);
    returnFocus.current?.focus();
  };

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!request) return;
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first === 'policy' ? 'dl-policy-yes' : `dl-${first}`)?.focus();
      return;
    }

    const { policy, ...contact } = values;
    try {
      sessionStorage.setItem(STORAGE, JSON.stringify(contact));
    } catch {
      /* sin almacenamiento: se pedirán de nuevo */
    }

    const payload = { ...contact, acceptsPolicy: policy === 'yes', document: request.title, url: request.url };
    if (downloadForm.endpoint) {
      // keepalive: el envío termina aunque el usuario cambie de pestaña
      fetch(downloadForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => undefined);
    } else if (import.meta.env.DEV) {
      console.warn('[Descargas] Endpoint pendiente: los datos no se guardan.', payload);
    }

    // Se abre dentro del clic para que el navegador no lo bloquee
    window.open(request.url, '_blank', 'noopener,noreferrer');
    close();
  };

  const field = (k: Key) => (
    <div className="dl-form__field" key={k}>
      <label htmlFor={`dl-${k}`}>
        {f[k].label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={`dl-${k}`}
        name={k}
        type={f[k].type}
        autoComplete={f[k].autoComplete}
        value={values[k]}
        onChange={set(k)}
        required
        aria-invalid={errors[k] ? true : undefined}
        aria-describedby={errors[k] ? `dl-${k}-error` : undefined}
      />
      {errors[k] && (
        <p id={`dl-${k}-error`} className="dl-form__error">
          {errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <dialog
      ref={dialog}
      className="dl-modal"
      aria-labelledby="dl-title"
      aria-describedby="dl-doc"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {request && (
        <form className="dl-form" noValidate onSubmit={onSubmit}>
          <button type="button" className="dl-modal__close" aria-label="Cerrar" onClick={close}>
            <CloseIcon width={20} height={20} />
          </button>

          <h2 id="dl-title" className="dl-form__title">
            {downloadForm.title}
          </h2>
          <p className="dl-form__intro">{downloadForm.intro}</p>
          <p id="dl-doc" className="dl-form__doc">
            {request.title}
          </p>

          <div className="dl-form__grid">{(Object.keys(f) as Key[]).map(field)}</div>

          <fieldset
            className="dl-form__policy"
            aria-invalid={errors.policy ? true : undefined}
            aria-describedby={errors.policy ? 'dl-policy-error' : undefined}
          >
            <legend>
              <a href={downloadForm.policy.href} target="_blank" rel="noopener noreferrer">
                {downloadForm.policy.label}
              </a>
              <span className="dl-form__question">
                {downloadForm.policy.question} <span aria-hidden="true">*</span>
              </span>
            </legend>
            <div className="dl-form__options">
              {(['yes', 'no'] as const).map((opt) => (
                <label key={opt} className="dl-form__option" htmlFor={`dl-policy-${opt}`}>
                  <input
                    id={`dl-policy-${opt}`}
                    type="radio"
                    name="policy"
                    value={opt}
                    checked={values.policy === opt}
                    onChange={set('policy')}
                  />
                  {downloadForm.policy[opt]}
                </label>
              ))}
            </div>
            {errors.policy && (
              <p id="dl-policy-error" className="dl-form__error" role="alert">
                {errors.policy}
              </p>
            )}
          </fieldset>

          <button type="submit" className="dl-form__submit" aria-disabled={values.policy === 'no' || undefined}>
            {downloadForm.submit}
            <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
              <path d="M6 1.2v6.3M3.4 5l2.6 2.6L8.6 5M1.5 8.6v1.9h9V8.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="dl-form__note">Los campos marcados con * son obligatorios.</p>
        </form>
      )}
    </dialog>
  );
}
