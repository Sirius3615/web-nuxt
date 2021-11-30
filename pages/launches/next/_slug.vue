<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">

<br>
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <p v-if="launched.rocket.configuration.manufacturer.name" class="text-sm font-medium text-gray-500 dark:text-white sm:mb-1 sm:text-gray-500 sm:dark:text-gray-300 ">{{ launched.rocket.configuration.manufacturer.name }}</p>
      <h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ launched.name }}</h2>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="inline-flex space-x-4 mt-2">

      <a :href="`/launches/next/` + launched.slug" class="flex-1 w-14 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full " v-if="launched.status.abbrev === 'Go'"> {{ launched.status.abbrev }}</a>
      <a :href="`/launches/next/` + launched.slug" class="flex-1 w-14 bg-yellow-400 dark:bg-yellow-400  font-bold py-2 px-3 rounded-full " v-else> {{ launched.status.abbrev }}</a>
      <span v-if="launched.vidURLs[0]" class="relative inline-flex rounded-md shadow-sm">
        <a v-if="launch.results[i].vidURLs[0]" :href="launch.results[i].vidURLs[0].url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
        <span v-if="launched.webcast_live === true" class="flex absolute h-3 w-3 top-0 right-0 ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
    </span> 
      
      </div>
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p v-if="launched.mission" class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ launched.mission.description }}
      </p>
      <Countdown :date="launched.net" @onFinish="finish()"></Countdown>
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img :src="launched.image" :alt="launched.name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>



<br>
<Ad/>
<br>


</div>

  <Footer/>
</div>
</template>

<script>

export default {
  head() {
    return {
    title: 'Launches - LiftoffTv',
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Facebook 
      { name: 'og:site _name', content: 'LiftoffTv' }, // using dynamic things in meta tags
      { name: 'og:title', content: this.launched.name + ' - LiftoffTv' }, 
      { name: 'og:description', content: this.launched.mission.description },
      { name: 'og:image', content: this.launched.image },
      // Twitter
      { name: 'twitter:title', content: this.launched.name + ' - LiftoffTv' },
      { name: 'twitter:description', content: this.launched.mission.description },
      { name: 'twitter:image', content: this.launched.image },
      { name: 'twitter:card', content: 'summary_large_image' }, 
      // SEO
      { name: 'title', content: this.launched.name + ' - LiftoffTv' },
      { name: 'description', content: this.launched.mission.description },
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
  }
  },

 data() {
      return {
        page_slug: this.$route.params.slug,
        launches: []
      }
    },
    async fetch() {
    this.launches = await fetch(
      "https://beyond-apis.glitch.me/launch/api/v2/all"
    ).then((res) => res.json());
  },

  computed: {
    launched() {
        return this.launches[0].results.find(
        (obj) => obj.slug === this.page_slug);
    },
  },

methods: {
    finish() {
      console.log('finish');
    }
},

}
</script>
