import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CgfFrydU.js";import{d as t}from"./styled-components.browser.esm-CzyguTxk.js";import{v as a}from"./fonts-C-rNwtaq.js";import{e as u,f as x,c as h}from"./index-DzNPuTIb.js";import{T as g}from"./Text-C8FsFEkf.js";import{b as f}from"./IconMinus-B3RIS-SV.js";const b=t.div`
  position: sticky;
  top: 0;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  clip-path: none !important;
  height: 100vh;
  
`,y=t.div`
  background: white;
  border-radius: 24px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  max-height: 90vh;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 2rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 16px 16px 40px;
  }
  ${a};
`,v=t.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: ${u};
  border: none;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  cursor: pointer;

  &:hover {
    background-color: ${x};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${h};
  }
  ${a};
`,w=t(g)`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  max-width: calc(100% - 100px);
  color: rgb(29, 32, 35);
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
`,k=m.memo(({isModalOpen:n,children:s,handleClose:i,modalStyle:d,title:o,disableClosing:l=!1,...p})=>{if(!n)return null;const r=o?"modal-title":void 0;return e.jsx(b,{onClick:i,children:e.jsxs(y,{role:"dialog","aria-modal":"true","aria-labelledby":r,onClick:c=>c.stopPropagation(),style:d,...p,children:[o&&e.jsx(w,{id:r,variant:"P4-Bold-Upp-Wide",children:o}),!l&&e.jsx(v,{onClick:i,"aria-label":"Закрыть модальное окно",children:e.jsx(f,{})}),s]})})});k.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isModalOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},modalStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},title:{required:!1,tsType:{name:"string"},description:""},disableClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{k as M};
