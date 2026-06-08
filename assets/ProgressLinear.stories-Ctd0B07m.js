import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as s}from"./ProgressLinear-B2CtFbL-.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CWlbk4Hf.js";import"./mixins-CTkzXf3m.js";const v={title:"МТС/ProgressLinear",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'\n**ProgressLinear** — линейный индикатор прогресса для отображения хода загрузки, обработки или выполнения задачи.\n\n### Размеры\n\n| Размер | Высота | Особенности |\n|---|---|---|\n| `s` | 4px | Минимальный, без текста внутри |\n| `m` | 8px | Основной размер по умолчанию |\n| `l` | 32px | Текст отображается внутри бара |\n\n### Типы\n\n| Тип | Цвет | Описание |\n|---|---|---|\n| `progress` | Зелёный | Идёт загрузка, известен процент |\n| `paused` | Жёлтый | Загрузка приостановлена |\n| `indeterminate` | Зелёный | Загрузка идёт, процент неизвестен — бегущая анимация |\n| `success` | Зелёный 100% | Загрузка завершена успешно |\n| `error` | Красный 100% | Ошибка загрузки |\n\n### Текст под баром\n\n- Для `progress` — передаётся через `label` (например `"25%"`)\n- Для `paused` — если `label` не задан, подставляется `pausedText` (по умолчанию `"Загрузка приостановлена"`)\n- Для `success` / `error` — текст и иконка отображаются автоматически (`successText`, `errorText`)\n- В размере `l` текст внутри бара выводится автоматически\n        '}}},argTypes:{type:{description:"Состояние прогресс-бара.",control:"radio",options:["progress","paused","indeterminate","success","error"]},size:{description:"Размер: `s` — 4px, `m` — 8px, `l` — 32px с текстом внутри.",control:"radio",options:["s","m","l"]},progress:{description:'Процент заполнения (0–100). Используется при `type="progress"` и `type="paused"`.',control:{type:"range",min:0,max:100,step:1}},label:{description:"Текст под баром для `progress`. Если не задан при `paused` — используется `pausedText`.",control:"text"},pausedText:{description:'Текст под баром при `type="paused"`, если `label` не задан.',control:"text"},successText:{description:"Текст при успехе. В размере `m`/`s` — под баром с иконкой. В `l` — внутри бара.",control:"text"},errorText:{description:"Текст ошибки под баром (для всех размеров).",control:"text"},style:{control:!1},className:{control:!1}}},r={name:"Default",args:{type:"progress",size:"m",progress:25}},o={name:"Все состояния (m)",parameters:{controls:{disable:!0},docs:{description:{story:"Все типы в размере `m`: прогресс, пауза, indeterminate, успех, ошибка."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsx(s,{type:"progress",size:"m",progress:25,label:"25%"}),e.jsx(s,{type:"paused",size:"m",progress:40}),e.jsx(s,{type:"indeterminate",size:"m"}),e.jsx(s,{type:"success",size:"m"}),e.jsx(s,{type:"error",size:"m"})]})},n={name:"Размер L",parameters:{controls:{disable:!0},docs:{description:{story:"Размер `l` (32px) — текст выводится внутри бара."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400},children:[e.jsx(s,{type:"progress",size:"l",progress:0}),e.jsx(s,{type:"progress",size:"l",progress:60}),e.jsx(s,{type:"indeterminate",size:"l"}),e.jsx(s,{type:"success",size:"l"}),e.jsx(s,{type:"error",size:"l"})]})},t={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Три размера: `s` (4px), `m` (8px), `l` (32px)."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsx(s,{type:"progress",size:"s",progress:40,label:"s — 4px"}),e.jsx(s,{type:"progress",size:"m",progress:40,label:"m — 8px"}),e.jsx(s,{type:"progress",size:"l",progress:40})]})};var p,i,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Default",
  args: {
    type: "progress",
    size: "m",
    progress: 25
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Все состояния (m)",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Все типы в размере \`m\`: прогресс, пауза, indeterminate, успех, ошибка."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: 400
  }}>
      <ProgressLinear type="progress" size="m" progress={25} label="25%" />
      <ProgressLinear type="paused" size="m" progress={40} />
      <ProgressLinear type="indeterminate" size="m" />
      <ProgressLinear type="success" size="m" />
      <ProgressLinear type="error" size="m" />
    </div>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Размер L",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Размер \`l\` (32px) — текст выводится внутри бара."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 400
  }}>
      <ProgressLinear type="progress" size="l" progress={0} />
      <ProgressLinear type="progress" size="l" progress={60} />
      <ProgressLinear type="indeterminate" size="l" />
      <ProgressLinear type="success" size="l" />
      <ProgressLinear type="error" size="l" />
    </div>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,u,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Три размера: \`s\` (4px), \`m\` (8px), \`l\` (32px)."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: 400
  }}>
      <ProgressLinear type="progress" size="s" progress={40} label="s — 4px" />
      <ProgressLinear type="progress" size="m" progress={40} label="m — 8px" />
      <ProgressLinear type="progress" size="l" progress={40} />
    </div>
}`,...(z=(u=t.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};const T=["Default","AllStates","LargeSize","Sizes"];export{o as AllStates,r as Default,n as LargeSize,t as Sizes,T as __namedExportsOrder,v as default};
