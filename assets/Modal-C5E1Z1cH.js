import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-mIjS73Jk.js";import{r as F}from"./index-BssJU-4Y.js";import{g as o}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as V}from"./mixins-DAii6Zu4.js";import{M as K,w as X,u as w,L as Y,B as G,a as J,K as Z,n as ee,c as C,d as ae}from"./index-CA_YInif.js";import{m as W,A as te}from"./proxy-CIa9PebR.js";import{c9 as ie}from"./IconYoutube-D-UZz_iv.js";import{B as g}from"./Button-pyJ4to3r.js";import{H as re}from"./Header-DprKSdQX.js";import{T as P}from"./Text-DOS6fvGo.js";import{l as ne,B as oe}from"./BottomSheet-DkpikOES.js";const le=o(W.div)`
  position: fixed;
  inset: 0;
  background: ${K};
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
`,se=o(W.div)`
  position: relative;
  width: 440px;
  max-width: 100%;
  max-height: calc(100dvh - 32px);
  padding: 32px 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
  background: ${X};
  border-radius: ${w};
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 20px 40px rgba(20, 21, 24, 0.16);

  @media (max-width: 480px) {
    width: calc(100% - 16px);
    max-height: calc(100dvh - 8px);
    border-radius: ${w} ${w} 0 0;
    margin: 0 8px;
  }
  ${V};
`,de=o.span`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 4px;
    border-radius: ${Y};
    background: ${G};
  }
