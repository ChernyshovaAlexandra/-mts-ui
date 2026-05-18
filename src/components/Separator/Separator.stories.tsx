import { Meta, StoryFn } from "@storybook/react";
import { Separator } from "./Separator";

export default {
  title: "МТС/Separator",
  component: Separator,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => <Separator {...args} />;

export const HorizontalDefault = Template.bind({});
HorizontalDefault.args = {
  orientation: "horizontal",
  thickness: 1,
  length: "100%",
  color: "#E0E0E0",
  margin: "8px 0",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  thickness: 2,
  length: "40px",
  color: "#999",
  margin: "0 12px",
};

export const CustomColorAndThickness = Template.bind({});
CustomColorAndThickness.args = {
  color: "#ff0000",
  thickness: 3,
  length: "60%",
  orientation: "horizontal",
  margin: "16px 0",
};
