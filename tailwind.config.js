/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vivo1: '#2ee6ff',
        vivo2: '#6a5cff',
        glass: 'rgba(255,255,255,0.08)'
      },
      boxShadow: { glass: '0 8px 24px rgba(0,0,0,0.25)' },
      backdropBlur: { xs: '2px' }
    },
  },
  plugins: [],
}
