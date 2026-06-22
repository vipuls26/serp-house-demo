import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },

  modules: [
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    preload: true
  }
})