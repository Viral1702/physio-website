<script setup>
defineProps({
  name: String,
  condition: String,
  review: String,
  image: String,
});
</script>

<template>
  <div
    class="w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
  >
    <!-- Image -->
    <img
      :src="image"
      class="w-20 h-20 rounded-full object-cover mb-4 shadow-md border-4 border-primary-500/20"
    />

    <!-- Name -->
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      {{ name }}
    </h3>

    <!-- Condition -->
    <p class="text-primary-600 text-sm font-medium mb-2">
      {{ condition }}
    </p>

    <!-- Review -->
    <p class="text-gray-600 dark:text-gray-300 text-sm text-center">
      “{{ review }}”
    </p>
  </div>
</template>
