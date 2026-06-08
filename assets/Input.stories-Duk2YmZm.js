import{j as I}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-G8LIXM5I.js";import{I as y}from"./Input-BE7fM2k_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-BTvnBIeH.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./mixins-CTkzXf3m.js";/* empty css              */import"./index-CWlbk4Hf.js";import"./IconAttention-OHJemvOI.js";const R={title:"МТС/FormItems/Input",component:y,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},onBlur:{action:"blur"},onChange:{action:"change"},validatePattern:{table:{disable:!0}}},args:{value:""}},n=o=>{const[E,S]=T.useState(o.value||"");return I.jsx(y,{...o,value:E,onChange:l=>{S(l.target.value),o.onChange&&o.onChange(l)}})},e=n.bind({});e.args={placeholder:"Enter text"};const a=n.bind({});a.args={label:"Email",placeholder:"Enter your email",errorMessage:"Почта введена некорректно или не зарегистрирована на платформе",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const r=n.bind({});r.args={label:"Корпоративный email",placeholder:"email@example.com",type:"email",corporative:!0,additionalAllowedDomains:["partner.example"],additionalAllowedEmails:["external.user@gmail.com"]};const t=n.bind({});t.args={disabled:!0,label:"Нередактируемый",value:"elena_sv@mts.ru",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const s=n.bind({});s.args={disabled:!1,label:"Введите код",type:"password",value:"12345",placeholder:"Enter your email",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};var u,i,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(g=(i=e.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,v,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var C,b,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,V,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const k=["Default","WithValidation","CorporativeWithAdditionalAllowedEmails","Disabled","Password"];export{r as CorporativeWithAdditionalAllowedEmails,e as Default,t as Disabled,s as Password,a as WithValidation,k as __namedExportsOrder,R as default};
