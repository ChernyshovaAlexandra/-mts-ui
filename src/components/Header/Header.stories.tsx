import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "МТС/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta<HeaderProps>;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Welcome to МТС",
};
