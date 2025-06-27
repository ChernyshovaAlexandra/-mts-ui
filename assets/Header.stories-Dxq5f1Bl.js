import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{d as z,l as o}from"./styled-components.browser.esm-CzyguTxk.js";import{v as R}from"./fonts-C-rNwtaq.js";import{c as _}from"./index-CC-WJBSK.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const b={"H1-Wide":o`
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
  `},M=z.h1`
  margin: 0;
  color: ${_};
  ${({variant:e})=>e&&b[e]};
  ${R};
`,d=({children:e,style:w,variant:s,...T})=>{const v=s==="H2-Wide"?"h2":s==="H3-Wide"?"h3":s==="H4-Wide"?"h4":"h1";return S.jsx(M,{as:v,variant:s,style:w,...T,children:e})};d.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide"',elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'}]},description:""}},composes:["Omit"]};const E={title:"МТС/Header",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["H1-Wide","H2-Wide","H3-Wide","H4-Wide"]}}},n=e=>S.jsx(d,{...e}),r=n.bind({});r.args={children:"Заголовок H1",variant:"H1-Wide"};const a=n.bind({});a.args={children:"Заголовок H2",variant:"H2-Wide"};const i=n.bind({});i.args={children:"Заголовок H3",variant:"H3-Wide"};const t=n.bind({});t.args={children:"Заголовок H4",variant:"H4-Wide"};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Header {...args} />",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,H,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Header {...args} />",...(h=(H=a.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var f,g,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Header {...args} />",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,W,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Header {...args} />",...(y=(W=t.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};const I=["H1","H2","H3","H4"];export{r as H1,a as H2,i as H3,t as H4,I as __namedExportsOrder,E as default};
