<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">
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
	<div v-for="news in newss.slice(1, 13)">
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


<adsbygoogle ad-slot="1163269869" ad-format="auto" ad-style="{ width: 500px; display: block;}"/>

</div>
<br>

</div>

  <Footer/>
</div>
</template>

<script>

export default {
  head: {
    title: 'Spaceflight news - BSN',
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
  },

 data() {
      return {
        newss: []

      }
    },
    async asyncData({ $axios }){
      const newss = (await $axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=15')).data
        return { newss }
    },

}

</script>
