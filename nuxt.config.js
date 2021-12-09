export default {

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }],
    
    
  ],

  build: {
  },

  serverMiddleware: {
    '/api': '~/api/index.js',
    '/_ipx': '~/server/middleware/ipx.js'

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
  },
  image: {
    domains: [
              'https://spaceflightnow.com/',
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/',
              'https://spacenews.com/',
              'https://www.nasa.gov/',
              'https://blog.ulalaunch.com/',
              'https://planetary.s3.amazonaws.com/',
              'https://www.nasaspaceflight.com/',
              'https://spacex.com/',
              'https://space.com/',
              'https://phys.org/',
              'https://arstechnica.com/',
              'https://www.blueorigin.com/',
              'https://www.spaceflightinsider.com/',
              'https://www.japantimes.co.jp/',
              'https://www.theverge.com/',
              'https://www.teslarati.com/',
              'https://www.elonx.net/',
              'https://www.virgingalactic.com/',
              'https://www.esa.int/'
            ]
  }
}
