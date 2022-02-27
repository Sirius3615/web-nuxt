const axios = require('axios')

export default{
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
     '@nuxtjs/sitemap',
  ],

  googleAnalytics: {
    id: 'G-25VPSH13SQ'
  },

  generate: {
    fallback: true
  },

  sitemap: {
    hostname: 'https://beyondspacenews.com/',
    gzip: false,
    path: '/sitemap.xml',
    
    routes: async () => {
      const { data } = await axios.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10&hide_recent_previous=true&mode=detailed&format=json')

      return data.results.map((launch) => `/launches/${launch.slug}`)
      
    },
    // event routes in sitemap....
  //  routes: async () => {
  //     const { data2 } = await axios.get('https://ll.thespacedevs.com/2.0.0/event/upcoming/?limit=10')
  //     return data2.results.map((event) => `/events/${event.slug}`)
  //   },
    
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }

    
  }

  
  

  
}
