// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  components: [
    { path: '~/components/global', prefix: 'Global' },
    { path: '~/components/main-page', prefix: 'MainPage' },
    { path: '~/components/blog', prefix: 'Blog' },
    '~/components'
  ],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
})
