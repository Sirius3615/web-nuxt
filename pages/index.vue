<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">
<br>

<!-- launches -->
<div v-for="launch in launches">
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <p v-if="launch.results[0].rocket.configuration.manufacturer.name" class="text-sm font-medium text-gray-500 dark:text-white sm:mb-1 sm:text-gray-500 sm:dark:text-gray-300 ">{{ launch.results[0].rocket.configuration.manufacturer.name }}</p>
      <h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ launch.results[0].name }}</h2>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="inline-flex space-x-4 mt-2">
      <a :href="`/launches/` + launch.results[0].slug" class="flex-1 w-14 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full " v-if="launch.results[0].status.abbrev === 'Go'"> {{ launch.results[0].status.abbrev }}</a>
      <a :href="`/launches/` + launch.results[0].slug" class="flex-1 w-14 bg-yellow-400 dark:bg-yellow-400  font-bold py-2 px-3 rounded-full " v-else> {{ launch.results[0].status.abbrev }}</a>
      <a :href="`/launches/` + launch.results[0].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>
          
          <span v-if="launch.results[0].vidURLs[0]" class="relative inline-flex rounded-full shadow-sm">
              <a v-if="launch.results[0].vidURLs[0]" :href="launch.results[0].vidURLs[0].url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
              <span v-if="launch.results[0].webcast_live === true" class="flex absolute h-3 w-3 top-0 right-0 ">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
          </span> 

        </div>
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p v-if="launch.results[0].mission" class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ launch.results[0].mission.description }}
      </p>
      <p v-else class="flex items-center text-black dark:text-white text-sm font-medium ">
        There is no description for this launch, but you can click on "Info" to find out more!
      </p>
      
      <Countdown :date="launch.results[0].net" @onFinish="finish()"></Countdown>

    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img v-if="launch.results[0].image" :src="launch.results[0].image" :alt="launch.results[0].name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
          <img v-else src="/icon.png" :alt="launch.results[0].name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0">
	<div v-for="i in 3" :key="i" >
  	<div v-for="launch in launches">
    
		<div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img v-if="launch.results[i].image" :src="launch.results[i].image" :alt="launch.results[i].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
       <img v-else src="/icon.png" :alt="launch.results[i].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />

      </div>
			<div class="flex flex-col items-start p-4 mt-2">
          <div class="inline-flex space-x-4 mb-2 ">
            <a :href="`/launches/` + launch.results[i].slug" class="flex-1 w-14 bg-green-300 dark:bg-green-500  font-bold py-2 px-4 rounded-full " v-if="launch.results[i].status.abbrev === 'Go'"> {{ launch.results[i].status.abbrev }}</a>
            <a :href="`/launches/` + launch.results[i].slug" class="flex-1 w-14 bg-yellow-400 dark:bg-yellow-400  font-bold py-2 px-3 rounded-full " v-else> {{ launch.results[i].status.abbrev }}</a>
            <a :href="`/launches/` + launch.results[i].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>

               <span v-if="launch.results[i].vidURLs[0]" class="relative inline-flex rounded-md shadow-sm">
                  <a v-if="launch.results[i].vidURLs[0]" :href="launch.results[i].vidURLs[0].url" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Watch Live</a>
                      <span v-if="launch.results[i].webcast_live === true" class="flex absolute h-3 w-3 top-0 right-0 ">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                  </span>                               
          </div>
				<h4 class="text-xl font-semibold pb-3"> {{ launch.results[i].name }}</h4>
				<p class="text-sm" v-if="launch.results[i].mission"> {{ launch.results[i].mission.description }} </p>
        <p v-else class="text-sm ">There is no description for this launch, but you can click on "Info" to find out more!</p>
        <Countdown class="mt-2" :date="launch.results[i].net" @onFinish="finish()"></Countdown> 
    
      </div>
		</div>
  </div>
</div>
</div>

<br>
<div class="rounded-lg contents" width="500px">


<adsbygoogle ad-slot="1163269869" ad-format="auto"/>

</div>
<br>

