import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-mIjS73Jk.js";import{r as W}from"./index-BssJU-4Y.js";import{g as e}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as j}from"./mixins-DAii6Zu4.js";/* empty css              */import{g as Y,c as s,d as c,y as X,f as D,t as S,m as O,w as G,p as k,L as H,B as R,a as V}from"./index-CA_YInif.js";import{m as T,A as q}from"./proxy-CIa9PebR.js";import{cc as A}from"./IconRestaurant-hU7exjLJ.js";import{B as _}from"./Button-Cyu4nxtQ.js";const J=e(T.div)`
  position: fixed;
  inset: 0 0 ${({$bottomOffset:t})=>t} 0;
  background: rgba(29, 32, 35, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
`,K=e(T.div)`
  position: fixed;
  bottom: ${({$bottomOffset:t})=>t};
  left: 0;
  right: 0;
  z-index: 10001;
  background: ${G};
  border-radius: ${k} ${k} 0 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08), 0 -8px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({$fixedHeight:t})=>t?"height: 85vh;":"max-height: 85vh;"}
`,N=e.span`
  display: block;
  margin: 12px auto 0;
  width: 32px;
  height: 4px;
  border-radius: ${H};
  background: ${R};
  flex-shrink: 0;
  ${({$collapsable:t})=>t&&"cursor: grab; touch-action: none;"}
`,Q=e.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 20px 20px 12px;
  flex-shrink: 0;
`,U=e.p`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 4px 0;
  font-family: "MTS Wide", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${s};
`,Z=e.button`
  width: 32px;
  height: 32px;
  background: ${O};
  border: none;
  border-radius: ${S};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${V};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${s};
  }
  ${j};
`,tt=e.div`
  min-height: 0;
  padding: ${({$contentPadding:t})=>t===!0?"0 20px calc(24px + env(safe-area-inset-bottom, 0px))":typeof t=="string"?t:"0"};
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
`,bt=e.button`
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
    background: ${O};
  }

  ${j};
`,gt=e.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: ${s};
`,yt=e.p`
  margin: 0;
  padding: 12px 20px 4px;
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${c};
`,ot=e.div`
  display: flex;
  gap: 12px;
  padding: 8px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  flex-shrink: 0;

  & > * {
    flex: 1;
    max-width: none !important;
  }
`,ut=e.div`
  padding: 0 20px 8px;
  flex-shrink: 0;
  position: relative;
`,wt=e.input`
  width: 100%;
  height: 44px;
  background: ${X};
  border: 1px solid ${D};
  border-radius: ${S};
  padding: 0 44px 0 16px;
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${s};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${c};
  }

  &:focus {
    border-color: #626c77;
  }
`,$t=e.span`
  position: absolute;
  right: 32px;
  top: 22px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${c};
`,vt=e.button`
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  height: 48px;
  display: flex;
  align-items: center;
  background: rgba(188, 195, 208, 0.3);
  border: 1px solid ${({$isError:t})=>t?"#F95721":"rgba(188, 195, 208, 0.5)"};
  border-radius: ${Y};
  padding: 0 8px 0 16px;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({$disabled:t})=>t?.6:1};
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${({$hasValue:t})=>t?s:c};
`,kt=e.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;let d=0,p=null;const et=()=>{if(d+=1,d===1){const n=document.documentElement,{body:o}=document,r=window.scrollX,a=window.scrollY;p={scrollX:r,scrollY:a,htmlOverflow:n.style.overflow,bodyOverflow:o.style.overflow,bodyPosition:o.style.position,bodyTop:o.style.top,bodyLeft:o.style.left,bodyRight:o.style.right,bodyWidth:o.style.width},n.style.overflow="hidden",o.style.overflow="hidden",o.style.position="fixed",o.style.top=`-${a}px`,o.style.left="0",o.style.right="0",o.style.width="100%"}let t=!1;return()=>{if(t||(t=!0,d-=1,d>0||p===null))return;const n=document.documentElement,{body:o}=document,r=p;p=null,n.style.overflow=r.htmlOverflow,o.style.overflow=r.bodyOverflow,o.style.position=r.bodyPosition,o.style.top=r.bodyTop,o.style.left=r.bodyLeft,o.style.right=r.bodyRight,o.style.width=r.bodyWidth,window.scrollTo(r.scrollX,r.scrollY)}},it=t=>t===void 0?"0px":typeof t=="number"?`${t}px`:t,_t=y.memo(({id:t,className:n,style:o,ariaLabel:r,ariaDescribedBy:a,showCloseButton:z=!0,contentPadding:C=!1,disableClosing:x=!1,isOpen:f,onClose:m,title:h,children:I,onReset:b,onApply:g,resetText:M="Сбросить",applyText:E="Применить",fixedHeight:L,collapsable:u,bottomOffset:B})=>{const w=`${y.useId()}-title`;y.useEffect(()=>{if(f)return et()},[f]);const F=!!(b||g),l=it(B),$=l==="0px"?"100%":`calc(100% + ${l})`,P=u&&!x?{drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.4},onDragEnd:(nt,v)=>{(v.offset.y>80||v.velocity.y>400)&&m()}}:{};return W.createPortal(i.jsx(q,{children:f&&i.jsxs(i.Fragment,{children:[i.jsx(J,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:x?void 0:m,$bottomOffset:l}),i.jsxs(K,{id:t,className:n,style:o,role:"dialog","aria-modal":"true","aria-label":r,"aria-labelledby":h?w:void 0,"aria-describedby":a,initial:{y:$},animate:{y:0},exit:{y:$},transition:{type:"spring",damping:30,stiffness:300},$fixedHeight:L,$bottomOffset:l,...P,children:[i.jsx(N,{"aria-hidden":"true",$collapsable:u}),h&&i.jsxs(Q,{children:[i.jsx(U,{id:w,children:h}),z&&!x&&i.jsx(Z,{onClick:m,type:"button","aria-label":"Закрыть",children:i.jsx(A,{})})]}),i.jsx(tt,{$contentPadding:C,children:I}),F&&i.jsxs(ot,{children:[b&&i.jsx(_,{btn_type:"button",variant:"secondary",onClick:b,children:M}),g&&i.jsx(_,{btn_type:"button",variant:"primary",onClick:g,children:E})]})]})]})}),document.body)});export{_t as B,yt as G,vt as M,bt as O,ut as S,gt as a,kt as b,wt as c,$t as d,et as l};
