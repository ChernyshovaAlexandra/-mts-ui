import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "МТС/Typography/Text",
  component: Text,
  tags: ["autodocs"],
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const P1Regular = Template.bind({});
P1Regular.args = {
  children: "P1 24/130% Regular Comp",
  variant: "P1-Regular-Comp",
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  children: "P2 20/140% Regular Comp",
  variant: "P2-Regular-Comp",
};

export const P3Bold = Template.bind({});
P3Bold.args = {
  children: "P3 17/140% Bold Comp",
  variant: "P3-Bold-Comp",
};

export const P3Medium = Template.bind({});
P3Medium.args = {
  children: "P3 17/140% Medium Comp",
  variant: "P3-Medium-Comp",
};

export const P3Regular = Template.bind({});
P3Regular.args = {
  children: "P3 17/140% Regular Comp",
  variant: "P3-Regular-Comp",
};

export const P4Bold = Template.bind({});
P4Bold.args = {
  children: "P4 16/140% Bold Comp",
  variant: "P4-Bold-Comp",
};

export const P4Medium = Template.bind({});
P4Medium.args = {
  children: "P4 16/140% Medium Comp",
  variant: "P4-Medium-Comp",
};

export const P4MediumUpp = Template.bind({});
P4MediumUpp.args = {
  children: "P4 14/140% Medium Upp Comp",
  variant: "P4-Medium-Upp-Comp",
};

export const P4Regular = Template.bind({});
P4Regular.args = {
  children: "P4 16/140% Regular Comp",
  variant: "P4-Regular-Comp",
};
