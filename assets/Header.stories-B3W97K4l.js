import{j as S}from"./jsx-runtime-Cf8x2fCZ.js";import{y as b,p as o}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as R}from"./mixins-ib8c4tLP.js";/* empty css              */import{E as _}from"./index-B66h-egn.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";const q={"H1-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 1.1;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-1.5px);
    }
  `,"H2-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 1.1;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-0.5px);
    }
  `,"H3-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
    }
  `,"H4-Wide":o`
    font-family: "MTS Wide", sans-serif;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.2;
    }
  `},M=b.h1`
  margin: 0;
  color: ${_};
  ${({$variant:e})=>e&&q[e]};
  ${R};
`,d=({children:e,style:T,variant:s,as:w,...v})=>{const z=w||(s==="H2-Wide"?"h2":s==="H3-Wide"?"h3":s==="H4-Wide"?"h4":"h1");return S.jsx(M,{as:z,$variant:s,style:T,...v,children:e})};d.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide"',elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'}]},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Y={title:"МТС/Typography/Header",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["H1-Wide","H2-Wide","H3-Wide","H4-Wide"]}}},n=e=>S.jsx(d,{...e}),r=n.bind({});r.args={children:"Заголовок H1",variant:"H1-Wide"};const a=n.bind({});a.args={children:"Заголовок H2",variant:"H2-Wide"};const t=n.bind({});t.args={children:"Заголовок H3",variant:"H3-Wide"};const i=n.bind({});i.args={children:"Заголовок H4",variant:"H4-Wide"};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Header {...args} />",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,H,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Header {...args} />",...(g=(H=a.parameters)==null?void 0:H.docs)==null?void 0:g.source}}};var h,f,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Header {...args} />",...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var W,x,y;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Header {...args} />",...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const J=["H1","H2","H3","H4"];export{r as H1,a as H2,t as H3,i as H4,J as __namedExportsOrder,Y as default};
