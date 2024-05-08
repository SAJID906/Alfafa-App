export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  }
}