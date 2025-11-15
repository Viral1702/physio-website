<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const sending = ref(false);
const success = ref(false);

async function submitForm() {
  sending.value = true;

  setTimeout(() => {
    sending.value = false;
    success.value = true;

    form.value = { name: "", email: "", phone: "", message: "" };

    setTimeout(() => (success.value = false), 2500);
  }, 1200);
}
</script>

<template>
  <section
    id="contact"
    class="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
  >
    <div class="container mx-auto px-6 lg:px-20">
      <h2 class="text-5xl font-extrabold text-center mb-16 tracking-tight">
        Contact <span class="text-primary-600">Me</span>
      </h2>

      <!-- Glassmorphism Card -->
      <div
        class="max-w-3xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-2xl border border-white/40 dark:border-gray-700/40 rounded-3xl p-10 transition-all hover:shadow-3xl"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Name -->
          <div class="relative group">
            <input
              v-model="form.name"
              type="text"
              class="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 outline-none peer transition"
              placeholder=" "
            />
            <label
              class="absolute left-0 top-3 text-gray-500 dark:text-gray-300 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-primary-600 transition-all pointer-events-none"
            >
              Your Name
            </label>
          </div>

          <!-- Email -->
          <div class="relative group">
            <input
              v-model="form.email"
              type="email"
              class="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 outline-none peer transition"
              placeholder=" "
            />
            <label
              class="absolute left-0 top-3 text-gray-500 dark:text-gray-300 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-primary-600 transition-all pointer-events-none"
            >
              Email Address
            </label>
          </div>

          <!-- Phone -->
          <div class="relative group">
            <input
              v-model="form.phone"
              type="tel"
              class="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 outline-none peer transition"
              placeholder=" "
            />
            <label
              class="absolute left-0 top-3 text-gray-500 dark:text-gray-300 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-primary-600 transition-all pointer-events-none"
            >
              Phone Number (Optional)
            </label>
          </div>

          <!-- Empty grid cell -->
          <div></div>
        </div>

        <!-- Message Box -->
        <div class="relative group mt-10">
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 outline-none peer transition resize-none"
            placeholder=" "
          ></textarea>

          <label
            class="absolute left-0 top-3 text-gray-500 dark:text-gray-300 peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-primary-600 transition-all pointer-events-none"
          >
            Your Message
          </label>
        </div>

        <!-- Submit Button -->
        <div class="mt-12 flex justify-center">
          <UButton
            :loading="sending"
            loading-icon="i-heroicons-arrow-path-20-solid"
            @click="submitForm"
            size="lg"
            class="px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-all"
            color="primary"
          >
            {{ sending ? "Sending..." : "Send Message" }}
          </UButton>
        </div>

        <!-- Success Animation -->
        <Transition name="fade">
          <p
            v-if="success"
            class="text-green-600 font-semibold text-center mt-6 text-lg animate-bounce"
          >
            ✔ Message Sent Successfully!
          </p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
