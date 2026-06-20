import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			},
			neon: {
				DEFAULT: 'hsl(var(--neon))',
				glow: 'hsl(var(--neon-glow))'
			},
			metal: {
				DEFAULT: 'hsl(var(--metal))',
				highlight: 'hsl(var(--metal-highlight))',
				shine: 'hsl(var(--metal-shine))'
			},
			electric: {
				DEFAULT: 'hsl(var(--electric))',
				dim: 'hsl(var(--electric-dim))'
			}
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'pulse-glow': {
				'0%, 100%': { opacity: '1', transform: 'scale(1)' },
				'50%': { opacity: '0.7', transform: 'scale(1.05)' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-10px)' }
			},
			'spin-slow': {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' }
			},
			'bounce-subtle': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-5px)' }
			},
			'ferrofluid': {
				'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
				'25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
				'50%': { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 60%' },
				'75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' }
			},
			'electric-pulse': {
				'0%, 100%': { opacity: '0.3', filter: 'blur(2px)' },
				'50%': { opacity: '1', filter: 'blur(0px)' }
			},
			'magnetic-field': {
				'0%': { transform: 'rotate(0deg) scale(1)' },
				'50%': { transform: 'rotate(180deg) scale(1.1)' },
				'100%': { transform: 'rotate(360deg) scale(1)' }
			},
			'coil-glow': {
				'0%, 100%': { boxShadow: '0 0 5px hsl(var(--neon) / 0.3), 0 0 10px hsl(var(--neon) / 0.2)' },
				'50%': { boxShadow: '0 0 20px hsl(var(--neon) / 0.6), 0 0 40px hsl(var(--neon) / 0.4)' }
			},
			'liquid-morph': {
				'0%, 100%': { transform: 'scale(1) rotate(0deg)' },
				'33%': { transform: 'scale(1.02) rotate(1deg)' },
				'66%': { transform: 'scale(0.98) rotate(-1deg)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
			'float': 'float 3s ease-in-out infinite',
			'spin-slow': 'spin-slow 8s linear infinite',
			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
			'ferrofluid': 'ferrofluid 8s ease-in-out infinite',
			'electric-pulse': 'electric-pulse 2s ease-in-out infinite',
			'magnetic-field': 'magnetic-field 20s linear infinite',
			'coil-glow': 'coil-glow 3s ease-in-out infinite',
			'liquid-morph': 'liquid-morph 4s ease-in-out infinite'
		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			heading: [
  				'Outfit',
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'monospace'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
