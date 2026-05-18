import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "МТС/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Avatar** — компонент для отображения пользователя. Поддерживает три режима отображения с приоритетом сверху вниз:

1. **Фото** — если передан \`src\`
2. **Инициалы** — если передан \`initials\` (без \`src\`)
3. **Силуэт** — если не передано ни то, ни другое

### Размеры

Доступно 6 размеров: **24, 32, 44, 52, 64, 80**. Радиус скругления подбирается автоматически под каждый размер, но может быть переопределён через \`borderRadius\`.

| Размер | Радиус | Инициалы |
|---|---|---|
| 24 | 8px | 1 буква |
| 32 | 12px | 2 буквы |
| 44 | 16px | 2 буквы |
| 52 | 18px | 2 буквы |
| 64 | 20px | 2 буквы |
| 80 | 24px | 2 буквы |

### Цветовые схемы

- **Default** — серый фон, нейтральный силуэт
- **Colored** — красный фон \`#FF0032\`, белый силуэт. Используется для выделения активного пользователя или специального статуса

### Силуэт (\`gender\`)

Когда нет фото и инициалов, отображается силуэт. Доступны варианты: \`neutral\`, \`male\`, \`female\`.

### Обводка (\`stroke\`)

Белая рамка вокруг фото. Используется при наложении аватаров друг на друга в группе.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "Размер аватара в пикселях.",
      control: "select",
      options: [24, 32, 44, 52, 64, 80],
    },
    src: {
      description: "URL фотографии. Имеет наивысший приоритет — при наличии инициалы и силуэт не отображаются.",
      control: "text",
    },
    alt: {
      description: "Альтернативный текст для фото (доступность).",
      control: "text",
    },
    initials: {
      description: "Инициалы пользователя (1–2 символа). При размере 24px отображается только первый символ.",
      control: "text",
    },
    gender: {
      description: "Вид силуэта-заглушки, когда нет фото и инициалов.",
      control: "select",
      options: ["neutral", "male", "female"],
    },
    colored: {
      description: "Красный фон вместо серого. Используется для выделения пользователя.",
      control: "boolean",
    },
    stroke: {
      description: "Белая обводка вокруг фото. Применяется при наложении аватаров в группе.",
      control: "boolean",
    },
    borderRadius: {
      description: "Переопределяет радиус скругления. По умолчанию подбирается автоматически под размер.",
      control: { type: "number", min: 0, max: 40 },
    },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const PHOTO = "https://i.pravatar.cc/160?img=12";
const SIZES = [24, 32, 44, 52, 64, 80] as const;

const Row = ({ bg, children }: { bg?: string; children: React.ReactNode }) => (
  <div style={{ background: bg ?? "#f2f3f7", padding: 24, borderRadius: 12, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
    {children}
  </div>
);

const Col = ({ label, children }: { label: string | number; children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    {children}
    <span style={{ fontSize: 11, color: "#969fa8", fontFamily: "sans-serif" }}>{label}px</span>
  </div>
);

export const Playground: Story = {
  name: "Playground",
  args: { size: 44, colored: false },
  render: (args) => (
    <Row>
      <Avatar {...args} />
    </Row>
  ),
};

export const WithPhoto: Story = {
  name: "Фото",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Отображение фотографии пользователя. Нижний ряд — с обводкой `stroke` для использования в группах аватаров." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} src={PHOTO} alt="Фото" /></Col>)}
      </Row>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} src={PHOTO} alt="Фото" stroke /></Col>)}
      </Row>
    </div>
  ),
};

export const WithInitials: Story = {
  name: "Инициалы",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Инициалы вместо фото. При размере 24px отображается только первая буква. Нижний ряд — с `colored`." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} initials="АВ" /></Col>)}
      </Row>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} initials="АВ" colored /></Col>)}
      </Row>
    </div>
  ),
};

export const WithSilhouette: Story = {
  name: "Силуэт",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Заглушка-силуэт, когда нет фото и инициалов. Верхний ряд — `neutral` (по умолчанию), нижний — с `colored`." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} /></Col>)}
      </Row>
      <Row>
        {SIZES.map((s) => <Col key={s} label={s}><Avatar size={s} colored /></Col>)}
      </Row>
    </div>
  ),
};

export const Genders: Story = {
  name: "Варианты силуэта",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Три варианта силуэта: `neutral`, `male`, `female`. Используются как заглушка до загрузки фото." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 32, padding: 24 }}>
      {(["neutral", "male", "female"] as const).map((gender) => (
        <div key={gender} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Avatar size={64} gender={gender} />
          <span style={{ fontSize: 11, color: "#969fa8", fontFamily: "sans-serif" }}>{gender}</span>
        </div>
      ))}
    </div>
  ),
};

export const ColorSchemes: Story = {
  name: "Цветовые схемы",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "`default` — серый нейтральный фон. `colored` — красный фон для выделения активного пользователя или особого статуса." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 48, padding: 24, flexWrap: "wrap" }}>
      {(["default", "colored"] as const).map((scheme) => (
        <div key={scheme} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 11, color: "#969fa8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{scheme}</span>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
            <Avatar size={44} colored={scheme === "colored"} />
            <Avatar size={44} initials="АВ" colored={scheme === "colored"} />
            <Avatar size={44} src={PHOTO} alt="Фото" colored={scheme === "colored"} />
          </div>
        </div>
      ))}
    </div>
  ),
};
