import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-G8LIXM5I.js";import{y as T,p as r,O as ye}from"./styled-components.browser.esm-BU5pfHrT.js";import{l as He,g as Ae,G as De,F as $e,a as We,d as ke,m as qe,b as Be,Q as Ee,P as Ne}from"./index-CWlbk4Hf.js";/* empty css              */import{T as $}from"./Text-2zki5lTF.js";import{a as Oe,c as Pe,b as Le,I as Me}from"./IconCrossCircle-OcWpa9Gk.js";import{A as _e}from"./Avatar-C1lJHa58.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-afSt-2-G.js";import"./mixins-CTkzXf3m.js";import"./createIcon-CRC-JE94.js";const Ve="767px",_=ye`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,W=ye`
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
`,ze=e=>{switch(e){case"bottom-center":return r`
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        animation: ${_} 0.3s ease-out;
      `;case"top-right":return r`
        top: 16px;
        right: 32px;
        animation: ${W} 0.3s ease-out;
      `;case"top-center":return r`
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        animation: ${W} 0.3s ease-out;
      `;case"bottom-right":default:return r`
        bottom: 32px;
        right: 32px;
        animation: ${_} 0.3s ease-out;
      `}},Fe=T.div`
  position: fixed;
  z-index: 9999;
  max-width: 364px;
  ${({$position:e})=>ze(e)};

  @media screen and (max-width: ${Ve}) {
    bottom: 12px;
    top: auto;
    left: 12px;
    right: 12px;
    max-width: none;
    transform: none;
    animation: ${_} 0.3s ease-out;
  }
`,Ye=T.div`
  display: flex;
  align-items: ${({$rounded:e})=>e==="lg"?"flex-start":"center"};
  gap: 8px;
  padding: 8px 12px;
  background: ${({$variant:e})=>e==="light"?He:Ae};
  border-radius: ${({$rounded:e})=>e==="lg"?De:$e};
  overflow: hidden;
  ${({$variant:e})=>e==="light"&&r`
      box-shadow:
        0 0 8px rgba(0, 0, 0, 0.08),
        0 4px 8px rgba(0, 0, 0, 0.08);
    `};
`,Xe=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`,Ge=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ke=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,Qe={success:{Component:Me,color:Be},info:{Component:Le,color:qe},warning:{Component:Pe,color:ke},error:{Component:Oe,color:We}},w=D.memo(({message:e,title:C,icon:S,avatar:j,position:we="bottom-right",variant:I="dark",autoHideDuration:v=4e3,onClose:b,style:Ce,className:je})=>{const R=I==="light"?Ee:Ne;if(D.useEffect(()=>{if(!e||!b||!v)return;const Re=setTimeout(()=>b(),v);return()=>clearTimeout(Re)},[e,v,b]),!e)return null;const H=!!j,A=!!C,Ie=A||H?"lg":"sm",y=S?Qe[S]:null;return a.jsx(Fe,{$position:we,role:"status","aria-live":S==="error"?"assertive":"polite","aria-atomic":"true",style:Ce,className:je,children:a.jsxs(Ye,{$rounded:Ie,$variant:I,children:[H?a.jsx(Ge,{"aria-hidden":"true",children:j}):y?a.jsx(Xe,{"aria-hidden":"true",style:{color:y.color},children:a.jsx(y.Component,{size:24,variant:"fill"})}):null,a.jsxs(Ke,{children:[A&&a.jsx($,{variant:"P3-Bold-Comp",style:{color:R},children:C}),a.jsx($,{variant:"P3-Regular-Comp",style:{color:R},children:e})]})]})})});w.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"
| "bottom-center"
| "top-right"
| "top-center"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-center"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:"",defaultValue:{value:'"dark"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const pt={title:"МТС/Toast",component:w,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,"success","info","warning","error"]},position:{control:"select",options:["bottom-right","bottom-center","top-right","top-center"]},variant:{control:"inline-radio",options:["dark","light"]},autoHideDuration:{control:"number"}}},Je=({children:e})=>a.jsx("div",{style:{position:"relative",minHeight:200,background:"#F2F3F7",padding:16},children:e}),t=e=>a.jsx(Je,{children:a.jsx(w,{...e})}),s=t.bind({});s.args={message:"Сообщение",autoHideDuration:0};const o=t.bind({});o.args={message:"Сообщение",icon:"success",autoHideDuration:0};const n=t.bind({});n.args={message:"Сообщение",icon:"info",autoHideDuration:0};const i=t.bind({});i.args={message:"Сообщение",icon:"warning",autoHideDuration:0};const c=t.bind({});c.args={message:"Сообщение",icon:"error",autoHideDuration:0};const m=t.bind({});m.args={title:"Заголовок",message:"Сообщение",autoHideDuration:0};const l=t.bind({});l.args={title:"Заголовок",message:"Сообщение",icon:"success",autoHideDuration:0};const p=t.bind({});p.args={message:"Под номером +7 (999) 999-99-99",avatar:a.jsx(_e,{size:44,gender:"male"}),autoHideDuration:0};const d=t.bind({});d.args={title:"Вы авторизовались",message:"Под номером +7 (999) 999-99-99",avatar:a.jsx(_e,{size:44,gender:"male"}),autoHideDuration:0};const g=t.bind({});g.args={message:"Сообщение",icon:"info",position:"top-right",autoHideDuration:0};const u=t.bind({});u.args={message:"Сообщение",icon:"info",position:"top-center",autoHideDuration:0};const f=t.bind({});f.args={message:"Сообщение",icon:"success",position:"bottom-center",autoHideDuration:0};const h=t.bind({});h.args={message:"Сообщение",icon:"success",variant:"light",autoHideDuration:0};const x=t.bind({});x.args={title:"Заголовок",message:"Сообщение",icon:"info",variant:"light",autoHideDuration:0};var k,q,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(B=(q=s.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,N,O;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,L,M;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,z,F;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var Y,X,G;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(G=(X=c.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var K,Q,J;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(J=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var U,Z,ee;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ne;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(ne=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,me;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,pe,de;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(de=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ge,ue,fe;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(fe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var he,xe,Te;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(Te=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Se,ve,be;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(be=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const dt=["MessageOnly","Success","Info","Warning","Error","WithTitle","WithTitleAndIcon","WithAvatar","WithAvatarAndTitle","TopRight","TopCenter","BottomCenter","LightVariant","LightWithTitle"];export{f as BottomCenter,c as Error,n as Info,h as LightVariant,x as LightWithTitle,s as MessageOnly,o as Success,u as TopCenter,g as TopRight,i as Warning,p as WithAvatar,d as WithAvatarAndTitle,m as WithTitle,l as WithTitleAndIcon,dt as __namedExportsOrder,pt as default};
