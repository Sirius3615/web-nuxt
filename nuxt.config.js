export default {

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }]
  ],

  build: {
  },

  serverMiddleware: {
    '/api': '~/api'
  }
}
