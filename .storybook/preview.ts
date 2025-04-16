import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    default: "light",
    values: [
      { name: "light", value: "#f9fafb" }, // или #f3f4f6
      { name: "dark", value: "#1e1e1e" },
    ],
  },
};

export default preview;
