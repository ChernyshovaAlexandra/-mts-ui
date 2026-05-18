import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-Dx_1l3Sb.js";import{p as t,y as f}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as x}from"./mixins-ib8c4tLP.js";import{D as g,h,E as y}from"./index-B66h-egn.js";/* empty css              */const v="#1286D9",R={xs:t`
    height: 16px;
    padding: 1px 4px;
    font-size: 10px;
    line-height: 14px;
    border-radius: 6px;
  `,s:t`
    height: 20px;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 6px;
  `,m:t`
    height: 24px;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
  `,l:t`
    height: 32px;
    padding: 4px 10px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
  `},$={default:t`
    background: ${h};
    color: ${y};
  `,custom:t`
    background: ${v};
    color: ${g};
  `},S=f.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  white-space: nowrap;
  box-sizing: border-box;

  ${({$size:e})=>R[e]}
  ${({$variant:e})=>$[e]}

  ${({$color:e})=>e&&t`background: ${e};`}
  ${({$textColor:e})=>e&&t`color: ${e};`}

  ${x};
`,b={xs:12,s:16,m:16,l:24},w=({children:e,size:s="s",variant:d="default",color:r,textColor:l,icon:a,iconPosition:n="left",className:m,style:u})=>{const o=b[s],i=a&&p.isValidElement(a)?p.cloneElement(a,{width:o,height:o}):a;return c.jsxs(S,{$size:s,$variant:d,$color:r,$textColor:r?l??"#ffffff":l,className:m,style:u,children:[i&&n==="left"&&i,e,i&&n==="right"&&i]})};w.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "custom"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{w as B};
