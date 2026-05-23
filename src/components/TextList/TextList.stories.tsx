import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextList } from "./TextList";

const meta: Meta<typeof TextList> = {
  title: "МТС/TextList",
  component: TextList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**TextList** — элемент списка-инструкции из дизайн-системы МТС. Используется для оформления
многоуровневых списков, инструкций, нумерованных шагов и буллетных перечислений.

Один экземпляр \`TextList\` — это **одна строка** списка. Полная инструкция собирается из нескольких
TextList в общем контейнере (см. примеры ниже).

---

### Уровни (\`type\`)

| Тип | Назначение | Слева | Типографика (Desktop / Mobile) |
|---|---|---|---|
| \`title\` | Заголовок шага | Нумерованный кружок или большая точка | H4 20/24 Medium / P3 17/24 Medium |
| \`subtitle\` | Подзаголовок | — (только отступ) | P3 17/24 Regular / P4 14/20 Regular |
| \`child\` | Пункт-буллет | Маленькая точка 4px | P3 17/24 Regular / P4 14/20 Regular |

Уровни \`subtitle\` и \`child\` имеют отступ слева, выравнивающий их под текст \`title\`:
**40px** на Desktop и **36px** на Mobile.

---

### Раскладки (\`view\`)

| view | Когда использовать | Размер маркера title |
|---|---|---|
| \`desktop\` | Десктоп-вёрстка | 28×28px |
| \`mobile\` | Мобильная вёрстка | 24×24px |

---

### Маркер заголовка (\`marker\`, только для \`type="title"\`)

- \`number\` *(по умолчанию)* — нумерованный кружок. Цифра задаётся через \`number\`.
- \`bullet\` — увеличенная точка (8px desktop / 6px mobile) в боксе того же размера, что и кружок.

### Цветовые варианты

\`numberColor\` (для \`marker="number"\`):

| Цвет | Фон | Текст |
|---|---|---|
| \`default\` | \`mts_bg_lower\` (#F2F3F7) | \`mts_text_primary\` |
| \`red\` | \`mts_brand_red\` | \`mts_text_inverted\` |
| \`dark\` | \`mts_text_primary\` | \`mts_text_inverted\` |

\`bulletColor\` (для \`marker="bullet"\` и \`type="child"\`):

| Цвет | Заливка |
|---|---|
| \`default\` | \`mts_text_primary\` |
| \`red\` | \`mts_brand_red\` |
| \`tertiary\` | \`mts_text_tertiary\` |

---

### Кастомизация

- \`number\` — содержимое внутри кружка (число, символ или React-нода).
- \`leftSlot\` — полностью заменяет левый маркер на любую ноду (иконка, чекбокс и т.п.).
- \`text\` — содержимое правой части. Принимает строку или React-ноду (для inline-форматирования).
- \`className\` / \`style\` — для дополнительных стилей корневого контейнера.

---

### Когда использовать

- Пошаговые инструкции (онбординг, FAQ, документация).
- Иерархические перечни требований/условий (тарифы, ограничения).
- Маркированные списки внутри карточек и модалок.

Для большинства интерфейсных списков, не относящихся к инструкциям-объяснениям, используйте
обычный \`<ul>\` / \`<ol>\` либо специализированные компоненты (\`Cell\`, \`Steps\`).

---

### Композиция (вне компонента)

\`TextList\` намеренно не управляет вертикальными отступами между строками. Оборачивайте список
в flex/grid контейнер с нужным \`gap\` — типовые значения **8px** между \`child\` и **12–16px** перед
следующим \`title\`.
`,
      },
    },
  },
  argTypes: {
    type: {
      description: "Уровень строки в списке.",
      control: "radio",
      options: ["title", "subtitle", "child"],
    },
    view: {
      description: "Раскладка: десктоп или мобилка. Меняет типографику и размер маркера.",
      control: "radio",
      options: ["desktop", "mobile"],
    },
    marker: {
      description:
        "Маркер для `title`: нумерованный кружок (`number`) или увеличенная точка (`bullet`). Игнорируется для других типов.",
      control: "radio",
      options: ["number", "bullet"],
    },
    numberColor: {
      description: "Цвет нумерованного кружка. Работает при `marker=\"number\"`.",
      control: "radio",
      options: ["default", "red", "dark"],
    },
    bulletColor: {
      description:
        "Цвет точки. Работает для `marker=\"bullet\"` (title) и для `type=\"child\"`.",
      control: "radio",
      options: ["default", "red", "tertiary"],
    },
    text: {
      description: "Текст или ReactNode правой части.",
      control: "text",
    },
    number: {
      description: "Содержимое нумерованного кружка. По умолчанию `1`.",
      control: "text",
    },
    leftSlot: {
      description:
        "Полностью заменяет автоматический маркер слева. Используется для кастомных иконок или индикаторов.",
      control: false,
    },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof TextList>;

// ─── Helpers для render-стори ────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontSize: 11,
      color: "#969FA8",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    }}
  >
    {children}
  </span>
);

const Stack = ({
  children,
  gap = 12,
  width = 600,
}: {
  children: React.ReactNode;
  gap?: number;
  width?: number;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap, width }}>
    {children}
  </div>
);

// ─── Базовая стори ───────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Playground",
  args: {
    type: "title",
    view: "desktop",
    marker: "number",
    numberColor: "default",
    bulletColor: "default",
    number: 1,
    text: "Text",
  },
};

// ─── Title с нумерованным кружком ────────────────────────────────────────────

