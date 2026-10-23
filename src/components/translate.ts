/**
 * Traducción de la página a inglés con el widget de Google Translate.
 * El idioma elegido se guarda en la cookie `googtrans`, así se mantiene al
 * navegar entre páginas. El contenido original sigue en español.
 */
export type Lang = 'es' | 'en';

const COOKIE = 'googtrans';

function readCookie(): string | null {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(value: string | null) {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`];
  for (const d of domains) {
    const domain = d ? `; domain=${d}` : '';
    document.cookie = value
      ? `${COOKIE}=${value}; path=/${domain}`
      : `${COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
  }
}

export function currentLang(): Lang {
  return readCookie() === '/es/en' ? 'en' : 'es';
}

let loaded = false;

/** Carga el widget (oculto); con la cookie puesta traduce la página solo. */
export function loadTranslator() {
  if (loaded) return;
  loaded = true;
  const host = document.createElement('div');
  host.id = 'google_translate_element';
  host.hidden = true;
  document.body.appendChild(host);
  (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
    const g = (window as unknown as { google: { translate: { TranslateElement: new (o: object, id: string) => unknown } } }).google;
    new g.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'en,es', autoDisplay: false }, 'google_translate_element');
  };
  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);
}

export function setLang(lang: Lang) {
  writeCookie(lang === 'en' ? '/es/en' : null);
  window.location.reload();
}
