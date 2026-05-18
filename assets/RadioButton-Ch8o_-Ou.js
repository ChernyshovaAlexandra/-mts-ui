import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-Dx_1l3Sb.js";import{y as l}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as m}from"./mixins-ib8c4tLP.js";import{S as b}from"./style-CYyl-vEM.js";import{q as r,p as y,u as $,E as R,w as _}from"./index-B66h-egn.js";import{E as j}from"./style-CaScT4Df.js";const k=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${m};

  &[data-disabled] {
    cursor: not-allowed;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

    &:checked + svg {
      circle:first-child {
        stroke: ${r};
      }
      circle:last-child {
        fill: ${r};
      }
    }

    &:checked:hover + svg circle:first-child {
      stroke-width: 1.7px;
    }

    &:disabled + svg {
      circle:first-child {
        stroke: ${y};
      }
      circle:last-child {
        fill: ${$};
      }
    }

    &:focus-visible + svg {
      outline: 2px solid ${r};
      outline-offset: 2px;
      border-radius: 50%;
    }
  }
`,h=l(b)`
  cursor: inherit;
  text-align: left;
  ${m};
`,I=l.span`
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: inline-flex;

  & ~ ${h} {
    color: ${({$checked:t})=>t?r:R};
  }

  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: ${_};
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`,x=a.memo(a.forwardRef(({style:t,checked:d,onChange:f,label:u,name:c,value:n,errorMessage:i,disabled:p,...g},v)=>{const w=a.useId(),s=`${c}-${n}-${w}`,o=`${s}-error`;return e.jsxs(e.Fragment,{children:[e.jsxs(k,{as:"label",htmlFor:s,"aria-describedby":i?o:void 0,"data-disabled":p?"":void 0,children:[e.jsxs(I,{style:t,$checked:!!d,children:[e.jsx("input",{"aria-invalid":!!i,"aria-describedby":i?o:void 0,checked:d,disabled:p,id:s,name:c,onChange:f,ref:v,type:"radio",value:n,...g}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7.25"}),e.jsx("circle",{cx:"8",cy:"8",r:"3.2"})]})]}),e.jsx(h,{as:"span",$variant:"P3-Regular-Comp",children:u})]}),i&&e.jsx(j,{id:o,children:i})]})}));x.displayName="RadioButton";x.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["InputHTMLAttributes"]};export{x as R};
