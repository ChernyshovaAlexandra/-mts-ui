import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  title: "МТС/Link",
  component: Link,
} as Meta<LinkProps>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: "https://example.com",
  children: "Click Here",
};

export const Underlined = Template.bind({});

Underlined.args = {
  url: "https://example.com",
  children: "Click Here",
  underlined: true,
};
