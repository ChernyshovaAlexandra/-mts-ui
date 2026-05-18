import{j as y}from"./jsx-runtime-Cf8x2fCZ.js";import{r as I}from"./index-Dx_1l3Sb.js";import{I as f}from"./Input-CR8KxtSK.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-CaScT4Df.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./index-B66h-egn.js";import"./IconAttention-OHJemvOI.js";const B={title:"МТС/FormItems/Input",component:f,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},onBlur:{action:"blur"},onChange:{action:"change"},validatePattern:{table:{disable:!0}}},args:{value:""}},n=s=>{const[w,V]=I.useState(s.value||"");return y.jsx(f,{...s,value:w,onChange:o=>{V(o.target.value),s.onChange&&s.onChange(o)}})},e=n.bind({});e.args={placeholder:"Enter text"};const a=n.bind({});a.args={label:"Email",placeholder:"Enter your email",errorMessage:"Почта введена некорректно или не зарегистрирована на платформе",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const r=n.bind({});r.args={disabled:!0,label:"Нередактируемый",value:"elena_sv@mts.ru",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const t=n.bind({});t.args={disabled:!1,label:"Введите код",type:"password",value:"12345",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var h,C,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const F=["Default","WithValidation","Disabled","Password"];export{e as Default,r as Disabled,t as Password,a as WithValidation,F as __namedExportsOrder,B as default};
