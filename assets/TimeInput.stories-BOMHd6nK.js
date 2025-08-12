import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CgfFrydU.js";import{D as V,d as R}from"./ru-BCVzI4WJ.js";import{i as q,W as D,S as F,I as _,E as W}from"./style-Ca_MdG4J.js";import{d as H}from"./styled-components.browser.esm-CzyguTxk.js";import{g as M,u as B}from"./useIcons-W8KT2URs.js";import{I as C}from"./IconTime-WL88UYBd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-DC7KZOMn.js";import"./omit-BiApCgfr.js";import"./index-FwlZ0Bdg.js";import"./index-B2KKL2uI.js";import"./fonts-C-rNwtaq.js";import"./index-DzNPuTIb.js";import"./ResizeObserver.es-B1PUzC5B.js";var N=function(r,t){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(n[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(n[e[a]]=r[e[a]]);return n};const{TimePicker:$,RangePicker:A}=V,U=o.forwardRef((r,t)=>o.createElement(A,Object.assign({},r,{picker:"time",mode:void 0,ref:t}))),m=o.forwardRef((r,t)=>{var{addon:n,renderExtraFooter:e,variant:a,bordered:i}=r,d=N(r,["addon","renderExtraFooter","variant","bordered"]);const[p]=B("timePicker",a,i),f=o.useMemo(()=>{if(e)return e;if(n)return n},[n,e]);return o.createElement($,Object.assign({},d,{mode:void 0,ref:t,renderExtraFooter:f,variant:p}))}),S=M(m,"popupAlign",void 0,"picker");m._InternalPanelDoNotUseOrYouWillBeFired=S;m.RangePicker=U;m._InternalPanelDoNotUseOrYouWillBeFired=S;const Y=H(m)`
  ${q}
  height: auto;
  width: 100%;
  padding-right: 12px;

  .ant-picker-input > input:focus {
    outline: none;
    box-shadow: none;
  }

  &.ant-picker {
    cursor: pointer;
    background: #fff;

    &:hover {
      background: #fff;
    }
  }

  &.ant-picker-focused {
    box-shadow: none;
  }

  .ant-picker-input > input {
    font-family: "MTS Compact", Arial, sans-serif;
    font-size: 16px;
  }

  .ant-picker-suffix {
    color: #8d969f;
  }
`,g=o.memo(o.forwardRef(({inputId:r,label:t,errorMessage:n,disabled:e,value:a=null,onChange:i,required:d},p)=>{const f=o.useMemo(()=>a?R(a,"HH:mm"):null,[a]),b=r?`${r}-error`:void 0;return s.jsxs(D,{children:[t&&s.jsx(F,{htmlFor:r,$invalidInput:!!n,children:t}),s.jsx(_,{children:s.jsx(Y,{ref:p,id:r,placeholder:"чч:мм",value:f,onChange:w=>{const y=w;i==null||i(y?y.format("HH:mm"):null)},suffixIcon:s.jsx(C,{}),format:"HH:mm",disabled:e,required:d,"aria-invalid":!!n,"aria-describedby":n?b:void 0})}),n&&s.jsx(W,{id:b,children:n})]})}));g.__docgenInfo={description:"",methods:[],displayName:"TimeInput",props:{inputId:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const ie={title:"МТС/FormItems/TimeInput",component:g,tags:["autodocs"]},v=r=>{const[t,n]=o.useState(null);return s.jsx(g,{...r,value:t,onChange:e=>{e&&(console.log("Time changed:",e),n(e))}})},l=v.bind({});l.args={label:"Время встречи",errorMessage:""};const u=v.bind({});u.args={label:"Время встречи",errorMessage:"Неверный формат времени"};const c=v.bind({});c.args={label:"Время встречи",errorMessage:"",disabled:!0};var T,h,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <TimeInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Time changed:", val);
      setValue(val);
    }
  }} />;
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var P,k,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <TimeInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Time changed:", val);
      setValue(val);
    }
  }} />;
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var j,E,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <TimeInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Time changed:", val);
      setValue(val);
    }
  }} />;
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const le=["Default","WithError","Disabled"];export{l as Default,c as Disabled,u as WithError,le as __namedExportsOrder,ie as default};
