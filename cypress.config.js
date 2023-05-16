const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 7000,
  e2e: {
    baseUrl: `https://demoqa.com`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
