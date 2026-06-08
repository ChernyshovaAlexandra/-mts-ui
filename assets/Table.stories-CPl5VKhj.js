import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S,R as X}from"./index-G8LIXM5I.js";import{a as Y,I as Z}from"./IconMore-nYtcAaZN.js";import{a as ee,b as te,I as re}from"./IconLink-DjSXk0U5.js";import{y as u,p as y}from"./styled-components.browser.esm-BU5pfHrT.js";import{G as ne,n as O,k as Q,D as _,Q as J,S as se}from"./index-CWlbk4Hf.js";import{v as ae}from"./mixins-CTkzXf3m.js";import{T as oe}from"./Text-2zki5lTF.js";import{f as j,d as ie,e as A,a as $,b as le,T as de}from"./TableCells-DQ37JAIf.js";import{B as D}from"./Badge-Ba217irw.js";import{A as z}from"./Avatar-C1lJHa58.js";import{P as ce}from"./ProgressLinear-B2CtFbL-.js";import{I as ue}from"./IconStar-DBYALbaW.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CRC-JE94.js";import"./style-afSt-2-G.js";/* empty css              */import"./Caption-YytOdcIh.js";import"./Link-rKzP1vxa.js";import"./style-B3cKJyYt.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./IconOut-BVbMsUOi.js";import"./InlineEdit-BI73dCJt.js";import"./IconEdit-BJDhI4vU.js";const C={s:"12px",m:"16px"},pe=u.div`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  ${ae};
`,me=u.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${ne};
  overflow: hidden;
  background: ${({$variant:e})=>e==="grey"?O:Q};
  border: ${({$variant:e})=>e==="grey"?"none":`1px solid ${_}`};
  box-sizing: border-box;
`,ye=u.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${_};
  background: ${({$variant:e})=>e==="grey"?O:Q};
`,ke=u.div`
  display: flex;
  align-items: center;
  padding: ${({$size:e,$noPadding:s})=>`${C[e]} ${s?"0":C[e]}`};
  box-sizing: border-box;
  flex-shrink: 0;

  ${({$flex:e})=>e?y`flex: 1 0 0; min-width: 0;`:y`flex-shrink: 0;`}

  ${({$width:e})=>e!==void 0&&y`width: ${typeof e=="number"?`${e}px`:e};`}
`,be=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: default;
  user-select: none;
`,ge=u(oe).attrs({as:"span"})`
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${J};
  white-space: nowrap;
`,xe=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${se};
  flex-shrink: 0;

  &:hover {
    color: ${J};
  }
`,he=u.div`
  display: flex;
  flex-direction: column;
`,we=u.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${_};
  background: ${({$selected:e})=>e?"rgba(0, 124, 255, 0.06)":"transparent"};
  transition: background 0.15s ease;

  ${({$clickable:e})=>e&&y`
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    `}

  &:last-child {
    border-bottom: none;
  }
`,Te=u.div`
  display: flex;
  align-items: center;
  padding: ${({$size:e,$noPadding:s})=>`${C[e]} ${s?"0":C[e]}`};
  box-sizing: border-box;
  align-self: stretch;
  min-width: 0;

  ${({$flex:e})=>e?y`flex: 1 0 160px;`:y`flex-shrink: 0;`}

  ${({$width:e})=>e!==void 0&&y`width: ${typeof e=="number"?`${e}px`:e};`}
