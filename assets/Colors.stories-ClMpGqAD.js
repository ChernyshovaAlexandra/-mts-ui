import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-CgfFrydU.js";import{T as i}from"./Text-C8FsFEkf.js";import{n as D}from"./index-DzNPuTIb.js";import{d as s}from"./styled-components.browser.esm-CzyguTxk.js";import{S as m}from"./Separator-oixkMbc8.js";import{C as d}from"./copy-DOs6ysO-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-S1LL3O2C.js";import"./fonts-C-rNwtaq.js";const A="#002094",T="#003DB7",R="#014FCE",G="#6384E0",P="#E7EAFA",S="#0048AA",O="#007CFF",z="#0097FD",N="#45B6FC",w="#E1F3FE",H="#00724D",V="#03A17B",K="#00C19B",I="#00D9BC",M="#DFF9F5",$="#027722",q="#04AA42",J="#26CD58",L="#74DF8B",Q="#E8FAEB",U="#808201",W="#A6C100",X="#C1EB1D",Y="#D3F36B",Z="#F8FEE7",oo="#F37F19",ro="#FAC031",to="#FBE739",eo="#FDF177",no="#FFFDE8",so="#BA360A",ao="#E04A17",lo="#F95721",io="#FFA080",co="#FBE9E7",po="#8E003F",mo="#C51345",_o="#EA1F49",uo="#F55F7E",Co="#FFE4E9",go="#7F3363",xo="#BB4079",bo="#E54887",yo="#E677AD",ho="#F9E7F0",ko="#471C61",vo="#6D2D79",Fo="#883888",jo="#A86EA7",fo="#F0E7F0",Bo=Object.freeze(Object.defineProperty({__proto__:null,mts_dark_apple:q,mts_dark_banana:ro,mts_dark_blackberry:T,mts_dark_blueberry:O,mts_dark_cranberry:xo,mts_dark_lime:W,mts_dark_mint:V,mts_dark_orange:ao,mts_dark_plum:vo,mts_dark_raspberry:mo,mts_darkest_apple:$,mts_darkest_banana:oo,mts_darkest_blackberry:A,mts_darkest_blueberry:S,mts_darkest_cranberry:go,mts_darkest_lime:U,mts_darkest_mint:H,mts_darkest_orange:so,mts_darkest_plum:ko,mts_darkest_raspberry:po,mts_light_apple:L,mts_light_banana:eo,mts_light_blackberry:G,mts_light_blueberry:N,mts_light_cranberry:yo,mts_light_lime:Y,mts_light_mint:I,mts_light_orange:io,mts_light_plum:jo,mts_light_raspberry:uo,mts_lightest_apple:Q,mts_lightest_banana:no,mts_lightest_blackberry:P,mts_lightest_blueberry:w,mts_lightest_cranberry:ho,mts_lightest_lime:Z,mts_lightest_mint:M,mts_lightest_orange:co,mts_lightest_plum:fo,mts_lightest_raspberry:Co,mts_normal_apple:J,mts_normal_banana:to,mts_normal_blackberry:R,mts_normal_blueberry:z,mts_normal_cranberry:bo,mts_normal_lime:X,mts_normal_mint:K,mts_normal_orange:lo,mts_normal_plum:Fo,mts_normal_raspberry:_o},Symbol.toStringTag,{value:"Module"})),_=s.div`
  padding: 1rem;
  margin: 2rem;
  color: #fff;
`,u=s(i)`
  /* color: #fff; */
`,C=s(i)`
  font-size: 12px;
  font-weight: 500px;
  display: block;
  text-overflow: ellipsis;
  max-width: 80%;
