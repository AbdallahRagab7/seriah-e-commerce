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
    // "@pinia/nuxt",
  ],

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },

  // strapi: {
  //   url: process.env.STRAPI_URL || "http://localhost:1337",
  //   prefix: "/api",
  //   admin: "/admin",
  //   version: "v4",
  //   cookie: {},
  //   cookieName: "strapi_jwt",
  // },
});

// nuxt config
// import type { NuxtConfig } from "@nuxt/types";

// const config: NuxtConfig = {
//   buildModules: ["@nuxt/typescript-build"],
//   devtools: { enabled: true },
// };

// export default config;
