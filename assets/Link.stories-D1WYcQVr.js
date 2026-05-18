import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as n}from"./Link-D44uTzGf.js";import{I as A}from"./IconDate-BrvuUuHU.js";import{I as S}from"./IconLeft-C3XBBr1z.js";import{g as F}from"./index-B66h-egn.js";import"./index-yBjzXJbu.js";import"./style-Cn7-W3gz.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./IconOut-BVbMsUOi.js";const U={title:"МТС/Link",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Link** — текстовая ссылка. Поддерживает навигацию через `href` или React Router, несколько визуальных вариантов и цветовых тем.\n\n### Навигация\n\n| Проп | Когда использовать |\n|---|---|\n| `url` | Обычная HTML-ссылка (`href`) |\n| `to` | React Router — рендерит `<RouterLink>` без перезагрузки страницы |\n\n### Варианты (`variant`)\n\n| Значение | Описание |\n|---|---|\n| `default` | Без подчёркивания, подчёркивание появляется при hover |\n| `straight-line` | Всегда подчёркнут сплошной линией, убирается при hover |\n| `dotted-line` | Подчёркнут пунктиром |\n| `external` | Автоматически добавляет иконку →, открывает в новой вкладке с `rel="noopener noreferrer"` |\n| `icon-right` | Произвольная иконка справа от текста |\n| `icon-left` | Произвольная иконка слева от текста |\n\n### Темы (`theme`)\n\n| Значение | Цвет | Когда использовать |\n|---|---|---|\n| `primary` | Синий `#0070E5` | Основная ссылка на светлом фоне |\n| `secondary` | Серый `#626C77` | Второстепенная ссылка |\n| `black` | Тёмный `#1D2023` | В навигации и меню |\n| `white` | Белый `#FAFAFA` | На тёмном фоне |\n        '}}},argTypes:{variant:{description:"Визуальный стиль ссылки.",control:"select",options:["default","straight-line","dotted-line","external","icon-right","icon-left"]},theme:{description:"Цветовая тема. Определяет цвет текста.",control:"select",options:["primary","secondary","black","white"]},url:{description:"Адрес ссылки — рендерит обычный `<a href>`. Используйте `to` для React Router.",control:"text"},to:{description:"Путь для React Router (`<RouterLink to>`). Не вызывает перезагрузку страницы.",control:"text"},underlined:{description:"Принудительно добавляет постоянное подчёркивание (для `default`-варианта).",control:"boolean"},icon:{description:"Иконка для вариантов `icon-right` и `icon-left`.",control:!1},type:{description:"`menuItem` — добавляет анимацию подчёркивания снизу при hover, как в пунктах меню.",control:"radio",options:["link","menuItem"]},children:{control:"text"},style:{control:!1}}},T=({children:r})=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:32,flexWrap:"wrap"},children:r}),t=({text:r})=>e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",minWidth:100},children:r}),i={name:"Default",args:{url:"#",children:"Ссылка",variant:"default",theme:"primary"}},a={name:"Все варианты",parameters:{controls:{disable:!0},docs:{description:{story:"Все визуальные варианты ссылки с темой `primary`."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{variant:"default",label:"default",icon:void 0},{variant:"straight-line",label:"straight-line",icon:void 0},{variant:"dotted-line",label:"dotted-line",icon:void 0},{variant:"external",label:"external",icon:void 0},{variant:"icon-right",label:"icon-right",icon:e.jsx(A,{width:16,height:16})},{variant:"icon-left",label:"icon-left",icon:e.jsx(S,{width:16,height:16})}].map(({variant:r,label:_,icon:E})=>e.jsxs(T,{children:[e.jsx(t,{text:_}),e.jsx(n,{url:"#",variant:r,theme:"primary",icon:E,children:"Текст ссылки"})]},r))})},o={name:"Все темы",parameters:{controls:{disable:!0},docs:{description:{story:"Цветовые темы. `white` используется на тёмном фоне."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{padding:"16px 24px",background:"#fff",borderRadius:12,display:"flex",gap:32,alignItems:"center"},children:[e.jsx(t,{text:"primary"}),e.jsx(n,{url:"#",theme:"primary",children:"Ссылка"}),e.jsx(t,{text:"secondary"}),e.jsx(n,{url:"#",theme:"secondary",children:"Ссылка"}),e.jsx(t,{text:"black"}),e.jsx(n,{url:"#",theme:"black",children:"Ссылка"})]}),e.jsxs("div",{style:{padding:"16px 24px",background:F,borderRadius:12,display:"flex",gap:32,alignItems:"center"},children:[e.jsx(t,{text:"white"}),e.jsx(n,{url:"#",theme:"white",children:"Ссылка"})]})]})},s={name:"Внешняя ссылка",args:{url:"https://mts.ru",children:"Перейти на сайт МТС",variant:"external",theme:"primary"},parameters:{docs:{description:{story:'Автоматически открывается в новой вкладке. Добавляет `rel="noopener noreferrer"` для безопасности.'}}}},l={name:"С иконками",parameters:{controls:{disable:!0},docs:{description:{story:"Произвольная иконка слева или справа от текста."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{url:"#",variant:"icon-left",theme:"primary",icon:e.jsx(S,{width:16,height:16}),children:"Назад"}),e.jsx(n,{url:"#",variant:"icon-right",theme:"primary",icon:e.jsx(A,{width:16,height:16}),children:"Выбрать дату"})]})},c={name:"Пункт меню",parameters:{controls:{disable:!0},docs:{description:{story:'`type="menuItem"` добавляет анимированное подчёркивание снизу при наведении — используется в навигационных меню.'}}},render:()=>e.jsxs("nav",{style:{display:"flex",gap:32},children:[e.jsx(n,{url:"#",type:"menuItem",theme:"black",children:"Главная"}),e.jsx(n,{url:"#",type:"menuItem",theme:"black",underlined:!0,children:"Каталог"}),e.jsx(n,{url:"#",type:"menuItem",theme:"black",children:"О компании"})]})};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Default",
  args: {
    url: "#",
    children: "Ссылка",
    variant: "default",
    theme: "primary"
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Все варианты",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Все визуальные варианты ссылки с темой \`primary\`."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      {[{
      variant: "default" as const,
      label: "default",
      icon: undefined
    }, {
      variant: "straight-line" as const,
      label: "straight-line",
      icon: undefined
    }, {
      variant: "dotted-line" as const,
      label: "dotted-line",
      icon: undefined
    }, {
      variant: "external" as const,
      label: "external",
      icon: undefined
    }, {
      variant: "icon-right" as const,
      label: "icon-right",
      icon: <IconDate width={16} height={16} />
    }, {
      variant: "icon-left" as const,
      label: "icon-left",
      icon: <IconLeft width={16} height={16} />
    }].map(({
      variant,
      label,
      icon
    }) => <Row key={variant}>
          <Label text={label} />
          <Link url="#" variant={variant} theme="primary" icon={icon}>
            Текст ссылки
          </Link>
        </Row>)}
    </div>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Все темы",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Цветовые темы. \`white\` используется на тёмном фоне."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <div style={{
      padding: "16px 24px",
      background: "#fff",
      borderRadius: 12,
      display: "flex",
      gap: 32,
      alignItems: "center"
    }}>
        <Label text="primary" /><Link url="#" theme="primary">Ссылка</Link>
        <Label text="secondary" /><Link url="#" theme="secondary">Ссылка</Link>
        <Label text="black" /><Link url="#" theme="black">Ссылка</Link>
      </div>
      <div style={{
      padding: "16px 24px",
      background: mts_bg_inverted,
      borderRadius: 12,
      display: "flex",
      gap: 32,
      alignItems: "center"
    }}>
        <Label text="white" /><Link url="#" theme="white">Ссылка</Link>
      </div>
    </div>
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,b,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Внешняя ссылка",
  args: {
    url: "https://mts.ru",
    children: "Перейти на сайт МТС",
    variant: "external",
    theme: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: "Автоматически открывается в новой вкладке. Добавляет \`rel=\\"noopener noreferrer\\"\` для безопасности."
      }
    }
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var L,j,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "С иконками",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Произвольная иконка слева или справа от текста."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Link url="#" variant="icon-left" theme="primary" icon={<IconLeft width={16} height={16} />}>
        Назад
      </Link>
      <Link url="#" variant="icon-right" theme="primary" icon={<IconDate width={16} height={16} />}>
        Выбрать дату
      </Link>
    </div>
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var w,R,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Пункт меню",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "\`type=\\"menuItem\\"\` добавляет анимированное подчёркивание снизу при наведении — используется в навигационных меню."
      }
    }
  },
  render: () => <nav style={{
    display: "flex",
    gap: 32
  }}>
      <Link url="#" type="menuItem" theme="black">Главная</Link>
      <Link url="#" type="menuItem" theme="black" underlined>Каталог</Link>
      <Link url="#" type="menuItem" theme="black">О компании</Link>
    </nav>
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const X=["Default","AllVariants","AllThemes","External","WithIcons","MenuItem"];export{o as AllThemes,a as AllVariants,i as Default,s as External,c as MenuItem,l as WithIcons,X as __namedExportsOrder,U as default};
