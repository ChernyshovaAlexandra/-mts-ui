import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toast, ToastProps } from "./Toast";
import { Avatar } from "../Avatar/Avatar";

export default {
  title: "МТС/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [undefined, "success", "info", "warning", "error"],
    },
    position: {
      control: "select",
      options: ["bottom-right", "bottom-center", "top-right", "top-center"],
    },
    variant: {
      control: "inline-radio",
      options: ["dark", "light"],
    },
    autoHideDuration: { control: "number" },
  },
} as Meta<ToastProps>;

const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ position: "relative", minHeight: 200, background: "#F2F3F7", padding: 16 }}>
    {children}
  </div>
);

const Template: StoryFn<ToastProps> = (args) => (
  <Stage>
    <Toast {...args} />
  </Stage>
);

export const MessageOnly = Template.bind({});
MessageOnly.args = {
  message: "Сообщение",
  autoHideDuration: 0,
};

export const Success = Template.bind({});
Success.args = {
  message: "Сообщение",
  icon: "success",
  autoHideDuration: 0,
};

export const Info = Template.bind({});
Info.args = {
  message: "Сообщение",
  icon: "info",
  autoHideDuration: 0,
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Сообщение",
  icon: "warning",
  autoHideDuration: 0,
};

export const Error = Template.bind({});
Error.args = {
  message: "Сообщение",
  icon: "error",
  autoHideDuration: 0,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "Заголовок",
  message: "Сообщение",
  autoHideDuration: 0,
};

export const WithTitleAndIcon = Template.bind({});
WithTitleAndIcon.args = {
  title: "Заголовок",
  message: "Сообщение",
  icon: "success",
  autoHideDuration: 0,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  message: "Под номером +7 (999) 999-99-99",
  avatar: <Avatar size={44} gender="male" />,
  autoHideDuration: 0,
};

export const WithAvatarAndTitle = Template.bind({});
WithAvatarAndTitle.args = {
  title: "Вы авторизовались",
  message: "Под номером +7 (999) 999-99-99",
  avatar: <Avatar size={44} gender="male" />,
  autoHideDuration: 0,
};

export const TopRight = Template.bind({});
TopRight.args = {
  message: "Сообщение",
  icon: "info",
  position: "top-right",
  autoHideDuration: 0,
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  message: "Сообщение",
  icon: "info",
  position: "top-center",
  autoHideDuration: 0,
};

export const BottomCenter = Template.bind({});
BottomCenter.args = {
  message: "Сообщение",
  icon: "success",
  position: "bottom-center",
  autoHideDuration: 0,
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  message: "Сообщение",
  icon: "success",
  variant: "light",
  autoHideDuration: 0,
};

export const LightWithTitle = Template.bind({});
LightWithTitle.args = {
  title: "Заголовок",
  message: "Сообщение",
  icon: "info",
  variant: "light",
  autoHideDuration: 0,
};
