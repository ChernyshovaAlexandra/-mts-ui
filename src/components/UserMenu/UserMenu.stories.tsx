import { Meta, StoryFn } from "@storybook/react";
import { UserMenu, UserMenuProps } from "./UserMenu";
import { Button } from "../Button/Button";

export default {
  title: "МТС/UserMenu",
  component: UserMenu,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    avatarSrc: { control: "text" },
    avatarAlt: { control: "text" },
  },
  parameters: {
    backgrounds: {
      values: [{ name: "grey canvas", value: "#F2F3F7" }],
      default: "grey canvas",
    },
  },
} as Meta<UserMenuProps>;

const Template: StoryFn<UserMenuProps> = (args) => (
  <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>
);

export const Default = Template.bind({});
Default.args = {
  name: "Константин Жук",
  role: "Администратор",
};

export const WithPhoto = Template.bind({});
WithPhoto.args = {
  name: "Константин Жук",
  role: "Администратор",
  avatarSrc: "https://i.pravatar.cc/88?img=12",
};

export const WithoutRole = Template.bind({});
WithoutRole.args = {
  name: "Константин Жук",
};

export const WithMultipleActions: StoryFn<UserMenuProps> = (args) => (
  <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Профиль
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Настройки
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Выйти
    </Button>
  </UserMenu>
);
WithMultipleActions.args = {
  name: "Константин Жук",
  role: "Администратор",
  avatarSrc: "https://i.pravatar.cc/88?img=12",
};
