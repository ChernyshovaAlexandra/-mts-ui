import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CgfFrydU.js";import{d}from"./styled-components.browser.esm-CzyguTxk.js";import{v as n}from"./fonts-C-rNwtaq.js";import{e as a,f as h,m as s}from"./index-DzNPuTIb.js";import{S as u,E as g}from"./style-Ca_MdG4J.js";const y=d.div`
  display: flex;
  gap: 0.7rem;
  ${n};
`,k=d.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  flex-shrink: 0;
  ${n};

  input {
    appearance: none;
    position: absolute;
    width: 90%;
    height: 90%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid ${a};
      border-radius: 6px;
      background-color: ${a};
      border: 1px solid ${h};
      width: 24px;
      height: 24px;
      box-sizing: border-box;
      transition:
        background-color 0.2s,
        border-color 0.2s;
    }

    &::after {
      content: "";
      content: "";
      position: absolute;
      width: 5px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
      left: 0;
      top: 0;
      right: -2px;
      margin: auto;
      bottom: 0;
    }
    &:checked {
      &::before {
        background-color: ${s};
        border-color: ${s};
      }
      &::after {
        opacity: 1;
      }
    }
  }

  input:disabled ~ &::before {
    background-color: #f0f0f0;
    border-color: #ccc;
    cursor: not-allowed;
  }
  input:disabled:checked ~ &::before {
    background-color: #ccc;
    border-color: #ccc;
  }
`,w=i.memo(i.forwardRef(({style:c,checked:p,onChange:l,label:b,name:o,errorMessage:e,disabled:m,...x},f)=>{const t=e?`${o}-error`:void 0;return r.jsxs(r.Fragment,{children:[r.jsxs(y,{children:[r.jsx(k,{style:c,children:r.jsx("input",{ref:f,name:o,id:o,disabled:m,type:"checkbox",checked:p,onChange:l,"aria-invalid":!!e,"aria-describedby":t,...x})}),r.jsx(u,{$invalidInput:!!e,htmlFor:o,children:b})]}),e&&r.jsx(g,{id:t,role:"alert",children:e})]})}));w.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{w as C};
