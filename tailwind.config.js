/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F5ECE1',
          300: '#EFE1CD',
        },
        lavender: {
          50: '#F4EFFF',
          100: '#E8DCFC',
          200: '#D5C3F9',
          300: '#C2A9F5',
        },
        blush: {
          50: '#FFF5F6',
          100: '#FADADD',
          200: '#F5BAC1',
          300: '#EFA0A9',
        },
        pastelPurp: {
          50: '#FAF8FF',
          100: '#F1ECFF',
          200: '#D6C7FF',
          300: '#BFA8FF',
        },
        pastelYellow: {
          50: '#FFFDF5',
          100: '#FFEFC2',
          200: '#FFE191',
        },
        pastelGreen: {
          50: '#F6FCFA',
          100: '#E2F3F0',
          200: '#C1E6DF',
        },
        charcoal: {
          800: '#2D2D2D',
          900: '#1F1F1F',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
