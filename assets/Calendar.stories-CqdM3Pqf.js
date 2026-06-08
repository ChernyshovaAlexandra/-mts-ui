import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-G8LIXM5I.js";import{G as be}from"./IconYoutube-CRYDP8rR.js";import{I as $e}from"./IconChevronRight-B3ah8NhF.js";import{B as S}from"./Button-Rt6WeiJe.js";import{y as r,p as D}from"./styled-components.browser.esm-BU5pfHrT.js";import{i as je,K as ie,h,F as R,N as Ce,Q as x,G as we,P as le,g as k,S as de}from"./index-CWlbk4Hf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CRC-JE94.js";import"./Spinner-BrDaGlgB.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";import"./mixins-CTkzXf3m.js";/* empty css              */const F=r.div`
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
`,P=r.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,q=r.button`
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
`,B=r.button`
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
`,K=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`,O=r.button`
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
`,L=r.div`
  display: flex;
  gap: 12px;
  width: 100%;
`,b=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Te=["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],ze=n=>{if(!n)return null;const[a,d,c]=n.split(".").map(Number);return!a||!d||!c?null:new Date(c,d-1,a)},M=({value:n,onChange:a,className:d,style:c})=>{const u=new Date,i=ze(n),[V,f]=p.useState("day"),[s,m]=p.useState((i==null?void 0:i.getMonth())??u.getMonth()),[l,_]=p.useState((i==null?void 0:i.getFullYear())??u.getFullYear()),[y,Y]=p.useState(s),[g,T]=p.useState(l),pe=new Date(l,s+1,0).getDate(),W=new Date(l,s,1).getDay(),z=W===0?6:W-1,ue=Array.from({length:z+pe},(t,o)=>o<z?null:o-z+1),me=t=>!!i&&i.getDate()===t&&i.getMonth()===s&&i.getFullYear()===l,ge=t=>u.getDate()===t&&u.getMonth()===s&&u.getFullYear()===l,he=t=>{const o=String(t).padStart(2,"0"),ve=String(s+1).padStart(2,"0");a==null||a(`${o}.${ve}.${l}`)},xe=()=>{s===0?(m(11),_(t=>t-1)):m(t=>t-1)},fe=()=>{s===11?(m(0),_(t=>t+1)):m(t=>t+1)},I=()=>{Y(s),T(l),f("month")},A=()=>{Y(s),T(l),f("year")},E=()=>{m(y),_(g),f("day")},G=()=>{f("day")},ye=g-5,Se=Array.from({length:12},(t,o)=>ye+o);return V==="month"?e.jsx(F,{className:d,style:c,children:e.jsxs(N,{children:[e.jsxs(H,{children:[e.jsx(v,{onClick:I,$active:!0,children:b[y]}),e.jsx(v,{onClick:A,$active:!1,children:g})]}),e.jsx(K,{children:b.map((t,o)=>e.jsx(O,{$active:o===y,onClick:()=>Y(o),children:t},t))}),e.jsxs(L,{children:[e.jsx(S,{variant:"secondary",size:"l",width:"full",onClick:G,children:"Отменить"}),e.jsx(S,{variant:"primary",size:"l",width:"full",onClick:E,children:"Подтвердить"})]})]})}):V==="year"?e.jsx(F,{className:d,style:c,children:e.jsxs(N,{children:[e.jsxs(H,{children:[e.jsx(v,{onClick:I,$active:!1,children:b[y]}),e.jsx(v,{onClick:A,$active:!0,children:g})]}),e.jsx(K,{children:Se.map(t=>e.jsx(O,{$active:t===g,onClick:()=>T(t),children:t},t))}),e.jsxs(L,{children:[e.jsx(S,{variant:"secondary",size:"l",width:"full",onClick:G,children:"Отменить"}),e.jsx(S,{variant:"primary",size:"l",width:"full",onClick:E,children:"Подтвердить"})]})]})}):e.jsxs(F,{className:d,style:c,children:[e.jsxs(De,{children:[e.jsxs(P,{children:[e.jsx(q,{onClick:I,children:b[s]}),e.jsx(q,{onClick:A,children:l})]}),e.jsxs(P,{children:[e.jsx(B,{onClick:xe,"aria-label":"Предыдущий месяц",children:e.jsx(be,{width:24,height:24})}),e.jsx(B,{onClick:fe,"aria-label":"Следующий месяц",children:e.jsx($e,{width:24,height:24})})]})]}),e.jsx(ke,{children:Te.map(t=>e.jsx(Me,{children:t},t))}),e.jsx(_e,{children:ue.map((t,o)=>t===null?e.jsx("div",{},`empty-${o}`):e.jsx(ce,{onClick:()=>he(t),children:e.jsx(Ye,{$selected:me(t),$today:ge(t),children:t})},t))})]})};M.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const lt={title:"МТС/Calendar",component:M,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{value:{description:"Выбранная дата в формате DD.MM.YYYY",control:"text"},onChange:{action:"onChange"},className:{control:!1},style:{control:!1}}},$={name:"Default",args:{value:null}},j={name:"С выбранной датой",args:{value:"05.08.2023"}},C={name:"Интерактивный",parameters:{controls:{disable:!0},docs:{description:{story:"Управляемый компонент — выбранная дата отображается под календарём."}}},render:()=>{const[n,a]=p.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(M,{value:n,onChange:a}),e.jsx("span",{style:{fontFamily:"sans-serif",fontSize:14,color:"#626C77"},children:n?`Выбрана дата: ${n}`:"Дата не выбрана"})]})}},w={name:"Сегодняшняя дата",parameters:{controls:{disable:!0},docs:{description:{story:"Сегодняшний день отмечен точкой снизу."}}},render:()=>{const n=new Date,a=String(n.getDate()).padStart(2,"0"),d=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();return e.jsx(M,{value:`${a}.${d}.${c}`})}};var Q,X,J;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Default",
  args: {
    value: null
  }
}`,...(J=(X=$.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var U,Z,ee;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const dt=["Default","WithSelected","Interactive","Today"];export{$ as Default,C as Interactive,w as Today,j as WithSelected,dt as __namedExportsOrder,lt as default};
