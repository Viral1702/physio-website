<script setup>
import { education, services } from "@/constants/educationAndServices";
</script>
<template>
  <UContainer>
    <HeroSection />
    <AboutUsSection />
    <TwoColumnSection
      left-title="Education"
      :left-items="education"
      right-title="Services"
      :right-items="services"
    />
    <TestimonialSection />
    <ContactForm />
  </UContainer>
</template>
