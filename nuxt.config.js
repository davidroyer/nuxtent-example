module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt with nunxtent demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // { src: 'https://cdn.jsdelivr.net/prism/1.2.0/prism.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/prism/1.2.0/themes/prism.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/prism/1.2.0/themes/prism-okaidia.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
      'nuxtent'
  ],
  /*
  ** Build configuration
  */

  // css: [
  //   'prismjs/themes/prism-coy.css'
  // ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
