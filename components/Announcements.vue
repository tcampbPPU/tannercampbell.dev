<script setup lang="ts">
//
</script>

<!-- announments section pinned at top -->
<template>
  <!-- animate text like news banner from right to left -->
  <div class="border border-purple-500 dark:border-purple-500 rounded-lg p-4 mb-6 flex flex-col justify-center items-center overflow-hidden relative w-full">
    <div class="breaking-news-text w-full">
      Test
    </div>
  </div>
</template>

<style scoped>
.breaking-news-ticker {
  overflow: hidden;
  white-space: nowrap;
}

.breaking-news-text {
  display: inline-block;
  margin-right: 2rem; /* Adjust the spacing between news items */
  animation: scrollText 20s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
