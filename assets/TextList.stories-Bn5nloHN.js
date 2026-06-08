import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as se}from"./Header-2Snyan4B.js";import{T as p}from"./Text-2zki5lTF.js";import{p as i,y as a}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as ne}from"./mixins-CTkzXf3m.js";import{U as ae,q as Z,Q as g,O as de,P as j,h as pe}from"./index-CWlbk4Hf.js";/* empty css              */import"./index-yBjzXJbu.js";import"./style-afSt-2-G.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const ue={desktop:40,mobile:36},S=a.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  gap: ${({$type:r})=>r==="subtitle"?0:12}px;
  ${({$type:r,$view:l})=>r!=="title"&&r!=="paragraph"&&i`
      padding-left: ${ue[l]}px;
    `}
  ${ne};
`,ce={default:i`
    background: ${pe};
    color: ${g};
  `,red:i`
    background: ${Z};
    color: ${j};
  `,dark:i`
    background: ${g};
    color: ${j};
  `},me=a.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: ${de};
  font-family: "MTS Compact", sans-serif;
  font-weight: 700;
  ${({$color:r})=>ce[r]};
  ${({$view:r})=>r==="desktop"?i`
          width: 28px;
          height: 28px;
          font-size: 17px;
          line-height: 24px;
        `:i`
          width: 24px;
          height: 24px;
          font-size: 14px;
          line-height: 20px;
        `}
`,ee={default:g,red:Z,tertiary:ae},xe=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({$view:r})=>r==="desktop"?i`
          width: 28px;
          height: 28px;
        `:i`
          width: 24px;
          height: 24px;
        `}
`,be=a.span`
  display: block;
  border-radius: 50%;
  background: ${({$color:r})=>ee[r]};
  ${({$view:r})=>r==="desktop"?i`
          width: 8px;
          height: 8px;
        `:i`
          width: 6px;
          height: 6px;
        `}
`,ye=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4px;
  min-width: 4px;
  height: 20px;
  flex-shrink: 0;
`,ke=a.span`
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({$color:r})=>ee[r]};
`,he=a.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1 0 0;
  ${({$view:r})=>r==="desktop"&&i`
      padding: 2px 0;
    `}
