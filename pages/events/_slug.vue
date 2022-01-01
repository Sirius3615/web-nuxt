<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">

<br>
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ launched.name }}</h2>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="inline-flex space-x-4 mt-2">
      <span v-if="launched.video_url" class="relative inline-flex rounded-full shadow-sm">
        <a v-if="launched.video_url" :href="launched.video_url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
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
      <p v-if="launched.description" class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ launched.description }}
      </p>
      <Countdown :date="launched.date" @onFinish="finish()"></Countdown>
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img v-if="launched.feature_image" :src="launched.feature_image" :alt="launched.name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
          <img v-else src="/icon.png" :alt="launched.name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Livestream -->
<div v-if="launched.video_url" class="rounded-lg mt-3 grid place-items-center h-auto">
<iframe :src="video_url" class="rounded-xl" style="width: 100%; height: 400px; max-width: 700px; max-height: 640px;" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


 
<br>
<div class="w-full rounded-lg ">
<adsbygoogle page-url="https://beyondspacenews.com/"/>
</div>
<br>


<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0">

		<div v-if="launched.launches" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img v-if="launched.launches[0].image" :src="launched.launches[0].image" :alt="launched.launches[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
       <img v-else src="/icon.png" :alt="launched.launches[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />

      </div>
			<div class="flex flex-col items-start p-4 mt-2">
          <div class="inline-flex space-x-4 mb-2 ">
            <a :href="`/launches/` + launched.launches[0].slug" class="flex-1 w-21 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full "> {{ launched.launches[0].status.name }}</a>
            <a :href="`/launches/` + launched.launches[0].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>
                             
          </div>
				<h4 class="text-xl font-semibold pb-3"> {{ launched.launches[0].name }}</h4>
				<p class="text-sm" v-if="launched.launches[0].mission"> {{ launched.launches[0].mission.description }} </p>
    
      </div>
  </div>




  <div v-if="launched.expeditions[0]" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img v-if="launched.expeditions[0].image_url" :src="launched.expeditions[0].image_url" :alt="launched.expeditions[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
       <img v-else src="/icon.png" :alt="launched.expeditions[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />

      </div>
			<div class="flex flex-col items-start p-4 mt-2">
				<h4 class="text-xl font-semibold pb-3">{{ launched.expeditions[0].name }}</h4>
				<p class="text-sm" v-if="launched.expeditions[0].orbit"><b>Orbit:</b> {{ launched.expeditions[0].orbit }} </p>

				<h4 v-if="launched.expeditions[0].spacestation" class="text-xl font-semibold pt-3">{{ launched.expeditions[0].spacestation.name }}</h4>
        <p class="text-sm pt-1" v-if="launched.expeditions[0].spacestation.status"><b>Status:</b> {{ launched.expeditions[0].spacestation.status.name }} </p>
        <Countdown class="mt-2" :date="launched.expeditions[0].start" @onFinish="finish()"></Countdown>

      </div>
  </div>


<div v-if="launched.spacestations[0]" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img v-if="launched.spacestations[0].image_url" :src="launched.spacestations[0].image_url" :alt="launched.spacestations[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
       <img v-else src="/icon.png" :alt="launched.spacestations[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />

      </div>
			<div class="flex flex-col items-start p-4 mt-2">
				<h4 class="text-xl font-semibold pb-3">{{ launched.spacestations[0].name }}</h4>
        <p class="text-sm" v-if="launched.spacestations[0].description"> {{ launched.spacestations[0].description }} </p>
				<p class="text-sm pt-1" v-if="launched.spacestations[0].orbit"><b>Orbit:</b> {{ launched.spacestations[0].orbit }} </p>
        <p class="text-sm pt-1" v-if="launched.spacestations[0].status"><b>Status:</b> {{ launched.spacestations[0].status.name }} </p>
        <p class="text-sm pt-1" v-if="launched.spacestations[0].founded"><b>Founded:</b> {{ launched.spacestations[0].founded }} </p>
      </div>
  </div>



<div v-if="launched.program[0]" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img v-if="launched.program[0].image_url" :src="launched.program[0].image_url" :alt="launched.program[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
       <img v-else src="/icon.png" :alt="launched.program[0].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />

      </div>
			<div class="flex flex-col items-start p-4 mt-2">
				<h4 class="text-xl font-semibold pb-3">{{ launched.program[0].name }}</h4>
        <p class="text-sm" v-if="launched.program[0].description"> {{ launched.program[0].description }} </p>
        <p class="text-sm pt-1" v-if="launched.program[0].start_date"><b>Started:</b> {{ launched.program[0].start_date }} </p>
        <p class="text-sm pt-1" v-if="launched.program[0].end_date"><b>Ended:</b> {{ launched.program[0].end_date }} </p>
				<h4 v-if="launched.program[0].agencies[0]" class="text-xl font-semibold pt-3"> {{ launched.program[0].agencies[0].name }}</h4>
        <p class="text-sm pt-1" v-if="launched.program[0].agencies[0].type"><b>Type:</b> {{ launched.program[0].agencies[0].type }} </p>



      </div>
  </div>



</div>







<br>
<div class="w-full rounded-lg ">
<adsbygoogle page-url="https://beyondspacenews.com/"/>
</div>
<br>

</div>

  <Footer/>
</div>
</template>
 
<script>

export default {
  head() {
    return {
    title: 'Launches - BSN',
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#34D399' },
      // Facebook 
      { hid: 'og:site_name', name: 'og:site_name', content: 'BSN' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: this.launched.name + ' - BSN' }, 
      { hid: 'description', property: 'og:description', content: "Get latest information about the launch!" },
      { name: 'og:image', content: this.launched.image },
      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: this.launched.name + ' - BSN' },
      { hid: 'twitter:description', property: 'twitter:description', content: "Get latest information about the launch!" },
      { name: 'twitter:image', content: this.launched.image },
      { name: 'twitter:card', content: 'summary_large_image' }, 
      // SEO
      { hid: 'title', name: 'title', content: this.launched.name + ' - BSN' },
      { hid: 'description', name: 'description', content: "Get latest information about the launch!" },
      { hid: 'keywords', name: 'keywords', content: 'rocket, launches, news, spaceflight, nasa, spacex, starship, astronomy, apod, liftoff, tv, space' },
      { hid: 'author', name: 'author', content: 'BSN' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'language', name: 'language', content: 'English' },
      { hid: 'revisit-after', name: 'revisit-after', content: '1 days' },

    ],
   link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/icon.png' },
        ]
  }
  },

 data() {
      return {
        page_slug: this.$route.params.slug,
        launched: []      }
    },


    async fetch() {
  const launch = await fetch(`https://beyond-apis.glitch.me/api/events/${this.$route.params.slug}`)
    .then((res) => res.json())

  if (launch.slug === this.$route.params.slug) {
      this.launched = launch
    } else {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error('Launch not found')
    }
},

methods: {
    finish() {
      console.log('finish');
    }
},

computed: {
  video_url() {
    if(this.launched.video_url) {
      var url = this.launched.video_url;
      var videoID = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
      
      var the_url = "https://www.youtube.com/embed/" + videoID
      
      return the_url; 
      } else { return null }  
  }
}

}
</script>