export const TitleNumber: Story = {
  name: "Title — Number",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Заголовок с нумерованным кружком. Три цветовых варианта × две раскладки.",
      },
    },
  },
  render: () => (
    <Stack>
      <SectionLabel>Default</SectionLabel>
      <TextList type="title" view="desktop" numberColor="default" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="default" number={1} text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="title" view="desktop" numberColor="red" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="red" number={1} text="Mobile" />
      <SectionLabel>Dark</SectionLabel>
      <TextList type="title" view="desktop" numberColor="dark" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="dark" number={1} text="Mobile" />
    </Stack>
  ),
};

// ─── Title с буллетом ────────────────────────────────────────────────────────

export const TitleBullet: Story = {
  name: "Title — Bullet",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Заголовок с увеличенной точкой вместо номера. Используется для ненумерованных шагов одного уровня.",
      },
    },
  },
  render: () => (
    <Stack>
      <SectionLabel>Default (primary)</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="default" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="default" text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="red" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="red" text="Mobile" />
      <SectionLabel>Tertiary</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="tertiary" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="tertiary" text="Mobile" />
    </Stack>
  ),
};

// ─── Subtitle ────────────────────────────────────────────────────────────────

export const Subtitle: Story = {
  name: "Subtitle",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Подзаголовок без маркера, но с отступом, выравнивающим его под текст title. Используется как пояснение под заголовком.",
      },
    },
  },
  render: () => (
    <Stack>
      <TextList type="subtitle" view="desktop" text="Subtitle on desktop" />
      <TextList type="subtitle" view="mobile" text="Subtitle on mobile" />
    </Stack>
  ),
};

// ─── Child ───────────────────────────────────────────────────────────────────

export const Child: Story = {
  name: "Child",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Пункт-буллет третьего уровня. Маленькая точка 4px, цвета — те же, что у title bullet.",
      },
    },
  },
  render: () => (
    <Stack>
      <SectionLabel>Default (primary)</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="default" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="default" text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="red" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="red" text="Mobile" />
      <SectionLabel>Tertiary</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="tertiary" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="tertiary" text="Mobile" />
    </Stack>
  ),
};

// ─── Сборка ───────────────────────────────────────────────────────────────────

export const InstructionDesktop: Story = {
  name: "Инструкция — Desktop",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Типовой пример сборки многоуровневой инструкции на десктопе. Между строками — gap контейнера.",
      },
    },
  },
  render: () => (
    <Stack gap={12} width={600}>
      <TextList type="title" view="desktop" number={1} text="Откройте приложение МТС" />
      <TextList type="subtitle" view="desktop" text="Понадобится последняя версия из стора" />
      <TextList type="child" view="desktop" text="iOS — App Store" />
      <TextList type="child" view="desktop" text="Android — RuStore или Google Play" />
      <TextList type="title" view="desktop" number={2} text="Перейдите в раздел «Профиль»" />
      <TextList type="subtitle" view="desktop" text="Нижняя панель навигации, крайняя справа" />
      <TextList type="title" view="desktop" number={3} text="Нажмите «Подключить услугу»" />
    </Stack>
  ),
};

export const InstructionMobile: Story = {
  name: "Инструкция — Mobile",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Та же инструкция в мобильной раскладке: меньшие маркеры, P4 14/20 для тела.",
      },
    },
  },
  render: () => (
    <Stack gap={12} width={360}>
      <TextList type="title" view="mobile" number={1} text="Откройте приложение МТС" />
      <TextList type="subtitle" view="mobile" text="Понадобится последняя версия из стора" />
      <TextList type="child" view="mobile" text="iOS — App Store" />
      <TextList type="child" view="mobile" text="Android — RuStore или Google Play" />
      <TextList type="title" view="mobile" number={2} text="Перейдите в раздел «Профиль»" />
      <TextList type="subtitle" view="mobile" text="Нижняя панель навигации, крайняя справа" />
      <TextList type="title" view="mobile" number={3} text="Нажмите «Подключить услугу»" />
    </Stack>
  ),
};

export const MixedMarkers: Story = {
  name: "Смешанные маркеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Комбинация number и bullet title в одном списке — для выделения акцентных шагов.",
      },
    },
  },
  render: () => (
    <Stack gap={12} width={600}>
      <TextList type="title" view="desktop" number={1} text="Стандартный шаг" />
      <TextList type="child" view="desktop" text="Подпункт" />
      <TextList type="title" view="desktop" marker="bullet" bulletColor="red" text="Важно! Не пропустите этот шаг" />
      <TextList type="child" view="desktop" bulletColor="red" text="Критический подпункт" />
      <TextList type="title" view="desktop" number={2} text="Следующий шаг" />
    </Stack>
  ),
};

export const CustomLeftSlot: Story = {
  name: "Кастомный leftSlot",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Левый маркер можно полностью заменить через `leftSlot` — например, на иконку, чекбокс или произвольный индикатор. Размер слота должен быть 28×28 (desktop) / 24×24 (mobile) для корректного выравнивания.",
      },
    },
  },
  render: () => (
    <Stack gap={12} width={600}>
      <TextList
        type="title"
        view="desktop"
        text="С эмодзи вместо номера"
        leftSlot={
          <div
            style={{
              width: 28,
              height: 28,
              display: "grid",
              placeItems: "center",
              fontSize: 20,
            }}
          >
            ✨
          </div>
        }
      />
      <TextList
        type="title"
        view="desktop"
        text="С галочкой"
        leftSlot={
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#26CD58",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            ✓
          </div>
        }
      />
    </Stack>
  ),
};
