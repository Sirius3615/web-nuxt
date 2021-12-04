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
        <a v-if="launched.vidURLs[0]" :href="launched.vidURLs[0].url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
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

<br><br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0 ">

<!-- Launch service provider -->
		<div v-if="launched.launch_service_provider" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="flex flex-col items-start p-4 mt-4">
			<h4 class="text-xl font-semibold pb-3"> Launch Service Provider </h4>
				<div class="text-sm  space-y-2"> 
          <a :href="launched.launch_service_provider.info_url"><p class="text-xl font-semibold pb-3"> {{ launched.launch_service_provider.name }} </p></a>
          <p><b>Type:</b> {{ launched.launch_service_provider.type }} </p>
          <p><b>Description:</b> {{ launched.launch_service_provider.description }} </p>
          <p><b>Administrator:</b> {{ launched.launch_service_provider.administrator }} </p> 
          <p><b>Founding year:</b> {{ launched.launch_service_provider.founding_year }} </p>
          <p><b>Spacecraft:</b> {{ launched.launch_service_provider.spacecraft }} </p>
          <p><b>Total launches:</b> {{ launched.launch_service_provider.total_launch_count }} </p>
          <p><b>Successfull launches:</b> {{ launched.launch_service_provider.successful_launches }} </p>
          <p><b>Failed launches:</b> {{ launched.launch_service_provider.failed_launches }} </p>

        </div>
      </div>
	  </div>


<!-- rocket configuration -->
<div v-if="launched.rocket.configuration" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="flex flex-col items-start p-4 mt-4">
		  <h4 class="text-xl font-semibold pb-3"> Rocket Configuration</h4>
				<div class="text-sm  space-y-2"> 
          <p class="font-semibold text-lg"> {{ launched.rocket.configuration.full_name }} </p>
          <p><b>Description:</b> {{ launched.rocket.configuration.description }} </p>
          <p><b>Family:</b> {{ launched.rocket.configuration.family }} </p>
          <p><b>Variant:</b> {{ launched.rocket.configuration.variant }} </p>
          <p><b>Length:</b> {{ launched.rocket.configuration.length }} meters </p>
          <p><b>Diameter:</b> {{ launched.rocket.configuration.diameter }} meters </p>
          <p><b>Launch cost:</b> {{ launched.rocket.configuration.launch_cost }} </p>
          <p><b>Launch mass:</b> {{ launched.rocket.configuration.launch_mass }} tons </p>
          <p><b>LEO capacity:</b> {{ launched.rocket.configuration.leo_capacity }} tons </p>
          <p><b>GTO capacity:</b> {{ launched.rocket.configuration.gto_capacity }} tons </p>
        </div>
      </div>
	  </div>


<!-- Manufacturer -->
<div v-if="launched.rocket.configuration.manufacturer" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="flex flex-col items-start p-4 mt-4">
		  <h4 class="text-xl font-semibold pb-3"> Rocket Manufacturer</h4>
				<div class="text-sm  space-y-2"> 
          <a :href="launched.rocket.configuration.manufacturer.info_url"><p class="font-semibold text-lg"> {{ launched.rocket.configuration.manufacturer.full_name }} </p></a>
          <p><b>Type:</b> {{ launched.rocket.configuration.manufacturer.type }} </p>
          <p><b>Country:</b> {{ launched.rocket.configuration.manufacturer.country_code }} </p>
          <p><b>Administrator:</b> {{ launched.rocket.configuration.manufacturer.administrator }} </p> 
          <p><b>Founding year:</b> {{ launched.rocket.configuration.manufacturer.founding_year }} </p>
          <p><b>Spacecraft:</b> {{ launched.rocket.configuration.manufacturer.spacecraft }} </p>
          <p><b>Total launches:</b> {{ launched.rocket.configuration.manufacturer.total_launch_count }} </p>
          <p><b>Successfull launches:</b> {{ launched.rocket.configuration.manufacturer.successful_launches }} </p>
          <p><b>Failed launches:</b> {{ launched.rocket.configuration.manufacturer.failed_launches }} </p>
          <p><b>Pending Launches:</b> {{ launched.rocket.configuration.manufacturer.pending_launches }} </p>
          <p><b>Successfull Landings:</b> {{ launched.rocket.configuration.manufacturer.successful_landings }} </p>
          <p><b>Failed Landings:</b> {{ launched.rocket.configuration.manufacturer.failed_landings }} </p>
          <p><b>Attempted Landings:</b> {{ launched.rocket.configuration.manufacturer.attempted_landings }} </p>
        </div>
      </div>
	  </div>

<!-- Mission -->
<div v-if="launched.mission" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="flex flex-col items-start p-4 mt-4">
		  <h4 class="text-xl font-semibold pb-3"> Mission</h4>
				<div class="text-sm space-y-2"> 
          <p class="font-semibold text-lg"> {{ launched.mission.name }} </p>
          <p><b>Description:</b> {{ launched.mission.description }} </p>
          <p><b>Type:</b> {{ launched.mission.type }} </p>
          <p><b>Orbit:</b> {{ launched.mission.orbit.name }}</p>
        </div>
      </div>
	  </div>

<!-- Pad -->
<div v-if="launched.pad" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
  <div class="h-40 rounded-lg">
    <a :href="launched.pad.map_url">
        <img :src="launched.pad.map_image" :alt="launched.pad.name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
    </a>
        </div>
			<div class="flex flex-col items-start p-4 mt-2">
		  <h4 class="text-xl font-semibold pb-3"> Pad</h4>
				<div class="text-sm space-y-2"> 
          <p class="font-semibold text-lg"> {{ launched.pad.name }} </p>
          <p><b>Total Launches:</b> {{ launched.pad.total_launch_count }} </p>
       
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
      { name: 'og:site _name', content: 'LiftoffTv' }, 
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
        launched: []
      }
    },


    async fetch() {
  const launch = await fetch(`https://beyond-apis.glitch.me/launch/api/v2/${this.$route.params.slug}`) // process.env.DOMAIN + "/api/launches/ ...."
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

}
</script>
