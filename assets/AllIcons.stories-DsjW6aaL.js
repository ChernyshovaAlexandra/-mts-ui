import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as d,e as m,d as I,c as u,I as f,a as x}from"./IconAttention--HYYox4d.js";import{c as g,d as y,e as h,f as b,g as C,h as T,i as j,j as v,I as S,k as w,l as _,m as k,a as z,n as O,o as A,p as E,b as D}from"./IconMinus-B3RIS-SV.js";import{I as R}from"./IconDate-7erjMhfW.js";import{I as N}from"./IconTime-WL88UYBd.js";import{r as L}from"./index-CgfFrydU.js";import{T as r}from"./Text-C8FsFEkf.js";import{C as M}from"./copy-DOs6ysO-.js";import"./styled-components.browser.esm-CzyguTxk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-S1LL3O2C.js";import"./fonts-C-rNwtaq.js";import"./index-DzNPuTIb.js";const P=Object.freeze(Object.defineProperty({__proto__:null,IconArrowCircle:g,IconAttention:d,IconCamera:y,IconCheck:h,IconChevronRight:b,IconChild:C,IconClear:m,IconDate:R,IconDropdown:T,IconError:j,IconEye:I,IconEyeOff:u,IconHeart:v,IconInfo:f,IconLeft:S,IconLock:x,IconMinus:w,IconOut:_,IconPlus:k,IconSpinner:z,IconStar:O,IconSuccess:A,IconTime:N,IconUser:E,IconX:D},Symbol.toStringTag,{value:"Module"})),Y={title:"МТС/Icons"},e=()=>{const[c,t]=L.useState(null),l=n=>{navigator.clipboard.writeText(`<${n} />`),t(n),setTimeout(()=>t(null),1500)};return o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(P).map(([n,p])=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:100,padding:10,border:"1px solid #ddd",borderRadius:8,position:"relative"},children:[o.jsx(p,{width:32,height:32}),o.jsx(r,{style:{marginTop:8,fontSize:12},children:n}),o.jsx("button",{style:{background:"transparent",border:"none",cursor:"pointer",position:"absolute",top:8,right:8},onClick:()=>l(n),title:"Скопировать",children:o.jsx(M,{size:14})}),c===n&&o.jsx(r,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},n))})};e.__docgenInfo={description:"",methods:[],displayName:"AllIcons"};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const Z=["AllIcons"];export{e as AllIcons,Z as __namedExportsOrder,Y as default};
