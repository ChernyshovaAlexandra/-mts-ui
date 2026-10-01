import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-mIjS73Jk.js";import{D as V,g as R,u as q,d as D}from"./ru-j5oUs7AM.js";import{i as F,W as _,S as W,I as H,E as M}from"./style-CSv-hX4L.js";import{g as B}from"./styled-components.browser.esm-UUNjPRYl.js";import{I as C}from"./IconTime-7NljV5W2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./objectWithoutProperties-D1XObzAp.js";import"./omit-Duhjc17p.js";import"./genStyleUtils-0FiciY4a.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./Keyframes-DTt6P7nv.js";import"./mixins-DAii6Zu4.js";/* empty css              */import"./index-CA_YInif.js";import"./createIcon-CuvqBQrk.js";var N=function(r,a){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(n[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(n[e[t]]=r[e[t]]);return n};const{TimePicker:$,RangePicker:A}=V,U=o.forwardRef((r,a)=>o.createElement(A,Object.assign({},r,{picker:"time",mode:void 0,ref:a}))),c=o.forwardRef((r,a)=>{var{addon:n,renderExtraFooter:e,variant:t,bordered:i}=r,d=N(r,["addon","renderExtraFooter","variant","bordered"]);const[p]=q("timePicker",t,i),g=o.useMemo(()=>{if(e)return e;if(n)return n},[n,e]);return o.createElement($,Object.assign({},d,{mode:void 0,ref:a,renderExtraFooter:g,variant:p}))}),S=R(c,"popupAlign",void 0,"picker");c._InternalPanelDoNotUseOrYouWillBeFired=S;c.RangePicker=U;c._InternalPanelDoNotUseOrYouWillBeFired=S;const Y=B(c)`
  ${F}
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
`,f=o.memo(o.forwardRef(({inputId:r,label:a,errorMessage:n,disabled:e,value:t=null,onChange:i,required:d},p)=>{const g=o.useMemo(()=>t?D(t,"HH:mm"):null,[t]),b=r?`${r}-error`:void 0;return s.jsxs(_,{children:[a&&s.jsx(W,{htmlFor:r,$invalidInput:!!n,children:a}),s.jsx(H,{children:s.jsx(Y,{ref:p,id:r,placeholder:"чч:мм",value:g,onChange:w=>{const y=w;i==null||i(y?y.format("HH:mm"):null)},suffixIcon:s.jsx(C,{}),format:"HH:mm",disabled:e,required:d,"aria-invalid":!!n,"aria-describedby":n?b:void 0})}),n&&s.jsx(M,{id:b,children:n})]})}));f.__docgenInfo={description:"",methods:[],displayName:"TimeInput",props:{inputId:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const ue={title:"МТС/FormItems/TimeInput",component:f,tags:["autodocs"]},v=r=>{const[a,n]=o.useState(null);return s.jsx(f,{...r,value:a,onChange:e=>{e&&(console.log("Time changed:",e),n(e))}})},l=v.bind({});l.args={label:"Время встречи",errorMessage:""};const u=v.bind({});u.args={label:"Время встречи",errorMessage:"Неверный формат времени"};const m=v.bind({});m.args={label:"Время встречи",errorMessage:"",disabled:!0};var T,h,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const me=["Default","WithError","Disabled"];export{l as Default,m as Disabled,u as WithError,me as __namedExportsOrder,ue as default};
