import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-mIjS73Jk.js";import{g as d}from"./styled-components.browser.esm-UUNjPRYl.js";import{f as x}from"./index-CA_YInif.js";import{T as L,a as W,b as t,c as j,d as P,e as _,f as u}from"./TableCells-RneAqF0u.js";import{B as $}from"./Badge-ZXcuSxpx.js";import{A as B}from"./Avatar-DyXPwuO4.js";import{P as O}from"./ProgressLinear-CeT59doR.js";import{S as M}from"./Switch-9OPJOe5N.js";import{I as R}from"./IconLink-BtOXviCL.js";import{I as G}from"./IconStar-CUCWIUHE.js";import{I as q}from"./IconMore-DqM9uH_d.js";import{a as H}from"./IconYoutube-D-UZz_iv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Text-DOS6fvGo.js";import"./style-ZrP7Bi_n.js";import"./mixins-DAii6Zu4.js";/* empty css              */import"./Caption-BRBW8Cb7.js";import"./Link-I2za92aw.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./IconOut-D6k_3EUx.js";import"./InlineEdit-BuwkG6X4.js";import"./IconEdit-BUsjAjR1.js";import"./createIcon-CuvqBQrk.js";import"./Spinner-Cwbmsakg.js";import"./IconAttention--HYYox4d.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";const l=d.div`
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
`,We={title:"МТС/Table/TableCell",tags:["autodocs"],parameters:{docs:{description:{component:"\n**TableCell** — типовые варианты контента ячейки таблицы. Используются внутри `column.render()`.\n\n| Компонент | Описание |\n|---|---|\n| `TableCellText` | Текст + опциональный подтекст |\n| `TableCellStatus` | Цветная точка + текст статуса |\n| `TableCellLink` | Синяя ссылка с иконкой |\n| `TableCellAvatar` | Аватар + имя + роль |\n| `TableCellIconText` | Иконка + текст |\n| `TableCellActions` | Кнопки действий (иконки) |\n        "}}}},K=()=>{const[m,p]=h.useState("Inline Edit"),[F,V]=h.useState(!0);return e.jsxs(J,{children:[e.jsxs(r,{children:[e.jsx(s,{children:"Text"}),e.jsx(l,{children:e.jsx(j,{children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Text + Subtext"}),e.jsx(l,{children:e.jsx(j,{subtext:"Подтекст",children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Text w Icon"}),e.jsx(l,{children:e.jsx(P,{icon:e.jsx(G,{width:16,height:16}),children:"Текст ячейки"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Link"}),e.jsx(l,{children:e.jsx(_,{icon:e.jsx(R,{width:16,height:16}),children:"Перейти"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Inline Edit"}),e.jsx(l,{style:{minWidth:200},children:e.jsx(W,{value:m,onChange:p})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Badge"}),e.jsx(l,{children:e.jsx($,{size:"s",color:"#EA1F49",children:"Высокий"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Progress Bar"}),e.jsx(l,{style:{minWidth:200},children:e.jsx(O,{type:"progress",size:"s",progress:25,style:{width:"100%"}})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Icon Button"}),e.jsx(l,{children:e.jsx(u,{actions:[{key:"add",icon:e.jsx(H,{width:16,height:16}),onClick:()=>{},title:"Добавить"}]})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Avatar w Text"}),e.jsx(l,{children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель",children:"Кускова Ю."})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Status"}),e.jsx(l,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Switch"}),e.jsx(l,{children:e.jsx(M,{checked:F,onChange:V,size:"s"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Actions"}),e.jsx(l,{children:e.jsx(u,{actions:[{key:"more",icon:e.jsx(q,{width:16,height:16}),onClick:()=>{},title:"Ещё"}]})})]})]})},n={name:"Все типы",render:()=>e.jsx(K,{})},i={name:"Text",render:()=>e.jsx(l,{children:e.jsx(j,{subtext:"Подтекст ячейки",children:"Текст ячейки"})})},a={name:"Status",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(l,{children:e.jsx(t,{color:"#26CD58",children:"В работе"})}),e.jsx(l,{children:e.jsx(t,{color:"#FAC031",children:"На паузе"})}),e.jsx(l,{children:e.jsx(t,{color:"#F95721",children:"Ошибка"})}),e.jsx(l,{children:e.jsx(t,{color:"#9EA3A9",children:"Не начато"})})]})},o={name:"Avatar w Text",render:()=>e.jsx(l,{style:{minWidth:240},children:e.jsx(L,{avatar:e.jsx(B,{size:24,initials:"К",stroke:!0}),subtext:"Руководитель направления",children:"Кускова Ю."})})},c={name:"Inline Edit",render:()=>{const[m,p]=h.useState("Редактируемый текст");return e.jsx(l,{style:{minWidth:240},children:e.jsx(W,{value:m,onChange:p})})}};var C,T,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Все типы",
  render: () => <AllTypesDemo />
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var g,S,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Text",
  render: () => <Cell>
      <TableCellText subtext="Подтекст ячейки">Текст ячейки</TableCellText>
    </Cell>
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var A,v,y;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const Be=["AllTypes","TextCell","StatusCell","AvatarCell","InlineEditCell"];export{n as AllTypes,o as AvatarCell,c as InlineEditCell,a as StatusCell,i as TextCell,Be as __namedExportsOrder,We as default};
