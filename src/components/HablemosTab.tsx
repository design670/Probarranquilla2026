import { routes } from '../data/content';
import './HablemosTab.css';

/**
 * Silueta del caimán, trazada a partir de la referencia "Button Hablemos".
 * Si se recibe el vector oficial, basta con reemplazar este path (y el viewBox).
 */
const CAIMAN_VIEWBOX = '420 15 225 775';
const CAIMAN_PATH =
  'M537 20 L630 20 Q642 20 642 32 L642 530 L578 590 L600 612 L572 622 L592 650 L566 662 L586 690 L560 700 L576 728 L548 738 L512 768 Q500 786 482 786 Q462 782 464 762 Q466 748 474 742 L500 540 L428 462 Q420 450 428 440 L520 347 L436 258 Q428 248 436 238 L510 188 L446 128 Q438 118 446 108 Z';

/**
 * Botón flotante de contacto. En reposo el caimán lo cubre (se ve verde);
 * con hover o foco se desliza hacia arriba, deja asomar la cola y el botón
 * queda blanco con el icono sobre el texto.
 * El destino se configura en `routes.contacto`.
 */
export function HablemosTab() {
  return (
    <a href={routes.contacto} className="hablemos" aria-label="Hablemos: contacta a ProBarranquilla">
      <svg className="hablemos__caiman" viewBox={CAIMAN_VIEWBOX} aria-hidden="true" focusable="false">
        <path d={CAIMAN_PATH} />
      </svg>
      <span className="hablemos__content">
        <span className="hablemos__label">Hablemos</span>
        <svg className="hablemos__icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6A5 5 0 0 1 18 10" />
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      </span>
    </a>
  );
}
