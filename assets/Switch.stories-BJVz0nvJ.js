import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-mIjS73Jk.js";import{g as r}from"./styled-components.browser.esm-UUNjPRYl.js";import{S as s}from"./Switch-9OPJOe5N.js";import{f as A,d as C,c as E}from"./index-CA_YInif.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-Cwbmsakg.js";import"./IconYoutube-D-UZz_iv.js";import"./createIcon-CuvqBQrk.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import"./mixins-DAii6Zu4.js";const Se={title:"МТС/Switch",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
**Switch** — переключатель бинарного состояния. Используется для мгновенного включения/выключения опций.

### Размеры

| Размер | Трек | Кнопка | Использование |
|---|---|---|---|
| \`s\` | 28×16px | 12px | Компактные интерфейсы, таблицы |
| \`m\` | 42×24px | 18px | Основной размер |
| \`l\` | 56×32px | 24px | Крупные карточки, настройки |

### Состояния

- **checked** — включён (зелёный)
- **disabled** — заблокирован. В размере \`l\` показывает иконку замка, в \`s\`/\`m\` — прозрачность 60%
- **loading** — ожидание ответа сервера. Спиннер заменяет кнопку, трек блокируется

### Обработка ошибок

При ошибке сервера — верните \`checked\` в исходное состояние и покажите Snackbar/Toast.
        `}}},argTypes:{size:{control:"radio",options:["s","m","l"]},checked:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},onChange:{action:"changed"},style:{control:!1},className:{control:!1}}},m={name:"Default (интерактивный)",render:n=>{const[i,t]=l.useState(n.checked??!0);return e.jsx(s,{...n,checked:i,onChange:t})},args:{size:"m",checked:!0}},F=r.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,V=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,B=r.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: ${C};
`,h={name:"Размеры",parameters:{controls:{disable:!0}},render:()=>{const[n,i]=l.useState({s:!0,m:!0,l:!0});return e.jsx(F,{children:["s","m","l"].map(t=>e.jsxs(V,{children:[e.jsx(s,{size:t,checked:n[t],onChange:o=>i(a=>({...a,[t]:o}))}),e.jsxs(B,{children:[t," — ",I[t]]})]},t))})}},I={s:"28×16",m:"42×24",l:"56×32"},K=r.div`
  display: grid;
  grid-template-columns: 120px repeat(4, 80px);
  align-items: center;
  gap: 16px 0;
`,c=r.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: ${C};
  text-align: center;
`,P=r.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  color: ${E};
`,d=r.div`
  display: flex;
  justify-content: center;
