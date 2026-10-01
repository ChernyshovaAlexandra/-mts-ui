import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-mIjS73Jk.js";import{R as h}from"./RadioButton-WDKKzX0w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-UUNjPRYl.js";import"./mixins-DAii6Zu4.js";import"./style-ZrP7Bi_n.js";/* empty css              */import"./index-CA_YInif.js";import"./style-CSv-hX4L.js";const T={title:"МТС/FormItems/RadioButton",component:h,tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},o=({checked:k,onChange:t,...S})=>{const[v,b]=R.useState(!!k);return f.jsx(h,{...S,checked:v,onChange:n=>{b(n.target.checked),t==null||t(n)}})},e=o.bind({});e.args={name:"radioGroup1",value:"option1",label:"Select me",checked:!0};const a=o.bind({});a.args={name:"radioGroup2",value:"option2",label:"Select me",errorMessage:"Error: Something went wrong",checked:!1};const r=o.bind({});r.args={name:"radioGroup3",value:"option3",label:"Select me",checked:!1,disabled:!0};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <RadioButton {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <RadioButton {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  checked,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(!!checked);
  return <RadioButton {...args} checked={value} onChange={e => {
    setValue(e.target.checked);
    onChange?.(e);
  }} />;
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const W=["Default","WithError","Disabled"];export{e as Default,r as Disabled,a as WithError,W as __namedExportsOrder,T as default};
