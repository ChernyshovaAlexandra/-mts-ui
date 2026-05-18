import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InlineEdit } from "./InlineEdit";

const meta: Meta<typeof InlineEdit> = {
  title: "МТС/InlineEdit",
  component: InlineEdit,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**InlineEdit** — компонент для редактирования текста прямо на месте, без перехода на отдельную форму.

### Применение

Позволяет редактировать или создавать текстовый блок. Одновременно можно редактировать только одну строку в списке или таблице.

### Типы (\`showIcon\`)

Признак редактирования отображается в виде иконки карандаша:

| Тип | Поведение |
|---|---|
| \`showIcon={true}\` | **Icon On** — иконка видна всегда |
| \`showIcon={false}\` | **Icon Off** — иконка появляется только при наведении |

### Размеры

| Размер | Высота | Шрифт |
|---|---|---|
| \`s\` | 16px | 12px |
| \`m\` | 20px | 14px |
| \`l\` | 24px | 17px |

### Контекст фона (\`bg\`)

Определяет цвет подсветки при наведении, зависит от фона страницы:

| Значение | Hover фон | Когда использовать |
|---|---|---|
| \`primary\` | \`#E6E9F0\` | На белом фоне страницы |
| \`secondary\` | \`#FFFFFF\` | На сером фоне секции |
| \`ghost\` | Прозрачный | На цветном или кастомном фоне |

### Управление

- **Клик** — активирует режим редактирования
- **Enter** — сохраняет значение
- **Escape** — отменяет изменения и восстанавливает исходное значение
- **Blur** — сохраняет значение
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: "Текущее значение.",
      control: "text",
    },
    placeholder: {
      description: "Плейсхолдер, когда значение пустое.",
      control: "text",
    },
    size: {
      description: "Размер компонента.",
      control: "radio",
      options: ["s", "m", "l"],
    },
    bg: {
      description: "Контекст фона — влияет на цвет hover-подсветки.",
      control: "radio",
      options: ["primary", "secondary", "ghost"],
    },
    showIcon: {
      description: "Icon On — иконка видна всегда. Icon Off — только при наведении.",
      control: "boolean",
    },
    disabled: {
      description: "Отключает редактирование.",
      control: "boolean",
    },
    onSave: { action: "saved" },
    onCancel: { action: "cancelled" },
    onChange: { action: "changed" },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof InlineEdit>;

const Controlled = (props: Omit<React.ComponentProps<typeof InlineEdit>, "value" | "onChange">) => {
  const [value, setValue] = useState("Inline Edit");
  return <InlineEdit {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  name: "Default",
  render: (args) => <Controlled {...args} />,
  args: { size: "m", bg: "primary", showIcon: true },
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Три размера: **16 Small**, **20 Medium**, **24 Large**." },
    },
  },
  render: () => {
    const SizeDemo = ({ size, label }: { size: "s" | "m" | "l"; label: string }) => {
      const [value, setValue] = useState("Inline Edit");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
          <InlineEdit size={size} value={value} onChange={setValue} />
        </div>
      );
    };
    return (
      <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
        <SizeDemo size="s" label="16 Small" />
        <SizeDemo size="m" label="20 Medium" />
        <SizeDemo size="l" label="24 Large" />
      </div>
    );
  },
};

export const IconOnOff: Story = {
  name: "Icon On / Icon Off",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "**Icon On** — иконка карандаша видна всегда. **Icon Off** — появляется только при наведении." },
    },
  },
  render: () => {
    const Demo = ({ showIcon, label }: { showIcon: boolean; label: string }) => {
      const [value, setValue] = useState("Inline Edit");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
          <InlineEdit showIcon={showIcon} value={value} onChange={setValue} />
        </div>
      );
    };
    return (
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
        <Demo showIcon label="Icon On" />
        <Demo showIcon={false} label="Icon Off" />
      </div>
    );
  },
};

export const Backgrounds: Story = {
  name: "Контекст фона",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Hover-подсветка меняется в зависимости от фона страницы." },
    },
  },
  render: () => {
    const Demo = ({ bg, bgColor, label }: { bg: "primary" | "secondary" | "ghost"; bgColor: string; label: string }) => {
      const [value, setValue] = useState("Inline Edit");
      return (
        <div style={{ background: bgColor, padding: "16px 20px", borderRadius: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
          <InlineEdit bg={bg} value={value} onChange={setValue} />
        </div>
      );
    };
    return (
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Demo bg="primary" bgColor="#FFFFFF" label="Primary Bg" />
        <Demo bg="secondary" bgColor="#F2F3F7" label="Secondary Bg" />
        <Demo bg="ghost" bgColor="#1D2023" label="Ghost" />
      </div>
    );
  },
};

export const Empty: Story = {
  name: "Пустое значение",
  render: (args) => {
    const [value, setValue] = useState("");
    return <InlineEdit {...args} value={value} onChange={setValue} />;
  },
  args: { size: "m", placeholder: "Введите текст", showIcon: true },
  parameters: {
    docs: {
      description: { story: "Когда значение пустое — отображается плейсхолдер серым цветом." },
    },
  },
};
