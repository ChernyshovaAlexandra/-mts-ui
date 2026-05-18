import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import{B as p,b as l,O as c,G as f}from"./BottomSheet-Bz-_wCEr.js";import{B as d}from"./Button-DfpABke-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./index-B66h-egn.js";import"./index-C5BeFhru.js";import"./IconYoutube-CikJe2Kh.js";import"./createIcon-DXdYUD03.js";import"./Spinner-5z9YM4jE.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";const xe={title:"МТС/BottomSheet",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
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

### Свайп для закрытия

\`collapsable\` — включает жест перетаскивания вниз для закрытия. Срабатывает при сдвиге > 80px или скорости > 400px/с.
        `}}},argTypes:{isOpen:{description:"Управляет видимостью панели.",control:"boolean"},onClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или кнопку ×."},title:{description:"Заголовок панели. При наличии отображается шапка с кнопкой закрытия ×.",control:"text"},onReset:{description:"Коллбек кнопки сброса. Если не передан — кнопка не отображается."},onApply:{description:"Коллбек кнопки применения. Если не передан — кнопка не отображается."},resetText:{description:"Текст кнопки сброса. По умолчанию: «Сбросить».",control:"text"},applyText:{description:"Текст кнопки применения. По умолчанию: «Применить».",control:"text"},fixedHeight:{description:"Фиксирует высоту панели на 85vh. По умолчанию панель растягивается по контенту (до 85vh).",control:"boolean"},collapsable:{description:"Включает жест свайпа вниз для закрытия. Рекомендуется включать на мобильных устройствах.",control:"boolean"},children:{control:!1}}},b=["Москва","Санкт-Петербург","Новосибирск","Екатеринбург","Казань"],F=()=>{const[o,t]=i.useState(!1),[r,n]=i.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:r||"Выберите город"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),children:b.map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{n(s),t(!1)},children:e.jsx(c,{children:s})},s))})]})},R=()=>{const[o,t]=i.useState(!1),[r,n]=i.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Выберите город",children:b.map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{n(s),t(!1)},children:e.jsx(c,{children:s})},s))})]})},E=()=>{const[o,t]=i.useState(!1),[r,n]=i.useState([]),s=a=>n(j=>j.includes(a)?j.filter(L=>L!==a):[...j,a]);return e.jsxs("div",{style:{padding:24},children:[e.jsxs(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:["Фильтры ",r.length>0&&`(${r.length})`]}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Город",onReset:()=>{n([]),t(!1)},onApply:()=>t(!1),children:b.map(a=>e.jsx(l,{type:"button",$selected:r.includes(a),onClick:()=>s(a),children:e.jsx(c,{children:a})},a))})]})},H=()=>{const[o,t]=i.useState(!1),[r,n]=i.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsxs(p,{isOpen:o,onClose:()=>t(!1),title:"Выберите город",children:[e.jsx(f,{children:"Популярные"}),["Москва","Санкт-Петербург"].map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{n(s),t(!1)},children:e.jsx(c,{children:s})},s)),e.jsx(f,{children:"Остальные"}),["Новосибирск","Екатеринбург","Казань","Нижний Новгород"].map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{n(s),t(!1)},children:e.jsx(c,{children:s})},s))]})]})},A=()=>{const[o,t]=i.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(p,{isOpen:o,onClose:()=>t(!1),title:"Потяните вниз",collapsable:!0,children:b.map(r=>e.jsx(l,{type:"button",$selected:!1,onClick:()=>t(!1),children:e.jsx(c,{children:r})},r))})]})},m={name:"Базовый список",render:()=>e.jsx(F,{}),parameters:{docs:{description:{story:"Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."}}}},u={name:"С заголовком",render:()=>e.jsx(R,{}),parameters:{docs:{description:{story:"Шапка с заголовком и кнопкой × появляется автоматически при передаче `title`."}}}},h={name:"С футером (фильтры)",render:()=>e.jsx(E,{}),parameters:{docs:{description:{story:"Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."}}}},x={name:"С группами опций",render:()=>e.jsx(H,{}),parameters:{docs:{description:{story:"`GroupLabel` используется как подпись-разделитель между группами внутри списка."}}}},y={name:"Со свайпом",render:()=>e.jsx(A,{}),parameters:{docs:{description:{story:"`collapsable` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."}}}};var C,S,g;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Базовый список",
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: {
        story: "Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."
      }
    }
  }
}`,...(g=(S=m.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var O,D,v;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "С заголовком",
  render: () => <WithTitleDemo />,
  parameters: {
    docs: {
      description: {
        story: "Шапка с заголовком и кнопкой × появляется автоматически при передаче \`title\`."
      }
    }
  }
}`,...(v=(D=u.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var W,k,G;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "С футером (фильтры)",
  render: () => <WithFooterDemo />,
  parameters: {
    docs: {
      description: {
        story: "Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."
      }
    }
  }
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var $,w,B;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "С группами опций",
  render: () => <WithGroupsDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`GroupLabel\` используется как подпись-разделитель между группами внутри списка."
      }
    }
  }
}`,...(B=(w=x.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var T,_,I;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Со свайпом",
  render: () => <CollapsableDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`collapsable\` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."
      }
    }
  }
}`,...(I=(_=y.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const ye=["Default","WithTitle","WithFooter","WithGroups","Collapsable"];export{y as Collapsable,m as Default,h as WithFooter,x as WithGroups,u as WithTitle,ye as __namedExportsOrder,xe as default};
