import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CgfFrydU.js";import{m as o}from"./index-DzNPuTIb.js";import{d as n,m as p}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconAttention--HYYox4d.js";import{a as m}from"./IconMinus-B3RIS-SV.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";const l=p`
  to { transform: rotate(360deg); }
`,d=n(m)`
  display: inline-block;
  transform-origin: center center;
  animation: ${l} ${({speed:e})=>e||"1.5s"} linear infinite;
  width: ${({width:e})=>e||"1.5rem"};
  height: ${({height:e})=>e||"1.5rem"};
  color: ${({color:e})=>e||"#fff"};
`,c=a.memo(({color:e=o,speed:i="1.5s",style:s,size:r="1.5rem"})=>t.jsx("div",{role:"status","aria-live":"polite","aria-label":"Загрузка",style:{display:"inline-flex",alignItems:"center",...s},children:t.jsx(d,{color:e,speed:i,width:r,height:r,"aria-hidden":"true"})}));c.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"`#FF0032`",computed:!1}},speed:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1.5s"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1.5rem"',computed:!1}}}};export{c as S};
