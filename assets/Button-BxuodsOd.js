import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as b,l as t}from"./styled-components.browser.esm-Cp418-ky.js";import{m,i as h,j as y,e as k,c as _,f as v}from"./index-DItf0zJP.js";/* empty css              */const x=t`
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
  letter-spacing: 5%;
  padding: 14px;
  border-radius: 16px;
  width: ${({width:e})=>e==="auto"?"auto":e==="max"?"100%":e||"100%"};
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid transparent;

  ${({variant:e})=>{switch(e){case"secondary":return t`
          background: ${k};
          color: ${_};
          &:hover {
            background: ${v};
          }
        `;case"gray":return t`
          background: ${y};
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);

          &:hover {
            background-color: #bcc3d040;
          }
        `;case"ghost":return t`
          background: #ffffff12;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 32px;

          &:hover {
            background: #ffffff30;
          }
        `;case"icon":return t`
          background: #ffffff12;
          color: #fff;
          padding: 6px;
          border-radius: 50%;
          justify-content: center;
          border-radius: 32px;

          &:hover {
            background: #ffffff30;
          }
        `;case"primary":default:return t`
          background: ${m};
          color: #fff;
          &:hover {
            background: ${h};
          }
        `}}}

  &:disabled {
    opacity: 0.6;
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
`,j=b.button`
  outline: none;
  -webkit-appearance: none;
  ${x}
`,w=b.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${x}
  &:hover {
    color: inherit;
  }
`,$=({btn_type:e="button",...p})=>{if(e==="link"){const{link:o,tooltip:a,style:s,content:i,width:c,variant:d,icon:r,children:l,...f}=p;return n.jsxs(w,{variant:d,width:c,href:o,"data-tip":a,style:s,...f,children:[r&&n.jsx("span",{className:"btn-icon",children:r}),l||i]})}else{const{buttonType:o,onClick:a,style:s,tooltip:i,disabled:c,content:d,children:r,width:l,variant:f,icon:u,...g}=p;return n.jsxs(j,{variant:f,width:l,type:o||"button",onClick:a,style:s,"data-tip":i,disabled:c,...g,children:[u&&n.jsx("span",{className:"btn-icon",children:u}),r||d]})}};$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};export{$ as B};
