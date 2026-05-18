import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{R as q}from"./index-Dx_1l3Sb.js";import{c as I}from"./createIcon-DXdYUD03.js";import{D as O}from"./Divider-BhJnfEVy.js";import{y as l,p as y}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as G}from"./mixins-ib8c4tLP.js";import{G as k,D as A,I as F,E as R,n as M,b as Z,a as N,h as W}from"./index-B66h-egn.js";/* empty css              */import{T as H}from"./Text-BGtrDhtg.js";import{C as V}from"./Caption-C1APNMb6.js";const w=I({"24-outline":n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1087 8.22455C17.4015 8.51744 17.4016 8.99232 17.1087 9.28521L11.1967 15.1972C11.056 15.3379 10.8653 15.4169 10.6663 15.4169C10.4674 15.4169 10.2767 15.3379 10.136 15.1972L6.80268 11.8639C6.50978 11.571 6.50978 11.0961 6.80268 10.8032C7.09557 10.5104 7.57044 10.5104 7.86334 10.8032L10.6663 13.6062L16.048 8.22455C16.3409 7.93166 16.8158 7.93166 17.1087 8.22455Z",fill:"currentColor"})},"IconDoneS"),C=I({"24-outline":n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0001 12C17.0001 12.4142 16.6643 12.75 16.2501 12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H16.2501C16.6643 11.25 17.0001 11.5858 17.0001 12Z",fill:"currentColor"})},"IconFailedS"),S={s:24,m:48},P={s:24,m:48},X={s:"14px",m:"24px"},J={s:"20px",m:"28px"},h={s:12,m:18},_={primary:"#FF0032",secondary:R},x=Z,g=N,b=M,K=W,Q=R,B=A,$=F,U=l.div`
  display: inline-flex;
  flex-direction: ${({$orientation:e})=>e==="horizontal"?"column":"row"};
  align-items: flex-start;
  gap: ${({$orientation:e})=>e==="horizontal"?"12px":"16px"};
`,Y=l.div`
  position: relative;
  width: ${({$size:e})=>S[e]}px;
  height: ${({$size:e})=>S[e]}px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${G};
`,ee=l.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({$bg:e})=>e};
  color: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MTS Wide", sans-serif;
  font-weight: 500;
  font-size: ${({$size:e})=>X[e]};
  line-height: ${({$size:e})=>J[e]};
  transition: background 0.2s ease;
`,ie=l.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({$size:e})=>h[e]}px;
  height: ${({$size:e})=>h[e]}px;
  border-radius: 50%;
  background: ${({$bg:e})=>e};
  color: ${({$color:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px white;
`,ne=l.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`,te=l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,re=l.div`
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,oe=l.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  ${({$orientation:e,$withDivider:i})=>e==="horizontal"&&i&&y`min-width: 204px;`}

  ${({$orientation:e})=>e==="vertical"&&y`padding: 2px 0;`}
`,j=l(H).attrs({as:"span"})`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T=l(V).attrs({as:"span"})`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${k};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function d(e){if(e==="success")return"done";if(e==="error")return"failed";if(e==="default")return"disabled";if(e!=="active")return e}const D=e=>e==="disabled"||e==="disabled-done"||e==="disabled-failed"||e==="default";function ae(e,i,r="primary"){if(D(i))return b;const t=d(i);return e==="icon"?t==="done"?x:t==="failed"?g:b:e==="number-badge"?t==="done"||t==="failed"?K:_[r]:t==="done"?x:t==="failed"?g:_[r]}function le(e,i){if(D(i))return $;const r=d(i);return e==="icon"&&!r?$:e==="number-badge"&&(r==="done"||r==="failed")?Q:B}function se(e){const i=d(e);return i==="done"||e==="disabled-done"?x:i==="failed"||e==="disabled-failed"?g:b}function de(e,i){if(e!=="number-badge")return!1;const r=d(i);return r==="done"||r==="failed"||i==="disabled-done"||i==="disabled-failed"}const ce=({variant:e,status:i,color:r,size:t,value:c})=>{const s=P[t],o=h[t],a=d(i);return n.jsxs(Y,{$size:t,children:[n.jsxs(ee,{$bg:ae(e,i,r),$color:le(e,i),$size:t,children:[e==="icon"&&a==="done"&&n.jsx(w,{width:s,height:s}),e==="icon"&&a==="failed"&&n.jsx(C,{width:s,height:s}),(e==="number"||e==="number-badge")&&c!==void 0&&c]}),de(e,i)&&n.jsx(ie,{$bg:se(i),$color:B,$size:t,children:a==="done"||i==="disabled-done"?n.jsx(w,{width:o,height:o}):n.jsx(C,{width:o,height:o})})]})},pe=({variant:e,value:i,status:r,color:t,size:c,orientation:s,label:o,description:a,withDivider:v=!1,dividerLength:E=100,className:p,style:f})=>{const m=s??"horizontal",L=c??"m",z=t??"primary",u=n.jsx(ce,{variant:e,status:r,color:z,size:L,value:i});return m==="horizontal"&&v?n.jsxs(ne,{className:p,style:f,children:[n.jsxs(te,{children:[u,n.jsx(O,{orientation:"horizontal",padding:12,style:{width:E,flexShrink:0}})]}),(o||a)&&n.jsxs(re,{children:[o&&n.jsx(j,{children:o}),a&&n.jsx(T,{children:a})]})]}):!o&&!a?q.cloneElement(u,{className:p,style:f}):n.jsxs(U,{$orientation:m,className:p,style:f,children:[u,n.jsxs(oe,{$orientation:m,$withDivider:v,children:[o&&n.jsx(j,{children:o}),a&&n.jsx(T,{children:a})]})]})};pe.__docgenInfo={description:"",methods:[],displayName:"Step",props:{variant:{required:!0,tsType:{name:"union",raw:'"icon" | "number" | "number-badge"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"number"'},{name:"literal",value:'"number-badge"'}]},description:""},value:{required:!1,tsType:{name:"number"},description:""},status:{required:!1,tsType:{name:"union",raw:`| "active" // colored circle (current step)
| "success" // green — alias for "done"
| "error" // red — alias for "failed"
| "default" // gray — not yet reached (alias for "disabled")
| "done" // green circle with checkmark
| "failed" // red circle with X
| "disabled" // gray circle
| "disabled-done" // gray circle + green badge
| "disabled-failed"`,elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'},{name:"literal",value:'"done"'},{name:"literal",value:'"failed"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"disabled-done"'},{name:"literal",value:'"disabled-failed"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},withDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dividerLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{S as C,pe as S};
