import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TabBar, TabBarProps } from "./TabBar";
import { IconUser } from "../../icons/IconUser/IconUser";
import { IconSettings } from "../../icons/IconSettings/IconSettings";
import { IconBookmark } from "../../icons/IconBookmark/IconBookmark";
import { IconHeart } from "../../icons/IconHeart/IconHeart";
import { IconDate } from "../../icons/IconDate/IconDate";

export default {
  title: "МТС/Navigation/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  argTypes: {
    activeIndex: { control: { type: "number", min: 0, max: 4 } },
    divider: { control: "boolean" },
    onChange: { action: "tab changed" },
  },
} as Meta<TabBarProps>;

const icon = (Icon: React.FC<React.SVGProps<SVGSVGElement>>) => (
  <Icon width={24} height={24} color="currentColor" />
);

const items5 = [
  { icon: icon(IconUser), label: "Главная" },
  { icon: icon(IconSettings), label: "Каталог" },
  { icon: icon(IconBookmark), label: "Избранное" },
  { icon: icon(IconHeart), label: "Акции" },
  { icon: icon(IconDate), label: "Профиль" },
];

const items4 = items5.slice(0, 4);
const items3 = items5.slice(0, 3);

const ControlledTemplate: StoryFn<TabBarProps> = (args) => {
  const [active, setActive] = useState(args.activeIndex ?? 0);
  return (
    <div style={{ maxWidth: 375 }}>
      <TabBar {...args} activeIndex={active} onChange={setActive} />
    </div>
  );
};

export const FiveTabs = ControlledTemplate.bind({});
FiveTabs.args = {
  items: items5,
  activeIndex: 0,
  divider: true,
};
FiveTabs.storyName = "5 вкладок";

export const FourTabs = ControlledTemplate.bind({});
FourTabs.args = {
  items: items4,
  activeIndex: 0,
  divider: true,
};
FourTabs.storyName = "4 вкладки";

export const ThreeTabs = ControlledTemplate.bind({});
ThreeTabs.args = {
  items: items3,
  activeIndex: 0,
  divider: true,
};
ThreeTabs.storyName = "3 вкладки";

export const NoDivider = ControlledTemplate.bind({});
NoDivider.args = {
  items: items5,
  activeIndex: 0,
  divider: false,
};
NoDivider.storyName = "Без разделителя";
