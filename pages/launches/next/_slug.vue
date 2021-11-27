<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">
<br>
<p>{{page_slug}}</p>
<p>{{launched}}</p>

<br>
<Ad/>
<br>

</div>

  <Footer/>
</div>
</template>

<script>

export default {

  head: {
    title: 'Launches - LiftoffTv',
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Facebook 
      { name: 'og:site _name', content: 'LiftoffTv' },
      { name: 'og:title', content: 'Launches - LiftoffTv' },
      { name: 'og:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // Twitter
      { name: 'twitter:title', content: 'Launches - LiftoffTv' },
      { name: 'twitter:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // SEO
      { name: 'title', content: 'Launches - LiftoffTv' },
      { name: 'description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      { name: 'keywords', content: 'rocket, launches, news, spaceflight, nasa, spacex, starship, astronomy, apod, liftoff, tv, space' },
      { name: 'author', content: 'LiftoffTv' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '1 days' },

    ],
   link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.png' },
        ]
  },

 data() {
      return {
        page_slug: this.$route.params.slug,
        launches: []
      }
    },
    async fetch() {
      this.launches = await fetch(
          'https://beyond-apis.glitch.me/launch/api/v2/all' // process.env.DOMAIN + '/api/launches/all'
      ).then(res => res.json())
    },

    methods: {
    finish() {
      console.log('finish');
    },
  
},

computed: {
  launched() {
      this.launches[0].results.find(obj => obj.slug === this.page_slug)
  }
}


}
</script>
