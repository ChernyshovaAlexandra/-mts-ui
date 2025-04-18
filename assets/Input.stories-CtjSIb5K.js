import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DatCARk7.js";import{I as v}from"./Input-CYvrFISl.js";import"./style-BVcMHTMF.js";import"./styled-components.browser.esm-Cp418-ky.js";/* empty css              */import"./index-DItf0zJP.js";import"./IconInfo-b578O3wf.js";import"./IconLock-x38zUXh9.js";const _={title:"МТС/FormItems/Input",component:v,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},onBlur:{action:"blur"},onChange:{action:"change"},validatePattern:{table:{disable:!0}}},args:{value:""}},s=t=>{const[h,C]=b.useState(t.value||"");return f.jsx(v,{...t,value:h,onChange:n=>{C(n.target.value),t.onChange&&t.onChange(n)}})},e=s.bind({});e.args={placeholder:"Enter text"};const a=s.bind({});a.args={label:"Валидация",placeholder:"Enter your email",errorMessage:"Invalid email format",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};const r=s.bind({});r.args={disabled:!0,label:"Нередактируемый",value:"elena_sv@mts.ru",placeholder:"Enter your email",errorMessage:"Invalid email format",validatePattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/};var o,l,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,g,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={e => {
    setValue(e.target.value);
    // Если нужно вызвать действие из argTypes:
    if (args.onChange) args.onChange(e);
  }} />;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Default","WithValidation","Disabled"];export{e as Default,r as Disabled,a as WithValidation,j as __namedExportsOrder,_ as default};
