<script setup>
const year = new Date().getFullYear();

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "#about" },
  { label: "Education", to: "#education" },
  { label: "Services", to: "#services" },
  { label: "Contact", to: "#contact" },
];

const services = [
  "Manual Therapy",
  "Dry Needling",
  "Sports Injury Rehab",
  "Posture Correction",
  "Joint Mobilization",
];
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
    <div class="container mx-auto px-6 lg:px-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Logo + Text -->
        <div>
          <img src="/logo.png" alt="Kajal Physio Logo" class="w-28 mb-4" />

          <p class="text-gray-600 dark:text-gray-300">
            Improving mobility, reducing pain, and helping you live a healthier
            and active life through expert physiotherapy care.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <ul class="space-y-2">
            <li v-for="(item, i) in quickLinks" :key="i">
              <ULink
                :to="item.to"
                class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >
                {{ item.label }}
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Services
          </h3>

          <ul class="space-y-2">
            <li
              v-for="(item, i) in services"
              :key="i"
              class="text-gray-600 dark:text-gray-300"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Contact
          </h3>

          <p class="text-gray-600 dark:text-gray-300 mb-3">
            📍 Vaso, Nadiad, Gujarat
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-3">
            📞 +91 63523 77354
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            ✉️ kajalphysio@example.com
          </p>

          <!-- Social Icons -->
          <div class="flex gap-4 mt-5">
            <UButton
              icon="i-simple-icons-instagram"
              variant="soft"
              color="primary"
              size="sm"
              to="#"
            />
            <UButton
              icon="i-simple-icons-whatsapp"
              variant="soft"
              color="primary"
              size="sm"
              to="#"
            />
            <UButton
              icon="i-simple-icons-facebook"
              variant="soft"
              color="primary"
              size="sm"
              to="#"
            />
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-gray-600 dark:text-gray-400"
      >
        © {{ year }} Kajal Physiotherapist — All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