`,g=s.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
  background: ${({value:a})=>a||"#fff"};
`,x=s.div`
  display: flex;
  position: relative;
  gap: 10px;
  margin-bottom: 20px;
  width: 280px;
  background: #e5e5e5;
  padding: 10px;
  border-radius: 12px;
`,b=s(i)``,y=s.button`
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
`,h=s.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 1rem;
`,No={title:"МТС/Colors"},k={text:"Text",accent:"Accent",bg:"Background",icon:"Icon",control:"Controls",negative:"Negative",input:"Inputs",brand:"Brand"},l=()=>{const[a,c]=E.useState(null),f=Object.entries(D).reduce((r,[n,t])=>{const e=n.split("_")[1];return r[e]||(r[e]=[]),r[e].push([n,t]),r},{}),B=Object.entries(Bo).reduce((r,[n,t])=>{const e=n.split("_")[2];return r[e]||(r[e]=[]),r[e].push([n,t]),r},{}),p=r=>{navigator.clipboard.writeText(r),c(r),setTimeout(()=>c(null),1500)};return o.jsxs("div",{children:[Object.entries(f).map(([r,n])=>o.jsxs(_,{children:[o.jsx(u,{variant:"P2-Regular-Comp",children:k[r]||r}),o.jsx(h,{children:n.map(([t,e])=>o.jsxs(x,{children:[o.jsx(g,{value:e}),o.jsxs("div",{children:[o.jsx(C,{variant:"P3-Regular-Comp",children:t}),o.jsx(m,{color:"#BCC3D080"}),o.jsx(b,{variant:"P3-Regular-Comp",children:e})]}),o.jsx(y,{onClick:()=>p(t),title:"Скопировать",children:o.jsx(d,{size:14})}),a===t&&o.jsx(i,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},t))})]},r)),Object.entries(B).map(([r,n])=>o.jsxs(_,{children:[o.jsx(u,{variant:"P2-Regular-Comp",children:k[r]||r}),o.jsx(h,{children:n.map(([t,e])=>o.jsxs(x,{children:[o.jsx(g,{value:e}),o.jsxs("div",{children:[o.jsx(C,{variant:"P3-Regular-Comp",children:t}),o.jsx(m,{color:"#BCC3D080"}),o.jsx(b,{variant:"P3-Regular-Comp",children:e})]}),o.jsx(y,{onClick:()=>p(t),title:"Скопировать",children:o.jsx(d,{size:14})}),a===t&&o.jsx(i,{style:{color:"green",fontSize:10,marginTop:4},children:"Скопировано!"})]},t))})]},r))]})};l.__docgenInfo={description:"",methods:[],displayName:"AllColorsGrouped"};var v,F,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [copied, setCopied] = useState<string | null>(null);
  const grouped = Object.entries(colors).reduce<Record<string, [string, string][]>>((acc, [name, value]) => {
    const key = name.split("_")[1];
    if (!acc[key]) acc[key] = [];
    acc[key].push([name, value]);
    return acc;
  }, {});
  const grouped2 = Object.entries(colors2).reduce<Record<string, [string, string][]>>((acc, [name, value]) => {
    const key = name.split("_")[2];
    if (!acc[key]) acc[key] = [];
    acc[key].push([name, value]);
    return acc;
  }, {});
  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };
  return <div>
      {Object.entries(grouped).map(([groupKey, items]) => <ColorGroup key={groupKey}>
          <ColorGroupHeader variant="P2-Regular-Comp">
            {groupNames[groupKey] || groupKey}
          </ColorGroupHeader>

          <ColorDescription>
            {items.map(([name, value]) => <ColorBox key={name}>
                <Color value={value} />
                <div>
                  <ColorName variant="P3-Regular-Comp">{name}</ColorName>
                  <Separator color="#BCC3D080" />
                  <ColorValue variant="P3-Regular-Comp">{value}</ColorValue>
                </div>
                <CopyBtn onClick={() => handleCopy(name)} title="Скопировать">
                  <Copy size={14} />
                </CopyBtn>
                {copied === name && <Text style={{
            color: "green",
            fontSize: 10,
            marginTop: 4
          }}>
                    Скопировано!
                  </Text>}
              </ColorBox>)}
          </ColorDescription>
        </ColorGroup>)}
      {Object.entries(grouped2).map(([groupKey, items]) => <ColorGroup key={groupKey}>
          <ColorGroupHeader variant="P2-Regular-Comp">
            {groupNames[groupKey] || groupKey}
          </ColorGroupHeader>

          <ColorDescription>
            {items.map(([name, value]) => <ColorBox key={name}>
                <Color value={value} />
                <div>
                  <ColorName variant="P3-Regular-Comp">{name}</ColorName>
                  <Separator color="#BCC3D080" />
                  <ColorValue variant="P3-Regular-Comp">{value}</ColorValue>
                </div>
                <CopyBtn onClick={() => handleCopy(name)} title="Скопировать">
                  <Copy size={14} />
                </CopyBtn>
                {copied === name && <Text style={{
            color: "green",
            fontSize: 10,
            marginTop: 4
          }}>
                    Скопировано!
                  </Text>}
              </ColorBox>)}
          </ColorDescription>
        </ColorGroup>)}
    </div>;
}`,...(j=(F=l.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const wo=["AllColorsGrouped"];export{l as AllColorsGrouped,wo as __namedExportsOrder,No as default};
