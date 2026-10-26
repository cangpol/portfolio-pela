/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          950: '#060709',
          900: '#0B0D12',
          850: '#11141C',
          800: '#171B26',
          700: '#23293A',
          600: '#343E56',
          gold: '#E5A93C',
          'gold-light': '#FCD34D',
          amber: '#F59E0B',
          cyan: '#06B6D4',
          crimson: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(229, 169, 60, 0.3)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
        'glow-red': '0 0 25px -3px rgba(239, 68, 68, 0.4)',
        'cinema-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

