import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as d,a as m,I as u}from"./IconInfo-b578O3wf.js";import{I}from"./IconDropdown-VAelotV7.js";import{I as x}from"./IconLock-x38zUXh9.js";import{b as f,c as g,I as y,d as b,e as h,a as C,f as T,g as j}from"./IconSpinner-BC1lCUAM.js";import{I as v}from"./IconX-Dzjln_tM.js";import{r as S}from"./index-DatCARk7.js";import{T as r}from"./Text-M8jqDLl4.js";import{C as w}from"./copy-Dk1WrbYc.js";import"./style-CW4JnBuq.js";import"./styled-components.browser.esm-D7OA6UWf.js";/* empty css              */import"./index-Cpl4D9D3.js";const _=Object.freeze(Object.defineProperty({__proto__:null,IconChild:f,IconClear:d,IconDropdown:I,IconError:m,IconHeart:g,IconInfo:u,IconLeft:y,IconLock:x,IconOut:b,IconPlus:h,IconSpinner:C,IconSuccess:T,IconUser:j,IconX:v},Symbol.toStringTag,{value:"Module"})),M={title:"МТС/Icons"},e=()=>{const[l,t]=S.useState(null),c=n=>{navigator.clipboard.writeText(`<${n} />`),t(n),setTimeout(()=>t(null),1500)};return o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(_).map(([n,p])=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:100,padding:10,border:"1px solid #ddd",borderRadius:8,position:"relative"},children:[o.jsx(p,{width:32,height:32}),o.jsx(r,{style:{marginTop:8,fontSize:12},children:n}),o.jsx("button",{style:{background:"transparent",border:"none",cursor:"pointer",position:"absolute",top:8,right:8},onClick:()=>c(n),title:"Скопировать",children:o.jsx(w,{size:14})}),l===n&&o.jsx(r,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},n))})};e.__docgenInfo={description:"",methods:[],displayName:"AllIcons"};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [copied, setCopied] = useState<string | null>(null);
  const handleCopy = (iconName: string) => {
    navigator.clipboard.writeText(\`<\${iconName} />\`);
    setCopied(iconName);
    setTimeout(() => setCopied(null), 1500);
  };
  return <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 24
  }}>
      {Object.entries(Icons).map(([name, IconComponent]) => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 100,
      padding: 10,
      border: "1px solid #ddd",
      borderRadius: 8,
      position: "relative"
    }}>
          <IconComponent width={32} height={32} />
          <Text style={{
        marginTop: 8,
        fontSize: 12
      }}>{name}</Text>
          <button style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: 8,
        right: 8
      }} onClick={() => handleCopy(name)} title="Скопировать">
            <Copy size={14} />
          </button>
          {copied === name && <Text style={{
        color: "green",
        fontSize: 10,
        marginTop: 4
      }}>
              Скопировано!
            </Text>}
        </div>)}
    </div>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const U=["AllIcons"];export{e as AllIcons,U as __namedExportsOrder,M as default};
