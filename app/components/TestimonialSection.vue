<script setup>
import { testimonials } from "@/constants/testimonials";
</script>

<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6 lg:px-16">
      <h2 class="text-4xl font-bold text-center mb-12">
        Patient <span class="text-primary-600">Testimonials</span>
      </h2>

      <!-- Marquee -->
      <UMarquee class="py-6" :speed="40" pause-on-hover>
        <div class="flex gap-6">
          <TestimonialCard
            v-for="(t, i) in testimonials"
            :key="i"
            :name="t.name"
            :condition="t.condition"
            :review="t.review"
            :image="t.image"
          />
        </div>
      </UMarquee>
    </div>
  </section>
</template>
