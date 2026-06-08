import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,R as Fe}from"./index-G8LIXM5I.js";import{S as Oe}from"./Separator-jZRkyz9R.js";import{I as We}from"./IconChevronDown-DMxy4cGU.js";import{H as He}from"./Header-2Snyan4B.js";import{T as x}from"./Text-2zki5lTF.js";import{y as m,p as o}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as Be}from"./mixins-CTkzXf3m.js";import{h as Ve,G as Le,m as Qe,Q as E,S as Ee}from"./index-CWlbk4Hf.js";import{A as Ue,m as Ge}from"./index-BrN7QjLr.js";import{I as Me}from"./IconStar-DBYALbaW.js";import{I as Ke}from"./IconHeart-CQgzpcxH.js";import{I as Je}from"./IconQuestion-BrC8d57T.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CRC-JE94.js";/* empty css              */import"./style-afSt-2-G.js";const Xe={s:o`
    min-height: 44px;
    padding: 12px 16px;
    gap: 12px;
  `,m:o`
    min-height: 52px;
    padding: 16px 20px;
    gap: 12px;
  `,l:o`
    min-height: 64px;
    padding: 20px 24px;
    gap: 16px;
  `},Ye={s:o`
    padding: 0 16px 16px;
  `,m:o`
    padding: 0 20px 20px;
  `,l:o`
    padding: 0 24px 24px;
  `},F={s:16,m:20,l:24},Ze=m.div`
  width: 100%;
  box-sizing: border-box;
  ${({$variant:t})=>t==="secondary"?o`
          background: ${Ve};
          border-radius: ${Le};
          overflow: hidden;
        `:o`
          background: transparent;
          border-radius: 0;
        `}
  ${({$disabled:t})=>t&&o`
      opacity: 0.5;
    `}
  ${Be};
`,et=m.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  box-sizing: border-box;
  ${({$size:t})=>Xe[t]};

  &:focus-visible {
    outline: 2px solid ${Qe};
    outline-offset: -2px;
  }
`,tt=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({$size:t})=>o`
    min-width: ${F[t]}px;
    min-height: ${F[t]}px;
  `};
`,nt=m.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
  gap: 2px;
  color: ${E};
`,rt=m.div`
  color: ${Ee};
`,it=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${E};

  svg {
    width: ${({$size:t})=>F[t]}px;
    height: ${({$size:t})=>F[t]}px;
    transition: transform 0.3s ease-in-out;
    transform: ${({$isOpen:t})=>t?"rotate(180deg)":"rotate(0deg)"};
  }
`,st=m.div`
  ${({$size:t})=>Ye[t]};
  color: ${E};
`,at=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  ${Be};
`,ot=m.div`
  ${({$variant:t})=>t==="secondary"?o`
          height: 8px;
        `:o`
          height: 0;
        `}
