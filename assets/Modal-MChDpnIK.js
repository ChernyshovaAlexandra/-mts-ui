import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-G8LIXM5I.js";import{r as Y}from"./index-DoeU9KPV.js";import{y as s}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as j}from"./mixins-CTkzXf3m.js";import{j as C,l as O,J as u,H as T,w as W,n as z,E as D,f as F,Q as b,S as J}from"./index-CWlbk4Hf.js";import{m as E,A as K}from"./index-BrN7QjLr.js";import{c9 as U}from"./IconYoutube-CRYDP8rR.js";import{B as _}from"./Button-Rt6WeiJe.js";import{H as G}from"./Header-2Snyan4B.js";import{T as k}from"./Text-2zki5lTF.js";const N=s(E.div)`
  position: fixed;
  inset: 0;
  background: ${C};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: safe center;
  z-index: 999999999;
  overflow: hidden;
  overscroll-behavior: contain;
  padding: 16px;

  @media (max-width: 480px) {
    align-items: flex-end;
    padding: 0;
  }
`,Z=s(E.div)`
  position: relative;
  width: 440px;
  max-width: 100%;
  max-height: calc(100dvh - 32px);
  padding: 32px 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
  background: ${O};
  border-radius: ${u};
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 20px 40px rgba(20, 21, 24, 0.16);

  @media (max-width: 480px) {
    width: calc(100% - 16px);
    max-height: calc(100dvh - 8px);
    border-radius: ${u} ${u} 0 0;
    margin: 0 8px;
  }
  ${j};
`,V=s.span`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 4px;
    border-radius: ${T};
    background: ${W};
  }
`,q=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding: 0 16px;
  flex-shrink: 0;
`,tt=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`,ot=s.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;

  & > * {
    flex: 0 1 auto;
    min-width: 180px;
    width: fit-content;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    & > * {
      flex: 1;
      min-width: 0;
      width: 100%;
      max-width: none !important;
    }
  }
`,et=s.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background-color: ${z};
  border: none;
  border-radius: ${D};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${F};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${b};
  }
  ${j};
`,it="(max-width: 480px)";let d=0,x=null;const rt=()=>{if(d+=1,d>1)return()=>{d-=1};const i=document.documentElement,{body:t}=document,r=window.scrollX,n=window.scrollY;return x={scrollX:r,scrollY:n,htmlOverflow:i.style.overflow,bodyOverflow:t.style.overflow,bodyPosition:t.style.position,bodyTop:t.style.top,bodyLeft:t.style.left,bodyRight:t.style.right,bodyWidth:t.style.width},i.style.overflow="hidden",t.style.overflow="hidden",t.style.position="fixed",t.style.top=`-${n}px`,t.style.left="0",t.style.right="0",t.style.width="100%",()=>{if(d-=1,d>0||x===null)return;const o=x;x=null,i.style.overflow=o.htmlOverflow,t.style.overflow=o.bodyOverflow,t.style.position=o.bodyPosition,t.style.top=o.bodyTop,t.style.left=o.bodyLeft,t.style.right=o.bodyRight,t.style.width=o.bodyWidth,window.scrollTo(o.scrollX,o.scrollY)}},nt=i=>{const[t,r]=c.useState(()=>typeof window>"u"?!1:window.matchMedia(i).matches);return c.useEffect(()=>{const n=window.matchMedia(i),o=a=>{r(a.matches)};return r(n.matches),n.addEventListener("change",o),()=>{n.removeEventListener("change",o)}},[i]),t},ut=c.memo(({isModalOpen:i,children:t,handleClose:r,modalStyle:n,title:o,titleVariant:a="P3-Medium-Comp",subtitle:p,animateMobileSheet:$=!1,showCloseButton:M=!1,disableClosing:m=!1,cancelText:h,submitText:y,onCancel:L,onSubmit:P,submitDisabled:A=!1,submitLoading:B=!1,...H})=>{c.useEffect(()=>{if(i)return rt()},[i]),c.useEffect(()=>{if(!i||m)return;const l=Q=>{Q.key==="Escape"&&r()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[i,m,r]);const I=nt(it),f=o?"modal-title":void 0,w=p?"modal-subtitle":void 0,R=!!(h||y),g=a.startsWith("H"),v=$&&I,S=v?{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}}:{},X=v?{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:300}}:{};return Y.createPortal(e.jsx(K,{children:i&&e.jsx(N,{onClick:m?void 0:l=>{l.target===l.currentTarget&&r()},...S,children:e.jsxs(Z,{role:"dialog","aria-modal":"true","aria-labelledby":f,"aria-describedby":w,style:n,...X,...H,children:[e.jsx(V,{"aria-hidden":"true"}),M&&!m&&e.jsx(et,{onClick:r,"aria-label":"Закрыть модальное окно",type:"button",children:e.jsx(U,{})}),(o||p)&&e.jsxs(q,{children:[o&&g&&e.jsx(G,{id:f,variant:a,as:"h2",style:{color:b,textAlign:"center"},children:o}),o&&!g&&e.jsx(k,{id:f,variant:a,as:"h2",style:{color:b,textAlign:"center"},children:o}),p&&e.jsx(k,{id:w,variant:"P4-Regular-Comp",style:{color:J,textAlign:"center"},children:p})]}),t&&e.jsx(tt,{children:t}),R&&e.jsxs(ot,{children:[h&&e.jsx(_,{btn_type:"button",variant:"secondary",onClick:L??r,children:h}),y&&e.jsx(_,{btn_type:"button",variant:"primary",onClick:P,disabled:A,loading:B,children:y})]})]})})}),document.body)});export{ut as M};
