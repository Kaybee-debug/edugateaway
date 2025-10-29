// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '/edugateaway/',
    buildAssetsDir: '/_nuxt/'
  }
})
