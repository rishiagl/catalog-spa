/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'main': '#23637A',
        'main-900': '#061014',
        'main-800': '#11303b',
        'main-700': '#1c5063',
        'main-600': '#3391b2',
        'main-500': '#4daacc',
        'main-400': '#74bdd7',
        'main-300': '#9cd0e3',
        'main-200': '#c4e3ee',
        'main-100': '#ebf6f9', 
        'lite': '#BCD7E0',
        'white': '#ffffff',
        'mud': '#F6F4EB',
        'slate-100': '#f1f5f9',
        'slate-200': '#e2e8f0',
        'slate-300': '#cbd5e1',
        'slate-400': '#94a3b8',
        'slate-500': '#64748b',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1e293b',
        'slate-900': '#0f172a',
        'red-700': '#b91c1c',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  plugins: [],
}