`,me=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding: 0 16px;
  flex-shrink: 0;
`,pe=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`,$=o.div`
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
`,ue=o.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background-color: ${J};
  border: none;
  border-radius: ${Z};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${ee};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${C};
  }
  ${V};
`,E=a=>{const[v,f]=c.useState(()=>typeof window>"u"?!1:window.matchMedia(a).matches);return c.useEffect(()=>{const i=window.matchMedia(a),l=t=>{f(t.matches)};return f(i.matches),i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}},[a]),v},ce="(max-width: 480px)",fe=c.memo(({isModalOpen:a,mobilePresentation:v="modal",mobileBreakpoint:f=768,bottomSheetProps:i,children:l,handleClose:t,modalStyle:_,title:r,titleVariant:h="P3-Medium-Comp",subtitle:n,animateMobileSheet:S=!1,showCloseButton:k=!1,disableClosing:d=!1,cancelText:m,submitText:p,onCancel:R,onSubmit:T,submitDisabled:j=!1,submitLoading:M=!1,onDrag:L,onDragStart:A,onDragEnd:I,onAnimationStart:N,...s})=>{const U=E(`(max-width: ${f}px)`),y=v==="bottom-sheet"&&U;c.useEffect(()=>{if(!(!a||y))return ne()},[a,y]),c.useEffect(()=>{if(!a||d)return;const u=z=>{z.key==="Escape"&&t()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[a,d,t]);const O=E(ce),b=r?"modal-title":void 0,x=n?"modal-subtitle":void 0,B=!!(m||p),H=h.startsWith("H"),q=S&&O,D=q?{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}}:{},Q=q?{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:300}}:{};return y?e.jsxs(oe,{...i,isOpen:a,onClose:t,title:r,id:s.id,className:s.className,style:_??s.style,ariaLabel:s["aria-label"],ariaDescribedBy:n?x:s["aria-describedby"],showCloseButton:k,disableClosing:d,contentPadding:(i==null?void 0:i.contentPadding)??!0,children:[n&&e.jsx(P,{id:x,variant:"P4-Regular-Comp",children:n}),l,B&&e.jsxs($,{children:[m&&e.jsx(g,{variant:"secondary",onClick:R??t,children:m}),p&&e.jsx(g,{variant:"primary",onClick:T,disabled:j,loading:M,children:p})]})]}):F.createPortal(e.jsx(te,{children:a&&e.jsx(le,{onClick:d?void 0:u=>{u.target===u.currentTarget&&t()},...D,children:e.jsxs(se,{role:"dialog","aria-modal":"true","aria-labelledby":b,"aria-describedby":x,style:_,...Q,...s,children:[e.jsx(de,{"aria-hidden":"true"}),k&&!d&&e.jsx(ue,{onClick:t,"aria-label":"Закрыть модальное окно",type:"button",children:e.jsx(ie,{})}),(r||n)&&e.jsxs(me,{children:[r&&H&&e.jsx(re,{id:b,variant:h,as:"h2",style:{color:C,textAlign:"center"},children:r}),r&&!H&&e.jsx(P,{id:b,variant:h,as:"h2",style:{color:C,textAlign:"center"},children:r}),n&&e.jsx(P,{id:x,variant:"P4-Regular-Comp",style:{color:ae,textAlign:"center"},children:n})]}),l&&e.jsx(pe,{onDrag:L,onDragStart:A,onDragEnd:I,onAnimationStart:N,children:l}),B&&e.jsxs($,{children:[m&&e.jsx(g,{btn_type:"button",variant:"secondary",onClick:R??t,children:m}),p&&e.jsx(g,{btn_type:"button",variant:"primary",onClick:T,disabled:j,loading:M,children:p})]})]})})}),document.body)});fe.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{mobilePresentation:{required:!1,tsType:{name:"union",raw:'"modal" | "bottom-sheet"',elements:[{name:"literal",value:'"modal"'},{name:"literal",value:'"bottom-sheet"'}]},description:"",defaultValue:{value:'"modal"',computed:!1}},mobileBreakpoint:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"768",computed:!1}},bottomSheetProps:{required:!1,tsType:{name:"Pick",elements:[{name:"BottomSheetProps"},{name:"union",raw:'"contentPadding" | "fixedHeight" | "collapsable" | "bottomOffset"',elements:[{name:"literal",value:'"contentPadding"'},{name:"literal",value:'"fixedHeight"'},{name:"literal",value:'"collapsable"'},{name:"literal",value:'"bottomOffset"'}]}],raw:'Pick<BottomSheetProps, "contentPadding" | "fixedHeight" | "collapsable" | "bottomOffset">'},description:""},isModalOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},modalStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},title:{required:!1,tsType:{name:"string"},description:""},titleVariant:{required:!1,tsType:{name:"union",raw:"HeaderVariant | TextVariant",elements:[{name:"union",raw:`| "H1-Wide"
| "H2-Wide"
| "H3-Wide"
| "H4-Wide"
| "H4-Comp"`,elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'},{name:"literal",value:'"H4-Comp"'}]},{name:"union",raw:`| "P1-Regular-Comp"
| "P1-Regular-Text"
| "P2-Regular-Comp"
| "P2-Regular-Text"
| "P3-Bold-Comp"
| "P3-Medium-Comp"
| "P3-Regular-Comp"
| "P3-Regular-Text"
| "P4-Bold-Comp"
| "P4-Bold-Upp-Wide"
| "P4-Medium-Comp"
| "P4-Medium-Upp-Comp"
| "P4-Regular-Comp"
| "P4-Regular-Text"`,elements:[{name:"literal",value:'"P1-Regular-Comp"'},{name:"literal",value:'"P1-Regular-Text"'},{name:"literal",value:'"P2-Regular-Comp"'},{name:"literal",value:'"P2-Regular-Text"'},{name:"literal",value:'"P3-Bold-Comp"'},{name:"literal",value:'"P3-Medium-Comp"'},{name:"literal",value:'"P3-Regular-Comp"'},{name:"literal",value:'"P3-Regular-Text"'},{name:"literal",value:'"P4-Bold-Comp"'},{name:"literal",value:'"P4-Bold-Upp-Wide"'},{name:"literal",value:'"P4-Medium-Comp"'},{name:"literal",value:'"P4-Medium-Upp-Comp"'},{name:"literal",value:'"P4-Regular-Comp"'},{name:"literal",value:'"P4-Regular-Text"'}]}]},description:"",defaultValue:{value:'"P3-Medium-Comp"',computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:""},animateMobileSheet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:""},submitText:{required:!1,tsType:{name:"string"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},submitLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{fe as M};
