import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-Dx_1l3Sb.js";import{r as B}from"./index-DoeU9KPV.js";import{y as o}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as y}from"./mixins-ib8c4tLP.js";import{j as I,w as C,n as P,f as A,E as b,G as F}from"./index-B66h-egn.js";import{C as L}from"./Card-CtToN61-.js";import{c8 as M}from"./IconYoutube-CikJe2Kh.js";import{B as f}from"./Button-DfpABke-.js";import{T as u}from"./Text-BGtrDhtg.js";const R=o.div`
  position: fixed;
  inset: 0;
  background: ${I};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: safe center;
  z-index: 999999999;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 16px;

  @media (max-width: 480px) {
    align-items: flex-end;
    padding: 0;
  }
`,X=o(L).attrs({variant:"default"})`
  position: relative;
  width: 440px;
  max-width: 100%;
  padding: 32px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 20px 40px rgba(20, 21, 24, 0.16);

  @media (max-width: 480px) {
    width: calc(100% - 16px);
    border-radius: 24px 24px 0 0;
    margin: 0 8px;
  }
  ${y};
`,z=o.span`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background: ${C};
  }
`,D=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding: 0 16px;
`,G=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=o.div`
  display: flex;
  gap: 12px;

  & > * {
    flex: 1;
    max-width: none !important;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,K=o.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background-color: ${P};
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${A};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${b};
  }
  ${y};
`,T=p.memo(({isModalOpen:r,children:c,handleClose:e,modalStyle:g,title:a,subtitle:n,showCloseButton:h=!1,disableClosing:d=!1,cancelText:s,submitText:l,onCancel:v,onSubmit:w,submitDisabled:j=!1,submitLoading:k=!1,..._})=>{if(p.useEffect(()=>{if(r)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[r]),p.useEffect(()=>{if(!r||d)return;const i=$=>{$.key==="Escape"&&e()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[r,d,e]),!r)return null;const x=a?"modal-title":void 0,m=n?"modal-subtitle":void 0,E=!!(s||l);return B.createPortal(t.jsx(R,{onClick:d?void 0:i=>{i.target===i.currentTarget&&e()},children:t.jsxs(X,{role:"dialog","aria-modal":"true","aria-labelledby":x,"aria-describedby":m,style:g,..._,children:[t.jsx(z,{"aria-hidden":"true"}),h&&!d&&t.jsx(K,{onClick:e,"aria-label":"Закрыть модальное окно",type:"button",children:t.jsx(M,{})}),(a||n)&&t.jsxs(D,{children:[a&&t.jsx(u,{id:x,variant:"P3-Medium-Comp",as:"h2",style:{color:b,textAlign:"center"},children:a}),n&&t.jsx(u,{id:m,variant:"P4-Regular-Comp",style:{color:F,textAlign:"center"},children:n})]}),c&&t.jsx(G,{children:c}),E&&t.jsxs(H,{children:[s&&t.jsx(f,{btn_type:"button",variant:"secondary",onClick:v??e,children:s}),l&&t.jsx(f,{btn_type:"button",variant:"primary",onClick:w,disabled:j,loading:k,children:l})]})]})}),document.body)});export{T as M};
