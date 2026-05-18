import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Spinner, SpinnerProps } from "./Spinner";

export default {
  title: "МТС/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color", description: "Цвет спиннера" },
    speed: {
      control: "text",
      description: 'Скорость вращения (например, "1.5s", "2s", "500ms")',
    },
    style: {
      control: "object",
      description: "Дополнительные стили через CSSProperties",
    },
  },
} as Meta<SpinnerProps>;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#ff0032",
  speed: "1.5s",
  style: {},
};

export const Slow = Template.bind({});
Slow.args = {
  color: "#0070E5",
  speed: "3s",
};

export const Fast = Template.bind({});
Fast.args = {
  color: "#00A859",
  speed: "0.7s",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  color: "#ff9900",
  speed: "1.5s",
  style: { marginTop: "4rem" },
};
