import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-G8LIXM5I.js";import{p as t,y as x}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as g}from"./mixins-CTkzXf3m.js";import{N as h,M as s,P as y,h as v,Q as $}from"./index-CWlbk4Hf.js";/* empty css              */const _="#1286D9",R={xs:t`
    height: 16px;
    padding: 1px 4px;
    font-size: 10px;
    line-height: 14px;
    border-radius: ${s};
  `,s:t`
    height: 20px;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 16px;
    border-radius: ${s};
  `,m:t`
    height: 24px;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 20px;
    border-radius: ${s};
  `,l:t`
    height: 32px;
    padding: 4px 10px;
    font-size: 16px;
    line-height: 24px;
    border-radius: ${h};
  `},S={default:t`
    background: ${v};
    color: ${$};
  `,custom:t`
    background: ${_};
    color: ${y};
  `},b=x.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  white-space: nowrap;
  box-sizing: border-box;

  ${({$size:e})=>R[e]}
  ${({$variant:e})=>S[e]}

  ${({$color:e})=>e&&t`background: ${e};`}
  ${({$textColor:e})=>e&&t`color: ${e};`}

  ${g};
`,w={xs:12,s:16,m:16,l:24},T=({children:e,size:r="s",variant:m="default",color:l,textColor:n,icon:a,iconPosition:o="left",className:u,style:c})=>{const d=w[r],i=a&&p.isValidElement(a)?p.cloneElement(a,{width:d,height:d}):a;return f.jsxs(b,{$size:r,$variant:m,$color:l,$textColor:l?n??"#ffffff":n,className:u,style:c,children:[i&&o==="left"&&i,e,i&&o==="right"&&i]})};T.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "custom"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{T as B};
