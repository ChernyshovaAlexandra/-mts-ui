import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-mIjS73Jk.js";import{g as T,f as r,E as ye}from"./styled-components.browser.esm-UUNjPRYl.js";import{w as Re,b as Ae,g as De,t as $e,x as We,H as Ee,v as ke,E as qe,c as Be,h as Ne}from"./index-CA_YInif.js";/* empty css              */import{T as $}from"./Text-DOS6fvGo.js";import{a as Oe,c as Pe,b as Le,I as Me}from"./IconCrossCircle-Cy9z4wAD.js";import{A as _e}from"./Avatar-DyXPwuO4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-ZrP7Bi_n.js";import"./mixins-DAii6Zu4.js";import"./createIcon-CuvqBQrk.js";const Ve="767px",_=ye`
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
      `}},Ye=T.div`
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
`,Fe=T.div`
  display: flex;
  align-items: ${({$rounded:e})=>e==="lg"?"flex-start":"center"};
  gap: 8px;
  padding: 8px 12px;
  background: ${({$variant:e})=>e==="light"?Re:Ae};
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
`,Ke=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ge=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,Je={success:{Component:Me,color:qe},info:{Component:Le,color:ke},warning:{Component:Pe,color:Ee},error:{Component:Oe,color:We}},w=D.memo(({message:e,title:C,icon:S,avatar:j,position:we="bottom-right",variant:I="dark",autoHideDuration:v=4e3,onClose:b,style:Ce,className:je})=>{const H=I==="light"?Be:Ne;if(D.useEffect(()=>{if(!e||!b||!v)return;const He=setTimeout(()=>b(),v);return()=>clearTimeout(He)},[e,v,b]),!e)return null;const R=!!j,A=!!C,Ie=A||R?"lg":"sm",y=S?Je[S]:null;return a.jsx(Ye,{$position:we,role:"status","aria-live":S==="error"?"assertive":"polite","aria-atomic":"true",style:Ce,className:je,children:a.jsxs(Fe,{$rounded:Ie,$variant:I,children:[R?a.jsx(Ke,{"aria-hidden":"true",children:j}):y?a.jsx(Xe,{"aria-hidden":"true",style:{color:y.color},children:a.jsx(y.Component,{size:24,variant:"fill"})}):null,a.jsxs(Ge,{children:[A&&a.jsx($,{variant:"P3-Bold-Comp",style:{color:H},children:C}),a.jsx($,{variant:"P3-Regular-Comp",style:{color:H},children:e})]})]})})});w.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "bottom-right"
| "bottom-center"
| "top-right"
| "top-center"`,elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-center"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:"",defaultValue:{value:'"dark"',computed:!1}},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const lt={title:"МТС/Toast",component:w,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,"success","info","warning","error"]},position:{control:"select",options:["bottom-right","bottom-center","top-right","top-center"]},variant:{control:"inline-radio",options:["dark","light"]},autoHideDuration:{control:"number"}}},Qe=({children:e})=>a.jsx("div",{style:{position:"relative",minHeight:200,background:"#F2F3F7",padding:16},children:e}),t=e=>a.jsx(Qe,{children:a.jsx(w,{...e})}),s=t.bind({});s.args={message:"Сообщение",autoHideDuration:0};const o=t.bind({});o.args={message:"Сообщение",icon:"success",autoHideDuration:0};const n=t.bind({});n.args={message:"Сообщение",icon:"info",autoHideDuration:0};const i=t.bind({});i.args={message:"Сообщение",icon:"warning",autoHideDuration:0};const c=t.bind({});c.args={message:"Сообщение",icon:"error",autoHideDuration:0};const m=t.bind({});m.args={title:"Заголовок",message:"Сообщение",autoHideDuration:0};const l=t.bind({});l.args={title:"Заголовок",message:"Сообщение",icon:"success",autoHideDuration:0};const p=t.bind({});p.args={message:"Под номером +7 (999) 999-99-99",avatar:a.jsx(_e,{size:44,gender:"male"}),autoHideDuration:0};const d=t.bind({});d.args={title:"Вы авторизовались",message:"Под номером +7 (999) 999-99-99",avatar:a.jsx(_e,{size:44,gender:"male"}),autoHideDuration:0};const g=t.bind({});g.args={message:"Сообщение",icon:"info",position:"top-right",autoHideDuration:0};const u=t.bind({});u.args={message:"Сообщение",icon:"info",position:"top-center",autoHideDuration:0};const f=t.bind({});f.args={message:"Сообщение",icon:"success",position:"bottom-center",autoHideDuration:0};const h=t.bind({});h.args={message:"Сообщение",icon:"success",variant:"light",autoHideDuration:0};const x=t.bind({});x.args={title:"Заголовок",message:"Сообщение",icon:"info",variant:"light",autoHideDuration:0};var E,k,q;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(q=(k=s.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,N,O;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,L,M;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,z,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(Y=(z=i.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var F,X,K;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(K=(X=c.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var G,J,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => <Stage>
    <Toast {...args} />
  </Stage>`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Z,ee;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`args => <Stage>
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
  </Stage>`,...(be=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const pt=["MessageOnly","Success","Info","Warning","Error","WithTitle","WithTitleAndIcon","WithAvatar","WithAvatarAndTitle","TopRight","TopCenter","BottomCenter","LightVariant","LightWithTitle"];export{f as BottomCenter,c as Error,n as Info,h as LightVariant,x as LightWithTitle,s as MessageOnly,o as Success,u as TopCenter,g as TopRight,i as Warning,p as WithAvatar,d as WithAvatarAndTitle,m as WithTitle,l as WithTitleAndIcon,pt as __namedExportsOrder,lt as default};
