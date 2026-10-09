import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{g as p}from"./styled-components.browser.esm-UUNjPRYl.js";import{h as L}from"./IconRestaurant-hU7exjLJ.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import{r as R}from"./index-mIjS73Jk.js";import{C as K}from"./index-EJ1yuN6w.js";import"./createIcon-CuvqBQrk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./objectWithoutProperties-D1XObzAp.js";import"./genStyleUtils-0FiciY4a.js";import"./Keyframes-DTt6P7nv.js";const z=p.div`
  position: relative;
  width: 100%;
`,B=p.button`
  position: absolute;
  top: 50%;
  ${({$right:s})=>s?"right: -20px;":"left: -20px;"}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({disabled:s})=>s?"grayscale(1) brightness(2)":"none"};
`,O=p.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`,Y=p.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:s})=>s?"#FF0032":"transparent"};
  border: 2px solid #ff0032;
`,$=({items:s,slidesToShow:n=3,slidesToScroll:k=1,infinite:c=!1,arrowColor:D="#FF0032",showDots:F=!1,customPrevArrow:y,customNextArrow:f,customDots:x,ariaLabel:I="Карусель с контентом",arrowRightStyle:N,arrowLeftStyle:A,beforeChange:t,afterChange:u,style:P})=>{const o=R.useRef(null),[a,v]=R.useState(0),m=s.length,_=m-n,V=!c&&a===0,b=!c&&a>=_,w=e=>{var r;t==null||t(),(r=o.current)==null||r.goTo(e),v(e)},S=e=>{const r=e==="left"?V:b;return i.jsx(B,{onClick:()=>{var l,T;t==null||t(),e==="left"?(l=o.current)==null||l.prev():(T=o.current)==null||T.next()},$right:e==="right",disabled:r,"aria-label":`Прокрутить ${e==="left"?"влево":"вправо"}`,children:i.jsx(L,{direction:e,color:D})})},E=e=>{var r,l;e.key==="ArrowLeft"&&(t==null||t(),(r=o.current)==null||r.prev()),e.key==="ArrowRight"&&(t==null||t(),(l=o.current)==null||l.next())};return i.jsxs(z,{role:"region","aria-label":I,"aria-roledescription":"carousel",tabIndex:0,onKeyDown:E,children:[y?i.jsx("div",{onClick:()=>{var e;t==null||t(),(e=o.current)==null||e.prev()},style:{...A},children:y}):S("left"),i.jsx(K,{style:{padding:"8px 32px",...P},ref:o,dots:!1,infinite:c,slidesToShow:n,slidesToScroll:k,beforeChange:(e,r)=>{t==null||t(),v(r)},afterChange:e=>u==null?void 0:u(e),"aria-live":"polite",children:s.map((e,r)=>i.jsx("div",{style:{padding:"0 8px"},role:"group","aria-roledescription":"slide","aria-label":`Слайд ${r+1} из ${m}`,"aria-current":r===a?"true":void 0,children:e},r))}),f?i.jsx("div",{onClick:()=>{var e;t==null||t(),(e=o.current)==null||e.next()},style:{...N},children:f}):S("right"),F&&(x?x(a,w):i.jsx(O,{role:"tablist","aria-label":"Индикаторы слайдов",children:s.map((e,r)=>i.jsx(Y,{$active:r===a,onClick:()=>w(r),role:"tab","aria-selected":r===a,"aria-label":`Перейти к слайду ${r+1} из ${m}`},r))}))]})};$.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},slidesToShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},infinite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},arrowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FF0032"',computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},customPrevArrow:{required:!1,tsType:{name:"ReactNode"},description:"Кастомные стрелки"},customNextArrow:{required:!1,tsType:{name:"ReactNode"},description:""},beforeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},afterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:""},customDots:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  activeIndex: number,
  goTo: (index: number) => void
) => ReactNode`,signature:{arguments:[{type:{name:"number"},name:"activeIndex"},{type:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},name:"goTo"}],return:{name:"ReactNode"}}},description:"Кастомные точки"},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Карусель с контентом"',computed:!1}},arrowRightStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},arrowLeftStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const we={title:"МТС/Carousel",component:$,tags:["autodocs"]},G=p.div`
  width: 160px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,H=Array.from({length:10},(s,n)=>i.jsxs(G,{children:["Элемент ",n+1]},n)),d={args:{items:H,slidesToShow:4,slidesToScroll:1,arrowColor:"#FF0032",infinite:!1}};var g,j,q;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrowColor: "#FF0032",
    infinite: false
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Se=["Default"];export{d as Default,Se as __namedExportsOrder,we as default};
