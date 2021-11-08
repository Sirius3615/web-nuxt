<template>
<div class="bg-white dark:bg-gray-800 text-black dark:text-white" width="100%" height="100%">

 <NavBar/>

<h1 class="text-center font-bold text-3xl text-black dark:text-white">Latest</h1>
<br>

<div class="m-4">

<div class="border-0 rounded-2xl bg-gray-100 dark:bg-gray-700 shadow-lg">
  <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <p class="text-sm font-medium text-gray-500 dark:text-white sm:mb-1 sm:text-gray-500 sm:dark:text-gray-300 ">Japan Aerospace Exploration Agency</p>
      <h2 class="text-xl font-semibold text-green-400 sm:text-2xl sm:leading-7 md:text-3xl">Epsilon | RAISE-2 & Others</h2>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-4">
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4"> 
      </div>
      <hr class="w-16 border-gray-300 dark:border-white hidden sm:block">
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 pb-4">
      <p class="flex items-center text-black dark:text-white text-sm font-medium ">
        8 payloads will fly on this mission : "RApid Innovative payload demonstration SatellitE-2" (RAISE-2), DRUMS (Debris Removal Unprecedented Micro-Satellite), Hibari, Z-Sat, and four CubeSat (ASTERISC, ARICA, NANODRAGON, KOSEN-1).
      </p>
    </div>

    
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-3 ">
          <img src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/epsilon_image_20190224012335.jpeg" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg rounded-xl" />
        </div>
      </div>
    </div>
    
  </div>
</div>

<br>











</div>

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
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.png' },
        ]
  }
}



</script>
