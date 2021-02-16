export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios','@nuxtjs/firebase'],

  firebase: {
    config: {
      apiKey: 'AIzaSyDT8ciXqo8IBggcqJTK-8SlPm2yXUwLa-8',
      authDomain: 'pokemon-d3310.firebaseapp.com',
      databaseURL: 'https://pokemon-d3310-default-rtdb.firebaseio.com',
      projectId: 'pokemon-d3310',
      storageBucket: 'pokemon-d3310.appspot.com',
      messagingSenderId: '328145011537',
      appId: '1:328145011537:web:ed172428ab251861040970',
      measurementId: 'G-5FP9LNC007',
    },
    services: {
      database: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
