import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DatCARk7.js";import{d as r}from"./styled-components.browser.esm-Cp418-ky.js";import{e as c,f as l,c as i}from"./index-DItf0zJP.js";import{I as x}from"./IconX-Dzjln_tM.js";import{T as m}from"./Text-BgcIkr1Y.js";const u=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,g=r.div`
  background: white;
  border-radius: 24px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`,h=r.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: ${c};
  border: none;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  cursor: pointer;

  &:hover {
    background-color: ${l};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${i};
  }
`,f=d.memo(({isModalOpen:n,children:s,handleClose:t,modalStyle:a,title:o})=>n?e.jsx(u,{onClick:t,children:e.jsxs(g,{style:a,onClick:p=>p.stopPropagation(),children:[o?e.jsx(m,{variant:"P4-Bold-Upp-Wide",style:{fontWeight:"500",fontSize:"20px",lineHeight:"24px",color:i},children:o}):e.jsx(e.Fragment,{}),e.jsx(h,{onClick:t,children:e.jsx(x,{})}),s]})}):null);f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isModalOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleClose:{required:!0,tsType:{name:"any"},description:""},modalStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};export{f as M};
