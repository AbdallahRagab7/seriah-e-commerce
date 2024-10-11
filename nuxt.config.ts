// https://nuxt.com/docs/api/configuration/nuxt-config
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
  ],

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

  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
