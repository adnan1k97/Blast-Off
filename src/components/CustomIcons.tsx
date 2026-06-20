import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

/** A unique 4-pointed diamond star with inner facets */
export const CustomStar: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path
      d="M12 2L14.4 8.2L12 7L9.6 8.2L12 2Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M12 2L14.8 9.2H22L16.6 13.8L18.8 22L12 17L5.2 22L7.4 13.8L2 9.2H9.2L12 2Z"
      fill="currentColor"
    />
    <path
      d="M12 6.5L14 9.2H17.5L14.8 11.8L15.8 15.5L12 13L8.2 15.5L9.2 11.8L6.5 9.2H10L12 6.5Z"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

/** A filled star for ratings — cleaner, more geometric than lucide */
export const RatingStar: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <defs>
      <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.75" />
      </linearGradient>
    </defs>
    <path
      d="M12 1.5L15.09 7.76L22 8.77L17 13.64L18.18 20.52L12 17.27L5.82 20.52L7 13.64L2 8.77L8.91 7.76L12 1.5Z"
      fill="url(#starGrad)"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 4.5L14.1 8.8L12 8L9.9 8.8L12 4.5Z"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

/** Custom burst/sparkle — asymmetric 6-pointed burst */
export const CustomSparkle: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path
      d="M12 1L13.5 8.5L20 5L15 10.5L23 12L15 13.5L20 19L13.5 15.5L12 23L10.5 15.5L4 19L9 13.5L1 12L9 10.5L4 5L10.5 8.5L12 1Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.4" />
  </svg>
);

/** Multi-star cluster icon */
export const StarCluster: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M10 2L12.2 7.1L17.8 7.6L13.5 11.3L14.8 16.8L10 13.8L5.2 16.8L6.5 11.3L2.2 7.6L7.8 7.1L10 2Z" fill="currentColor" />
    <path d="M19 10L20.2 12.8L23 13.1L20.8 15L21.4 17.8L19 16.3L16.6 17.8L17.2 15L15 13.1L17.8 12.8L19 10Z" fill="currentColor" opacity="0.7" />
    <path d="M18 3L18.8 4.8L20.8 5L19.4 6.2L19.8 8.2L18 7.1L16.2 8.2L16.6 6.2L15.2 5L17.2 4.8L18 3Z" fill="currentColor" opacity="0.5" />
  </svg>
);

/** Small inline star for use in stat displays */
export const MiniStar: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} style={style}>
    <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z" fill="currentColor" />
  </svg>
);

/** Rocket icon — illustrated SVG */
export const RocketIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 2C12 2 7 6.5 7 14L9.5 16L12 14.5L14.5 16L17 14C17 6.5 12 2 12 2Z" fill="currentColor" />
    <path d="M12 2C12 2 9 6 9 12L12 10.5L15 12C15 6 12 2 12 2Z" fill="currentColor" opacity="0.6" />
    <path d="M9.5 16L7 14L5 17L8 18L9.5 16Z" fill="currentColor" opacity="0.7" />
    <path d="M14.5 16L17 14L19 17L16 18L14.5 16Z" fill="currentColor" opacity="0.7" />
    <ellipse cx="12" cy="9" rx="1.5" ry="1.8" fill="currentColor" opacity="0.3" />
    <path d="M10 19L12 22L14 19L12 20L10 19Z" fill="currentColor" opacity="0.8" />
  </svg>
);

/** Gear/Settings icon — illustrated SVG */
export const GearIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" fill="currentColor" opacity="0.5" />
    <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.08 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94Z" fill="currentColor" />
  </svg>
);

/** Refresh/Restart icon */
export const RefreshIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor" />
  </svg>
);

/** Shield icon — for privacy/protection UI */
export const ShieldIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" fill="currentColor" />
    <path d="M12 4L6 6.5V11.09C6 15.18 8.72 18.95 12 20C15.28 18.95 18 15.18 18 11.09V6.5L12 4Z" fill="currentColor" opacity="0.5" />
    <path d="M10 12L11.5 13.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" fill="none" />
  </svg>
);

/** Lightning bolt icon — for speed/quick */
export const LightningIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M13 2L4.5 13H11L10 22L19.5 11H13L13 2Z" fill="currentColor" />
    <path d="M13 2L7 11H11L10 22L16 13H13V2Z" fill="currentColor" opacity="0.5" />
  </svg>
);

/** Target/Crosshair icon — for precision */
export const TargetIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** Balance/Scale icon — for normal/balanced */
export const BalanceIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 8L2 14H6L4 8Z" fill="currentColor" opacity="0.7" />
    <path d="M20 8L18 14H22L20 8Z" fill="currentColor" opacity="0.7" />
    <path d="M2 14C2 15.1 2.9 16 4 16C5.1 16 6 15.1 6 14" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M18 14C18 15.1 18.9 16 20 16C21.1 16 22 15.1 22 14" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="9" y="19" width="6" height="2" rx="1" fill="currentColor" />
  </svg>
);

