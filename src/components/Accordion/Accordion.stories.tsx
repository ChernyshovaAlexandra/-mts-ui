import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Accordion, type AccordionItemData } from "./Accordion";
import { Text } from "../Text/Text";
import { IconStar } from "../../icons/IconStar/IconStar";
import { IconHeart } from "../../icons/IconHeart/IconHeart";
import { IconQuestion } from "../../icons/IconQuestion/IconQuestion";

const meta: Meta<typeof Accordion> = {
  title: "МТС/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Accordion** — раскрывающийся список (collapsible). Каждый элемент имеет
заголовок и опциональный левый слот, при клике плавно открывает свой контент.

Поддерживает **разные стили внутри одного списка** через per-item props: можно
смешивать \`primary\` и \`secondary\` элементы, разные размеры, типы заголовка,
иконки и описания.

---

### Варианты (\`variant\`)

| Variant | Внешний вид | Когда |
|---|---|---|
| \`primary\` | Items сливаются в общий список без фона, между ними \`Separator\` | Меню, длинные списки настроек |
| \`secondary\` | Каждый item — карточка с фоном (\`mts_bg_lower\`), 16px radius, отступ 8px между items | FAQ, важные секции |

### Размеры (\`size\`)

| Size | Высота header | Padding | Иконка |
|---|---|---|---|
| \`s\` | 44px | 12/16 | 16px |
| \`m\` | 52px | 16/20 | 20px |
| \`l\` | 64px | 20/24 | 24px |

### Типы заголовка (\`titleType\`)

| TitleType | Типографика (size m/l) |
|---|---|
| \`primary\` | \`P3-Medium-Comp\` / \`H4-Comp\` |
| \`secondary\` | \`P3-Regular-Comp\` |
| \`tertiary\` | \`P4-Medium-Comp\` |

### Поведение

- \`multiple\` (default \`false\`): несколько items могут быть открыты одновременно.
- **Controlled** через \`openIds\` + \`onOpenChange\`.
- **Uncontrolled**: \`defaultOpenIds\` или \`defaultOpen\` на отдельных items.

### Per-item override

Любой item может переопределить \`variant\`, \`size\`, \`titleType\`, \`showDivider\`,
\`disabled\` независимо от значений на родителе. Так можно один primary-card вставить
в общий secondary-список и наоборот.

### Левый слот

Любая ReactNode через \`leftSlot\` — иконка из либы, цифра, текст или композиция.
Размер слота управляется автоматически (16/20/24px по размеру). Для нумерованных
списков удобно передавать число в кружке (см. стори \`WithNumbers\`).

### Accessibility

\`aria-expanded\` / \`aria-controls\` / \`aria-labelledby\` / \`role="region"\` на контенте.
Disabled-items имеют \`aria-disabled\` и блокируют клик.
`,
      },
    },
  },
  argTypes: {
    items: { control: false },
    openIds: { control: false },
    defaultOpenIds: { control: false },
    onOpenChange: { control: false },
    multiple: { description: "Разрешить одновременно открыть несколько items.", control: "boolean" },
    variant: { description: "Глобальный стиль (можно переопределить per-item).", control: "radio", options: ["primary", "secondary"] },
    size: { description: "Размер header (переопределяется per-item).", control: "radio", options: ["s", "m", "l"] },
    titleType: { description: "Типографика заголовка (переопределяется per-item).", control: "radio", options: ["primary", "secondary", "tertiary"] },
    showDivider: { description: "Включить разделитель между items. По умолчанию для secondary — true, для primary — отступ карточками.", control: "boolean" },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// ─── Данные ──────────────────────────────────────────────────────────────────

const faqItems: AccordionItemData[] = [
  {
    id: "what",
    title: "Что такое МТС?",
    content:
      "ПАО «МТС» — российская телекоммуникационная компания, оказывающая услуги мобильной связи, фиксированной телефонии, доступа в интернет и цифрового телевидения.",
  },
  {
    id: "where",
    title: "Где можно подключить тариф?",
    content: "В любом салоне МТС, на сайте mts.ru или в мобильном приложении.",
  },
  {
    id: "support",
    title: "Как связаться с поддержкой?",
    content: "По номеру 0890 с мобильного, либо через чат в приложении.",
  },
];

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
      {title}
    </p>
    {children}
  </div>
);

