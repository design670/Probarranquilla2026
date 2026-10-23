import { useEffect, useState } from 'react';
import { utilityBar } from '../data/content';
import { ArrowUp } from './Icons';
import { ArrowLabel } from './ArrowLabel';
import { currentLang, loadTranslator, setLang } from './translate';
import './UtilityBar.css';

function useClock(timeZone: string) {
  const format = () =>
    new Intl.DateTimeFormat('es-CO', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

const FlagUS = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className="utility-bar__flag">
    <clipPath id="flag-clip">
      <circle cx="10" cy="10" r="10" />
    </clipPath>
    <g clipPath="url(#flag-clip)">
      <rect width="20" height="20" fill="#fff" />
      {[0, 3, 6, 9, 12, 15, 18].map((y) => (
        <rect key={y} y={y} width="20" height="1.5" fill="#d22f27" />
      ))}
      <rect width="10" height="10" fill="#1e50a0" />
    </g>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className="utility-bar__flag">
    <clipPath id="flag-clip-es">
      <circle cx="10" cy="10" r="10" />
    </clipPath>
    <g clipPath="url(#flag-clip-es)">
      <rect width="20" height="20" fill="#c60b1e" />
      <rect y="5" width="20" height="10" fill="#ffc400" />
    </g>
  </svg>
);

export function UtilityBar() {
  const time = useClock(utilityBar.timeZone);
  const lang = currentLang();
  // Con la página en inglés, el widget se carga y traduce al entrar
  useEffect(() => {
    if (lang === 'en') loadTranslator();
  }, [lang]);
  // El botón muestra el idioma al que se cambia
  const next = lang === 'en' ? 'es' : 'en';

  return (
    <div className="utility-bar">
      <div className="container utility-bar__inner">
        <p className="utility-bar__clock">
          {utilityBar.clockPrefix} <time>{time}</time>
        </p>
        <ul className="utility-bar__links">
          {utilityBar.links.map((l) => (
            <li key={l.label}>
              <a href={l.href}>
                <ArrowLabel size={14}>{l.label}</ArrowLabel>
              </a>
            </li>
          ))}
        </ul>
        <div className="utility-bar__lang notranslate" translate="no">
          <button
            type="button"
            className="utility-bar__lang-btn"
            lang={next}
            aria-label={next === 'en' ? 'View this page in English' : 'Ver esta página en español'}
            onClick={() => setLang(next)}
          >
            {next === 'en' ? <FlagUS /> : <FlagES />}
            {next.toUpperCase()}
            <ArrowUp width={13} height={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
