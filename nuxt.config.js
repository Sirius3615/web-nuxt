export default {

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  build: {
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  googleAnalytics: {
    id: '285402647'
  }
}
