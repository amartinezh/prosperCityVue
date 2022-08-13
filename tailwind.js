module.exports = {
  important: true,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
};
