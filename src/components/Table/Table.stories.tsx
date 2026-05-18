import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import type { SortDirection } from "./Table";
import { TableCellText, TableCellStatus, TableCellLink, TableCellAvatar, TableCellIconText, TableCellActions } from "./TableCells";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";
import { ProgressLinear } from "../ProgressLinear/ProgressLinear";
import { IconStar } from "../../icons/IconStar/IconStar";
import { IconMore } from "../../icons/IconMore/IconMore";
import { IconLink } from "../../icons/IconLink/IconLink";

const meta: Meta<typeof Table> = {
  title: "МТС/Table/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Table** — data-driven таблица. Принимает \`columns\` и \`data\`, рендеринг каждой ячейки задаётся через \`column.render()\`.

### Колонка

| Проп | Тип | Описание |
|---|---|---|
| \`key\` | \`string\` | Ключ поля в объекте данных |
| \`title\` | \`string\` | Заголовок колонки |
| \`width\` | \`number \\| string\` | Ширина в px или CSS-значение |
| \`flex\` | \`boolean\` | Колонка растягивается (flex: 1) |
| \`sortable\` | \`boolean\` | Иконка сортировки в хедере |
| \`noPadding\` | \`boolean\` | Убрать горизонтальные паддинги |
| \`render\` | \`(value, row, index) => ReactNode\` | Кастомный рендер ячейки |

### Хелперы ячеек

- \`TableCellText\` — текст + опциональный подтекст
- \`TableCellStatus\` — цветная точка + текст
- \`TableCellLink\` — ссылка с иконкой
- \`TableCellAvatar\` — аватар + текст + подтекст
- \`TableCellIconText\` — иконка + текст
- \`TableCellActions\` — кнопки действий
        `,
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    size: { control: "radio", options: ["s", "m"], description: "`s` — паддинг 12px (~44px строка), `m` — паддинг 16px (~52px строка)" },
    variant: { control: "radio", options: ["white", "grey"], description: "Фон таблицы: белый или серый (`#F2F3F7`)" },
    data: { control: false },
    columns: { control: false },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

type Task = {
  id: number;
  priority: string;
  priorityColor: string;
  task: string;
  subtask: string;
  link: string;
  status: string;
  statusColor: string;
  progress: number;
  assignee: string;
  role: string;
  stars: number;
};

const TASKS: Task[] = [
  { id: 1, priority: "Высокий", priorityColor: "#EA1F49", task: "Table View React", subtask: "Дизайн ревью", link: "Перейти", status: "В работе", statusColor: "#26CD58", progress: 25, assignee: "Кускова Ю.", role: "Руководитель направления", stars: 2 },
  { id: 2, priority: "Средний", priorityColor: "#FAC031", task: "Компонент Badge", subtask: "Разработка", link: "Перейти", status: "На паузе", statusColor: "#FAC031", progress: 60, assignee: "Иванов А.", role: "Разработчик", stars: 1 },
  { id: 3, priority: "Низкий", priorityColor: "#26CD58", task: "Документация API", subtask: "Технический долг", link: "Перейти", status: "Готово", statusColor: "#0070E5", progress: 100, assignee: "Смирнова О.", role: "Тех. писатель", stars: 3 },
  { id: 4, priority: "Высокий", priorityColor: "#EA1F49", task: "Рефакторинг Table", subtask: "Sprint 12", link: "Перейти", status: "Не начато", statusColor: "#9EA3A9", progress: 0, assignee: "Петров С.", role: "Senior Frontend", stars: 0 },
];

const useSort = (initialData: Task[]) => {
  const [sortKey, setSortKey] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: string, direction: SortDirection) => {
    setSortKey(direction ? key : undefined);
    setSortDirection(direction);
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey || !sortDirection) return initialData;
    return [...initialData].sort((a, b) => {
      const av = a[sortKey as keyof Task];
      const bv = b[sortKey as keyof Task];
      if (av === bv) return 0;
      const cmp = av < bv ? -1 : 1;
      return sortDirection === "asc" ? cmp : -cmp;
    });
  }, [initialData, sortKey, sortDirection]);

  return { sortKey, sortDirection, handleSort, sortedData };
};

