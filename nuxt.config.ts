// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // ensure client-only / static site (optional if you want SPA)
  ssr: false,

  // make Nitro produce Netlify-compatible output
  nitro: {
    preset: "netlify",
  },

  // your modules + css
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],

  // connect Tailwind v4 plugin
  vite: {
    plugins: [tailwindcss()],
  },
});
