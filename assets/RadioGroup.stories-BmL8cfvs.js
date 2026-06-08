import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-G8LIXM5I.js";import{R as W}from"./RadioButton-BK4UbLy6.js";import{y as m}from"./styled-components.browser.esm-BU5pfHrT.js";import{b as B,E as D}from"./style-BTvnBIeH.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mixins-CTkzXf3m.js";import"./style-afSt-2-G.js";/* empty css              */import"./index-CWlbk4Hf.js";const H=m.div`
  display: flex;
  flex-direction: column;
`,L=m(B)`
  margin-bottom: 4px;
  line-height: 1.4;
`,k=m.div`
  display: flex;
  gap: 8px;

  &[data-direction="vertical"] {
    flex-direction: column;
  }

  &[data-direction="horizontal"] {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 4px;
  }
`,g=({name:e,label:o,options:p,value:l,onChange:I,errorMessage:t,direction:v="vertical"})=>{const h=u.useId(),b=`${e}-${h}-label`,f=`${e}-${h}-error`,O=d=>{I(d.target.value)};return r.jsxs(H,{role:"radiogroup","aria-labelledby":o?b:void 0,"aria-invalid":!!t,"aria-describedby":t?f:void 0,"data-direction":v,children:[o&&r.jsx(L,{$invalidInput:!!t,id:b,children:o}),r.jsx(k,{"data-direction":v,children:p.map(({value:d,label:$,disabled:N},_)=>r.jsx(W,{name:e,value:d,label:$,checked:l===d,disabled:N,onChange:O},`radio-button-${_}`))}),t&&r.jsx(D,{id:f,children:t})]})};g.displayName="RadioGroup";const E=u.memo(g);g.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:"Имя для атрибута `name` всех радио‑кнопок"},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Подпись группы, будет связана через `aria-labelledby`"},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:"Список вариантов"},value:{required:!1,tsType:{name:"string"},description:"Текущее выбранное значение"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Коллбек при выборе варианта"},errorMessage:{required:!1,tsType:{name:"string"},description:"Сообщение об ошибке (например, валидация формы)"},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Направление отображения",defaultValue:{value:'"vertical"',computed:!1}}}};const ae={title:"МТС/FormItems/RadioGroup",component:E,tags:["autodocs"],argTypes:{errorMessage:{control:"text"},direction:{control:{type:"radio",options:["vertical","horizontal"]}},onChange:{action:"change"}}},A=[{value:"one",label:"Один"},{value:"two",label:"Два"},{value:"three",label:"Три"}],c=e=>{const[o,p]=u.useState(e.value??"");return r.jsx(E,{...e,value:o,onChange:l=>{p(l),e.onChange&&e.onChange(l)}})},a=c.bind({});a.args={name:"vertical-sample",label:"Выберите вариант",options:A,direction:"vertical"};const n=c.bind({});n.args={...a.args,name:"horizontal-sample",direction:"horizontal"};const s=c.bind({});s.args={...a.args,name:"error-sample",errorMessage:"Необходимо выбрать вариант"};const i=c.bind({});i.args={...a.args,name:"disabled-sample",options:[{value:"one",label:"Один"},{value:"two",label:"Два",disabled:!0},{value:"three",label:"Три"}]};var y,R,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(args.value ?? "");
  return <RadioGroup {...args} value={val} onChange={v => {
    setVal(v);
    if (args.onChange) args.onChange(v);
  }} />;
}`,...(x=(R=a.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var C,G,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(args.value ?? "");
  return <RadioGroup {...args} value={val} onChange={v => {
    setVal(v);
    if (args.onChange) args.onChange(v);
  }} />;
}`,...(w=(G=n.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var V,S,T;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(args.value ?? "");
  return <RadioGroup {...args} value={val} onChange={v => {
    setVal(v);
    if (args.onChange) args.onChange(v);
  }} />;
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,z,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(args.value ?? "");
  return <RadioGroup {...args} value={val} onChange={v => {
    setVal(v);
    if (args.onChange) args.onChange(v);
  }} />;
}`,...(q=(z=i.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const re=["Vertical","Horizontal","WithError","DisabledOption"];export{i as DisabledOption,n as Horizontal,a as Vertical,s as WithError,re as __namedExportsOrder,ae as default};
