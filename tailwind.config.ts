import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
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
				space: {
          dark: '#0a0a14',
          purple: '#7E69AB',
          blue: '#1EAEDB',
          cyan: '#64ffda',
          magenta: '#D946EF',
          orange: '#F97316',
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px #64ffda, 0 0 15px #64ffda',
            boxShadow: '0 0 5px #64ffda'
          },
          '50%': { 
            textShadow: '0 0 20px #64ffda, 0 0 30px #64ffda',
            boxShadow: '0 0 20px #64ffda'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-bright': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'meteor': {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: 0 }
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter: 'drop-shadow(0 0 1px rgba(100, 255, 218, 0.7)) drop-shadow(0 0 5px rgba(100, 255, 218, 0.5))'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none'
          }
        },
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        'fade-in-right': {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-in': {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        },
        'glitch': {
          '0%': {
            clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)'
          },
          '20%': {
            clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)'
          },
          '30%': {
            clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)'
          },
          '40%': {
            clipPath: 'polygon(0 1%, 100% 1%, 100% 2%, 0 2%)'
          },
          '50%': {
            clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)'
          },
          '55%': {
            clipPath: 'polygon(0 44%, 100% 44%, 100% 44%, 0 44%)'
          },
          '60%': {
            clipPath: 'polygon(0 50%, 100% 50%, 100% 20%, 0 20%)'
          },
          '65%': {
            clipPath: 'polygon(0 70%, 100% 70%, 100% 70%, 0 70%)'
          },
          '70%': {
            clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)'
          },
          '80%': {
            clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)'
          },
          '85%': {
            clipPath: 'polygon(0 60%, 100% 60%, 100% 65%, 0 65%)'
          },
          '95%': {
            clipPath: 'polygon(0 72%, 100% 72%, 100% 78%, 0 78%)'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-bright': 'pulse-bright 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'meteor': 'meteor 5s linear infinite',
        'flicker': 'flicker 2s linear forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'glitch': 'glitch 4s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
