import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as n}from"./Step-DLp7eGet.js";import{C as i}from"./Caption-C1APNMb6.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";import"./Divider-BhJnfEVy.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./index-B66h-egn.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./Text-BGtrDhtg.js";import"./style-CYyl-vEM.js";const O={title:"МТС/Step",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Step** — одиночный шаг. Строительный блок для компонента Steps.\n\n### Варианты (`variant`)\n| Значение | Описание |\n|---|---|\n| `icon` | Круг с иконкой галочки или минуса |\n| `number` | Круг с цифрой, цвет primary/secondary |\n| `number-badge` | Круг с цифрой + маленькая иконка в правом нижнем углу |\n\n### Статусы (`status`)\n| Статус | Применимо к |\n|---|---|\n| `done` | icon, number-badge |\n| `failed` | icon, number-badge |\n| `disabled` | все варианты |\n| `disabled-done` | number-badge |\n| `disabled-failed` | number-badge |\n\n### Цвет (`color`)\nПрименяется к `number` и `number-badge` без статуса disabled.\n| Значение | Описание |\n|---|---|\n| `primary` | Красный МТС |\n| `secondary` | Тёмный |\n        "}}},argTypes:{variant:{control:"radio",options:["icon","number","number-badge"]},status:{control:"radio",options:["done","failed","disabled","disabled-done","disabled-failed"]},color:{control:"radio",options:["primary","secondary"]},size:{control:"radio",options:["s","m"]},value:{control:"number"},style:{control:!1},className:{control:!1}}},s={name:"Default",args:{variant:"number",value:1,color:"primary",size:"m"}},r={name:"Icon",parameters:{controls:{disable:!0},docs:{description:{story:"Круг с иконкой: Done (зелёный ✓), Failed (красный −), Disabled (серый)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",style:{width:12,textTransform:"uppercase"},children:a}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{variant:"icon",status:"done",size:a}),e.jsx(n,{variant:"icon",status:"failed",size:a})]})]},a))})},t={name:"Number",parameters:{controls:{disable:!0},docs:{description:{story:"Круг с цифрой: Primary (красный), Secondary (тёмный), Disabled (серый)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",style:{width:12,textTransform:"uppercase"},children:a}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{variant:"number",value:1,color:"primary",size:a}),e.jsx(n,{variant:"number",value:1,color:"secondary",size:a}),e.jsx(n,{variant:"number",value:1,status:"disabled",size:a})]})]},a))})},l={name:"Number + Badge",parameters:{controls:{disable:!0},docs:{description:{story:"Круг с цифрой и маленькой иконкой в правом нижнем углу."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["s","m"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",style:{width:12,textTransform:"uppercase"},children:a}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(n,{variant:"number-badge",value:1,status:"done",color:"primary",size:a}),e.jsx(i,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:"done"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(n,{variant:"number-badge",value:1,status:"failed",color:"primary",size:a}),e.jsx(i,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:"failed"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(n,{variant:"number-badge",value:1,status:"disabled-done",size:a}),e.jsx(i,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:"dis-done"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(n,{variant:"number-badge",value:1,status:"disabled-failed",size:a}),e.jsx(i,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:"dis-failed"})]})]})]},a))})},o={name:"С текстом",parameters:{controls:{disable:!0},docs:{description:{story:"Горизонтальная и вертикальная ориентация — лейбл и описание под/справа от круга."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",children:"Horizontal"}),e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsx(n,{variant:"number",value:1,color:"primary",size:"m",orientation:"horizontal",label:"Заголовок",description:"Описание шага"}),e.jsx(n,{variant:"number",value:2,color:"secondary",size:"m",orientation:"horizontal",label:"Заголовок",description:"Описание шага"}),e.jsx(n,{variant:"number",value:3,status:"disabled",size:"m",orientation:"horizontal",label:"Заголовок",description:"Описание шага"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",children:"Vertical"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{variant:"number",value:1,color:"primary",size:"m",orientation:"vertical",label:"Заголовок",description:"Описание шага"}),e.jsx(n,{variant:"number",value:2,color:"secondary",size:"m",orientation:"vertical",label:"Заголовок",description:"Описание шага"}),e.jsx(n,{variant:"number",value:3,status:"disabled",size:"m",orientation:"vertical",label:"Заголовок",description:"Описание шага"})]})]})]})},d={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",children:"Icon"}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{variant:"icon",status:"done",size:"m"}),e.jsx(n,{variant:"icon",status:"failed",size:"m"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",children:"Number"}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{variant:"number",value:2,color:"primary",size:"m"}),e.jsx(n,{variant:"number",value:2,color:"secondary",size:"m"}),e.jsx(n,{variant:"number",value:2,status:"disabled",size:"m"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{variant:"C1-Medium-Comp",as:"span",children:"Number + Badge"}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{variant:"number-badge",value:3,status:"done",color:"primary",size:"m"}),e.jsx(n,{variant:"number-badge",value:3,status:"failed",color:"primary",size:"m"}),e.jsx(n,{variant:"number-badge",value:3,status:"disabled-done",size:"m"}),e.jsx(n,{variant:"number-badge",value:3,status:"disabled-failed",size:"m"})]})]})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "number",
    value: 1,
    color: "primary",
    size: "m"
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,v,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Icon",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Круг с иконкой: Done (зелёный ✓), Failed (красный −), Disabled (серый)."
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
      alignItems: "center",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        width: 12,
        textTransform: "uppercase"
      }}>{size}</Caption>
          <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
            <Step variant="icon" status="done" size={size} />
            <Step variant="icon" status="failed" size={size} />
          </div>
        </div>)}
    </div>
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Number",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Круг с цифрой: Primary (красный), Secondary (тёмный), Disabled (серый)."
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
      alignItems: "center",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        width: 12,
        textTransform: "uppercase"
      }}>{size}</Caption>
          <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
            <Step variant="number" value={1} color="primary" size={size} />
            <Step variant="number" value={1} color="secondary" size={size} />
            <Step variant="number" value={1} status="disabled" size={size} />
          </div>
        </div>)}
    </div>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,C,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Number + Badge",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Круг с цифрой и маленькой иконкой в правом нижнем углу."
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
      alignItems: "center",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        width: 12,
        textTransform: "uppercase"
      }}>{size}</Caption>
          <div style={{
        display: "flex",
        gap: 24,
        alignItems: "center"
      }}>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center"
        }}>
              <Step variant="number-badge" value={1} status="done" color="primary" size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{
            color: "#626C77"
          }}>done</Caption>
            </div>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center"
        }}>
              <Step variant="number-badge" value={1} status="failed" color="primary" size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{
            color: "#626C77"
          }}>failed</Caption>
            </div>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center"
        }}>
              <Step variant="number-badge" value={1} status="disabled-done" size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{
            color: "#626C77"
          }}>dis-done</Caption>
            </div>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center"
        }}>
              <Step variant="number-badge" value={1} status="disabled-failed" size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{
            color: "#626C77"
          }}>dis-failed</Caption>
            </div>
          </div>
        </div>)}
    </div>
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var z,h,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "С текстом",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Горизонтальная и вертикальная ориентация — лейбл и описание под/справа от круга."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 48
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Caption variant="C1-Medium-Comp" as="span">Horizontal</Caption>
        <div style={{
        display: "flex",
        gap: 32
      }}>
          <Step variant="number" value={1} color="primary" size="m" orientation="horizontal" label="Заголовок" description="Описание шага" />
          <Step variant="number" value={2} color="secondary" size="m" orientation="horizontal" label="Заголовок" description="Описание шага" />
          <Step variant="number" value={3} status="disabled" size="m" orientation="horizontal" label="Заголовок" description="Описание шага" />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Caption variant="C1-Medium-Comp" as="span">Vertical</Caption>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
          <Step variant="number" value={1} color="primary" size="m" orientation="vertical" label="Заголовок" description="Описание шага" />
          <Step variant="number" value={2} color="secondary" size="m" orientation="vertical" label="Заголовок" description="Описание шага" />
          <Step variant="number" value={3} status="disabled" size="m" orientation="vertical" label="Заголовок" description="Описание шага" />
        </div>
      </div>
    </div>
}`,...(D=(h=o.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var S,I,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Все варианты",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 32,
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Caption variant="C1-Medium-Comp" as="span">Icon</Caption>
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Step variant="icon" status="done" size="m" />
          <Step variant="icon" status="failed" size="m" />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Caption variant="C1-Medium-Comp" as="span">Number</Caption>
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Step variant="number" value={2} color="primary" size="m" />
          <Step variant="number" value={2} color="secondary" size="m" />
          <Step variant="number" value={2} status="disabled" size="m" />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Caption variant="C1-Medium-Comp" as="span">Number + Badge</Caption>
        <div style={{
        display: "flex",
        gap: 12
      }}>
          <Step variant="number-badge" value={3} status="done" color="primary" size="m" />
          <Step variant="number-badge" value={3} status="failed" color="primary" size="m" />
          <Step variant="number-badge" value={3} status="disabled-done" size="m" />
          <Step variant="number-badge" value={3} status="disabled-failed" size="m" />
        </div>
      </div>
    </div>
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const q=["Default","IconVariant","NumberVariant","NumberBadgeVariant","WithText","AllVariants"];export{d as AllVariants,s as Default,r as IconVariant,l as NumberBadgeVariant,t as NumberVariant,o as WithText,q as __namedExportsOrder,O as default};
