import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-G8LIXM5I.js";import{y as d}from"./styled-components.browser.esm-BU5pfHrT.js";import{D as x}from"./index-CWlbk4Hf.js";import{a as L,c as W,e as t,f as j,b as P,d as _,T as u}from"./TableCells-DQ37JAIf.js";import{B as $}from"./Badge-Ba217irw.js";import{A as B}from"./Avatar-C1lJHa58.js";import{P as O}from"./ProgressLinear-B2CtFbL-.js";import{S as M}from"./Switch-DOBvZSeI.js";import{I as R}from"./IconLink-DjSXk0U5.js";import{I as G}from"./IconStar-DBYALbaW.js";import{I as q}from"./IconMore-nYtcAaZN.js";import{b1 as H}from"./IconYoutube-CRYDP8rR.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Text-2zki5lTF.js";import"./style-afSt-2-G.js";import"./mixins-CTkzXf3m.js";/* empty css              */import"./Caption-YytOdcIh.js";import"./Link-rKzP1vxa.js";import"./style-B3cKJyYt.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./IconOut-BVbMsUOi.js";import"./InlineEdit-BI73dCJt.js";import"./IconEdit-BJDhI4vU.js";import"./createIcon-CRC-JE94.js";import"./Spinner-BrDaGlgB.js";import"./IconAttention-OHJemvOI.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";const r=d.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${x};
  background: white;
  min-width: 160px;
`,J=d.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  border: 1px solid ${x};
  border-radius: 8px;
  overflow: hidden;
  max-width: 480px;
`,l=d.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${x};
  &:last-child { border-bottom: none; }
`,s=d.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: #9EA3A9;
  padding: 12px;
  width: 130px;
  flex-shrink: 0;
  border-right: 1px solid ${x};
`,Fe={title:"МТС/Table/TableCell",tags:["autodocs"],parameters:{docs:{description:{component:"\n**TableCell** — типовые варианты контента ячейки таблицы. Используются внутри `column.render()`.\n\n| Компонент | Описание |\n|---|---|\n| `TableCellText` | Текст + опциональный подтекст |\n| `TableCellStatus` | Цветная точка + текст статуса |\n| `TableCellLink` | Синяя ссылка с иконкой |\n| `TableCellAvatar` | Аватар + имя + роль |\n| `TableCellIconText` | Иконка + текст |\n| `TableCellActions` | Кнопки действий (иконки) |\n        "}}}},K=()=>{const[m,p]=h.useState("Inline Edit"),[F,V]=h.useState(!0);return e.jsxs(J,{children:[e.jsxs(l,{children:[e.jsx(s,{children:"Text"}),e.jsx(r,{children:e.jsx(j,{children:"Текст ячейки"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Text + Subtext"}),e.jsx(r,{children:e.jsx(j,{subtext:"Подтекст",children:"Текст ячейки"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Text w Icon"}),e.jsx(r,{children:e.jsx(P,{icon:e.jsx(G,{width:16,height:16}),children:"Текст ячейки"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Link"}),e.jsx(r,{children:e.jsx(_,{icon:e.jsx(R,{width:16,height:16}),children:"Перейти"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Inline Edit"}),e.jsx(r,{style:{minWidth:200},children:e.jsx(W,{value:m,onChange:p})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Badge"}),e.jsx(r,{children:e.jsx($,{size:"s",color:"#EA1F49",children:"Высокий"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Progress Bar"}),e.jsx(r,{style:{minWidth:200},children:e.jsx(O,{type:"progress",size:"s",progress:25,style:{width:"100%"}})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Icon Button"}),e.jsx(r,{children:e.jsx(u,{actions:[{key:"add",icon:e.jsx(H,{width:16,height:16}),onClick:()=>{},title:"Добавить"}]})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Avatar w Text"}),e.jsx(r,{children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель",children:"Кускова Ю."})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Status"}),e.jsx(r,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Switch"}),e.jsx(r,{children:e.jsx(M,{checked:F,onChange:V,size:"s"})})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Actions"}),e.jsx(r,{children:e.jsx(u,{actions:[{key:"more",icon:e.jsx(q,{width:16,height:16}),onClick:()=>{},title:"Ещё"}]})})]})]})},i={name:"Все типы",render:()=>e.jsx(K,{})},n={name:"Text",render:()=>e.jsx(r,{children:e.jsx(j,{subtext:"Подтекст ячейки",children:"Текст ячейки"})})},a={name:"Status",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(r,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})}),e.jsx(r,{children:e.jsx(t,{color:"#FAC031",children:"На паузе"})}),e.jsx(r,{children:e.jsx(t,{color:"#F95721",children:"Ошибка"})}),e.jsx(r,{children:e.jsx(t,{color:"#9EA3A9",children:"Не начато"})})]})},o={name:"Avatar w Text",render:()=>e.jsx(r,{style:{minWidth:240},children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель направления",children:"Кускова Ю."})})},c={name:"Inline Edit",render:()=>{const[m,p]=h.useState("Редактируемый текст");return e.jsx(r,{style:{minWidth:240},children:e.jsx(W,{value:m,onChange:p})})}};var C,T,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Все типы",
  render: () => <AllTypesDemo />
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var S,g,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Text",
  render: () => <Cell>
      <TableCellText subtext="Подтекст ячейки">Текст ячейки</TableCellText>
    </Cell>
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var A,v,y;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Status",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 0
  }}>
      <Cell><TableCellStatus color="#26CD58">В работе</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#FAC031">На паузе</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#F95721">Ошибка</TableCellStatus></Cell>
      <Cell><TableCellStatus color="#9EA3A9">Не начато</TableCellStatus></Cell>
    </div>
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,I,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Avatar w Text",
  render: () => <Cell style={{
    minWidth: 240
  }}>
      <TableCellAvatar avatar={<Avatar size={24} initials="К" stroke />} subtext="Руководитель направления">
        Кускова Ю.
      </TableCellAvatar>
    </Cell>
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,D,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Inline Edit",
  render: () => {
    const [value, setValue] = useState("Редактируемый текст");
    return <Cell style={{
      minWidth: 240
    }}>
        <TableCellInlineEdit value={value} onChange={setValue} />
      </Cell>;
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const Ve=["AllTypes","TextCell","StatusCell","AvatarCell","InlineEditCell"];export{i as AllTypes,o as AvatarCell,c as InlineEditCell,a as StatusCell,n as TextCell,Ve as __namedExportsOrder,Fe as default};
