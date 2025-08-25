import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-CgfFrydU.js";import{I as f}from"./Input-CIkiAsW2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-Ca_MdG4J.js";import"./styled-components.browser.esm-CzyguTxk.js";import"./fonts-C-rNwtaq.js";import"./index-DzNPuTIb.js";import"./IconAttention--HYYox4d.js";const M={title:"МТС/FormItems/Input",component:f,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},onBlur:{action:"blur"},onChange:{action:"change"},validatePattern:{table:{disable:!0}}},args:{value:""}},n=s=>{const[w,V]=I.useState(s.value||"");return y.jsx(f,{...s,value:w,onChange:o=>{V(o.target.value),s.onChange&&s.onChange(o)}})},e=n.bind({});e.args={placeholder:"Enter text"};const a=n.bind({});a.args={label:"Email",placeholder:"Enter your email",errorMessage:"Почта введена некорректно или не зарегистрирована на платформе",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const r=n.bind({});r.args={disabled:!0,label:"Нередактируемый",value:"elena_sv@mts.ru",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const t=n.bind({});t.args={disabled:!1,label:"Введите код",type:"password",value:"12345",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,C,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const W=["Default","WithValidation","Disabled","Password"];export{e as Default,r as Disabled,t as Password,a as WithValidation,W as __namedExportsOrder,M as default};
