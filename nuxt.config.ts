export default defineNuxtConfig({
  ssr: false,
  typescript: { shim: false },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-svgo', '@nuxt/ui'],
  vite: {
    define: { 'process.env.DEBUG': 'false' },
  },
})
