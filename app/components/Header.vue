<script setup>
const route = useRoute();

const items = computed(() => [
  {
    label: "Home",
    to: "/",
    active: route.hash === "" || route.hash === null,
  },
  {
    label: "About Us",
    to: "/#about",
    active: route.hash === "#about",
  },
  {
    label: "Services",
    to: "/#services",
    active: route.hash === "#services",
  },
  {
    label: "Contact",
    to: "/#contact",
    active: route.hash === "#contact",
  },
]);
</script>

<template>
  <UHeader
    class="backdrop-blur bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800"
  >
    <!-- Logo -->
    <template #title>
      <div class="flex items-center gap-2">
        <img src="/logo.png" class="h-8 w-8 object-contain" alt="Physio Logo" />
        <h1 class="text-xl font-semibold">Physio Care</h1>
      </div>
    </template>

    <!-- Desktop Navigation -->
    <UNavigationMenu :items="items" />

    <!-- Mobile Navigation (THE IMPORTANT PART) -->
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>

    <!-- Right side buttons -->
    <template #right>
      <UColorModeButton />

      <UButton color="primary" variant="solid" to="/#contact" class="ml-2">
        Book Appointment
      </UButton>
    </template>
  </UHeader>
</template>
