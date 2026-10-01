import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ee}from"./index-mIjS73Jk.js";import{I as C}from"./IconChevronRight-CervqCqb.js";import{I as ne}from"./IconLeft-DbBqVjkY.js";import{g as r}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as S}from"./mixins-DAii6Zu4.js";import{d as j,n as K,t as se,I as re,c as P}from"./index-CA_YInif.js";/* empty css              */import{L as te}from"./Link-I2za92aw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CuvqBQrk.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./IconOut-D6k_3EUx.js";const ae=r.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  max-width: 100%;
  flex-wrap: nowrap;
  ${S};
`,y=r.li`
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
`,v=r(te)`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  text-decoration: none;
  color: ${({$textColor:n})=>n||j};
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

  ${S};
`,oe=r.span`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  color: ${({$textColor:n})=>n||P};
  cursor: default;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${S};
`,b=r.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({$textColor:n})=>n||j};
`,ie=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$size:n})=>n==="s"?"24px":"28px"};
  height: ${({$size:n})=>n==="s"?"20px":"24px"};
  padding: 0 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${({$textColor:n})=>n||j};
  cursor: pointer;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({$size:n})=>n==="s"?"14px":"17px"};
  line-height: ${({$size:n})=>n==="s"?"20px":"24px"};
  font-weight: 400;

  &:hover,
  &:focus-visible {
    background: ${K};
    outline: none;
  }
`,ce=r.ul`
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
  border-radius: ${se};
  background: ${re};
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
`,le=r.li`
  min-width: 0;
`,pe=r(v)`
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${P};

  &:hover,
  &:focus-visible {
    background: ${K};
    opacity: 1;
    outline: none;
  }
`,o=ee.memo(({crumbs:n,size:i="m",iconLeft:Q,textColor:t,useRouter:g=!1})=>{const c=i==="s"?16:24,a=[{name:"Главная",path:"/"},...n],l=a.length>3,$=l?a.slice(-2):a,U=l?a.slice(1,-2):[];return e.jsx("nav",{"aria-label":"Хлебные крошки",children:e.jsxs(ae,{children:[e.jsxs(y,{children:[Q&&e.jsx(b,{$textColor:t,children:e.jsx(ne,{width:c,height:c})}),e.jsx(v,{...g?{to:a[0].path}:{url:a[0].path},$size:i,$textColor:t,children:a[0].name})]}),l&&e.jsxs(y,{children:[e.jsx(b,{$textColor:t,children:e.jsx(C,{width:c,height:c})}),e.jsx(ie,{type:"button",$size:i,$textColor:t,"aria-haspopup":"menu","aria-label":"Показать скрытые страницы",children:"..."}),e.jsx(ce,{role:"menu",children:U.map(s=>e.jsx(le,{role:"none",children:e.jsx(pe,{...g?{to:s.path}:{url:s.path},role:"menuitem",$size:i,$textColor:t,children:s.name})},s.path))})]}),(l?$:$.slice(1)).map((s,z,X)=>{const Z=z===X.length-1;return e.jsxs(y,{children:[e.jsx(b,{$textColor:t,children:e.jsx(C,{width:c,height:c})}),Z?e.jsx(oe,{$size:i,$textColor:t,"aria-current":"page",children:s.name}):e.jsx(v,{...g?{to:s.path}:{url:s.path},$size:i,$textColor:t,children:s.name})]},`${s.path}-${z}`)})]})})});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{crumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:"BreadcrumbItem[]"},description:""},useRouter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""}}};const ze={title:"МТС/Breadcrumbs",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{crumbs:{description:"Массив крошек. Последний элемент отображается как текущая страница (не ссылка).",control:"object"},size:{description:"Размер компонента. `s` — 14px/20px, `m` — 17px/24px.",control:"radio",options:["s","m"]},iconLeft:{description:"Иконка стрелки влево перед первым элементом. Используется для навигации «Назад».",control:"boolean"},textColor:{description:"Цвет текста, ссылок, разделителей и скрытых крошек. Принимает любое CSS-значение цвета.",control:"color"}}},w=[{name:"Категория",path:"/category"},{name:"Подкатегория",path:"/category/sub"},{name:"Товар",path:"/category/sub/product"}],p={name:"Default",args:{crumbs:w,size:"m"}},m={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Два размера: **20 S** (14px) и **24 M** (17px)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:n==="s"?"20 S":"24 M"}),e.jsx(o,{size:n,crumbs:[{name:"Breadcrumb",path:"/"}]})]},n))})},d={name:"Icon Left",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m",iconLeft:!0},parameters:{docs:{description:{story:"Иконка `←` слева от первого элемента. Используется как визуальная подсказка для навигации назад, особенно на мобильных устройствах."}}}},u={name:"Кастомный цвет текста",args:{crumbs:w,size:"m",textColor:"#FF0032"},parameters:{docs:{description:{story:"Проп `textColor` перекрывает цвет всех текстовых элементов хлебных крошек."}}}},x={name:"Все состояния",parameters:{controls:{disable:!0},docs:{description:{story:"Default — ссылки серые, текущая страница тёмная. Hover — подчёркивание при наведении. Icon Left — иконка-стрелка слева."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Default"}),e.jsx(o,{crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Icon Left"}),e.jsx(o,{iconLeft:!0,crumbs:[{name:"Breadcrumb",path:"/"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Многоуровневые"}),e.jsx(o,{crumbs:w})]})]})},f={name:"Один уровень",args:{crumbs:[{name:"Текущая страница",path:"/"}],size:"m"},parameters:{docs:{description:{story:"Минимальный вариант — только «Главная» и текущая страница."}}}},h={name:"Сокращение длинной цепочки",parameters:{controls:{disable:!0},docs:{description:{story:"Если цепочка не помещается, отображаются первая и последние две крошки. Скрытые страницы открываются в выпадающем списке при наведении на `...`."}}},render:()=>e.jsx("div",{style:{width:320},children:e.jsx(o,{size:"s",crumbs:[{name:"Очень длинная категория товаров",path:"/category"},{name:"Раздел с длинным названием",path:"/category/section"},{name:"Подраздел каталога",path:"/category/section/subsection"},{name:"Карточки товаров",path:"/category/section/subsection/products"},{name:"Текущая страница с длинным названием",path:"/category/section/subsection/products/page"}]})})};var L,D,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Default",
  args: {
    crumbs: sampleCrumbs,
    size: "m"
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var T,I,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var A,_,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var M,q,H;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var E,W,V;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(W=x.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var Y,N,O;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(O=(N=f.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,G,J;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ce=["Default","Sizes","WithIconLeft","CustomTextColor","AllStates","SingleLevel","MobileLongLabels"];export{x as AllStates,u as CustomTextColor,p as Default,h as MobileLongLabels,f as SingleLevel,m as Sizes,d as WithIconLeft,Ce as __namedExportsOrder,ze as default};
