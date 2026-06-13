import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    './app/assets/css/main.css',
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
  
  ]
})