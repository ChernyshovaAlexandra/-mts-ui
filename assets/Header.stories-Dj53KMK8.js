import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{d as b,l as o}from"./styled-components.browser.esm-CzyguTxk.js";import{v as R}from"./fonts-C-rNwtaq.js";import{c as _}from"./index-DzNPuTIb.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const q={"H1-Wide":o`
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
  `},M=b.h1`
  margin: 0;
  color: ${_};
  ${({variant:e})=>e&&q[e]};
  ${R};
`,d=({children:e,style:T,variant:t,as:w,...v})=>{const z=w||(t==="H2-Wide"?"h2":t==="H3-Wide"?"h3":t==="H4-Wide"?"h4":"h1");return S.jsx(M,{as:z,variant:t,style:T,...v,children:e})};d.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide"',elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'}]},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const O={title:"МТС/Header",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["H1-Wide","H2-Wide","H3-Wide","H4-Wide"]}}},n=e=>S.jsx(d,{...e}),r=n.bind({});r.args={children:"Заголовок H1",variant:"H1-Wide"};const a=n.bind({});a.args={children:"Заголовок H2",variant:"H2-Wide"};const i=n.bind({});i.args={children:"Заголовок H3",variant:"H3-Wide"};const s=n.bind({});s.args={children:"Заголовок H4",variant:"H4-Wide"};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Header {...args} />",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,H,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Header {...args} />",...(f=(H=a.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var h,g,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Header {...args} />",...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,W,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Header {...args} />",...(y=(W=s.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};const P=["H1","H2","H3","H4"];export{r as H1,a as H2,i as H3,s as H4,P as __namedExportsOrder,O as default};
