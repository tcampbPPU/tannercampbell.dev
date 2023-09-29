<script setup lang="ts">
const page = await useStaticPage('about')

useSeoMeta({
  titleTemplate: '%s',
  title: page.title,
  description: page.description,
})
</script>

<template>
  <ContentRenderer v-if="page?.body" :value="page" />
</template>
