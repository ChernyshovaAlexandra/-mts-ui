import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{R as O}from"./index-G8LIXM5I.js";import{c as j}from"./createIcon-CRC-JE94.js";import{D as F}from"./Divider-Hfq20kUk.js";import{y as o,p as _}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as k}from"./mixins-CTkzXf3m.js";import{S as N,n as P,P as V,U as W,Q as E,b as Z,a as H,h as U}from"./index-CWlbk4Hf.js";/* empty css              */import{T as X}from"./Text-2zki5lTF.js";import{t as L}from"./style-afSt-2-G.js";import{C as Q}from"./Caption-YytOdcIh.js";const C=j({"24-outline":n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1087 8.22455C17.4015 8.51744 17.4016 8.99232 17.1087 9.28521L11.1967 15.1972C11.056 15.3379 10.8653 15.4169 10.6663 15.4169C10.4674 15.4169 10.2767 15.3379 10.136 15.1972L6.80268 11.8639C6.50978 11.571 6.50978 11.0961 6.80268 10.8032C7.09557 10.5104 7.57044 10.5104 7.86334 10.8032L10.6663 13.6062L16.048 8.22455C16.3409 7.93166 16.8158 7.93166 17.1087 8.22455Z",fill:"currentColor"})},"IconDoneS"),S=j({"24-outline":n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0001 12C17.0001 12.4142 16.6643 12.75 16.2501 12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H16.2501C16.6643 11.25 17.0001 11.5858 17.0001 12Z",fill:"currentColor"})},"IconFailedS"),s={s:24,m:48},J={s:24,m:48},g={s:12,m:18},K=6,Y=30,ee=100,$={primary:"#FF0032",secondary:E},b=Z,v=H,w=P,ie=U,ne=E,R=V,D=W,te=o.div`
  display: inline-flex;
  flex-direction: ${({$orientation:e})=>e==="horizontal"?"column":"row"};
  align-items: flex-start;
  gap: ${({$orientation:e})=>e==="horizontal"?"12px":"16px"};
`,re=o.div`
  position: relative;
  width: ${({$size:e})=>s[e]}px;
  min-width: ${({$size:e})=>s[e]}px;
  max-width: ${({$size:e})=>s[e]}px;
  height: ${({$size:e})=>s[e]}px;
  min-height: ${({$size:e})=>s[e]}px;
  max-height: ${({$size:e})=>s[e]}px;
  flex: 0 0 ${({$size:e})=>s[e]}px;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${k};
`,ae=o.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  flex: 0 0 auto;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: ${({$bg:e})=>e};
  color: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.2s ease;
`,oe=o.span`
  ${L["P4-Medium-Comp"]};
  font-size: 12px;
  letter-spacing: -1px;
  color: inherit;
  max-width: calc(100% - 4px);
  margin: 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
`,le=o.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({$size:e})=>g[e]}px;
  height: ${({$size:e})=>g[e]}px;
  border-radius: 50%;
  background: ${({$bg:e})=>e};
  color: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px white;
`,se=o.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 auto;
`,de=o.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 0;
`,ce=o.div`
  width: 100%;
  min-width: 0;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`,me=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  ${({$orientation:e,$withDivider:i})=>e==="horizontal"&&i&&_`min-width: 204px;`}

  ${({$orientation:e})=>e==="vertical"&&_`padding: 2px 0;`}
`,I=o(X).attrs({as:"span"})`
  ${L["P4-Medium-Comp"]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=o(Q).attrs({as:"span"})`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${N};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function m(e){if(e==="success")return"done";if(e==="error")return"failed";if(e==="default")return"disabled";if(e!=="active")return e}const B=e=>e==="disabled"||e==="disabled-done"||e==="disabled-failed"||e==="default",pe=(e,i,r)=>{const t=Math.max(0,i??r??ee);return{min:Math.min(Math.max(0,e??Y),t),max:t}};function ue(e,i,r="primary"){if(B(i))return w;const t=m(i);return e==="icon"?t==="done"?b:t==="failed"?v:w:e==="number-badge"?t==="done"||t==="failed"?ie:$[r]:t==="done"?b:t==="failed"?v:$[r]}function fe(e,i){if(B(i))return D;const r=m(i);return e==="icon"&&!r?D:e==="number-badge"&&(r==="done"||r==="failed")?ne:R}function he(e){const i=m(e);return i==="done"||e==="disabled-done"?b:i==="failed"||e==="disabled-failed"?v:w}function xe(e,i){if(e!=="number-badge")return!1;const r=m(i);return r==="done"||r==="failed"||i==="disabled-done"||i==="disabled-failed"}const ge=({variant:e,status:i,color:r,size:t,value:c})=>{const d=J[t],a=g[t],l=m(i);return n.jsxs(re,{$size:t,children:[n.jsxs(ae,{$bg:ue(e,i,r),$color:fe(e,i),$size:t,children:[e==="icon"&&l==="done"&&n.jsx(C,{width:d,height:d}),e==="icon"&&l==="failed"&&n.jsx(S,{width:d,height:d}),(e==="number"||e==="number-badge")&&c!==void 0&&n.jsx(oe,{children:c})]}),xe(e,i)&&n.jsx(le,{$bg:he(i),$color:R,$size:t,children:l==="done"||i==="disabled-done"?n.jsx(C,{width:a,height:a}):n.jsx(S,{width:a,height:a})})]})},be=({variant:e,value:i,status:r,color:t,size:c,orientation:d,label:a,description:l,withDivider:y=!1,dividerLength:z=100,dividerMinLength:q,dividerMaxLength:M,className:u,style:f})=>{const h=d??"horizontal",A=c??"m",G=t??"primary",x=n.jsx(ge,{variant:e,status:r,color:G,size:A,value:i}),p=pe(q,M,z);return h==="horizontal"&&y?n.jsxs(se,{className:u,style:f,children:[n.jsxs(de,{children:[x,n.jsx(F,{orientation:"horizontal",padding:K,style:{width:p.max,minWidth:p.min,maxWidth:p.max,flex:`1 1 ${p.max}px`}})]}),(a||l)&&n.jsxs(ce,{children:[a&&n.jsx(I,{children:a}),l&&n.jsx(T,{children:l})]})]}):!a&&!l?O.cloneElement(x,{className:u,style:f}):n.jsxs(te,{$orientation:h,className:u,style:f,children:[x,n.jsxs(me,{$orientation:h,$withDivider:y,children:[a&&n.jsx(I,{children:a}),l&&n.jsx(T,{children:l})]})]})};be.__docgenInfo={description:"",methods:[],displayName:"Step",props:{variant:{required:!0,tsType:{name:"union",raw:'"icon" | "number" | "number-badge"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"number"'},{name:"literal",value:'"number-badge"'}]},description:""},value:{required:!1,tsType:{name:"number"},description:""},status:{required:!1,tsType:{name:"union",raw:`| "active" // colored circle (current step)
| "success" // green — alias for "done"
| "error" // red — alias for "failed"
| "default" // gray — not yet reached (alias for "disabled")
| "done" // green circle with checkmark
| "failed" // red circle with X
| "disabled" // gray circle
| "disabled-done" // gray circle + green badge
| "disabled-failed"`,elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'},{name:"literal",value:'"done"'},{name:"literal",value:'"failed"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"disabled-done"'},{name:"literal",value:'"disabled-failed"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},withDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dividerLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},dividerMinLength:{required:!1,tsType:{name:"number"},description:""},dividerMaxLength:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{s as C,ee as D,be as S,Y as a,w as b,K as c};
