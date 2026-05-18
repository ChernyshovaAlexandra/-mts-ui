import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-Dx_1l3Sb.js";import{y as d}from"./styled-components.browser.esm-y4XIFzD1.js";import{C as x}from"./index-B66h-egn.js";import{a as L,c as W,e as t,f as j,b as $,d as P,T as u}from"./TableCells-CyPR-r23.js";import{B as _}from"./Badge-BmNWZ0C9.js";import{A as B}from"./Avatar-GIzqnXQN.js";import{P as O}from"./ProgressLinear-BF2aSLer.js";import{S as M}from"./Switch-CRDX_VIh.js";import{c as R,I as G}from"./IconLink-CnepHNOO.js";import{I as q}from"./IconMore-B_vxfzTm.js";import{a$ as H}from"./IconYoutube-CikJe2Kh.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Text-BGtrDhtg.js";import"./style-CYyl-vEM.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./Caption-C1APNMb6.js";import"./Link-D44uTzGf.js";import"./style-Cn7-W3gz.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./IconOut-BVbMsUOi.js";import"./InlineEdit-m-yGmKik.js";import"./IconEdit--ReOD0mK.js";import"./createIcon-DXdYUD03.js";import"./Spinner-5z9YM4jE.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconPicture-B6KsTlBs.js";const l=d.div`
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
`,r=d.div`
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
`,ze={title:"МТС/Table/TableCell",tags:["autodocs"],parameters:{docs:{description:{component:"\n**TableCell** — типовые варианты контента ячейки таблицы. Используются внутри `column.render()`.\n\n| Компонент | Описание |\n|---|---|\n| `TableCellText` | Текст + опциональный подтекст |\n| `TableCellStatus` | Цветная точка + текст статуса |\n| `TableCellLink` | Синяя ссылка с иконкой |\n| `TableCellAvatar` | Аватар + имя + роль |\n| `TableCellIconText` | Иконка + текст |\n| `TableCellActions` | Кнопки действий (иконки) |\n        "}}}},K=()=>{const[m,h]=p.useState("Inline Edit"),[F,V]=p.useState(!0);return e.jsxs(J,{children:[e.jsxs(r,{children:[e.jsx(s,{children:"Text"}),e.jsx(l,{children:e.jsx(j,{children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Text + Subtext"}),e.jsx(l,{children:e.jsx(j,{subtext:"Подтекст",children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Text w Icon"}),e.jsx(l,{children:e.jsx($,{icon:e.jsx(R,{width:16,height:16}),children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Link"}),e.jsx(l,{children:e.jsx(P,{icon:e.jsx(G,{width:16,height:16}),children:"Перейти"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Inline Edit"}),e.jsx(l,{style:{minWidth:200},children:e.jsx(W,{value:m,onChange:h})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Badge"}),e.jsx(l,{children:e.jsx(_,{size:"s",color:"#EA1F49",children:"Высокий"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Progress Bar"}),e.jsx(l,{style:{minWidth:200},children:e.jsx(O,{type:"progress",size:"s",progress:25,style:{width:"100%"}})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Icon Button"}),e.jsx(l,{children:e.jsx(u,{actions:[{key:"add",icon:e.jsx(H,{width:16,height:16}),onClick:()=>{},title:"Добавить"}]})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Avatar w Text"}),e.jsx(l,{children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель",children:"Кускова Ю."})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Status"}),e.jsx(l,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Switch"}),e.jsx(l,{children:e.jsx(M,{checked:F,onChange:V,size:"s"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Actions"}),e.jsx(l,{children:e.jsx(u,{actions:[{key:"more",icon:e.jsx(q,{width:16,height:16}),onClick:()=>{},title:"Ещё"}]})})]})]})},n={name:"Все типы",render:()=>e.jsx(K,{})},i={name:"Text",render:()=>e.jsx(l,{children:e.jsx(j,{subtext:"Подтекст ячейки",children:"Текст ячейки"})})},a={name:"Status",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(l,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})}),e.jsx(l,{children:e.jsx(t,{color:"#FAC031",children:"На паузе"})}),e.jsx(l,{children:e.jsx(t,{color:"#F95721",children:"Ошибка"})}),e.jsx(l,{children:e.jsx(t,{color:"#9EA3A9",children:"Не начато"})})]})},o={name:"Avatar w Text",render:()=>e.jsx(l,{style:{minWidth:240},children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель направления",children:"Кускова Ю."})})},c={name:"Inline Edit",render:()=>{const[m,h]=p.useState("Редактируемый текст");return e.jsx(l,{style:{minWidth:240},children:e.jsx(W,{value:m,onChange:h})})}};var C,T,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Все типы",
  render: () => <AllTypesDemo />
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var S,g,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Text",
  render: () => <Cell>
      <TableCellText subtext="Подтекст ячейки">Текст ячейки</TableCellText>
    </Cell>
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var A,v,y;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,z,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Inline Edit",
  render: () => {
    const [value, setValue] = useState("Редактируемый текст");
    return <Cell style={{
      minWidth: 240
    }}>
        <TableCellInlineEdit value={value} onChange={setValue} />
      </Cell>;
  }
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const De=["AllTypes","TextCell","StatusCell","AvatarCell","InlineEditCell"];export{n as AllTypes,o as AvatarCell,c as InlineEditCell,a as StatusCell,i as TextCell,De as __namedExportsOrder,ze as default};
