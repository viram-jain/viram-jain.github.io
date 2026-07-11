interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function BookIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M50 20 C40 14 22 12 12 16 V78 C22 74 40 76 50 82 C60 76 78 74 88 78 V16 C78 12 60 14 50 20 Z" />
      <path d="M50 20 V82" />
      <path d="M22 30 H40 M22 40 H40 M22 50 H38" />
      <path d="M60 30 H78 M60 40 H78 M62 50 H78" />
    </svg>
  );
}

export function QuillIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M78 14 C60 20 34 40 22 68 L18 84 L34 80 C58 68 78 44 84 22 C74 26 58 36 46 50" />
      <path d="M18 84 L30 66" />
      <circle cx="50" cy="80" r="14" opacity="0.6" />
      <path d="M42 80 H58 M50 72 V88" opacity="0.6" />
    </svg>
  );
}

export function HourglassIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M28 14 H72 M28 86 H72" />
      <path d="M28 14 C28 34 46 40 46 50 C46 60 28 66 28 86" />
      <path d="M72 14 C72 34 54 40 54 50 C54 60 72 66 72 86" />
      <path d="M50 46 L54 50 L50 54 L46 50 Z" />
    </svg>
  );
}

export function SparkIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M50 8 C52 32 54 48 50 50 C48 48 50 32 50 8" />
      <path d="M50 92 C48 68 46 52 50 50 C52 52 50 68 50 92" />
      <path d="M8 50 C32 48 48 46 50 50 C48 52 32 50 8 50" />
      <path d="M92 50 C68 52 52 54 50 50 C52 48 68 50 92 50" />
      <path d="M22 22 C36 32 44 42 50 50 M78 22 C64 32 56 42 50 50 M22 78 C36 68 44 58 50 50 M78 78 C64 68 56 58 50 50" opacity="0.5" />
    </svg>
  );
}

export function CauldronIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M20 40 H80 L72 76 C68 84 32 84 28 76 Z" />
      <path d="M8 30 L20 40 M92 30 L80 40" />
      <ellipse cx="50" cy="40" rx="30" ry="7" />
      <path d="M42 20 C42 16 46 12 50 16 C54 12 58 16 58 20" opacity="0.6" />
      <circle cx="42" cy="58" r="2.5" opacity="0.6" />
      <circle cx="58" cy="64" r="2" opacity="0.6" />
    </svg>
  );
}

export function FilmReelIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="8" />
      <circle cx="50" cy="24" r="9" opacity="0.6" />
      <circle cx="74.5" cy="41" r="9" opacity="0.6" />
      <circle cx="65" cy="70.5" r="9" opacity="0.6" />
      <circle cx="35" cy="70.5" r="9" opacity="0.6" />
      <circle cx="25.5" cy="41" r="9" opacity="0.6" />
    </svg>
  );
}

export function WandIcon({ size = 160, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M20 82 L70 32" />
      <path d="M74 14 L76 24 M84 20 L78 28 M90 30 L80 32" />
      <path d="M74 14 L84 20 L90 30 L80 32 L78 28 L76 24 Z" opacity="0.7" />
    </svg>
  );
}
