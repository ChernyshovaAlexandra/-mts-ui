import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as Z}from"./index-G8LIXM5I.js";import{I as C}from"./IconChevronRight-B3ah8NhF.js";import{I as ee}from"./IconLeft-C3XBBr1z.js";import{y as s}from"./styled-components.browser.esm-BU5pfHrT.js";import{v}from"./mixins-CTkzXf3m.js";import{S,f as G,F as ne,i as se,Q as J}from"./index-CWlbk4Hf.js";/* empty css              */import{S as re}from"./style-B3cKJyYt.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CRC-JE94.js";const te=s.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  max-width: 100%;
  flex-wrap: nowrap;
  ${v};
`,y=s.li`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 0 1 auto;
  position: relative;

  &:last-child {
    flex: 0 1 auto;
  }

  &:hover > ul,
  &:focus-within > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
`,b=s(re)`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  text-decoration: none;
  color: ${({$textColor:n})=>n||S};
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    display: none;
  }

  ${v};
`,ae=s.span`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  color: ${({$textColor:n})=>n||J};
  cursor: default;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${v};
`,g=s.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({$textColor:n})=>n||S};
`,oe=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$size:n})=>n==="s"?"24px":"28px"};
  height: ${({$size:n})=>n==="s"?"20px":"24px"};
  padding: 0 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${({$textColor:n})=>n||S};
  cursor: pointer;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;

  &:hover,
  &:focus-visible {
    background: ${G};
    outline: none;
  }
`,ie=s.ul`
  position: absolute;
  top: 100%;
  left: 24px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 220px;
  max-width: min(320px, calc(100vw - 32px));
  max-height: 280px;
  padding: 10px 6px 6px;
  margin: 0;
  overflow-y: auto;
  list-style: none;
  border-radius: ${ne};
  background: ${se};
  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 12px 20px 0 rgba(0, 0, 0, 0.14);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  pointer-events: none;
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s ease;
`,ce=s.li`
  min-width: 0;
`,pe=s(b)`
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${J};

  &:hover,
  &:focus-visible {
    background: ${G};
    opacity: 1;
    outline: none;
  }
