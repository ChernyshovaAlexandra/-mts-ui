import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{r as C}from"./index-DoeU9KPV.js";import{y as o}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as h}from"./mixins-CTkzXf3m.js";/* empty css              */import{G as M,Q as e,S as n,C as z,D as O,F as g,h as b,l as F,K as m,H as T,w as B,n as E}from"./index-CWlbk4Hf.js";import{m as u,A as I}from"./index-BrN7QjLr.js";import{c9 as D}from"./IconYoutube-CRYDP8rR.js";import{B as f}from"./Button-Rt6WeiJe.js";const G=o(u.div)`
  position: fixed;
  inset: 0 0 ${({$bottomOffset:t})=>t} 0;
  background: rgba(29, 32, 35, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
`,H=o(u.div)`
  position: fixed;
  bottom: ${({$bottomOffset:t})=>t};
  left: 0;
  right: 0;
  z-index: 10001;
  background: ${F};
  border-radius: ${m} ${m} 0 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08), 0 -8px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({$fixedHeight:t})=>t?"height: 85vh;":"max-height: 85vh;"}
`,L=o.span`
  display: block;
  margin: 12px auto 0;
  width: 32px;
  height: 4px;
  border-radius: ${T};
  background: ${B};
  flex-shrink: 0;
  ${({$collapsable:t})=>t&&"cursor: grab; touch-action: none;"}
`,P=o.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 20px 20px 12px;
  flex-shrink: 0;
`,W=o.p`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 4px 0;
  font-family: "MTS Wide", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${e};
`,Y=o.button`
  width: 32px;
  height: 32px;
  background: ${b};
  border: none;
  border-radius: ${g};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${E};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${e};
  }
  ${h};
`,K=o.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
`,et=o.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${b};
  }

  ${h};
`,rt=o.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: ${e};
`,nt=o.p`
  margin: 0;
  padding: 12px 20px 4px;
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${n};
`,Q=o.div`
  display: flex;
  gap: 12px;
  padding: 8px 20px 24px;
  flex-shrink: 0;

  & > * {
    flex: 1;
    max-width: none !important;
  }
`,st=o.div`
  padding: 0 20px 8px;
  flex-shrink: 0;
  position: relative;
`,at=o.input`
  width: 100%;
  height: 44px;
  background: ${z};
  border: 1px solid ${O};
  border-radius: ${g};
  padding: 0 44px 0 16px;
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${e};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${n};
  }

  &:focus {
    border-color: #626c77;
  }
`,pt=o.span`
  position: absolute;
  right: 32px;
  top: 22px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${n};
`,dt=o.div`
  height: 48px;
  display: flex;
  align-items: center;
  background: rgba(188, 195, 208, 0.3);
  border: 1px solid ${({$isError:t})=>t?"#F95721":"rgba(188, 195, 208, 0.5)"};
  border-radius: ${M};
  padding: 0 8px 0 16px;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({$disabled:t})=>t?.6:1};
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${({$hasValue:t})=>t?e:n};
`,ct=o.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,V=t=>t===void 0?"0px":typeof t=="number"?`${t}px`:t,lt=S.memo(({isOpen:t,onClose:s,title:d,children:y,onReset:a,onApply:p,resetText:$="Сбросить",applyText:_="Применить",fixedHeight:k,collapsable:c,bottomOffset:w})=>{const v=!!(a||p),r=V(w),l=r==="0px"?"100%":`calc(100% + ${r})`,j=c?{drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.4},onDragEnd:(X,x)=>{(x.offset.y>80||x.velocity.y>400)&&s()}}:{};return C.createPortal(i.jsx(I,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(G,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:s,$bottomOffset:r}),i.jsxs(H,{initial:{y:l},animate:{y:0},exit:{y:l},transition:{type:"spring",damping:30,stiffness:300},$fixedHeight:k,$bottomOffset:r,...j,children:[i.jsx(L,{"aria-hidden":"true",$collapsable:c}),d&&i.jsxs(P,{children:[i.jsx(W,{children:d}),i.jsx(Y,{onClick:s,type:"button","aria-label":"Закрыть",children:i.jsx(D,{})})]}),i.jsx(K,{children:y}),v&&i.jsxs(Q,{children:[a&&i.jsx(f,{btn_type:"button",variant:"secondary",onClick:a,children:$}),p&&i.jsx(f,{btn_type:"button",variant:"primary",onClick:p,children:_})]})]})]})}),document.body)});export{lt as B,nt as G,dt as M,rt as O,pt as S,ct as a,et as b,at as c,st as d};
