import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "МТС/Text",
  component: Text,
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => (
  <Text {...args}>Какой-то текст для примера</Text>
);

export const Default = Template.bind({});
