import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as d,b as m,I,a as u}from"./IconLock-e9pa8MsX.js";import{c as x,d as f,e as g,f as y,g as b,h,I as C,i as T,j,a as v,k as S,l as w,b as _}from"./IconCamera-BH4ulT7S.js";import{I as k}from"./IconDate-7erjMhfW.js";import{I as z}from"./IconTime-BHKz0MfM.js";import{r as O}from"./index-CgfFrydU.js";import{T as r}from"./Text-CDOzxL5y.js";import{C as A}from"./copy-DOs6ysO-.js";import"./styled-components.browser.esm-CzyguTxk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-B4_zK0lS.js";import"./fonts-C-rNwtaq.js";import"./index-CC-WJBSK.js";const D=Object.freeze(Object.defineProperty({__proto__:null,IconArrowCircle:x,IconCamera:f,IconCheck:g,IconChild:y,IconClear:d,IconDate:k,IconDropdown:b,IconError:m,IconHeart:h,IconInfo:I,IconLeft:C,IconLock:u,IconOut:T,IconPlus:j,IconSpinner:v,IconSuccess:S,IconTime:z,IconUser:w,IconX:_},Symbol.toStringTag,{value:"Module"})),F={title:"МТС/Icons"},e=()=>{const[c,t]=O.useState(null),l=n=>{navigator.clipboard.writeText(`<${n} />`),t(n),setTimeout(()=>t(null),1500)};return o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(D).map(([n,p])=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:100,padding:10,border:"1px solid #ddd",borderRadius:8,position:"relative"},children:[o.jsx(p,{width:32,height:32}),o.jsx(r,{style:{marginTop:8,fontSize:12},children:n}),o.jsx("button",{style:{background:"transparent",border:"none",cursor:"pointer",position:"absolute",top:8,right:8},onClick:()=>l(n),title:"Скопировать",children:o.jsx(A,{size:14})}),c===n&&o.jsx(r,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},n))})};e.__docgenInfo={description:"",methods:[],displayName:"AllIcons"};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const G=["AllIcons"];export{e as AllIcons,G as __namedExportsOrder,F as default};
