import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gg-black': '#080808',
        'gg-dark': '#0d0d0d',
        'gg-charcoal': '#1a1a1a',
        'gg-red': '#cc0000',
        'gg-crimson': '#8b0000',
        'gg-red-glow': '#ff1a1a',
        'gg-silver': '#c0c0c0',
        'gg-chrome': '#e8e8e8',
        'gg-gold': '#d4af37',
        'gg-white': '#f5f5f5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(circle, rgba(204,0,0,0.3) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(8,8,8,0) 0%, rgba(8,8,8,0.7) 50%, #080808 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #c0c0c0 0%, #ffffff 25%, #808080 50%, #ffffff 75%, #c0c0c0 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #8b0000 0%, #cc0000 50%, #8b0000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'counter-glow': 'counterGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'particle': 'particle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        counterGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(204,0,0,0.5)' },
          '50%': { textShadow: '0 0 30px rgba(204,0,0,1), 0 0 60px rgba(204,0,0,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
      },
      boxShadow: {
        'red-glow': '0 0 30px rgba(204,0,0,0.4), 0 0 60px rgba(204,0,0,0.2)',
        'red-glow-sm': '0 0 15px rgba(204,0,0,0.3)',
        'red-glow-lg': '0 0 60px rgba(204,0,0,0.5), 0 0 120px rgba(204,0,0,0.2)',
        'chrome': '0 0 20px rgba(192,192,192,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
