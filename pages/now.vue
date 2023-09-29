<script setup lang="ts">
const page = await useStaticPage('now')

useSeoMeta({
  titleTemplate: '%s - Tanner Campbell',
  title: page.title,
  description: page.description,
})
</script>

<template>
  <ContentRenderer v-if="page?.body" :value="page" />
</template>
