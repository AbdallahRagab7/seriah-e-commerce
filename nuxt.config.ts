// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import mainPreset from "./presets/main";
import XML2JSON from "xml2json";
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
    "pinia-plugin-persistedstate/nuxt",
    "@primevue/nuxt-module",
    "@nuxtjs/seo",
    "nuxt-posthog",
  ],
  posthog:{
    publicKey:"phc_CdTOj9YGuQmBJuE1RZFMgsJkeiitpaGyRrrjqOe2Twm",
    host:"https://us.i.posthog.com",
  },
  piniaPluginPersistedstate: {
    storage: "cookies",
    cookieOptions: {
      sameSite: "lax",
    },
    debug: true,
  },

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: mainPreset,
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
    cookieName: "strapi_jwt",
    cookie: {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: true,
    },
  },
  schemaOrg:{
    identity:{
      type: "Organization",
      name: "Seirah",
      logo: "/logo.png",
      sameAs:[
        'https://amazon.com.eg',
        'https://noon.com'
      ]
    },
    
  },
  site:{
    url: 'https://www.seirah-eg.com/',
    name: 'Seirah',
    description: 'We redefine elegance through storytelling',
    defaultLocale: 'en', 
  },
  sitemap:{
    urls: async () => {
      let xmlResponse = await fetch('https://seirah.mbadr.dev/api/sitemap/index.xml');
      const xmlData = await xmlResponse.text();
      const jsonResponse =XML2JSON.toJson(xmlData);
      return JSON.parse(jsonResponse)?.urlset?.url || [];
      
    }
  }
});