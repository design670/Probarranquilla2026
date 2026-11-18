import { SiteShell } from '../../components/SiteShell';
import { PageHero } from '../../components/PageHero';
import { privacyHero, privacyIntro, privacySections } from '../../data/privacidad';
import './PrivacyPage.css';

/** "Política de privacidad": índice fijo a la izquierda y el texto de la política a la derecha. */
export function PrivacyPage() {
  return (
    <SiteShell hero={<PageHero image={privacyHero.image} title={privacyHero.title} description={privacyHero.description} shade="navy" className="page-hero--privacy" />}>
      <div className="policy">
        <div className="container policy__layout">
          <nav className="policy__index" aria-label="Contenido de la política">
            <p className="policy__index-title">Contenido</p>
            <ol>
              {privacySections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="policy__index-num">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="policy__body">
            <div className="policy__intro">
              {privacyIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {privacySections.map((s, i) => (
              <section key={s.id} id={s.id} className="policy__section" aria-labelledby={`${s.id}-t`}>
                <h2 id={`${s.id}-t`} className="policy__title">
                  <span className="policy__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.blocks.map((b, j) =>
                  b.type === 'p' ? (
                    <p key={j} className="policy__p">
                      {b.text}
                    </p>
                  ) : (
                    <ul key={j} className="policy__list">
                      {b.items.map((it) => (
                        <li key={it.text}>
                          {it.label && <strong>{it.label}: </strong>}
                          {it.text}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
