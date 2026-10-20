import type { IconName } from '../data/instalate';

/** Iconos lineales de 24×24 (trazo heredado del color del texto). */
const paths: Record<IconName, JSX.Element> = {
  anchor: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
  ship: (
    <>
      <path d="M4 15.5 5.5 11h13l1.5 4.5" />
      <path d="M7 11V7.5h10V11M12 4.5v3" />
      <path d="M3 19c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
      <path d="M5 19c3-4 6-6.5 9-8" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3v4M15.5 3v4" />
    </>
  ),
  dollar: <path d="M12 3v18M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 1.6 2.6 4.5 3.3 4.5 1.7 4.5 3.7-2 3-4.5 3-4.5-1.3-4.5-3" />,
  plane: <path d="m10.5 13.5-6 2 1.5 1.5 5-1M13.5 10.5l2-6-1.5-1.5-1 5M21 3c-1-1-3 0-4.5 1.5L5 16l3 3 11.5-11.5C21 6 22 4 21 3Z" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  flame: <path d="M12 21c3.6 0 6-2.4 6-5.8 0-3.7-3-6.2-4.5-9.7C12 7.5 11 9 9.5 9.5 9 8.7 8.8 8 8.8 7 7 8.8 6 11.2 6 15.2 6 18.6 8.4 21 12 21Zm0 0c-1.6 0-2.6-1.1-2.6-2.6 0-1.8 1.4-2.7 2.6-4.4 1.2 1.7 2.6 2.6 2.6 4.4 0 1.5-1 2.6-2.6 2.6Z" />,
  drop: <path d="M12 3.5S6.5 10 6.5 14a5.5 5.5 0 0 0 11 0C17.5 10 12 3.5 12 3.5Z" />,
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  archive: (
    <>
      <rect x="3.5" y="4" width="17" height="4.5" rx="1" />
      <path d="M5 8.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5M10 12h4" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.5V16c1.5 1.4 3.4 2 5.5 2s4-.6 5.5-2v-4.5M21.5 9.5v5" />
    </>
  ),
  flask: <path d="M9.5 3.5h5M10 3.5v6L5 18.5A1.5 1.5 0 0 0 6.3 20.5h11.4a1.5 1.5 0 0 0 1.3-2L14 9.5v-6M7.5 14.5h9" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />
    </>
  ),
  chair: (
    <>
      <path d="M7 11V5.5A2.5 2.5 0 0 1 9.5 3h5A2.5 2.5 0 0 1 17 5.5V11" />
      <path d="M5 11h14v4H5zM7 15v6M17 15v6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l5 3V10l5 3V6h3v14H3Z" />
      <path d="M16 9h5v11h-5M7 17h2M11 17h2" />
    </>
  ),
  conveyor: (
    <>
      <rect x="9" y="4" width="8" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="5" rx="2.5" />
      <path d="M3 10h4M3 7h4" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="16" r="3.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10.5 16H15.5M4 12.5V7h6l2 5.5h6.5l1 2.5M14 7h3v5.5" />
    </>
  ),
};

export function LineIcon({ name, size = 24, strokeWidth = 1.6 }: { name: IconName; size?: number; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
