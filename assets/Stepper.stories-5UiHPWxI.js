import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as x}from"./index-CgfFrydU.js";import{d as i,l as n}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconEyeOff-Ktx11c4b.js";import{e as g,j as f}from"./IconMinus-C8rc2V5Y.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";import{T as h}from"./Text-8i9Qlr8o.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-DeUQ_LHI.js";import"./fonts-C-rNwtaq.js";import"./index-DzNPuTIb.js";const t={active:"#1B1D20",disabled:"rgba(27, 29, 32, 0.12)",success:"#26CD58",error:"#F95721"},b=e=>{switch(e){case"current":case"active":return t.active;case"not_available":case"disabled":return t.disabled;case"answered_true":case"success":return t.success;case"answered_false":case"error":return t.error;default:return t.disabled}},v=i.div`
  display: flex;
  align-items: center;
`,j=i.div`
  --size: 24px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  font:
    700 20px / var(--size) "Inter",
    sans-serif;
  text-align: center;
  color: #fff;
  padding: 4px;

  svg {
    path {
      stroke-width: 4px;
    }
  }
  p {
    line-height: 1.4;
  }

  ${({$status:e})=>n`
    background: ${b(e)};
    ${["disabled","not_available"].includes(e)&&n`
      color: rgba(0, 0, 0, 0.3);
    `}
    ${e==="active"&&n`
      p {
        color: #fff;
      }
    `}
  `}
`,w=i.span`
  display: inline-block;
  width: 60px;
  height: 2px;
  margin: 0 12px;
  background: rgba(188, 195, 208, 0.5);
`,o=({steps:e})=>{const u=e.length-1;return s.jsx(v,{children:e.map(({index:c,status:r},m)=>s.jsxs(x.Fragment,{children:[s.jsx(j,{$status:r,children:r==="success"||r==="answered_true"?s.jsx(g,{width:16,height:16}):r==="error"||r==="answered_false"?s.jsx(f,{width:16,height:16}):s.jsx(h,{variant:"P4-Medium-Comp",children:c})}),m!==u&&s.jsx(w,{})]},c))})};o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:""}}};const F={title:"МТС/Stepper",component:o,tags:["autodocs"],argTypes:{steps:{control:"object",description:'Массив шагов: { index: number; status: "active"|"disabled"|"success"|"error" }[]'}},parameters:{backgrounds:{values:[{name:"grey canvas",value:"#fff"}],default:"grey canvas"}}},_={render:e=>s.jsx(o,{...e})},a={..._,args:{steps:[{index:1,status:"success"},{index:2,status:"success"},{index:3,status:"error"},{index:4,status:"active"},{index:5,status:"disabled"}]}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    steps: [{
      index: 1,
      status: "success"
    }, {
      index: 2,
      status: "success"
    }, {
      index: 3,
      status: "error"
    }, {
      index: 4,
      status: "active"
    }, {
      index: 5,
      status: "disabled"
    }]
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,F as default};
