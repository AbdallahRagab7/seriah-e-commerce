// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/strapi",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
  ],
  // primevue: {
  //   options: {
  //     ripple: true,
  //     inputVariant: "filled",
  //     theme: {
  //       preset: Aura,
  //       options: {
  //         prefix: "my",
  //         darkModeSelector: ".my-app-dark",
  //         cssLayer: false,
  //       },
  //     },
  //   },
  // },

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".my-app-dark",
          cssLayer: false,
        },
      },
    },
  },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      STRAPI_URL: process.env.STRAPI_URL,
      // Add more environment variables as needed
    },
  },
  build: {
    transpile: ["vue-sonner"],
  },

  strapi: {
    url: process.env.STRAPI_URL || "https://seirah.mbadr.dev",
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
