<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import type { Article, Articles } from '~/types'

const isOpen = ref(false)
const search = ref<string | undefined>(undefined)
const router = useRouter()
const posts = inject('files') as Ref<Articles>

const keys = useMagicKeys()
const CmdK = keys['Meta+K']
const Escape = keys.Escape

const fuzzyPosts = computed(() => {
  if (!search.value)
    return posts.value

  const searchValue = search.value.toLowerCase()

  return posts.value.filter((post) => {
    const title = post.title.toLowerCase()
    const description = post.description.toLowerCase()
    const tags = post.tags?.join(' ').toLowerCase() ?? ''

    return title.includes(searchValue) || description.includes(searchValue) || tags.includes(searchValue)
  })
})

function viewPost(post: Article) {
  search.value = undefined
  isOpen.value = false
  router.push(`/${post.slug}`)
}

watch(CmdK, (v) => {
  if (v)
    isOpen.value = true
})
watch(Escape, (v) => {
  if (v)
    isOpen.value = false
})
</script>

<template>
  <div class="-mt-1">
    <UTooltip>
      <template #text>
        <span>Search <UKbd>⌘</UKbd> + <UKbd>K</UKbd></span>
      </template>

      <UButton color="gray" size="sm" class="flex items-center space-x-2" @click="isOpen = true">
        <IconSearch />
      </ubutton>
    </UTooltip>

    <UModal v-model="isOpen">
      <UCard as="div" class="bg-zinc-100 dark:bg-zinc-800 dark:z-50">
        <template #header>
          <div class="flex relative items-center">
            <span class="pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500 ">
              <IconSearch class="h-2 w-2" />
            </span>
            <input
              v-model="search"
              type="text"
              class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search"
            >
            <button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute end-4"
              @click="isOpen = false"
            >
              <IconClose class="h-4 w-4" />
            </button>
          </div>
        </template>
        <div>
          <div class="text-sm text-gray-700 dark:text-gray-200">
            <div v-for="post in fuzzyPosts" :key="post.title" class="flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative cursor-pointer">
              <div class="flex items-center gap-2 min-w-0 border-b border-gray-200 dark:border-gray-700" @click="viewPost(post)">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="truncate flex-none text-gray-900 dark:text-gray-100">
                    {{ post.title }}
                  </span>
                  <span class="truncate text-gray-400 dark:text-gray-500">
                    - {{ post.description }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
