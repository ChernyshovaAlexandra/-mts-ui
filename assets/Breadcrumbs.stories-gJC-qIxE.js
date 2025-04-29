import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DatCARk7.js";import{d as t}from"./styled-components.browser.esm-D7OA6UWf.js";import{c as o}from"./index-Cpl4D9D3.js";/* empty css              */import{S}from"./style-BihYZ8rY.js";const j=t.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 24px;
`,p=t(S)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${o};
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`,_=t.span`
  color: ${o};
  opacity: 0.4;
  cursor: default;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`,w=t.span`
  margin: 0 8px;
  color: ${o};
  display: inline-flex;
  align-items: center;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`,y=C.memo(({crumbs:m})=>r.jsxs(j,{children:[r.jsx(p,{href:"/",children:"Главная"}),m.map((n,i)=>r.jsxs("span",{children:[r.jsx(w,{children:"/"}),i===m.length-1?r.jsx(_,{children:n.name}):r.jsx(p,{href:n.path,children:n.name})]},i))]}));y.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{crumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  path: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:`Array<{
  name: string;
  path: string;
}>`},description:""}}};const M={title:"МТС/Breadcrumbs",component:y,tags:["autodocs"]},A=[{name:"Категория",path:"/category"},{name:"Подкатегория",path:"/category/sub"},{name:"Товар",path:"/category/sub/product"}],e={args:{crumbs:A}},s={args:{crumbs:[{name:"Только один уровень",path:"/single"}]}},a={args:{crumbs:[]}};var c,u,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    crumbs: sampleCrumbs
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,g,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      name: "Только один уровень",
      path: "/single"
    }]
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    crumbs: []
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const $=["Default","SingleCrumb","EmptyCrumbs"];export{e as Default,a as EmptyCrumbs,s as SingleCrumb,$ as __namedExportsOrder,M as default};
