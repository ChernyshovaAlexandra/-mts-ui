import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "МТС/Content/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    size: { control: { type: "number", min: 16, max: 128, step: 4 } },
    borderRadius: { control: { type: "number", min: 0, max: 64, step: 1 } },
  },
} as Meta<AvatarProps>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  size: 44,
  borderRadius: 16,
};

export const Photo = Template.bind({});
Photo.args = {
  size: 44,
  borderRadius: 16,
  src: "https://i.pravatar.cc/88?img=12",
  alt: "Константин Жук",
};

export const Sizes: StoryFn<AvatarProps> = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Avatar size={32} borderRadius={12} />
    <Avatar size={44} borderRadius={16} />
    <Avatar size={64} borderRadius={20} />
    <Avatar
      size={88}
      borderRadius={28}
      src="https://i.pravatar.cc/176?img=12"
      alt="Photo"
    />
  </div>
);
Sizes.parameters = { controls: { disable: true } };
