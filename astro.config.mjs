import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"]
  },
  output: "server",
  adapter: vercel()
});