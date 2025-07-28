import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "МТС/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        labels: {
          // primary: "primary (красный)",
          gray: "gray (серый)",
          pill: "pill (белая таблетка)",
        },
      },
      options: ["gray", "pill"],
    },
    title: { control: "text" },
  },
  parameters: {
    backgrounds: {
      /* добавляем пресет цвета */
      values: [{ name: "grey canvas", value: "#5f666d" }],
      /* и делаем его дефолтным */
      default: "grey canvas",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    title: "Вопрос №5",
    variant: "pill",
  },
};
