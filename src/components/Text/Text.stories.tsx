import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "МТС/Text",
  component: Text,
  tags: ["autodocs"],
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const P1 = Template.bind({});
P1.args = {
  children: "P1 24/32 Regular Comp",
  variant: "P1-Regular-Comp",
};

export const P2 = Template.bind({});
P2.args = {
  children: "P2 20/28 Regular Comp",
  variant: "P2-Regular-Comp",
};

export const P3 = Template.bind({});
P3.args = {
  children: "P3 17/24 Regular Comp",
  variant: "P3-Regular-Comp",
};

export const P4 = Template.bind({});
P4.args = {
  children: "P4 14/20 Regular Comp",
  variant: "P4-Regular-Comp",
};
