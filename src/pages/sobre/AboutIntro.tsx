import { aboutIntro } from '../../data/sobre';
import { impact } from '../../data/content';
import { ImpactStatistics } from '../../components/ImpactStatistics';
import './AboutIntro.css';

/**
 * Presentación institucional + las mismas estadísticas del Home (pestañas
 * INVERSIONES / TURISMO DE REUNIONES y sus tarjetas), pedido del cliente.
 */
export function AboutIntro() {
  return (
    <>
      <section className="about-intro" aria-labelledby="about-intro-title">
        <div className="container">
          <h2 id="about-intro-title" className="about-intro__title">
            {aboutIntro.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
        </div>
      </section>
      <ImpactStatistics intro={impact.intro} ariaLabel="Impacto y resultados de ProBarranquilla" className="impact--about" />
    </>
  );
}
