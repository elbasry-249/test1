/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Cairo', 'sans-serif'],
      },
      colors: {
        cosmic: '#0F0F3E',
        'cosmic-dark': '#060621',
        neon: {
          blue: '#1BE7FF',
          green: '#00FFAB',
          purple: '#9C27B0',
          pink: '#FF2A6D',
        },
        success: {
          DEFAULT: '#05FFA1',
          dark: '#04CC81',
        },
        warning: {
          DEFAULT: '#FFBE0B',
          dark: '#CC9809',
        },
        error: {
          DEFAULT: '#FF2A6D',
          dark: '#CC2257',
        },
      },
      keyframes: {
        "glow": {
          "0%, 100%": { 
            textShadow: "0 0 8px rgb(27, 231, 255, 0.8), 0 0 12px rgb(27, 231, 255, 0.5)"
          },
          "50%": { 
            textShadow: "0 0 18px rgb(27, 231, 255, 1), 0 0 24px rgb(27, 231, 255, 0.7)"
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-border": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(27, 231, 255, 0.7)"
          },
          "50%": { 
            boxShadow: "0 0 0 4px rgba(27, 231, 255, 0)"
          }
        }
      },
      animation: {
        "glow": "glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-border": "pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};