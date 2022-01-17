export default {
  target: 'static',
  ssr: false,
  loading: {
    color: 'green',
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
    id: 'G-25VPSH13SQ'
  },

  generate: {
    fallback: true
  },
  
  pwa: {
    manifest: {
      name: 'BeyondSpaceNews',
      lang: 'en',
      description: '',
      theme_color: '#34D399',
      start_url: '/',
      short_name: 'BSN',
      useWebmanifestExtension: false,
      display: 'standalone'
    },
    meta: {
      /* meta options */
    }
  },

  
}
