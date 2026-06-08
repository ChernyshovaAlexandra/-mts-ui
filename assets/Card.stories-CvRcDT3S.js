import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{C as E}from"./Card-DmW5QZf5.js";import{T as g}from"./Text-2zki5lTF.js";import{h as r,n as P,g as V,Q as W,S as M}from"./index-CWlbk4Hf.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mixins-CTkzXf3m.js";import"./style-afSt-2-G.js";/* empty css              */const Z={title:"МТС/Card",component:E,tags:["autodocs"],parameters:{docs:{description:{component:`
**Card** — базовый контейнер для группировки контента. Используется как обёртка для любых блоков: информационных секций, форм, превью и т.д.

### Варианты

| Вариант | Когда использовать |
|---|---|
| \`default\` | Карточка на светлом фоне (\`#F2F3F7\`) — основной вариант |
| \`default-no-shadow\` | Карточка на сером или контрастном фоне, тень не нужна |
| \`grey\` | Вложенный блок внутри белой секции |
| \`outline\` | Когда нужна граница без тени — например, в списках |
| \`transparent\` | На тёмных или цветных фонах с блюром |

### Интерактивность

Если передать \`onClick\` — карточка становится кликабельной: появляется курсор, анимация подъёма при hover и outline при фокусе.
        `}}},argTypes:{variant:{description:"Визуальный стиль карточки.",control:"select",options:["default","default-no-shadow","grey","outline","transparent"]},onClick:{description:"Если передан — карточка становится интерактивной (cursor pointer, hover-анимация)."},children:{control:!1}}},e=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[n.jsx(g,{variant:"P3-Medium-Comp",style:{color:W},children:"Заголовок"}),n.jsx(g,{variant:"P4-Regular-Comp",style:{color:M},children:"Подзаголовок"})]}),a=(t,m=360)=>u=>n.jsx("div",{style:{padding:24,background:t,maxWidth:m},children:n.jsx(u,{})}),s={name:"Default — с тенью",decorators:[a(r)],args:{variant:"default",children:n.jsx(e,{})},parameters:{docs:{description:{story:"Основной вариант. Используется на сером фоне `#F2F3F7`."}}}},o={name:"Default No Shadow — без тени",decorators:[a(P)],args:{variant:"default-no-shadow",children:n.jsx(e,{})},parameters:{docs:{description:{story:"Белая карточка без тени. Подходит для вторичного серого фона, где тень сливается с фоном."}}}},i={name:"Grey — серая",decorators:[a(r)],args:{variant:"grey",children:n.jsx(e,{})},parameters:{docs:{description:{story:"Серый блок (`#F2F3F7`) внутри белой секции. Подходит для вложенных блоков информации."}}}},c={name:"Outline — с обводкой",decorators:[a(r)],args:{variant:"outline",children:n.jsx(e,{})},parameters:{docs:{description:{story:"Белая карточка с тонкой границей и без тени. Используется в списках или там, где нужно визуальное разделение без объёма."}}}},d={name:"Transparent — на тёмном фоне",decorators:[a(V)],args:{variant:"transparent",children:n.jsx(e,{})},parameters:{docs:{description:{story:"Полупрозрачный блок с блюром (`rgba(255,255,255,0.08)`). Используется поверх тёмных или цветных фонов."}}}},l={name:"Кликабельная",decorators:[a(r)],args:{variant:"default",onClick:()=>console.log("card clicked"),children:n.jsx(e,{})},parameters:{docs:{description:{story:"При наличии `onClick` карточка получает интерактивное поведение: hover-подъём, focus-outline, cursor pointer."}}}},p={name:"Все варианты",parameters:{controls:{disable:!0},docs:{description:{story:"Все визуальные варианты карточки на соответствующих фонах."}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{variant:"default",bg:r,label:"default"},{variant:"default-no-shadow",bg:P,label:"default-no-shadow"},{variant:"grey",bg:r,label:"grey"},{variant:"outline",bg:r,label:"outline"},{variant:"transparent",bg:V,label:"transparent"}].map(({variant:t,bg:m,label:u})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:u}),n.jsx("div",{style:{padding:16,background:m,borderRadius:12,maxWidth:360},children:n.jsx(E,{variant:t,children:n.jsx(e,{})})})]},t))})};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default — с тенью",
  decorators: [wrap(mts_bg_lower)],
  args: {
    variant: "default",
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "Основной вариант. Используется на сером фоне \`#F2F3F7\`."
      }
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,h,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Default No Shadow — без тени",
  decorators: [wrap(mts_bg_secondary)],
  args: {
    variant: "default-no-shadow",
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "Белая карточка без тени. Подходит для вторичного серого фона, где тень сливается с фоном."
      }
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,w,C;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Grey — серая",
  decorators: [wrap(mts_bg_lower)],
  args: {
    variant: "grey",
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "Серый блок (\`#F2F3F7\`) внутри белой секции. Подходит для вложенных блоков информации."
      }
    }
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,F,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Outline — с обводкой",
  decorators: [wrap(mts_bg_lower)],
  args: {
    variant: "outline",
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "Белая карточка с тонкой границей и без тени. Используется в списках или там, где нужно визуальное разделение без объёма."
      }
    }
  }
}`,...(S=(F=c.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var k,D,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Transparent — на тёмном фоне",
  decorators: [wrap(mts_bg_inverted)],
  args: {
    variant: "transparent",
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "Полупрозрачный блок с блюром (\`rgba(255,255,255,0.08)\`). Используется поверх тёмных или цветных фонов."
      }
    }
  }
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var O,A,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Кликабельная",
  decorators: [wrap(mts_bg_lower)],
  args: {
    variant: "default",
    onClick: () => console.log("card clicked"),
    children: <Content />
  },
  parameters: {
    docs: {
      description: {
        story: "При наличии \`onClick\` карточка получает интерактивное поведение: hover-подъём, focus-outline, cursor pointer."
      }
    }
  }
}`,...(G=(A=l.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,R,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Все варианты",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Все визуальные варианты карточки на соответствующих фонах."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      {([{
      variant: "default",
      bg: mts_bg_lower,
      label: "default"
    }, {
      variant: "default-no-shadow",
      bg: mts_bg_secondary,
      label: "default-no-shadow"
    }, {
      variant: "grey",
      bg: mts_bg_lower,
      label: "grey"
    }, {
      variant: "outline",
      bg: mts_bg_lower,
      label: "outline"
    }, {
      variant: "transparent",
      bg: mts_bg_inverted,
      label: "transparent"
    }] as const).map(({
      variant,
      bg,
      label
    }) => <div key={variant} style={{
      display: "flex",
      flexDirection: "column",
      gap: 6
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
          <div style={{
        padding: 16,
        background: bg,
        borderRadius: 12,
        maxWidth: 360
      }}>
            <Card variant={variant}>
              <Content />
            </Card>
          </div>
        </div>)}
    </div>
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const $=["Default","DefaultNoShadow","Grey","Outline","Transparent","Clickable","AllVariants"];export{p as AllVariants,l as Clickable,s as Default,o as DefaultNoShadow,i as Grey,c as Outline,d as Transparent,$ as __namedExportsOrder,Z as default};
