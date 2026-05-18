import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { mts_input_stroke } from "../../consts";
import { TableCellText, TableCellStatus, TableCellLink, TableCellAvatar, TableCellIconText, TableCellActions, TableCellInlineEdit } from "./TableCells";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";
import { ProgressLinear } from "../ProgressLinear/ProgressLinear";
import { Switch } from "../Switch/Switch";
import { IconLink } from "../../icons/IconLink/IconLink";
import { IconStar } from "../../icons/IconStar/IconStar";
import { IconMore } from "../../icons/IconMore/IconMore";
import { IconPlus } from "../../icons/IconPlus/IconPlus";

const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${mts_input_stroke};
  background: white;
  min-width: 160px;
`;


const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  border: 1px solid ${mts_input_stroke};
  border-radius: 8px;
  overflow: hidden;
  max-width: 480px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${mts_input_stroke};
  &:last-child { border-bottom: none; }
`;

const Label = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: #9EA3A9;
  padding: 12px;
  width: 130px;
  flex-shrink: 0;
  border-right: 1px solid ${mts_input_stroke};
`;

const meta: Meta = {
  title: "МТС/Table/TableCell",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**TableCell** — типовые варианты контента ячейки таблицы. Используются внутри \`column.render()\`.

| Компонент | Описание |
|---|---|
| \`TableCellText\` | Текст + опциональный подтекст |
| \`TableCellStatus\` | Цветная точка + текст статуса |
| \`TableCellLink\` | Синяя ссылка с иконкой |
| \`TableCellAvatar\` | Аватар + имя + роль |
| \`TableCellIconText\` | Иконка + текст |
| \`TableCellActions\` | Кнопки действий (иконки) |
        `,
      },
    },
  },
};

export default meta;

const AllTypesDemo = () => {
  const [editValue, setEditValue] = useState("Inline Edit");
  const [switchOn, setSwitchOn] = useState(true);
  return (
    <Grid>
      <Row>
        <Label>Text</Label>
        <Cell><TableCellText>Текст ячейки</TableCellText></Cell>
      </Row>
      <Row>
        <Label>Text + Subtext</Label>
        <Cell><TableCellText subtext="Подтекст">Текст ячейки</TableCellText></Cell>
      </Row>
      <Row>
        <Label>Text w Icon</Label>
        <Cell>
          <TableCellIconText icon={<IconStar width={16} height={16} />}>
            Текст ячейки
          </TableCellIconText>
        </Cell>
      </Row>
      <Row>
        <Label>Link</Label>
        <Cell>
          <TableCellLink icon={<IconLink width={16} height={16} />}>
            Перейти
          </TableCellLink>
        </Cell>
      </Row>
      <Row>
        <Label>Inline Edit</Label>
        <Cell style={{ minWidth: 200 }}>
          <TableCellInlineEdit value={editValue} onChange={setEditValue} />
        </Cell>
      </Row>
      <Row>
        <Label>Badge</Label>
        <Cell><Badge size="s" color="#EA1F49">Высокий</Badge></Cell>
      </Row>
      <Row>
        <Label>Progress Bar</Label>
        <Cell style={{ minWidth: 200 }}>
          <ProgressLinear type="progress" size="s" progress={25} style={{ width: "100%" }} />
        </Cell>
      </Row>
      <Row>
        <Label>Icon Button</Label>
        <Cell>
          <TableCellActions actions={[
            { key: "add", icon: <IconPlus width={16} height={16} />, onClick: () => {}, title: "Добавить" },
          ]} />
        </Cell>
      </Row>
      <Row>
        <Label>Avatar w Text</Label>
        <Cell>
          <TableCellAvatar
            avatar={<Avatar size={24} initials="К" stroke />}
            subtext="Руководитель"
          >
            Кускова Ю.
          </TableCellAvatar>
        </Cell>
      </Row>
      <Row>
        <Label>Status</Label>
        <Cell><TableCellStatus color="#26CD58">В работе</TableCellStatus></Cell>
      </Row>
      <Row>
        <Label>Switch</Label>
        <Cell><Switch checked={switchOn} onChange={setSwitchOn} size="s" /></Cell>
      </Row>
      <Row>
        <Label>Actions</Label>
        <Cell>
          <TableCellActions actions={[
            { key: "more", icon: <IconMore width={16} height={16} />, onClick: () => {}, title: "Ещё" },
          ]} />
        </Cell>
      </Row>
    </Grid>
  );
};

export const AllTypes: StoryObj = {
  name: "Все типы",
  render: () => <AllTypesDemo />,
};

export const TextCell: StoryObj = {
  name: "Text",
  render: () => (
    <Cell>
      <TableCellText subtext="Подтекст ячейки">Текст ячейки</TableCellText>
    </Cell>
  ),
};

export const StatusCell: StoryObj = {
  name: "Status",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <Cell><TableCellStatus color="#26CD58">В работе</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#FAC031">На паузе</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#F95721">Ошибка</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#9EA3A9">Не начато</TableCellStatus></Cell>
    </div>
  ),
};

export const AvatarCell: StoryObj = {
  name: "Avatar w Text",
  render: () => (
    <Cell style={{ minWidth: 240 }}>
      <TableCellAvatar
        avatar={<Avatar size={24} initials="К" stroke />}
        subtext="Руководитель направления"
      >
        Кускова Ю.
      </TableCellAvatar>
    </Cell>
  ),
};

export const InlineEditCell: StoryObj = {
  name: "Inline Edit",
  render: () => {
    const [value, setValue] = useState("Редактируемый текст");
    return (
      <Cell style={{ minWidth: 240 }}>
        <TableCellInlineEdit value={value} onChange={setValue} />
      </Cell>
    );
  },
};
