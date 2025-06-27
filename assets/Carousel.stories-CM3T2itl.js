import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as a}from"./styled-components.browser.esm-CzyguTxk.js";import"./IconLock-e9pa8MsX.js";import{c as T}from"./IconCamera-BH4ulT7S.js";import"./IconDate-7erjMhfW.js";import"./IconTime-BHKz0MfM.js";import{r as f}from"./index-CgfFrydU.js";import{C as F}from"./index-Cd8Y-sOa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-DC7KZOMn.js";import"./ResizeObserver.es-B1PUzC5B.js";const D=a.div`
  position: relative;
  width: 100%;
`,_=a.button`
  position: absolute;
  top: 50%;
  ${e=>e.right?"right: -20px;":"left: -20px;"}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({disabled:e})=>e?"grayscale(1) brightness(2)":"none"};
`,k=a.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`,q=a.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({active:e})=>e?"#FF0032":"transparent"};
  border: 2px solid #ff0032;
`,h=({items:e,slidesToShow:o=3,slidesToScroll:b=1,infinite:n=!1,arrowColor:y="#FF0032",showDots:w=!1})=>{const i=f.useRef(null),[d,C]=f.useState(0),j=e.length-o,v=!n&&d===0,S=!n&&d>=j,c=t=>{const r=t==="left"?v:S;return s.jsx(_,{onClick:()=>{var p,u;return t==="left"?(p=i.current)==null?void 0:p.prev():(u=i.current)==null?void 0:u.next()},right:t==="right",disabled:r,"aria-label":`Прокрутить ${t==="left"?"влево":"вправо"}`,children:s.jsx(T,{direction:t,color:y})})};return s.jsxs(D,{role:"region","aria-label":"Карусель с контентом",children:[c("left"),s.jsx(F,{ref:i,dots:!1,infinite:n,slidesToShow:o,slidesToScroll:b,beforeChange:(t,r)=>C(r),style:{padding:"8px 32px"},children:e.map((t,r)=>s.jsx("div",{style:{padding:"0 8px"},children:t},r))}),c("right"),w&&s.jsx(k,{children:e.map((t,r)=>s.jsx(q,{active:r===d},r))})]})};h.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},slidesToShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},infinite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},arrowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FF0032"',computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"МТС/Carousel",component:h,tags:["autodocs"]},I=a.div`
  width: 160px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,$=Array.from({length:10},(e,o)=>s.jsxs(I,{children:["Элемент ",o+1]},o)),l={args:{items:$,slidesToShow:4,slidesToScroll:1,arrowColor:"#FF0032",infinite:!1}};var m,x,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrowColor: "#FF0032",
    infinite: false
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const K=["Default"];export{l as Default,K as __namedExportsOrder,J as default};
