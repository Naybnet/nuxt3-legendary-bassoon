import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  typescript: { shim: false },
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-svgo', 'nuxt-icon', async (_, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      config.plugins?.push(vuetify({ styles: { configFile: './assets/css/vuetify.scss' } }))
    })
  }],
  build: {
    transpile: ['vuetify'],
  },

  vite: {
    // ssr: { noExternal: ['vuetify'] },
    define: { 'process.env.DEBUG': 'false' },
  },
})
