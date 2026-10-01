import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-mIjS73Jk.js";import{C as i}from"./Checkbox-BGHdGiHT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-UUNjPRYl.js";import"./mixins-DAii6Zu4.js";import"./index-CA_YInif.js";/* empty css              */import"./style-CSv-hX4L.js";const W={title:"МТС/FormItems/Checkbox",component:i,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},c=({checked:p,onChange:s,...b})=>{const[C,x]=S.useState(!!p);return f.jsx(i,{...b,checked:C,onChange:t=>{x(t.target.checked),s==null||s(t)}})},e=c.bind({});e.args={name:"checkbox1",label:"Check me",errorMessage:"",checked:!0};const r=c.bind({});r.args={name:"checkbox2",label:"Check me",errorMessage:"Error: Something went wrong",checked:!1};const a=c.bind({});a.args={name:"checkbox3",label:"Check me",errorMessage:"",checked:!1,disabled:!0};var o,n,h;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(h=(n=e.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,g,k;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <Checkbox {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const y=["Default","WithError","Disabled"];export{e as Default,a as Disabled,r as WithError,y as __namedExportsOrder,W as default};
