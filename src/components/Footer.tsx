import { brand, footer } from '../data/content';
import { SmartImage } from './SmartImage';
import { SocialIcon } from './Icons';
import './Footer.css';

/**
 * `wide`: variante de páginas internas con el logo más adentro y las redes
 * alineadas al borde del contenedor. La ciudad va al final de la dirección.
 */
export function Footer({ variant = 'default' }: { variant?: 'default' | 'wide' }) {
  const { address } = footer;
  return (
    <footer className={`footer footer--${variant}`}>
      <div className="footer__line" aria-hidden="true" />
      <div className="container footer__top">
        <a href="/" className="footer__logo" aria-label={`${brand.name}, inicio`}>
          <SmartImage src={brand.logoWhite} alt={brand.name} kind="logo" width={158} height={76} className="on-dark" />
        </a>
        <address className="footer__address">
          <strong>{address.building}</strong>
          <br />
          {address.street}
          <br />
          {address.city}
        </address>
        <ul className="footer__social">
          {footer.social.map((s) => (
            <li key={s.network}>
              <a href={s.href} aria-label={s.label} {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <SocialIcon network={s.network} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__line footer__line--thin" aria-hidden="true" />
      <div className="container footer__bottom">
        <p>{footer.copyright}</p>
        <a href={footer.privacy.href}>{footer.privacy.label}</a>
        <a href={footer.faq.href} className="footer__faq">
          {footer.faq.label}
        </a>
      </div>
    </footer>
  );
}
