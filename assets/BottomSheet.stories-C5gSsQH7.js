import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import{B as p,b as c,O as l,G as O}from"./BottomSheet-HnBawz1T.js";import{B as d}from"./Button-Rt6WeiJe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./mixins-CTkzXf3m.js";/* empty css              */import"./index-CWlbk4Hf.js";import"./index-BrN7QjLr.js";import"./IconYoutube-CRYDP8rR.js";import"./createIcon-CRC-JE94.js";import"./Spinner-BrDaGlgB.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";const ve={title:"МТС/BottomSheet",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
**BottomSheet** — панель, выезжающая снизу экрана. Используется для выбора из списка, применения фильтров и других действий на мобильных устройствах. Рендерится через портал в \`document.body\`.

### Анимация

Появляется и скрывается с пружинной анимацией (framer-motion). Фон блокируется оверлеем — клик по нему закрывает панель.

### Структура

\`\`\`
BottomSheet
├── DragIndicator     (ручка для свайпа, всегда видна)
├── Header            (опционально — title + кнопка ×)
├── OptionsContainer  (children — прокручиваемая область)
└── Footer            (опционально — кнопки сброса и применения)
\`\`\`

### Вспомогательные компоненты

Экспортируются из \`./style\` для построения содержимого:

| Компонент | Назначение |
|---|---|
| \`OptionRow\` | Строка-кнопка с hover-эффектом. Проп \`$selected\` — активное состояние |
| \`OptionLabel\` | Текст опции |
| \`GroupLabel\` | Подпись-разделитель группы опций |

### Высота

- По умолчанию — \`max-height: 85vh\`, панель растягивается по контенту
- \`fixedHeight\` — фиксированная высота \`85vh\` независимо от контента
- \`bottomOffset\` — отступ панели и оверлея от нижнего края экрана, например для размещения над фиксированным таббаром

### Свайп для закрытия

\`collapsable\` — включает жест перетаскивания вниз для закрытия. Срабатывает при сдвиге > 80px или скорости > 400px/с.
        `}}},argTypes:{isOpen:{description:"Управляет видимостью панели.",control:"boolean"},onClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или кнопку ×."},title:{description:"Заголовок панели. При наличии отображается шапка с кнопкой закрытия ×.",control:"text"},onReset:{description:"Коллбек кнопки сброса. Если не передан — кнопка не отображается."},onApply:{description:"Коллбек кнопки применения. Если не передан — кнопка не отображается."},resetText:{description:"Текст кнопки сброса. По умолчанию: «Сбросить».",control:"text"},applyText:{description:"Текст кнопки применения. По умолчанию: «Применить».",control:"text"},fixedHeight:{description:"Фиксирует высоту панели на 85vh. По умолчанию панель растягивается по контенту (до 85vh).",control:"boolean"},collapsable:{description:"Включает жест свайпа вниз для закрытия. Рекомендуется включать на мобильных устройствах.",control:"boolean"},bottomOffset:{description:"Отступ от нижнего края экрана. Число трактуется как px, строка передаётся как CSS length.",control:"text"},children:{control:!1}}},m=["Москва","Санкт-Петербург","Новосибирск","Екатеринбург","Казань"],A=()=>{const[o,t]=n.useState(!1),[r,i]=n.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:r||"Выберите город"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),children:m.map(s=>e.jsx(c,{type:"button",$selected:s===r,onClick:()=>{i(s),t(!1)},children:e.jsx(l,{children:s})},s))})]})},U=()=>{const[o,t]=n.useState(!1),[r,i]=n.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Выберите город",children:m.map(s=>e.jsx(c,{type:"button",$selected:s===r,onClick:()=>{i(s),t(!1)},children:e.jsx(l,{children:s})},s))})]})},z=()=>{const[o,t]=n.useState(!1),[r,i]=n.useState([]),s=a=>i(j=>j.includes(a)?j.filter(H=>H!==a):[...j,a]);return e.jsxs("div",{style:{padding:24},children:[e.jsxs(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:["Фильтры ",r.length>0&&`(${r.length})`]}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Город",onReset:()=>{i([]),t(!1)},onApply:()=>t(!1),children:m.map(a=>e.jsx(c,{type:"button",$selected:r.includes(a),onClick:()=>s(a),children:e.jsx(l,{children:a})},a))})]})},M=()=>{const[o,t]=n.useState(!1),[r,i]=n.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsxs(p,{isOpen:o,onClose:()=>t(!1),title:"Выберите город",children:[e.jsx(O,{children:"Популярные"}),["Москва","Санкт-Петербург"].map(s=>e.jsx(c,{type:"button",$selected:s===r,onClick:()=>{i(s),t(!1)},children:e.jsx(l,{children:s})},s)),e.jsx(O,{children:"Остальные"}),["Новосибирск","Екатеринбург","Казань","Нижний Новгород"].map(s=>e.jsx(c,{type:"button",$selected:s===r,onClick:()=>{i(s),t(!1)},children:e.jsx(l,{children:s})},s))]})]})},q=()=>{const[o,t]=n.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Потяните вниз",collapsable:!0,children:m.map(r=>e.jsx(c,{type:"button",$selected:!1,onClick:()=>t(!1),children:e.jsx(l,{children:r})},r))})]})},J=()=>{const[o,t]=n.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть над таббаром"}),e.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,height:88,zIndex:10002,display:"grid",placeItems:"center",background:"#fff",boxShadow:"0 -4px 16px rgba(0,0,0,0.08)",fontFamily:"MTS Compact, sans-serif"},children:"Фиксированный таббар"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Панель над таббаром",bottomOffset:88,children:m.map(r=>e.jsx(c,{type:"button",$selected:!1,onClick:()=>t(!1),children:e.jsx(l,{children:r})},r))})]})},u={name:"Базовый список",render:()=>e.jsx(A,{}),parameters:{docs:{description:{story:"Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."}}}},h={name:"С заголовком",render:()=>e.jsx(U,{}),parameters:{docs:{description:{story:"Шапка с заголовком и кнопкой × появляется автоматически при передаче `title`."}}}},x={name:"С футером (фильтры)",render:()=>e.jsx(z,{}),parameters:{docs:{description:{story:"Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."}}}},f={name:"С группами опций",render:()=>e.jsx(M,{}),parameters:{docs:{description:{story:"`GroupLabel` используется как подпись-разделитель между группами внутри списка."}}}},b={name:"Со свайпом",render:()=>e.jsx(q,{}),parameters:{docs:{description:{story:"`collapsable` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."}}}},y={name:"С отступом снизу",render:()=>e.jsx(J,{}),parameters:{docs:{description:{story:"`bottomOffset` поднимает панель и оверлей над фиксированным нижним UI, например таббаром."}}}};var g,S,C;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Базовый список",
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: {
        story: "Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."
      }
    }
  }
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,v,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "С заголовком",
  render: () => <WithTitleDemo />,
  parameters: {
    docs: {
      description: {
        story: "Шапка с заголовком и кнопкой × появляется автоматически при передаче \`title\`."
      }
    }
  }
}`,...(W=(v=h.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var k,B,I;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "С футером (фильтры)",
  render: () => <WithFooterDemo />,
  parameters: {
    docs: {
      description: {
        story: "Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."
      }
    }
  }
}`,...(I=(B=x.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var w,G,$;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "С группами опций",
  render: () => <WithGroupsDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`GroupLabel\` используется как подпись-разделитель между группами внутри списка."
      }
    }
  }
}`,...($=(G=f.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var T,_,F;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Со свайпом",
  render: () => <CollapsableDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`collapsable\` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."
      }
    }
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,R,E;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "С отступом снизу",
  render: () => <WithBottomOffsetDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`bottomOffset\` поднимает панель и оверлей над фиксированным нижним UI, например таббаром."
      }
    }
  }
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const We=["Default","WithTitle","WithFooter","WithGroups","Collapsable","WithBottomOffset"];export{b as Collapsable,u as Default,y as WithBottomOffset,x as WithFooter,f as WithGroups,h as WithTitle,We as __namedExportsOrder,ve as default};
