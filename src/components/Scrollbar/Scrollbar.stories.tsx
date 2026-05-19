import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Scrollbar } from "./Scrollbar";

const meta: Meta<typeof Scrollbar> = {
  title: "МТС/Scrollbar",
  component: Scrollbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Scrollbar** — контейнер с кастомным скроллбаром в стиле дизайн-системы МТС.

Оборачивает любой контент и заменяет системный скроллбар на тонкий стилизованный с закруглённым бегунком.

### Размеры

| Размер | Толщина бегунка | Когда использовать |
|---|---|---|
| \`s\` | 4px | Компактные блоки: дропдауны, сайдбары |
| \`l\` | 8px | Крупные области: модальные окна, панели |

### Ориентация

| Значение | Поведение |
|---|---|
| \`vertical\` | Только вертикальный скролл |
| \`horizontal\` | Только горизонтальный скролл |
| \`both\` | Оба направления |

### Ограничение области

Используйте \`maxHeight\` и \`maxWidth\` для задания размера прокручиваемой области:

\`\`\`tsx
<Scrollbar maxHeight="300px">
  {/* длинный контент */}
</Scrollbar>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "Толщина бегунка скроллбара.",
      control: "radio",
      options: ["s", "l"],
    },
    orientation: {
      description: "Направление прокрутки.",
      control: "radio",
      options: ["vertical", "horizontal", "both"],
    },
    maxHeight: {
      description: "Максимальная высота контейнера.",
      control: "text",
    },
    maxWidth: {
      description: "Максимальная ширина контейнера.",
      control: "text",
    },
    children: { control: false },
    className: { control: false },
    style: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Scrollbar>;

const LoremText = () => (
  <>
    {Array.from({ length: 8 }, (_, i) => (
      <p key={i} style={{ margin: "0 0 12px", fontFamily: "sans-serif", fontSize: 14, lineHeight: 1.5, color: "#1D2023" }}>
        Строка {i + 1}. МТС — российская телекоммуникационная компания, предоставляющая услуги мобильной и фиксированной связи.
      </p>
    ))}
  </>
);

const WideContent = () => (
  <div style={{ display: "flex", gap: 16, width: "800px", padding: "4px 0" }}>
    {Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        style={{
          flexShrink: 0,
          width: 80,
          height: 60,
          background: i % 2 === 0 ? "#F2F3F7" : "#E2E5EB",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 12,
          color: "#626C77",
        }}
      >
        {i + 1}
      </div>
    ))}
  </div>
);

export const Default: Story = {
  name: "Default",
  args: {
    size: "s",
    orientation: "vertical",
    maxHeight: "200px",
  },
  render: (args) => (
    <Scrollbar {...args}>
      <LoremText />
    </Scrollbar>
  ),
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Размер `s` — бегунок 4px, `l` — 8px." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 32 }}>
      {(["s", "l"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: "sans-serif", fontSize: 12, color: "#626C77" }}>size={size}</span>
          <Scrollbar size={size} orientation="vertical" maxHeight="180px" style={{ width: 240 }}>
            <LoremText />
          </Scrollbar>
        </div>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  name: "Вертикальный",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Вертикальный скролл — по умолчанию. Задайте `maxHeight` для ограничения высоты." },
    },
  },
  render: () => (
    <Scrollbar orientation="vertical" size="s" maxHeight="200px" style={{ width: 280 }}>
      <LoremText />
    </Scrollbar>
  ),
};

export const Horizontal: Story = {
  name: "Горизонтальный",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Горизонтальный скролл. Задайте `maxWidth` для ограничения ширины." },
    },
  },
  render: () => (
    <Scrollbar orientation="horizontal" size="s" maxWidth="360px">
      <WideContent />
    </Scrollbar>
  ),
};

export const Both: Story = {
  name: "Оба направления",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Оба скроллбара активны одновременно. Угол пересечения прозрачный." },
    },
  },
  render: () => (
    <Scrollbar orientation="both" size="l" maxHeight="180px" maxWidth="360px">
      <div style={{ width: 800 }}>
        <LoremText />
      </div>
    </Scrollbar>
  ),
};

export const LargeSize: Story = {
  name: "Размер L",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Размер `l` с бегунком 8px — для крупных прокручиваемых областей." },
    },
  },
  render: () => (
    <Scrollbar orientation="vertical" size="l" maxHeight="200px" style={{ width: 280 }}>
      <LoremText />
    </Scrollbar>
  ),
};
