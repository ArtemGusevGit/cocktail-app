// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/utility/index.css'],
})
