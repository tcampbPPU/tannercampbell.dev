<template>
  <div class="pt-6 pb-4 text-center">
    <!-- PAGE HEADER -->
    <div class="flex items-center justify-center space-x-3 relative">
      <div class="absolute top-0 right-0 flex space-x-3">
        <ArticleSearch />

        <!-- hidden on small screens -->
        <ColorModeToggle class="hidden sm:block" />
      </div>
      <NuxtLink to="/" aria-label="Main page">
        <h1
          class="text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-100"
        >
          Tanner's Blog
        </h1>
      </NuxtLink>
    </div>

    <p class="text-xs text-gray-500 mt-1 dark:text-gray-400">
      By: Tanner Campbell
    </p>

    <!-- QUICK NAV TOGGLES -->
    <nav class="mt-7">
      <ul class="flex items-center justify-center space-x-5">
        <li>
          <NuxtLink to="/" aria-label="Home page" class="text-purple-600 hover:text-purple-700 underline dark:text-purple-500 dark:hover:text-purple-400">
            About Me
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/articles" aria-label="Articles page" class="text-purple-600 hover:text-purple-700 underline dark:text-purple-500 dark:hover:text-purple-400">
            Articles
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/now" aria-label="Now page" class="text-purple-600 hover:text-purple-700 underline dark:text-purple-500 dark:hover:text-purple-400">
            Now
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
