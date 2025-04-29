import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as x}from"./Spinner-BG6yZGO4.js";import{d as m,l as t}from"./styled-components.browser.esm-D7OA6UWf.js";import{m as y,i as k,e as _,c as v,f as j}from"./index-Cpl4D9D3.js";/* empty css              */const g=t`
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

  ${({variant:e})=>{switch(e){case"secondary":return t`
          background: ${_};
          color: ${v};
          &:hover {
            background: ${j};
          }
        `;case"gray":return t`
          background: ${k};
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
          background: ${y};
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
`,w=m.button`
  outline: none;
  -webkit-appearance: none;
  ${g}
`,$=m.a`
  text-decoration: none;
  -webkit-appearance: none;
  ${g}
`,S=({btn_type:e="button",loading:p=!1,...u})=>{if(e==="link"){const{link:n,tooltip:a,style:s,content:i,width:f,variant:c,icon:o,children:d,...l}=u;return r.jsxs($,{variant:c,width:f,href:n,"data-tip":a,style:s,...l,children:[o&&r.jsx("span",{className:"btn-icon",children:o}),p?r.jsx(x,{color:"#ffffff",speed:"1s"}):d||i]})}else{const{buttonType:n,onClick:a,style:s,tooltip:i,disabled:f,content:c,children:o,width:d,variant:l,icon:b,...h}=u;return r.jsxs(w,{variant:l,width:d,type:n||"button",onClick:a,style:s,"data-tip":i,disabled:f,...h,children:[b&&r.jsx("span",{className:"btn-icon",children:b}),p?r.jsx(x,{color:"#ffffff",speed:"1s"}):o||c]})}};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{btn_type:{defaultValue:{value:'"button"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};export{S as B};
