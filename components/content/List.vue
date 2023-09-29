<script setup lang="ts">
interface Props {
  type?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  items: string[]
}
withDefaults(defineProps<Props>(), {
  type: 'primary',
})
</script>

<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mt-3 flex">
      <span :class="`list-${type}`" class="mt-px mr-3 flex-shrink-0">
        <IconBadgeCheck v-if="type === 'primary'" class="h-6 w-6" />
        <IconInformationCircle v-if="type === 'info'" class="h-6 w-6" />
        <IconCheckCircle v-if="type === 'success'" class="h-6 w-6" />
        <IconExclamationCircle v-if="type === 'warning'" class="h-6 w-6" />
        <IconXCircle v-if="type === 'danger'" class="h-6 w-6" />
      </span>
      {{ item }}
    </div>
  </div>
</template>

  <style scoped>
  /* Primary */
  .list-primary {
    @apply text-purple-500;
  }
  /* Info */
  .list-info {
    @apply text-blue-500;
  }
  /* Success */
  .list-success {
    @apply text-green-500;
  }
  /* Warning */
  .list-warning {
    @apply text-orange-500;
  }
  /* Danger */
  .list-danger {
    @apply text-red-500;
  }
  </style>
