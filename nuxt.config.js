export default {
  buildDir: 'nuxt-dist',

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-stripe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAGvYkqFCr-WtLQdl77l8bnkyJa6yLCYQ8",
          authDomain: "nuxt-stripe.firebaseapp.com",
          projectId: "nuxt-stripe",
          storageBucket: "nuxt-stripe.appspot.com",
          messagingSenderId: "232386956287",
          appId: "1:232386956287:web:804378931f8aa88dd675ca",
          measurementId: "G-37NE0L0YTV"
        },
        services: {
          firestore: true,
          auth: true
          // auth: {
          //   persistence: 'local', // default
          //   initialize: {
          //     // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          //     onAuthStateChangedAction: 'onAuthStateChangedAction',
          //     subscribeManually: false
          //   },
          //   ssr: false, // default
          // }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
