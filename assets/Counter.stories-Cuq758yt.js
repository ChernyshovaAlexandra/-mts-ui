import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{y as q,p as s}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as B}from"./mixins-ib8c4tLP.js";import{q as P,E as y,D as h}from"./index-B66h-egn.js";/* empty css              */import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";const N=q.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${P};
  flex-shrink: 0;
`,A={s:s`
    min-width: 16px;
    height: 16px;
    font-size: 10px;
    line-height: 12px;
    border-radius: 8px;
    padding: 0 4px;
  `,m:s`
    min-width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 10px;
    padding: 0 6px;
  `,l:s`
    min-width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    padding: 0 7px;
  `},E={red:s`
    background: ${P};
    color: ${h};
  `,dark:s`
    background: ${y};
    color: ${h};
  `,ghost:s`
    background: transparent;
    color: ${y};
  `},I=q.span`
  display: inline-grid;
  place-items: center;
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  white-space: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
  width: fit-content;
  align-self: flex-start;

  ${({$size:e})=>A[e]}
  ${({$variant:e})=>E[e]}

  ${({$circular:e,$size:r})=>e&&s`
      padding: 0;
      width: ${r==="s"?"16px":r==="m"?"20px":"24px"};
      border-radius: 50%;
    `}

  ${B};
`,a=({value:e,size:r="m",variant:i="red",max:x=99,pad:v=!1,className:f,style:g})=>{if(r==="notification")return n.jsx(N,{className:f,style:g,"aria-hidden":!0});const u=e===void 0?null:e>x?`${x}+`:v?String(e).padStart(2,"0"):String(e),O=!v&&e!==void 0&&e<=9;return n.jsx(I,{$size:r,$variant:i,$circular:O,className:f,style:g,"aria-label":u?`${u} уведомлений`:void 0,children:u})};a.__docgenInfo={description:"",methods:[],displayName:"Counter",props:{value:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"notification" | "s" | "m" | "l"',elements:[{name:"literal",value:'"notification"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"red" | "dark" | "ghost"',elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"red"',computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},pad:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const X={title:"МТС/Counter",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
**Counter** — числовой каунтер для отображения количества уведомлений или непрочитанных элементов. Некликабельный.

### Размеры

| Размер | Высота | Шрифт | Описание |
|---|---|---|---|
| \`notification\` | 6px | — | Только точка, без числа |
| \`s\` | 16px | 10px | Компактный |
| \`m\` | 20px | 12px | Стандартный |
| \`l\` | 24px | 14px | Крупный |

### Ширина

- **0–9**: всегда круглый (width = height)
- **10–99**: расширяется по контенту с padding:
  - S → 4px, M → 6px, L → 7px
- **>99**: отображается как **99+**

### Варианты

| Вариант | Фон | Текст |
|---|---|---|
| \`red\` | \`#FF0032\` | Белый |
| \`dark\` | \`#1D2023\` | Белый |
| \`ghost\` | Прозрачный | Тёмный |
        `}}},argTypes:{value:{description:"Числовое значение. Если не передано — пустой каунтер. Для `notification` игнорируется.",control:{type:"number",min:0}},size:{description:"Размер каунтера.",control:"radio",options:["notification","s","m","l"]},variant:{description:"Цветовой вариант.",control:"radio",options:["red","dark","ghost"]},max:{description:"Максимальное отображаемое значение. При превышении показывается `{max}+`. По умолчанию 99.",control:{type:"number"}},style:{control:!1},className:{control:!1}}},m=({children:e})=>n.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",minWidth:80},children:e}),t=({children:e})=>n.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:e}),o={name:"Default",args:{value:1,size:"m",variant:"red"}},l={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Четыре размера. Notification — только точка без числа."}}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[n.jsxs(t,{children:[n.jsx(m,{children:"notification"}),n.jsx(a,{size:"notification"})]}),["s","m","l"].map(e=>n.jsxs(t,{children:[n.jsx(m,{children:e}),n.jsx(a,{size:e,value:1,variant:"red"}),n.jsx(a,{size:e,value:99,variant:"red"}),n.jsx(a,{size:e,value:100,variant:"red"})]},e))]})},d={name:"Круглый и пилюля",parameters:{controls:{disable:!0},docs:{description:{story:"0–9 → круглый. 10+ → пилюля. >99 → отображается «99+»."}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["s","m","l"].map(e=>n.jsxs(t,{children:[n.jsx(m,{children:e}),[1,5,9,10,42,99,100,999].map(r=>n.jsx(a,{size:e,value:r,variant:"red"},r))]},e))})},p={name:"Варианты",parameters:{controls:{disable:!0},docs:{description:{story:"Red — для уведомлений. Dark — ахроматический. Ghost — без фона."}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["red","dark","ghost"].map(e=>n.jsxs(t,{children:[n.jsx(m,{children:e}),n.jsx(a,{size:"m",value:1,variant:e}),n.jsx(a,{size:"m",value:99,variant:e}),n.jsx(a,{size:"m",value:100,variant:e})]},e))})},c={name:"На разных фонах",parameters:{controls:{disable:!0},docs:{description:{story:"Каунтеры на светлом (Primary) и сером (Secondary) фоне."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:16},children:[{bg:"#FFFFFF",label:"On Primary Bg"},{bg:"#F2F3F7",label:"On Secondary Bg"}].map(({bg:e,label:r})=>n.jsxs("div",{style:{background:e,padding:"20px 24px",borderRadius:16,display:"flex",flexDirection:"column",gap:12},children:[n.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif"},children:r}),["s","m","l"].map(i=>n.jsxs(t,{children:[n.jsx(a,{size:i,value:1,variant:"ghost"}),n.jsx(a,{size:i,value:100,variant:"ghost"}),n.jsx(a,{size:i,value:1,variant:"red"}),n.jsx(a,{size:i,value:100,variant:"red"}),n.jsx(a,{size:i,value:1,variant:"dark"}),n.jsx(a,{size:i,value:100,variant:"dark"})]},i))]},r))})};var b,z,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  args: {
    value: 1,
    size: "m",
    variant: "red"
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,k,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Четыре размера. Notification — только точка без числа."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <Row>
        <SizeLabel>notification</SizeLabel>
        <Counter size="notification" />
      </Row>
      {(["s", "m", "l"] as const).map(size => <Row key={size}>
          <SizeLabel>{size}</SizeLabel>
          <Counter size={size} value={1} variant="red" />
          <Counter size={size} value={99} variant="red" />
          <Counter size={size} value={100} variant="red" />
        </Row>)}
    </div>
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var C,w,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Круглый и пилюля",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "0–9 → круглый. 10+ → пилюля. >99 → отображается «99+»."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {(["s", "m", "l"] as const).map(size => <Row key={size}>
          <SizeLabel>{size}</SizeLabel>
          {[1, 5, 9, 10, 42, 99, 100, 999].map(v => <Counter key={v} size={size} value={v} variant="red" />)}
        </Row>)}
    </div>
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var D,$,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Варианты",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Red — для уведомлений. Dark — ахроматический. Ghost — без фона."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {(["red", "dark", "ghost"] as const).map(variant => <Row key={variant}>
          <SizeLabel>{variant}</SizeLabel>
          <Counter size="m" value={1} variant={variant} />
          <Counter size="m" value={99} variant={variant} />
          <Counter size="m" value={100} variant={variant} />
        </Row>)}
    </div>
}`,...(L=($=p.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var T,_,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "На разных фонах",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Каунтеры на светлом (Primary) и сером (Secondary) фоне."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      {[{
      bg: "#FFFFFF",
      label: "On Primary Bg"
    }, {
      bg: "#F2F3F7",
      label: "On Secondary Bg"
    }].map(({
      bg,
      label
    }) => <div key={label} style={{
      background: bg,
      padding: "20px 24px",
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
          <span style={{
        fontSize: 11,
        color: "#969FA8",
        fontFamily: "sans-serif"
      }}>{label}</span>
          {(["s", "m", "l"] as const).map(size => <Row key={size}>
              <Counter size={size} value={1} variant="ghost" />
              <Counter size={size} value={100} variant="ghost" />
              <Counter size={size} value={1} variant="red" />
              <Counter size={size} value={100} variant="red" />
              <Counter size={size} value={1} variant="dark" />
              <Counter size={size} value={100} variant="dark" />
            </Row>)}
        </div>)}
    </div>
}`,...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Y=["Default","Sizes","CircularVsPill","Variants","OnBackgrounds"];export{d as CircularVsPill,o as Default,c as OnBackgrounds,l as Sizes,p as Variants,Y as __namedExportsOrder,X as default};
