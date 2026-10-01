import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-mIjS73Jk.js";import{i as S,W as _,S as $,E as D}from"./style-CSv-hX4L.js";import{g as q}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as z}from"./mixins-DAii6Zu4.js";import{d as B}from"./index-CA_YInif.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */const F=q.textarea`
  box-sizing: border-box;
  ${S}
  padding-right: 16px;
  resize: vertical;
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  &:focus {
    border-color: ${B};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${z};
`,y=i.memo(i.forwardRef(({id:w,label:d,errorMessage:e,rows:h=7,"aria-describedby":I,...n},T)=>{const j=i.useId(),t=w||`textarea-${j}`,l=`${t}-error`,E=[I,e?l:void 0].filter(Boolean).join(" ")||void 0;return r.jsxs(_,{children:[d&&r.jsx($,{htmlFor:t,$invalidInput:!!e,children:d}),r.jsx(F,{...n,id:t,rows:h,ref:T,"aria-invalid":e?!0:n["aria-invalid"],"aria-describedby":E}),e&&r.jsx(D,{id:l,role:"alert",children:e})]})}));y.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},rows:{defaultValue:{value:"7",computed:!1},required:!1}},composes:["TextareaHTMLAttributes"]};const V={title:"МТС/FormItems/Textarea",component:y,tags:["autodocs"],args:{label:"Твоя история",placeholder:"Расскажи свою историю",rows:7}},a={},s={args:{errorMessage:"Расскажи историю"}},o={args:{disabled:!0,value:"Сохранённая история"}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    errorMessage: "Расскажи историю"
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "Сохранённая история"
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const k=["Default","Error","Disabled"];export{a as Default,o as Disabled,s as Error,k as __namedExportsOrder,V as default};
