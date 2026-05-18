import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { IconDate } from "../../icons/IconDate/IconDate";
import { IconLeft } from "../../icons/IconLeft/IconLeft";
import { mts_bg_inverted } from "../../consts";

const meta: Meta<typeof Link> = {
  title: "МТС/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Link** — текстовая ссылка. Поддерживает навигацию через \`href\` или React Router, несколько визуальных вариантов и цветовых тем.

### Навигация

| Проп | Когда использовать |
|---|---|
| \`url\` | Обычная HTML-ссылка (\`href\`) |
| \`to\` | React Router — рендерит \`<RouterLink>\` без перезагрузки страницы |

### Варианты (\`variant\`)

| Значение | Описание |
|---|---|
| \`default\` | Без подчёркивания, подчёркивание появляется при hover |
| \`straight-line\` | Всегда подчёркнут сплошной линией, убирается при hover |
| \`dotted-line\` | Подчёркнут пунктиром |
| \`external\` | Автоматически добавляет иконку →, открывает в новой вкладке с \`rel="noopener noreferrer"\` |
| \`icon-right\` | Произвольная иконка справа от текста |
| \`icon-left\` | Произвольная иконка слева от текста |

### Темы (\`theme\`)

| Значение | Цвет | Когда использовать |
|---|---|---|
| \`primary\` | Синий \`#0070E5\` | Основная ссылка на светлом фоне |
| \`secondary\` | Серый \`#626C77\` | Второстепенная ссылка |
| \`black\` | Тёмный \`#1D2023\` | В навигации и меню |
| \`white\` | Белый \`#FAFAFA\` | На тёмном фоне |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      description: "Визуальный стиль ссылки.",
      control: "select",
      options: ["default", "straight-line", "dotted-line", "external", "icon-right", "icon-left"],
    },
    theme: {
      description: "Цветовая тема. Определяет цвет текста.",
      control: "select",
      options: ["primary", "secondary", "black", "white"],
    },
    url: {
      description: "Адрес ссылки — рендерит обычный `<a href>`. Используйте `to` для React Router.",
      control: "text",
    },
    to: {
      description: "Путь для React Router (`<RouterLink to>`). Не вызывает перезагрузку страницы.",
      control: "text",
    },
    underlined: {
      description: "Принудительно добавляет постоянное подчёркивание (для `default`-варианта).",
      control: "boolean",
    },
    icon: {
      description: "Иконка для вариантов `icon-right` и `icon-left`.",
      control: false,
    },
    type: {
      description: "`menuItem` — добавляет анимацию подчёркивания снизу при hover, как в пунктах меню.",
      control: "radio",
      options: ["link", "menuItem"],
    },
    children: { control: "text" },
    style: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
    {children}
  </div>
);

const Label = ({ text }: { text: string }) => (
  <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", minWidth: 100 }}>
    {text}
  </span>
);

export const Default: Story = {
  name: "Default",
  args: {
    url: "#",
    children: "Ссылка",
    variant: "default",
    theme: "primary",
  },
};

export const AllVariants: Story = {
  name: "Все варианты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Все визуальные варианты ссылки с темой `primary`." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {(
        [
          { variant: "default" as const, label: "default", icon: undefined },
          { variant: "straight-line" as const, label: "straight-line", icon: undefined },
          { variant: "dotted-line" as const, label: "dotted-line", icon: undefined },
          { variant: "external" as const, label: "external", icon: undefined },
          { variant: "icon-right" as const, label: "icon-right", icon: <IconDate width={16} height={16} /> },
          { variant: "icon-left" as const, label: "icon-left", icon: <IconLeft width={16} height={16} /> },
        ]
      ).map(({ variant, label, icon }) => (
        <Row key={variant}>
          <Label text={label} />
          <Link url="#" variant={variant} theme="primary" icon={icon}>
            Текст ссылки
          </Link>
        </Row>
      ))}
    </div>
  ),
};

export const AllThemes: Story = {
  name: "Все темы",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Цветовые темы. `white` используется на тёмном фоне." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ padding: "16px 24px", background: "#fff", borderRadius: 12, display: "flex", gap: 32, alignItems: "center" }}>
        <Label text="primary" /><Link url="#" theme="primary">Ссылка</Link>
        <Label text="secondary" /><Link url="#" theme="secondary">Ссылка</Link>
        <Label text="black" /><Link url="#" theme="black">Ссылка</Link>
      </div>
      <div style={{ padding: "16px 24px", background: mts_bg_inverted, borderRadius: 12, display: "flex", gap: 32, alignItems: "center" }}>
        <Label text="white" /><Link url="#" theme="white">Ссылка</Link>
      </div>
    </div>
  ),
};

export const External: Story = {
  name: "Внешняя ссылка",
  args: {
    url: "https://mts.ru",
    children: "Перейти на сайт МТС",
    variant: "external",
    theme: "primary",
  },
  parameters: {
    docs: {
      description: { story: "Автоматически открывается в новой вкладке. Добавляет `rel=\"noopener noreferrer\"` для безопасности." },
    },
  },
};

export const WithIcons: Story = {
  name: "С иконками",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Произвольная иконка слева или справа от текста." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Link url="#" variant="icon-left" theme="primary" icon={<IconLeft width={16} height={16} />}>
        Назад
      </Link>
      <Link url="#" variant="icon-right" theme="primary" icon={<IconDate width={16} height={16} />}>
        Выбрать дату
      </Link>
    </div>
  ),
};

export const MenuItem: Story = {
  name: "Пункт меню",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "`type=\"menuItem\"` добавляет анимированное подчёркивание снизу при наведении — используется в навигационных меню." },
    },
  },
  render: () => (
    <nav style={{ display: "flex", gap: 32 }}>
      <Link url="#" type="menuItem" theme="black">Главная</Link>
      <Link url="#" type="menuItem" theme="black" underlined>Каталог</Link>
      <Link url="#" type="menuItem" theme="black">О компании</Link>
    </nav>
  ),
};
