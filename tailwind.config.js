import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
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
    			// Robinhood-inspired blue palette
    			'alice-blue': '#E9F5FF',
    			'jordy-blue': '#93BFEF',
    			'tufts-blue': '#468BE6',
    			'cool-black': '#092F64',
    			'robinhood-blue': '#007AFF',
    			'robinhood-blue-light': '#5AC8FA',
    			'robinhood-blue-dark': '#0051D5',
    			// Crypto-specific colors
    			'crypto-green': '#00C805',
    			'crypto-red': '#FF6B6B',
    			'crypto-yellow': '#FFD60A',
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
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		fontFamily: {
    			sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Display"',
                    'Inter',
                    ...fontFamily.sans
                ],
    			mono: [
    				'"SF Mono"',
    				'"Roboto Mono"',
    				'"JetBrains Mono"',
    				...fontFamily.mono
    			]
    		},
    		animation: {
    			'slide-up': 'slideUp 0.3s ease-out',
    			'fade-in': 'fadeIn 0.2s ease-in',
    			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    		},
    		keyframes: {
    			slideUp: {
    				'0%': { transform: 'translateY(10px)', opacity: 0 },
    				'100%': { transform: 'translateY(0)', opacity: 1 }
    			},
    			fadeIn: {
    				'0%': { opacity: 0 },
    				'100%': { opacity: 1 }
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")]
};

export default config;