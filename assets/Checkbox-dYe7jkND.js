import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import{y as s}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as n}from"./mixins-ib8c4tLP.js";import{f,n as h,q as a}from"./index-B66h-egn.js";/* empty css              */import{b as u,E as g}from"./style-CaScT4Df.js";const y=s.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  ${n};
`,k=s.div`
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
    border: 1px solid ${f};
    background-color: ${h};
    border-radius: 6px;
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
`,w=i.memo(i.forwardRef(({style:c,checked:d,onChange:p,label:l,name:o,errorMessage:e,disabled:b,...m},x)=>{const t=e?`${o}-error`:void 0;return r.jsxs(r.Fragment,{children:[r.jsxs(y,{children:[r.jsx(k,{style:c,children:r.jsx("input",{ref:x,name:o,id:o,disabled:b,type:"checkbox",checked:d,onChange:p,"aria-invalid":!!e,"aria-describedby":t,...m})}),r.jsx(u,{$invalidInput:!!e,htmlFor:o,children:l})]}),e&&r.jsx(g,{id:t,role:"alert",children:e})]})}));w.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{w as C};
