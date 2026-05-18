import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as k}from"./index-Dx_1l3Sb.js";import{y as m}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as q}from"./mixins-ib8c4tLP.js";import{S as g,C as L}from"./Step-DLp7eGet.js";import{D as N}from"./Divider-BhJnfEVy.js";import{C as d}from"./Caption-C1APNMb6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";import"./index-B66h-egn.js";/* empty css              */import"./Text-BGtrDhtg.js";import"./style-CYyl-vEM.js";m.div`
  display: grid;
  grid-template-columns: ${({$cols:n})=>n};
  align-items: center;
  ${q};
`;m.div`
  display: grid;
  grid-template-columns: ${({$cols:n})=>n};
  margin-top: 12px;
`;const $=m.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${q};
`,O=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`,t=({steps:n,orientation:X="horizontal",size:i="m",color:v="primary",dividerLength:w,className:f,style:x})=>{if(X==="vertical"){const r=L[i]/2;return e.jsx($,{className:f,style:x,children:n.map((a,y)=>{const W=y===n.length-1,S=e.jsx(g,{variant:a.variant??"number",value:a.value,status:a.status,color:a.color??v,size:i,orientation:"vertical",label:a.label,description:a.description});return W?e.jsx(k.Fragment,{children:S},y):e.jsxs(O,{children:[S,e.jsx(N,{orientation:"vertical",padding:12,style:{marginLeft:r-.5,flex:"1 0 0",height:i==="m"?48:32}})]},y)})})}return e.jsx("div",{className:f,style:{display:"inline-flex",alignItems:"flex-start",...x},children:n.map((r,a)=>e.jsx(g,{variant:r.variant??"number",value:r.value,status:r.status,color:r.color??v,size:i,orientation:"horizontal",withDivider:a<n.length-1,dividerLength:w,label:r.label,description:r.description},a))})};t.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},dividerLength:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ie={title:"МТС/Steps",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Steps** — индикатор прогресса по шагам на основе `Step` и `Divider`.\n\nШаги и разделитель всегда выровнены по центру круга. Паддинг дивайдера — 12px.\n\n### Props\n\n| Prop | Тип | Описание |\n|---|---|---|\n| `steps` | `StepItem[]` | Массив шагов |\n| `orientation` | `"horizontal" \\| "vertical"` | Направление |\n| `size` | `"s" \\| "m"` | Размер кружков |\n| `color` | `"primary" \\| "secondary"` | Цвет по умолчанию |\n\n### StepItem\n\n| Поле | Тип | Описание |\n|---|---|---|\n| `variant` | `"icon" \\| "number" \\| "number-badge"` | Вариант круга (по умолчанию `number`) |\n| `value` | `number` | Цифра внутри |\n| `status` | `StepStatus` | Статус шага |\n| `color` | `"primary" \\| "secondary"` | Цвет, перекрывает общий |\n| `label` | `string` | Заголовок |\n| `description` | `string` | Подпись |\n        '}}},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},size:{control:"radio",options:["s","m"]},color:{control:"radio",options:["primary","secondary"]},steps:{control:!1},style:{control:!1},className:{control:!1}}},u=[{value:1,status:"done",label:"Личные данные",description:"Имя и контакты"},{value:2,status:"done",label:"Адрес доставки",description:"Куда привезти"},{value:3,status:"active",label:"Оплата",description:"Выберите способ"},{value:4,status:"default",label:"Подтверждение",description:"Проверьте заказ"}],A=[{value:1,status:"done"},{value:2,status:"done"},{value:3,status:"active"},{value:4,status:"default"}],s={name:"Default",args:{steps:u,orientation:"horizontal",size:"m",color:"primary"}},o={name:"Horizontal",parameters:{controls:{disable:!0},docs:{description:{story:"С текстом и без текста, размеры S и M."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:48},children:["m","s"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(d,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:[n," — с текстом"]}),e.jsx(t,{steps:u,orientation:"horizontal",size:n,color:"primary"}),e.jsxs(d,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:[n," — без текста"]}),e.jsx(t,{steps:A,orientation:"horizontal",size:n,color:"primary"})]},n))})},l={name:"Vertical",parameters:{controls:{disable:!0},docs:{description:{story:"С текстом и без текста, размеры S и M."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:80},children:["m","s"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(d,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:n}),e.jsx(t,{steps:u,orientation:"vertical",size:n,color:"primary"})]},n))})},c={name:"Primary / Secondary",parameters:{controls:{disable:!0},docs:{description:{story:"Активный шаг: **Primary** — красный МТС, **Secondary** — тёмный."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:["primary","secondary"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(d,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"capitalize"},children:n}),e.jsx(t,{steps:u,orientation:"horizontal",size:"m",color:n})]},n))})},p={name:"Icon variant",parameters:{controls:{disable:!0},docs:{description:{story:"Шаги с иконками вместо цифр."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:e.jsx(t,{orientation:"horizontal",size:"m",steps:[{variant:"icon",status:"done",label:"Готово",description:"Завершён"},{variant:"icon",status:"done",label:"Готово",description:"Завершён"},{variant:"icon",status:"failed",label:"Ошибка",description:"Не удалось"},{variant:"icon",status:"done",label:"Готово",description:"Завершён"}]})})};var T,h,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Default",
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary"
  }
}`,...(z=(h=s.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var b,C,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Horizontal",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "С текстом и без текста, размеры S и M."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 48
  }}>
      {(["m", "s"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "uppercase"
      }}>{size} — с текстом</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="horizontal" size={size} color="primary" />
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "uppercase"
      }}>{size} — без текста</Caption>
          <Steps steps={STEPS_NO_TEXT} orientation="horizontal" size={size} color="primary" />
        </div>)}
    </div>
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var D,_,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Vertical",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "С текстом и без текста, размеры S и M."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 80
  }}>
      {(["m", "s"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "uppercase"
      }}>{size}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="vertical" size={size} color="primary" />
        </div>)}
    </div>
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,P,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Primary / Secondary",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Активный шаг: **Primary** — красный МТС, **Secondary** — тёмный."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      {(["primary", "secondary"] as const).map(color => <div key={color} style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "capitalize"
      }}>{color}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="horizontal" size="m" color={color} />
        </div>)}
    </div>
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var V,H,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Icon variant",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Шаги с иконками вместо цифр."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <Steps orientation="horizontal" size="m" steps={[{
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }, {
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }, {
      variant: "icon",
      status: "failed",
      label: "Ошибка",
      description: "Не удалось"
    }, {
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }]} />
    </div>
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const se=["Default","Horizontal","Vertical","PrimarySecondary","IconVariant"];export{s as Default,o as Horizontal,p as IconVariant,c as PrimarySecondary,l as Vertical,se as __namedExportsOrder,ie as default};
