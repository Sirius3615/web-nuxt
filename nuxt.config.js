export default {

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],

  build: {
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  googleAnalytics: {
    id: '285402647'
  },

  pwa: {
    manifest: {
      name: 'BSN',
      lang: 'en',
      useWebmanifestExtension: false
    }
  }
}
