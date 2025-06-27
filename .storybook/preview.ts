import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // можно кастомизировать, если надо
      disable: false,
      element: "#root",
      config: {},
      options: {},
    },
    default: "light",
    values: [
      { name: "light", value: "#f9fafb" }, // или #f3f4f6
      { name: "dark", value: "#1e1e1e" },
    ],
  },
};

export default preview;
