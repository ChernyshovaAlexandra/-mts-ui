import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as l}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconEyeOff-Ktx11c4b.js";import{c as A}from"./IconMinus-C8rc2V5Y.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";import{r as h}from"./index-CgfFrydU.js";import{C as _}from"./index-Cd8Y-sOa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-DC7KZOMn.js";import"./ResizeObserver.es-B1PUzC5B.js";const V=l.div`
  position: relative;
  width: 100%;
`,P=l.button`
  position: absolute;
  top: 50%;
  ${t=>t.right?"right: -20px;":"left: -20px;"}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({disabled:t})=>t?"grayscale(1) brightness(2)":"none"};
`,E=l.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`,L=l.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({active:t})=>t?"#FF0032":"transparent"};
  border: 2px solid #ff0032;
`,S=({items:t,slidesToShow:n=3,slidesToScroll:T=1,infinite:c=!1,arrowColor:j="#FF0032",showDots:R=!1,customPrevArrow:u,customNextArrow:m,customDots:f,ariaLabel:q="Карусель с контентом",arrowRightStyle:k,arrowLeftStyle:D})=>{const o=h.useRef(null),[s,g]=h.useState(0),p=t.length,F=p-n,$=!c&&s===0,I=!c&&s>=F,y=e=>{var r;(r=o.current)==null||r.goTo(e),g(e)},x=e=>{const r=e==="left"?$:I;return a.jsx(P,{onClick:()=>{var i,b;return e==="left"?(i=o.current)==null?void 0:i.prev():(b=o.current)==null?void 0:b.next()},right:e==="right",disabled:r,"aria-label":`Прокрутить ${e==="left"?"влево":"вправо"}`,children:a.jsx(A,{direction:e,color:j})})},N=e=>{var r,i;e.key==="ArrowLeft"&&((r=o.current)==null||r.prev()),e.key==="ArrowRight"&&((i=o.current)==null||i.next())};return a.jsxs(V,{role:"region","aria-label":q,"aria-roledescription":"carousel",tabIndex:0,onKeyDown:N,children:[u?a.jsx("div",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.prev()},style:{...D},children:u}):x("left"),a.jsx(_,{ref:o,dots:!1,infinite:c,slidesToShow:n,slidesToScroll:T,beforeChange:(e,r)=>g(r),style:{padding:"8px 32px"},"aria-live":"polite",children:t.map((e,r)=>a.jsx("div",{style:{padding:"0 8px"},role:"group","aria-roledescription":"slide","aria-label":`Слайд ${r+1} из ${p}`,"aria-current":r===s?"true":void 0,children:e},r))}),m?a.jsx("div",{onClick:()=>{var e;return(e=o.current)==null?void 0:e.next()},style:{...k},children:m}):x("right"),R&&(f?f(s,y):a.jsx(E,{role:"tablist","aria-label":"Индикаторы слайдов",children:t.map((e,r)=>a.jsx(L,{active:r===s,onClick:()=>y(r),role:"tab","aria-selected":r===s,"aria-label":`Перейти к слайду ${r+1} из ${p}`},r))}))]})};S.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},slidesToShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},infinite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},arrowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FF0032"',computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customPrevArrow:{required:!1,tsType:{name:"ReactNode"},description:"Кастомные стрелки"},customNextArrow:{required:!1,tsType:{name:"ReactNode"},description:""},customDots:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  activeIndex: number,
  goTo: (index: number) => void
) => ReactNode`,signature:{arguments:[{type:{name:"number"},name:"activeIndex"},{type:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},name:"goTo"}],return:{name:"ReactNode"}}},description:"Кастомные точки"},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Карусель с контентом"',computed:!1}},arrowRightStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},arrowLeftStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Z={title:"МТС/Carousel",component:S,tags:["autodocs"]},K=l.div`
  width: 160px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,z=Array.from({length:10},(t,n)=>a.jsxs(K,{children:["Элемент ",n+1]},n)),d={args:{items:z,slidesToShow:4,slidesToScroll:1,arrowColor:"#FF0032",infinite:!1}};var v,w,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrowColor: "#FF0032",
    infinite: false
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ee=["Default"];export{d as Default,ee as __namedExportsOrder,Z as default};
