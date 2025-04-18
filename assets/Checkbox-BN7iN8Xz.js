import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DatCARk7.js";import{d as s}from"./styled-components.browser.esm-Cp418-ky.js";import{e as t,f as b,m as i}from"./index-DItf0zJP.js";/* empty css              */import{S as m,E as h}from"./style-BVcMHTMF.js";const u=s.div`
  display: flex;
  gap: 0.7rem;
`,x=s.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;

  input {
    appearance: none;
    position: absolute;
    width: 90%;
    height: 90%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid ${t};
      border-radius: 6px;
      background-color: ${t};
      border: 1px solid ${b};
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
        background-color: ${i};
        border-color: ${i};
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
`,f=l.memo(({style:a,checked:n,onChange:c,label:d,name:r,errorMessage:o,disabled:p})=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(x,{style:a,children:e.jsx("input",{name:r,id:r,disabled:p,type:"checkbox",checked:n,onChange:c})}),e.jsx(m,{$invalidInput:!1,htmlFor:r,children:d})]}),o&&e.jsx(h,{children:o})]}));f.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{f as C};
