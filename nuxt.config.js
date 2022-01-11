export default {
<<<<<<< Updated upstream

=======
  // target: 'static',
 //  ssr: false,
  loading: {
    color: '#4ade80',
  },
>>>>>>> Stashed changes
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4670880031318337'
    }],
    
    
  ],

  build: {
  },

  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },


  ],

  googleAnalytics: {
    id: '285402647'
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
