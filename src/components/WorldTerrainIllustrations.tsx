import React from 'react';

export const TerrainIllustration: React.FC<{ worldId: string }> = ({ worldId }) => {
  switch (worldId) {
    case 'techlab':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ruinStone" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(30, 20%, 22%)" />
              <stop offset="100%" stopColor="hsl(35, 28%, 42%)" />
            </linearGradient>
            <linearGradient id="runeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(45, 95%, 65%)" />
              <stop offset="50%" stopColor="hsl(38, 85%, 55%)" />
              <stop offset="100%" stopColor="hsl(25, 90%, 48%)" />
            </linearGradient>
            <radialGradient id="runeAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(40, 95%, 58%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(30, 70%, 40%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="skyAmber" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 60%, 45%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(25, 40%, 15%)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(35, 100%, 65%)" stopOpacity="0.8" />
              <stop offset="40%" stopColor="hsl(30, 90%, 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(25, 80%, 40%)" stopOpacity="0" />
            </radialGradient>
            <filter id="runeFilter">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="stoneTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
            <filter id="warmGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feColorMatrix type="matrix" values="1.2 0 0 0 0  0 0.9 0 0 0  0 0 0.6 0 0  0 0 0 1 0" in="blur" result="warm" />
              <feMerge>
                <feMergeNode in="warm" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Warm sky gradient */}
          <rect x="0" y="0" width="100" height="50" fill="url(#skyAmber)" />

          {/* Background mountain silhouettes */}
          <polygon points="0,60 18,28 36,60" fill="hsl(30, 15%, 18%)" opacity="0.35" />
          <polygon points="20,60 42,22 64,60" fill="hsl(28, 12%, 15%)" opacity="0.25" />
          <polygon points="55,60 78,30 100,60" fill="hsl(32, 14%, 17%)" opacity="0.3" />

          {/* Large crumbling temple structure - center */}
          <rect x="35" y="42" width="7" height="53" rx="1" fill="url(#ruinStone)" opacity="0.75" />
          <rect x="34" y="39" width="9" height="4" fill="hsl(30, 18%, 32%)" opacity="0.6" />
          <rect x="33" y="37" width="11" height="3" fill="hsl(30, 16%, 28%)" opacity="0.5" />
          <rect x="58" y="42" width="7" height="53" rx="1" fill="url(#ruinStone)" opacity="0.75" />
          <rect x="57" y="39" width="9" height="4" fill="hsl(30, 18%, 32%)" opacity="0.6" />
          <rect x="56" y="37" width="11" height="3" fill="hsl(30, 16%, 28%)" opacity="0.5" />
          
          {/* Grand archway */}
          <path d="M42,95 L42,48 Q50,32 58,48 L58,95" fill="none" stroke="url(#ruinStone)" strokeWidth="3.5" opacity="0.6" />
          <path d="M44,95 L44,50 Q50,36 56,50 L56,95" fill="none" stroke="hsl(35, 22%, 35%)" strokeWidth="1.5" opacity="0.35" />
          {/* Keystone */}
          <polygon points="48,35 50,30 52,35" fill="hsl(40, 30%, 40%)" opacity="0.5" />

          {/* Side ruins - left */}
          <rect x="6" y="55" width="6" height="40" rx="1" fill="url(#ruinStone)" opacity="0.65" />
          <rect x="5" y="52" width="8" height="4" fill="hsl(30, 15%, 30%)" opacity="0.5" />
          <rect x="4" y="50" width="10" height="3" fill="hsl(28, 14%, 28%)" opacity="0.45" />
          {/* Broken top */}
          <polygon points="6,55 9,48 12,55" fill="hsl(32, 18%, 30%)" opacity="0.3" />

          <rect x="18" y="62" width="5" height="33" rx="1" fill="url(#ruinStone)" opacity="0.55" />
          <rect x="17" y="59" width="7" height="3" fill="hsl(30, 15%, 28%)" opacity="0.45" />
          {/* Toppled section */}
          <rect x="20" y="80" width="12" height="3" rx="1" fill="hsl(30, 18%, 30%)" opacity="0.3" transform="rotate(-25 26 81.5)" />

          {/* Side ruins - right */}
          <rect x="80" y="48" width="7" height="47" rx="1" fill="url(#ruinStone)" opacity="0.7" />
          <rect x="79" y="45" width="9" height="4" fill="hsl(30, 15%, 30%)" opacity="0.55" />
          <rect x="78" y="43" width="11" height="3" fill="hsl(28, 14%, 28%)" opacity="0.45" />
          
          <rect x="92" y="58" width="5" height="37" rx="1" fill="url(#ruinStone)" opacity="0.5" />
          <rect x="91" y="55" width="7" height="3" fill="hsl(30, 15%, 28%)" opacity="0.4" />

          {/* Fallen pillar fragments on ground */}
          <rect x="24" y="90" width="8" height="3" rx="1" fill="hsl(30, 18%, 28%)" opacity="0.35" transform="rotate(-12 28 91.5)" />
          <rect x="70" y="92" width="6" height="2.5" rx="0.5" fill="hsl(30, 16%, 26%)" opacity="0.3" transform="rotate(8 73 93.25)" />
          <ellipse cx="46" cy="94" rx="3" ry="1.5" fill="hsl(30, 12%, 24%)" opacity="0.25" />

          {/* Torch flames on pillars */}
          <g filter="url(#warmGlow)">
            <ellipse cx="9" cy="52" rx="2.5" ry="4" fill="url(#torchGlow)" opacity="0.7">
              <animate attributeName="ry" values="4;5;3.5;4" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0.5;0.8;0.7" dur="1.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="84" cy="45" rx="2.5" ry="4" fill="url(#torchGlow)" opacity="0.65">
              <animate attributeName="ry" values="3.5;4.5;3;3.5" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.65;0.45;0.75;0.65" dur="1.8s" repeatCount="indefinite" />
            </ellipse>
          </g>

          {/* Glowing runes on pillars */}
          <circle cx="38" cy="60" r="2" fill="url(#runeAura)" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.8;0.25;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="62" cy="58" r="2" fill="url(#runeAura)" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="38" r="2.5" fill="url(#runeAura)" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.9;0.35;0.9" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="9" cy="68" r="1.5" fill="url(#runeAura)" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="83" cy="62" r="1.5" fill="url(#runeAura)" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.55;0.18;0.55" dur="3.8s" repeatCount="indefinite" />
          </circle>

          {/* Rune symbols carved into stone */}
          <path d="M37,66 L39,63 L37,60" fill="none" stroke="url(#runeGlow)" strokeWidth="0.5" opacity="0.6" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M61,64 L63,62 L61,60 M62,64 L62,60" fill="none" stroke="url(#runeGlow)" strokeWidth="0.5" opacity="0.5" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.5;0.12;0.5" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M49,44 L51,42 L49,40 L51,40" fill="none" stroke="url(#runeGlow)" strokeWidth="0.6" opacity="0.7" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.7;0.25;0.7" dur="2s" repeatCount="indefinite" />
          </path>
          {/* Additional rune marks */}
          <path d="M8,72 L10,70 L8,68 L10,66" fill="none" stroke="url(#runeGlow)" strokeWidth="0.4" opacity="0.4" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4.5s" repeatCount="indefinite" />
          </path>
          <path d="M82,68 L84,66 L82,64" fill="none" stroke="url(#runeGlow)" strokeWidth="0.4" opacity="0.45" filter="url(#runeFilter)">
            <animate attributeName="opacity" values="0.45;0.12;0.45" dur="3.2s" repeatCount="indefinite" />
          </path>

          {/* Moss and vine tendrils - more elaborate */}
          <path d="M13,55 Q16,60 14,68 Q12,74 16,80 Q14,85 17,90" fill="none" stroke="hsl(120, 35%, 32%)" strokeWidth="0.6" opacity="0.4" />
          <path d="M14,65 Q18,62 17,58" fill="none" stroke="hsl(125, 30%, 35%)" strokeWidth="0.4" opacity="0.3" />
          <path d="M23,59 Q26,65 24,72 Q22,78 25,84" fill="none" stroke="hsl(130, 28%, 30%)" strokeWidth="0.5" opacity="0.35" />
          <path d="M80,43 Q78,50 79,58 Q77,64 80,70" fill="none" stroke="hsl(120, 32%, 33%)" strokeWidth="0.5" opacity="0.35" />
          <path d="M65,48 Q67,55 66,62" fill="none" stroke="hsl(125, 25%, 30%)" strokeWidth="0.4" opacity="0.28" />
          {/* Leaf clusters */}
          <circle cx="16" cy="80" r="1.2" fill="hsl(115, 35%, 30%)" opacity="0.25" />
          <circle cx="24" cy="72" r="1" fill="hsl(120, 30%, 32%)" opacity="0.2" />
          <circle cx="79" cy="58" r="1.1" fill="hsl(118, 32%, 28%)" opacity="0.22" />

          {/* Floating dust/light particles - more */}
          {[[20,38,0.7,5],[55,28,0.6,4],[75,32,0.8,6],[40,22,0.5,3.5],[15,25,0.4,4.5],[85,20,0.5,5.5],[50,15,0.6,3.8],[65,42,0.4,4.2],[30,45,0.5,5.2]].map(([cx,cy,r,dur], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={`hsl(${35 + i * 3}, ${60 + i * 5}%, ${55 + i * 3}%)`} opacity={0.4 - i * 0.03}>
              <animate attributeName="cy" values={`${cy};${(cy as number) - 8 - i};${cy}`} dur={`${dur}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${0.4 - i * 0.03};0.08;${0.4 - i * 0.03}`} dur={`${dur}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Scattered stone debris */}
          <rect x="15" y="91" width="4" height="3" rx="0.5" fill="hsl(30, 15%, 28%)" opacity="0.4" transform="rotate(-15 17 92.5)" />
          <rect x="45" y="93" width="3" height="2" rx="0.5" fill="hsl(30, 15%, 26%)" opacity="0.35" transform="rotate(10 46.5 94)" />
          <rect x="72" y="92" width="5" height="2.5" rx="0.5" fill="hsl(30, 15%, 30%)" opacity="0.3" transform="rotate(-8 74.5 93.25)" />
          <polygon points="52,94 54,92 56,94" fill="hsl(28, 14%, 25%)" opacity="0.2" />
          <polygon points="35,93 36,91 37.5,93" fill="hsl(32, 12%, 27%)" opacity="0.2" />

          {/* Ancient ground cracks */}
          <path d="M0,95 Q15,91 30,95 Q50,90 70,95 Q85,92 100,95" fill="none" stroke="hsl(30, 20%, 28%)" strokeWidth="0.6" opacity="0.3" />
          <path d="M25,98 L30,90 L27,82" fill="none" stroke="hsl(35, 15%, 25%)" strokeWidth="0.3" opacity="0.2" />
          <path d="M68,97 L72,89 L69,82" fill="none" stroke="hsl(35, 15%, 25%)" strokeWidth="0.3" opacity="0.2" />
          <path d="M48,96 L50,92 L52,88" fill="none" stroke="hsl(33, 13%, 24%)" strokeWidth="0.25" opacity="0.15" />
        </svg>
      );
    case 'sunken-temple':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="templeStone" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(195, 25%, 18%)" />
              <stop offset="100%" stopColor="hsl(190, 32%, 38%)" />
            </linearGradient>
            <linearGradient id="coralGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(350, 55%, 38%)" />
              <stop offset="100%" stopColor="hsl(10, 65%, 55%)" />
            </linearGradient>
            <linearGradient id="deepWater" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(195, 70%, 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(210, 60%, 15%)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="causticLight" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="hsl(190, 85%, 68%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(200, 60%, 40%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bioGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(174, 90%, 55%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(180, 70%, 40%)" stopOpacity="0" />
            </radialGradient>
            <filter id="waterBlur">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="deepGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix type="matrix" values="0.8 0 0 0 0  0 1.1 0 0 0.05  0 0 1.3 0 0.1  0 0 0 1 0" in="blur" result="colored" />
              <feMerge><feMergeNode in="colored" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="waterDistort">
              <feTurbulence type="turbulence" baseFrequency="0.03 0.06" numOctaves="2" result="turbulence">
                <animate attributeName="baseFrequency" values="0.03 0.06;0.04 0.08;0.03 0.06" dur="8s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" />
            </filter>
          </defs>

          {/* Deep water gradient */}
          <rect x="0" y="0" width="100" height="100" fill="url(#deepWater)" />

          {/* Caustic light beams from surface */}
          <rect x="0" y="0" width="100" height="45" fill="url(#causticLight)" opacity="0.5" />
          {[[12,0,18,28,4],[38,0,44,35,5],[62,0,68,30,3.5],[82,0,86,22,4.5],[25,0,30,20,6]].map(([x1,y1,x2,y2,dur], i) => (
            <polygon key={i} points={`${x1},${y1} ${(x1+x2)/2},${y2} ${x2},${y1}`} fill="hsl(190, 75%, 62%)" opacity="0.06">
              <animate attributeName="opacity" values="0.04;0.12;0.04" dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </polygon>
          ))}

          {/* Grand sunken temple */}
          <rect x="32" y="48" width="7" height="47" rx="1" fill="url(#templeStone)" opacity="0.65" />
          <rect x="31" y="45" width="9" height="4" fill="hsl(190, 22%, 28%)" opacity="0.55" />
          <rect x="61" y="48" width="7" height="47" rx="1" fill="url(#templeStone)" opacity="0.65" />
          <rect x="60" y="45" width="9" height="4" fill="hsl(190, 22%, 28%)" opacity="0.55" />
          {/* Grand archway */}
          <path d="M39,95 L39,54 Q50,40 61,54 L61,95" fill="none" stroke="url(#templeStone)" strokeWidth="3" opacity="0.5" />
          {/* Pediment */}
          <polygon points="28,45 50,28 72,45" fill="none" stroke="hsl(190, 28%, 38%)" strokeWidth="2" opacity="0.4" />
          <polygon points="32,45 50,32 68,45" fill="none" stroke="hsl(190, 25%, 32%)" strokeWidth="0.8" opacity="0.25" />
          {/* Trident symbol in pediment */}
          <path d="M50,34 L50,42 M47,36 L50,34 L53,36 M46,35 L46,37 M54,35 L54,37" fill="none" stroke="hsl(174, 80%, 55%)" strokeWidth="0.5" opacity="0.4" filter="url(#waterBlur)">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
          </path>

          {/* Glowing eye/orb in archway */}
          <circle cx="50" cy="62" r="4" fill="hsl(174, 85%, 50%)" opacity="0.25" filter="url(#deepGlow)">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;5;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="62" r="2" fill="hsl(174, 95%, 65%)" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="62" r="0.8" fill="hsl(180, 100%, 80%)" opacity="0.7">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Broken pillars */}
          <rect x="8" y="65" width="6" height="30" rx="1" fill="url(#templeStone)" opacity="0.5" />
          <rect x="7" y="62" width="8" height="3" fill="hsl(190, 20%, 28%)" opacity="0.4" />
          <rect x="86" y="60" width="6" height="35" rx="1" fill="url(#templeStone)" opacity="0.45" />
          <rect x="85" y="57" width="8" height="3" fill="hsl(190, 20%, 28%)" opacity="0.4" />
          {/* Toppled pillar fragment */}
          <rect x="15" y="85" width="10" height="3" rx="0.5" fill="url(#templeStone)" opacity="0.3" transform="rotate(-20 20 86.5)" />

          {/* Elaborate coral formations */}
          <g filter="url(#waterDistort)">
            <path d="M3,95 Q6,78 4,65 Q8,58 5,48 Q9,42 7,35" fill="none" stroke="url(#coralGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M5,70 Q10,65 8,58" fill="none" stroke="hsl(5, 55%, 52%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
            <path d="M6,55 Q12,50 9,44" fill="none" stroke="hsl(350, 50%, 45%)" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
            <path d="M94,95 Q91,80 94,68 Q89,62 92,52 Q88,46 91,38" fill="none" stroke="url(#coralGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
            <path d="M92,72 Q86,66 89,58" fill="none" stroke="hsl(350, 52%, 48%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
            <path d="M91,58 Q85,52 88,45" fill="none" stroke="hsl(8, 55%, 50%)" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
          </g>
          {/* Coral polyps (bioluminescent dots) */}
          {[[5,48,1],[7,35,0.8],[9,42,0.6],[94,52,0.9],[91,38,0.7],[89,46,0.6]].map(([cx,cy,r], i) => (
            <circle key={`polyp-${i}`} cx={cx} cy={cy} r={r} fill="hsl(174, 80%, 60%)" opacity="0.4" filter="url(#waterBlur)">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Swaying seaweed - more elaborate */}
          <path d="M18,95 Q15,82 20,72 Q16,62 22,52 Q18,44 24,38" fill="none" stroke="hsl(140, 42%, 32%)" strokeWidth="1" strokeLinecap="round" opacity="0.4">
            <animate attributeName="d" values="M18,95 Q15,82 20,72 Q16,62 22,52 Q18,44 24,38;M18,95 Q21,82 16,72 Q20,62 16,52 Q20,44 18,38;M18,95 Q15,82 20,72 Q16,62 22,52 Q18,44 24,38" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M22,95 Q19,85 24,78 Q20,72 25,65" fill="none" stroke="hsl(135, 38%, 28%)" strokeWidth="0.7" strokeLinecap="round" opacity="0.3">
            <animate attributeName="d" values="M22,95 Q19,85 24,78 Q20,72 25,65;M22,95 Q25,85 20,78 Q24,72 19,65;M22,95 Q19,85 24,78 Q20,72 25,65" dur="4.5s" repeatCount="indefinite" />
          </path>
          <path d="M76,95 Q73,86 78,78 Q74,70 79,62" fill="none" stroke="hsl(145, 38%, 30%)" strokeWidth="0.8" strokeLinecap="round" opacity="0.35">
            <animate attributeName="d" values="M76,95 Q73,86 78,78 Q74,70 79,62;M76,95 Q79,86 74,78 Q78,70 73,62;M76,95 Q73,86 78,78 Q74,70 79,62" dur="5.5s" repeatCount="indefinite" />
          </path>

          {/* Jellyfish */}
          <g opacity="0.3">
            <animateTransform attributeName="transform" type="translate" values="0,0;3,-8;0,0" dur="8s" repeatCount="indefinite" />
            <ellipse cx="28" cy="25" rx="3" ry="2" fill="hsl(280, 60%, 65%)" opacity="0.4" />
            <path d="M25,27 Q26,32 25,35" fill="none" stroke="hsl(280, 50%, 60%)" strokeWidth="0.3" opacity="0.3" />
            <path d="M28,27 Q28,33 27,36" fill="none" stroke="hsl(290, 55%, 62%)" strokeWidth="0.3" opacity="0.3" />
            <path d="M31,27 Q30,32 31,35" fill="none" stroke="hsl(275, 50%, 58%)" strokeWidth="0.3" opacity="0.3" />
          </g>
          <g opacity="0.25">
            <animateTransform attributeName="transform" type="translate" values="0,0;-4,-5;0,0" dur="10s" repeatCount="indefinite" />
            <ellipse cx="72" cy="35" rx="2.5" ry="1.5" fill="hsl(300, 55%, 60%)" opacity="0.35" />
            <path d="M70,37 Q70.5,41 70,44" fill="none" stroke="hsl(295, 50%, 55%)" strokeWidth="0.25" opacity="0.25" />
            <path d="M72,37 Q72,42 71.5,45" fill="none" stroke="hsl(300, 55%, 58%)" strokeWidth="0.25" opacity="0.25" />
            <path d="M74,37 Q73.5,41 74,44" fill="none" stroke="hsl(285, 50%, 55%)" strokeWidth="0.25" opacity="0.25" />
          </g>

          {/* Rising bubbles - more varied */}
          {[[18,75,2.2,4.5],[42,85,1.5,5.5],[65,78,2.8,6],[82,88,1.2,3.8],[28,65,1.8,5],[55,72,2,4.2],[90,70,1.4,6.5],[35,58,1,3.5],[72,82,1.6,4.8]].map(([cx,cy,r,dur], i) => (
            <circle key={`bub-${i}`} cx={cx} cy={cy} r={r} fill="none" stroke="hsl(190, 72%, 68%)" strokeWidth="0.4" opacity={0.45 - i * 0.03}>
              <animate attributeName="cy" values={`${cy};${(cy as number) - 55};${cy}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values={`${0.45 - i * 0.03};0.05;${0.45 - i * 0.03}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="r" values={`${r};${(r as number) + 0.8};${r}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          ))}

          {/* Sandy floor with scattered artifacts */}
          <path d="M0,95 Q12,91 25,95 Q40,92 55,95 Q70,91 85,95 Q92,93 100,95" fill="none" stroke="hsl(40, 32%, 32%)" strokeWidth="0.7" opacity="0.3" />
          <rect x="42" y="92" width="4" height="2" rx="0.5" fill="hsl(190, 20%, 26%)" opacity="0.25" transform="rotate(-12 44 93)" />
          <circle cx="58" cy="93" r="1.5" fill="hsl(45, 40%, 35%)" opacity="0.2" />

          {/* Floating particles / plankton */}
          {[[25,40,0.5,3],[65,28,0.4,4],[80,42,0.6,3.5],[12,35,0.35,4.5],[48,18,0.45,3.8]].map(([cx,cy,r,dur], i) => (
            <circle key={`plank-${i}`} cx={cx} cy={cy} r={r} fill={`hsl(${174 + i * 4}, ${65 + i * 5}%, ${58 + i * 3}%)`} opacity={0.3 - i * 0.03}>
              <animate attributeName="cy" values={`${cy};${(cy as number) - 5};${cy}`} dur={`${dur}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      );
    case 'sky-fortress':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-32 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="skyGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(43, 96%, 72%)" />
              <stop offset="100%" stopColor="hsl(43, 82%, 48%)" />
            </linearGradient>
            <linearGradient id="islandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(199, 62%, 52%)" />
              <stop offset="100%" stopColor="hsl(220, 42%, 28%)" />
            </linearGradient>
            <linearGradient id="skyDusk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 85%, 65%)" stopOpacity="0.12" />
              <stop offset="50%" stopColor="hsl(210, 60%, 55%)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="hsl(220, 50%, 30%)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="75%" cy="15%" r="40%">
              <stop offset="0%" stopColor="hsl(40, 100%, 75%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(35, 80%, 50%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="chainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 40%, 50%)" />
              <stop offset="100%" stopColor="hsl(30, 30%, 35%)" />
            </linearGradient>
            <filter id="skyBloom">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feColorMatrix type="matrix" values="1.1 0 0 0 0.05  0 1 0 0 0.03  0 0 0.8 0 0  0 0 0 1 0" in="blur" result="warm" />
              <feMerge><feMergeNode in="warm" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="gearShadow">
              <feGaussianBlur stdDeviation="0.8" />
            </filter>
          </defs>

          {/* Sunset sky */}
          <rect x="0" y="0" width="100" height="100" fill="url(#skyDusk)" />
          <circle cx="80" cy="12" r="20" fill="url(#sunGlow)" />

          {/* Background cloud layers */}
          <ellipse cx="10" cy="88" rx="25" ry="5" fill="hsl(210, 55%, 82%)" opacity="0.2">
            <animate attributeName="cx" values="10;22;10" dur="14s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="80" cy="18" rx="20" ry="4" fill="hsl(35, 60%, 80%)" opacity="0.15">
            <animate attributeName="cx" values="80;68;80" dur="16s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="95" rx="30" ry="5" fill="hsl(215, 50%, 78%)" opacity="0.2">
            <animate attributeName="cx" values="50;60;50" dur="12s" repeatCount="indefinite" />
          </ellipse>

          {/* Floating island 1 (left) - with fortress tower */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-3.5;0,0" dur="5.5s" repeatCount="indefinite" />
            <path d="M8,68 Q16,58 28,65 Q26,75 14,76 Q10,74 8,68Z" fill="url(#islandGrad)" opacity="0.6" />
            <path d="M10,72 Q14,74 22,72" fill="none" stroke="hsl(30, 30%, 40%)" strokeWidth="0.3" opacity="0.3" />
            {/* Tower */}
            <rect x="15" y="50" width="5" height="18" fill="hsl(200, 30%, 40%)" opacity="0.6" />
            <rect x="14" y="48" width="7" height="3" fill="hsl(195, 25%, 35%)" opacity="0.5" />
            <polygon points="14,48 17.5,40 21,48" fill="hsl(200, 30%, 45%)" opacity="0.5" />
            {/* Golden spire */}
            <polygon points="17,40 16,33 18.5,33" fill="url(#skyGold)" opacity="0.85" />
            <circle cx="17.5" cy="32" r="1.8" fill="hsl(43, 96%, 78%)" opacity="0.9" filter="url(#skyBloom)">
              <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Cloud wisp */}
            <ellipse cx="12" cy="66" rx="6" ry="2" fill="hsl(199, 89%, 88%)" opacity="0.3" />
            {/* Hanging chains */}
            <path d="M12,76 L10,85" fill="none" stroke="url(#chainGrad)" strokeWidth="0.5" opacity="0.3" strokeDasharray="1 1" />
            <path d="M24,74 L26,82" fill="none" stroke="url(#chainGrad)" strokeWidth="0.5" opacity="0.25" strokeDasharray="1 1" />
          </g>

          {/* Floating island 2 (center, largest) - main fortress */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-4.5;0,0" dur="7s" repeatCount="indefinite" />
            <path d="M36,52 Q50,38 64,52 Q60,64 42,64 Q38,60 36,52Z" fill="url(#islandGrad)" opacity="0.55" />
            <path d="M40,58 Q50,60 58,56" fill="none" stroke="hsl(30, 30%, 40%)" strokeWidth="0.3" opacity="0.25" />
            {/* Twin towers */}
            <rect x="42" y="32" width="5" height="20" fill="hsl(200, 32%, 42%)" opacity="0.6" />
            <rect x="53" y="34" width="5" height="18" fill="hsl(200, 32%, 42%)" opacity="0.55" />
            <polygon points="42,32 44.5,24 47,32" fill="url(#skyGold)" opacity="0.7" />
            <polygon points="53,34 55.5,27 58,34" fill="url(#skyGold)" opacity="0.65" />
            {/* Golden beacon lights */}
            <circle cx="44.5" cy="23" r="1.5" fill="hsl(43, 96%, 82%)" opacity="0.85" filter="url(#skyBloom)">
              <animate attributeName="opacity" values="0.85;0.35;0.85" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="55.5" cy="26" r="1.2" fill="hsl(43, 96%, 82%)" opacity="0.75" filter="url(#skyBloom)">
              <animate attributeName="opacity" values="0.75;0.3;0.75" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Connecting bridge */}
            <line x1="47" y1="38" x2="53" y2="38" stroke="hsl(200, 28%, 38%)" strokeWidth="0.8" opacity="0.4" />
            {/* Gear mechanism */}
            <circle cx="50" cy="38" r="2.5" fill="none" stroke="hsl(35, 50%, 50%)" strokeWidth="0.5" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0 50 38" to="360 50 38" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="38" r="1.5" fill="none" stroke="hsl(35, 45%, 45%)" strokeWidth="0.4" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="360 50 38" to="0 50 38" dur="5s" repeatCount="indefinite" />
            </circle>
            {/* Waterfall */}
            <line x1="50" y1="58" x2="50" y2="80" stroke="hsl(199, 89%, 72%)" strokeWidth="0.8" opacity="0.2">
              <animate attributeName="opacity" values="0.15;0.3;0.15" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="68" x2="49" y2="80" stroke="hsl(199, 89%, 78%)" strokeWidth="0.4" opacity="0.12">
              <animate attributeName="opacity" values="0.08;0.18;0.08" dur="1.8s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Floating island 3 (right) */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="5s" repeatCount="indefinite" />
            <path d="M72,58 Q82,48 92,58 Q88,66 76,66 Q73,64 72,58Z" fill="url(#islandGrad)" opacity="0.5" />
            {/* Watchtower */}
            <rect x="79" y="40" width="4.5" height="18" fill="hsl(200, 30%, 40%)" opacity="0.55" />
            <polygon points="79,40 81.25,32 83.5,40" fill="url(#skyGold)" opacity="0.75" />
            <circle cx="81.25" cy="31" r="1.4" fill="hsl(43, 96%, 78%)" opacity="0.85" filter="url(#skyBloom)">
              <animate attributeName="opacity" values="0.85;0.35;0.85" dur="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Flag */}
            <line x1="81.25" y1="32" x2="81.25" y2="26" stroke="hsl(35, 40%, 45%)" strokeWidth="0.3" opacity="0.5" />
            <polygon points="81.25,26 86,27.5 81.25,29" fill="hsl(0, 65%, 50%)" opacity="0.4">
              <animate attributeName="points" values="81.25,26 86,27.5 81.25,29;81.25,26 85,28 81.25,29.5;81.25,26 86,27.5 81.25,29" dur="3s" repeatCount="indefinite" />
            </polygon>
            <ellipse cx="75" cy="56" rx="5" ry="1.5" fill="hsl(199, 89%, 85%)" opacity="0.25" />
          </g>

          {/* Chains connecting islands */}
          <path d="M28,68 Q38,72 40,62" fill="none" stroke="url(#chainGrad)" strokeWidth="0.6" opacity="0.2" strokeDasharray="1.5 1" />
          <path d="M62,56 Q68,62 74,60" fill="none" stroke="url(#chainGrad)" strokeWidth="0.6" opacity="0.2" strokeDasharray="1.5 1" />

          {/* Front clouds */}
          <ellipse cx="30" cy="82" rx="16" ry="3.5" fill="hsl(199, 89%, 88%)" opacity="0.22">
            <animate attributeName="cx" values="30;42;30" dur="10s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="70" cy="75" rx="12" ry="3" fill="hsl(199, 89%, 82%)" opacity="0.18">
            <animate attributeName="cx" values="70;58;70" dur="8s" repeatCount="indefinite" />
          </ellipse>

          {/* Wind particles / sparkles */}
          {[[28,32,0.7,3.5],[68,22,0.5,4.5],[88,42,0.6,3],[15,45,0.4,5],[45,18,0.55,4],[55,70,0.5,3.8]].map(([cx,cy,r,dur], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={`hsl(43, 96%, ${82 + i * 2}%)`} opacity={0.45 - i * 0.05}>
              <animate attributeName="cy" values={`${cy};${(cy as number) - 6};${cy}`} dur={`${dur}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${0.45 - i * 0.05};0.08;${0.45 - i * 0.05}`} dur={`${dur}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Birds silhouettes */}
          <path d="M22,15 Q24,13 26,15 Q28,13 30,15" fill="none" stroke="hsl(220, 30%, 35%)" strokeWidth="0.4" opacity="0.2">
            <animateTransform attributeName="transform" type="translate" values="0,0;5,1;10,0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M62,8 Q63.5,6.5 65,8 Q66.5,6.5 68,8" fill="none" stroke="hsl(220, 30%, 35%)" strokeWidth="0.35" opacity="0.15">
            <animateTransform attributeName="transform" type="translate" values="0,0;-4,1;-8,0;0,0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      );
    case 'volcanic-core':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-32 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lavaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(15, 92%, 48%)" />
              <stop offset="50%" stopColor="hsl(35, 100%, 62%)" />
              <stop offset="100%" stopColor="hsl(15, 92%, 48%)" />
            </linearGradient>
            <linearGradient id="obsidianGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 0%, 12%)" />
              <stop offset="100%" stopColor="hsl(0, 0%, 28%)" />
            </linearGradient>
            <linearGradient id="volcanoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 0%, 18%)" />
              <stop offset="60%" stopColor="hsl(10, 32%, 22%)" />
              <stop offset="100%" stopColor="hsl(15, 52%, 28%)" />
            </linearGradient>
            <radialGradient id="lavaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(35, 100%, 62%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(15, 90%, 38%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="craterGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="hsl(30, 100%, 65%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(10, 80%, 30%)" stopOpacity="0" />
            </radialGradient>
            <filter id="heatHaze">
              <feTurbulence type="turbulence" baseFrequency="0.02 0.05" numOctaves="2" result="turb">
                <animate attributeName="baseFrequency" values="0.02 0.05;0.03 0.07;0.02 0.05" dur="5s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="turb" scale="2.5" />
            </filter>
            <filter id="fireGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix type="matrix" values="1.3 0 0 0 0.1  0 0.8 0 0 0  0 0 0.5 0 0  0 0 0 1 0" in="blur" result="fire" />
              <feMerge><feMergeNode in="fire" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Background heat/sky glow */}
          <rect x="0" y="0" width="100" height="50" fill="url(#craterGlow)" />

          {/* Volcano silhouette - more detailed */}
          <polygon points="30,95 50,22 70,95" fill="url(#volcanoGrad)" opacity="0.75" />
          <polygon points="35,95 50,30 65,95" fill="hsl(0, 0%, 16%)" opacity="0.5" />
          {/* Ridge detail */}
          <path d="M38,65 Q44,60 50,55 Q56,60 62,65" fill="none" stroke="hsl(10, 20%, 25%)" strokeWidth="0.5" opacity="0.3" />
          <path d="M34,80 Q42,75 50,70 Q58,75 66,80" fill="none" stroke="hsl(10, 18%, 22%)" strokeWidth="0.4" opacity="0.2" />

          {/* Crater with bubbling lava */}
          <ellipse cx="50" cy="26" rx="7" ry="3" fill="hsl(25, 98%, 55%)" opacity="0.55">
            <animate attributeName="opacity" values="0.45;0.75;0.45" dur="2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="26" rx="4" ry="2" fill="hsl(40, 100%, 65%)" opacity="0.6">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="20" rx="10" ry="5" fill="url(#lavaGlow)" opacity="0.45" filter="url(#fireGlow)">
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="2.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Eruption projectiles - multiple */}
          {[[48,24,1.3,2.5,-8,42],[52,22,1,3,10,60],[50,26,0.8,2,-3,50],[46,25,0.7,3.5,-12,38],[54,23,0.9,2.8,8,56]].map(([cx,cy,r,dur,dx,hue], i) => (
            <circle key={`erupt-${i}`} cx={cx} cy={cy} r={r} fill={`hsl(${hue}, 100%, 58%)`} opacity="0.8" filter="url(#fireGlow)">
              <animate attributeName="cy" values={`${cy};${(cy as number) - 25 - i * 3};${cy}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
              <animate attributeName="cx" values={`${cx};${(cx as number) + (dx as number)};${cx}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
              <animate attributeName="opacity" values="0.8;0;0.8" dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
            </circle>
          ))}

          {/* Obsidian spires */}
          <polygon points="8,95 11,52 14,95" fill="url(#obsidianGrad)" opacity="0.65" />
          <polygon points="9,95 11,58 13,95" fill="hsl(0, 0%, 22%)" opacity="0.3" />
          <line x1="11" y1="62" x2="11" y2="68" stroke="hsl(0, 0%, 42%)" strokeWidth="0.3" opacity="0.4" />
          
          <polygon points="20,95 23,60 26,95" fill="url(#obsidianGrad)" opacity="0.55" />
          <polygon points="21,95 23,65 25,95" fill="hsl(0, 0%, 20%)" opacity="0.25" />
          
          <polygon points="76,95 79,48 82,95" fill="url(#obsidianGrad)" opacity="0.7" />
          <polygon points="77,95 79,54 81,95" fill="hsl(0, 0%, 22%)" opacity="0.3" />
          <line x1="79" y1="58" x2="79" y2="65" stroke="hsl(0, 0%, 42%)" strokeWidth="0.3" opacity="0.4" />
          
          <polygon points="86,95 89,62 92,95" fill="url(#obsidianGrad)" opacity="0.55" />
          <polygon points="87,95 89,67 91,95" fill="hsl(0, 0%, 20%)" opacity="0.25" />

          {/* Skull-like rock formation */}
          <ellipse cx="16" cy="78" rx="4" ry="3" fill="hsl(0, 5%, 22%)" opacity="0.35" />
          <circle cx="14.5" cy="77" r="0.8" fill="hsl(15, 90%, 50%)" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="17.5" cy="77" r="0.8" fill="hsl(15, 90%, 50%)" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Lava rivers - with heat distortion */}
          <g filter="url(#heatHaze)">
            <path d="M50,88 Q38,85 28,90 Q18,94 2,92" fill="none" stroke="url(#lavaGrad)" strokeWidth="2.5" opacity="0.5">
              <animate attributeName="d" values="M50,88 Q38,85 28,90 Q18,94 2,92;M50,88 Q38,90 28,86 Q18,90 2,92;M50,88 Q38,85 28,90 Q18,94 2,92" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M50,88 Q38,85 28,90 Q18,94 2,92" fill="none" stroke="hsl(48, 100%, 68%)" strokeWidth="0.8" opacity="0.3">
              <animate attributeName="d" values="M50,88 Q38,85 28,90 Q18,94 2,92;M50,88 Q38,90 28,86 Q18,90 2,92;M50,88 Q38,85 28,90 Q18,94 2,92" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M50,90 Q64,87 74,92 Q86,96 100,94" fill="none" stroke="url(#lavaGrad)" strokeWidth="2.2" opacity="0.45">
              <animate attributeName="d" values="M50,90 Q64,87 74,92 Q86,96 100,94;M50,90 Q64,93 74,88 Q86,92 100,94;M50,90 Q64,87 74,92 Q86,96 100,94" dur="3.5s" repeatCount="indefinite" />
            </path>
            <path d="M50,90 Q64,87 74,92 Q86,96 100,94" fill="none" stroke="hsl(48, 100%, 68%)" strokeWidth="0.6" opacity="0.25">
              <animate attributeName="d" values="M50,90 Q64,87 74,92 Q86,96 100,94;M50,90 Q64,93 74,88 Q86,92 100,94;M50,90 Q64,87 74,92 Q86,96 100,94" dur="3.5s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Lava pools */}
          <ellipse cx="18" cy="92" rx="9" ry="3.5" fill="hsl(25, 98%, 52%)" opacity="0.35">
            <animate attributeName="ry" values="3.5;4.5;3.5" dur="2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="84" cy="94" rx="11" ry="4" fill="hsl(15, 92%, 48%)" opacity="0.3">
            <animate attributeName="ry" values="4;5;4" dur="2.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Rising embers - many more */}
          {[[22,80,1.1,3,22,-3],[68,82,0.9,4,74,4],[42,78,0.7,2.8,42,0],[58,84,0.6,3.3,58,0],[12,85,0.5,4.5,10,-2],[88,80,0.8,3.8,90,2],[35,90,0.4,2.5,35,0],[75,88,0.5,3.2,75,0]].map(([cx,cy,r,dur,endCx,dCx], i) => (
            <circle key={`ember-${i}`} cx={cx} cy={cy} r={r} fill={`hsl(${25 + i * 4}, 100%, ${55 + i * 2}%)`} opacity={0.7 - i * 0.06}>
              <animate attributeName="cy" values={`${(cy as number) + 5};${(cy as number) - 65}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values={`${0.7 - i * 0.06};0`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="cx" values={`${cx};${endCx}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          ))}

          {/* Ground cracks with lava glow */}
          <path d="M6,98 L16,86 L12,75 L20,66" fill="none" stroke="hsl(15, 92%, 48%)" strokeWidth="0.5" opacity="0.3" />
          <path d="M62,99 L70,88 L66,78" fill="none" stroke="hsl(25, 98%, 52%)" strokeWidth="0.4" opacity="0.25" />
          <path d="M88,98 L83,88 L86,78" fill="none" stroke="hsl(15, 88%, 45%)" strokeWidth="0.4" opacity="0.2" />
          <path d="M40,97 L44,90 L42,84" fill="none" stroke="hsl(20, 90%, 48%)" strokeWidth="0.3" opacity="0.18" />

          {/* Smoke/ash clouds */}
          <ellipse cx="46" cy="18" rx="8" ry="4" fill="hsl(0, 0%, 38%)" opacity="0.15">
            <animate attributeName="cy" values="18;6;18" dur="6s" repeatCount="indefinite" />
            <animate attributeName="rx" values="8;14;8" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.04;0.15" dur="6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="55" cy="14" rx="6" ry="3" fill="hsl(0, 0%, 32%)" opacity="0.12">
            <animate attributeName="cy" values="14;3;14" dur="7s" repeatCount="indefinite" />
            <animate attributeName="rx" values="6;11;6" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.12;0.02;0.12" dur="7s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="10" rx="5" ry="2.5" fill="hsl(0, 0%, 28%)" opacity="0.08">
            <animate attributeName="cy" values="10;0;10" dur="8s" repeatCount="indefinite" />
            <animate attributeName="rx" values="5;9;5" dur="8s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      );
    case 'frozen-fortress':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-28 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="iceStone" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(210, 32%, 22%)" />
              <stop offset="100%" stopColor="hsl(200, 42%, 48%)" />
            </linearGradient>
            <linearGradient id="iceShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(195, 85%, 82%)" stopOpacity="0.65" />
              <stop offset="100%" stopColor="hsl(200, 65%, 62%)" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="frostAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(195, 92%, 78%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(200, 72%, 52%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="auroraGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160, 70%, 50%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(170, 65%, 55%)" stopOpacity="0.15" />
              <stop offset="70%" stopColor="hsl(195, 75%, 60%)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(210, 60%, 50%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="auroraGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(280, 50%, 55%)" stopOpacity="0" />
              <stop offset="40%" stopColor="hsl(195, 60%, 60%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(160, 55%, 50%)" stopOpacity="0" />
            </linearGradient>
            <filter id="iceGlowFilter">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feColorMatrix type="matrix" values="0.8 0 0 0 0.1  0 0.9 0 0 0.15  0 0 1.2 0 0.2  0 0 0 1 0" in="blur" result="blue" />
              <feMerge><feMergeNode in="blue" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="crystalRefract">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
            </filter>
          </defs>

          {/* Mountain peaks behind - layered */}
          <polygon points="0,58 12,18 28,58" fill="hsl(215, 25%, 18%)" opacity="0.3" />
          <polygon points="15,58 35,10 55,58" fill="hsl(210, 22%, 15%)" opacity="0.25" />
          <polygon points="40,58 60,12 80,58" fill="hsl(215, 25%, 18%)" opacity="0.28" />
          <polygon points="65,58 85,16 100,58" fill="hsl(210, 22%, 16%)" opacity="0.25" />
          {/* Snow caps */}
          <polygon points="8,26 12,18 16,26" fill="hsl(200, 35%, 72%)" opacity="0.22" />
          <polygon points="28,20 35,10 42,20" fill="hsl(200, 35%, 72%)" opacity="0.2" />
          <polygon points="53,20 60,12 67,20" fill="hsl(200, 35%, 72%)" opacity="0.22" />
          <polygon points="78,24 85,16 92,24" fill="hsl(200, 35%, 72%)" opacity="0.2" />

          {/* Aurora borealis - elaborate */}
          <path d="M0,6 Q20,2 40,8 Q60,4 80,10 Q90,6 100,8" fill="none" stroke="url(#auroraGrad1)" strokeWidth="3" opacity="0.2">
            <animate attributeName="d" values="M0,6 Q20,2 40,8 Q60,4 80,10 Q90,6 100,8;M0,10 Q20,6 40,3 Q60,8 80,5 Q90,9 100,6;M0,6 Q20,2 40,8 Q60,4 80,10 Q90,6 100,8" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.25;0.15" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M0,10 Q25,6 50,12 Q75,7 100,10" fill="none" stroke="url(#auroraGrad2)" strokeWidth="2.5" opacity="0.15">
            <animate attributeName="d" values="M0,10 Q25,6 50,12 Q75,7 100,10;M0,13 Q25,9 50,6 Q75,11 100,8;M0,10 Q25,6 50,12 Q75,7 100,10" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M10,4 Q30,0 50,6 Q70,2 90,5" fill="none" stroke="hsl(160, 60%, 50%)" strokeWidth="1.5" opacity="0.08">
            <animate attributeName="d" values="M10,4 Q30,0 50,6 Q70,2 90,5;M10,7 Q30,3 50,1 Q70,5 90,3;M10,4 Q30,0 50,6 Q70,2 90,5" dur="11s" repeatCount="indefinite" />
          </path>

          {/* Fortress - grand design */}
          {/* Central keep */}
          <rect x="38" y="55" width="24" height="40" fill="url(#iceStone)" opacity="0.4" />
          {/* Pitched roof */}
          <path d="M36,55 L50,38 L64,55" fill="hsl(200, 35%, 38%)" stroke="hsl(195, 30%, 45%)" strokeWidth="0.5" opacity="0.45" />
          {/* Gate */}
          <path d="M44,95 L44,68 Q50,60 56,68 L56,95" fill="hsl(210, 32%, 16%)" stroke="hsl(195, 42%, 48%)" strokeWidth="0.8" opacity="0.55" />
          {/* Gate rune glow */}
          <circle cx="50" cy="74" r="3.5" fill="url(#frostAura)" filter="url(#iceGlowFilter)">
            <animate attributeName="opacity" values="0.25;0.55;0.25" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="74" r="1.5" fill="hsl(195, 90%, 78%)" opacity="0.4">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Left tower */}
          <rect x="12" y="40" width="10" height="55" rx="1" fill="url(#iceStone)" opacity="0.6" />
          <rect x="11" y="37" width="12" height="4" fill="hsl(200, 32%, 32%)" opacity="0.5" />
          <polygon points="11,37 17,25 23,37" fill="url(#iceStone)" opacity="0.5" />
          {/* Battlement notches */}
          <rect x="11" y="37" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          <rect x="15" y="37" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          <rect x="20" y="37" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          {/* Tower window */}
          <ellipse cx="17" cy="52" rx="1.5" ry="2" fill="hsl(195, 80%, 70%)" opacity="0.25">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="4s" repeatCount="indefinite" />
          </ellipse>

          {/* Right tower */}
          <rect x="78" y="35" width="10" height="60" rx="1" fill="url(#iceStone)" opacity="0.55" />
          <rect x="77" y="32" width="12" height="4" fill="hsl(200, 32%, 32%)" opacity="0.5" />
          <polygon points="77,32 83,20 89,32" fill="url(#iceStone)" opacity="0.45" />
          <rect x="77" y="32" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          <rect x="81" y="32" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          <rect x="86" y="32" width="3" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.4" />
          <ellipse cx="83" cy="48" rx="1.5" ry="2" fill="hsl(195, 80%, 70%)" opacity="0.2">
            <animate attributeName="opacity" values="0.12;0.3;0.12" dur="4.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Fortress walls connecting towers */}
          <rect x="22" y="60" width="16" height="35" fill="url(#iceStone)" opacity="0.3" />
          <rect x="62" y="58" width="16" height="37" fill="url(#iceStone)" opacity="0.3" />
          {/* Wall top detail */}
          {[24,27,30,34,64,67,70,74].map((x, i) => (
            <rect key={`batt-${i}`} x={x} y={i < 4 ? 58 : 56} width="2" height="2.5" fill="hsl(210, 28%, 28%)" opacity="0.3" />
          ))}

          {/* Large ice crystals */}
          <g filter="url(#crystalRefract)">
            <polygon points="3,95 7,60 11,95" fill="url(#iceShine)" opacity="0.45" />
            <polygon points="4,95 7,67 10,95" fill="hsl(195, 75%, 78%)" opacity="0.15" />
            <polygon points="90,95 94,52 98,95" fill="url(#iceShine)" opacity="0.4" />
            <polygon points="91,95 94,58 97,95" fill="hsl(195, 75%, 78%)" opacity="0.12" />
          </g>
          {/* Smaller crystal clusters */}
          <polygon points="28,95 30,78 32,95" fill="url(#iceShine)" opacity="0.3" />
          <polygon points="31,95 32.5,82 34,95" fill="url(#iceShine)" opacity="0.22" />
          <polygon points="66,95 68.5,75 71,95" fill="url(#iceShine)" opacity="0.32" />
          <polygon points="70,95 71.5,80 73,95" fill="url(#iceShine)" opacity="0.25" />

          {/* Icicles hanging from walls & towers */}
          {[[23,60],[27,60],[31,60],[36,60],[45,55],[50,55],[55,55],[64,58],[68,58],[72,58],[76,58]].map(([x,y], i) => (
            <polygon key={`icicle-${i}`} points={`${x},${y} ${x+1},${y} ${x+0.5},${y+5+Math.random()*3}`} fill="hsl(195, 72%, 78%)" opacity={0.3 + (i % 3) * 0.05} />
          ))}

          {/* Frost runes on fortress walls */}
          <circle cx="33" cy="68" r="1.8" fill="url(#frostAura)" filter="url(#iceGlowFilter)">
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="68" cy="66" r="1.8" fill="url(#frostAura)" filter="url(#iceGlowFilter)">
            <animate attributeName="opacity" values="0.35;0.12;0.35" dur="4s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          <circle cx="50" cy="44" r="2" fill="url(#frostAura)" filter="url(#iceGlowFilter)">
            <animate attributeName="opacity" values="0.45;0.18;0.45" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* Falling snowflakes - more and varied */}
          {[[12,18,1.3,5.5],[28,8,0.9,7.5],[42,12,1.1,6.5],[55,6,1,5],[70,10,0.8,6],[85,14,1.2,5.8],[20,3,0.7,7],[38,0,0.6,8],[65,4,0.85,6.2],[92,8,0.75,5.5],[5,22,0.5,4.5],[50,2,0.9,7.2]].map(([cx,cy,r,dur], i) => (
            <g key={`snow-${i}`} opacity={0.35 - (i % 4) * 0.05}>
              <circle cx={cx} cy={cy} r={r} fill="hsl(200, 72%, 88%)">
                <animate attributeName="cy" values={`${cy};${(cy as number) + 75}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                <animate attributeName="opacity" values="0.35;0.05" dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                <animate attributeName="cx" values={`${cx};${(cx as number) + ((i % 2 === 0) ? 4 : -4)}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              </circle>
            </g>
          ))}

          {/* Frozen ground */}
          <path d="M0,95 Q18,92 35,95 Q55,91 75,95 Q88,92 100,95" fill="none" stroke="hsl(200, 42%, 52%)" strokeWidth="0.6" opacity="0.22" />
          <path d="M18,97 L23,90 L20,83" fill="none" stroke="hsl(195, 52%, 58%)" strokeWidth="0.3" opacity="0.2" />
          <path d="M72,98 L76,91 L73,85" fill="none" stroke="hsl(195, 52%, 58%)" strokeWidth="0.3" opacity="0.18" />
          <path d="M48,97 L50,92 L49,87" fill="none" stroke="hsl(195, 48%, 55%)" strokeWidth="0.25" opacity="0.15" />
        </svg>
      );
    case 'dimension-nexus':
      return (
        <svg className="absolute inset-0 w-full h-full opacity-32 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="voidCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(280, 85%, 18%)" stopOpacity="0.85" />
              <stop offset="40%" stopColor="hsl(300, 62%, 12%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(260, 52%, 8%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nebulaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(320, 85%, 68%)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(280, 72%, 42%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="riftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 92%, 72%)" />
              <stop offset="50%" stopColor="hsl(320, 82%, 68%)" />
              <stop offset="100%" stopColor="hsl(260, 92%, 62%)" />
            </linearGradient>
            <radialGradient id="portalCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(280, 100%, 90%)" stopOpacity="0.8" />
              <stop offset="30%" stopColor="hsl(300, 90%, 70%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(270, 80%, 50%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="archGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(270, 30%, 20%)" />
              <stop offset="100%" stopColor="hsl(280, 40%, 35%)" />
            </linearGradient>
            <filter id="dimGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix type="matrix" values="1.1 0 0 0 0.05  0 0.7 0 0 0.03  0 0 1.3 0 0.1  0 0 0 1 0" in="blur" result="purple" />
              <feMerge>
                <feMergeNode in="purple" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="voidDistort">
              <feTurbulence type="turbulence" baseFrequency="0.015 0.03" numOctaves="3" result="turb">
                <animate attributeName="baseFrequency" values="0.015 0.03;0.025 0.04;0.015 0.03" dur="10s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="turb" scale="4" />
            </filter>
            <filter id="starGlow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Cosmic void center */}
          <circle cx="50" cy="48" r="38" fill="url(#voidCore)" />

          {/* Nebula clouds - more elaborate */}
          <g filter="url(#voidDistort)">
            <ellipse cx="28" cy="32" rx="24" ry="14" fill="hsl(280, 62%, 48%)" opacity="0.14">
              <animate attributeName="rx" values="24;30;24" dur="8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.1;0.2;0.1" dur="8s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="75" cy="62" rx="20" ry="12" fill="hsl(320, 72%, 52%)" opacity="0.12">
              <animate attributeName="rx" values="20;26;20" dur="7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.08;0.18;0.08" dur="7s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="50" cy="82" rx="28" ry="10" fill="hsl(260, 58%, 42%)" opacity="0.08">
              <animate attributeName="ry" values="10;14;10" dur="9s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="18" cy="70" rx="15" ry="8" fill="hsl(290, 55%, 45%)" opacity="0.06">
              <animate attributeName="ry" values="8;11;8" dur="7.5s" repeatCount="indefinite" />
            </ellipse>
          </g>

          {/* Ancient archway / portal frame */}
          <path d="M30,95 L30,55 Q50,30 70,55 L70,95" fill="none" stroke="url(#archGrad)" strokeWidth="4" opacity="0.45" />
          <path d="M33,95 L33,57 Q50,35 67,57 L67,95" fill="none" stroke="hsl(280, 35%, 40%)" strokeWidth="1.5" opacity="0.25" />
          {/* Keystone */}
          <polygon points="48,33 50,26 52,33" fill="hsl(280, 50%, 45%)" opacity="0.4" />
          {/* Rune marks on arch */}
          <circle cx="33" cy="65" r="1.5" fill="hsl(280, 70%, 65%)" opacity="0.3" filter="url(#dimGlow)">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="67" cy="63" r="1.5" fill="hsl(310, 65%, 60%)" opacity="0.25" filter="url(#dimGlow)">
            <animate attributeName="opacity" values="0.15;0.45;0.15" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="38" cy="52" r="1.2" fill="hsl(270, 75%, 62%)" opacity="0.25" filter="url(#dimGlow)">
            <animate attributeName="opacity" values="0.18;0.4;0.18" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="62" cy="50" r="1.2" fill="hsl(300, 68%, 58%)" opacity="0.2" filter="url(#dimGlow)">
            <animate attributeName="opacity" values="0.12;0.35;0.12" dur="3.8s" repeatCount="indefinite" />
          </circle>

          {/* Portal center glow */}
          <circle cx="50" cy="55" r="12" fill="url(#portalCenter)" opacity="0.35">
            <animate attributeName="r" values="12;14;12" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.45;0.25" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="55" r="6" fill="hsl(280, 100%, 88%)" opacity="0.15">
            <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Swirling dimensional rift rings */}
          <ellipse cx="50" cy="52" rx="30" ry="14" fill="none" stroke="url(#riftGrad)" strokeWidth="0.7" opacity="0.5" filter="url(#dimGlow)">
            <animateTransform attributeName="transform" type="rotate" from="0 50 52" to="360 50 52" dur="12s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="52" rx="24" ry="10" fill="none" stroke="hsl(300, 72%, 62%)" strokeWidth="0.5" opacity="0.35">
            <animateTransform attributeName="transform" type="rotate" from="360 50 52" to="0 50 52" dur="8s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="52" rx="18" ry="7" fill="none" stroke="hsl(270, 82%, 72%)" strokeWidth="0.4" opacity="0.28">
            <animateTransform attributeName="transform" type="rotate" from="0 50 52" to="360 50 52" dur="5.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="52" rx="12" ry="4.5" fill="none" stroke="hsl(310, 78%, 68%)" strokeWidth="0.3" opacity="0.2">
            <animateTransform attributeName="transform" type="rotate" from="360 50 52" to="0 50 52" dur="4s" repeatCount="indefinite" />
          </ellipse>

          {/* Reality fragments — floating shards */}
          <g filter="url(#dimGlow)">
            {[
              [15,20,22,16,24,22,20,24, 280,65,4],
              [78,28,82,24,84,30,80,32, 320,60,5],
              [12,72,16,68,18,74,14,76, 260,60,6],
              [84,70,88,66,90,72,86,74, 290,55,4.5],
              [38,10,41,6,44,11,40,13, 310,65,5.5],
              [62,88,65,84,68,89,64,91, 275,58,6.5],
              [8,45,12,42,13,48,9,49, 300,62,7],
              [88,42,92,38,94,44,90,46, 265,60,5.2],
            ].map(([x1,y1,x2,y2,x3,y3,x4,y4,hue,light,dur], i) => (
              <polygon key={`shard-${i}`} points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`} fill={`hsl(${hue}, ${60 + (i % 3) * 8}%, ${light}%)`} opacity={0.4 - i * 0.03}>
                <animateTransform attributeName="transform" type="translate" values={`0,0;${i % 2 === 0 ? 3 : -3},${i % 3 === 0 ? -3 : 2};0,0`} dur={`${dur}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values={`${0.4 - i * 0.03};${0.1};${0.4 - i * 0.03}`} dur={`${dur}s`} repeatCount="indefinite" />
              </polygon>
            ))}
          </g>

          {/* Dimensional crack lines */}
          <path d="M15,50 Q30,40 50,50 Q70,60 85,50" fill="none" stroke="hsl(280, 82%, 72%)" strokeWidth="0.35" opacity="0.3">
            <animate attributeName="d" values="M15,50 Q30,40 50,50 Q70,60 85,50;M15,50 Q30,60 50,50 Q70,40 85,50;M15,50 Q30,40 50,50 Q70,60 85,50" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M50,10 Q60,32 50,50 Q40,68 50,90" fill="none" stroke="hsl(310, 78%, 68%)" strokeWidth="0.3" opacity="0.25">
            <animate attributeName="d" values="M50,10 Q60,32 50,50 Q40,68 50,90;M50,10 Q40,32 50,50 Q60,68 50,90;M50,10 Q60,32 50,50 Q40,68 50,90" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M10,30 Q30,45 50,30 Q70,15 90,30" fill="none" stroke="hsl(270, 75%, 65%)" strokeWidth="0.25" opacity="0.18">
            <animate attributeName="d" values="M10,30 Q30,45 50,30 Q70,15 90,30;M10,30 Q30,15 50,30 Q70,45 90,30;M10,30 Q30,45 50,30 Q70,15 90,30" dur="7s" repeatCount="indefinite" />
          </path>

          {/* Orbiting energy particles */}
          <circle cx="50" cy="52" r="1.8" fill="hsl(280, 92%, 78%)" opacity="0.7" filter="url(#dimGlow)">
            <animateMotion dur="7s" repeatCount="indefinite" path="M0,0 C22,-18 32,18 0,0 C-22,18 -32,-18 0,0" />
            <animate attributeName="opacity" values="0.7;0.25;0.7" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="52" r="1.2" fill="hsl(320, 88%, 72%)" opacity="0.6" filter="url(#dimGlow)">
            <animateMotion dur="5s" repeatCount="indefinite" path="M0,0 C-18,22 18,28 0,0 C18,-22 -18,-28 0,0" />
            <animate attributeName="opacity" values="0.6;0.18;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="52" r="0.9" fill="hsl(260, 82%, 82%)" opacity="0.5">
            <animateMotion dur="9s" repeatCount="indefinite" path="M0,0 C28,12 -12,28 0,0 C-28,-12 12,-28 0,0" />
          </circle>
          <circle cx="50" cy="52" r="0.7" fill="hsl(300, 85%, 75%)" opacity="0.45">
            <animateMotion dur="6s" repeatCount="indefinite" path="M0,0 C-10,25 20,15 0,0 C10,-25 -20,-15 0,0" />
          </circle>

          {/* Distant star field - richer */}
          {[
            [8,12,0.45,270,2],[92,10,0.35,310,2.5],[5,82,0.4,300,1.8],[95,78,0.38,270,2.4],
            [32,4,0.35,260,2.2],[68,92,0.42,290,2.8],[3,48,0.32,320,3.5],[97,45,0.35,275,3],
            [18,90,0.3,285,1.6],[82,5,0.4,305,2.1],[45,98,0.28,265,3.2],[55,2,0.33,295,2.6],
            [25,55,0.25,310,3.8],[75,40,0.3,270,2.9],[12,35,0.35,280,2.3],[88,65,0.32,300,3.1],
          ].map(([cx,cy,r,hue,dur], i) => (
            <circle key={`star-${i}`} cx={cx} cy={cy} r={r} fill={`hsl(${hue}, ${55 + (i % 4) * 5}%, ${75 + (i % 3) * 5}%)`} opacity={0.35 - (i % 5) * 0.05} filter="url(#starGlow)">
              <animate attributeName="opacity" values={`${0.35 - (i % 5) * 0.05};0.05;${0.35 - (i % 5) * 0.05}`} dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
          ))}

          {/* Nebula glow overlay */}
          <ellipse cx="50" cy="50" rx="22" ry="18" fill="url(#nebulaGlow)" opacity="0.12">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="5s" repeatCount="indefinite" />
          </ellipse>

          {/* Broken ground/platform edges */}
          <path d="M0,92 Q15,88 25,92 Q35,95 45,90 Q55,95 65,92 Q75,88 85,92 Q95,95 100,92" fill="none" stroke="hsl(270, 30%, 28%)" strokeWidth="0.5" opacity="0.2" />
          <path d="M20,95 L25,90 L22,84" fill="none" stroke="hsl(280, 40%, 35%)" strokeWidth="0.3" opacity="0.15" />
          <path d="M70,96 L74,91 L72,86" fill="none" stroke="hsl(280, 40%, 35%)" strokeWidth="0.3" opacity="0.12" />
        </svg>
      );
    default:
      return null;
  }
};
