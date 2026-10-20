import { useEffect, useState } from 'react';
import { utilityBar } from '../data/content';
import { ArrowUp } from './Icons';
import { ArrowLabel } from './ArrowLabel';
import { useDisclosure } from './useDisclosure';
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

export function UtilityBar() {
  const time = useClock(utilityBar.timeZone);
  const lang = useDisclosure<HTMLDivElement>();

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
        <div className="utility-bar__lang" ref={lang.ref}>
          <button type="button" className="utility-bar__lang-btn" aria-haspopup="true" aria-expanded={lang.open} onClick={lang.toggle} aria-label={`Idioma: ${utilityBar.currentLanguage}`}>
            <FlagUS />
            {utilityBar.currentLanguage}
            <ArrowUp width={13} height={13} />
          </button>
          {lang.open && (
            <ul className="utility-bar__lang-menu">
              {utilityBar.languages.map((l) => (
                <li key={l.code}>
                  <a href={l.href} lang={l.code.toLowerCase()} aria-current={l.code === utilityBar.currentLanguage ? 'true' : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