// ─── Базовые стори ───────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    items: faqItems,
    variant: "primary",
    size: "m",
    titleType: "primary",
    multiple: false,
  },
  render: (args) => (
    <div style={{ width: 600 }}>
      <Accordion {...args} />
    </div>
  ),
};

export const PrimarySimple: Story = {
  name: "Primary — общий список",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Items без фона, разделены `Separator`. Подходит для меню и длинных списков." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion items={faqItems} variant="primary" />
    </div>
  ),
};

export const Secondary: Story = {
  name: "Secondary — карточки",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Каждый item — отдельная карточка с фоном. Подходит для FAQ и важных секций." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion items={faqItems} variant="secondary" />
    </div>
  ),
};

// ─── Размеры ─────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Три размера header'а: 44 / 52 / 64." } },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Block title="size = s (44)">
        <Accordion items={faqItems.slice(0, 1)} size="s" />
      </Block>
      <Block title="size = m (52)">
        <Accordion items={faqItems.slice(0, 1)} size="m" />
      </Block>
      <Block title="size = l (64)">
        <Accordion items={faqItems.slice(0, 1)} size="l" />
      </Block>
    </div>
  ),
};

// ─── Типы заголовка ──────────────────────────────────────────────────────────

export const TitleTypes: Story = {
  name: "Типы заголовка",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "`primary` — Medium/H4, `secondary` — Regular, `tertiary` — компактный Medium для вторичных секций.",
      },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Block title="titleType = primary">
        <Accordion items={faqItems.slice(0, 1)} titleType="primary" />
      </Block>
      <Block title="titleType = secondary">
        <Accordion items={faqItems.slice(0, 1)} titleType="secondary" />
      </Block>
      <Block title="titleType = tertiary">
        <Accordion items={faqItems.slice(0, 1)} titleType="tertiary" />
      </Block>
    </div>
  ),
};

// ─── С описанием ─────────────────────────────────────────────────────────────

export const WithDescription: Story = {
  name: "С описанием",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Опциональный subtitle под title — для подзаголовков/категорий." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        items={[
          {
            id: "1",
            title: "Тарифные планы",
            description: "Базовые и Premium для частных лиц",
            content: "Список тарифов с разбивкой по аудиториям и услугам.",
          },
          {
            id: "2",
            title: "Дополнительные услуги",
            description: "Опции, которые можно подключить отдельно",
            content: "Голосовая почта, переадресация, антиспам и др.",
          },
        ]}
        size="l"
      />
    </div>
  ),
};

// ─── С иконками ──────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  name: "С иконками",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "`leftSlot` принимает любую ReactNode — например, иконку из либы." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        items={[
          {
            id: "fav",
            title: "Избранное",
            leftSlot: <IconStar width={20} height={20} />,
            content: "Сохранённые тарифы и услуги.",
          },
          {
            id: "favs2",
            title: "Любимые номера",
            leftSlot: <IconHeart width={20} height={20} />,
            content: "Близкие, которым звонишь чаще всего.",
          },
          {
            id: "help",
            title: "Частые вопросы",
            leftSlot: <IconQuestion size={24} />,
            content: "Ответы на популярные вопросы пользователей.",
          },
        ]}
      />
    </div>
  ),
};

// ─── С номерами ──────────────────────────────────────────────────────────────

const NumberCircle = ({ value }: { value: number }) => (
  <div
    style={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#FFFFFF",
      display: "grid",
      placeItems: "center",
      fontFamily: "MTS Compact, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "24px",
      color: "#1D2023",
      flexShrink: 0,
    }}
  >
    {value}
  </div>
);

export const WithNumbers: Story = {
  name: "С номерами",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Numbered List: в `leftSlot` отдаётся числовой кружок. Подходит для пошаговых инструкций.",
      },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        items={[
          { id: 1, title: "Шаг первый", leftSlot: <NumberCircle value={1} />, content: "Откройте приложение МТС." },
          { id: 2, title: "Шаг второй", leftSlot: <NumberCircle value={2} />, content: "Перейдите в раздел «Профиль»." },
          { id: 3, title: "Шаг третий", leftSlot: <NumberCircle value={3} />, content: "Нажмите «Подключить услугу»." },
        ]}
      />
    </div>
  ),
};

