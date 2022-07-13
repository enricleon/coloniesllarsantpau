import i18n from './config/i18n';

export default {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Llar Sant Pau',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  /* nuxt.config.js */
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['styles/main.scss', 'static/vendor/phosphor-icons.css', 'hooper/dist/hooper.css'],

  // Source directory
  srcDir: 'src/',

  dir: {
    components: 'modules/core/components',
    layouts: 'modules/core/layouts',
    pages: 'modules/core/pages',
    store: 'modules/core/store',
    middleware: 'modules/core/middleware',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/registerServices.ts' },
    { src: '~/plugins/vue-screen.ts', ssr: true },
    { src: '~/plugins/vue-awesome-swiper.ts', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['@/modules/core/components'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    ['nuxt-mq'],
  ],

  device: {
    refreshOnResize: true,
  },

  mq: {
    defaultBreakpoint: 'lg',
    breakpoints: {
      xs: 450,
      sm: 786,
      md: 1024,
      lg: 1280,
      xl: Infinity,
    },
  },

  googleFonts: {
    preload: true,
    families: {
      Quicksand: [400, 700],
      'Work+Sans': [300, 400, 500],
    },
  },

  loading: false,

  purgeCSS: {
    enabled: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/redirect-module',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '~/plugins/registerModules.ts',
      {
        modules: ['main'],
        config: {
          srcDir: 'src',
        },
      },
    ],
  ],

  i18n,

  styleResources: {
    scss: ['styles/variables.scss'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