`;function fe(e,s,l){return l?typeof l=="function"?l(e):e[l]:s}function ve(e){return e===null?"asc":e==="asc"?"desc":null}const k=({columns:e,data:s,rowKey:l,size:d="s",variant:c="white",selectedRows:i,onRowClick:r,onSort:o,sortKey:n,sortDirection:p,className:b,style:g})=>{const U=a=>{if(!o)return;const h=n===a?ve(p??null):"asc";o(a,h)};return t.jsx(pe,{className:b,style:g,children:t.jsxs(me,{$variant:c,children:[t.jsx(ye,{$variant:c,children:e.map(a=>t.jsx(ke,{$width:a.width,$flex:a.flex,$noPadding:a.noPadding,$size:d,children:t.jsxs(be,{children:[t.jsx(ge,{children:a.title}),a.sortable&&t.jsx(xe,{onClick:()=>U(a.key),"aria-label":`Сортировать по ${a.title}`,children:n===a.key&&p==="asc"?t.jsx(ee,{width:16,height:16}):n===a.key&&p==="desc"?t.jsx(te,{width:16,height:16}):t.jsx(Y,{width:16,height:16})})]})},a.key))}),t.jsx(he,{children:s.map((a,x)=>{const h=fe(a,x,l),W=(i==null?void 0:i.includes(h))??!1;return t.jsx(we,{$selected:W,$clickable:!!r,onClick:r?()=>r(a,x):void 0,children:e.map(m=>t.jsx(Te,{$width:m.width,$flex:m.flex,$noPadding:m.noPadding,$size:d,children:m.render?m.render(a[m.key],a,x):a[m.key]??null},m.key))},h)})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => string | number)",elements:[{name:"T"},{name:"unknown"}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"white" | "grey"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"grey"'}]},description:"",defaultValue:{value:'"white"',computed:!1}},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | null',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"null"}]},name:"direction"}],return:{name:"void"}}},description:""},sortKey:{required:!1,tsType:{name:"string"},description:""},sortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc" | null',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"null"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const We={title:"МТС/Table/Table",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Table** — data-driven таблица. Принимает `columns` и `data`, рендеринг каждой ячейки задаётся через `column.render()`.\n\n### Колонка\n\n| Проп | Тип | Описание |\n|---|---|---|\n| `key` | `string` | Ключ поля в объекте данных |\n| `title` | `string` | Заголовок колонки |\n| `width` | `number \\| string` | Ширина в px или CSS-значение |\n| `flex` | `boolean` | Колонка растягивается (flex: 1) |\n| `sortable` | `boolean` | Иконка сортировки в хедере |\n| `noPadding` | `boolean` | Убрать горизонтальные паддинги |\n| `render` | `(value, row, index) => ReactNode` | Кастомный рендер ячейки |\n\n### Хелперы ячеек\n\n- `TableCellText` — текст + опциональный подтекст\n- `TableCellStatus` — цветная точка + текст\n- `TableCellLink` — ссылка с иконкой\n- `TableCellAvatar` — аватар + текст + подтекст\n- `TableCellIconText` — иконка + текст\n- `TableCellActions` — кнопки действий\n        "}},layout:"fullscreen"},argTypes:{size:{control:"radio",options:["s","m"],description:"`s` — паддинг 12px (~44px строка), `m` — паддинг 16px (~52px строка)"},variant:{control:"radio",options:["white","grey"],description:"Фон таблицы: белый или серый (`#F2F3F7`)"},data:{control:!1},columns:{control:!1},style:{control:!1},className:{control:!1}}},K=[{id:1,priority:"Высокий",priorityColor:"#EA1F49",task:"Table View React",subtask:"Дизайн ревью",link:"Перейти",status:"В работе",statusColor:"#26CD58",progress:25,assignee:"Кускова Ю.",role:"Руководитель направления",stars:2},{id:2,priority:"Средний",priorityColor:"#FAC031",task:"Компонент Badge",subtask:"Разработка",link:"Перейти",status:"На паузе",statusColor:"#FAC031",progress:60,assignee:"Иванов А.",role:"Разработчик",stars:1},{id:3,priority:"Низкий",priorityColor:"#26CD58",task:"Документация API",subtask:"Технический долг",link:"Перейти",status:"Готово",statusColor:"#0070E5",progress:100,assignee:"Смирнова О.",role:"Тех. писатель",stars:3},{id:4,priority:"Высокий",priorityColor:"#EA1F49",task:"Рефакторинг Table",subtask:"Sprint 12",link:"Перейти",status:"Не начато",statusColor:"#9EA3A9",progress:0,assignee:"Петров С.",role:"Senior Frontend",stars:0}],I=e=>{const[s,l]=S.useState(),[d,c]=S.useState(null),i=(o,n)=>{l(n?o:void 0),c(n)},r=X.useMemo(()=>!s||!d?e:[...e].sort((o,n)=>{const p=o[s],b=n[s];if(p===b)return 0;const g=p<b?-1:1;return d==="asc"?g:-g}),[e,s,d]);return{sortKey:s,sortDirection:d,handleSort:i,sortedData:r}},w={name:"Default",parameters:{controls:{disable:!0}},render:()=>{const{sortKey:e,sortDirection:s,handleSort:l,sortedData:d}=I(K),[c,i]=S.useState([]),r=[{key:"priority",title:"Приоритет",width:120,noPadding:!0,sortable:!0,render:(o,n)=>t.jsx(D,{size:"s",color:n.priorityColor,children:n.priority})},{key:"task",title:"Задача",width:280,render:(o,n)=>t.jsx(j,{subtext:n.subtask,children:n.task})},{key:"link",title:"Ссылка",width:156,render:()=>t.jsx(ie,{icon:t.jsx(re,{width:16,height:16}),children:"Перейти"})},{key:"status",title:"Статус",width:156,sortable:!0,render:(o,n)=>t.jsx(A,{color:n.statusColor,children:n.status})},{key:"progress",title:"Прогресс",width:144,sortable:!0,render:(o,n)=>t.jsx(ce,{type:"progress",size:"s",progress:n.progress})},{key:"assignee",title:"Исполнитель",flex:!0,render:(o,n)=>t.jsx($,{avatar:t.jsx(z,{size:24,initials:n.assignee.slice(0,1),stroke:!0}),subtext:n.role,children:n.assignee})},{key:"stars",title:"",width:56,render:(o,n)=>t.jsx(le,{icon:t.jsx(ue,{width:16,height:16}),children:n.stars})},{key:"actions",title:"",render:(o,n)=>t.jsx(de,{actions:[{key:"more",icon:t.jsx(Z,{width:16,height:16}),onClick:()=>alert(`Действия для: ${n.task}`),title:"Ещё"}]})}];return t.jsx("div",{style:{padding:24},children:t.jsx(k,{columns:r,data:d,rowKey:"id",sortKey:e,sortDirection:s,onSort:l,selectedRows:c,onRowClick:o=>i(n=>n.includes(o.id)?n.filter(p=>p!==o.id):[...n,o.id])})})}},T={name:"Size M (паддинг 16px)",parameters:{controls:{disable:!0}},render:()=>{const{sortKey:e,sortDirection:s,handleSort:l,sortedData:d}=I(K),c=[{key:"priority",title:"Приоритет",width:120,noPadding:!0,sortable:!0,render:(i,r)=>t.jsx(D,{size:"s",color:r.priorityColor,children:r.priority})},{key:"task",title:"Задача",width:280,render:(i,r)=>t.jsx(j,{subtext:r.subtask,children:r.task})},{key:"status",title:"Статус",width:156,sortable:!0,render:(i,r)=>t.jsx(A,{color:r.statusColor,children:r.status})},{key:"assignee",title:"Исполнитель",flex:!0,render:(i,r)=>t.jsx($,{avatar:t.jsx(z,{size:24,initials:r.assignee.slice(0,1),stroke:!0}),subtext:r.role,children:r.assignee})}];return t.jsx("div",{style:{padding:24},children:t.jsx(k,{columns:c,data:d,rowKey:"id",size:"m",sortKey:e,sortDirection:s,onSort:l})})}},f={name:"Серая таблица (variant=grey)",parameters:{controls:{disable:!0}},render:()=>{const{sortKey:e,sortDirection:s,handleSort:l,sortedData:d}=I(K),c=[{key:"priority",title:"Приоритет",width:120,noPadding:!0,render:(i,r)=>t.jsx(D,{size:"s",color:r.priorityColor,children:r.priority})},{key:"task",title:"Задача",flex:!0,render:(i,r)=>t.jsx(j,{subtext:r.subtask,children:r.task})},{key:"status",title:"Статус",width:160,sortable:!0,render:(i,r)=>t.jsx(A,{color:r.statusColor,children:r.status})},{key:"assignee",title:"Исполнитель",width:220,render:(i,r)=>t.jsx($,{avatar:t.jsx(z,{size:24,initials:r.assignee.slice(0,1),stroke:!0}),children:r.assignee})}];return t.jsx("div",{style:{padding:24,background:"white"},children:t.jsx(k,{columns:c,data:d,rowKey:"id",variant:"grey",sortKey:e,sortDirection:s,onSort:l})})}},v={name:"Пустая таблица",parameters:{controls:{disable:!0}},render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(k,{columns:[{key:"priority",title:"Приоритет",width:120},{key:"task",title:"Задача",width:280},{key:"status",title:"Статус",width:156}],data:[],rowKey:"id"})})};var P,q,B;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const {
      sortKey,
      sortDirection,
      handleSort,
      sortedData
    } = useSort(TASKS);
    const [selected, setSelected] = useState<number[]>([]);
    const columns = [{
      key: "priority",
      title: "Приоритет",
      width: 120,
      noPadding: true,
      sortable: true,
      render: (_: unknown, row: Task) => <Badge size="s" color={row.priorityColor}>{row.priority}</Badge>
    }, {
      key: "task",
      title: "Задача",
      width: 280,
      render: (_: unknown, row: Task) => <TableCellText subtext={row.subtask}>{row.task}</TableCellText>
    }, {
      key: "link",
      title: "Ссылка",
      width: 156,
      render: () => <TableCellLink icon={<IconLink width={16} height={16} />}>Перейти</TableCellLink>
    }, {
      key: "status",
      title: "Статус",
      width: 156,
      sortable: true,
      render: (_: unknown, row: Task) => <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus>
    }, {
      key: "progress",
      title: "Прогресс",
      width: 144,
      sortable: true,
      render: (_: unknown, row: Task) => <ProgressLinear type="progress" size="s" progress={row.progress} />
    }, {
      key: "assignee",
      title: "Исполнитель",
      flex: true,
      render: (_: unknown, row: Task) => <TableCellAvatar avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />} subtext={row.role}>
            {row.assignee}
          </TableCellAvatar>
    }, {
      key: "stars",
      title: "",
      width: 56,
      render: (_: unknown, row: Task) => <TableCellIconText icon={<IconStar width={16} height={16} />}>
            {row.stars}
          </TableCellIconText>
    }, {
      key: "actions",
      title: "",
      render: (_: unknown, row: Task) => <TableCellActions actions={[{
        key: "more",
        icon: <IconMore width={16} height={16} />,
        onClick: () => alert(\`Действия для: \${row.task}\`),
        title: "Ещё"
      }]} />
    }];
    return <div style={{
      padding: 24
    }}>
        <Table columns={columns} data={sortedData} rowKey="id" sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} selectedRows={selected} onRowClick={row => setSelected(prev => prev.includes(row.id) ? prev.filter(id => id !== row.id) : [...prev, row.id])} />
      </div>;
  }
}`,...(B=(q=w.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var L,R,E;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Size M (паддинг 16px)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const {
      sortKey,
      sortDirection,
      handleSort,
      sortedData
    } = useSort(TASKS);
    const columns = [{
      key: "priority",
      title: "Приоритет",
      width: 120,
      noPadding: true,
      sortable: true,
      render: (_: unknown, row: Task) => <Badge size="s" color={row.priorityColor}>{row.priority}</Badge>
    }, {
      key: "task",
      title: "Задача",
      width: 280,
      render: (_: unknown, row: Task) => <TableCellText subtext={row.subtask}>{row.task}</TableCellText>
    }, {
      key: "status",
      title: "Статус",
      width: 156,
      sortable: true,
      render: (_: unknown, row: Task) => <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus>
    }, {
      key: "assignee",
      title: "Исполнитель",
      flex: true,
      render: (_: unknown, row: Task) => <TableCellAvatar avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />} subtext={row.role}>
            {row.assignee}
          </TableCellAvatar>
    }];
    return <div style={{
      padding: 24
    }}>
        <Table columns={columns} data={sortedData} rowKey="id" size="m" sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
      </div>;
  }
}`,...(E=(R=T.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,F,N;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Серая таблица (variant=grey)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const {
      sortKey,
      sortDirection,
      handleSort,
      sortedData
    } = useSort(TASKS);
    const columns = [{
      key: "priority",
      title: "Приоритет",
      width: 120,
      noPadding: true,
      render: (_: unknown, row: Task) => <Badge size="s" color={row.priorityColor}>{row.priority}</Badge>
    }, {
      key: "task",
      title: "Задача",
      flex: true,
      render: (_: unknown, row: Task) => <TableCellText subtext={row.subtask}>{row.task}</TableCellText>
    }, {
      key: "status",
      title: "Статус",
      width: 160,
      sortable: true,
      render: (_: unknown, row: Task) => <TableCellStatus color={row.statusColor}>{row.status}</TableCellStatus>
    }, {
      key: "assignee",
      title: "Исполнитель",
      width: 220,
      render: (_: unknown, row: Task) => <TableCellAvatar avatar={<Avatar size={24} initials={row.assignee.slice(0, 1)} stroke />}>
            {row.assignee}
          </TableCellAvatar>
    }];
    return <div style={{
      padding: 24,
      background: "white"
    }}>
        <Table columns={columns} data={sortedData} rowKey="id" variant="grey" sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
      </div>;
  }
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,G,H;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Пустая таблица",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24
  }}>
      <Table columns={[{
      key: "priority",
      title: "Приоритет",
      width: 120
    }, {
      key: "task",
      title: "Задача",
      width: 280
    }, {
      key: "status",
      title: "Статус",
      width: 156
    }]} data={[]} rowKey="id" />
    </div>
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Xe=["Default","SizeM","GreyVariant","EmptyState"];export{w as Default,v as EmptyState,f as GreyVariant,T as SizeM,Xe as __namedExportsOrder,We as default};
