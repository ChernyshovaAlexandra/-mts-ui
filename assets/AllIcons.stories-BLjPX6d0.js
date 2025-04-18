import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as d,a as m,I as u}from"./IconInfo-b578O3wf.js";import{I as x}from"./IconDropdown-VAelotV7.js";import{I}from"./IconLock-x38zUXh9.js";import{I as f,a as g,b as y,c as b,d as h}from"./IconLeft-ChiOV50a.js";import{I as C}from"./IconX-Dzjln_tM.js";import{r as T}from"./index-DatCARk7.js";import{T as r}from"./Text-BgcIkr1Y.js";import{C as j}from"./copy-Dk1WrbYc.js";import"./styled-components.browser.esm-Cp418-ky.js";/* empty css              */import"./index-DItf0zJP.js";const v=Object.freeze(Object.defineProperty({__proto__:null,IconClear:d,IconDropdown:x,IconError:m,IconInfo:u,IconLeft:f,IconLock:I,IconOut:g,IconPlus:y,IconSuccess:b,IconUser:h,IconX:C},Symbol.toStringTag,{value:"Module"})),P={title:"МТС/Icons"},e=()=>{const[l,t]=T.useState(null),c=n=>{navigator.clipboard.writeText(`<${n} />`),t(n),setTimeout(()=>t(null),1500)};return o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(v).map(([n,p])=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:100,padding:10,border:"1px solid #ddd",borderRadius:8,position:"relative"},children:[o.jsx(p,{width:32,height:32}),o.jsx(r,{style:{marginTop:8,fontSize:12},children:n}),o.jsx("button",{style:{background:"transparent",border:"none",cursor:"pointer",position:"absolute",top:8,right:8},onClick:()=>c(n),title:"Скопировать",children:o.jsx(j,{size:14})}),l===n&&o.jsx(r,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},n))})};e.__docgenInfo={description:"",methods:[],displayName:"AllIcons"};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const W=["AllIcons"];export{e as AllIcons,W as __namedExportsOrder,P as default};
