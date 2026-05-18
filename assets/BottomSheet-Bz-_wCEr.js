import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as w}from"./index-Dx_1l3Sb.js";import{r as $}from"./index-DoeU9KPV.js";import{y as t}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as c}from"./mixins-ib8c4tLP.js";/* empty css              */import{E as e,G as n,B as k,C as _,h,l as j,w as S,n as C}from"./index-B66h-egn.js";import{m,A as M}from"./index-C5BeFhru.js";import{c8 as z}from"./IconYoutube-CikJe2Kh.js";import{B as l}from"./Button-DfpABke-.js";const B=t(m.div)`
  position: fixed;
  inset: 0;
  background: rgba(29, 32, 35, 0.4);
  z-index: 10000;
`,T=t(m.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  background: ${j};
  border-radius: 32px 32px 0 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08), 0 -8px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({$fixedHeight:i})=>i?"height: 85vh;":"max-height: 85vh;"}
`,E=t.span`
  display: block;
  margin: 12px auto 0;
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background: ${S};
  flex-shrink: 0;
  ${({$collapsable:i})=>i&&"cursor: grab; touch-action: none;"}
`,F=t.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 20px 20px 12px;
  flex-shrink: 0;
`,I=t.p`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 4px 0;
  font-family: "MTS Wide", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${e};
`,O=t.button`
  width: 32px;
  height: 32px;
  background: ${h};
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${C};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${e};
  }
  ${c};
`,D=t.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
`,Q=t.button`
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
    background: ${h};
  }

  ${c};
`,R=t.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: ${e};
`,U=t.p`
  margin: 0;
  padding: 12px 20px 4px;
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${n};
`,G=t.div`
  display: flex;
  gap: 12px;
  padding: 8px 20px 24px;
  flex-shrink: 0;

  & > * {
    flex: 1;
    max-width: none !important;
  }
`,V=t.div`
  padding: 0 20px 8px;
  flex-shrink: 0;
  position: relative;
`,Z=t.input`
  width: 100%;
  height: 44px;
  background: ${k};
  border: 1px solid ${_};
  border-radius: 12px;
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
`,tt=t.span`
  position: absolute;
  right: 32px;
  top: 22px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${n};
`,ot=t.div`
  height: 48px;
  display: flex;
  align-items: center;
  background: rgba(188, 195, 208, 0.3);
  border: 1px solid ${({$isError:i})=>i?"#F95721":"rgba(188, 195, 208, 0.5)"};
  border-radius: 16px;
  padding: 0 8px 0 16px;
  cursor: ${({$disabled:i})=>i?"not-allowed":"pointer"};
  opacity: ${({$disabled:i})=>i?.6:1};
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${({$hasValue:i})=>i?e:n};
`,it=t.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,et=w.memo(({isOpen:i,onClose:r,title:p,children:g,onReset:a,onApply:s,resetText:f="Сбросить",applyText:b="Применить",fixedHeight:u,collapsable:d})=>{const y=!!(a||s),v=d?{drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.4},onDragEnd:(P,x)=>{(x.offset.y>80||x.velocity.y>400)&&r()}}:{};return $.createPortal(o.jsx(M,{children:i&&o.jsxs(o.Fragment,{children:[o.jsx(B,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:r}),o.jsxs(T,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:300},$fixedHeight:u,...v,children:[o.jsx(E,{"aria-hidden":"true",$collapsable:d}),p&&o.jsxs(F,{children:[o.jsx(I,{children:p}),o.jsx(O,{onClick:r,type:"button","aria-label":"Закрыть",children:o.jsx(z,{})})]}),o.jsx(D,{children:g}),y&&o.jsxs(G,{children:[a&&o.jsx(l,{btn_type:"button",variant:"secondary",onClick:a,children:f}),s&&o.jsx(l,{btn_type:"button",variant:"primary",onClick:s,children:b})]})]})]})}),document.body)});export{et as B,U as G,ot as M,R as O,tt as S,it as a,Q as b,Z as c,V as d};
