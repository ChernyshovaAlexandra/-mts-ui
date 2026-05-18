import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{I as o}from"./InlineEdit-m-yGmKik.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconEdit--ReOD0mK.js";import"./createIcon-DXdYUD03.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./mixins-ib8c4tLP.js";import"./index-B66h-egn.js";/* empty css              */const P={title:"МТС/InlineEdit",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
**InlineEdit** — компонент для редактирования текста прямо на месте, без перехода на отдельную форму.

### Применение

Позволяет редактировать или создавать текстовый блок. Одновременно можно редактировать только одну строку в списке или таблице.

### Типы (\`showIcon\`)

Признак редактирования отображается в виде иконки карандаша:

| Тип | Поведение |
|---|---|
| \`showIcon={true}\` | **Icon On** — иконка видна всегда |
| \`showIcon={false}\` | **Icon Off** — иконка появляется только при наведении |

### Размеры

| Размер | Высота | Шрифт |
|---|---|---|
| \`s\` | 16px | 12px |
| \`m\` | 20px | 14px |
| \`l\` | 24px | 17px |

### Контекст фона (\`bg\`)

Определяет цвет подсветки при наведении, зависит от фона страницы:

| Значение | Hover фон | Когда использовать |
|---|---|---|
| \`primary\` | \`#E6E9F0\` | На белом фоне страницы |
| \`secondary\` | \`#FFFFFF\` | На сером фоне секции |
| \`ghost\` | Прозрачный | На цветном или кастомном фоне |

### Управление

- **Клик** — активирует режим редактирования
- **Enter** — сохраняет значение
- **Escape** — отменяет изменения и восстанавливает исходное значение
- **Blur** — сохраняет значение
        `}}},argTypes:{value:{description:"Текущее значение.",control:"text"},placeholder:{description:"Плейсхолдер, когда значение пустое.",control:"text"},size:{description:"Размер компонента.",control:"radio",options:["s","m","l"]},bg:{description:"Контекст фона — влияет на цвет hover-подсветки.",control:"radio",options:["primary","secondary","ghost"]},showIcon:{description:"Icon On — иконка видна всегда. Icon Off — только при наведении.",control:"boolean"},disabled:{description:"Отключает редактирование.",control:"boolean"},onSave:{action:"saved"},onCancel:{action:"cancelled"},onChange:{action:"changed"},style:{control:!1},className:{control:!1}}},O=n=>{const[s,r]=l.useState("Inline Edit");return e.jsx(o,{...n,value:s,onChange:r})},i={name:"Default",render:n=>e.jsx(O,{...n}),args:{size:"m",bg:"primary",showIcon:!0}},c={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Три размера: **16 Small**, **20 Medium**, **24 Large**."}}},render:()=>{const n=({size:s,label:r})=>{const[a,t]=l.useState("Inline Edit");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:r}),e.jsx(o,{size:s,value:a,onChange:t})]})};return e.jsxs("div",{style:{display:"flex",gap:40,alignItems:"flex-start"},children:[e.jsx(n,{size:"s",label:"16 Small"}),e.jsx(n,{size:"m",label:"20 Medium"}),e.jsx(n,{size:"l",label:"24 Large"})]})}},d={name:"Icon On / Icon Off",parameters:{controls:{disable:!0},docs:{description:{story:"**Icon On** — иконка карандаша видна всегда. **Icon Off** — появляется только при наведении."}}},render:()=>{const n=({showIcon:s,label:r})=>{const[a,t]=l.useState("Inline Edit");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:r}),e.jsx(o,{showIcon:s,value:a,onChange:t})]})};return e.jsxs("div",{style:{display:"flex",gap:48,alignItems:"flex-start"},children:[e.jsx(n,{showIcon:!0,label:"Icon On"}),e.jsx(n,{showIcon:!1,label:"Icon Off"})]})}},p={name:"Контекст фона",parameters:{controls:{disable:!0},docs:{description:{story:"Hover-подсветка меняется в зависимости от фона страницы."}}},render:()=>{const n=({bg:s,bgColor:r,label:a})=>{const[t,C]=l.useState("Inline Edit");return e.jsxs("div",{style:{background:r,padding:"16px 20px",borderRadius:12,display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:a}),e.jsx(o,{bg:s,value:t,onChange:C})]})};return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(n,{bg:"primary",bgColor:"#FFFFFF",label:"Primary Bg"}),e.jsx(n,{bg:"secondary",bgColor:"#F2F3F7",label:"Secondary Bg"}),e.jsx(n,{bg:"ghost",bgColor:"#1D2023",label:"Ghost"})]})}},m={name:"Пустое значение",render:n=>{const[s,r]=l.useState("");return e.jsx(o,{...n,value:s,onChange:r})},args:{size:"m",placeholder:"Введите текст",showIcon:!0},parameters:{docs:{description:{story:"Когда значение пустое — отображается плейсхолдер серым цветом."}}}};var u,g,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  render: args => <Controlled {...args} />,
  args: {
    size: "m",
    bg: "primary",
    showIcon: true
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Три размера: **16 Small**, **20 Medium**, **24 Large**."
      }
    }
  },
  render: () => {
    const SizeDemo = ({
      size,
      label
    }: {
      size: "s" | "m" | "l";
      label: string;
    }) => {
      const [value, setValue] = useState("Inline Edit");
      return <div style={{
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
        }}>{label}</span>
          <InlineEdit size={size} value={value} onChange={setValue} />
        </div>;
    };
    return <div style={{
      display: "flex",
      gap: 40,
      alignItems: "flex-start"
    }}>
        <SizeDemo size="s" label="16 Small" />
        <SizeDemo size="m" label="20 Medium" />
        <SizeDemo size="l" label="24 Large" />
      </div>;
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,h,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Icon On / Icon Off",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "**Icon On** — иконка карандаша видна всегда. **Icon Off** — появляется только при наведении."
      }
    }
  },
  render: () => {
    const Demo = ({
      showIcon,
      label
    }: {
      showIcon: boolean;
      label: string;
    }) => {
      const [value, setValue] = useState("Inline Edit");
      return <div style={{
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
        }}>{label}</span>
          <InlineEdit showIcon={showIcon} value={value} onChange={setValue} />
        </div>;
    };
    return <div style={{
      display: "flex",
      gap: 48,
      alignItems: "flex-start"
    }}>
        <Demo showIcon label="Icon On" />
        <Demo showIcon={false} label="Icon Off" />
      </div>;
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,F,z;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Контекст фона",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Hover-подсветка меняется в зависимости от фона страницы."
      }
    }
  },
  render: () => {
    const Demo = ({
      bg,
      bgColor,
      label
    }: {
      bg: "primary" | "secondary" | "ghost";
      bgColor: string;
      label: string;
    }) => {
      const [value, setValue] = useState("Inline Edit");
      return <div style={{
        background: bgColor,
        padding: "16px 20px",
        borderRadius: 12,
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
        }}>{label}</span>
          <InlineEdit bg={bg} value={value} onChange={setValue} />
        </div>;
    };
    return <div style={{
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }}>
        <Demo bg="primary" bgColor="#FFFFFF" label="Primary Bg" />
        <Demo bg="secondary" bgColor="#F2F3F7" label="Secondary Bg" />
        <Demo bg="ghost" bgColor="#1D2023" label="Ghost" />
      </div>;
  }
}`,...(z=(F=p.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var D,j,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Пустое значение",
  render: args => {
    const [value, setValue] = useState("");
    return <InlineEdit {...args} value={value} onChange={setValue} />;
  },
  args: {
    size: "m",
    placeholder: "Введите текст",
    showIcon: true
  },
  parameters: {
    docs: {
      description: {
        story: "Когда значение пустое — отображается плейсхолдер серым цветом."
      }
    }
  }
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const W=["Default","Sizes","IconOnOff","Backgrounds","Empty"];export{p as Backgrounds,i as Default,m as Empty,d as IconOnOff,c as Sizes,W as __namedExportsOrder,P as default};
