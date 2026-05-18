import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{S as $}from"./Spinner-5z9YM4jE.js";import{y as j,p as e}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as B}from"./mixins-ib8c4tLP.js";import{e as N,y as q,q as D,D as p,h as w,f as u,t as _,E as x,k as I,g as V,z as E}from"./index-B66h-egn.js";/* empty css              */const M=e`
  ${({$size:t})=>{switch(t){case"xs":return e`
          padding: 4px;
          border-radius: 8px;
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"s":return e`
          padding: 8px;
          border-radius: 12px;
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;case"m":return e`
          padding: 10px;
          border-radius: 16px;
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"xl":return e`
          padding: 24px;
          border-radius: 20px;
          font-size: 0.875rem;
          line-height: 1.25rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;case"l":default:return e`
          padding: 14px;
          border-radius: 16px;
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `}}}
`,z=e`
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
  width: ${({$width:t})=>t==="auto"?"auto":t==="max"?"100%":t||"100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;
  border: 1px solid transparent;

  ${M}

  ${({$variant:t})=>{switch(t){case"alternative":return e`
          background: ${V};
          color: ${p};
          &:not(:disabled):hover {
            background: ${E};
          }
        `;case"secondary":return e`
          background: ${w};
          color: ${x};
          &:not(:disabled):hover {
            background: ${u};
          }
        `;case"tetriary":return e`
          background: ${I};
          color: ${x};
          &:not(:disabled):hover {
            background: ${u};
          }
        `;case"gray":return e`
          background: ${_};
          color: ${p};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"ghost":return e`
          background: transparent;
          color: ${x};
          &:not(:disabled):hover {
            background: ${u};
          }
        `;case"icon":return e`
          background: ${_};
          color: ${p};
          padding: 6px;
          border-radius: 32px;
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;case"negative":case"menu-item":return e`
          background: ${w};
          color: #d8400c;
          &:not(:disabled):hover {
            background: ${u};
          }
        `;case"primary":default:return e`
          background: ${D};
          color: ${p};
          &:not(:disabled):hover {
            background: #e4002e;
          }
        `}}}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${N} !important;
    color: ${q} !important;
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
  ${B};
`,O=j.button`
  outline: none;
  -webkit-appearance: none;
  ${z}
`,T=j.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${z}
`,C=({btn_type:t="button",loading:i=!1,disabled:v=!1,...k})=>{if(t==="link"){const{link:b,tooltip:h,style:m,content:o,width:s,variant:d,size:f,icon:l,children:c,onClick:n,...g}=k,a=v||i,S=!!l&&!c&&!o;return r.jsxs(T,{role:"link",$variant:d,$width:S?"auto":s,$size:f,href:a?void 0:b,"data-tip":h,style:m,"aria-disabled":a,tabIndex:a?-1:0,onClick:y=>{if(a){y.preventDefault();return}n==null||n(y)},...g,children:[l&&r.jsx("span",{className:"btn-icon",children:l}),i?r.jsx($,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):c||o?r.jsx("span",{className:"btn-label",children:c||o}):null]})}else{const{buttonType:b,onClick:h,style:m,tooltip:o,content:s,children:d,width:f,variant:l,size:c,icon:n,...g}=k,a=!!n&&!d&&!s;return r.jsxs(O,{$variant:l,$width:a?"auto":f,$size:c,type:b||"button",onClick:h,style:m,"data-tip":o,disabled:v||i,"aria-busy":i,...g,children:[n&&r.jsx("span",{className:"btn-icon",children:n}),i?r.jsx($,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):d||s?r.jsx("span",{className:"btn-label",children:d||s}):null]})}};C.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{C as B};