// ─── Смешанные стили в одном списке ──────────────────────────────────────────

export const MixedItems: Story = {
  name: "Смешанные стили",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Ключевая фича: в одном Accordion можно смешивать items с разными `variant`, `size`, `titleType`, иконками. Используйте per-item props, чтобы выделить отдельный элемент.",
      },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        variant="primary"
        items={[
          {
            id: "1",
            title: "Обычный пункт",
            content: "Базовый primary item без выделения.",
          },
          {
            id: "2",
            variant: "secondary",
            title: "Выделенный блок",
            description: "Этот блок с фоном — secondary-вариант (карточка)",
            leftSlot: <IconStar width={20} height={20} />,
            content: "Specifications and additional notes about this important block.",
            titleType: "primary",
          },
          {
            id: "3",
            title: "Обычный пункт 2",
            content: "И ещё один primary item.",
          },
          {
            id: "4",
            title: "Маленький вторичный",
            size: "s",
            titleType: "tertiary",
            content: "Item с явно меньшим размером и tertiary типографикой.",
          },
        ]}
      />
    </div>
  ),
};

// ─── Controlled ──────────────────────────────────────────────────────────────

const ControlledExample = () => {
  const [openIds, setOpenIds] = useState<(string | number)[]>(["where"]);
  return (
    <div style={{ width: 600 }}>
      <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
        <button onClick={() => setOpenIds(faqItems.map((i) => i.id))}>Открыть всё</button>
        <button onClick={() => setOpenIds([])}>Закрыть всё</button>
        <span style={{ alignSelf: "center", fontFamily: "sans-serif", fontSize: 12, color: "#626C77" }}>
          openIds: [{openIds.join(", ")}]
        </span>
      </div>
      <Accordion
        items={faqItems}
        openIds={openIds}
        onOpenChange={setOpenIds}
        multiple
      />
    </div>
  );
};

export const Controlled: Story = {
  name: "Controlled",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Состояние управляется снаружи: пропсы `openIds` + `onOpenChange`. Подходит для интеграции с роутером, store, синхронизации с URL.",
      },
    },
  },
  render: () => <ControlledExample />,
};

export const SingleVsMultiple: Story = {
  name: "Single / Multiple",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "По умолчанию открыт один item. `multiple={true}` снимает ограничение.",
      },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Block title="single (default)">
        <Accordion items={faqItems} />
      </Block>
      <Block title="multiple">
        <Accordion items={faqItems} multiple />
      </Block>
    </div>
  ),
};

// ─── Disabled ────────────────────────────────────────────────────────────────

export const DisabledItems: Story = {
  name: "Disabled items",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Отдельный item можно отключить через `disabled: true`. Клик игнорируется, элемент приглушён." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        items={[
          { id: 1, title: "Доступный пункт", content: "Обычный контент." },
          { id: 2, title: "Заблокированный пункт", disabled: true, content: "Этот контент не откроется." },
          { id: 3, title: "Ещё один доступный", content: "И ещё немного контента." },
        ]}
      />
    </div>
  ),
};

// ─── Контент-нода ────────────────────────────────────────────────────────────

export const RichContent: Story = {
  name: "Rich content",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Поле `content` принимает любой ReactNode — не только текст." },
    },
  },
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion
        items={[
          {
            id: "rich",
            title: "Сложный контент",
            content: (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Text variant="P3-Regular-Comp">Можно вложить любые компоненты:</Text>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li><Text variant="P3-Regular-Comp">Списки</Text></li>
                  <li><Text variant="P3-Regular-Comp">Кнопки, ссылки, формы</Text></li>
                  <li><Text variant="P3-Regular-Comp">Другие компоненты из либы</Text></li>
                </ul>
              </div>
            ),
            defaultOpen: true,
          },
        ]}
      />
    </div>
  ),
};
