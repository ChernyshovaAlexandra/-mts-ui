import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as N}from"./index-Dx_1l3Sb.js";import{y as s,p as f}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as A}from"./mixins-ib8c4tLP.js";import{s as v,v as H}from"./index-B66h-egn.js";/* empty css              */import{b as O,I as U,a as Z}from"./IconBookmark-CFJE0vQI.js";import{I as G}from"./IconDate-BrvuUuHU.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";const J=e=>e===3?f`gap: 32px; padding: 0 16px;`:e===4?f`gap: 16px; padding: 0 8px;`:f`padding: 0 4px;`,K=s.div`
  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding-bottom: env(safe-area-inset-bottom);
  ${A};
`,Q=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(188, 195, 208, 0.5);
`,X=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({$count:e})=>J(e)};
`,Y=s.button`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 52px;
  min-width: 1px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({$active:e})=>e?v:H};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${v};
    outline-offset: -2px;
    border-radius: 4px;
  }
`,ee=s.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  font-weight: ${({$active:e})=>e?500:400};
  color: ${({$active:e})=>e?v:"#6E7782"};
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${A};
`,u=N.memo(({items:e,activeIndex:n=0,onChange:r,divider:L=!0,style:V,className:P})=>{const g=e.slice(0,5),W=g.length;return t.jsxs(K,{style:V,className:P,role:"tablist",children:[L&&t.jsx(Q,{}),t.jsx(X,{$count:W,children:g.map((x,a)=>t.jsxs(Y,{$active:a===n,onClick:()=>r==null?void 0:r(a),type:"button",role:"tab","aria-label":x.label,"aria-selected":a===n,children:[x.icon,t.jsx(ee,{$active:a===n,children:x.label})]},a))})]})});u.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabBarItem"}],raw:"TabBarItem[]"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q=({"aria-label":e,role:n,...r})=>t.jsxs("svg",{width:r.width||24,height:r.height||24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:e?n??"img":n??"presentation","aria-label":e,"aria-hidden":e?void 0:!0,focusable:"false",...r,children:[t.jsx("path",{d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992.008.085.012.171.012.257 0 .086-.004.172-.012.257-.008.379.137.751.43.992l1.003.827c.293.241.402.673.26 1.03l-1.298 2.247c-.232.402-.732.59-1.169.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a7.39 7.39 0 0 1-.22.127c-.331.183-.581.495-.645.87l-.213 1.281c-.09.541-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a7.39 7.39 0 0 1-.22-.127c-.325-.196-.72-.257-1.075-.124l-1.217.456c-.437.1-.937-.088-1.169-.49l-1.298-2.247c-.142-.357-.033-.789.26-1.03l1.003-.827c.293-.241.438-.613.43-.992a6.93 6.93 0 0 1 0-.514c.008-.379-.137-.751-.43-.992l-1.003-.827a1.125 1.125 0 0 1-.26-1.431l1.296-2.247a1.125 1.125 0 0 1 1.37-.49l1.217.456c.355.133.75.072 1.075-.124a7.39 7.39 0 0 1 .22-.127c.332-.184.582-.496.645-.87l.213-1.281Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});q.__docgenInfo={description:"",methods:[],displayName:"IconSettings"};const pe={title:"МТС/TabBar",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
**TabBar** — мобильная нижняя навигация. Используется вместо горизонтального \`Navigation\` на мобильных устройствах.

### Использование

Компонент **не управляет позиционированием** — это задача layout-шелла приложения:

\`\`\`tsx
// Фиксируем внизу на мобилке
<div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
  <TabBar items={items} activeIndex={active} onChange={setActive} />
</div>
\`\`\`

Чтобы safe area корректно работала на iPhone (Face ID), добавьте в \`<meta>\`:
\`\`\`html
<meta name="viewport" content="..., viewport-fit=cover" />
\`\`\`

### Количество вкладок

Поддерживается **3, 4 или 5** вкладок. Отступы и зазоры подбираются автоматически.

### Адаптивный паттерн

Рекомендуемый подход — скрывать \`Navigation\` и показывать \`TabBar\` через media query:

\`\`\`css
.tab-bar { display: none; }
@media (max-width: 768px) {
  .navigation { display: none; }
  .tab-bar { display: block; }
}
\`\`\`
        `}},backgrounds:{default:"light",values:[{name:"light",value:"#F2F3F7"},{name:"dark",value:"#1D2023"}]}},argTypes:{items:{description:"Массив вкладок. Каждая содержит `icon` (ReactNode) и `label` (строка). От 3 до 5 элементов.",control:"object"},activeIndex:{description:"Индекс активной вкладки (начиная с 0).",control:{type:"number",min:0,max:4}},onChange:{description:"Коллбек при смене вкладки. Получает индекс выбранной вкладки.",action:"tab changed"},divider:{description:"Горизонтальная линия-разделитель сверху компонента.",control:"boolean"},style:{control:!1},className:{control:!1}}},i=e=>t.jsx(e,{width:24,height:24,color:"currentColor"}),o=[{icon:i(O),label:"Главная"},{icon:i(q),label:"Каталог"},{icon:i(U),label:"Избранное"},{icon:i(Z),label:"Акции"},{icon:i(G),label:"Профиль"}],M=o.slice(0,4),z=o.slice(0,3),E=({children:e})=>t.jsxs("div",{style:{width:375,height:200,background:"#fff",borderRadius:16,overflow:"hidden",position:"relative",boxShadow:"0 4px 24px rgba(0,0,0,0.12)",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("div",{style:{flex:1,padding:16,color:"#969FA8",fontSize:13,fontFamily:"sans-serif"},children:"Контент страницы"}),e]}),b=e=>{const[n,r]=N.useState(e.activeIndex??0);return t.jsx(E,{children:t.jsx(u,{...e,activeIndex:n,onChange:r})})},l={name:"5 вкладок",render:b,args:{items:o,activeIndex:0,divider:!0}},c={name:"4 вкладки",render:b,args:{items:M,activeIndex:0,divider:!0}},d={name:"3 вкладки",render:b,args:{items:z,activeIndex:0,divider:!0}},m={name:"Без разделителя",render:b,args:{items:o,activeIndex:0,divider:!1},parameters:{docs:{description:{story:"Разделитель отключается пропом `divider={false}` — например, если фон контента уже визуально отделяет TabBar."}}}},p={name:"Все варианты",parameters:{controls:{disable:!0},docs:{description:{story:"Три варианта по количеству вкладок. Отступы и зазоры подбираются автоматически."}}},render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,alignItems:"flex-start"},children:[{label:"3 вкладки",items:z},{label:"4 вкладки",items:M},{label:"5 вкладок",items:o}].map(({label:e,items:n})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:e}),t.jsx(E,{children:t.jsx(u,{items:n,activeIndex:0,divider:!0})})]},e))})};var h,y,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "5 вкладок",
  render: ControlledRender,
  args: {
    items: items5,
    activeIndex: 0,
    divider: true
  }
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var I,j,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "4 вкладки",
  render: ControlledRender,
  args: {
    items: items4,
    activeIndex: 0,
    divider: true
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,S,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "3 вкладки",
  render: ControlledRender,
  args: {
    items: items3,
    activeIndex: 0,
    divider: true
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var B,C,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Без разделителя",
  render: ControlledRender,
  args: {
    items: items5,
    activeIndex: 0,
    divider: false
  },
  parameters: {
    docs: {
      description: {
        story: "Разделитель отключается пропом \`divider={false}\` — например, если фон контента уже визуально отделяет TabBar."
      }
    }
  }
}`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var D,R,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Все варианты",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Три варианта по количеству вкладок. Отступы и зазоры подбираются автоматически."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    alignItems: "flex-start"
  }}>
      {[{
      label: "3 вкладки",
      items: items3
    }, {
      label: "4 вкладки",
      items: items4
    }, {
      label: "5 вкладок",
      items: items5
    }].map(({
      label,
      items
    }) => <div key={label} style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
          <span style={{
        fontSize: 11,
        color: "#969FA8",
        fontFamily: "sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}>
            {label}
          </span>
          <MobileFrame>
            <TabBar items={items} activeIndex={0} divider />
          </MobileFrame>
        </div>)}
    </div>
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const ue=["FiveTabs","FourTabs","ThreeTabs","NoDivider","AllVariants"];export{p as AllVariants,l as FiveTabs,c as FourTabs,m as NoDivider,d as ThreeTabs,ue as __namedExportsOrder,pe as default};
