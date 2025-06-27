import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CgfFrydU.js";import{d}from"./styled-components.browser.esm-CzyguTxk.js";import{v as S}from"./fonts-C-rNwtaq.js";import{S as C}from"./style-B4_zK0lS.js";import{E as $}from"./style-CQ3ArA7Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CC-WJBSK.js";const _=d.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${S};

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
`,D=d.div`
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
`,N=d(C)`
  cursor: pointer;
  text-align: left;
  ${S};
`,l=c.memo(c.forwardRef(({style:o,checked:j,onChange:k,label:B,name:m,value:u,errorMessage:r,disabled:E},I)=>{const T=c.useId(),i=`${m}-${u}-${T}`,n=`${i}-error`;return e.jsxs(e.Fragment,{children:[e.jsxs(_,{as:"label",htmlFor:i,"aria-describedby":r?n:void 0,children:[e.jsxs(D,{style:o,children:[e.jsx("input",{ref:I,name:m,id:i,disabled:E,type:"radio",checked:j,onChange:k,value:u,"aria-invalid":!!r,"aria-describedby":r?n:void 0}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7.5",stroke:"currentColor"}),e.jsx("circle",{cx:"8.00055",cy:"8.00006",r:"3.19586",fill:"currentColor"})]})]}),e.jsx(N,{as:"span",variant:"P3-Regular-Comp",children:B})]}),r&&e.jsx($,{id:n,children:r})]})}));l.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};const M={title:"МТС/FormItems/RadioButton",component:l,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},p=o=>e.jsx(l,{...o}),t=p.bind({});t.args={name:"radioGroup1",value:"option1",label:"Select me",checked:!0};const s=p.bind({});s.args={name:"radioGroup2",value:"option2",label:"Select me",errorMessage:"Error: Something went wrong",checked:!1};const a=p.bind({});a.args={name:"radioGroup3",value:"option3",label:"Select me",checked:!1,disabled:!0};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var R,v,w;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:"(args: any) => <RadioButton {...args} />",...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const O=["Default","WithError","Disabled"];export{t as Default,a as Disabled,s as WithError,O as __namedExportsOrder,M as default};
