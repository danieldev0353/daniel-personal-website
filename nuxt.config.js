export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel Evans | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hey There! I\'m a Creative Software Developer with a passion for designing and building applications. Looking to collab? Check out my portfolio and get in touch.' },
      { hid: 'og:description', name: 'og:description', content: 'Hey There! I\'m a Creative Software Developer with a passion for designing and building applications. Looking to collab? Check out my portfolio and get in touch.' },
      { hid: 'og:title', name: 'og:title', content: 'Daniel Evans\'s Portfolio Website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Daniel Evans | Software Developer' },
      { hid: 'og:image', property:'og:image', name: 'image', content: '//danielevans.dev/thumb_img.png' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Daniel Evans | Software Developer' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css' }
    ]
  },
  target: 'static',
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      // solid: ['faHome', 'faCog', 'faBriefcase', 'faAlignLeft'],
      // brands: ['faLinkedinIn', 'faGithub', 'faCodepen', 'faJs']
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  },
  
  server: {
      host: "0.0.0.0"
  }
}
