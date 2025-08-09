import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-CgfFrydU.js";import{d as e}from"./styled-components.browser.esm-CzyguTxk.js";import{v as n}from"./fonts-C-rNwtaq.js";import{c as i}from"./index-DzNPuTIb.js";import{S as $}from"./style-CNLsM0QV.js";import"./_commonjsHelpers-CqkleIqs.js";const _=e.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  font-size: 14px;
  ${n};
`,c=e.li`
  display: flex;
  align-items: center;
`,l=e($)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${i};
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${n};
`,v=e.span`
  color: ${i};
  opacity: 0.4;
  cursor: default;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${n};
`,w=e.span`
  margin: 0 8px;
  color: ${i};
  display: inline-flex;
  align-items: center;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${n};
`,j=S.memo(({crumbs:m})=>r.jsx("nav",{"aria-label":"Хлебные крошки",children:r.jsxs(_,{children:[r.jsx(c,{children:r.jsx(l,{href:"/",children:"Главная"})}),m.map((o,p)=>r.jsxs(c,{children:[r.jsx(w,{"aria-hidden":"true",children:"/"}),p===m.length-1?r.jsx(v,{"aria-current":"page",children:o.name}):r.jsx(l,{href:o.path,children:o.name})]},p))]})}));j.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{crumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:`Array<{
  name: string;
  path: string;
}>`},description:""}}};const D={title:"МТС/Breadcrumbs",component:j,tags:["autodocs"]},A=[{name:"Категория",path:"/category"},{name:"Подкатегория",path:"/category/sub"},{name:"Товар",path:"/category/sub/product"}],a={args:{crumbs:A}},s={args:{crumbs:[{name:"Только один уровень",path:"/single"}]}},t={args:{crumbs:[]}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    crumbs: sampleCrumbs
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      name: "Только один уровень",
      path: "/single"
    }]
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,b,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    crumbs: []
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const L=["Default","SingleCrumb","EmptyCrumbs"];export{a as Default,t as EmptyCrumbs,s as SingleCrumb,L as __namedExportsOrder,D as default};