`,g={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsxs(K,{children:[e.jsx(c,{}),e.jsx(c,{children:"On"}),e.jsx(c,{children:"Off"}),e.jsx(c,{children:"On + disabled"}),e.jsx(c,{children:"Off + disabled"}),["s","m","l"].map(n=>e.jsxs(e.Fragment,{children:[e.jsx(P,{children:n},`${n}-label`),e.jsx(d,{children:e.jsx(s,{size:n,checked:!0})},`${n}-on`),e.jsx(d,{children:e.jsx(s,{size:n,checked:!1})},`${n}-off`),e.jsx(d,{children:e.jsx(s,{size:n,checked:!0,disabled:!0})},`${n}-on-dis`),e.jsx(d,{children:e.jsx(s,{size:n,checked:!1,disabled:!0})},`${n}-off-dis`)]}))]})},u={name:"Loading (async)",parameters:{controls:{disable:!0},docs:{description:{story:"Имитация async-запроса: Switch блокируется на 1.5с, затем переключается (или возвращается при ошибке)."}}},render:()=>{const[n,i]=l.useState(!1),[t,o]=l.useState(!1),a=p=>{o(!0),setTimeout(()=>{i(p),o(!1)},1500)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs(F,{children:[e.jsx(s,{size:"m",checked:n,loading:t,onChange:a}),e.jsx("span",{style:{fontFamily:"MTS Compact, sans-serif",fontSize:14,color:"#626C77"},children:t?"Загрузка…":n?"Включено":"Выключено"})]}),["s","l"].map(p=>e.jsx(d,{children:e.jsx(s,{size:p,checked:!0,loading:!0})},p))]})}},f=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${A};
  gap: 16px;
  width: 320px;
  &:last-child { border-bottom: none; }
`,S=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k=r.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${E};
`,j=r.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: ${C};
`,x={name:"В настройках",parameters:{controls:{disable:!0}},render:()=>{const[n,i]=l.useState({notifications:!0,darkMode:!1,autoSave:!0}),t=o=>i(a=>({...a,[o]:!a[o]}));return e.jsxs("div",{style:{background:"white",borderRadius:16,border:`1px solid ${A}`},children:[e.jsxs(f,{children:[e.jsxs(S,{children:[e.jsx(k,{children:"Уведомления"}),e.jsx(j,{children:"Push-уведомления о новых событиях"})]}),e.jsx(s,{size:"m",checked:n.notifications,onChange:()=>t("notifications")})]}),e.jsxs(f,{children:[e.jsxs(S,{children:[e.jsx(k,{children:"Тёмная тема"}),e.jsx(j,{children:"Переключить оформление интерфейса"})]}),e.jsx(s,{size:"m",checked:n.darkMode,onChange:()=>t("darkMode")})]}),e.jsxs(f,{children:[e.jsxs(S,{children:[e.jsx(k,{children:"Автосохранение"}),e.jsx(j,{children:"Недоступно на текущем тарифе"})]}),e.jsx(s,{size:"m",checked:n.autoSave,disabled:!0})]})]})}};var b,y,w;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default (интерактивный)",
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? true);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    size: "m",
    checked: true
  }
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,T,v;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [vals, setVals] = useState({
      s: true,
      m: true,
      l: true
    });
    return <Row>
        {(["s", "m", "l"] as const).map(size => <Col key={size}>
            <Switch size={size} checked={vals[size]} onChange={v => setVals(p => ({
          ...p,
          [size]: v
        }))} />
            <Label>{size} — {TRACK_LABELS[size]}</Label>
          </Col>)}
      </Row>;
  }
}`,...(v=(T=h.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var L,$,R;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Все состояния",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Grid>
      <GridHeader />
      <GridHeader>On</GridHeader>
      <GridHeader>Off</GridHeader>
      <GridHeader>On + disabled</GridHeader>
      <GridHeader>Off + disabled</GridHeader>

      {(["s", "m", "l"] as const).map(size => <>
          <GridLabel key={\`\${size}-label\`}>{size}</GridLabel>
          <Center key={\`\${size}-on\`}><Switch size={size} checked={true} /></Center>
          <Center key={\`\${size}-off\`}><Switch size={size} checked={false} /></Center>
          <Center key={\`\${size}-on-dis\`}><Switch size={size} checked={true} disabled /></Center>
          <Center key={\`\${size}-off-dis\`}><Switch size={size} checked={false} disabled /></Center>
        </>)}
    </Grid>
}`,...(R=($=g.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var G,D,M;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Loading (async)",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Имитация async-запроса: Switch блокируется на 1.5с, затем переключается (или возвращается при ошибке)."
      }
    }
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = (next: boolean) => {
      setLoading(true);
      setTimeout(() => {
        setChecked(next);
        setLoading(false);
      }, 1500);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <Row>
          <Switch size="m" checked={checked} loading={loading} onChange={handleChange} />
          <span style={{
          fontFamily: "MTS Compact, sans-serif",
          fontSize: 14,
          color: "#626C77"
        }}>
            {loading ? "Загрузка…" : checked ? "Включено" : "Выключено"}
          </span>
        </Row>
        {(["s", "l"] as const).map(size => <Center key={size}>
            <Switch size={size} checked={true} loading={true} />
          </Center>)}
      </div>;
  }
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var _,H,O;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "В настройках",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true
    });
    const toggle = (key: keyof typeof settings) => setSettings(p => ({
      ...p,
      [key]: !p[key]
    }));
    return <div style={{
      background: "white",
      borderRadius: 16,
      border: \`1px solid \${mts_input_stroke}\`
    }}>
        <SettingRow>
          <SettingText>
            <SettingTitle>Уведомления</SettingTitle>
            <SettingDesc>Push-уведомления о новых событиях</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.notifications} onChange={() => toggle("notifications")} />
        </SettingRow>
        <SettingRow>
          <SettingText>
            <SettingTitle>Тёмная тема</SettingTitle>
            <SettingDesc>Переключить оформление интерфейса</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.darkMode} onChange={() => toggle("darkMode")} />
        </SettingRow>
        <SettingRow>
          <SettingText>
            <SettingTitle>Автосохранение</SettingTitle>
            <SettingDesc>Недоступно на текущем тарифе</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.autoSave} disabled />
        </SettingRow>
      </div>;
  }
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ke=["Default","Sizes","AllStates","Loading","InSettings"];export{g as AllStates,m as Default,x as InSettings,u as Loading,h as Sizes,ke as __namedExportsOrder,Se as default};