/** Trash/Delete icon */
export const TrashIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 6V4C8 3.45 8.45 3 9 3H15C15.55 3 16 3.45 16 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 6L7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20L18 6" fill="currentColor" opacity="0.3" />
    <path d="M6 6L7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <line x1="10" y1="10" x2="10" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="14" y1="10" x2="14" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/** Warning/Alert triangle icon */
export const WarningIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 2L2 20H22L12 2Z" fill="currentColor" opacity="0.2" />
    <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <line x1="12" y1="9" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

/** Phone/Mobile icon */
export const PhoneIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <rect x="5" y="1" width="14" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="5" y="1" width="14" height="22" rx="3" fill="currentColor" opacity="0.15" />
    <line x1="5" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="1" />
    <line x1="5" y1="19" x2="19" y2="19" stroke="currentColor" strokeWidth="1" />
    <circle cx="12" cy="21" r="0.8" fill="currentColor" />
    <rect x="9" y="2.5" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
  </svg>
);

/** Speaker/Audio icon */
export const SpeakerIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor" />
    <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor" opacity="0.4" />
    <path d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.33 16.48 14.6 15.54 15.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M18.07 5.93C19.78 7.64 20.75 9.88 20.75 12.21C20.75 14.54 19.78 16.78 18.07 18.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

/** Diamond icon — for NFT/premium */
export const DiamondIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 22L2 9L5.5 3H18.5L22 9L12 22Z" fill="currentColor" />
    <path d="M2 9H22L12 22L2 9Z" fill="currentColor" opacity="0.7" />
    <path d="M5.5 3L9 9H2L5.5 3Z" fill="currentColor" opacity="0.5" />
    <path d="M18.5 3L22 9H15L18.5 3Z" fill="currentColor" opacity="0.5" />
    <path d="M9 9L12 3L15 9L12 22L9 9Z" fill="currentColor" opacity="0.3" />
  </svg>
);

/** Map/Compass icon — for stellar map */
export const MapIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="9.5" fill="currentColor" opacity="0.1" />
    <polygon points="12,4 14.5,10 12,8.5 9.5,10" fill="currentColor" />
    <polygon points="12,20 9.5,14 12,15.5 14.5,14" fill="currentColor" opacity="0.5" />
    <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** Planet icons for map grid */
export const PlanetIcon: React.FC<IconProps & { variant?: number }> = ({ className, style, variant = 0 }) => {
  const variants = [
    // Dark moon
    <svg key={0} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="14" cy="10" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.2" />
    </svg>,
    // Star burst
    <svg key={1} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M12 3L13.5 9.5L20 8L15 12L20 16L13.5 14.5L12 21L10.5 14.5L4 16L9 12L4 8L10.5 9.5L12 3Z" fill="currentColor" />
    </svg>,
    // Spiral galaxy
    <svg key={2} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 6C16 6 18 8 18 12C18 14 16 15 14 14C12 13 13 11 14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 18C8 18 6 16 6 12C6 10 8 9 10 10C12 11 11 13 10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>,
    // Explosion/nova
    <svg key={3} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180;
        return <line key={angle} x1={12 + 4 * Math.cos(rad)} y1={12 + 4 * Math.sin(rad)} x2={12 + 8 * Math.cos(rad)} y2={12 + 8 * Math.sin(rad)} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />;
      })}
    </svg>,
    // Nebula
    <svg key={4} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <ellipse cx="12" cy="12" rx="9" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-20 12 12)" />
      <ellipse cx="12" cy="12" rx="7" ry="3" fill="currentColor" opacity="0.4" transform="rotate(15 12 12)" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.8" />
    </svg>,
    // Ringed planet
    <svg key={5} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.7" />
      <ellipse cx="12" cy="12" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(-25 12 12)" />
    </svg>,
    // Comet
    <svg key={6} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="16" cy="8" r="3" fill="currentColor" />
      <path d="M14 10C10 14 6 16 3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M13 9C9 12 5 14 2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>,
    // 4-pointed star
    <svg key={7} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="currentColor" />
    </svg>,
    // Bullseye
    <svg key={8} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>,
    // Triangle/prism
    <svg key={9} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M12 3L21 20H3L12 3Z" fill="currentColor" opacity="0.5" />
      <path d="M12 3L21 20H3L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M12 8L17 18H7L12 8Z" fill="currentColor" opacity="0.3" />
    </svg>,
  ];
  return variants[variant % variants.length];
};
