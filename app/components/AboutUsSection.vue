<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 lg:px-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Image -->
        <div class="flex justify-center">
          <img
            src="/about-physio.jpeg"
            alt="About Our Clinic"
            class="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        <!-- Right Content -->
        <div>
          <h2 class="text-4xl font-bold mb-4">
            About <span class="text-primary-600">Our Clinic</span>
          </h2>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            We are a trusted physiotherapy clinic committed to helping you
            recover, restore mobility, and improve overall wellness. With
            personalized treatment plans and modern techniques, we ensure each
            patient gets dedicated care and long-term relief.
          </p>

          <p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Our approach combines evidence-based therapy, advanced
            rehabilitation tools, and hands-on techniques to speed up healing
            and enhance your physical performance.
          </p>

          <!-- Bullet Points -->
          <ul class="mt-6 space-y-3">
            <li class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-check-circle"
                class="text-primary-600 mt-1"
              />
              <span class="text-gray-700 dark:text-gray-300">
                Expert physiotherapists with years of clinical experience.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-check-circle"
                class="text-primary-600 mt-1"
              />
              <span class="text-gray-700 dark:text-gray-300">
                Customized treatment plans designed for your unique condition.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-check-circle"
                class="text-primary-600 mt-1"
              />
              <span class="text-gray-700 dark:text-gray-300">
                Modern equipment and advanced therapy techniques.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-check-circle"
                class="text-primary-600 mt-1"
              />
              <span class="text-gray-700 dark:text-gray-300">
                Friendly and supportive environment for fast recovery.
              </span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="mt-8">
            <UButton size="lg" color="primary" to="/#contact">
              Book Your Session
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decor -->
    <div
      class="absolute -bottom-24 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
    ></div>
  </section>
</template>
