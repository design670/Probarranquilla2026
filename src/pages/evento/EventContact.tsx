import { useState, type FormEvent } from 'react';
import { eventAnchors, eventContact, eventForm } from '../../data/evento';
import { SmartImage } from '../../components/SmartImage';
import { ArrowLabel } from '../../components/ArrowLabel';
import { Chevron } from '../../components/Icons';
import './EventContact.css';

const Mail = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true">
    <rect x="1.8" y="3.3" width="12.4" height="9.4" rx="1.2" />
    <path d="m2.2 4 5.8 4.6L13.8 4" />
  </svg>
);

type Values = Record<keyof typeof eventForm.fields, string>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: '', organization: '', email: '', phone: '', eventType: '', attendees: '', details: '' };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Escribe tu nombre completo.';
  if (!v.organization.trim()) e.organization = 'Indica tu organización o asociación.';
  if (!v.email.trim()) e.email = 'Escribe tu correo electrónico.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Revisa el formato del correo (ejemplo: nombre@empresa.com).';
  if (v.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(v.phone.trim())) e.phone = 'Revisa el número de teléfono.';
  // Los selectores son obligatorios solo cuando tengan opciones confirmadas
  if (eventForm.eventTypes.length && !v.eventType) e.eventType = 'Selecciona el tipo de evento.';
  if (eventForm.attendeeRanges.length && !v.attendees) e.attendees = 'Selecciona los asistentes estimados.';
  if (!v.details.trim()) e.details = 'Cuéntanos los detalles o requerimientos de tu evento.';
  return e;
}

/**
 * Contactos del equipo + formulario de postulación. Valida en el cliente y
 * envía por POST al endpoint configurado. Sin endpoint, no simula el envío:
 * muestra el aviso de error con los correos de contacto.
 */
export function EventContact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const f = eventForm.fields;

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return; // evita envíos duplicados
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`ev-${first}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      if (!eventForm.endpoint) throw new Error('Endpoint del formulario pendiente');
      const res = await fetch(eventForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setValues(empty);
    } catch {
      setStatus('error');
    }
  };

  const field = (k: keyof Values) => ({
    id: `ev-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `ev-${k}-error` : undefined,
  });

  const error = (k: keyof Values) =>
    errors[k] && (
      <p id={`ev-${k}-error`} className="ev-form__error">
        {errors[k]}
      </p>
    );

  const select = (k: 'eventType' | 'attendees', options: string[]) => (
    <div className="ev-form__select">
      <select {...field(k)}>
        <option value="">{options.length ? 'Selecciona una opción' : ''}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Chevron aria-hidden="true" />
    </div>
  );

  return (
    <section id={eventAnchors.formulario} className="ev-contact" aria-labelledby="ev-form-title">
      <div className="ev-contact__box">
        {/* Título centrado sobre las dos columnas (contactos y formulario) */}
        <h2 id="ev-form-title" className="ev-contact__title ev-contact__title--center">
          {eventForm.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <div className="ev-contact__team">
          <ul className="ev-contact__people ev-contact__people--solo">
            {eventContact.people.map((p) => (
              <li key={p.email} className="ev-person">
                <SmartImage {...p.photo} className="ev-person__photo" />
                <div>
                  <p className="ev-person__name">{p.name}</p>
                  <p className="ev-person__role">{p.role}</p>
                  <a className="ev-person__mail" href={`mailto:${p.email}`}>
                    <Mail /> {p.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="ev-form" noValidate onSubmit={onSubmit} aria-labelledby="ev-form-title">
          <div className="ev-form__grid">
            <div className="ev-form__field">
              <label htmlFor="ev-name">{f.name}</label>
              <input type="text" autoComplete="name" required {...field('name')} />
              {error('name')}
            </div>
            <div className="ev-form__field">
              <label htmlFor="ev-organization">{f.organization}</label>
              <input type="text" autoComplete="organization" required {...field('organization')} />
              {error('organization')}
            </div>
            <div className="ev-form__field">
              <label htmlFor="ev-email">{f.email}</label>
              <input type="email" autoComplete="email" inputMode="email" required {...field('email')} />
              {error('email')}
            </div>
            <div className="ev-form__field">
              <label htmlFor="ev-phone">{f.phone}</label>
              <input type="tel" autoComplete="tel" inputMode="tel" {...field('phone')} />
              {error('phone')}
            </div>
            <div className="ev-form__field">
              <label htmlFor="ev-eventType">{f.eventType}</label>
              {select('eventType', eventForm.eventTypes)}
              {error('eventType')}
            </div>
            <div className="ev-form__field">
              <label htmlFor="ev-attendees">{f.attendees}</label>
              {select('attendees', eventForm.attendeeRanges)}
              {error('attendees')}
            </div>
            <div className="ev-form__field ev-form__field--full">
              <label htmlFor="ev-details">{f.details}</label>
              <textarea rows={4} required {...field('details')} />
              {error('details')}
            </div>
          </div>
          <button type="submit" className="ev-form__submit" disabled={status === 'sending'}>
            <ArrowLabel size={13}>{status === 'sending' ? eventForm.sending : eventForm.submit}</ArrowLabel>
          </button>
          <p className={`ev-form__status ev-form__status--${status}`} role="status" aria-live="polite">
            {status === 'sent' && eventForm.success}
            {status === 'error' && eventForm.error}
          </p>
        </form>
      </div>
    </section>
  );
}
