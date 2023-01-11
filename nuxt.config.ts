export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-svgo'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    '@nuxt/postcss8',

  ],
})
