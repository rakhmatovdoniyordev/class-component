/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: '600px',
        md: '720px',
        lg: '970px',
        xl: '1100px',
        '2xl': '1308px'
      }
    }
  },
  plugins: [],
}