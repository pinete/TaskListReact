import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "5kpp1o",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
  },

  // component: {
  //   devServer: {
  //     framework: "create-react-app",
  //     bundler: "webpack",
  //   },
  // },
});
