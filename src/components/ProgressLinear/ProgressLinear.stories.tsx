import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProgressLinear } from "./ProgressLinear";

const meta: Meta<typeof ProgressLinear> = {
  title: "МТС/ProgressLinear",
  component: ProgressLinear,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**ProgressLinear** — линейный индикатор прогресса для отображения хода загрузки, обработки или выполнения задачи.

### Размеры

| Размер | Высота | Особенности |
|---|---|---|
| \`s\` | 4px | Минимальный, без текста внутри |
| \`m\` | 8px | Основной размер по умолчанию |
| \`l\` | 32px | Текст отображается внутри бара |

### Типы

| Тип | Цвет | Описание |
|---|---|---|
| \`progress\` | Зелёный | Идёт загрузка, известен процент |
| \`paused\` | Жёлтый | Загрузка приостановлена |
| \`indeterminate\` | Зелёный | Загрузка идёт, процент неизвестен — бегущая анимация |
| \`success\` | Зелёный 100% | Загрузка завершена успешно |
| \`error\` | Красный 100% | Ошибка загрузки |

### Текст под баром

- Для \`progress\` — передаётся через \`label\` (например \`"25%"\`)
- Для \`paused\` — если \`label\` не задан, подставляется \`pausedText\` (по умолчанию \`"Загрузка приостановлена"\`)
- Для \`success\` / \`error\` — текст и иконка отображаются автоматически (\`successText\`, \`errorText\`)
- В размере \`l\` текст внутри бара выводится автоматически
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: "Состояние прогресс-бара.",
      control: "radio",
      options: ["progress", "paused", "indeterminate", "success", "error"],
    },
    size: {
      description: "Размер: `s` — 4px, `m` — 8px, `l` — 32px с текстом внутри.",
      control: "radio",
      options: ["s", "m", "l"],
    },
    progress: {
      description: "Процент заполнения (0–100). Используется при `type=\"progress\"` и `type=\"paused\"`.",
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    label: {
      description: "Текст под баром для `progress`. Если не задан при `paused` — используется `pausedText`.",
      control: "text",
    },
    pausedText: {
      description: "Текст под баром при `type=\"paused\"`, если `label` не задан.",
      control: "text",
    },
    successText: {
      description: "Текст при успехе. В размере `m`/`s` — под баром с иконкой. В `l` — внутри бара.",
      control: "text",
    },
    errorText: {
      description: "Текст ошибки под баром (для всех размеров).",
      control: "text",
    },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressLinear>;

export const Default: Story = {
  name: "Default",
  args: { type: "progress", size: "m", progress: 25 },
};

export const AllStates: Story = {
  name: "Все состояния (m)",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Все типы в размере `m`: прогресс, пауза, indeterminate, успех, ошибка." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 400 }}>
      <ProgressLinear type="progress" size="m" progress={25} label="25%" />
      <ProgressLinear type="paused" size="m" progress={40} />
      <ProgressLinear type="indeterminate" size="m" />
      <ProgressLinear type="success" size="m" />
      <ProgressLinear type="error" size="m" />
    </div>
  ),
};

export const LargeSize: Story = {
  name: "Размер L",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Размер `l` (32px) — текст выводится внутри бара." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 400 }}>
      <ProgressLinear type="progress" size="l" progress={0} />
      <ProgressLinear type="progress" size="l" progress={60} />
      <ProgressLinear type="indeterminate" size="l" />
      <ProgressLinear type="success" size="l" />
      <ProgressLinear type="error" size="l" />
    </div>
  ),
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Три размера: `s` (4px), `m` (8px), `l` (32px)." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 400 }}>
      <ProgressLinear type="progress" size="s" progress={40} label="s — 4px" />
      <ProgressLinear type="progress" size="m" progress={40} label="m — 8px" />
      <ProgressLinear type="progress" size="l" progress={40} />
    </div>
  ),
};
