import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as M}from"./index-Dx_1l3Sb.js";import{I as k}from"./IconChevronRight-jbCZTIeY.js";import{I as q}from"./IconLeft-C3XBBr1z.js";import{y as s}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as d}from"./mixins-ib8c4tLP.js";import{G as C,E}from"./index-B66h-egn.js";/* empty css              */import{S as H}from"./style-Cn7-W3gz.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";const W=s.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  ${d};
`,f=s.li`
  display: flex;
  align-items: center;
  gap: 4px;
`,x=s(H)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${C};
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;
  &::after {
    display: none;
  }
  ${d};
`,R=s.span`
  color: ${E};
  cursor: default;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;
  ${d};
`,y=s.span`
  display: inline-flex;
  align-items: center;
  color: ${C};
`,r=M.memo(({crumbs:n,size:a="m",iconLeft:w})=>{const t=a==="s"?16:24;return e.jsx("nav",{"aria-label":"Хлебные крошки",children:e.jsxs(W,{children:[e.jsxs(f,{children:[w&&e.jsx(y,{children:e.jsx(q,{width:t,height:t})}),e.jsx(x,{href:"/",$size:a,children:"Главная"})]}),n.map((l,u)=>e.jsxs(f,{children:[e.jsx(y,{children:e.jsx(k,{width:t,height:t})}),u===n.length-1?e.jsx(R,{$size:a,"aria-current":"page",children:l.name}):e.jsx(x,{href:l.path,$size:a,children:l.name})]},u))]})})});r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{crumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:`Array<{
  name: string;
  path: string;
}>`},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"МТС/Breadcrumbs",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
**Breadcrumbs** — хлебные крошки. Показывают текущее местоположение пользователя в иерархии страниц и позволяют вернуться на предыдущие уровни.

### Размеры

Компонент представлен в двух размерах:

| Размер | Высота строки | Шрифт | Применение |
|---|---|---|---|
| \`s\` | 20px | 14px | Компактные интерфейсы, мобильные |
| \`m\` | 24px | 17px | Стандартный размер по умолчанию |

### Состояния

- **Default** — ссылки серые, текущая страница тёмная
- **Hover** — ссылка подчёркивается при наведении
- **Icon Left** — иконка стрелки слева от первого элемента, используется как кнопка «Назад»

### Структура

Первый элемент всегда «Главная» с ссылкой на \`/\`. Последний элемент — текущая страница, не является ссылкой. Все промежуточные — кликабельные ссылки.

\`\`\`tsx
<Breadcrumbs
  crumbs={[
    { name: "Категория", path: "/category" },
    { name: "Подкатегория", path: "/category/sub" },
    { name: "Товар", path: "/category/sub/product" },
  ]}
/>
\`\`\`
        `}}},argTypes:{crumbs:{description:"Массив крошек. Последний элемент отображается как текущая страница (не ссылка).",control:"object"},size:{description:"Размер компонента. `s` — 14px/20px, `m` — 17px/24px.",control:"radio",options:["s","m"]},iconLeft:{description:"Иконка стрелки влево перед первым элементом. Используется для навигации «Назад».",control:"boolean"}}},_=[{name:"Категория",path:"/category"},{name:"Подкатегория",path:"/category/sub"},{name:"Товар",path:"/category/sub/product"}],o={name:"Default",args:{crumbs:_,size:"m"}},i={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Два размера: **20 S** (14px) и **24 M** (17px)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:n==="s"?"20 S":"24 M"}),e.jsx(r,{size:n,crumbs:[{name:"Breadcrumb",path:"/"}]})]},n))})},c={name:"Icon Left",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m",iconLeft:!0},parameters:{docs:{description:{story:"Иконка `←` слева от первого элемента. Используется как визуальная подсказка для навигации назад, особенно на мобильных устройствах."}}}},m={name:"Все состояния",parameters:{controls:{disable:!0},docs:{description:{story:"Default — ссылки серые, текущая страница тёмная. Hover — подчёркивание при наведении. Icon Left — иконка-стрелка слева."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Default"}),e.jsx(r,{crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Icon Left"}),e.jsx(r,{iconLeft:!0,crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Многоуровневые"}),e.jsx(r,{crumbs:_})]})]})},p={name:"Один уровень",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m"},parameters:{docs:{description:{story:"Минимальный вариант — только «Главная» и текущая страница."}}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default",
  args: {
    crumbs: sampleCrumbs,
    size: "m"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,v,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Два размера: **20 S** (14px) и **24 M** (17px)."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      {(["s", "m"] as const).map(size => <div key={size} style={{
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
            {size === "s" ? "20 S" : "24 M"}
          </span>
          <Breadcrumbs size={size} crumbs={[{
        name: "Breadcrumb",
        path: "/"
      }]} />
        </div>)}
    </div>
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var z,D,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Icon Left",
  args: {
    crumbs: [{
      name: "Текущая страница",
      path: "/"
    }],
    size: "m",
    iconLeft: true
  },
  parameters: {
    docs: {
      description: {
        story: "Иконка \`←\` слева от первого элемента. Используется как визуальная подсказка для навигации назад, особенно на мобильных устройствах."
      }
    }
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,I,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Все состояния",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Default — ссылки серые, текущая страница тёмная. Hover — подчёркивание при наведении. Icon Left — иконка-стрелка слева."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div style={{
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
      }}>Default</span>
        <Breadcrumbs crumbs={[{
        name: "Breadcrumb",
        path: "/"
      }]} />
      </div>
      <div style={{
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
      }}>Icon Left</span>
        <Breadcrumbs iconLeft crumbs={[{
        name: "Breadcrumb",
        path: "/"
      }]} />
      </div>
      <div style={{
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
      }}>Многоуровневые</span>
        <Breadcrumbs crumbs={sampleCrumbs} />
      </div>
    </div>
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var T,A,$;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Один уровень",
  args: {
    crumbs: [{
      name: "Текущая страница",
      path: "/"
    }],
    size: "m"
  },
  parameters: {
    docs: {
      description: {
        story: "Минимальный вариант — только «Главная» и текущая страница."
      }
    }
  }
}`,...($=(A=p.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const ne=["Default","Sizes","WithIconLeft","AllStates","SingleLevel"];export{m as AllStates,o as Default,p as SingleLevel,i as Sizes,c as WithIconLeft,ne as __namedExportsOrder,ee as default};
