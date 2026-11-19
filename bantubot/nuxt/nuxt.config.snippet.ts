// Merge into the site's nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // server-only (never exposed to the client). Override with env:
    //   NUXT_BANTUBOT_ANTHROPIC_API_KEY, NUXT_BANTUBOT_MODEL, NUXT_BANTUBOT_ALLOWED_ORIGINS
    bantubot: {
      anthropicApiKey: "",
      model: "claude-opus-5-5",
      allowedOrigins: "https://www.bantubuat.web.id,https://bantubuat.web.id",
    },
  },
});
