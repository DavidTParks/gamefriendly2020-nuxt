export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'GameFriendly | Game Community Finder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-placeholders.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-svg-loader',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  apollo: {
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://localhost:4000'
        // You can use `wss` for secure connection (recommended in production)
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
