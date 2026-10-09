import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./index-mIjS73Jk.js";import{D as a}from"./Divider-CUmgusVz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-UUNjPRYl.js";import"./index-CA_YInif.js";import"./mixins-DAii6Zu4.js";const w={title:"МТС/Divider",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
**Divider** — разделитель. Блок с паддингами внутри которого лежит линия толщиной 1px.

\`\`\`
<Wrap padding={...}>
  <Line />        ← 1px
</Wrap>
\`\`\`

### Ориентация

| Prop | Описание |
|---|---|
| \`horizontal\` | Горизонтальная линия, паддинг сверху и снизу |
| \`vertical\` | Вертикальная линия, паддинг слева и справа |

### Padding

Отступ от края контейнера до линии. По умолчанию \`0\`.
        `}}},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},padding:{control:{type:"number",min:0,max:32}},style:{control:!1},className:{control:!1}}},e={name:"Horizontal",args:{orientation:"horizontal",padding:0},decorators:[i=>n.jsx("div",{style:{width:300,background:"white",padding:16},children:n.jsx(i,{})})]},r={name:"Vertical",args:{orientation:"vertical",padding:0},decorators:[i=>n.jsx("div",{style:{height:60,display:"flex",background:"white",padding:16},children:n.jsx(i,{})})]},o={name:"С паддингами",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:400},children:[n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:"MTS Compact, sans-serif",fontSize:12,color:"#626C77",marginBottom:4},children:"Horizontal, padding=0"}),n.jsx("div",{style:{background:"#f5f5f5",padding:16},children:n.jsx(a,{orientation:"horizontal",padding:0})})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:"MTS Compact, sans-serif",fontSize:12,color:"#626C77",marginBottom:4},children:"Horizontal, padding=12"}),n.jsx("div",{style:{background:"#f5f5f5",padding:16},children:n.jsx(a,{orientation:"horizontal",padding:12})})]}),n.jsxs("div",{style:{display:"flex",gap:32},children:[n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:"MTS Compact, sans-serif",fontSize:12,color:"#626C77",marginBottom:4},children:"Vertical, padding=0"}),n.jsx("div",{style:{height:80,display:"flex",background:"#f5f5f5",padding:16},children:n.jsx(a,{orientation:"vertical",padding:0})})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:"MTS Compact, sans-serif",fontSize:12,color:"#626C77",marginBottom:4},children:"Vertical, padding=12"}),n.jsx("div",{style:{height:80,display:"flex",background:"#f5f5f5",padding:16},children:n.jsx(a,{orientation:"vertical",padding:12})})]})]})]})},t={name:"В контексте (список)",parameters:{controls:{disable:!0}},render:()=>n.jsx("div",{style:{maxWidth:320,background:"white",borderRadius:12,border:"1px solid rgba(188,195,208,0.5)",overflow:"hidden"},children:["Пункт первый","Пункт второй","Пункт третий"].map((i,u,j)=>n.jsxs(z.Fragment,{children:[n.jsx("div",{style:{padding:"12px 16px",fontFamily:"MTS Compact, sans-serif",fontSize:14},children:i}),u<j.length-1&&n.jsx(a,{orientation:"horizontal"})]},i))})};var d,s,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Horizontal",
  args: {
    orientation: "horizontal",
    padding: 0
  },
  decorators: [Story => <div style={{
    width: 300,
    background: "white",
    padding: 16
  }}><Story /></div>]
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Vertical",
  args: {
    orientation: "vertical",
    padding: 0
  },
  decorators: [Story => <div style={{
    height: 60,
    display: "flex",
    background: "white",
    padding: 16
  }}><Story /></div>]
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "С паддингами",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    maxWidth: 400
  }}>
      <div>
        <p style={{
        fontFamily: "MTS Compact, sans-serif",
        fontSize: 12,
        color: "#626C77",
        marginBottom: 4
      }}>Horizontal, padding=0</p>
        <div style={{
        background: "#f5f5f5",
        padding: 16
      }}>
          <Divider orientation="horizontal" padding={0} />
        </div>
      </div>
      <div>
        <p style={{
        fontFamily: "MTS Compact, sans-serif",
        fontSize: 12,
        color: "#626C77",
        marginBottom: 4
      }}>Horizontal, padding=12</p>
        <div style={{
        background: "#f5f5f5",
        padding: 16
      }}>
          <Divider orientation="horizontal" padding={12} />
        </div>
      </div>
      <div style={{
      display: "flex",
      gap: 32
    }}>
        <div>
          <p style={{
          fontFamily: "MTS Compact, sans-serif",
          fontSize: 12,
          color: "#626C77",
          marginBottom: 4
        }}>Vertical, padding=0</p>
          <div style={{
          height: 80,
          display: "flex",
          background: "#f5f5f5",
          padding: 16
        }}>
            <Divider orientation="vertical" padding={0} />
          </div>
        </div>
        <div>
          <p style={{
          fontFamily: "MTS Compact, sans-serif",
          fontSize: 12,
          color: "#626C77",
          marginBottom: 4
        }}>Vertical, padding=12</p>
          <div style={{
          height: 80,
          display: "flex",
          background: "#f5f5f5",
          padding: 16
        }}>
            <Divider orientation="vertical" padding={12} />
          </div>
        </div>
      </div>
    </div>
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "В контексте (список)",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    maxWidth: 320,
    background: "white",
    borderRadius: 12,
    border: "1px solid rgba(188,195,208,0.5)",
    overflow: "hidden"
  }}>
      {["Пункт первый", "Пункт второй", "Пункт третий"].map((item, i, arr) => <React.Fragment key={item}>
          <div style={{
        padding: "12px 16px",
        fontFamily: "MTS Compact, sans-serif",
        fontSize: 14
      }}>
            {item}
          </div>
          {i < arr.length - 1 && <Divider orientation="horizontal" />}
        </React.Fragment>)}
    </div>
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const M=["Horizontal","Vertical","WithPadding","InContext"];export{e as Horizontal,t as InContext,r as Vertical,o as WithPadding,M as __namedExportsOrder,w as default};
