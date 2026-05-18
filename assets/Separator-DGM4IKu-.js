import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{y as l}from"./styled-components.browser.esm-y4XIFzD1.js";import{n}from"./index-B66h-egn.js";const p=({orientation:e="horizontal",thickness:a=1,length:r="100%",color:t=n,margin:i="8px 0",style:o})=>s.jsx(u,{role:"separator","aria-orientation":e,orientation:e,thickness:a,length:r,color:t,margin:i,style:o}),u=l.div`
  background-color: ${({color:e})=>e};
  ${({orientation:e,thickness:a,length:r,margin:t})=>e==="horizontal"?`
    width: ${r};
    height: ${a}px;
    margin: ${t};
  `:`
    width: ${a}px;
    height: ${r};
    margin: ${t};
  `}
`;p.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},length:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"`#E6E9F0`",computed:!1}},margin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"8px 0"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{p as S};
