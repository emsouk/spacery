import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://127.0.0.1:8000",
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