`,a=Z.memo(({crumbs:n,size:o="m",iconLeft:K,textColor:r})=>{const i=o==="s"?16:24,c=[{name:"Главная",path:"/"},...n],p=c.length>3,w=p?c.slice(-2):c,P=p?c.slice(1,-2):[];return e.jsx("nav",{"aria-label":"Хлебные крошки",children:e.jsxs(te,{children:[e.jsxs(y,{children:[K&&e.jsx(g,{$textColor:r,children:e.jsx(ee,{width:i,height:i})}),e.jsx(b,{href:c[0].path,$size:o,$textColor:r,children:c[0].name})]}),p&&e.jsxs(y,{children:[e.jsx(g,{$textColor:r,children:e.jsx(C,{width:i,height:i})}),e.jsx(oe,{type:"button",$size:o,$textColor:r,"aria-haspopup":"menu","aria-label":"Показать скрытые страницы",children:"..."}),e.jsx(ie,{role:"menu",children:P.map(t=>e.jsx(ce,{role:"none",children:e.jsx(pe,{href:t.path,role:"menuitem",$size:o,$textColor:r,children:t.name})},t.path))})]}),(p?w:w.slice(1)).map((t,$,U)=>{const X=$===U.length-1;return e.jsxs(y,{children:[e.jsx(g,{$textColor:r,children:e.jsx(C,{width:i,height:i})}),X?e.jsx(ae,{$size:o,$textColor:r,"aria-current":"page",children:t.name}):e.jsx(b,{href:t.path,$size:o,$textColor:r,children:t.name})]},`${t.path}-${$}`)})]})})});a.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{crumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:"BreadcrumbItem[]"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""}}};const je={title:"МТС/Breadcrumbs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
- **Collapsed** — длинная цепочка сокращается до первой и последних двух крошек, скрытые страницы доступны в выпадающем списке по наведению на \`...\`

### Структура

Первый элемент всегда «Главная» с ссылкой на \`/\`. Последний элемент — текущая страница, не является ссылкой. Все промежуточные — кликабельные ссылки.

\`\`\`tsx
<Breadcrumbs
  textColor="#FF0032"
  crumbs={[
    { name: "Категория", path: "/category" },
    { name: "Подкатегория", path: "/category/sub" },
    { name: "Товар", path: "/category/sub/product" },
  ]}
/>
\`\`\`
        `}}},argTypes:{crumbs:{description:"Массив крошек. Последний элемент отображается как текущая страница (не ссылка).",control:"object"},size:{description:"Размер компонента. `s` — 14px/20px, `m` — 17px/24px.",control:"radio",options:["s","m"]},iconLeft:{description:"Иконка стрелки влево перед первым элементом. Используется для навигации «Назад».",control:"boolean"},textColor:{description:"Цвет текста, ссылок, разделителей и скрытых крошек. Принимает любое CSS-значение цвета.",control:"color"}}},j=[{name:"Категория",path:"/category"},{name:"Подкатегория",path:"/category/sub"},{name:"Товар",path:"/category/sub/product"}],l={name:"Default",args:{crumbs:j,size:"m"}},m={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Два размера: **20 S** (14px) и **24 M** (17px)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:n==="s"?"20 S":"24 M"}),e.jsx(a,{size:n,crumbs:[{name:"Breadcrumb",path:"/"}]})]},n))})},d={name:"Icon Left",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m",iconLeft:!0},parameters:{docs:{description:{story:"Иконка `←` слева от первого элемента. Используется как визуальная подсказка для навигации назад, особенно на мобильных устройствах."}}}},u={name:"Кастомный цвет текста",args:{crumbs:j,size:"m",textColor:"#FF0032"},parameters:{docs:{description:{story:"Проп `textColor` перекрывает цвет всех текстовых элементов хлебных крошек."}}}},x={name:"Все состояния",parameters:{controls:{disable:!0},docs:{description:{story:"Default — ссылки серые, текущая страница тёмная. Hover — подчёркивание при наведении. Icon Left — иконка-стрелка слева."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Default"}),e.jsx(a,{crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Icon Left"}),e.jsx(a,{iconLeft:!0,crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Многоуровневые"}),e.jsx(a,{crumbs:j})]})]})},f={name:"Один уровень",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m"},parameters:{docs:{description:{story:"Минимальный вариант — только «Главная» и текущая страница."}}}},h={name:"Сокращение длинной цепочки",parameters:{controls:{disable:!0},docs:{description:{story:"Если цепочка не помещается, отображаются первая и последние две крошки. Скрытые страницы открываются в выпадающем списке при наведении на `...`."}}},render:()=>e.jsx("div",{style:{width:320},children:e.jsx(a,{size:"s",crumbs:[{name:"Очень длинная категория товаров",path:"/category"},{name:"Раздел с длинным названием",path:"/category/section"},{name:"Подраздел каталога",path:"/category/section/subsection"},{name:"Карточки товаров",path:"/category/section/subsection/products"},{name:"Текущая страница с длинным названием",path:"/category/section/subsection/products/page"}]})})};var z,L,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Default",
  args: {
    crumbs: sampleCrumbs,
    size: "m"
  }
}`,...(F=(L=l.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var D,T,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var B,A,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var k,M,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Кастомный цвет текста",
  args: {
    crumbs: sampleCrumbs,
    size: "m",
    textColor: "#FF0032"
  },
  parameters: {
    docs: {
      description: {
        story: "Проп \`textColor\` перекрывает цвет всех текстовых элементов хлебных крошек."
      }
    }
  }
}`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var q,E,W;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(E=x.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var R,Y,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var O,Q,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Сокращение длинной цепочки",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Если цепочка не помещается, отображаются первая и последние две крошки. Скрытые страницы открываются в выпадающем списке при наведении на \`...\`."
      }
    }
  },
  render: () => <div style={{
    width: 320
  }}>
      <Breadcrumbs size="s" crumbs={[{
      name: "Очень длинная категория товаров",
      path: "/category"
    }, {
      name: "Раздел с длинным названием",
      path: "/category/section"
    }, {
      name: "Подраздел каталога",
      path: "/category/section/subsection"
    }, {
      name: "Карточки товаров",
      path: "/category/section/subsection/products"
    }, {
      name: "Текущая страница с длинным названием",
      path: "/category/section/subsection/products/page"
    }]} />
    </div>
}`,...(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const we=["Default","Sizes","WithIconLeft","CustomTextColor","AllStates","SingleLevel","MobileLongLabels"];export{x as AllStates,u as CustomTextColor,l as Default,h as MobileLongLabels,f as SingleLevel,m as Sizes,d as WithIconLeft,we as __namedExportsOrder,je as default};
