import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Link, LinkProps } from "./Link";
import { IconDate } from "../../icons/IconDate/IconDate";
import { IconLeft } from "../../icons/IconLeft/IconLeft";

export default {
  title: "МТС/Actions/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["primary", "secondary", "black", "white"],
    },
    variant: {
      control: "select",
      options: ["default", "straight-line", "dotted-line", "external", "icon-right", "icon-left"],
    },
  },
} as Meta<LinkProps>;

const Template: StoryFn<LinkProps> = (args: any) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://example.com",
  children: "Ссылка",
  variant: "default",
  theme: "primary",
};

export const AllThemes: StoryFn<LinkProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
    <div style={{ background: "#ffffff", padding: 24, borderRadius: 12, display: "flex", gap: 32, alignItems: "center" }}>
      <Link url="#" theme="primary">Primary</Link>
      <Link url="#" theme="secondary">Secondary</Link>
      <Link url="#" theme="black">Black</Link>
    </div>
    <div style={{ background: "#1D2023", padding: 24, borderRadius: 12, display: "flex", gap: 32, alignItems: "center" }}>
      <Link url="#" theme="white">White</Link>
    </div>
  </div>
);
AllThemes.parameters = { controls: { disable: true } };

export const StraightLine = Template.bind({});
StraightLine.storyName = "Link w Straight Line";
StraightLine.args = {
  url: "https://example.com",
  children: "Ссылка с линией",
  variant: "straight-line",
  theme: "primary",
};

export const DottedLine = Template.bind({});
DottedLine.storyName = "Link w Dotted Line";
DottedLine.args = {
  url: "https://example.com",
  children: "Ссылка с пунктиром",
  variant: "dotted-line",
  theme: "primary",
};

export const External = Template.bind({});
External.storyName = "Link External";
External.args = {
  url: "https://example.com",
  children: "Внешняя ссылка",
  variant: "external",
  theme: "primary",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.storyName = "Link w Right Icon";
WithRightIcon.args = {
  url: "https://example.com",
  children: "Ссылка с иконкой",
  variant: "icon-right",
  theme: "primary",
  icon: <IconDate width={16} height={16} />,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.storyName = "Link w Left Icon";
WithLeftIcon.args = {
  url: "https://example.com",
  children: "Ссылка с иконкой",
  variant: "icon-left",
  theme: "primary",
  icon: <IconLeft width={16} height={16} />,
};
