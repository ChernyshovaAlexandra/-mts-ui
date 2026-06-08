import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as I}from"./Spinner-BrDaGlgB.js";import{y as R,p as e}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as P}from"./mixins-CTkzXf3m.js";import{e as V,z as D,q as M,P as h,h as N,f as b,t as S,K as O,Q as y,k as T,g as A,A as C,G as B,I as E,F,N as G}from"./index-CWlbk4Hf.js";/* empty css              */const K=e`
  ${({$size:n})=>{switch(n){case"xs":return e`
          padding: 4px;
          border-radius: ${G};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"s":return e`
          padding: 8px;
          border-radius: ${F};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"m":return e`
          padding: 10px;
          border-radius: ${B};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"xl":return e`
          padding: 24px;
          border-radius: ${E};
          font-size: 0.875rem;
          line-height: 1.25rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"l":default:return e`
          padding: 14px;
          border-radius: ${B};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `}}}
`,q=e`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;
  font-family: "MTS Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: ${({$width:n})=>n==="auto"?"auto":n==="max"?"100%":n||"100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;
  border: 1px solid transparent;

  ${K}

  ${({$variant:n})=>{switch(n){case"alternative":return e`
          background: ${A};
          color: ${h};
          &:not(:disabled):hover {
            background: ${C};
          }
        `;case"secondary":return e`
          background: ${N};
          color: ${y};
          &:not(:disabled):hover {
            background: ${b};
          }
        `;case"tetriary":return e`
          background: ${T};
          color: ${y};
          &:not(:disabled):hover {
            background: ${b};
          }
        `;case"gray":return e`
          background: ${S};
          color: ${h};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"ghost":return e`
          background: transparent;
          color: ${y};
          &:not(:disabled):hover {
            background: ${b};
          }
        `;case"icon":return e`
          background: ${S};
          color: ${h};
          padding: 6px;
          border-radius: ${O};
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"negative":case"menu-item":return e`
          background: ${N};
          color: #d8400c;
          &:not(:disabled):hover {
            background: ${b};
          }
        `;case"primary":default:return e`
          background: ${M};
          color: ${h};
          &:not(:disabled):hover {
            background: #e4002e;
          }
        `}}}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${V} !important;
    color: ${D} !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  .btn-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${P};
`,Q=R.button`
  outline: none;
  -webkit-appearance: none;
  ${q}
`,W=R.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${q}
`,H=({btn_type:n="button",loading:a=!1,disabled:w=!1,...j})=>{if(n==="link"){const{link:g,tooltip:m,style:f,content:l,width:c,variant:p,size:x,icon:i,iconPosition:u,iconRight:r,children:s,onClick:o,...$}=j,d=w||a,_=!!i&&u!=="right",v=!!r||!!i&&u==="right",k=r??(u==="right"?i:null),L=(!!i||!!r)&&!s&&!l;return t.jsxs(W,{role:"link",$variant:p,$width:L?"auto":c,$size:x,href:d?void 0:g,"data-tip":m,style:f,"aria-disabled":d,tabIndex:d?-1:0,onClick:z=>{if(d){z.preventDefault();return}o==null||o(z)},...$,children:[_&&t.jsx("span",{className:"btn-icon",children:i}),a?t.jsx(I,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):s||l?t.jsx("span",{className:"btn-label",children:s||l}):null,v&&!a&&t.jsx("span",{className:"btn-icon",children:k})]})}else{const{buttonType:g,onClick:m,style:f,tooltip:l,content:c,children:p,width:x,variant:i,size:u,icon:r,iconPosition:s,iconRight:o,...$}=j,d=!!r&&s!=="right",_=!!o||!!r&&s==="right",v=o??(s==="right"?r:null),k=(!!r||!!o)&&!p&&!c;return t.jsxs(Q,{$variant:i,$width:k?"auto":x,$size:u,type:g||"button",onClick:m,style:f,"data-tip":l,disabled:w||a,"aria-busy":a,...$,children:[d&&t.jsx("span",{className:"btn-icon",children:r}),a?t.jsx(I,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):p||c?t.jsx("span",{className:"btn-label",children:p||c}):null,_&&!a&&t.jsx("span",{className:"btn-icon",children:v})]})}};H.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{H as B};
