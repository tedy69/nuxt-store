export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt Store",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Author: Mochammad Tedy Fazrin, Description: More Sales Channels; Payment Providers & Shipping Features Than Other Ecommerce Platforms.",
      },
      { property: "og:title", content: "Nuxt Store" },
      { property: "og:url", content: "https://nuxt.tedyfazrin.com" },
      {
        property: "og:description",
        content:
          "More Sales Channels; Payment Providers & Shipping Features Than Other Ecommerce Platforms.",
      },
      { property: "og:author", content: "Mochammad Tedy Fazrin" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "noindex,nofollow" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/style/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "./plugins/vue-carousel.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  proxy: {
    "/local": {
      target: "https://api.tedyfazrin.com/",
      pathRewrite: { "^/local": "" },
    },
  },
};
