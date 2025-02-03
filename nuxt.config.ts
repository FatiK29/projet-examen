const defaultTheme = require("tailwindcss/defaultTheme");
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["assets/css/main.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["classico-urw", ...defaultTheme.fontFamily.sans],
            serif: ["Lora", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});
