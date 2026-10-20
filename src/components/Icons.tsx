import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...base} {...p}>
    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
  </svg>
);

export const ArrowLeft = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...base} {...p}>
    <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
  </svg>
);

export const ArrowUp = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...base} {...p}>
    <path d="M8 13.5v-11M3.5 7 8 2.5 12.5 7" />
  </svg>
);

/** Flecha larga de los carruseles de casos de éxito. */
export const ArrowBig = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg viewBox="0 0 38 24" width="38" height="24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'right' ? <path d="M2 12h33M26 3l9 9-9 9" /> : <path d="M36 12H3M12 3l-9 9 9 9" />}
  </svg>
);

export const Chevron = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...base} {...p}>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} strokeWidth={2} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const fill = { fill: 'currentColor', 'aria-hidden': true } as const;

export const PinIcon = (p: P) => (
  <svg viewBox="0 0 16 16" width="12" height="12" {...base} {...p}>
    <path d="M8 14s4.5-4.2 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 9.8 8 14 8 14Z" />
    <circle cx="8" cy="6.5" r="1.5" />
  </svg>
);

export const SocialIcon = ({ network, ...p }: P & { network: string }) => {
  const paths: Record<string, string> = {
    facebook: 'M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.5V21h3Z',
    x: 'M17.8 3.5h3l-6.6 7.5 7.7 10.2h-6l-4.7-6.2-5.4 6.2h-3l7-8L2.4 3.5h6.2l4.3 5.7 4.9-5.7Zm-1 15.9h1.6L7.6 5.2H5.8l11 14.2Z',
    linkedin: 'M5 8.5h3V19H5V8.5ZM6.5 4a1.7 1.7 0 1 1 0 3.5 1.7 1.7 0 0 1 0-3.5ZM10 8.5h2.9v1.4c.4-.8 1.4-1.7 3-1.7 3.1 0 3.6 2 3.6 4.7V19h-3v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V19H10V8.5Z',
    youtube: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z',
  };
  if (network === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" {...base} strokeWidth={1.8} {...p}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...fill} {...p}>
      <path d={paths[network]} />
    </svg>
  );
};
