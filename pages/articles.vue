<script setup lang="ts">
import type { Articles } from '~/types'

const title = 'Articles'
const description = 'A collection of articles I have written.'

useSeoMeta({
  titleTemplate: '%s - Tanner Campbell',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '',
  twitterImage: '',
})

const posts = inject('files') as Ref<Articles>
</script>

<template>
  <ul class="divide-y divide-gray-300 -mt-10 dark:divide-gray-400">
    <li v-for="post in posts" :key="post.title" class="py-14">
      <PostPreview :post="post" />
    </li>
  </ul>
</template>
