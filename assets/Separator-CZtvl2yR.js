import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as l}from"./styled-components.browser.esm-D7OA6UWf.js";import{e as n}from"./index-Cpl4D9D3.js";const p=({orientation:e="horizontal",thickness:a=1,length:t="100%",color:r=n,margin:i="8px 0",style:o})=>s.jsx(d,{orientation:e,thickness:a,length:t,color:r,margin:i,style:o}),d=l.div`
  background-color: ${({color:e})=>e};
  ${({orientation:e,thickness:a,length:t,margin:r})=>e==="horizontal"?`
    width: ${t};
    height: ${a}px;
    margin: ${r};
  `:`
    width: ${a}px;
    height: ${t};
    margin: ${r};
  `}
`;p.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},length:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"`#E6E9F0`",computed:!1}},margin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px 0"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{p as S};
