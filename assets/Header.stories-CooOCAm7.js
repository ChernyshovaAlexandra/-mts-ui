import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{d as T,l as o}from"./styled-components.browser.esm-D7OA6UWf.js";/* empty css              */import{c as z}from"./index-Cpl4D9D3.js";import"./index-DatCARk7.js";const R={"H1-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-1.5px);
    }
  `,"H2-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 28px;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-0.5px);
    }
  `,"H3-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  `,"H4-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  `},_=T.h1`
  margin: 0;
  color: ${z};
  ${({variant:e})=>e&&R[e]};
`,n=({children:e,style:y,variant:i})=>w.jsx(_,{as:i==="H2-Wide"?"h2":i==="H3-Wide"?"h3":i==="H4-Wide"?"h4":"h1",variant:i,style:y,children:e});n.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide"',elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'}]},description:""}},composes:["Omit"]};const N={title:"МТС/Header",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["H1-Wide","H2-Wide","H3-Wide","H4-Wide"]}}},d=e=>w.jsx(n,{...e}),r=d.bind({});r.args={children:"Заголовок H1",variant:"H1-Wide"};const a=d.bind({});a.args={children:"Заголовок H2",variant:"H2-Wide"};const t=d.bind({});t.args={children:"Заголовок H3",variant:"H3-Wide"};const s=d.bind({});s.args={children:"Заголовок H4",variant:"H4-Wide"};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Header {...args} />",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,H,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Header {...args} />",...(h=(H=a.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var f,x,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Header {...args} />",...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,W,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Header {...args} />",...(S=(W=s.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const k=["H1","H2","H3","H4"];export{r as H1,a as H2,t as H3,s as H4,k as __namedExportsOrder,N as default};
