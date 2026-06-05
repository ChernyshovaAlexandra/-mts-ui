import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    filters: {
      stepsDocsOnly: (item) => item.title !== "МТС/Steps" || item.type === "docs",
    },
  },
});
