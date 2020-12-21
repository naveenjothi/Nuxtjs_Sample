export default {
  mode:'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Naveen Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@300&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env:{
    baseUrl:process.env.BASE_URL || 'https://nuxt-blog-c174f.firebaseio.com',
    fbApiKey:'AIzaSyAYTS7UMQh6MEufRk8Dl8Z0mfs6PpclRE0',
  },
  pageTransition:{
    name:'fade',
    mode:'out-in'
  }
}
