const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    hideXhr: true,
    baseUrl: "https://blogdoagi.com.br/",
  },
});
