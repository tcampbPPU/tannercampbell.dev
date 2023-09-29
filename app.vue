<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#18181b' : 'white')

const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false,
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'canonical', href: `https://tannercampbell.com${withoutTrailingSlash(route.path)}` },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
useServerSeoMeta({
  titleTemplate: '%s - Tanner Campbell',
  ogSiteName: 'Tanner Campbell',
})

provide('files', files)
</script>

<template>
  <div>
    <!-- <Announcements /> -->
    <UContainer>
      <NavHeader />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
    <Footer />
    <UNotifications />
  </div>
</template>
