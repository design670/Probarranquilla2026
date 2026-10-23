import { useEffect, useRef, useState } from 'react';

const DURATION = 1600;

type Parsed = { prefix: string; target: number; decimals: number; grouped: boolean; suffix: string };

/**
 * Separa el primer número del texto. "." seguido de exactamente 3 dígitos es
 * separador de miles (81.564, 3.581); si no, es decimal (+1.7 millones).
 */
function parse(text: string): Parsed | null {
  const m = text.match(/\d{1,3}(?:\.\d{3})+(?!\d)|\d+(?:[.,]\d+)?/);
  if (!m || m.index === undefined) return null;
  const raw = m[0];
  const grouped = /^\d{1,3}(\.\d{3})+$/.test(raw);
  const decimals = grouped ? 0 : (raw.split(/[.,]/)[1]?.length ?? 0);
  const target = grouped ? Number(raw.replace(/\./g, '')) : Number(raw.replace(',', '.'));
  return { prefix: text.slice(0, m.index), target, decimals, grouped, suffix: text.slice(m.index + raw.length) };
}

function format(n: number, p: Parsed) {
  if (p.decimals) return n.toFixed(p.decimals);
  const int = Math.round(n);
  return p.grouped ? int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : int.toString();
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Cifra que cuenta de 0 a su valor la primera vez que entra en pantalla.
 * Conserva prefijos y sufijos ("+$74M", "38%"). Los lectores de pantalla
 * leen siempre el valor final; con movimiento reducido no hay animación.
 */
export function CountUp({ value }: { value: string }) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!parsed || !el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return;
    }
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        // Nunca por debajo de 0: el primer cuadro puede llegar con una marca de tiempo anterior al inicio
        const t = Math.min(1, Math.max(0, (now - start) / DURATION));
        setCurrent(parsed.target * easeOut(t));
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDone(true);
      };
      frame = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // Se reinicia solo si cambia el texto (p. ej. al cambiar de pestaña)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parsed) return <>{value}</>;

  return (
    <span ref={ref} className="count-up">
      <span aria-hidden="true">
        {parsed.prefix}
        {done ? format(parsed.target, parsed) : format(current, parsed)}
        {parsed.suffix}
      </span>
      <span className="visually-hidden">{value}</span>
    </span>
  );
}
