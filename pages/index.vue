<template>
<div class="bg-white dark:bg-gray-800" width="100%" height="100%">

 <NavBar/>





















  <Footer/>
</div>
</template>

<script>

export default {
  head: {
    title: 'Spaceflight news - LiftoffTv',
    meta: [
        // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Facebook 
      { name: 'og:site _name', content: 'LiftoffTv' },
      { name: 'og:title', content: 'Spaceflight news - LiftoffTv' },
      { name: 'og:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // Twitter
      { name: 'twitter:title', content: 'Spaceflight news - LiftoffTv' },
      { name: 'twitter:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // SEO
      { name: 'title', content: 'Spaceflight news - LiftoffTv' },
      { name: 'description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      { name: 'keywords', content: 'rocket, launches, news, spaceflight, nasa, spacex, starship, astronomy, apod, liftoff, tv, space' },
      { name: 'author', content: 'LiftoffTv' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '1 days' },

    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.ico' },

        ]
  }
}

</script>
