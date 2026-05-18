import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Banner, BannerProps } from "./Banner";
import IconAttention from "../../icons/IconAttention/IconAttention";
import { mts_accent_light_warning } from "../../consts";

export default {
  title: "МТС/Banner",
  component: Banner,
  tags: ["autodocs"],
} as Meta<BannerProps>;

const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, background: "#F2F3F7", maxWidth: 400 }}>
    {children}
  </div>
);

const Template: StoryFn<BannerProps> = (args) => (
  <Stage>
    <Banner {...args} />
  </Stage>
);

export const PrimaryWithAction = Template.bind({});
PrimaryWithAction.args = {
  variant: "primary",
  title: "Заголовок",
  text: "Какое-то сообщение. Рекомендуемый размер две-три строки.",
  actionText: "Действие",
  onAction: () => console.log("action"),
};

export const PrimaryWithActionAndClose = Template.bind({});
PrimaryWithActionAndClose.args = {
  variant: "primary",
  title: "Заголовок",
  text: "Какое-то сообщение. Рекомендуемый размер две-три строки.",
  actionText: "Действие",
  onAction: () => console.log("action"),
  onClose: () => console.log("close"),
};

export const PrimaryTextOnly = Template.bind({});
PrimaryTextOnly.args = {
  variant: "primary",
  title: "Заголовок",
  text: "Какое-то сообщение. Рекомендуемый размер две-три строки.",
};

export const PrimaryWithTwoActions = Template.bind({});
PrimaryWithTwoActions.args = {
  variant: "primary",
  title: "Заголовок",
  text: "Какое-то сообщение. Рекомендуемый размер две-три строки.",
  cancelText: "Нет",
  onCancel: () => console.log("cancel"),
  actionText: "Да",
  onAction: () => console.log("action"),
};

export const SecondaryGrey = Template.bind({});
SecondaryGrey.args = {
  variant: "secondary",
  color: "grey",
  title: "Заголовок",
  text: "Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",
  linkText: "Подробнее",
  onLinkClick: () => console.log("link click"),
  icon: (
    <IconAttention
      width={20}
      height={20}
      style={{ color: mts_accent_light_warning }}
    />
  ),
  onClose: () => console.log("close"),
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.args = {
  variant: "secondary",
  color: "white",
  title: "Заголовок",
  text: "Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",
  linkText: "Подробнее",
  onLinkClick: () => console.log("link click"),
  onClose: () => console.log("close"),
};

export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  variant: "secondary",
  color: "inverted",
  title: "Заголовок",
  text: "Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",
  linkText: "Подробнее",
  onLinkClick: () => console.log("link click"),
  icon: (
    <IconAttention
      width={20}
      height={20}
      style={{ color: mts_accent_light_warning }}
    />
  ),
  onClose: () => console.log("close"),
};

export const SecondaryNoClose = Template.bind({});
SecondaryNoClose.args = {
  variant: "secondary",
  color: "grey",
  title: "Заголовок",
  text: "Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",
  linkText: "Подробнее",
  icon: (
    <IconAttention
      width={20}
      height={20}
      style={{ color: mts_accent_light_warning }}
    />
  ),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  text: "Какое-то сообщение. Рекомендуемый размер две-три строки.",
};
