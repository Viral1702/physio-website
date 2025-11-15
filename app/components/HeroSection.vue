<template>
  <section
    class="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-20"
    id="home"
  >
    <div class="container mx-auto px-6 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
            Heal. Recover. <span class="text-primary-600">Move Better.</span>
          </h1>

          <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Professional physiotherapy care focused on pain relief, mobility
            improvement, and long-term wellness. Get treated by expert hands.
          </p>

          <div class="mt-8 flex items-center gap-4">
            <UButton size="lg" to="/#book" color="primary" variant="solid">
              Book Appointment
            </UButton>

            <UButton size="lg" to="/#services" color="primary" variant="soft">
              View Services
            </UButton>
          </div>

          <!-- Stats -->
          <div class="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <p class="text-3xl font-bold text-primary-600">500+</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Patients Treated
              </p>
            </div>
            <div>
              <p class="text-3xl font-bold text-primary-600">8+ yrs</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Experience</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-primary-600">95%</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Recovery Rate
              </p>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="/physio-hero.webp"
            alt="Physiotherapy Treatment"
            class="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Background Blur Element -->
    <div
      class="absolute -top-20 -right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
    ></div>
  </section>
</template>
