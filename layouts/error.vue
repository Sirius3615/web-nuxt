<template>
<div class="flex items-center justify-center w-screen h-screen text-black dark:bg-gray-800 dark:text-white">
  <div class="px-4 lg:py-12">
    <div class="lg:gap-4 lg:flex">
      <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="animate-pulse font-bold text-green-400 text-9xl">{{ error.statusCode }}</h1>
        <p class=" mb-2 text-2xl font-bold text-center md:text-3xl">
          <span class="text-red-500">Oops!</span> Page not found
        </p>
        <p class="mb-8 text-center text-gray-500 dark:text-gray-300 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
        <NuxtLink to="/" class="shadow-lg rounded-full px-7 py-3 text-sm font-semibold text-green-400 dark:bg-gray-700 bg-gray-100">Go home</NuxtLink>
      </div>
      <div class="mt-4">
        <NuxtLink to="/">
        <nuxt-img
          src="https://i.insider.com/5d2faa4d7e76cc3f20437ff6?width=700"
          alt="img"
          class="object-cover w-full h-full rounded-2xl shadow-xl"
        />
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
props: ["error"],
layout: "error",
};
</script>
