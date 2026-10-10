import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, type CardTheme } from "./Card";
import { Text } from "../Text/Text";
import {
  mts_card_colors, mts_bg_lower, mts_bg_primary,
  mts_bg_inverted, mts_radius_32, mts_text_primary,
  mts_text_secondary, mts_text_inverted, mts_greyscale_400,
} from "../../consts";

const meta: Meta<typeof Card> = {
  title: "МТС/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Card — контейнер содержимого по гайду MTS Design System.

### Размеры
S и Mobile: радиус 24px, отступ 16px.
M: радиус 32px, отступ 24px. Допустимые радиусы M: 40, 48, 64, 80px;
увеличенный padding задаётся явно (не меньше 24px). Формулы зависимости нет.
size задаётся потребителем; библиотека не назначает неподтверждённые брейкпоинты.
radius и padding применяются только к M.

### Стили и темы
default — Primary Elevated с тенью Low на Primary.
default-no-shadow — Secondary Elevated на Secondary; при backgroundContext="lower"
использует Primary Elevated.
grey — Secondary на Primary.
outline — Primary и Background/Stroke на Primary.
transparent — Controls/Blur на контрастном фоне или графике; blur={false} отключает размытие.
theme="light" | "dark" выбирает цвета поверхности, но не меняет типографику дочерних элементов.

### Состояния
Полная кликабельность допустима при отсутствии вложенных кнопок и других действий.
onClick включает интерактивные состояния. Hover/Focus поднимают карточку на 4px.
Middle добавляется только default и default-no-shadow.
Pressed возвращает исходное положение и исходную тень.
Focus не добавляет границу, меняющую размер содержимого.
Transparent использует согласованное исходное положение 0, Hover/Focus -4px, Pressed 0.

### Вложенность
Радиус и горизонтальный отступ внешней скруглённой поверхности должны быть
строго больше соответствующих параметров вложенной карточки.

CardMedia, масштабирование изображения и смена ракурса 3D не реализованы:
эта работа отложена по поручению Александры.
Источник: https://www.figma.com/design/sQwzp89bE66JmSfG9DTyFY/?node-id=2272-6006
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["default", "default-no-shadow", "grey", "outline", "transparent"] },
    size: { control: "radio", options: ["s", "m", "mobile"] },
    theme: { control: "radio", options: ["light", "dark"] },
    radius: { control: "select", options: [32, 40, 48, 64, 80], description: "Радиус только для M." },
    padding: { control: { type: "number", min: 24 }, description: "Отступ только для M; минимум 24px." },
    backgroundContext: { control: "radio", options: ["secondary", "lower"] },
    blur: { control: "boolean", description: "Размытие Transparent." },
    onClick: { description: "Не использовать вместе с вложенными кнопками." },
    children: { control: false },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

const Content = ({ theme = "light" }: { theme?: CardTheme }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <Text variant="P3-Medium-Comp" style={{ color: theme === "dark" ? mts_text_inverted : mts_text_primary }}>Заголовок</Text>
    <Text variant="P4-Regular-Comp" style={{ color: theme === "dark" ? mts_greyscale_400 : mts_text_secondary }}>Подзаголовок</Text>
  </div>
);
const wrap = (background: string, maxWidth = 360) => (Story: React.FC) => (
  <div style={{ padding: 24, background, maxWidth }}><Story /></div>
);

export const Default: Story = {
  name: "Default — на Primary", decorators: [wrap(mts_bg_primary)],
  args: { variant: "default", children: <Content /> },
};
export const DefaultNoShadow: Story = {
  name: "Default No Shadow — на Secondary", decorators: [wrap(mts_card_colors.light.secondary)],
  args: { variant: "default-no-shadow", children: <Content /> },
};
export const Grey: Story = {
  name: "Grey — на Primary", decorators: [wrap(mts_bg_primary)],
  args: { variant: "grey", children: <Content /> },
};
export const Outline: Story = {
  name: "Outline — на Primary", decorators: [wrap(mts_bg_primary)],
  args: { variant: "outline", children: <Content /> },
};
export const Transparent: Story = {
  name: "Transparent — на контрастном фоне", decorators: [wrap(mts_bg_inverted)],
  args: { variant: "transparent", children: <Content theme="dark" /> },
};
export const Clickable: Story = {
  name: "Кликабельная", decorators: [wrap(mts_bg_primary)],
  args: { variant: "default", onClick: () => console.log("card clicked"), children: <Content /> },
};
export const Medium: Story = {
  name: "M — 32/24", decorators: [wrap(mts_bg_primary, 448)],
  args: { size: "m", children: <Content /> },
};
export const MediumLarge: Story = {
  name: "M — 40/32, явные параметры", decorators: [wrap(mts_bg_primary, 600)],
  args: { size: "m", radius: 40, padding: 32, children: <Content /> },
};
export const Mobile: Story = {
  name: "Mobile — 24/16", decorators: [wrap(mts_bg_primary)],
  args: { size: "mobile", children: <Content /> },
};
export const DarkMode: Story = {
  name: "Dark Mode", decorators: [wrap(mts_card_colors.dark.secondary)],
  args: { variant: "default-no-shadow", theme: "dark", children: <Content theme="dark" /> },
};
export const TransparentWithoutBlur: Story = {
  name: "Transparent — без размытия", decorators: [wrap(mts_bg_inverted)],
  args: { variant: "transparent", blur: false, children: <Content theme="dark" /> },
};
export const AllVariants: Story = {
  name: "Все варианты",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["default", "default-no-shadow", "grey", "outline", "transparent"] as const).map(variant => (
        <div key={variant} style={{ padding: 24, borderRadius: mts_radius_32,
          background: variant === "transparent" ? mts_bg_inverted : variant === "default-no-shadow" ? mts_bg_lower : mts_bg_primary }}>
          <Card variant={variant}><Content theme={variant === "transparent" ? "dark" : "light"} /></Card>
        </div>
      ))}
    </div>
  ),
};
