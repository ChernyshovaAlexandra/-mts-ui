import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-mIjS73Jk.js";import{B as c,O as l,a as p,G as C}from"./BottomSheet-CHDPAg9L.js";import{B as d}from"./Button-Cyu4nxtQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./styled-components.browser.esm-UUNjPRYl.js";import"./mixins-DAii6Zu4.js";/* empty css              */import"./index-CA_YInif.js";import"./proxy-CIa9PebR.js";import"./IconRestaurant-hU7exjLJ.js";import"./createIcon-CuvqBQrk.js";import"./Spinner-DQMllT-2.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";const Be={title:"МТС/BottomSheet",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{isOpen:{description:"Управляет видимостью панели.",control:"boolean"},onClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или кнопку ×."},title:{description:"Заголовок панели. При наличии отображается шапка с кнопкой закрытия ×.",control:"text"},onReset:{description:"Коллбек кнопки сброса. Если не передан — кнопка не отображается."},onApply:{description:"Коллбек кнопки применения. Если не передан — кнопка не отображается."},resetText:{description:"Текст кнопки сброса. По умолчанию: «Сбросить».",control:"text"},applyText:{description:"Текст кнопки применения. По умолчанию: «Применить».",control:"text"},fixedHeight:{description:"Фиксирует высоту панели на 85vh. По умолчанию панель растягивается по контенту (до 85vh).",control:"boolean"},collapsable:{description:"Включает жест свайпа вниз для закрытия. Рекомендуется включать на мобильных устройствах.",control:"boolean"},bottomOffset:{description:"Отступ от нижнего края экрана. Число трактуется как px, строка передаётся как CSS length.",control:"text"},children:{control:!1}}},u=["Москва","Санкт-Петербург","Новосибирск","Екатеринбург","Казань"],M=()=>{const[n,t]=o.useState(!1),[r,a]=o.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:r||"Выберите город"}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),children:u.map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{a(s),t(!1)},children:e.jsx(p,{children:s})},s))})]})},N=()=>{const[n,t]=o.useState(!1),[r,a]=o.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),title:"Выберите город",children:u.map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{a(s),t(!1)},children:e.jsx(p,{children:s})},s))})]})},q=()=>{const[n,t]=o.useState(!1),[r,a]=o.useState([]),s=i=>a(O=>O.includes(i)?O.filter(z=>z!==i):[...O,i]);return e.jsxs("div",{style:{padding:24},children:[e.jsxs(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:["Фильтры ",r.length>0&&`(${r.length})`]}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),title:"Город",onReset:()=>{a([]),t(!1)},onApply:()=>t(!1),children:u.map(i=>e.jsx(l,{type:"button",$selected:r.includes(i),onClick:()=>s(i),children:e.jsx(p,{children:i})},i))})]})},J=()=>{const[n,t]=o.useState(!1),[r,a]=o.useState("");return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsxs(c,{isOpen:n,onClose:()=>t(!1),title:"Выберите город",children:[e.jsx(C,{children:"Популярные"}),["Москва","Санкт-Петербург"].map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{a(s),t(!1)},children:e.jsx(p,{children:s})},s)),e.jsx(C,{children:"Остальные"}),["Новосибирск","Екатеринбург","Казань","Нижний Новгород"].map(s=>e.jsx(l,{type:"button",$selected:s===r,onClick:()=>{a(s),t(!1)},children:e.jsx(p,{children:s})},s))]})]})},K=()=>{const[n,t]=o.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть"}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),title:"Потяните вниз",collapsable:!0,children:u.map(r=>e.jsx(l,{type:"button",$selected:!1,onClick:()=>t(!1),children:e.jsx(p,{children:r})},r))})]})},Q=()=>{const[n,t]=o.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>t(!0),children:"Открыть над таббаром"}),e.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,height:88,zIndex:10002,display:"grid",placeItems:"center",background:"#fff",boxShadow:"0 -4px 16px rgba(0,0,0,0.08)",fontFamily:"MTS Compact, sans-serif"},children:"Фиксированный таббар"}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),title:"Панель над таббаром",bottomOffset:88,children:u.map(r=>e.jsx(l,{type:"button",$selected:!1,onClick:()=>t(!1),children:e.jsx(p,{children:r})},r))})]})},h={name:"Базовый список",render:()=>e.jsx(M,{}),parameters:{docs:{description:{story:"Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."}}}},f={name:"С заголовком",render:()=>e.jsx(N,{}),parameters:{docs:{description:{story:"Шапка с заголовком и кнопкой × появляется автоматически при передаче `title`."}}}},x={name:"С футером (фильтры)",render:()=>e.jsx(q,{}),parameters:{docs:{description:{story:"Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."}}}},y={name:"С группами опций",render:()=>e.jsx(J,{}),parameters:{docs:{description:{story:"`GroupLabel` используется как подпись-разделитель между группами внутри списка."}}}},b={name:"Со свайпом",render:()=>e.jsx(K,{}),parameters:{docs:{description:{story:"`collapsable` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."}}}},j={name:"С отступом снизу",render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"`bottomOffset` поднимает панель и оверлей над фиксированным нижним UI, например таббаром."}}}},m=()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"primary",onClick:()=>t(!0),children:"Открыть форму"}),e.jsx(c,{isOpen:n,onClose:()=>t(!1),title:"Твоя история",contentPadding:!0,children:e.jsx("p",{children:"Содержимое выровнено с заголовком и учитывает safe area."})})]})};m.__docgenInfo={description:"",methods:[],displayName:"PaddedContent"};var g,S,v;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Базовый список",
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: {
        story: "Простой список опций без заголовка и футера. Выбранный элемент подсвечивается."
      }
    }
  }
}`,...(v=(S=h.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,k,W;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "С заголовком",
  render: () => <WithTitleDemo />,
  parameters: {
    docs: {
      description: {
        story: "Шапка с заголовком и кнопкой × появляется автоматически при передаче \`title\`."
      }
    }
  }
}`,...(W=(k=f.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var B,I,_;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "С футером (фильтры)",
  render: () => <WithFooterDemo />,
  parameters: {
    docs: {
      description: {
        story: "Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции."
      }
    }
  }
}`,...(_=(I=x.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var w,G,$;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "С группами опций",
  render: () => <WithGroupsDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`GroupLabel\` используется как подпись-разделитель между группами внутри списка."
      }
    }
  }
}`,...($=(G=y.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var T,F,L;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Со свайпом",
  render: () => <CollapsableDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`collapsable\` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть."
      }
    }
  }
}`,...(L=(F=b.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var P,R,E;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "С отступом снизу",
  render: () => <WithBottomOffsetDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`bottomOffset\` поднимает панель и оверлей над фиксированным нижним UI, например таббаром."
      }
    }
  }
}`,...(E=(R=j.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,A,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
    <Button variant="primary" onClick={() => setOpen(true)}>Открыть форму</Button>
    <BottomSheet isOpen={open} onClose={() => setOpen(false)} title="Твоя история" contentPadding>
      <p>Содержимое выровнено с заголовком и учитывает safe area.</p>
    </BottomSheet>
  </>;
}`,...(U=(A=m.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const Ie=["Default","WithTitle","WithFooter","WithGroups","Collapsable","WithBottomOffset","PaddedContent"];export{b as Collapsable,h as Default,m as PaddedContent,j as WithBottomOffset,x as WithFooter,y as WithGroups,f as WithTitle,Ie as __namedExportsOrder,Be as default};
