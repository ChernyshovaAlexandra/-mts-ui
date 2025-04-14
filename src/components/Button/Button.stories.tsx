import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./type";
import Button from "./Button";

export default {
  title: "МТС/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    type: {
      control: "radio",
      options: ["button", "link"],
    },
    disabled: {
      control: "boolean",
    },
    tooltip: {
      control: "text",
    },
    link: {
      control: "text",
    },
    width: {
      control: "select",
      options: ["max", "auto", "200px"],
    },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Обычная кнопка",
  variant: "secondary",
  type: "button",
};

export const LoginButton = Template.bind({});
LoginButton.args = {
  content: "Войти",
  variant: "primary",
  type: "button",
  width: "auto"
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  content: "Перейти на сайт",
  btn_type: "link",
  variant: "secondary",
  type: "link",
  link: "https://example.com",
  tooltip: "Нажмите, чтобы перейти",
};
