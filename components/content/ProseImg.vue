<script setup lang="ts">
import { withBase } from 'ufo'
import { computed, useRuntimeConfig } from '#imports'

interface Props {
  src: string
  alt: string
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  width: undefined,
  height: undefined,
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL)

  return props.src
})
</script>

<template>
  <img
    v-bind="$attrs"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    class="prose-img"
  >
</template>

<style lang="ts" scoped>
css({
  img: {
    margin: '{prose.img.margin}',
  }
})
</style>
