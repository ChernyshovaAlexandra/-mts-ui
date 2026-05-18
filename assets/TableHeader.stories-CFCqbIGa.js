import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{y as o}from"./styled-components.browser.esm-y4XIFzD1.js";import{C as w,E as H,G as y}from"./index-B66h-egn.js";import{a as W,I as S}from"./IconMore-B_vxfzTm.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";const s=o.div`
  display: inline-flex;
  align-items: center;
  padding: 12px;
  gap: 4px;
  border-bottom: 1px solid ${w};
  background: white;
`,c=o.span`
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${H};
  white-space: nowrap;
`,i=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${y};
  flex-shrink: 0;
  &:hover { color: ${H}; }
`,k=o.div`
  width: 18px;
  height: 18px;
  border: 1.5px solid #BCC3D0;
  border-radius: 4px;
  background: white;
`,$={title:"МТС/Table/TableHeader",tags:["autodocs"],parameters:{docs:{description:{component:"\n**TableHeader** — ячейка заголовка таблицы. Используется внутри `Table` через `columns[].title` и `columns[].sortable`.\n\n### Варианты\n\n| Тип | Описание |\n|---|---|\n| `Default` | Текст заголовка без действий |\n| `With Icon` | Текст + иконка сортировки + иконка доп. действий |\n| `Checkbox` | Чекбокс для выбора всех строк |\n\n### Параметры колонки\n\n```ts\n{ key: 'name', title: 'Название', sortable: true }\n```\n        "}}}},r={name:"Default",render:()=>e.jsx(s,{children:e.jsx(c,{children:"Заголовок"})})},n={name:"With Sort Icon",render:()=>e.jsxs(s,{children:[e.jsx(c,{children:"Заголовок"}),e.jsx(i,{"aria-label":"Сортировать",children:e.jsx(W,{width:16,height:16})})]})},t={name:"With Sort + Actions",render:()=>e.jsxs(s,{style:{justifyContent:"space-between",width:160},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(c,{children:"Заголовок"}),e.jsx(i,{"aria-label":"Сортировать",children:e.jsx(W,{width:16,height:16})})]}),e.jsx(i,{"aria-label":"Ещё",children:e.jsx(S,{width:16,height:16})})]})},a={name:"Checkbox",render:()=>e.jsx(s,{children:e.jsx(k,{})})};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Default",
  render: () => <HeaderWrap>
      <HeaderLabel>Заголовок</HeaderLabel>
    </HeaderWrap>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,m,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With Sort Icon",
  render: () => <HeaderWrap>
      <HeaderLabel>Заголовок</HeaderLabel>
      <IconBtn aria-label="Сортировать">
        <IconSort width={16} height={16} />
      </IconBtn>
    </HeaderWrap>
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,u,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With Sort + Actions",
  render: () => <HeaderWrap style={{
    justifyContent: "space-between",
    width: 160
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 4
    }}>
        <HeaderLabel>Заголовок</HeaderLabel>
        <IconBtn aria-label="Сортировать">
          <IconSort width={16} height={16} />
        </IconBtn>
      </div>
      <IconBtn aria-label="Ещё">
        <IconMore width={16} height={16} />
      </IconBtn>
    </HeaderWrap>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,j,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Checkbox",
  render: () => <HeaderWrap>
      <CheckboxBox />
    </HeaderWrap>
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const E=["Default","WithSortIcon","WithActions","CheckboxVariant"];export{a as CheckboxVariant,r as Default,t as WithActions,n as WithSortIcon,E as __namedExportsOrder,$ as default};
