<script setup lang="ts">
import type { Article } from '@/types'

definePageMeta({
  layout: 'docs',
})

const dayjs = useDayjs()
const { path } = useRoute()

// convert _ to - for legacy posts
const slug = path.replace(/-/g, '_')

const { data: page } = await useAsyncData(`posts-${slug}`, () => queryContent<Article>('posts', slug).findOne())

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

const { title, description } = page.value

useSeoMeta({
  titleTemplate: '%s - Tanner Campbell',
  title,
  description,
})
</script>

<template>
  <div v-if="page">
    <dl class="mb-10">
      <dt class="sr-only">
        Updated on
      </dt>

      <dd class="font-medium text-gray-500 dark:text-gray-400">
        <time :datetime="page.updatedAt">
          Updated on {{ dayjs(page.updatedAt).utc().format('MMMM D, YYYY') }}
        </time>
      </dd>
    </dl>
    <ArticleTags v-if="page.tags" :tags="page.tags" />

    <ContentRenderer v-if="page?.body" :value="page" />
  </div>
</template>
