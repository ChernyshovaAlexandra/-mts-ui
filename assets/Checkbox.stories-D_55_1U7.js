import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{C as k}from"./Checkbox-BfWTMnP_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./mixins-CTkzXf3m.js";import"./index-CWlbk4Hf.js";/* empty css              */import"./style-BTvnBIeH.js";const y={title:"МТС/FormItems/Checkbox",component:k,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},t=({checked:p,onChange:s,...b})=>{const[C,x]=S.useState(!!p);return f.jsx(k,{...b,checked:C,onChange:c=>{x(c.target.checked),s==null||s(c)}})},e=t.bind({});e.args={name:"checkbox1",label:"Check me",errorMessage:"",checked:!0};const r=t.bind({});r.args={name:"checkbox2",label:"Check me",errorMessage:"Error: Something went wrong",checked:!1};const a=t.bind({});a.args={name:"checkbox3",label:"Check me",errorMessage:"",checked:!1,disabled:!0};var o,n,h;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(h=(n=e.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,g,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const F=["Default","WithError","Disabled"];export{e as Default,a as Disabled,r as WithError,F as __namedExportsOrder,y as default};
