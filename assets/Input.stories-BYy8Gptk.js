import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DatCARk7.js";import{I as v}from"./Input-CDJGMJsu.js";import"./style-Bb4nZj6h.js";import"./styled-components.browser.esm-D7OA6UWf.js";/* empty css              */import"./index-Cpl4D9D3.js";import"./IconInfo-b578O3wf.js";import"./IconLock-x38zUXh9.js";const _={title:"МТС/FormItems/Input",component:v,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},onBlur:{action:"blur"},onChange:{action:"change"},validatePattern:{table:{disable:!0}}},args:{value:""}},s=t=>{const[h,C]=f.useState(t.value||"");return b.jsx(v,{...t,value:h,onChange:n=>{C(n.target.value),t.onChange&&t.onChange(n)}})},e=s.bind({});e.args={placeholder:"Enter text"};const a=s.bind({});a.args={label:"Email",placeholder:"Enter your email",errorMessage:"Почта введена некорректно или не зарегистрирована на платформе",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const r=s.bind({});r.args={disabled:!0,label:"Нередактируемый",value:"elena_sv@mts.ru",placeholder:"Enter your email",errorMessage:"Invalid email format",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};var o,l,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,i,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Default","WithValidation","Disabled"];export{e as Default,r as Disabled,a as WithValidation,j as __namedExportsOrder,_ as default};
