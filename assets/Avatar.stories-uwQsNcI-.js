import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{A as s}from"./Avatar-GIzqnXQN.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mixins-ib8c4tLP.js";const G={title:"МТС/Avatar",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
**Avatar** — компонент для отображения пользователя. Поддерживает три режима отображения с приоритетом сверху вниз:

1. **Фото** — если передан \`src\`
2. **Инициалы** — если передан \`initials\` (без \`src\`)
3. **Силуэт** — если не передано ни то, ни другое

### Размеры

Доступно 6 размеров: **24, 32, 44, 52, 64, 80**. Радиус скругления подбирается автоматически под каждый размер, но может быть переопределён через \`borderRadius\`.

| Размер | Радиус | Инициалы |
|---|---|---|
| 24 | 8px | 1 буква |
| 32 | 12px | 2 буквы |
| 44 | 16px | 2 буквы |
| 52 | 18px | 2 буквы |
| 64 | 20px | 2 буквы |
| 80 | 24px | 2 буквы |

### Цветовые схемы

- **Default** — серый фон, нейтральный силуэт
- **Colored** — красный фон \`#FF0032\`, белый силуэт. Используется для выделения активного пользователя или специального статуса

### Силуэт (\`gender\`)

Когда нет фото и инициалов, отображается силуэт. Доступны варианты: \`neutral\`, \`male\`, \`female\`.

### Обводка (\`stroke\`)

Белая рамка вокруг фото. Используется при наложении аватаров друг на друга в группе.
        `}}},argTypes:{size:{description:"Размер аватара в пикселях.",control:"select",options:[24,32,44,52,64,80]},src:{description:"URL фотографии. Имеет наивысший приоритет — при наличии инициалы и силуэт не отображаются.",control:"text"},alt:{description:"Альтернативный текст для фото (доступность).",control:"text"},initials:{description:"Инициалы пользователя (1–2 символа). При размере 24px отображается только первый символ.",control:"text"},gender:{description:"Вид силуэта-заглушки, когда нет фото и инициалов.",control:"select",options:["neutral","male","female"]},colored:{description:"Красный фон вместо серого. Используется для выделения пользователя.",control:"boolean"},stroke:{description:"Белая обводка вокруг фото. Применяется при наложении аватаров в группе.",control:"boolean"},borderRadius:{description:"Переопределяет радиус скругления. По умолчанию подбирается автоматически под размер.",control:{type:"number",min:0,max:40}},style:{control:!1},className:{control:!1}}},x="https://i.pravatar.cc/160?img=12",o=[24,32,44,52,64,80],r=({bg:e,children:m})=>n.jsx("div",{style:{background:e??"#f2f3f7",padding:24,borderRadius:12,display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:m}),a=({label:e,children:m})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[m,n.jsxs("span",{style:{fontSize:11,color:"#969fa8",fontFamily:"sans-serif"},children:[e,"px"]})]}),l={name:"Playground",args:{size:44,colored:!1},render:e=>n.jsx(r,{children:n.jsx(s,{...e})})},t={name:"Фото",parameters:{controls:{disable:!0},docs:{description:{story:"Отображение фотографии пользователя. Нижний ряд — с обводкой `stroke` для использования в группах аватаров."}}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e,src:x,alt:"Фото"})},e))}),n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e,src:x,alt:"Фото",stroke:!0})},e))})]})},i={name:"Инициалы",parameters:{controls:{disable:!0},docs:{description:{story:"Инициалы вместо фото. При размере 24px отображается только первая буква. Нижний ряд — с `colored`."}}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e,initials:"АВ"})},e))}),n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e,initials:"АВ",colored:!0})},e))})]})},c={name:"Силуэт",parameters:{controls:{disable:!0},docs:{description:{story:"Заглушка-силуэт, когда нет фото и инициалов. Верхний ряд — `neutral` (по умолчанию), нижний — с `colored`."}}},render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e})},e))}),n.jsx(r,{children:o.map(e=>n.jsx(a,{label:e,children:n.jsx(s,{size:e,colored:!0})},e))})]})},d={name:"Варианты силуэта",parameters:{controls:{disable:!0},docs:{description:{story:"Три варианта силуэта: `neutral`, `male`, `female`. Используются как заглушка до загрузки фото."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:32,padding:24},children:["neutral","male","female"].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx(s,{size:64,gender:e}),n.jsx("span",{style:{fontSize:11,color:"#969fa8",fontFamily:"sans-serif"},children:e})]},e))})},p={name:"Цветовые схемы",parameters:{controls:{disable:!0},docs:{description:{story:"`default` — серый нейтральный фон. `colored` — красный фон для выделения активного пользователя или особого статуса."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:48,padding:24,flexWrap:"wrap"},children:["default","colored"].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx("span",{style:{fontSize:11,color:"#969fa8",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:"0.05em"},children:e}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[n.jsx(s,{size:44,colored:e==="colored"}),n.jsx(s,{size:44,initials:"АВ",colored:e==="colored"}),n.jsx(s,{size:44,src:x,alt:"Фото",colored:e==="colored"})]})]},e))})};var f,u,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    size: 44,
    colored: false
  },
  render: args => <Row>
      <Avatar {...args} />
    </Row>
}`,...(y=(u=l.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Фото",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Отображение фотографии пользователя. Нижний ряд — с обводкой \`stroke\` для использования в группах аватаров."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} src={PHOTO} alt="Фото" /></Col>)}
      </Row>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} src={PHOTO} alt="Фото" stroke /></Col>)}
      </Row>
    </div>
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var j,S,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Инициалы",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Инициалы вместо фото. При размере 24px отображается только первая буква. Нижний ряд — с \`colored\`."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} initials="АВ" /></Col>)}
      </Row>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} initials="АВ" colored /></Col>)}
      </Row>
    </div>
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,R,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Силуэт",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Заглушка-силуэт, когда нет фото и инициалов. Верхний ряд — \`neutral\` (по умолчанию), нижний — с \`colored\`."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} /></Col>)}
      </Row>
      <Row>
        {SIZES.map(s => <Col key={s} label={s}><Avatar size={s} colored /></Col>)}
      </Row>
    </div>
}`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var C,k,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Варианты силуэта",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Три варианта силуэта: \`neutral\`, \`male\`, \`female\`. Используются как заглушка до загрузки фото."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 32,
    padding: 24
  }}>
      {(["neutral", "male", "female"] as const).map(gender => <div key={gender} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }}>
          <Avatar size={64} gender={gender} />
          <span style={{
        fontSize: 11,
        color: "#969fa8",
        fontFamily: "sans-serif"
      }}>{gender}</span>
        </div>)}
    </div>
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var I,D,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Цветовые схемы",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "\`default\` — серый нейтральный фон. \`colored\` — красный фон для выделения активного пользователя или особого статуса."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 48,
    padding: 24,
    flexWrap: "wrap"
  }}>
      {(["default", "colored"] as const).map(scheme => <div key={scheme} style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
          <span style={{
        fontSize: 11,
        color: "#969fa8",
        fontFamily: "sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}>{scheme}</span>
          <div style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-end"
      }}>
            <Avatar size={44} colored={scheme === "colored"} />
            <Avatar size={44} initials="АВ" colored={scheme === "colored"} />
            <Avatar size={44} src={PHOTO} alt="Фото" colored={scheme === "colored"} />
          </div>
        </div>)}
    </div>
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const _=["Playground","WithPhoto","WithInitials","WithSilhouette","Genders","ColorSchemes"];export{p as ColorSchemes,d as Genders,l as Playground,i as WithInitials,t as WithPhoto,c as WithSilhouette,_ as __namedExportsOrder,G as default};