export const Default: Story = {
  name: "Default",
  parameters: { controls: { disable: true } },
  render: () => {
    const { sortKey, sortDirection, handleSort, sortedData } = useSort(TASKS);
    const [selected, setSelected] = useState<number[]>([]);

    const columns = [
      {
        key: "priority",
        title: "Приоритет",
        width: 120,
        noPadding: true,
        sortable: true,
        render: (_: unknown, row: Task) => (
          <Badge size="s" color={row.priorityColor}>{row.priority}</Badge>
        ),
      },
      {
        key: "task",
        title: "Задача",
        width: 280,
        render: (_: unknown, row: Task) => (
          <TableCellText subtext={row.subtask}>{row.task}</TableCellText>
        ),
      },
      {
        key: "link",
        title: "Ссылка",
        width: 156,
        render: () => (
          <TableCellLink icon={<IconLink width={16} height={16} />}>Перейти</TableCellLink>
        ),
      },
      {
        key: "status",
        title: "Статус",
        width: 156,
        sortable: true,
        render: (_: unknown, row: Task) => (
          <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus>
        ),
      },
      {
        key: "progress",
        title: "Прогресс",
        width: 144,
        sortable: true,
        render: (_: unknown, row: Task) => (
          <ProgressLinear
            type="progress"
            size="s"
            progress={row.progress}
          />
        ),
      },
      {
        key: "assignee",
        title: "Исполнитель",
        flex: true,
        render: (_: unknown, row: Task) => (
          <TableCellAvatar
            avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />}
            subtext={row.role}
          >
            {row.assignee}
          </TableCellAvatar>
        ),
      },
      {
        key: "stars",
        title: "",
        width: 56,
        render: (_: unknown, row: Task) => (
          <TableCellIconText icon={<IconStar width={16} height={16} />}>
            {row.stars}
          </TableCellIconText>
        ),
      },
      {
        key: "actions",
        title: "",
        render: (_: unknown, row: Task) => (
          <TableCellActions
            actions={[
              {
                key: "more",
                icon: <IconMore width={16} height={16} />,
                onClick: () => alert(`Действия для: ${row.task}`),
                title: "Ещё",
              },
            ]}
          />
        ),
      },
    ];

    return (
      <div style={{ padding: 24 }}>
        <Table
          columns={columns}
          data={sortedData}
          rowKey="id"
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={handleSort}
          selectedRows={selected}
          onRowClick={(row) =>
            setSelected((prev) =>
              prev.includes(row.id) ? prev.filter((id) => id !== row.id) : [...prev, row.id]
            )
          }
        />
      </div>
    );
  },
};

export const SizeM: Story = {
  name: "Size M (паддинг 16px)",
  parameters: { controls: { disable: true } },
  render: () => {
    const { sortKey, sortDirection, handleSort, sortedData } = useSort(TASKS);
    const columns = [
      { key: "priority", title: "Приоритет", width: 120, noPadding: true, sortable: true,
        render: (_: unknown, row: Task) => <Badge size="s" color={row.priorityColor}>{row.priority}</Badge> },
      { key: "task", title: "Задача", width: 280,
        render: (_: unknown, row: Task) => <TableCellText subtext={row.subtask}>{row.task}</TableCellText> },
      { key: "status", title: "Статус", width: 156, sortable: true,
        render: (_: unknown, row: Task) => <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus> },
      { key: "assignee", title: "Исполнитель", flex: true,
        render: (_: unknown, row: Task) => (
          <TableCellAvatar avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />} subtext={row.role}>
            {row.assignee}
          </TableCellAvatar>
        ) },
    ];
    return (
      <div style={{ padding: 24 }}>
        <Table columns={columns} data={sortedData} rowKey="id" size="m"
          sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
      </div>
    );
  },
};

export const GreyVariant: Story = {
  name: "Серая таблица (variant=grey)",
  parameters: { controls: { disable: true } },
  render: () => {
    const { sortKey, sortDirection, handleSort, sortedData } = useSort(TASKS);
    const columns = [
      { key: "priority", title: "Приоритет", width: 120, noPadding: true,
        render: (_: unknown, row: Task) => <Badge size="s" color={row.priorityColor}>{row.priority}</Badge> },
      { key: "task", title: "Задача", flex: true,
        render: (_: unknown, row: Task) => <TableCellText subtext={row.subtask}>{row.task}</TableCellText> },
      { key: "status", title: "Статус", width: 160, sortable: true,
        render: (_: unknown, row: Task) => <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus> },
      { key: "assignee", title: "Исполнитель", width: 220,
        render: (_: unknown, row: Task) => (
          <TableCellAvatar avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />}>
            {row.assignee}
          </TableCellAvatar>
        ) },
    ];
    return (
      <div style={{ padding: 24, background: "white" }}>
        <Table columns={columns} data={sortedData} rowKey="id" variant="grey"
          sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
      </div>
    );
  },
};

export const EmptyState: Story = {
  name: "Пустая таблица",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24 }}>
      <Table
        columns={[
          { key: "priority", title: "Приоритет", width: 120 },
          { key: "task", title: "Задача", width: 280 },
          { key: "status", title: "Статус", width: 156 },
        ]}
        data={[]}
        rowKey="id"
      />
    </div>
  ),
};
