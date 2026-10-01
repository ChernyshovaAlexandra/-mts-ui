import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-mIjS73Jk.js";import{J as be}from"./IconYoutube-D-UZz_iv.js";import{I as $e}from"./IconChevronRight-CervqCqb.js";import{B as S}from"./Button-pyJ4to3r.js";import{g as r,f as D}from"./styled-components.browser.esm-UUNjPRYl.js";import{I as je,p as ie,m as h,t as R,i as Ce,c as x,g as we,h as le,b as k,d as de}from"./index-CA_YInif.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CuvqBQrk.js";import"./Spinner-Cwbmsakg.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import"./mixins-DAii6Zu4.js";/* empty css              */const F=r.div`
  background: ${je};
  border-radius: ${ie};
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12), 0 12px 20px 0 rgba(0, 0, 0, 0.14);
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "MTS Compact", Arial, sans-serif;
  box-sizing: border-box;
`,De=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`,B=r.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,P=r.button`
  background: ${h};
  border: none;
  border-radius: ${R};
  padding: 6px 12px;
  height: 32px;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${x};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #e2e5eb;
  }
`,G=r.button`
  background: ${h};
  border: none;
  border-radius: ${ie};
  width: 32px;
  height: 32px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${x};

  &:hover {
    background: #e2e5eb;
  }
`,ke=r.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`,Me=r.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${de};
  text-align: center;
  text-transform: uppercase;
`,_e=r.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`,ce=r.button`
  display: flex;
  padding: 4px 12.714px 4px 13px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  max-width: 53px;
  border: none;
  background: none;
  cursor: pointer;
`,Ye=r.span`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: ${R};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  font-feature-settings: 'liga' off, 'clig' off;
  text-align: center;
  color: ${x};

  ${({$selected:n})=>n&&D`
      background: ${k};
      color: ${le};
    `}

  ${({$today:n,$selected:a})=>n&&!a&&D`
      &::after {
        content: "";
        position: absolute;
        bottom: 3px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${de};
      }
    `}

  ${ce}:hover & {
    background: ${({$selected:n})=>n?k:h};
  }
`,N=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,H=r.div`
  display: flex;
  align-items: center;
  background: ${h};
  border-radius: ${R};
  padding: 4px;
  width: 100%;
`,v=r.button`
  flex: 1;
  height: 24px;
  border: none;
  border-radius: ${Ce};
  font-family: "MTS Wide", Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${x};
  transition: background 0.15s;

  ${({$active:n})=>n?D`
          background: #ffffff;
        `:D`
          background: transparent;
        `}
`,O=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`,J=r.button`
  position: relative;
  height: 44px;
  border: none;
  border-radius: ${we};
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  color: ${({$active:n})=>n?le:x};
  background: ${({$active:n})=>n?k:"transparent"};

  &:hover {
    background: ${({$active:n})=>n?k:h};
  }
`,K=r.div`
  display: flex;
  gap: 12px;
  width: 100%;
