import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{p as t,y as a}from"./styled-components.browser.esm-BU5pfHrT.js";import{D as s}from"./index-CWlbk4Hf.js";import{v as l}from"./mixins-CTkzXf3m.js";const p=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$orientation:e,$padding:i})=>e==="horizontal"?t`
          flex: 1;
          padding: 0 ${i}px;
        `:t`
          flex-direction: column;
          padding: ${i}px 0;
        `}

  ${l};
`,d=a.div`
  background: ${s};

  ${({$orientation:e})=>e==="horizontal"?t`
          width: 100%;
          height: 1px;
        `:t`
          width: 1px;
          height: 100%;
        `}
`,m=({orientation:e="horizontal",padding:i=0,className:o,style:n})=>r.jsx(p,{role:"separator","aria-orientation":e,$orientation:e,$padding:i,className:o,style:n,children:r.jsx(d,{$orientation:e})});m.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},padding:{required:!1,tsType:{name:"number"},description:"Паддинг по осям, перпендикулярным линии. Horizontal: top/bottom. Vertical: left/right.",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{m as D};
