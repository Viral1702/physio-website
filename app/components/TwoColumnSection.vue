<script setup>
defineProps({
  leftTitle: String,
  rightTitle: String,
  leftItems: {
    type: Array,
    default: () => [],
  },
  rightItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900" id="services">
    <div class="container mx-auto px-6 lg:px-16">
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left Column -->
        <div>
          <h2 class="text-3xl font-bold mb-6">
            <span class="text-primary-600">{{ leftTitle }}</span>
          </h2>

          <UTimeline :items="leftItems" size="lg" class="max-w-xl w-full" />
        </div>

        <!-- Right Column -->
        <div>
          <h2 class="text-3xl font-bold mb-6">
            <span class="text-primary-600">{{ rightTitle }}</span>
          </h2>

          <UTimeline :items="rightItems" size="lg" class="max-w-xl w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
