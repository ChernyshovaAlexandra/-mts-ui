import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "МТС/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["H1-Wide", "H2-Wide", "H3-Wide", "H4-Wide"],
    },
  },
} as Meta<HeaderProps>;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: "Заголовок H1",
  variant: "H1-Wide",
};

export const H2 = Template.bind({});
H2.args = {
  children: "Заголовок H2",
  variant: "H2-Wide",
};

export const H3 = Template.bind({});
H3.args = {
  children: "Заголовок H3",
  variant: "H3-Wide",
};

export const H4 = Template.bind({});
H4.args = {
  children: "Заголовок H4",
  variant: "H4-Wide",
};
