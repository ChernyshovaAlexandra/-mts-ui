import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./Spinner-B0W7zFVU.js";import{d as y,l as r}from"./styled-components.browser.esm-CzyguTxk.js";import{v as _}from"./fonts-C-rNwtaq.js";import{m as j,i as w,c as k,e as $,f as S}from"./index-DzNPuTIb.js";const v=r`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;
  font:
    500 0.75rem/1rem "MTS Wide",
    sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05px;
  padding: 14px;
  border-radius: 16px;
  width: ${({width:e})=>e==="auto"?"auto":e==="max"?"100%":e||"100%"};
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 320px;
  border: 1px solid transparent;

  ${({variant:e})=>{switch(e){case"secondary":return r`
          background: ${$};
          color: ${k};
          &:not(:disabled):hover {
            background: ${S};
          }
        `;case"tetriary":return r`
          background: #ffffff;
          color: ${k};
          &:not(:disabled):hover {
            background: #e4e7ec;
          }
          &:disabled {
            background: #969fa8;
          }
        `;case"gray":return r`
          background: ${w};
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);

          &:not(:disabled):hover {
            background-color: #bcc3d040;
          }
        `;case"ghost":return r`
          background: #ffffff12;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 32px;

          &:not(:disabled):hover {
            background: #ffffff30;
          }
        `;case"icon":return r`
          background: #ffffff12;
          color: #fff;
          padding: 6px;
          border-radius: 50%;
          justify-content: center;
          border-radius: 32px;

          &:not(:disabled):hover {
            background: #ffffff30;
          }
        `;case"primary":default:return r`
          background: ${j};
          color: #fff;
          &:not(:disabled):hover {
            background: #e4002e;
            color: #fff;
          }
        `}}}

  &:disabled {
    cursor: not-allowed;
    background-color: #969fa8 !important;
    color: #fff !important;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${_};
`,B=y.button`
  outline: none;
  -webkit-appearance: none;
  ${v}
`,q=y.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${v}
`,I=({btn_type:e="button",loading:a=!1,disabled:m=!1,...x})=>{if(e==="link"){const{link:i,tooltip:d,style:f,content:l,width:c,variant:u,icon:n,children:p,onClick:t,...b}=x,s=m||a;return o.jsxs(q,{role:"link",variant:u,width:c,href:s?void 0:i,"data-tip":d,style:f,"aria-disabled":s,tabIndex:s?-1:0,onClick:g=>{if(s){g.preventDefault();return}t==null||t(g)},...b,children:[n&&o.jsx("span",{className:"btn-icon",children:n}),a?o.jsx(h,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):p||l]})}else{const{buttonType:i,onClick:d,style:f,tooltip:l,content:c,children:u,width:n,variant:p,icon:t,...b}=x;return o.jsxs(B,{variant:p,width:n,type:i||"button",onClick:d,style:f,"data-tip":l,disabled:m||a,"aria-busy":a,...b,children:[t&&o.jsx("span",{className:"btn-icon",children:t}),a?o.jsx(h,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):u||c]})}};I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{I as B};
