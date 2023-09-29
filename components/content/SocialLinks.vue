<script setup lang="ts">
interface Props {
  items: Array<{
    name: string
    to: string
  }>
}
defineProps<Props>()
</script>

<template>
  <div>
    <div class=" dark:text-gray-500 text-md">
      Checkout my other sites:
      <span v-for="(item, i) in items" :key="i" class="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
        <NuxtLink :to="item.to" class="NuxtLink" :aria-label="`Route to ${item.name}`">
          {{ item.name }}
        </NuxtLink>
        {{ i !== items.length - 1 ? ' | ' : '' }}
      </span>
    </div>
  </div>
</template>
