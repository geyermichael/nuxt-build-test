import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: ['@pinia/nuxt'],
  build: {
    // handle duplicate vue dependencies
    // https://github.com/nuxt/framework/issues/4084
    transpile: ['phosphor-vue'],
  },
});
