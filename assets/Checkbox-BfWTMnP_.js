import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import{y as s}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as n}from"./mixins-CTkzXf3m.js";import{f as x,n as f,M as h,q as a}from"./index-CWlbk4Hf.js";/* empty css              */import{b as g,E as y}from"./style-BTvnBIeH.js";const k=s.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  ${n};
`,w=s.div`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  ${n};

  input {
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid ${x};
    background-color: ${f};
    border-radius: ${h};
    transition:
      background-color 0.2s,
      border-color 0.2s;

    &::after {
      content: "";
      position: absolute;
      top: 45%;
      left: 50%;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:checked {
      background-color: ${a};
      border-color: ${a};

      &::after {
        opacity: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #f0f0f0;
      border-color: #ccc;
    }
    &:disabled:checked {
      background-color: #ccc;
      border-color: #ccc;
    }
  }
`,R=i.memo(i.forwardRef(({style:d,checked:c,onChange:p,label:l,name:o,errorMessage:e,disabled:b,...m},u)=>{const t=e?`${o}-error`:void 0;return r.jsxs(r.Fragment,{children:[r.jsxs(k,{children:[r.jsx(w,{style:d,children:r.jsx("input",{ref:u,name:o,id:o,disabled:b,type:"checkbox",checked:c,onChange:p,"aria-invalid":!!e,"aria-describedby":t,...m})}),r.jsx(g,{$invalidInput:!!e,htmlFor:o,children:l})]}),e&&r.jsx(y,{id:t,role:"alert",children:e})]})}));R.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{R as C};
