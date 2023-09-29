<script setup lang="ts">
interface Props {
  tags: string[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <ul class="flex flex-wrap space-x-2">
      <li v-for="tag in tags" :key="tag" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