<!-- News -->
<div v-for="news in newss.slice(0, 1)">
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <a :href="news.url"><p class="text-sm font-medium text-gray-500 dark:text-white sm:mb-1 sm:text-gray-500 sm:dark:text-gray-300 ">{{ news.newsSite }}</p></a>
      <a :href="news.url"><h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ news.title }}</h2></a>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ news.summary}}
      </p>
       <CountUpAgo class="mt-2" :date="news.publishedAt"></CountUpAgo> 

    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img :src="news.imageUrl" :alt="news.title" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0">
	<div v-for="news in newss.slice(1, 4)">
		<div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img :src="news.imageUrl" :alt="news.title" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
      </div>
			<div class="flex flex-col items-start p-4 mt-4">
				<a :href="news.url"><h4 class="text-xl font-semibold pb-3"> {{ news.title }}</h4></a>
				<p class="text-sm"> {{ news.summary }} </p>
        <CountUpAgo class="mt-2" :date="news.publishedAt"></CountUpAgo> 
      </div>
		</div>
  </div>
</div>

<br>
<div class="rounded-lg contents" width="500px">


<adsbygoogle ad-slot="1163269869" ad-format="auto"/>

</div>
<br>

<!-- Blog -->
<div v-for="blog in blogg.slice(0, 1)">
<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <a :href="blog.url"><p class="text-sm font-medium text-gray-500 dark:text-white sm:mb-1 sm:text-gray-500 sm:dark:text-gray-300 ">{{ blog.newsSite }}</p></a>
      <a :href="blog.url"><h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">{{ blog.title }}</h2></a>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p class="flex items-center text-black dark:text-white text-sm font-medium ">
        {{ blog.summary}}
      </p>
      <CountUpAgo class="mt-2" :date="blog.publishedAt"></CountUpAgo> 
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img :src="blog.imageUrl" :alt="blog.title" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl md:shadow-lg lg:shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<br>

<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-0 m-0">
	<div v-for="blog in blogg.slice(1, 4)">
		<div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			<div class="h-40 rounded-lg">
       <img :src="blog.imageUrl" :alt="blog.title" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
      </div>
			<div class="flex flex-col items-start p-4 mt-4">
				<a :href="blog.url"><h4 class="text-xl font-semibold pb-3"> {{ blog.title }}</h4></a>
				<p class="text-sm"> {{ blog.summary }} </p>
        <CountUpAgo class="mt-2" :date="blog.publishedAt"></CountUpAgo> 
      </div>
		</div>
  </div>
</div>

<br>
<div class="rounded-lg contents" width="500px">

<adsbygoogle ad-slot="1163269869" ad-format="auto"/>
</div>
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
      <a :href="`/events/` + event.results[0].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a> 
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
    <div v-for="i in 3" :key="i" >
  	    <div v-for="event in events">
            <div class="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-lg m-2 shadow-lg">
			    <div class="h-40 rounded-lg">
                    <img :src="event.results[i].feature_image" :alt="event.results[i].name" class=" w-full h-full object-cover bg-gray-100 rounded-lg shadow-lg" />
                </div>
			<div class="flex flex-col items-start p-4 mt-2">
                <div class="inline-flex space-x-4 mb-2 ">
                   <a :href="`/events/` + event.results[i].slug" class="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded-full dark:bg-gray-600 dark:hover:bg-gray-500">Info</a>    
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


</div>

  <Footer/>
</div>
</template>

<script>

export default {

  head() {
    return {
    title: 'Spaceflight news - BSN',
    script: [{ type: 'application/ld+json', json: this.structuredData }],
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#34D399' },
      // Facebook 
       { hid: 'og:site_name', name: 'og:site_name', content: 'BSN' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: '/icon.png' },
      { hid: 'og:title', name: 'og:title', content: 'Spaceflight news - BSN' },
      { hid: 'og:description', name: 'og:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: 'Spaceflight news - BSN' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // SEO
      { hid: 'title', name: 'title', content: 'Spaceflight news - BSN' },
      { hid: 'description', name: 'description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
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
        launches: [],
        newss: [],
        blogg: [],
        events: [],

        structuredData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "News",
          "item": "https://beyondspacenews.com/news"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Launches",
          "item": "https://beyondspacenews.com/launches"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Events",
          "item": "https://beyondspacenews.com/events"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Blog",
          "item": "https://beyondspacenews.com/blog"
        }]
        }
      }
    },

 
    async asyncData({ $axios }){
       const launches = (await $axios.get('https://beyond-apis.glitch.me/launch/api/v2/all')).data 
       const events = (await $axios.get('https://beyond-apis.glitch.me/launch/api/v2/events')).data
       const newss = (await $axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=5')).data
       const blogg = (await $axios.get('https://api.spaceflightnewsapi.net/v3/blogs?_limit=5')).data
        return { launches, events, newss, blogg }
    },
    
 
    methods: {
    finish() {
      console.log('finish');
    },
  
}

}
</script>
