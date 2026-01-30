import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // ssr: false,

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "IBM+Plex+Sans": [400, 500, 600, 700],
        },
      },
    ],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['vuetify/styles', '~/assets/styles/main.scss'],
})
