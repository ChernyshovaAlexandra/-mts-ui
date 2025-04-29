import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DatCARk7.js";import{d as o}from"./styled-components.browser.esm-D7OA6UWf.js";import{e as m,f as x,c as i}from"./index-Cpl4D9D3.js";import{I as u}from"./IconX-Dzjln_tM.js";import{T as h}from"./Text-M8jqDLl4.js";const f=o.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,g=o.div`
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

  @media (max-width: 480px) {
    border-radius: 16px;
    max-width: 90%;
    max-height: 85vh;
    padding: 16px;
  }
`,b=o.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: ${m};
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
    color: ${i};
  }
`,y=c.memo(({isModalOpen:s,children:a,handleClose:t,modalStyle:n,title:r,disableClosing:d=!1,...p})=>s?e.jsx(f,{onClick:t,children:e.jsxs(g,{style:n,onClick:l=>l.stopPropagation(),...p,children:[r?e.jsx(h,{variant:"P4-Bold-Upp-Wide",style:{fontWeight:"500",fontSize:"20px",lineHeight:"24px",color:i},children:r}):e.jsx(e.Fragment,{}),!d&&e.jsx(b,{onClick:t,children:e.jsx(u,{})}),a]})}):null);y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isModalOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleClose:{required:!0,tsType:{name:"any"},description:""},modalStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},title:{required:!1,tsType:{name:"string"},description:""},disableClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{y as M};
