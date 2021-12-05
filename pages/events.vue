<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">
<br>
<!-- events -->
<div v-for="event in events">
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
        <h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ event.results[0].name }}</h2>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="inline-flex space-x-4 mt-2">
      <a :href="`/events/next/` + event.results[0].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>
    <span v-if="event.results[0].video_url" class="relative inline-flex rounded-md shadow-sm">
        <a v-if="event.results[0].video_url" :href="event.results[0].video_url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
              <span class="flex absolute h-3 w-3 top-0 right-0 ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
    </span> 
      
      </div>
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ event.results[0].description }}
      </p>
      <Countdown :date="event.results[0].date" @onFinish="finish()"></Countdown>
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img :src="event.results[0].feature_image" :alt="event.results[0].name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0">
    <div v-for="i in 9" :key="i" >
  	    <div v-for="event in events">
            <div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			    <div class="h-40 rounded-lg">
                    <img :src="event.results[i].feature_image" alt="" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
                </div>
			<div class="flex flex-col items-start p-4 mt-2">
                <div class="inline-flex space-x-4 mb-2 ">
                    <a :href="`/events/next/` + event.results[i].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>
                        <!-- Video url -->
                        <span v-if="event.results[i].video_url" class="relative inline-flex rounded-md shadow-sm">
                            <a v-if="event.results[i].video_url" :href="event.results[i].video_url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
                             <span class="flex absolute h-3 w-3 top-0 right-0 ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </span>              
            </div>
			<h4 class="text-xl font-semibold pb-3"> {{ event.results[i].name }}</h4>
			<p class="text-sm"> {{ event.results[i].description }} </p>
            <Countdown class="mt-2" :date="event.results[i].date" @onFinish="finish()"></Countdown>
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

  head: {
    title: 'Events - BSN',
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Facebook 
      { name: 'og:site _name', content: 'BSN' },
      { name: 'og:title', content: 'Events - BSN' },
      { name: 'og:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // Twitter
      { name: 'twitter:title', content: 'Events - BSN' },
      { name: 'twitter:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // SEO
      { name: 'title', content: 'Events - BSN' },
      { name: 'description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      { name: 'keywords', content: 'rocket, events, news, spaceflight, nasa, spacex, starship, astronomy, apod, liftoff, tv, space' },
      { name: 'author', content: 'BSN' },
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
        events: []
      }
    },
    async fetch() {
      this.events = await fetch(
          'https://beyond-apis.glitch.me/launch/api/v2/events' // process.env.DOMAIN + '/api/events'
      ).then(res => res.json())
    },

    methods: {
    finish() {
      console.log('finish');
    },
  
}

}
</script>
