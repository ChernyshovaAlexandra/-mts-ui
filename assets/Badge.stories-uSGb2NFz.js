import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as L}from"./index-Dx_1l3Sb.js";import{B as n}from"./Badge-BmNWZ0C9.js";import{I as W}from"./IconDate-BrvuUuHU.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./mixins-ib8c4tLP.js";import"./index-B66h-egn.js";/* empty css              */const _={title:"МТС/Badge",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Badge** — компактная метка для отображения статуса, категории или числового значения. Используется рядом с другими элементами интерфейса.\n\n### Размеры\n\n| Размер | Высота | Шрифт | Когда использовать |\n|---|---|---|---|\n| `xs` | 16px | 10px | Плотные списки, таблицы |\n| `s` | 20px | 12px | Основной размер по умолчанию |\n| `m` | 24px | 14px | Карточки, заголовки секций |\n| `l` | 32px | 16px | Крупные акцентные метки |\n\n### Варианты\n\n| Вариант | Фон | Текст | Когда использовать |\n|---|---|---|---|\n| `default` | `#F2F3F7` (серый) | Тёмный | Нейтральные метки, категории |\n| `custom` | `#1286D9` (синий) | Белый | Акцентные метки, статусы |\n\n### Иконка\n\nПередаётся через `icon`, позиция задаётся через `iconPosition`: `left` или `right`.\n\nКомпонент автоматически масштабирует иконку под размер бейджа — передавать размер вручную не нужно:\n\n| Размер бейджа | Размер иконки |\n|---|---|\n| `xs` | 12px |\n| `s` | 16px |\n| `m` | 16px |\n| `l` | 24px |\n        "}}},argTypes:{size:{description:"Размер бейджа.",control:"select",options:["xs","s","m","l"]},variant:{description:"Визуальный стиль: `default` — серый, `custom` — синий акцентный.",control:"radio",options:["default","custom"]},iconPosition:{description:"Позиция иконки относительно текста.",control:"radio",options:["left","right"]},color:{description:"Произвольный цвет фона. Переопределяет цвет варианта. При передаче текст автоматически становится белым, если не задан `textColor`.",control:"color"},textColor:{description:"Цвет текста и иконки. По умолчанию белый, если задан `color`.",control:"color"},icon:{control:!1},children:{control:"text"},style:{control:!1},className:{control:!1}}},d=()=>e.jsx(W,{color:"currentColor"}),A=({children:s})=>e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",minWidth:28},children:s}),a={name:"Default",args:{children:"Badge",size:"s",variant:"default"}},o={name:"Все размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Четыре размера — XS (16px), S (20px), M (24px), L (32px). Верхний ряд — `default`, нижний — `custom`."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["default","custom"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(A,{children:s}),["xs","s","m","l"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(n,{size:r,variant:s,children:"Badge"}),e.jsx("span",{style:{fontSize:10,color:"#969FA8",fontFamily:"sans-serif"},children:r})]},r))]},s))})},t={name:"С иконкой",parameters:{controls:{disable:!0},docs:{description:{story:"Иконка слева (`left`) или справа (`right`) от текста. Размер иконки адаптируется к размеру бейджа."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["default","custom"].map(s=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(A,{children:s}),["s","m","l"].map(r=>e.jsxs(L.Fragment,{children:[e.jsx(n,{size:r,variant:s,icon:e.jsx(d,{}),iconPosition:"left",children:"Badge"}),e.jsx(n,{size:r,variant:s,icon:e.jsx(d,{}),iconPosition:"right",children:"Badge"})]},r))]},s))})},i={name:"Варианты",parameters:{controls:{disable:!0},docs:{description:{story:"`default` — нейтральный серый для категорий и меток. `custom` — синий акцентный для статусов и важных маркеров."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{variant:"default",size:"m",children:"Default"}),e.jsx(n,{variant:"custom",size:"m",children:"Custom"})]})},l={name:"Произвольный цвет",parameters:{docs:{description:{story:"`color` переопределяет цвет фона любого варианта. Текст автоматически становится белым — или задайте `textColor` явно."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{size:"m",color:"#26CD58",children:"Акция"}),e.jsx(n,{size:"m",color:"#F95721",children:"Ошибка"}),e.jsx(n,{size:"m",color:"#FAC031",textColor:"#1D2023",children:"Внимание"}),e.jsx(n,{size:"m",color:"#9B93FF",children:"Новое"}),e.jsx(n,{size:"m",color:"#1D2023",children:"Тёмный"})]})},c={name:"Без иконки",args:{children:"Badge",size:"s",variant:"default"},parameters:{docs:{description:{story:"Базовый вариант без иконки — только текст."}}}};var p,m,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Default",
  args: {
    children: "Badge",
    size: "s",
    variant: "default"
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,u,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Все размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Четыре размера — XS (16px), S (20px), M (24px), L (32px). Верхний ряд — \`default\`, нижний — \`custom\`."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      {(["default", "custom"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      alignItems: "center",
      gap: 16
    }}>
          <SizeLabel>{variant}</SizeLabel>
          {(["xs", "s", "m", "l"] as const).map(size => <div key={size} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }}>
              <Badge size={size} variant={variant}>Badge</Badge>
              <span style={{
          fontSize: 10,
          color: "#969FA8",
          fontFamily: "sans-serif"
        }}>{size}</span>
            </div>)}
        </div>)}
    </div>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,v,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "С иконкой",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Иконка слева (\`left\`) или справа (\`right\`) от текста. Размер иконки адаптируется к размеру бейджа."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {(["default", "custom"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }}>
          <SizeLabel>{variant}</SizeLabel>
          {(["s", "m", "l"] as const).map(size => <React.Fragment key={size}>
              <Badge size={size} variant={variant} icon={<SmallIcon />} iconPosition="left">Badge</Badge>
              <Badge size={size} variant={variant} icon={<SmallIcon />} iconPosition="right">Badge</Badge>
            </React.Fragment>)}
        </div>)}
    </div>
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var B,h,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Варианты",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "\`default\` — нейтральный серый для категорий и меток. \`custom\` — синий акцентный для статусов и важных маркеров."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <Badge variant="default" size="m">Default</Badge>
      <Badge variant="custom" size="m">Custom</Badge>
    </div>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,D,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Произвольный цвет",
  parameters: {
    docs: {
      description: {
        story: "\`color\` переопределяет цвет фона любого варианта. Текст автоматически становится белым — или задайте \`textColor\` явно."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <Badge size="m" color="#26CD58">Акция</Badge>
      <Badge size="m" color="#F95721">Ошибка</Badge>
      <Badge size="m" color="#FAC031" textColor="#1D2023">Внимание</Badge>
      <Badge size="m" color="#9B93FF">Новое</Badge>
      <Badge size="m" color="#1D2023">Тёмный</Badge>
    </div>
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var C,I,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Без иконки",
  args: {
    children: "Badge",
    size: "s",
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Базовый вариант без иконки — только текст."
      }
    }
  }
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const O=["Default","AllSizes","WithIcon","Variants","CustomColor","NoIcon"];export{o as AllSizes,l as CustomColor,a as Default,c as NoIcon,i as Variants,t as WithIcon,O as __namedExportsOrder,_ as default};
