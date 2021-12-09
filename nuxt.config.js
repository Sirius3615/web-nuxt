export default {

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }],
    
    
  ],

  build: {
  },

  serverMiddleware: {
    '/api': '~/api/index.js',

  },

  googleAnalytics: {
    id: '285402647'
  },

  pwa: {
    manifest: {
      name: 'BeyondSpaceNews',
      lang: 'en',
      description: '',
      theme_color: '#34D399',
      start_url: 'https://beyondspacenews.com/',
      short_name: 'BSN',
      useWebmanifestExtension: false,
      display: 'standalone'
    },
    meta: {
      /* meta options */
    }
  },
  sitemap: {
    hostname: 'https://beyondspacenews.com/',
    gzip: true,
  }
}
