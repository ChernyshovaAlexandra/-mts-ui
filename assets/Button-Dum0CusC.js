import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./Spinner-DEOqRZu4.js";import{d as y,l as o}from"./styled-components.browser.esm-CzyguTxk.js";import{v}from"./fonts-C-rNwtaq.js";import{m as _,i as j,e as w,c as $,f as S}from"./index-CC-WJBSK.js";const k=o`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;
  font:
    700 0.75rem/1rem "MTS Wide",
    sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05;
  padding: 14px;
  border-radius: 16px;
  width: ${({width:e})=>e==="auto"?"auto":e==="max"?"100%":e||"100%"};
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 320px;
  border: 1px solid transparent;

  ${({variant:e})=>{switch(e){case"secondary":return o`
          background: ${w};
          color: ${$};
          &:hover {
            background: ${S};
          }
        `;case"gray":return o`
          background: ${j};
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);

          &:hover {
            background-color: #bcc3d040;
          }
        `;case"ghost":return o`
          background: #ffffff12;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 32px;

          &:hover {
            background: #ffffff30;
          }
        `;case"icon":return o`
          background: #ffffff12;
          color: #fff;
          padding: 6px;
          border-radius: 50%;
          justify-content: center;
          border-radius: 32px;

          &:hover {
            background: #ffffff30;
          }
        `;case"primary":default:return o`
          background: ${_};
          color: #fff;
          &:hover {
            background: #e4002e;
            color: #fff;
          }
        `}}}

  &:disabled {
    cursor: not-allowed;
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
  ${v};
`,B=y.button`
  outline: none;
  -webkit-appearance: none;
  ${k}
`,q=y.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${k}
`,I=({btn_type:e="button",loading:a=!1,disabled:x=!1,...m})=>{if(e==="link"){const{link:i,tooltip:f,style:d,content:l,width:c,variant:u,icon:n,children:p,onClick:r,...b}=m,s=x||a;return t.jsxs(q,{role:"link",variant:u,width:c,href:s?void 0:i,"data-tip":f,style:d,"aria-disabled":s,tabIndex:s?-1:0,onClick:g=>{if(s){g.preventDefault();return}r==null||r(g)},...b,children:[n&&t.jsx("span",{className:"btn-icon",children:n}),a?t.jsx(h,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):p||l]})}else{const{buttonType:i,onClick:f,style:d,tooltip:l,content:c,children:u,width:n,variant:p,icon:r,...b}=m;return t.jsxs(B,{variant:p,width:n,type:i||"button",onClick:f,style:d,"data-tip":l,disabled:x||a,"aria-busy":a,...b,children:[r&&t.jsx("span",{className:"btn-icon",children:r}),a?t.jsx(h,{color:"#ffffff",speed:"1s","aria-hidden":"true"}):u||c]})}};I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{I as B};
