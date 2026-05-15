import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./type";
import Button from "./Button";
import { IconInfo, IconLeft } from "../../icons";

const SIZES = ["xs", "s", "m", "l", "xl"] as const;

const lightBg = "#ffffff";
const darkBg = "#353A43";

const SizeRow = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <div
    style={{
      background: bg,
      padding: "32px 24px",
      display: "flex",
      alignItems: "flex-end",
      gap: 16,
      borderRadius: 12,
      flexWrap: "wrap",
    }}
  >
    {children}
  </div>
);

const SizeLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    {children}
  </div>
);

const Label = ({ text, dark }: { text: string; dark?: boolean }) => (
  <span
    style={{
      fontSize: 11,
      color: dark ? "rgba(255,255,255,0.5)" : "#969fa8",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    }}
  >
    {text}
  </span>
);

export default {
  title: "МТС/Actions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "alternative",
        "secondary",
        "tetriary",
        "gray",
        "ghost",
        "icon",
        "negative",
        "menu-item",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
    },
    btn_type: {
      control: "radio",
      options: ["button", "link"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    tooltip: { control: "text" },
    link: { control: "text" },
    width: {
      control: "select",
      options: ["max", "auto", "200px"],
    },
    icon: { control: false },
  },
} as Meta<ButtonProps>;

// ─── Интерактивный (все контролы доступны) ───────────────────────────────────
const Template: StoryFn<ButtonProps> = (args) => {
  const darkVariants = ["alternative", "gray", "icon"];
  const bg = darkVariants.includes(args.variant) ? darkBg : lightBg;
  return (
    <div style={{ background: bg, padding: "2rem", display: "grid", placeItems: "center", borderRadius: 12 }}>
      <Button {...args} />
    </div>
  );
};

// ─── Primary ─────────────────────────────────────────────────────────────────
export const Primary: StoryFn<ButtonProps> = () => (
  <SizeRow bg={lightBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="primary" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Alternative ─────────────────────────────────────────────────────────────
export const Alternative: StoryFn<ButtonProps> = () => (
  <SizeRow bg={darkBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="alternative" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} dark />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Secondary ───────────────────────────────────────────────────────────────
export const Secondary: StoryFn<ButtonProps> = () => (
  <SizeRow bg={lightBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="secondary" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Tetriary (Always White) ──────────────────────────────────────────────────
export const Tetriary: StoryFn<ButtonProps> = () => (
  <SizeRow bg={darkBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="tetriary" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} dark />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Gray / Blur ──────────────────────────────────────────────────────────────
export const Gray: StoryFn<ButtonProps> = () => (
  <SizeRow bg={darkBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="gray" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} dark />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Ghost ────────────────────────────────────────────────────────────────────
export const Ghost: StoryFn<ButtonProps> = () => (
  <SizeRow bg={lightBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="ghost" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Negative ────────────────────────────────────────────────────────────────
export const Negative: StoryFn<ButtonProps> = () => (
  <SizeRow bg={lightBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="negative" btn_type="button" size={size} content="Кнопка" width="auto" />
        <Label text={size} />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── Icon ─────────────────────────────────────────────────────────────────────
export const Icon: StoryFn<ButtonProps> = () => (
  <SizeRow bg={darkBg}>
    {SIZES.map((size) => (
      <SizeLabel key={size}>
        <Button variant="icon" btn_type="button" size={size} icon={<IconInfo />} width="auto" />
        <Label text={size} dark />
      </SizeLabel>
    ))}
  </SizeRow>
);

// ─── С иконкой ───────────────────────────────────────────────────────────────
export const WithIcon: StoryFn<ButtonProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
    <SizeRow bg={lightBg}>
      {SIZES.map((size) => (
        <SizeLabel key={size}>
          <Button variant="primary" btn_type="button" size={size} content="Кнопка" icon={<IconLeft />} width="auto" />
          <Label text={size} />
        </SizeLabel>
      ))}
    </SizeRow>
    <SizeRow bg={lightBg}>
      {SIZES.map((size) => (
        <SizeLabel key={size}>
          <Button variant="secondary" btn_type="button" size={size} content="Кнопка" icon={<IconInfo />} width="auto" />
          <Label text={size} />
        </SizeLabel>
      ))}
    </SizeRow>
  </div>
);

// ─── Disabled ────────────────────────────────────────────────────────────────
export const Disabled: StoryFn<ButtonProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
    <SizeRow bg={lightBg}>
      {SIZES.map((size) => (
        <SizeLabel key={size}>
          <Button variant="primary" btn_type="button" size={size} content="Кнопка" width="auto" disabled />
          <Label text={size} />
        </SizeLabel>
      ))}
    </SizeRow>
    <SizeRow bg={darkBg}>
      {SIZES.map((size) => (
        <SizeLabel key={size}>
          <Button variant="alternative" btn_type="button" size={size} content="Кнопка" width="auto" disabled />
          <Label text={size} dark />
        </SizeLabel>
      ))}
    </SizeRow>
  </div>
);

// ─── Loading ─────────────────────────────────────────────────────────────────
export const Loading: StoryFn<ButtonProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
    <SizeRow bg={lightBg}>
      {SIZES.map((size) => (
        <SizeLabel key={size}>
          <Button variant="primary" btn_type="button" size={size} content="Кнопка" width="auto" loading />
          <Label text={size} />
        </SizeLabel>
      ))}
    </SizeRow>
  </div>
);

// ─── Интерактивный ───────────────────────────────────────────────────────────
export const Playground = Template.bind({});
Playground.args = {
  content: "Кнопка",
  variant: "primary",
  size: "l",
  btn_type: "button",
  width: "auto",
};
