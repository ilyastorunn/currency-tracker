/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #35358B 19.5%, #999 100%)',
      },
      colors: {
        'grad-purple': '#35358B',
        'grad-grey': '#999',
        'grad-black': '#0B0B10',
      }
    },
  },
  plugins: [],
};
