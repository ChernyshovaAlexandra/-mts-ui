import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "МТС/Text",
  component: Text,
  tags: ["autodocs"],
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args: any) => (
  <Text {...args}>Какой-то текст для примера</Text>
);

export const Default = Template.bind({});
