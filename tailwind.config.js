/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'side-md': 'var(--sidepadding-md)',
      },
      borderRadius: {
        'border-s': '10px',
      },
    },
  },
  plugins: [],
}
