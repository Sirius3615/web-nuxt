export default {
  target: 'static',
  ssr: false,
  loading: {
    color: '#4ade80',
  },
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/axios',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }],
  ],

  googleAnalytics: {
    id: '285402647'
  },

  generate: {
    fallback: true
  },
  
}
