import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconEyeOff-Ktx11c4b.js";import{c as E}from"./IconMinus-C8rc2V5Y.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";import{r as g}from"./index-CgfFrydU.js";import{C as L}from"./index-Cd8Y-sOa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-DC7KZOMn.js";import"./ResizeObserver.es-B1PUzC5B.js";const K=d.div`
  position: relative;
  width: 100%;
`,z=d.button`
  position: absolute;
  top: 50%;
  ${s=>s.right?"right: -20px;":"left: -20px;"}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({disabled:s})=>s?"grayscale(1) brightness(2)":"none"};
`,B=d.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`,O=d.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({active:s})=>s?"#FF0032":"transparent"};
  border: 2px solid #ff0032;
`,k=({items:s,slidesToShow:n=3,slidesToScroll:D=1,infinite:u=!1,arrowColor:F="#FF0032",showDots:$=!1,customPrevArrow:y,customNextArrow:f,customDots:x,ariaLabel:I="Карусель с контентом",arrowRightStyle:N,arrowLeftStyle:A,beforeChange:t,afterChange:p})=>{const i=g.useRef(null),[o,v]=g.useState(0),m=s.length,_=m-n,V=!u&&o===0,P=!u&&o>=_,w=e=>{var r;t==null||t(),(r=i.current)==null||r.goTo(e),v(e)},T=e=>{const r=e==="left"?V:P;return a.jsx(z,{onClick:()=>{var l,S;t==null||t(),e==="left"?(l=i.current)==null||l.prev():(S=i.current)==null||S.next()},right:e==="right",disabled:r,"aria-label":`Прокрутить ${e==="left"?"влево":"вправо"}`,children:a.jsx(E,{direction:e,color:F})})},b=e=>{var r,l;e.key==="ArrowLeft"&&(t==null||t(),(r=i.current)==null||r.prev()),e.key==="ArrowRight"&&(t==null||t(),(l=i.current)==null||l.next())};return a.jsxs(K,{role:"region","aria-label":I,"aria-roledescription":"carousel",tabIndex:0,onKeyDown:b,children:[y?a.jsx("div",{onClick:()=>{var e;t==null||t(),(e=i.current)==null||e.prev()},style:{...A},children:y}):T("left"),a.jsx(L,{ref:i,dots:!1,infinite:u,slidesToShow:n,slidesToScroll:D,beforeChange:(e,r)=>{t==null||t(),v(r)},afterChange:e=>p==null?void 0:p(e),style:{padding:"8px 32px"},"aria-live":"polite",children:s.map((e,r)=>a.jsx("div",{style:{padding:"0 8px"},role:"group","aria-roledescription":"slide","aria-label":`Слайд ${r+1} из ${m}`,"aria-current":r===o?"true":void 0,children:e},r))}),f?a.jsx("div",{onClick:()=>{var e;t==null||t(),(e=i.current)==null||e.next()},style:{...N},children:f}):T("right"),$&&(x?x(o,w):a.jsx(B,{role:"tablist","aria-label":"Индикаторы слайдов",children:s.map((e,r)=>a.jsx(O,{active:r===o,onClick:()=>w(r),role:"tab","aria-selected":r===o,"aria-label":`Перейти к слайду ${r+1} из ${m}`},r))}))]})};k.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},slidesToShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},infinite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},arrowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FF0032"',computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customPrevArrow:{required:!1,tsType:{name:"ReactNode"},description:"Кастомные стрелки"},customNextArrow:{required:!1,tsType:{name:"ReactNode"},description:""},beforeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},afterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:""},customDots:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  activeIndex: number,
  goTo: (index: number) => void
) => ReactNode`,signature:{arguments:[{type:{name:"number"},name:"activeIndex"},{type:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},name:"goTo"}],return:{name:"ReactNode"}}},description:"Кастомные точки"},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Карусель с контентом"',computed:!1}},arrowRightStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},arrowLeftStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const te={title:"МТС/Carousel",component:k,tags:["autodocs"]},Y=d.div`
  width: 160px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,G=Array.from({length:10},(s,n)=>a.jsxs(Y,{children:["Элемент ",n+1]},n)),c={args:{items:G,slidesToShow:4,slidesToScroll:1,arrowColor:"#FF0032",infinite:!1}};var j,R,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrowColor: "#FF0032",
    infinite: false
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const re=["Default"];export{c as Default,re as __namedExportsOrder,te as default};
