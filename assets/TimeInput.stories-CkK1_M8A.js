import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{D as V,d as R}from"./ru-xUHRNvQw.js";import{i as q,W as D,b as F,a as _,E as W}from"./style-BTvnBIeH.js";import{y as H}from"./styled-components.browser.esm-BU5pfHrT.js";import{f as M,A}from"./useIcons-Do3klL4i.js";import{I as B}from"./IconTime-BGcHld1r.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-H7UieH10.js";import"./omit-BVcYdL5y.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./mixins-CTkzXf3m.js";/* empty css              */import"./index-CWlbk4Hf.js";import"./Keyframes-C_aWZ9en.js";import"./createIcon-CRC-JE94.js";var C=function(r,a){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(n[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(n[e[t]]=r[e[t]]);return n};const{TimePicker:N,RangePicker:$}=V,U=o.forwardRef((r,a)=>o.createElement($,Object.assign({},r,{picker:"time",mode:void 0,ref:a}))),c=o.forwardRef((r,a)=>{var{addon:n,renderExtraFooter:e,variant:t,bordered:i}=r,d=C(r,["addon","renderExtraFooter","variant","bordered"]);const[p]=A("timePicker",t,i),f=o.useMemo(()=>{if(e)return e;if(n)return n},[n,e]);return o.createElement(N,Object.assign({},d,{mode:void 0,ref:a,renderExtraFooter:f,variant:p}))}),w=M(c,"popupAlign",void 0,"picker");c._InternalPanelDoNotUseOrYouWillBeFired=w;c.RangePicker=U;c._InternalPanelDoNotUseOrYouWillBeFired=w;const Y=H(c)`
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
`,g=o.memo(o.forwardRef(({inputId:r,label:a,errorMessage:n,disabled:e,value:t=null,onChange:i,required:d},p)=>{const f=o.useMemo(()=>t?R(t,"HH:mm"):null,[t]),b=r?`${r}-error`:void 0;return s.jsxs(D,{children:[a&&s.jsx(F,{htmlFor:r,$invalidInput:!!n,children:a}),s.jsx(_,{children:s.jsx(Y,{ref:p,id:r,placeholder:"чч:мм",value:f,onChange:S=>{const y=S;i==null||i(y?y.format("HH:mm"):null)},suffixIcon:s.jsx(B,{}),format:"HH:mm",disabled:e,required:d,"aria-invalid":!!n,"aria-describedby":n?b:void 0})}),n&&s.jsx(W,{id:b,children:n})]})}));g.__docgenInfo={description:"",methods:[],displayName:"TimeInput",props:{inputId:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const me={title:"МТС/FormItems/TimeInput",component:g,tags:["autodocs"]},v=r=>{const[a,n]=o.useState(null);return s.jsx(g,{...r,value:a,onChange:e=>{e&&(console.log("Time changed:",e),n(e))}})},l=v.bind({});l.args={label:"Время встречи",errorMessage:""};const u=v.bind({});u.args={label:"Время встречи",errorMessage:"Неверный формат времени"};const m=v.bind({});m.args={label:"Время встречи",errorMessage:"",disabled:!0};var T,h,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var j,E,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <TimeInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Time changed:", val);
      setValue(val);
    }
  }} />;
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const ce=["Default","WithError","Disabled"];export{l as Default,m as Disabled,u as WithError,ce as __namedExportsOrder,me as default};
