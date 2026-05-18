import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { mts_input_stroke, mts_text_primary, mts_text_secondary } from "../../consts";
import { IconSort } from "../../icons/IconSort/IconSort";
import { IconMore } from "../../icons/IconMore/IconMore";

const HeaderWrap = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px;
  gap: 4px;
  border-bottom: 1px solid ${mts_input_stroke};
  background: white;
`;

const HeaderLabel = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mts_text_primary};
  white-space: nowrap;
`;

const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${mts_text_secondary};
  flex-shrink: 0;
  &:hover { color: ${mts_text_primary}; }
`;

const CheckboxBox = styled.div`
  width: 18px;
  height: 18px;
  border: 1.5px solid #BCC3D0;
  border-radius: 4px;
  background: white;
`;

const meta: Meta = {
  title: "МТС/Table/TableHeader",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**TableHeader** — ячейка заголовка таблицы. Используется внутри \`Table\` через \`columns[].title\` и \`columns[].sortable\`.

### Варианты

| Тип | Описание |
|---|---|
| \`Default\` | Текст заголовка без действий |
| \`With Icon\` | Текст + иконка сортировки + иконка доп. действий |
| \`Checkbox\` | Чекбокс для выбора всех строк |

### Параметры колонки

\`\`\`ts
{ key: 'name', title: 'Название', sortable: true }
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  name: "Default",
  render: () => (
    <HeaderWrap>
      <HeaderLabel>Заголовок</HeaderLabel>
    </HeaderWrap>
  ),
};

export const WithSortIcon: StoryObj = {
  name: "With Sort Icon",
  render: () => (
    <HeaderWrap>
      <HeaderLabel>Заголовок</HeaderLabel>
      <IconBtn aria-label="Сортировать">
        <IconSort width={16} height={16} />
      </IconBtn>
    </HeaderWrap>
  ),
};

export const WithActions: StoryObj = {
  name: "With Sort + Actions",
  render: () => (
    <HeaderWrap style={{ justifyContent: "space-between", width: 160 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <HeaderLabel>Заголовок</HeaderLabel>
        <IconBtn aria-label="Сортировать">
          <IconSort width={16} height={16} />
        </IconBtn>
      </div>
      <IconBtn aria-label="Ещё">
        <IconMore width={16} height={16} />
      </IconBtn>
    </HeaderWrap>
  ),
};

export const CheckboxVariant: StoryObj = {
  name: "Checkbox",
  render: () => (
    <HeaderWrap>
      <CheckboxBox />
    </HeaderWrap>
  ),
};
