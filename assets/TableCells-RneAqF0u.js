import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as r}from"./styled-components.browser.esm-UUNjPRYl.js";import{d as o,c as u}from"./index-CA_YInif.js";import{T as m}from"./Text-DOS6fvGo.js";import{C as g}from"./Caption-BRBW8Cb7.js";import{L as y}from"./Link-I2za92aw.js";import{I as f}from"./InlineEdit-BuwkG6X4.js";/* empty css              */const c=r.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,i=r(m).attrs({as:"span"})`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d=r(g).attrs({variant:"C1-Regular-Comp"})`
  color: ${o};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x=({children:a,subtext:e})=>t.jsxs(c,{children:[t.jsx(i,{children:a}),e&&t.jsx(d,{children:e})]}),R=r.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,h=r.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({$color:a})=>a};
`,T=({color:a,children:e})=>t.jsxs(R,{children:[t.jsx(h,{$color:a}),t.jsx(i,{children:e})]}),v=r(y)`
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
`,w=({href:a,onClick:e,icon:n,children:s})=>t.jsx(v,{href:a,onClick:e,variant:n?"icon-left":"default",icon:n,target:a?"_blank":void 0,rel:"noopener noreferrer",children:s}),N=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,b=({avatar:a,children:e,subtext:n})=>t.jsxs(N,{children:[t.jsx("div",{style:{flexShrink:0},children:a}),t.jsxs(c,{children:[t.jsx(i,{children:e}),n&&t.jsx(d,{children:n})]})]}),C=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,k=({icon:a,children:e})=>t.jsxs(C,{children:[a,t.jsx(i,{children:e})]}),q=({value:a,onChange:e,onSave:n,onCancel:s,placeholder:l,disabled:p})=>t.jsx(f,{value:a,onChange:e,onSave:n,onCancel:s,placeholder:l,size:"m",bg:"primary",showIcon:!1,disabled:p,style:{width:"100%"}}),j=r.div`
  display: flex;
  align-items: center;
  gap: 0;
`,_=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  color: ${o};
  padding: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: ${u};
  }
`,I=({actions:a})=>t.jsx(j,{children:a.map(e=>t.jsx(_,{onClick:n=>{n.stopPropagation(),e.onClick()},title:e.title,"aria-label":e.title,children:e.icon},e.key))});x.__docgenInfo={description:"",methods:[],displayName:"TableCellText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"TableCellStatus",props:{color:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"TableCellLink",props:{href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"TableCellAvatar",props:{avatar:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"TableCellIconText",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"TableCellInlineEdit",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"TableCellActions",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  icon: React.ReactNode;
  onClick: () => void;
  title?: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  key: string;
  icon: React.ReactNode;
  onClick: () => void;
  title?: string;
}>`},description:""}}};export{b as T,q as a,T as b,x as c,k as d,w as e,I as f};