`,d={flex:"1 0 0",minWidth:0,wordBreak:"break-word"},t=({type:r="title",view:l="desktop",text:n="Text",number:te=1,marker:re="number",numberColor:le="default",bulletColor:T="default",leftSlot:ie,className:f,style:w})=>{if(r==="title"||r==="paragraph"){const oe=re==="bullet"?e.jsx(xe,{$view:l,children:e.jsx(be,{$view:l,$color:T})}):e.jsx(me,{$view:l,$color:le,children:te});return e.jsxs(S,{$type:r,$view:l,className:f,style:w,children:[ie??oe,e.jsx(he,{$view:l,children:r==="title"?l==="desktop"?e.jsx(se,{variant:"H4-Comp",as:"p",style:d,children:n}):e.jsx(p,{variant:"P3-Medium-Comp",style:d,children:n}):e.jsx(p,{variant:l==="desktop"?"P3-Regular-Comp":"P4-Regular-Comp",style:d,children:n})})]})}return r==="child"?e.jsxs(S,{$type:r,$view:l,className:f,style:w,children:[e.jsx(ye,{children:e.jsx(ke,{$color:T})}),e.jsx(p,{variant:l==="desktop"?"P3-Regular-Comp":"P4-Regular-Comp",style:d,children:n})]}):e.jsx(S,{$type:r,$view:l,className:f,style:w,children:e.jsx(p,{variant:l==="desktop"?"P3-Regular-Comp":"P4-Regular-Comp",style:d,children:n})})};t.__docgenInfo={description:"",methods:[],displayName:"TextList",props:{type:{required:!1,tsType:{name:"union",raw:'"title" | "subtitle" | "child" | "paragraph"',elements:[{name:"literal",value:'"title"'},{name:"literal",value:'"subtitle"'},{name:"literal",value:'"child"'},{name:"literal",value:'"paragraph"'}]},description:"",defaultValue:{value:'"title"',computed:!1}},view:{required:!1,tsType:{name:"union",raw:'"desktop" | "mobile"',elements:[{name:"literal",value:'"desktop"'},{name:"literal",value:'"mobile"'}]},description:"",defaultValue:{value:'"desktop"',computed:!1}},text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Text"',computed:!1}},number:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"1",computed:!1}},marker:{required:!1,tsType:{name:"union",raw:'"number" | "bullet"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"bullet"'}]},description:"",defaultValue:{value:'"number"',computed:!1}},numberColor:{required:!1,tsType:{name:"union",raw:'"default" | "red" | "dark"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"red"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},bulletColor:{required:!1,tsType:{name:"union",raw:'"default" | "red" | "tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"red"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leftSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Me={title:"МТС/TextList",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\n**TextList** — элемент списка-инструкции из дизайн-системы МТС. Используется для оформления\nмногоуровневых списков, инструкций, нумерованных шагов и буллетных перечислений.\n\nОдин экземпляр `TextList` — это **одна строка** списка. Полная инструкция собирается из нескольких\nTextList в общем контейнере (см. примеры ниже).\n\n---\n\n### Уровни (`type`)\n\n| Тип | Назначение | Слева | Типографика (Desktop / Mobile) |\n|---|---|---|---|\n| `title` | Заголовок шага | Нумерованный кружок или большая точка | H4 20/24 Medium / P3 17/24 Medium |\n| `subtitle` | Подзаголовок | — (только отступ) | P3 17/24 Regular / P4 14/20 Regular |\n| `child` | Пункт-буллет | Маленькая точка 4px | P3 17/24 Regular / P4 14/20 Regular |\n\nУровни `subtitle` и `child` имеют отступ слева, выравнивающий их под текст `title`:\n**40px** на Desktop и **36px** на Mobile.\n\n---\n\n### Раскладки (`view`)\n\n| view | Когда использовать | Размер маркера title |\n|---|---|---|\n| `desktop` | Десктоп-вёрстка | 28×28px |\n| `mobile` | Мобильная вёрстка | 24×24px |\n\n---\n\n### Маркер заголовка (`marker`, только для `type="title"`)\n\n- `number` *(по умолчанию)* — нумерованный кружок. Цифра задаётся через `number`.\n- `bullet` — увеличенная точка (8px desktop / 6px mobile) в боксе того же размера, что и кружок.\n\n### Цветовые варианты\n\n`numberColor` (для `marker="number"`):\n\n| Цвет | Фон | Текст |\n|---|---|---|\n| `default` | `mts_bg_lower` (#F2F3F7) | `mts_text_primary` |\n| `red` | `mts_brand_red` | `mts_text_inverted` |\n| `dark` | `mts_text_primary` | `mts_text_inverted` |\n\n`bulletColor` (для `marker="bullet"` и `type="child"`):\n\n| Цвет | Заливка |\n|---|---|\n| `default` | `mts_text_primary` |\n| `red` | `mts_brand_red` |\n| `tertiary` | `mts_text_tertiary` |\n\n---\n\n### Кастомизация\n\n- `number` — содержимое внутри кружка (число, символ или React-нода).\n- `leftSlot` — полностью заменяет левый маркер на любую ноду (иконка, чекбокс и т.п.).\n- `text` — содержимое правой части. Принимает строку или React-ноду (для inline-форматирования).\n- `className` / `style` — для дополнительных стилей корневого контейнера.\n\n---\n\n### Когда использовать\n\n- Пошаговые инструкции (онбординг, FAQ, документация).\n- Иерархические перечни требований/условий (тарифы, ограничения).\n- Маркированные списки внутри карточек и модалок.\n\nДля большинства интерфейсных списков, не относящихся к инструкциям-объяснениям, используйте\nобычный `<ul>` / `<ol>` либо специализированные компоненты (`Cell`, `Steps`).\n\n---\n\n### Композиция (вне компонента)\n\n`TextList` намеренно не управляет вертикальными отступами между строками. Оборачивайте список\nв flex/grid контейнер с нужным `gap` — типовые значения **8px** между `child` и **12–16px** перед\nследующим `title`.\n'}}},argTypes:{type:{description:"Уровень строки в списке.",control:"radio",options:["title","subtitle","child"]},view:{description:"Раскладка: десктоп или мобилка. Меняет типографику и размер маркера.",control:"radio",options:["desktop","mobile"]},marker:{description:"Маркер для `title`: нумерованный кружок (`number`) или увеличенная точка (`bullet`). Игнорируется для других типов.",control:"radio",options:["number","bullet"]},numberColor:{description:'Цвет нумерованного кружка. Работает при `marker="number"`.',control:"radio",options:["default","red","dark"]},bulletColor:{description:'Цвет точки. Работает для `marker="bullet"` (title) и для `type="child"`.',control:"radio",options:["default","red","tertiary"]},text:{description:"Текст или ReactNode правой части.",control:"text"},number:{description:"Содержимое нумерованного кружка. По умолчанию `1`.",control:"text"},leftSlot:{description:"Полностью заменяет автоматический маркер слева. Используется для кастомных иконок или индикаторов.",control:!1},style:{control:!1},className:{control:!1}}},o=({children:r})=>e.jsx("span",{style:{fontSize:11,color:"#969FA8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:r}),s=({children:r,gap:l=12,width:n=600})=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:l,width:n},children:r}),u={name:"Playground",args:{type:"title",view:"desktop",marker:"number",numberColor:"default",bulletColor:"default",number:1,text:"Text"}},c={name:"Title — Number",parameters:{controls:{disable:!0},docs:{description:{story:"Заголовок с нумерованным кружком. Три цветовых варианта × две раскладки."}}},render:()=>e.jsxs(s,{children:[e.jsx(o,{children:"Default"}),e.jsx(t,{type:"title",view:"desktop",numberColor:"default",number:1,text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",numberColor:"default",number:1,text:"Mobile"}),e.jsx(o,{children:"Red"}),e.jsx(t,{type:"title",view:"desktop",numberColor:"red",number:1,text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",numberColor:"red",number:1,text:"Mobile"}),e.jsx(o,{children:"Dark"}),e.jsx(t,{type:"title",view:"desktop",numberColor:"dark",number:1,text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",numberColor:"dark",number:1,text:"Mobile"})]})},m={name:"Title — Bullet",parameters:{controls:{disable:!0},docs:{description:{story:"Заголовок с увеличенной точкой вместо номера. Используется для ненумерованных шагов одного уровня."}}},render:()=>e.jsxs(s,{children:[e.jsx(o,{children:"Default (primary)"}),e.jsx(t,{type:"title",view:"desktop",marker:"bullet",bulletColor:"default",text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",marker:"bullet",bulletColor:"default",text:"Mobile"}),e.jsx(o,{children:"Red"}),e.jsx(t,{type:"title",view:"desktop",marker:"bullet",bulletColor:"red",text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",marker:"bullet",bulletColor:"red",text:"Mobile"}),e.jsx(o,{children:"Tertiary"}),e.jsx(t,{type:"title",view:"desktop",marker:"bullet",bulletColor:"tertiary",text:"Desktop"}),e.jsx(t,{type:"title",view:"mobile",marker:"bullet",bulletColor:"tertiary",text:"Mobile"})]})},x={name:"Subtitle",parameters:{controls:{disable:!0},docs:{description:{story:"Подзаголовок без маркера, но с отступом, выравнивающим его под текст title. Используется как пояснение под заголовком."}}},render:()=>e.jsxs(s,{children:[e.jsx(t,{type:"subtitle",view:"desktop",text:"Subtitle on desktop"}),e.jsx(t,{type:"subtitle",view:"mobile",text:"Subtitle on mobile"})]})},b={name:"Child",parameters:{controls:{disable:!0},docs:{description:{story:"Пункт-буллет третьего уровня. Маленькая точка 4px, цвета — те же, что у title bullet."}}},render:()=>e.jsxs(s,{children:[e.jsx(o,{children:"Default (primary)"}),e.jsx(t,{type:"child",view:"desktop",bulletColor:"default",text:"Desktop"}),e.jsx(t,{type:"child",view:"mobile",bulletColor:"default",text:"Mobile"}),e.jsx(o,{children:"Red"}),e.jsx(t,{type:"child",view:"desktop",bulletColor:"red",text:"Desktop"}),e.jsx(t,{type:"child",view:"mobile",bulletColor:"red",text:"Mobile"}),e.jsx(o,{children:"Tertiary"}),e.jsx(t,{type:"child",view:"desktop",bulletColor:"tertiary",text:"Desktop"}),e.jsx(t,{type:"child",view:"mobile",bulletColor:"tertiary",text:"Mobile"})]})},y={name:"Инструкция — Desktop",parameters:{controls:{disable:!0},docs:{description:{story:"Типовой пример сборки многоуровневой инструкции на десктопе. Между строками — gap контейнера."}}},render:()=>e.jsxs(s,{gap:12,width:600,children:[e.jsx(t,{type:"title",view:"desktop",number:1,text:"Откройте приложение МТС"}),e.jsx(t,{type:"subtitle",view:"desktop",text:"Понадобится последняя версия из стора"}),e.jsx(t,{type:"child",view:"desktop",text:"iOS — App Store"}),e.jsx(t,{type:"child",view:"desktop",text:"Android — RuStore или Google Play"}),e.jsx(t,{type:"title",view:"desktop",number:2,text:"Перейдите в раздел «Профиль»"}),e.jsx(t,{type:"subtitle",view:"desktop",text:"Нижняя панель навигации, крайняя справа"}),e.jsx(t,{type:"title",view:"desktop",number:3,text:"Нажмите «Подключить услугу»"})]})},k={name:"Инструкция — Mobile",parameters:{controls:{disable:!0},docs:{description:{story:"Та же инструкция в мобильной раскладке: меньшие маркеры, P4 14/20 для тела."}}},render:()=>e.jsxs(s,{gap:12,width:360,children:[e.jsx(t,{type:"title",view:"mobile",number:1,text:"Откройте приложение МТС"}),e.jsx(t,{type:"subtitle",view:"mobile",text:"Понадобится последняя версия из стора"}),e.jsx(t,{type:"child",view:"mobile",text:"iOS — App Store"}),e.jsx(t,{type:"child",view:"mobile",text:"Android — RuStore или Google Play"}),e.jsx(t,{type:"title",view:"mobile",number:2,text:"Перейдите в раздел «Профиль»"}),e.jsx(t,{type:"subtitle",view:"mobile",text:"Нижняя панель навигации, крайняя справа"}),e.jsx(t,{type:"title",view:"mobile",number:3,text:"Нажмите «Подключить услугу»"})]})},h={name:"Смешанные маркеры",parameters:{controls:{disable:!0},docs:{description:{story:"Комбинация number и bullet title в одном списке — для выделения акцентных шагов."}}},render:()=>e.jsxs(s,{gap:12,width:600,children:[e.jsx(t,{type:"title",view:"desktop",number:1,text:"Стандартный шаг"}),e.jsx(t,{type:"child",view:"desktop",text:"Подпункт"}),e.jsx(t,{type:"title",view:"desktop",marker:"bullet",bulletColor:"red",text:"Важно! Не пропустите этот шаг"}),e.jsx(t,{type:"child",view:"desktop",bulletColor:"red",text:"Критический подпункт"}),e.jsx(t,{type:"title",view:"desktop",number:2,text:"Следующий шаг"})]})},v={name:"Кастомный leftSlot",parameters:{controls:{disable:!0},docs:{description:{story:"Левый маркер можно полностью заменить через `leftSlot` — например, на иконку, чекбокс или произвольный индикатор. Размер слота должен быть 28×28 (desktop) / 24×24 (mobile) для корректного выравнивания."}}},render:()=>e.jsxs(s,{gap:12,width:600,children:[e.jsx(t,{type:"title",view:"desktop",text:"С эмодзи вместо номера",leftSlot:e.jsx("div",{style:{width:28,height:28,display:"grid",placeItems:"center",fontSize:20},children:"✨"})}),e.jsx(t,{type:"title",view:"desktop",text:"С галочкой",leftSlot:e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#26CD58",color:"#fff",display:"grid",placeItems:"center",fontSize:16,fontWeight:700},children:"✓"})})]})};var C,L,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    type: "title",
    view: "desktop",
    marker: "number",
    numberColor: "default",
    bulletColor: "default",
    number: 1,
    text: "Text"
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var D,M,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Title — Number",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Заголовок с нумерованным кружком. Три цветовых варианта × две раскладки."
      }
    }
  },
  render: () => <Stack>
      <SectionLabel>Default</SectionLabel>
      <TextList type="title" view="desktop" numberColor="default" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="default" number={1} text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="title" view="desktop" numberColor="red" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="red" number={1} text="Mobile" />
      <SectionLabel>Dark</SectionLabel>
      <TextList type="title" view="desktop" numberColor="dark" number={1} text="Desktop" />
      <TextList type="title" view="mobile" numberColor="dark" number={1} text="Mobile" />
    </Stack>
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,P,N;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Title — Bullet",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Заголовок с увеличенной точкой вместо номера. Используется для ненумерованных шагов одного уровня."
      }
    }
  },
  render: () => <Stack>
      <SectionLabel>Default (primary)</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="default" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="default" text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="red" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="red" text="Mobile" />
      <SectionLabel>Tertiary</SectionLabel>
      <TextList type="title" view="desktop" marker="bullet" bulletColor="tertiary" text="Desktop" />
      <TextList type="title" view="mobile" marker="bullet" bulletColor="tertiary" text="Mobile" />
    </Stack>
}`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var q,A,B;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Subtitle",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Подзаголовок без маркера, но с отступом, выравнивающим его под текст title. Используется как пояснение под заголовком."
      }
    }
  },
  render: () => <Stack>
      <TextList type="subtitle" view="desktop" text="Subtitle on desktop" />
      <TextList type="subtitle" view="mobile" text="Subtitle on mobile" />
    </Stack>
}`,...(B=(A=x.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,z,V;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Child",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Пункт-буллет третьего уровня. Маленькая точка 4px, цвета — те же, что у title bullet."
      }
    }
  },
  render: () => <Stack>
      <SectionLabel>Default (primary)</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="default" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="default" text="Mobile" />
      <SectionLabel>Red</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="red" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="red" text="Mobile" />
      <SectionLabel>Tertiary</SectionLabel>
      <TextList type="child" view="desktop" bulletColor="tertiary" text="Desktop" />
      <TextList type="child" view="mobile" bulletColor="tertiary" text="Mobile" />
    </Stack>
}`,...(V=(z=b.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var F,O,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Инструкция — Desktop",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Типовой пример сборки многоуровневой инструкции на десктопе. Между строками — gap контейнера."
      }
    }
  },
  render: () => <Stack gap={12} width={600}>
      <TextList type="title" view="desktop" number={1} text="Откройте приложение МТС" />
      <TextList type="subtitle" view="desktop" text="Понадобится последняя версия из стора" />
      <TextList type="child" view="desktop" text="iOS — App Store" />
      <TextList type="child" view="desktop" text="Android — RuStore или Google Play" />
      <TextList type="title" view="desktop" number={2} text="Перейдите в раздел «Профиль»" />
      <TextList type="subtitle" view="desktop" text="Нижняя панель навигации, крайняя справа" />
      <TextList type="title" view="desktop" number={3} text="Нажмите «Подключить услугу»" />
    </Stack>
}`,...(W=(O=y.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,H,E;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Инструкция — Mobile",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Та же инструкция в мобильной раскладке: меньшие маркеры, P4 14/20 для тела."
      }
    }
  },
  render: () => <Stack gap={12} width={360}>
      <TextList type="title" view="mobile" number={1} text="Откройте приложение МТС" />
      <TextList type="subtitle" view="mobile" text="Понадобится последняя версия из стора" />
      <TextList type="child" view="mobile" text="iOS — App Store" />
      <TextList type="child" view="mobile" text="Android — RuStore или Google Play" />
      <TextList type="title" view="mobile" number={2} text="Перейдите в раздел «Профиль»" />
      <TextList type="subtitle" view="mobile" text="Нижняя панель навигации, крайняя справа" />
      <TextList type="title" view="mobile" number={3} text="Нажмите «Подключить услугу»" />
    </Stack>
}`,...(E=(H=k.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var Q,U,J;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Смешанные маркеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Комбинация number и bullet title в одном списке — для выделения акцентных шагов."
      }
    }
  },
  render: () => <Stack gap={12} width={600}>
      <TextList type="title" view="desktop" number={1} text="Стандартный шаг" />
      <TextList type="child" view="desktop" text="Подпункт" />
      <TextList type="title" view="desktop" marker="bullet" bulletColor="red" text="Важно! Не пропустите этот шаг" />
      <TextList type="child" view="desktop" bulletColor="red" text="Критический подпункт" />
      <TextList type="title" view="desktop" number={2} text="Следующий шаг" />
    </Stack>
}`,...(J=(U=h.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,X,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Кастомный leftSlot",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Левый маркер можно полностью заменить через \`leftSlot\` — например, на иконку, чекбокс или произвольный индикатор. Размер слота должен быть 28×28 (desktop) / 24×24 (mobile) для корректного выравнивания."
      }
    }
  },
  render: () => <Stack gap={12} width={600}>
      <TextList type="title" view="desktop" text="С эмодзи вместо номера" leftSlot={<div style={{
      width: 28,
      height: 28,
      display: "grid",
      placeItems: "center",
      fontSize: 20
    }}>
            ✨
          </div>} />
      <TextList type="title" view="desktop" text="С галочкой" leftSlot={<div style={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#26CD58",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 16,
      fontWeight: 700
    }}>
            ✓
          </div>} />
    </Stack>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const _e=["Default","TitleNumber","TitleBullet","Subtitle","Child","InstructionDesktop","InstructionMobile","MixedMarkers","CustomLeftSlot"];export{b as Child,v as CustomLeftSlot,u as Default,y as InstructionDesktop,k as InstructionMobile,h as MixedMarkers,x as Subtitle,m as TitleBullet,c as TitleNumber,_e as __namedExportsOrder,Me as default};