`,b=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Te=["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],ze=n=>{if(!n)return null;const[a,d,c]=n.split(".").map(Number);return!a||!d||!c?null:new Date(c,d-1,a)},M=({value:n,onChange:a,className:d,style:c})=>{const u=new Date,i=ze(n),[V,f]=p.useState("day"),[s,m]=p.useState((i==null?void 0:i.getMonth())??u.getMonth()),[l,_]=p.useState((i==null?void 0:i.getFullYear())??u.getFullYear()),[y,Y]=p.useState(s),[g,T]=p.useState(l),pe=new Date(l,s+1,0).getDate(),W=new Date(l,s,1).getDay(),z=W===0?6:W-1,ue=Array.from({length:z+pe},(t,o)=>o<z?null:o-z+1),me=t=>!!i&&i.getDate()===t&&i.getMonth()===s&&i.getFullYear()===l,ge=t=>u.getDate()===t&&u.getMonth()===s&&u.getFullYear()===l,he=t=>{const o=String(t).padStart(2,"0"),ve=String(s+1).padStart(2,"0");a==null||a(`${o}.${ve}.${l}`)},xe=()=>{s===0?(m(11),_(t=>t-1)):m(t=>t-1)},fe=()=>{s===11?(m(0),_(t=>t+1)):m(t=>t+1)},I=()=>{Y(s),T(l),f("month")},A=()=>{Y(s),T(l),f("year")},E=()=>{m(y),_(g),f("day")},q=()=>{f("day")},ye=g-5,Se=Array.from({length:12},(t,o)=>ye+o);return V==="month"?e.jsx(F,{className:d,style:c,children:e.jsxs(N,{children:[e.jsxs(H,{children:[e.jsx(v,{onClick:I,$active:!0,children:b[y]}),e.jsx(v,{onClick:A,$active:!1,children:g})]}),e.jsx(O,{children:b.map((t,o)=>e.jsx(J,{$active:o===y,onClick:()=>Y(o),children:t},t))}),e.jsxs(K,{children:[e.jsx(S,{variant:"secondary",size:"l",width:"full",onClick:q,children:"Отменить"}),e.jsx(S,{variant:"primary",size:"l",width:"full",onClick:E,children:"Подтвердить"})]})]})}):V==="year"?e.jsx(F,{className:d,style:c,children:e.jsxs(N,{children:[e.jsxs(H,{children:[e.jsx(v,{onClick:I,$active:!1,children:b[y]}),e.jsx(v,{onClick:A,$active:!0,children:g})]}),e.jsx(O,{children:Se.map(t=>e.jsx(J,{$active:t===g,onClick:()=>T(t),children:t},t))}),e.jsxs(K,{children:[e.jsx(S,{variant:"secondary",size:"l",width:"full",onClick:q,children:"Отменить"}),e.jsx(S,{variant:"primary",size:"l",width:"full",onClick:E,children:"Подтвердить"})]})]})}):e.jsxs(F,{className:d,style:c,children:[e.jsxs(De,{children:[e.jsxs(B,{children:[e.jsx(P,{onClick:I,children:b[s]}),e.jsx(P,{onClick:A,children:l})]}),e.jsxs(B,{children:[e.jsx(G,{onClick:xe,"aria-label":"Предыдущий месяц",children:e.jsx(be,{width:24,height:24})}),e.jsx(G,{onClick:fe,"aria-label":"Следующий месяц",children:e.jsx($e,{width:24,height:24})})]})]}),e.jsx(ke,{children:Te.map(t=>e.jsx(Me,{children:t},t))}),e.jsx(_e,{children:ue.map((t,o)=>t===null?e.jsx("div",{},`empty-${o}`):e.jsx(ce,{onClick:()=>he(t),children:e.jsx(Ye,{$selected:me(t),$today:ge(t),children:t})},t))})]})};M.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const it={title:"МТС/Calendar",component:M,tags:["autodocs"],parameters:{docs:{description:{component:`
**Calendar** — автономный компонент выбора даты в стиле МТС.

Позволяет выбрать дату, месяц или год. Три вида:
- **Day** — сетка дней с навигацией по месяцам
- **Month** — выбор месяца с подтверждением
- **Year** — выбор года с подтверждением

Формат значения: \`DD.MM.YYYY\`

\`\`\`tsx
const [date, setDate] = useState<string | null>(null);
<Calendar value={date} onChange={setDate} />
\`\`\`
        `}}},argTypes:{value:{description:"Выбранная дата в формате DD.MM.YYYY",control:"text"},onChange:{action:"onChange"},className:{control:!1},style:{control:!1}}},$={name:"Default",args:{value:null}},j={name:"С выбранной датой",args:{value:"05.08.2023"}},C={name:"Интерактивный",parameters:{controls:{disable:!0},docs:{description:{story:"Управляемый компонент — выбранная дата отображается под календарём."}}},render:()=>{const[n,a]=p.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(M,{value:n,onChange:a}),e.jsx("span",{style:{fontFamily:"sans-serif",fontSize:14,color:"#626C77"},children:n?`Выбрана дата: ${n}`:"Дата не выбрана"})]})}},w={name:"Сегодняшняя дата",parameters:{controls:{disable:!0},docs:{description:{story:"Сегодняшний день отмечен точкой снизу."}}},render:()=>{const n=new Date,a=String(n.getDate()).padStart(2,"0"),d=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();return e.jsx(M,{value:`${a}.${d}.${c}`})}};var L,X,Q;$.parameters={...$.parameters,docs:{...(L=$.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Default",
  args: {
    value: null
  }
}`,...(Q=(X=$.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var U,Z,ee;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "С выбранной датой",
  args: {
    value: "05.08.2023"
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Интерактивный",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Управляемый компонент — выбранная дата отображается под календарём."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }}>
        <Calendar value={value} onChange={setValue} />
        <span style={{
        fontFamily: "sans-serif",
        fontSize: 14,
        color: "#626C77"
      }}>
          {value ? \`Выбрана дата: \${value}\` : "Дата не выбрана"}
        </span>
      </div>;
  }
}`,...(re=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,se,oe;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Сегодняшняя дата",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Сегодняшний день отмечен точкой снизу."
      }
    }
  },
  render: () => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, "0");
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const y = today.getFullYear();
    return <Calendar value={\`\${d}.\${m}.\${y}\`} />;
  }
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const lt=["Default","WithSelected","Interactive","Today"];export{$ as Default,C as Interactive,w as Today,j as WithSelected,lt as __namedExportsOrder,it as default};
