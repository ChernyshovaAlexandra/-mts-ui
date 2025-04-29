import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DatCARk7.js";import{d as i}from"./styled-components.browser.esm-D7OA6UWf.js";import{S as B}from"./style-CW4JnBuq.js";import{E}from"./style-Bb4nZj6h.js";/* empty css              */import"./index-Cpl4D9D3.js";const T=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;

  input {
    display: none;
  }

  input:checked + svg {
    circle:first-child {
      stroke: #1d2023;
    }
    circle:last-child {
      fill: #1d2023;
    }
  }

  &:hover svg {
    circle:first-child {
      stroke-width: 1.7px;
    }
  }
`,C=i.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: #1d2023;
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`,_=i(B)`
  cursor: pointer;
  text-align: left;
`,c=k.memo(({style:o,checked:b,onChange:S,label:j,name:l,value:d,errorMessage:p,disabled:v})=>{const a=`${l}-${d}`;return e.jsxs(e.Fragment,{children:[e.jsxs(T,{as:"label",htmlFor:a,children:[e.jsxs(C,{style:o,children:[e.jsx("input",{name:l,id:a,disabled:v,type:"radio",checked:b,onChange:S,value:d}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7.5",stroke:"currentColor"}),e.jsx("circle",{cx:"8.00055",cy:"8.00006",r:"3.19586",fill:"currentColor"})]})]}),e.jsx(_,{as:"label",variant:"P3-Regular-Comp",htmlFor:a,children:j})]}),p&&e.jsx(E,{children:p})]})});c.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};const M={title:"МТС/FormItems/RadioButton",component:c,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},n=o=>e.jsx(c,{...o}),r=n.bind({});r.args={name:"radioGroup1",value:"option1",label:"Select me",checked:!0};const t=n.bind({});t.args={name:"radioGroup2",value:"option2",label:"Select me",errorMessage:"Error: Something went wrong",checked:!1};const s=n.bind({});s.args={name:"radioGroup3",value:"option3",label:"Select me",checked:!1,disabled:!0};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var R,w,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const P=["Default","WithError","Disabled"];export{r as Default,s as Disabled,t as WithError,P as __namedExportsOrder,M as default};
