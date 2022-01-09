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

      <a :href="`/launches/` + launched.slug" class="flex-1 w-14 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full " v-if="launched.status.abbrev === 'Go'"> {{ launched.status.abbrev }}</a>
      <a :href="`/launches/` + launched.slug" class="flex-1 w-21 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full " v-else-if="launched.status.abbrev === 'Success'"> {{ launched.status.abbrev }}</a>
      <a :href="`/launches/` + launched.slug" class="flex-1 w-14 bg-yellow-400 dark:bg-yellow-400  font-bold py-2 px-3 rounded-full " v-else> {{ launched.status.abbrev }}</a>
      <span v-if="launched.vidURLs[0]" class="relative inline-flex rounded-full shadow-sm">
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
      <p v-else class="flex items-center text-black dark:text-white text-sm font-medium ">
        There is no description for this launch, scroll down to see other details.
      </p>
      <Countdown :date="launched.net" @onFinish="finish()"></Countdown>
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img v-if="launched.image" :src="launched.image" :alt="launched.name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
          <img v-else src="/icon.png" :alt="launched.name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Livestream -->
<div v-if="launched.vidURLs[0]" class="rounded-lg mt-3 grid place-items-center h-auto">
<iframe :src="video_url" class="rounded-xl" style="width: 100%; height: 400px; max-width: 700px; max-height: 640px;" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


 
<br>
<div class="w-full rounded-lg ">
<adsbygoogle page-url="https://beyondspacenews.com/"/>
</div>
<br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0  ">

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

<!-- Location  -->
<div v-if="launched.pad.location" class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
  <div class="h-40 rounded-lg">
        <img :src="launched.pad.location.map_image" :alt="launched.pad.location.name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
        </div>
			<div class="flex flex-col items-start p-4 mt-2">
		  <h4 class="text-xl font-semibold pb-3"> Pad</h4>
				<div class="text-sm space-y-2"> 
          <p class="font-semibold text-lg"> {{ launched.pad.location.name }} </p>
          <p><b>Total Launches:</b> {{ launched.pad.location.total_launch_count }} </p>
       
        </div>
      </div>
	  </div>

</div>
<br>
<br>

<h4 v-if="launched.rocket.spacecraft_stage" class="ml-2 text-3xl font-semibold">
  Crew:
</h4>
<br>
<div v-if="launched.rocket.spacecraft_stage" class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-3 ">

<div v-for="crew in launched.rocket.spacecraft_stage.launch_crew">

<!-- Crew member  -->
<div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-3 shadow-lg">
  <div class="h-70 rounded-lg">
        <img :src="crew.astronaut.profile_image" :alt="crew.astronaut.name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
        </div>
			<div class="flex flex-col items-start p-4 mt-1">
      <div class="inline-flex space-x-2 mt-2 mb-2">
            <a v-if="crew.astronaut.twitter" :href="crew.astronaut.twitter" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Twitter</a>
            <a v-if="crew.astronaut.instagram" :href="crew.astronaut.instagram" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Instagram</a>
            <a v-if="crew.astronaut.wiki" :href="crew.astronaut.wiki" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Wiki</a>
        </div>
		  <h4 class="text-xl font-semibold pb-3"> {{ crew.astronaut.name }} </h4>
				<div class="text-sm space-y-2"> 
          <p> {{ crew.astronaut.bio }} </p>
          <p><b>Date of Birth:</b> {{ crew.astronaut.date_of_birth}} </p>
          <p><b>Role:</b> {{crew.role.role }} </p>
          <p><b>Type:</b> {{ crew.astronaut.type.name }} </p>
          <p><b>Status:</b> {{ crew.astronaut.status.name }} </p>
          <p><b>Agency:</b> {{ crew.astronaut.agency.name }} </p>
        </div>
      </div>
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
   const title = 'Launches - BSN';
   const meta = [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#34D399' },
      // Facebook 
      { hid: 'og:site_name', name: 'og:site_name', content: 'BSN' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: this.launched.name + ' - BSN' }, 
      { hid: 'og:url', property: 'og:url', content: 'https://beyondspacenews.com/launches/' + this.page_slug },
          // Description inject
          // Image inject

      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: this.launched.name + ' - BSN' },
      { name: 'twitter:card', content: 'summary_large_image' }, 
          // Description inject
          // Image inject

      // SEO
      { hid: 'title', name: 'title', content: this.launched.name + ' - BSN' },
          // Description inject
      { hid: 'keywords', name: 'keywords', content: 'rocket, launches, news, spaceflight, nasa, spacex, starship, astronomy, apod, liftoff, tv, space' },
      { hid: 'author', name: 'author', content: 'BSN' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'language', name: 'language', content: 'English' },
      { hid: 'revisit-after', name: 'revisit-after', content: '1 days' },
    ]
   const link = [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/icon.png' },
        ]


    if(this.launched?.mission?.description) {
      meta.push(
        {hid: 'og:description', property: 'og:description', content: this.launched.mission.description },
        {hid: 'twitter:description', name: 'twitter:description', content: this.launched.mission.description },
        {hid: 'description', name: 'description', content: this.launched.mission.description },
      );
    } else {
      meta.push(
        {hid: 'og:description', property: 'og:description', content: 'There is no description for this launch, but you can click to find out more!' },
        {hid: 'twitter:description', name: 'twitter:description', content: 'There is no description for this launch, but you can click to find out more!' },
        {hid: 'description', name: 'description', content: 'There is no description for this launch, but you can click to find out more!' },
      ); 
     }
    if(this.launched.image) {
        meta.push(
        { hid: 'og:image', property: 'og:image', content: this.launched.image },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.launched.name + ' - BSN'},
        { hid: 'twitter:image', name: 'twitter:image', content: this.launched.image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.launched.name + ' - BSN' },
        );
    } else {
        meta.push(
        { hid: 'og:image', property: 'og:image', content: 'https://beyondspacenews.com/icon.png' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'BSN'},
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://beyondspacenews.com/icon.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'BSN' },
        );
    }

    return { title, meta, link }
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

computed: {
  video_url() {
    if(this.launched.vidURLs[0]) {
      var url = this.launched.vidURLs[0].url;
      var videoID = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
      
      var the_url = "https://www.youtube.com/embed/" + videoID
      
      return the_url; 
      } else { return null }  
  }
}

}
</script>