`,lt={primary:{s:"P4-Medium-Comp",m:"P3-Medium-Comp",l:"P3-Medium-Comp"},secondary:{s:"P4-Regular-Comp",m:"P3-Regular-Comp",l:"P3-Regular-Comp"},tertiary:{s:"P4-Medium-Comp",m:"P4-Medium-Comp",l:"P4-Medium-Comp"}},dt=(t,r,l)=>r==="primary"&&l==="l"?e.jsx(He,{variant:"H4-Comp",as:"p",style:{margin:0},children:t}):e.jsx(x,{variant:lt[r][l],as:"span",children:t}),U=u.memo(({data:t,variant:r,size:l,titleType:f,isOpen:h,onToggle:T})=>{const{id:O,title:W,description:b,content:j,leftSlot:I,disabled:d=!1}=t,H=t.variant??r,p=t.size??l,V=t.titleType??f,S=u.useId(),v=`accordion-header-${S}`,w=`accordion-panel-${S}`,L=()=>{d||T(O)};return e.jsxs(Ze,{$variant:H,$disabled:d,children:[e.jsxs(et,{type:"button",id:v,"aria-expanded":h,"aria-controls":w,"aria-disabled":d||void 0,disabled:d,$size:p,$isOpen:h,$disabled:d,onClick:L,children:[I!==void 0&&e.jsx(tt,{$size:p,children:I}),e.jsxs(nt,{children:[dt(W,V,p),b!=null&&e.jsx(rt,{children:e.jsx(x,{variant:"P4-Regular-Comp",as:"span",children:b})})]}),e.jsx(it,{$size:p,$isOpen:h,children:e.jsx(We,{"aria-hidden":!0})})]}),e.jsx(Ue,{initial:!1,children:h&&e.jsx(Ge.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},style:{overflow:"hidden"},children:e.jsx(st,{id:w,role:"region","aria-labelledby":v,$size:p,children:typeof j=="string"?e.jsx(x,{variant:"P3-Regular-Comp",children:j}):j})},"content")})]})});U.displayName="AccordionItem";U.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{data:{required:!0,tsType:{name:"AccordionItemData"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:""},titleType:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:""}}};const g=t=>String(t),n=({items:t,openIds:r,defaultOpenIds:l,onOpenChange:f,multiple:h=!1,variant:T="primary",size:O="m",titleType:W="primary",showDivider:b,className:j,style:I})=>{const d=r!==void 0,H=()=>{if(l&&l.length>0)return new Set(l.map(g));const a=t.filter(i=>i.defaultOpen).map(i=>g(i.id));return new Set(a)},[p,V]=u.useState(H),S=u.useRef(!0);S.current&&(S.current=!1);const v=u.useMemo(()=>d?new Set(r.map(g)):p,[d,r,p]),w=u.useCallback(a=>{d||V(a),f==null||f(t.map(i=>i.id).filter(i=>a.has(g(i))))},[d,f,t]),L=u.useCallback(a=>{const i=g(a),c=new Set(v);c.has(i)?c.delete(i):(h||c.clear(),c.add(i)),w(c)},[v,h,w]);return e.jsx(at,{className:j,style:I,children:t.map((a,i)=>{const c=a.variant??T,G=i===t.length-1,De=c==="primary",Ne=a.showDivider??b??De,_e=v.has(g(a.id));return e.jsxs(Fe.Fragment,{children:[e.jsx(U,{data:a,variant:T,size:O,titleType:W,isOpen:_e,onToggle:L}),!G&&c==="secondary"&&e.jsx(ot,{$variant:"secondary"}),!G&&c==="primary"&&Ne&&e.jsx(Oe,{margin:"0"})]},a.id)})})};n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemData"}],raw:"AccordionItemData[]"},description:""},openIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},defaultOpenIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"ids"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},titleType:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const kt={title:"МТС/Accordion",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Accordion** — раскрывающийся список (collapsible). Каждый элемент имеет\nзаголовок и опциональный левый слот, при клике плавно открывает свой контент.\n\nПоддерживает **разные стили внутри одного списка** через per-item props: можно\nсмешивать `primary` и `secondary` элементы, разные размеры, типы заголовка,\nиконки и описания.\n\n---\n\n### Варианты (`variant`)\n\n| Variant | Внешний вид | Когда |\n|---|---|---|\n| `primary` | Items сливаются в общий список без фона, между ними `Separator` | Меню, длинные списки настроек |\n| `secondary` | Каждый item — карточка с фоном (`mts_bg_lower`), 16px radius, отступ 8px между items | FAQ, важные секции |\n\n### Размеры (`size`)\n\n| Size | Высота header | Padding | Иконка |\n|---|---|---|---|\n| `s` | 44px | 12/16 | 16px |\n| `m` | 52px | 16/20 | 20px |\n| `l` | 64px | 20/24 | 24px |\n\n### Типы заголовка (`titleType`)\n\n| TitleType | Типографика (size m/l) |\n|---|---|\n| `primary` | `P3-Medium-Comp` / `H4-Comp` |\n| `secondary` | `P3-Regular-Comp` |\n| `tertiary` | `P4-Medium-Comp` |\n\n### Поведение\n\n- `multiple` (default `false`): несколько items могут быть открыты одновременно.\n- **Controlled** через `openIds` + `onOpenChange`.\n- **Uncontrolled**: `defaultOpenIds` или `defaultOpen` на отдельных items.\n\n### Per-item override\n\nЛюбой item может переопределить `variant`, `size`, `titleType`, `showDivider`,\n`disabled` независимо от значений на родителе. Так можно один primary-card вставить\nв общий secondary-список и наоборот.\n\n### Левый слот\n\nЛюбая ReactNode через `leftSlot` — иконка из либы, цифра, текст или композиция.\nРазмер слота управляется автоматически (16/20/24px по размеру). Для нумерованных\nсписков удобно передавать число в кружке (см. стори `WithNumbers`).\n\n### Accessibility\n\n`aria-expanded` / `aria-controls` / `aria-labelledby` / `role="region"` на контенте.\nDisabled-items имеют `aria-disabled` и блокируют клик.\n'}}},argTypes:{items:{control:!1},openIds:{control:!1},defaultOpenIds:{control:!1},onOpenChange:{control:!1},multiple:{description:"Разрешить одновременно открыть несколько items.",control:"boolean"},variant:{description:"Глобальный стиль (можно переопределить per-item).",control:"radio",options:["primary","secondary"]},size:{description:"Размер header (переопределяется per-item).",control:"radio",options:["s","m","l"]},titleType:{description:"Типографика заголовка (переопределяется per-item).",control:"radio",options:["primary","secondary","tertiary"]},showDivider:{description:"Включить разделитель между items. По умолчанию для secondary — true, для primary — отступ карточками.",control:"boolean"},style:{control:!1},className:{control:!1}}},s=[{id:"what",title:"Что такое МТС?",content:"ПАО «МТС» — российская телекоммуникационная компания, оказывающая услуги мобильной связи, фиксированной телефонии, доступа в интернет и цифрового телевидения."},{id:"where",title:"Где можно подключить тариф?",content:"В любом салоне МТС, на сайте mts.ru или в мобильном приложении."},{id:"support",title:"Как связаться с поддержкой?",content:"По номеру 0890 с мобильного, либо через чат в приложении."}],y=({title:t,children:r})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8},children:t}),r]}),C={args:{items:s,variant:"primary",size:"m",titleType:"primary",multiple:!1},render:t=>e.jsx("div",{style:{width:600},children:e.jsx(n,{...t})})},z={name:"Primary — общий список",parameters:{controls:{disable:!0},docs:{description:{story:"Items без фона, разделены `Separator`. Подходит для меню и длинных списков."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:s,variant:"primary"})})},A={name:"Secondary — карточки",parameters:{controls:{disable:!0},docs:{description:{story:"Каждый item — отдельная карточка с фоном. Подходит для FAQ и важных секций."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:s,variant:"secondary"})})},k={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Три размера header'а: 44 / 52 / 64."}}},render:()=>e.jsxs("div",{style:{width:600},children:[e.jsx(y,{title:"size = s (44)",children:e.jsx(n,{items:s.slice(0,1),size:"s"})}),e.jsx(y,{title:"size = m (52)",children:e.jsx(n,{items:s.slice(0,1),size:"m"})}),e.jsx(y,{title:"size = l (64)",children:e.jsx(n,{items:s.slice(0,1),size:"l"})})]})},P={name:"Типы заголовка",parameters:{controls:{disable:!0},docs:{description:{story:"`primary` — Medium/H4, `secondary` — Regular, `tertiary` — компактный Medium для вторичных секций."}}},render:()=>e.jsxs("div",{style:{width:600},children:[e.jsx(y,{title:"titleType = primary",children:e.jsx(n,{items:s.slice(0,1),titleType:"primary"})}),e.jsx(y,{title:"titleType = secondary",children:e.jsx(n,{items:s.slice(0,1),titleType:"secondary"})}),e.jsx(y,{title:"titleType = tertiary",children:e.jsx(n,{items:s.slice(0,1),titleType:"tertiary"})})]})},R={name:"С описанием",parameters:{controls:{disable:!0},docs:{description:{story:"Опциональный subtitle под title — для подзаголовков/категорий."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:[{id:"1",title:"Тарифные планы",description:"Базовые и Premium для частных лиц",content:"Список тарифов с разбивкой по аудиториям и услугам."},{id:"2",title:"Дополнительные услуги",description:"Опции, которые можно подключить отдельно",content:"Голосовая почта, переадресация, антиспам и др."}],size:"l"})})},$={name:"С иконками",parameters:{controls:{disable:!0},docs:{description:{story:"`leftSlot` принимает любую ReactNode — например, иконку из либы."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:[{id:"fav",title:"Избранное",leftSlot:e.jsx(Me,{width:20,height:20}),content:"Сохранённые тарифы и услуги."},{id:"favs2",title:"Любимые номера",leftSlot:e.jsx(Ke,{width:20,height:20}),content:"Близкие, которым звонишь чаще всего."},{id:"help",title:"Частые вопросы",leftSlot:e.jsx(Je,{size:24}),content:"Ответы на популярные вопросы пользователей."}]})})},Q=({value:t})=>e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#FFFFFF",display:"grid",placeItems:"center",fontFamily:"MTS Compact, sans-serif",fontWeight:700,fontSize:17,lineHeight:"24px",color:"#1D2023",flexShrink:0},children:t}),q={name:"С номерами",parameters:{controls:{disable:!0},docs:{description:{story:"Numbered List: в `leftSlot` отдаётся числовой кружок. Подходит для пошаговых инструкций."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:[{id:1,title:"Шаг первый",leftSlot:e.jsx(Q,{value:1}),content:"Откройте приложение МТС."},{id:2,title:"Шаг второй",leftSlot:e.jsx(Q,{value:2}),content:"Перейдите в раздел «Профиль»."},{id:3,title:"Шаг третий",leftSlot:e.jsx(Q,{value:3}),content:"Нажмите «Подключить услугу»."}]})})},B={name:"Смешанные стили",parameters:{controls:{disable:!0},docs:{description:{story:"Ключевая фича: в одном Accordion можно смешивать items с разными `variant`, `size`, `titleType`, иконками. Используйте per-item props, чтобы выделить отдельный элемент."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{variant:"primary",items:[{id:"1",title:"Обычный пункт",content:"Базовый primary item без выделения."},{id:"2",variant:"secondary",title:"Выделенный блок",description:"Этот блок с фоном — secondary-вариант (карточка)",leftSlot:e.jsx(Me,{width:20,height:20}),content:"Specifications and additional notes about this important block.",titleType:"primary"},{id:"3",title:"Обычный пункт 2",content:"И ещё один primary item."},{id:"4",title:"Маленький вторичный",size:"s",titleType:"tertiary",content:"Item с явно меньшим размером и tertiary типографикой."}]})})},ct=()=>{const[t,r]=u.useState(["where"]);return e.jsxs("div",{style:{width:600},children:[e.jsxs("div",{style:{marginBottom:12,display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>r(s.map(l=>l.id)),children:"Открыть всё"}),e.jsx("button",{onClick:()=>r([]),children:"Закрыть всё"}),e.jsxs("span",{style:{alignSelf:"center",fontFamily:"sans-serif",fontSize:12,color:"#626C77"},children:["openIds: [",t.join(", "),"]"]})]}),e.jsx(n,{items:s,openIds:t,onOpenChange:r,multiple:!0})]})},M={name:"Controlled",parameters:{controls:{disable:!0},docs:{description:{story:"Состояние управляется снаружи: пропсы `openIds` + `onOpenChange`. Подходит для интеграции с роутером, store, синхронизации с URL."}}},render:()=>e.jsx(ct,{})},D={name:"Single / Multiple",parameters:{controls:{disable:!0},docs:{description:{story:"По умолчанию открыт один item. `multiple={true}` снимает ограничение."}}},render:()=>e.jsxs("div",{style:{width:600},children:[e.jsx(y,{title:"single (default)",children:e.jsx(n,{items:s})}),e.jsx(y,{title:"multiple",children:e.jsx(n,{items:s,multiple:!0})})]})},N={name:"Disabled items",parameters:{controls:{disable:!0},docs:{description:{story:"Отдельный item можно отключить через `disabled: true`. Клик игнорируется, элемент приглушён."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:[{id:1,title:"Доступный пункт",content:"Обычный контент."},{id:2,title:"Заблокированный пункт",disabled:!0,content:"Этот контент не откроется."},{id:3,title:"Ещё один доступный",content:"И ещё немного контента."}]})})},_={name:"Rich content",parameters:{controls:{disable:!0},docs:{description:{story:"Поле `content` принимает любой ReactNode — не только текст."}}},render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{items:[{id:"rich",title:"Сложный контент",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(x,{variant:"P3-Regular-Comp",children:"Можно вложить любые компоненты:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:20},children:[e.jsx("li",{children:e.jsx(x,{variant:"P3-Regular-Comp",children:"Списки"})}),e.jsx("li",{children:e.jsx(x,{variant:"P3-Regular-Comp",children:"Кнопки, ссылки, формы"})}),e.jsx("li",{children:e.jsx(x,{variant:"P3-Regular-Comp",children:"Другие компоненты из либы"})})]})]}),defaultOpen:!0}]})})};var K,J,X;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    variant: "primary",
    size: "m",
    titleType: "primary",
    multiple: false
  },
  render: args => <div style={{
    width: 600
  }}>
      <Accordion {...args} />
    </div>
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Primary — общий список",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Items без фона, разделены \`Separator\`. Подходит для меню и длинных списков."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={faqItems} variant="primary" />
    </div>
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Secondary — карточки",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Каждый item — отдельная карточка с фоном. Подходит для FAQ и важных секций."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={faqItems} variant="secondary" />
    </div>
}`,...(re=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,se,ae;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Три размера header'а: 44 / 52 / 64."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Block title="size = s (44)">
        <Accordion items={faqItems.slice(0, 1)} size="s" />
      </Block>
      <Block title="size = m (52)">
        <Accordion items={faqItems.slice(0, 1)} size="m" />
      </Block>
      <Block title="size = l (64)">
        <Accordion items={faqItems.slice(0, 1)} size="l" />
      </Block>
    </div>
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,le,de;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Типы заголовка",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "\`primary\` — Medium/H4, \`secondary\` — Regular, \`tertiary\` — компактный Medium для вторичных секций."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Block title="titleType = primary">
        <Accordion items={faqItems.slice(0, 1)} titleType="primary" />
      </Block>
      <Block title="titleType = secondary">
        <Accordion items={faqItems.slice(0, 1)} titleType="secondary" />
      </Block>
      <Block title="titleType = tertiary">
        <Accordion items={faqItems.slice(0, 1)} titleType="tertiary" />
      </Block>
    </div>
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "С описанием",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Опциональный subtitle под title — для подзаголовков/категорий."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={[{
      id: "1",
      title: "Тарифные планы",
      description: "Базовые и Premium для частных лиц",
      content: "Список тарифов с разбивкой по аудиториям и услугам."
    }, {
      id: "2",
      title: "Дополнительные услуги",
      description: "Опции, которые можно подключить отдельно",
      content: "Голосовая почта, переадресация, антиспам и др."
    }]} size="l" />
    </div>
}`,...(pe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ye,he;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "С иконками",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "\`leftSlot\` принимает любую ReactNode — например, иконку из либы."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={[{
      id: "fav",
      title: "Избранное",
      leftSlot: <IconStar width={20} height={20} />,
      content: "Сохранённые тарифы и услуги."
    }, {
      id: "favs2",
      title: "Любимые номера",
      leftSlot: <IconHeart width={20} height={20} />,
      content: "Близкие, которым звонишь чаще всего."
    }, {
      id: "help",
      title: "Частые вопросы",
      leftSlot: <IconQuestion size={24} />,
      content: "Ответы на популярные вопросы пользователей."
    }]} />
    </div>
}`,...(he=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,fe,ve;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "С номерами",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Numbered List: в \`leftSlot\` отдаётся числовой кружок. Подходит для пошаговых инструкций."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={[{
      id: 1,
      title: "Шаг первый",
      leftSlot: <NumberCircle value={1} />,
      content: "Откройте приложение МТС."
    }, {
      id: 2,
      title: "Шаг второй",
      leftSlot: <NumberCircle value={2} />,
      content: "Перейдите в раздел «Профиль»."
    }, {
      id: 3,
      title: "Шаг третий",
      leftSlot: <NumberCircle value={3} />,
      content: "Нажмите «Подключить услугу»."
    }]} />
    </div>
}`,...(ve=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ge,be,je;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Смешанные стили",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Ключевая фича: в одном Accordion можно смешивать items с разными \`variant\`, \`size\`, \`titleType\`, иконками. Используйте per-item props, чтобы выделить отдельный элемент."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion variant="primary" items={[{
      id: "1",
      title: "Обычный пункт",
      content: "Базовый primary item без выделения."
    }, {
      id: "2",
      variant: "secondary",
      title: "Выделенный блок",
      description: "Этот блок с фоном — secondary-вариант (карточка)",
      leftSlot: <IconStar width={20} height={20} />,
      content: "Specifications and additional notes about this important block.",
      titleType: "primary"
    }, {
      id: "3",
      title: "Обычный пункт 2",
      content: "И ещё один primary item."
    }, {
      id: "4",
      title: "Маленький вторичный",
      size: "s",
      titleType: "tertiary",
      content: "Item с явно меньшим размером и tertiary типографикой."
    }]} />
    </div>
}`,...(je=(be=B.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Se,we,Te;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "Controlled",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Состояние управляется снаружи: пропсы \`openIds\` + \`onOpenChange\`. Подходит для интеграции с роутером, store, синхронизации с URL."
      }
    }
  },
  render: () => <ControlledExample />
}`,...(Te=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ie,Ce,ze;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Single / Multiple",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "По умолчанию открыт один item. \`multiple={true}\` снимает ограничение."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Block title="single (default)">
        <Accordion items={faqItems} />
      </Block>
      <Block title="multiple">
        <Accordion items={faqItems} multiple />
      </Block>
    </div>
}`,...(ze=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Ae,ke,Pe;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Disabled items",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Отдельный item можно отключить через \`disabled: true\`. Клик игнорируется, элемент приглушён."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={[{
      id: 1,
      title: "Доступный пункт",
      content: "Обычный контент."
    }, {
      id: 2,
      title: "Заблокированный пункт",
      disabled: true,
      content: "Этот контент не откроется."
    }, {
      id: 3,
      title: "Ещё один доступный",
      content: "И ещё немного контента."
    }]} />
    </div>
}`,...(Pe=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Re,$e,qe;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "Rich content",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Поле \`content\` принимает любой ReactNode — не только текст."
      }
    }
  },
  render: () => <div style={{
    width: 600
  }}>
      <Accordion items={[{
      id: "rich",
      title: "Сложный контент",
      content: <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
                <Text variant="P3-Regular-Comp">Можно вложить любые компоненты:</Text>
                <ul style={{
          margin: 0,
          paddingLeft: 20
        }}>
                  <li><Text variant="P3-Regular-Comp">Списки</Text></li>
                  <li><Text variant="P3-Regular-Comp">Кнопки, ссылки, формы</Text></li>
                  <li><Text variant="P3-Regular-Comp">Другие компоненты из либы</Text></li>
                </ul>
              </div>,
      defaultOpen: true
    }]} />
    </div>
}`,...(qe=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};const Pt=["Playground","PrimarySimple","Secondary","Sizes","TitleTypes","WithDescription","WithIcons","WithNumbers","MixedItems","Controlled","SingleVsMultiple","DisabledItems","RichContent"];export{M as Controlled,N as DisabledItems,B as MixedItems,C as Playground,z as PrimarySimple,_ as RichContent,A as Secondary,D as SingleVsMultiple,k as Sizes,P as TitleTypes,R as WithDescription,$ as WithIcons,q as WithNumbers,Pt as __namedExportsOrder,kt as default};
