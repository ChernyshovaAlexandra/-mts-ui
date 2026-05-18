import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "./TabBar";
import { IconUser } from "../../icons/IconUser/IconUser";
import { IconSettings } from "../../icons/IconSettings/IconSettings";
import { IconBookmark } from "../../icons/IconBookmark/IconBookmark";
import { IconHeart } from "../../icons/IconHeart/IconHeart";
import { IconDate } from "../../icons/IconDate/IconDate";

const meta: Meta<typeof TabBar> = {
  title: "МТС/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**TabBar** — мобильная нижняя навигация. Используется вместо горизонтального \`Navigation\` на мобильных устройствах.

### Использование

Компонент **не управляет позиционированием** — это задача layout-шелла приложения:

\`\`\`tsx
// Фиксируем внизу на мобилке
<div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
  <TabBar items={items} activeIndex={active} onChange={setActive} />
</div>
\`\`\`

Чтобы safe area корректно работала на iPhone (Face ID), добавьте в \`<meta>\`:
\`\`\`html
<meta name="viewport" content="..., viewport-fit=cover" />
\`\`\`

### Количество вкладок

Поддерживается **3, 4 или 5** вкладок. Отступы и зазоры подбираются автоматически.

### Адаптивный паттерн

Рекомендуемый подход — скрывать \`Navigation\` и показывать \`TabBar\` через media query:

\`\`\`css
.tab-bar { display: none; }
@media (max-width: 768px) {
  .navigation { display: none; }
  .tab-bar { display: block; }
}
\`\`\`
        `,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F2F3F7" },
        { name: "dark", value: "#1D2023" },
      ],
    },
  },
  argTypes: {
    items: {
      description: "Массив вкладок. Каждая содержит `icon` (ReactNode) и `label` (строка). От 3 до 5 элементов.",
      control: "object",
    },
    activeIndex: {
      description: "Индекс активной вкладки (начиная с 0).",
      control: { type: "number", min: 0, max: 4 },
    },
    onChange: {
      description: "Коллбек при смене вкладки. Получает индекс выбранной вкладки.",
      action: "tab changed",
    },
    divider: {
      description: "Горизонтальная линия-разделитель сверху компонента.",
      control: "boolean",
    },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

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

const MobileFrame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: 375,
      height: 200,
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    }}
  >
    <div style={{ flex: 1, padding: 16, color: "#969FA8", fontSize: 13, fontFamily: "sans-serif" }}>
      Контент страницы
    </div>
    {children}
  </div>
);

const ControlledRender = (args: React.ComponentProps<typeof TabBar>) => {
  const [active, setActive] = useState(args.activeIndex ?? 0);
  return (
    <MobileFrame>
      <TabBar {...args} activeIndex={active} onChange={setActive} />
    </MobileFrame>
  );
};

export const FiveTabs: Story = {
  name: "5 вкладок",
  render: ControlledRender,
  args: {
    items: items5,
    activeIndex: 0,
    divider: true,
  },
};

export const FourTabs: Story = {
  name: "4 вкладки",
  render: ControlledRender,
  args: {
    items: items4,
    activeIndex: 0,
    divider: true,
  },
};

export const ThreeTabs: Story = {
  name: "3 вкладки",
  render: ControlledRender,
  args: {
    items: items3,
    activeIndex: 0,
    divider: true,
  },
};

export const NoDivider: Story = {
  name: "Без разделителя",
  render: ControlledRender,
  args: {
    items: items5,
    activeIndex: 0,
    divider: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Разделитель отключается пропом `divider={false}` — например, если фон контента уже визуально отделяет TabBar.",
      },
    },
  },
};

export const AllVariants: Story = {
  name: "Все варианты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Три варианта по количеству вкладок. Отступы и зазоры подбираются автоматически.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start" }}>
      {[
        { label: "3 вкладки", items: items3 },
        { label: "4 вкладки", items: items4 },
        { label: "5 вкладок", items: items5 },
      ].map(({ label, items }) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {label}
          </span>
          <MobileFrame>
            <TabBar items={items} activeIndex={0} divider />
          </MobileFrame>
        </div>
      ))}
    </div>
  ),
};
