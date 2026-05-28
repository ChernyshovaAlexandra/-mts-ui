import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "МТС/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumbs** — хлебные крошки. Показывают текущее местоположение пользователя в иерархии страниц и позволяют вернуться на предыдущие уровни.

### Размеры

Компонент представлен в двух размерах:

| Размер | Высота строки | Шрифт | Применение |
|---|---|---|---|
| \`s\` | 20px | 14px | Компактные интерфейсы, мобильные |
| \`m\` | 24px | 17px | Стандартный размер по умолчанию |

### Состояния

- **Default** — ссылки серые, текущая страница тёмная
- **Hover** — ссылка подчёркивается при наведении
- **Icon Left** — иконка стрелки слева от первого элемента, используется как кнопка «Назад»
- **Collapsed** — длинная цепочка сокращается до первой и последних двух крошек, скрытые страницы доступны в выпадающем списке по наведению на \`...\`

### Структура

Первый элемент всегда «Главная» с ссылкой на \`/\`. Последний элемент — текущая страница, не является ссылкой. Все промежуточные — кликабельные ссылки.

\`\`\`tsx
<Breadcrumbs
  crumbs={[
    { name: "Категория", path: "/category" },
    { name: "Подкатегория", path: "/category/sub" },
    { name: "Товар", path: "/category/sub/product" },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    crumbs: {
      description: "Массив крошек. Последний элемент отображается как текущая страница (не ссылка).",
      control: "object",
    },
    size: {
      description: "Размер компонента. `s` — 14px/20px, `m` — 17px/24px.",
      control: "radio",
      options: ["s", "m"],
    },
    iconLeft: {
      description: "Иконка стрелки влево перед первым элементом. Используется для навигации «Назад».",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const sampleCrumbs = [
  { name: "Категория", path: "/category" },
  { name: "Подкатегория", path: "/category/sub" },
  { name: "Товар", path: "/category/sub/product" },
];

export const Default: Story = {
  name: "Default",
  args: {
    crumbs: sampleCrumbs,
    size: "m",
  },
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Два размера: **20 S** (14px) и **24 M** (17px)." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {size === "s" ? "20 S" : "24 M"}
          </span>
          <Breadcrumbs size={size} crumbs={[{ name: "Breadcrumb", path: "/" }]} />
        </div>
      ))}
    </div>
  ),
};

export const WithIconLeft: Story = {
  name: "Icon Left",
  args: {
    crumbs: [{ name: "Текущая страница", path: "/" }],
    size: "m",
    iconLeft: true,
  },
  parameters: {
    docs: {
      description: { story: "Иконка `←` слева от первого элемента. Используется как визуальная подсказка для навигации назад, особенно на мобильных устройствах." },
    },
  },
};

export const AllStates: Story = {
  name: "Все состояния",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Default — ссылки серые, текущая страница тёмная. Hover — подчёркивание при наведении. Icon Left — иконка-стрелка слева." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Default</span>
        <Breadcrumbs crumbs={[{ name: "Breadcrumb", path: "/" }]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Icon Left</span>
        <Breadcrumbs iconLeft crumbs={[{ name: "Breadcrumb", path: "/" }]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Многоуровневые</span>
        <Breadcrumbs crumbs={sampleCrumbs} />
      </div>
    </div>
  ),
};

export const SingleLevel: Story = {
  name: "Один уровень",
  args: {
    crumbs: [{ name: "Текущая страница", path: "/" }],
    size: "m",
  },
  parameters: {
    docs: {
      description: { story: "Минимальный вариант — только «Главная» и текущая страница." },
    },
  },
};

export const MobileLongLabels: Story = {
  name: "Сокращение длинной цепочки",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Если цепочка не помещается, отображаются первая и последние две крошки. Скрытые страницы открываются в выпадающем списке при наведении на `...`.",
      },
    },
  },
  render: () => (
    <div style={{ width: 320 }}>
      <Breadcrumbs
        size="s"
        crumbs={[
          { name: "Очень длинная категория товаров", path: "/category" },
          { name: "Раздел с длинным названием", path: "/category/section" },
          { name: "Подраздел каталога", path: "/category/section/subsection" },
          { name: "Карточки товаров", path: "/category/section/subsection/products" },
          { name: "Текущая страница с длинным названием", path: "/category/section/subsection/products/page" },
        ]}
      />
    </div>
  ),
};
