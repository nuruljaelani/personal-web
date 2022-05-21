module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '8xl': '1440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // 
  ],
}
