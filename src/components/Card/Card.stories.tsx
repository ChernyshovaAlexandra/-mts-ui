import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, CardProps } from "./Card";

export default {
  title: "МТС/Layout/Card",
  component: Card,
  tags: ["autodocs"],
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => (
  <div style={{ padding: 24, background: "#F2F3F7", maxWidth: 360 }}>
    <Card {...args} />
  </div>
);

const Content = () => (
  <div>
    <div style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 17, fontWeight: 500, lineHeight: "24px", color: "#1d2023" }}>
      Заголовок
    </div>
    <div style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 14, lineHeight: "20px", color: "#626c77" }}>
      Подзаголовок
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: <Content />,
};

export const DefaultNoShadow = Template.bind({});
DefaultNoShadow.args = {
  variant: "default-no-shadow",
  children: <Content />,
};
DefaultNoShadow.decorators = [
  (Story) => (
    <div style={{ padding: 24, background: "#E6E9F0", maxWidth: 360 }}>
      <Story />
    </div>
  ),
];

export const Grey = Template.bind({});
Grey.args = {
  variant: "grey",
  children: <Content />,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: <Content />,
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: "transparent",
  children: <Content />,
};
Transparent.decorators = [
  (Story) => (
    <div style={{ padding: 24, background: "#1d2023", maxWidth: 360 }}>
      <Story />
    </div>
  ),
];

export const Clickable = Template.bind({});
Clickable.args = {
  variant: "default",
  onClick: () => console.log("card clicked"),
  children: <Content />,
};
