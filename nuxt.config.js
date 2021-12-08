export default {

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }]
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
