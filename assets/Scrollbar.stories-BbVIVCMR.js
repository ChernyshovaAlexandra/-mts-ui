import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as a,y as E}from"./styled-components.browser.esm-BU5pfHrT.js";import{y as m,O as N}from"./index-CWlbk4Hf.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const x={s:"4px",l:"8px"},V={vertical:a`
    overflow-y: auto;
    overflow-x: hidden;
  `,horizontal:a`
    overflow-x: auto;
    overflow-y: hidden;
  `,both:a`
    overflow: auto;
  `},B=E.div`
  ${({$orientation:r})=>V[r]}
  ${({$maxHeight:r})=>r&&a`max-height: ${r};`}
  ${({$maxWidth:r})=>r&&a`max-width: ${r};`}

  scrollbar-color: ${m} transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    ${({$size:r})=>a`
      width: ${x[r]};
      height: ${x[r]};
    `}
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${m};
    border-radius: ${N};
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`,n=({children:r,size:t="s",orientation:C="vertical",maxHeight:F,maxWidth:R,className:q,style:D})=>e.jsx(B,{$size:t,$orientation:C,$maxHeight:F,$maxWidth:R,className:q,style:D,children:r});n.__docgenInfo={description:"",methods:[],displayName:"Scrollbar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "both"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const M={title:"МТС/Scrollbar",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
**Scrollbar** — контейнер с кастомным скроллбаром в стиле дизайн-системы МТС.

Оборачивает любой контент и заменяет системный скроллбар на тонкий стилизованный с закруглённым бегунком.

### Размеры

| Размер | Толщина бегунка | Когда использовать |
|---|---|---|
| \`s\` | 4px | Компактные блоки: дропдауны, сайдбары |
| \`l\` | 8px | Крупные области: модальные окна, панели |

### Ориентация

| Значение | Поведение |
|---|---|
| \`vertical\` | Только вертикальный скролл |
| \`horizontal\` | Только горизонтальный скролл |
| \`both\` | Оба направления |

### Ограничение области

Используйте \`maxHeight\` и \`maxWidth\` для задания размера прокручиваемой области:

\`\`\`tsx
<Scrollbar maxHeight="300px">
  {/* длинный контент */}
</Scrollbar>
\`\`\`
        `}}},argTypes:{size:{description:"Толщина бегунка скроллбара.",control:"radio",options:["s","l"]},orientation:{description:"Направление прокрутки.",control:"radio",options:["vertical","horizontal","both"]},maxHeight:{description:"Максимальная высота контейнера.",control:"text"},maxWidth:{description:"Максимальная ширина контейнера.",control:"text"},children:{control:!1},className:{control:!1},style:{control:!1}}},s=()=>e.jsx(e.Fragment,{children:Array.from({length:8},(r,t)=>e.jsxs("p",{style:{margin:"0 0 12px",fontFamily:"sans-serif",fontSize:14,lineHeight:1.5,color:"#1D2023"},children:["Строка ",t+1,". МТС — российская телекоммуникационная компания, предоставляющая услуги мобильной и фиксированной связи."]},t))}),A=()=>e.jsx("div",{style:{display:"flex",gap:16,width:"800px",padding:"4px 0"},children:Array.from({length:12},(r,t)=>e.jsx("div",{style:{flexShrink:0,width:80,height:60,background:t%2===0?"#F2F3F7":"#E2E5EB",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",fontSize:12,color:"#626C77"},children:t+1},t))}),o={name:"Default",args:{size:"s",orientation:"vertical",maxHeight:"200px"},render:r=>e.jsx(n,{...r,children:e.jsx(s,{})})},i={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Размер `s` — бегунок 4px, `l` — 8px."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:32},children:["s","l"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:{fontFamily:"sans-serif",fontSize:12,color:"#626C77"},children:["size=",r]}),e.jsx(n,{size:r,orientation:"vertical",maxHeight:"180px",style:{width:240},children:e.jsx(s,{})})]},r))})},l={name:"Вертикальный",parameters:{controls:{disable:!0},docs:{description:{story:"Вертикальный скролл — по умолчанию. Задайте `maxHeight` для ограничения высоты."}}},render:()=>e.jsx(n,{orientation:"vertical",size:"s",maxHeight:"200px",style:{width:280},children:e.jsx(s,{})})},c={name:"Горизонтальный",parameters:{controls:{disable:!0},docs:{description:{story:"Горизонтальный скролл. Задайте `maxWidth` для ограничения ширины."}}},render:()=>e.jsx(n,{orientation:"horizontal",size:"s",maxWidth:"360px",children:e.jsx(A,{})})},d={name:"Оба направления",parameters:{controls:{disable:!0},docs:{description:{story:"Оба скроллбара активны одновременно. Угол пересечения прозрачный."}}},render:()=>e.jsx(n,{orientation:"both",size:"l",maxHeight:"180px",maxWidth:"360px",children:e.jsx("div",{style:{width:800},children:e.jsx(s,{})})})},p={name:"Размер L",parameters:{controls:{disable:!0},docs:{description:{story:"Размер `l` с бегунком 8px — для крупных прокручиваемых областей."}}},render:()=>e.jsx(n,{orientation:"vertical",size:"l",maxHeight:"200px",style:{width:280},children:e.jsx(s,{})})};var h,u,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "s",
    orientation: "vertical",
    maxHeight: "200px"
  },
  render: args => <Scrollbar {...args}>
      <LoremText />
    </Scrollbar>
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,b,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Размер \`s\` — бегунок 4px, \`l\` — 8px."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 32
  }}>
      {(["s", "l"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
          <span style={{
        fontFamily: "sans-serif",
        fontSize: 12,
        color: "#626C77"
      }}>size={size}</span>
          <Scrollbar size={size} orientation="vertical" maxHeight="180px" style={{
        width: 240
      }}>
            <LoremText />
          </Scrollbar>
        </div>)}
    </div>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,v,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Вертикальный",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Вертикальный скролл — по умолчанию. Задайте \`maxHeight\` для ограничения высоты."
      }
    }
  },
  render: () => <Scrollbar orientation="vertical" size="s" maxHeight="200px" style={{
    width: 280
  }}>
      <LoremText />
    </Scrollbar>
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var w,j,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Горизонтальный",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Горизонтальный скролл. Задайте \`maxWidth\` для ограничения ширины."
      }
    }
  },
  render: () => <Scrollbar orientation="horizontal" size="s" maxWidth="360px">
      <WideContent />
    </Scrollbar>
}`,...(H=(j=c.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var T,$,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Оба направления",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Оба скроллбара активны одновременно. Угол пересечения прозрачный."
      }
    }
  },
  render: () => <Scrollbar orientation="both" size="l" maxHeight="180px" maxWidth="360px">
      <div style={{
      width: 800
    }}>
        <LoremText />
      </div>
    </Scrollbar>
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var W,L,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Размер L",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Размер \`l\` с бегунком 8px — для крупных прокручиваемых областей."
      }
    }
  },
  render: () => <Scrollbar orientation="vertical" size="l" maxHeight="200px" style={{
    width: 280
  }}>
      <LoremText />
    </Scrollbar>
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const Q=["Default","Sizes","Vertical","Horizontal","Both","LargeSize"];export{d as Both,o as Default,c as Horizontal,p as LargeSize,i as Sizes,l as Vertical,Q as __namedExportsOrder,M as default};
