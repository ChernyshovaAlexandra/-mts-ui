import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo"; // Убедись, что путь к файлу компонента правильный

export default {
  title: "МТС/Logo",
  component: Logo,
} as Meta;

const Template: StoryFn = () => <Logo />;

export const Default = Template.bind({});
