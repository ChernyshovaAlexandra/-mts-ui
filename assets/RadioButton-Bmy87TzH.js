import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CgfFrydU.js";import{d as c}from"./styled-components.browser.esm-CzyguTxk.js";import{v as n}from"./fonts-C-rNwtaq.js";import{S as R}from"./style-S1LL3O2C.js";import{i as b,f as a,E as j}from"./style-Ca_MdG4J.js";import{m as l,c as h}from"./index-DzNPuTIb.js";const S=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${n};

  input {
    box-sizing: border-box;
    ${b}
    ${n};
    display: none;

    &:checked {
      & + svg {
        circle:first-child {
          stroke: ${l};
        }
        circle:last-child {
          fill: ${l};
        }
      }

      &:hover svg {
        circle:first-child {
          stroke-width: 1.7px;
        }
      }
    }
  }
`,x=c(R)`
  cursor: pointer;
  text-align: left;
  ${n};
`,k=c.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: ${a.fontSize};
  line-height: ${a.lineHeight};
  font-weight: ${a.fontWeight};
  text-overflow: ellipsis;
  & ~ ${x} {
    color: ${({$checked:t})=>t?l:h};
  }
  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: ${h};
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`,u=o.memo(o.forwardRef(({style:t,checked:d,onChange:g,label:y,name:p,value:m,errorMessage:r,disabled:f,...$},w)=>{const v=o.useId(),i=`${p}-${m}-${v}`,s=`${i}-error`;return e.jsxs(e.Fragment,{children:[e.jsxs(S,{as:"label",htmlFor:i,"aria-describedby":r?s:void 0,"data-disabled":f?"":void 0,children:[e.jsxs(k,{style:t,$checked:!!d,children:[e.jsx("input",{"aria-invalid":!!r,"aria-describedby":r?s:void 0,checked:d,disabled:f,id:i,name:p,onChange:g,ref:w,type:"radio",value:m,...$}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7.5",stroke:"currentColor"}),e.jsx("circle",{cx:"8",cy:"8",r:"3.2",fill:"currentColor"})]})]}),e.jsx(x,{as:"span",variant:"P3-Regular-Comp",children:y})]}),r&&e.jsx(j,{id:s,children:r})]})}));u.displayName="RadioButton";u.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{u as R};
