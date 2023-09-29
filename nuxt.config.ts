// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  site: {
    // url: 'https://tannercampbell.com',
    url: 'https://tannercampbell-dev.vercel.app',
  },

  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-simple-robots',
    'dayjs-nuxt',
  ],

  content: {
    highlight: {
      preload: ['php'],
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/sitemap.xml',
        '/robots.txt',
        '/api/search.json',
      ],
    },
  },

  //   app: {
  //     cdnURL: 'https://static.tannercampbell.dev',
  //   },

  headlessui: {
    prefix: 'Headless',
  },

  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    'components:extend': (components) => {
      components.forEach((component) => {
        if (component.global)
          component.global = 'sync'
      })
    },
  },
})
