import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./type";
import Button from "./Button";
import { IconInfo, IconLeft } from "../../icons";

export default {
  title: "МТС/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tetriary", "gray", "ghost", "icon"],
    },
    btn_type: {
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
    icon: {
      control: false,
    },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => (
  <div
    style={{
      width: "100%",
      height: "200px",
      background: "#353A43",
      display: "grid",
      placeItems: "center",
      boxSizing: "border-box",
      padding: "2rem",
    }}
  >
    <Button {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  content: "Обычная кнопка",
  variant: "primary",
  btn_type: "button",
  loading: true
};

export const LoginButton = Template.bind({});
LoginButton.args = {
  content: "Войти",
  variant: "primary",
  btn_type: "button",
  width: "auto",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  content: "Перейти на сайт",
  btn_type: "link",
  variant: "primary",
  link: "https://example.com",
  tooltip: "Нажмите, чтобы перейти",
};

export const BackButton = Template.bind({});
BackButton.args = {
  content: "Назад",
  btn_type: "button",
  variant: "ghost",
  icon: <IconLeft />,
  width: "auto",
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  content: "Правила игры",
  btn_type: "button",
  variant: "ghost",
  icon: <IconInfo />,
  width: "auto",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  btn_type: "button",
  variant: "icon",
  icon: <IconInfo />,
  width: "auto",
};
