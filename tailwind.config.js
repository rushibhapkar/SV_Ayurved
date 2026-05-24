/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // The popping breathing effect
        'pop-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
          '50%': { transform: 'scale(1.08)', boxShadow: '0 10px 15px -3px rgba(37,211,102,0.3)' },
        },
        // The typing text width calculation
        'typing': {
          '0%': { width: '0' },
          '70%, 100%': { width: '100%' },
        },
        // Blink effect for the typing cursor pipe
        'blink': {
          '50%': { borderColor: 'transparent' }
        }
      },
      animation: {
        'pop-pulse': 'pop-pulse 3s infinite ease-in-out',
        // Types for 2.5s, blinks cursor, holds static at the end
        'typing': 'typing 2.5s steps(25) forwards, blink 0.75s step-end infinite alternate'
      }
    },
  },
  plugins: [],
}