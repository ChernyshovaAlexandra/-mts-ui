import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as ee}from"./mixins-DAii6Zu4.js";import{c as $,T as W,h as te,U as ne}from"./index-CA_YInif.js";/* empty css              */import{r as s}from"./index-mIjS73Jk.js";import"./index-BssJU-4Y.js";import{I as re}from"./IconOut-D6k_3EUx.js";function ae(e){switch(e){case"secondary":return ne;case"black":return $;case"white":return te;default:return W}}const ie=j.span`
  ${({$variant:e,$underlined:t})=>e==="dotted-line"?`
        text-decoration: underline dotted;
        text-underline-offset: 3px;
      `:e==="straight-line"||t?`
        text-decoration: underline solid;
        text-underline-offset: 3px;
      `:""}

  ${({$variant:e,$underlined:t})=>t||e==="straight-line"||e==="dotted-line"?`
        a:hover & {
          text-decoration: none;
        }
      `:`
      a:hover & {
        text-decoration: underline solid;
        text-underline-offset: 3px;
      }
    `}
`,se=j.a`
  color: ${({$theme:e,$type:t})=>e?ae(e):t==="menuItem"?$:W};
  font:
    16px / 1.2 "MTS Compact",
    "Arial",
    sans-serif;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-decoration: none !important;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: currentColor;
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({$underlined:e})=>e?"100%":"0"};
    display: ${({$type:e})=>e==="menuItem"?"block":"none"};
  }

  &:hover {
    opacity: 0.8;

    &::after {
      width: ${({$underlined:e})=>e?"0":"100%"};
      transition: all 0.3s ease-in;
      display: ${({$type:e})=>e==="menuItem"?"block":"none"};
    }
  }
  ${ee};
`;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(null,arguments)}var k;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(k||(k={}));function m(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function N(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function q(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function le(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oe(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?q(e):e,i;return n?(n=F(n),n.startsWith("/")?i=_(n.substring(1),"/"):i=_(n,t)):i=t,{pathname:i,search:ce(r),hash:fe(a)}}function _(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function b(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ue(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function A(e,t){let n=ue(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function B(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=q(e):(a=S({},e),m(!a.pathname||!a.pathname.includes("?"),b("?","pathname","search",a)),m(!a.pathname||!a.pathname.includes("#"),b("#","pathname","hash",a)),m(!a.search||!a.search.includes("#"),b("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,u;if(l==null)u=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),c-=1;a.pathname=h.join("/")}u=c>=0?t[c]:"/"}let f=oe(a,u),o=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(o||d)&&(f.pathname+="/"),f}const F=e=>e.replace(/\/\/+/g,"/"),J=e=>F(e.join("/")),ce=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,V=["post","put","patch","delete"];new Set(V);const de=["get",...V];new Set(de);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(null,arguments)}const z=s.createContext(null),x=s.createContext(null),K=s.createContext(null),R=s.createContext({outlet:null,matches:[],isDataRoute:!1});function he(e,t){let{relative:n}=t===void 0?{}:t;L()||m(!1);let{basename:r,navigator:a}=s.useContext(x),{hash:i,pathname:l,search:u}=X(e,{relative:n}),f=l;return r!=="/"&&(f=l==="/"?r:J([r,l])),a.createHref({pathname:f,search:u,hash:i})}function L(){return s.useContext(K)!=null}function P(){return L()||m(!1),s.useContext(K).location}function G(e){s.useContext(x).static||s.useLayoutEffect(e)}function me(){let{isDataRoute:e}=s.useContext(R);return e?ye():pe()}function pe(){L()||m(!1);let e=s.useContext(z),{basename:t,future:n,navigator:r}=s.useContext(x),{matches:a}=s.useContext(R),{pathname:i}=P(),l=JSON.stringify(A(a,n.v7_relativeSplatPath)),u=s.useRef(!1);return G(()=>{u.current=!0}),s.useCallback(function(o,d){if(d===void 0&&(d={}),!u.current)return;if(typeof o=="number"){r.go(o);return}let c=B(o,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:J([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,i,e])}function X(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(x),{matches:a}=s.useContext(R),{pathname:i}=P(),l=JSON.stringify(A(a,r.v7_relativeSplatPath));return s.useMemo(()=>B(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}var Q=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(Q||{}),Y=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Y||{});function ve(e){let t=s.useContext(z);return t||m(!1),t}function ge(e){let t=s.useContext(R);return t||m(!1),t}function xe(e){let t=ge(),n=t.matches[t.matches.length-1];return n.route.id||m(!1),n.route.id}function ye(){let{router:e}=ve(Q.UseNavigateStable),t=xe(Y.UseNavigateStable),n=s.useRef(!1);return G(()=>{n.current=!0}),s.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,U({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}function we(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ce(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Re(e,t){return e.button===0&&(!t||t==="_self")&&!Ce(e)}const be=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Se="6";try{window.__reactRouterVersion=Se}catch{}const Ue=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:l,state:u,target:f,to:o,preventScrollReset:d,viewTransition:c}=t,h=we(t,be),{basename:y}=s.useContext(x),w,g=!1;if(typeof o=="string"&&Ee.test(o)&&(w=o,Ue))try{let p=new URL(window.location.href),C=o.startsWith("//")?new URL(p.protocol+o):new URL(o),T=le(C.pathname,y);C.origin===p.origin&&T!=null?o=T+C.search+C.hash:g=!0}catch{}let Z=he(o,{relative:a}),D=Pe(o,{replace:l,state:u,target:f,preventScrollReset:d,relative:a,viewTransition:c});function H(p){r&&r(p),p.defaultPrevented||D(p)}return s.createElement("a",E({},h,{href:w||Z,onClick:g||i?r:H,ref:n,target:f}))});var I;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(I||(I={}));var M;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(M||(M={}));function Pe(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:l,viewTransition:u}=t===void 0?{}:t,f=me(),o=P(),d=X(e,{relative:l});return s.useCallback(c=>{if(Re(c,n)){c.preventDefault();let h=r!==void 0?r:N(o)===N(d);f(e,{replace:h,state:a,preventScrollReset:i,relative:l,viewTransition:u})}},[o,f,d,r,a,n,e,i,l,u])}const Te=({url:e,to:t,children:n,style:r,underlined:a,variant:i="default",theme:l,icon:u,type:f="link",onClick:o,target:d,rel:c,...h})=>{const y=i==="external"?"_blank":d,w=y==="_blank"?c||"noopener noreferrer":c,g=v.jsxs(v.Fragment,{children:[i==="icon-left"&&u,v.jsx(ie,{$variant:i,$underlined:a,children:n}),i==="icon-right"&&u,i==="external"&&v.jsx(re,{width:16,height:16})]});return t?v.jsx(Le,{to:t,style:r,onClick:o,...h,children:g}):v.jsx(se,{$type:f,$theme:l,$variant:i,$underlined:a,href:e,style:r,onClick:o,target:y,rel:w,...h,children:g})};Te.__docgenInfo={description:"",methods:[],displayName:"Link",props:{url:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},underlined:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "straight-line"
| "dotted-line"
| "external"
| "icon-right"
| "icon-left"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"straight-line"'},{name:"literal",value:'"dotted-line"'},{name:"literal",value:'"external"'},{name:"literal",value:'"icon-right"'},{name:"literal",value:'"icon-left"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},theme:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "black" | "white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"black"'},{name:"literal",value:'"white"'}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"menuItem" | "link"',elements:[{name:"literal",value:'"menuItem"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:'"link"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement, MouseEvent>",elements:[{name:"HTMLAnchorElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{Te as L};
