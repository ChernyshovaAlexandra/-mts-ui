import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-CgfFrydU.js";import{d as i,l as n}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconAttention--HYYox4d.js";import{e as g,k as v}from"./IconMinus-B3RIS-SV.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";import{T as f}from"./Text-C8FsFEkf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-S1LL3O2C.js";import"./fonts-C-rNwtaq.js";import"./index-DzNPuTIb.js";const t={active:"#1B1D20",disabled:"rgba(27, 29, 32, 0.12)",success:"#26CD58",error:"#F95721"},b=e=>{switch(e){case"current":case"active":return t.active;case"not_available":case"disabled":return t.disabled;case"answered_true":case"success":return t.success;case"answered_false":case"error":return t.error;default:return t.disabled}},h=i.div`
  display: flex;
  align-items: center;
  --gap: clamp(8px, 2.4vw, 16px);
  --divider-w: clamp(16px, 6vw, 60px);
  --size: clamp(20px, 5vw, 32px);

  display: flex;
  align-items: center;
  gap: var(--gap);

  /* мобильный: скролл + снап по кружкам */
  overflow-x: auto;
  padding: 0 4px;
  scroll-snap-type: x mandatory;

  /* прячем скроллбар */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    /* десктоп: растягиваем разделители, без скролла */
    overflow: visible;
    scroll-snap-type: none;
  }
`,w=i.div`
  --size: 24px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  flex-shrink: 0;
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
`,y=i.span`
  height: 2px;
  background: rgba(188, 195, 208, 0.5);

  flex: 0 0 var(--divider-w);

  margin: 0;

  @media (min-width: 768px) {
    flex: 1 1 auto;
    max-width: 120px;
  }
`,o=({steps:e})=>{const u=e.length-1;return s.jsx(h,{children:e.map(({index:d,status:r},x)=>s.jsxs(m.Fragment,{children:[s.jsx(w,{$status:r,children:r==="success"||r==="answered_true"?s.jsx(g,{width:16,height:16}):r==="error"||r==="answered_false"?s.jsx(v,{width:16,height:16}):s.jsx(f,{variant:"P4-Medium-Comp",children:d})}),x!==u&&s.jsx(y,{})]},d))})};o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:""}}};const $={title:"МТС/Stepper",component:o,tags:["autodocs"],argTypes:{steps:{control:"object",description:'Массив шагов: { index: number; status: "active"|"disabled"|"success"|"error" }[]'}},parameters:{backgrounds:{values:[{name:"grey canvas",value:"#fff"}],default:"grey canvas"}}},j={render:e=>s.jsx(o,{...e})},a={...j,args:{steps:[{index:1,status:"success"},{index:2,status:"success"},{index:3,status:"error"},{index:4,status:"active"},{index:5,status:"disabled"},{index:6,status:"success"},{index:7,status:"error"},{index:8,status:"active"},{index:9,status:"disabled"}]}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }, {
      index: 6,
      status: "success"
    }, {
      index: 7,
      status: "error"
    }, {
      index: 8,
      status: "active"
    }, {
      index: 9,
      status: "disabled"
    }]
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,$ as default};
