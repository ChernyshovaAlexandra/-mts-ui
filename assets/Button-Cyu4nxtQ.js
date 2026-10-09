import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as R}from"./Spinner-DQMllT-2.js";import{g as V,f as t}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as M}from"./mixins-DAii6Zu4.js";import{k as O,l as P,e as T,h as b,m as q,n as m,o as W,p as C,c as z,q as E,b as A,r as F,g as L,s as G,t as H,i as J}from"./index-CA_YInif.js";/* empty css              */const K=t`
  ${({$size:e})=>{switch(e){case"xs":return t`
          padding: 4px;
          border-radius: ${J};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"s":return t`
          padding: 8px;
          border-radius: ${H};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"m":return t`
          padding: 10px;
          border-radius: ${L};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"xl":return t`
          padding: 24px;
          border-radius: ${G};
          font-size: 0.875rem;
          line-height: 1.25rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"l":default:return t`
          padding: 14px;
          border-radius: ${L};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `}}}
`,D=t`
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
  width: ${({$width:e})=>e==="auto"?"auto":e==="max"?"100%":e||"100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;
  border: 1px solid transparent;

  ${K}

  ${({$variant:e})=>{switch(e){case"alternative":return t`
          background: ${A};
          color: ${b};
          &:not(:disabled):hover {
            background: ${F};
          }
        `;case"secondary":return t`
          background: ${q};
          color: ${z};
          &:not(:disabled):hover {
            background: ${m};
          }
        `;case"tetriary":return t`
          background: ${E};
          color: ${z};
          &:not(:disabled):hover {
            background: ${m};
          }
        `;case"gray":return t`
          background: ${W};
          color: ${b};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"ghost":return t`
          background: transparent;
          color: ${z};
          &:not(:disabled):hover {
            background: ${m};
          }
        `;case"icon":return t`
          background: ${W};
          color: ${b};
          padding: 6px;
          border-radius: ${C};
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"negative":case"menu-item":return t`
          background: ${q};
          color: #d8400c;
          &:not(:disabled):hover {
            background: ${m};
          }
        `;case"primary":default:return t`
          background: ${T};
          color: ${b};
          &:not(:disabled):hover {
            background: #e4002e;
          }
        `}}}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${O} !important;
    color: ${P} !important;
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
  max-width: ${({$maxWidth:e})=>typeof e=="number"?`${e}px`:e||"none"};

  ${({$wrap:e})=>e&&t`
    white-space: normal;
    .btn-label {
      white-space: normal;
      overflow-wrap: anywhere;
      text-overflow: clip;
    }
  `}

  ${({$responsiveWidth:e})=>e&&t`
    @media (min-width: ${e.breakpoint}px) {
      width: ${e.width||"fit-content"};
      max-width: ${typeof e.maxWidth=="number"?`min(${e.maxWidth}px, 100%)`:e.maxWidth||"100%"};
      ${e.wrap&&t`
        white-space: normal;
        .btn-label {
          white-space: normal;
          overflow-wrap: anywhere;
          text-overflow: clip;
        }
      `}
    }
  `}
  ${M};
`,Q=V.button`
  outline: none;
  -webkit-appearance: none;
  ${D}
`,U=V.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${D}
`,X=({btn_type:e="button",loading:a=!1,disabled:I=!1,...N})=>{if(e==="link"){const{link:g,tooltip:f,style:x,content:l,width:c,maxWidth:p,wrap:w,responsiveWidth:$,variant:v,size:_,icon:i,iconPosition:h,iconRight:r,children:o,onClick:s,...k}=N,d=I||a,y=!!i&&h!=="right",j=!!r||!!i&&h==="right",u=r??(h==="right"?i:null),S=(!!i||!!r)&&!o&&!l;return n.jsxs(U,{role:"link",$variant:v,$width:S?"auto":c,$size:_,$maxWidth:p,$wrap:w,$responsiveWidth:S?void 0:$,href:d?void 0:g,"data-tip":f,style:x,"aria-disabled":d,tabIndex:d?-1:0,onClick:B=>{if(d){B.preventDefault();return}s==null||s(B)},...k,children:[y&&n.jsx("span",{className:"btn-icon",children:i}),a?n.jsx(R,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):o||l?n.jsx("span",{className:"btn-label",children:o||l}):null,j&&!a&&n.jsx("span",{className:"btn-icon",children:u})]})}else{const{buttonType:g,onClick:f,style:x,tooltip:l,content:c,children:p,width:w,maxWidth:$,wrap:v,responsiveWidth:_,variant:i,size:h,icon:r,iconPosition:o,iconRight:s,...k}=N,d=!!r&&o!=="right",y=!!s||!!r&&o==="right",j=s??(o==="right"?r:null),u=(!!r||!!s)&&!p&&!c;return n.jsxs(Q,{$variant:i,$width:u?"auto":w,$size:h,$maxWidth:$,$wrap:v,$responsiveWidth:u?void 0:_,type:g||"button",onClick:f,style:x,"data-tip":l,disabled:I||a,"aria-busy":a,...k,children:[d&&n.jsx("span",{className:"btn-icon",children:r}),a?n.jsx(R,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):p||c?n.jsx("span",{className:"btn-label",children:p||c}):null,y&&!a&&n.jsx("span",{className:"btn-icon",children:j})]})}};X.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{X as B};
