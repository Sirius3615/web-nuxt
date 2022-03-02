<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<div class="m-4">
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
	<div v-for="blog in blogg.slice(1, 13)">
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
<div class="rounded-lg w-screen contents">

<adsbygoogle ad-slot="1163269869" ad-format="rectangle" ad-style="{ display: 'contents' }" page-url="https://beyondspacenews.com/"/>

</div>
<br>


</div>

  <Footer/>
</div>
</template>

<script>

export default {

  head: {
    title: 'Blog - BSN',
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#34D399' },
      // Facebook 
       { hid: 'og:site_name', name: 'og:site_name', content: 'BSN' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: '/icon.png' },
      { hid: 'og:title', name: 'og:title', content: 'Blog - BSN' },
      { hid: 'og:description', name: 'og:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: 'Blog - BSN' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Your number one resource for all latest spaceflight news! Explore the universe and science with leading articles.' },
      // SEO
      { hid: 'title', name: 'title', content: 'Blog - BSN' },
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
        blogg: []

      }
    },
    async asyncData({ $axios }){
       const blogg = (await $axios.get('https://api.spaceflightnewsapi.net/v3/blogs?_limit=15')).data
        return { blogg }
    },

}

</script>
