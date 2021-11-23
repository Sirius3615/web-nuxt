<template>
    <div class="border-0 border-indigo-darkest bg-white dark:bg-gray-800 text-black dark:text-white py-4 px-2">
    <div class="container mx-auto">
        <nav class="flex items-center justify-between flex-wrap">
            <NuxtLink to="/">
            <div class="flex items-center flex-no-shrink mr-6 text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="#00FF7F" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                <span class="font-semibold text-xl tracking-tight">LiftoffTv</span>
            </div>
            </NuxtLink>
            <div class="block sm:hidden">
                <button class="navbar-burger flex items-center px-3 py-2 border rounded text-black dark:text-white border-black dark:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>              
                </button>
            </div>
            <div id="main-nav" class="w-full flex-grow sm:flex items-center sm:w-auto hidden">
                <div class="text-sm sm:flex-grow">
                    <NuxtLink to="news" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 mr-4">
                        News
                    </NuxtLink>
                    <NuxtLink to="launches" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 mr-4">
                        Launches
                    </NuxtLink>
                    <NuxtLink to="blog" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 mr-4">
                        Blog
                    </NuxtLink>
                    <NuxtLink to="events" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 mr-4">
                        Events
                    </NuxtLink>
                </div>
                <div>
                  <a href="https://my-store-11772775.creator-spring.com" class="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 mr-4">Shop</a>
                </div>
            </div>
        </nav>
    </div>
</div>
</template>

<script>

export default ({
    mounted() {
        // Navbar Toggle
document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener('click', function() {
  
          // Get the "main-nav" element
          var $target = document.getElementById('main-nav');
  
          // Toggle the class on "main-nav"
          $target.classList.toggle('hidden');
  
        });
      });
    }
  
  });
  
    }
})
</script>
