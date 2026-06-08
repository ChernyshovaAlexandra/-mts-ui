import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{I as ze}from"./index-DIeaDAnU.js";import{T as Pe,D as Ce,P as Ie,a as je}from"./index-BF9Unc5A.js";import{r as y,R as be}from"./index-G8LIXM5I.js";import{D as _e,a as S,C as s,c as w,b as Ve,S as H}from"./Step-CI_klEQQ.js";import{y as v}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as fe}from"./mixins-CTkzXf3m.js";import{D as Le,U as $e}from"./index-CWlbk4Hf.js";import{D as Re}from"./Divider-Hfq20kUk.js";import{C as M}from"./Caption-YytOdcIh.js";import"./index-yBjzXJbu.js";import"./iframe-DiNbOL09.js";import"./index-DoeU9KPV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B6ujFmsw.js";import"./index-B3ijS-tw.js";import"./index-DrFu-skq.js";import"./createIcon-CRC-JE94.js";/* empty css              */import"./Text-2zki5lTF.js";import"./style-afSt-2-G.js";const O=5,He=e=>e==="done"||e==="success"||e==="disabled-done",Fe=e=>{const i=e.findIndex(n=>n.status==="active");if(i>=0)return i;const t=e.findIndex(n=>!He(n.status));return t>=0?t:Math.max(e.length-1,0)},Oe=(e,i,t)=>{if(e<=0)return[];let n=0,o=e-1,l=q(n,o,e);if(!t||W(l)>t)return[{type:"step",index:0}];for(;;){const d=n+1,c=e-o,u=d<=c?["left","right"]:["right","left"];let p=!1;for(const f of u){const g=f==="left"?n+1:n,h=f==="right"?o-1:o;if(g>=h)continue;const x=q(g,h,e);if(W(x)<=t){n=g,o=h,l=x,p=!0;break}}if(!p)return l}},q=(e,i,t)=>{const n=[];for(let o=0;o<=e;o+=1)n.push({type:"step",index:o});e+1<i&&n.push({type:"ellipsis",key:`${e}-${i}`});for(let o=Math.max(i,e+1);o<t;o+=1)n.push({type:"step",index:o});return n},qe=(e,i,t,n)=>i!==t||n?e.status:e.status===void 0||e.status==="default"||e.status==="disabled"?"active":e.status,We=(e,i,t)=>{const n=Math.max(0,i??t??_e);return{min:Math.min(Math.max(0,e??S),n),max:n}},Ae=(e,i,t)=>{if(e<=0)return 0;const n=e*s[i],o=Math.max(e-1,0)*(t+w*2);return n+o},W=e=>{const i=e.reduce((n,o)=>n+s.s,0),t=Math.max(e.length-1,0)*(S+w*2);return i+t},Ne=()=>{const e=y.useRef(null),[i,t]=y.useState(void 0);return y.useEffect(()=>{const n=e.current;if(!n)return;const o=()=>{t(n.getBoundingClientRect().width)};if(o(),typeof ResizeObserver>"u")return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)};const l=new ResizeObserver(o);return l.observe(n),()=>{l.disconnect()}},[]),[e,i]},ke=v.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${fe};
`,Be=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`,Ue=v.div`
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
`,Xe=v.div`
  display: ${({$isHidden:e})=>e?"none":"flex"};
  align-items: flex-start;
  width: 100%;
  min-width: 0;
`,Ge=v.div`
  display: ${({$isVisible:e})=>e?"flex":"none"};
  align-items: center;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  ${fe};
`,Ze=v.div`
  height: ${s.s}px;
  min-width: ${S+w*2}px;
  flex: 1 1 ${S+w*2}px;
  box-sizing: border-box;
  padding: 0 ${w}px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    min-width: ${S}px;
    height: 1px;
    background: ${Le};
  }
`,Je=v.span`
  width: ${s.s}px;
  min-width: ${s.s}px;
  max-width: ${s.s}px;
  height: ${s.s}px;
  min-height: ${s.s}px;
  max-height: ${s.s}px;
  flex: 0 0 ${s.s}px;
  box-sizing: border-box;
  border-radius: 50%;
  background: ${Ve};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${$e};

  &::before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: currentColor;
    box-shadow:
      -5px 0 0 currentColor,
      5px 0 0 currentColor;
  }
`,Ke=v.div`
  width: ${s.s}px;
  min-width: ${s.s}px;
  max-width: ${s.s}px;
  height: ${s.s}px;
  min-height: ${s.s}px;
  max-height: ${s.s}px;
  flex: 0 0 ${s.s}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ge=({steps:e,size:i,color:t,dividerLength:n,dividerMinLength:o,dividerMaxLength:l,className:d,style:c})=>{const[u,p]=Ne(),f=y.useMemo(()=>We(o,l,n),[n,l,o]),g=y.useMemo(()=>Ae(e.length,i,f.min),[f.min,i,e.length]),h=e.length>O&&p!==void 0&&g>p,x=y.useMemo(()=>Fe(e),[e]),Ee=y.useMemo(()=>e.some(a=>a.status==="active"),[e]),De=y.useMemo(()=>h?Oe(e.length,x,p):[],[p,x,h,e.length]);return r.jsxs(Ue,{ref:u,className:d,style:c,children:[r.jsx(Xe,{$isHidden:h,children:e.map((a,E)=>r.jsx(H,{variant:a.variant??"number",value:a.value,status:a.status,color:a.color??t,size:i,orientation:"horizontal",withDivider:E<e.length-1,dividerLength:n,dividerMinLength:o,dividerMaxLength:l,label:a.label,description:a.description},E))}),e.length>O&&r.jsx(Ge,{$isVisible:h,role:"group","aria-label":`Шаг ${x+1} из ${e.length}`,children:De.map((a,E)=>r.jsxs(be.Fragment,{children:[E>0&&r.jsx(Ze,{"aria-hidden":"true"}),a.type==="ellipsis"?r.jsx(Je,{"aria-hidden":"true"}):r.jsx(Ke,{"aria-current":a.index===x?"step":void 0,"aria-label":`Шаг ${a.index+1} из ${e.length}`,children:r.jsx(H,{variant:e[a.index].variant??"number",value:e[a.index].value??a.index+1,status:qe(e[a.index],a.index,x,Ee),color:e[a.index].color??t,size:"s",orientation:"horizontal"})})]},a.type==="step"?a.index:a.key))})]})};ge.__docgenInfo={description:"",methods:[],displayName:"HorizontalSteps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},size:{required:!0,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},color:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},dividerLength:{required:!1,tsType:{name:"number"},description:""},dividerMinLength:{required:!1,tsType:{name:"number"},description:""},dividerMaxLength:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Se=({steps:e,size:i,color:t,className:n,style:o})=>{const l=s[i]/2;return r.jsx(ke,{className:n,style:o,children:e.map((d,c)=>{const u=c===e.length-1,p=r.jsx(H,{variant:d.variant??"number",value:d.value,status:d.status,color:d.color??t,size:i,orientation:"vertical",label:d.label,description:d.description});return u?r.jsx(be.Fragment,{children:p},c):r.jsxs(Be,{children:[p,r.jsx(Re,{orientation:"vertical",padding:12,style:{marginLeft:l-.5,flex:"1 0 0",height:i==="m"?48:32}})]},c)})})};Se.__docgenInfo={description:"",methods:[],displayName:"VerticalSteps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},size:{required:!0,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},color:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const m=({steps:e,orientation:i="horizontal",size:t="m",color:n="primary",dividerLength:o,dividerMinLength:l,dividerMaxLength:d,className:c,style:u})=>i==="vertical"?r.jsx(Se,{steps:e,size:t,color:n,className:c,style:u}):r.jsx(ge,{steps:e,size:t,color:n,dividerLength:o,dividerMinLength:l,dividerMaxLength:d,className:c,style:u});m.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},dividerLength:{required:!1,tsType:{name:"number"},description:""},dividerMinLength:{required:!1,tsType:{name:"number"},description:""},dividerMaxLength:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const we={iphone14Pro:{label:"iPhone 14 Pro",width:393,height:852,radius:48},iphone14ProMax:{label:"iPhone 14 Pro Max",width:430,height:932,radius:54}},Qe=Object.keys(we),b="iphone14Pro",Ye={...ze,iphone14Pro:{name:"iPhone 14 Pro",styles:{width:"393px",height:"852px"},type:"mobile"},iphone14ProMax:{name:"iPhone 14 Pro Max",styles:{width:"430px",height:"932px"},type:"mobile"}},wr={title:"МТС/Steps",component:m,tags:["autodocs"],parameters:{viewport:{viewports:Ye,defaultViewport:"responsive"},docs:{page:()=>r.jsxs(r.Fragment,{children:[r.jsx(Pe,{}),r.jsx(Ce,{}),r.jsx(Ie,{}),r.jsx(je,{})]}),description:{component:'\n**Steps** — индикатор прогресса по шагам на основе `Step` и `Divider`.\n\nШаги и разделитель всегда выровнены по центру круга. Паддинг дивайдера — 12px.\n\nВ горизонтальной ориентации при количестве шагов больше 5 компонент измеряет ширину своего контейнера. Если полная строка не помещается даже с минимальной шириной дивайдеров, включается компактный вид: первый/последний шаг, текущий шаг, соседние шаги и скрытые диапазоны через `...`.\n\n### Props\n\n| Prop | Тип | Описание |\n|---|---|---|\n| `steps` | `StepItem[]` | Массив шагов |\n| `orientation` | `"horizontal" \\| "vertical"` | Направление |\n| `size` | `"s" \\| "m"` | Размер кружков |\n| `color` | `"primary" \\| "secondary"` | Цвет по умолчанию |\n| `dividerLength` | `number` | Максимальная ширина дивайдера для обратной совместимости |\n| `dividerMinLength` | `number` | Минимальная ширина линии дивайдера |\n| `dividerMaxLength` | `number` | Максимальная ширина линии дивайдера |\n\n### StepItem\n\n| Поле | Тип | Описание |\n|---|---|---|\n| `variant` | `"icon" \\| "number" \\| "number-badge"` | Вариант круга (по умолчанию `number`) |\n| `value` | `number` | Цифра внутри |\n| `status` | `StepStatus` | Статус шага |\n| `color` | `"primary" \\| "secondary"` | Цвет, перекрывает общий |\n| `label` | `string` | Заголовок |\n| `description` | `string` | Подпись |\n        '}}},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},size:{control:"radio",options:["s","m"]},color:{control:"radio",options:["primary","secondary"]},dividerLength:{control:{type:"number",min:0,max:240}},dividerMinLength:{control:{type:"number",min:0,max:120}},dividerMaxLength:{control:{type:"number",min:0,max:240}},mobileView:{name:"Мобильный вид",description:"Показывает пример внутри имитации экрана iPhone.",control:"boolean",table:{category:"Story controls"}},mobileDevice:{name:"Устройство",description:"Пресет экрана для мобильного вида.",control:{type:"radio",labels:{iphone14Pro:"iPhone 14 Pro",iphone14ProMax:"iPhone 14 Pro Max"}},options:Qe,table:{category:"Story controls"}},steps:{control:!1},style:{control:!1},className:{control:!1}}},Me=({mobileView:e=!1,mobileDevice:i=b,children:t})=>{if(!e)return r.jsx("div",{style:{width:345,minWidth:240,maxWidth:"100%",resize:"horizontal",overflow:"hidden",boxSizing:"border-box"},children:t});const n=we[i];return r.jsx("div",{style:{maxWidth:"100%",overflowX:"auto",padding:"20px 0"},children:r.jsxs("div",{"aria-label":`${n.label}, ${n.width} by ${n.height}`,style:{position:"relative",width:n.width,height:n.height,boxSizing:"border-box",padding:10,borderRadius:n.radius,background:"#1D2023",boxShadow:"0 24px 70px rgba(29, 32, 35, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.12)"},children:[r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:152,width:3,height:74,borderRadius:"3px 0 0 3px",background:"#2C3136"}}),r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",right:0,top:180,width:3,height:96,borderRadius:"0 3px 3px 0",background:"#2C3136"}}),r.jsxs("div",{style:{position:"relative",height:"100%",overflow:"hidden",borderRadius:n.radius-10,background:"#FFFFFF"},children:[r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,left:"50%",top:18,width:126,height:36,transform:"translateX(-50%)",borderRadius:999,background:"#050505"}}),r.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",zIndex:2,left:28,right:28,top:18,height:24,display:"flex",alignItems:"center",justifyContent:"space-between",color:"#1D2023",fontFamily:'"MTS Compact", sans-serif',fontSize:14,fontWeight:500,lineHeight:"20px"},children:[r.jsx("span",{children:"9:41"}),r.jsx("span",{style:{fontSize:12},children:"5G"})]}),r.jsx("div",{style:{height:"100%",overflow:"auto",padding:"76px 16px 34px",boxSizing:"border-box"},children:t}),r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:"50%",bottom:10,width:134,height:5,transform:"translateX(-50%)",borderRadius:999,background:"#1D2023"}})]})]})})},R=({mobileView:e,mobileDevice:i,...t})=>r.jsx(Me,{mobileView:e,mobileDevice:i,children:r.jsx(m,{...t,size:e?t.size:"s"})}),T=[{value:1,status:"done",label:"Личные данные",description:"Имя и контакты"},{value:2,status:"done",label:"Адрес доставки",description:"Куда привезти"},{value:3,status:"active",label:"Оплата",description:"Выберите способ"},{value:4,status:"default",label:"Подтверждение",description:"Проверьте заказ"}],er=[{value:1,status:"done"},{value:2,status:"done"},{value:3,status:"active"},{value:4,status:"default"}],F=Array.from({length:15},(e,i)=>({value:i+1,status:i<7?"done":i===7?"active":"default"})),Te=({mobileView:e,mobileDevice:i})=>r.jsx(Me,{mobileView:e,mobileDevice:i,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:48},children:["m","s"].map(t=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[r.jsxs(M,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:[t," — с текстом"]}),r.jsx(m,{steps:T,orientation:"horizontal",size:t,color:"primary"}),r.jsxs(M,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:[t," — без текста"]}),r.jsx(m,{steps:er,orientation:"horizontal",size:t,color:"primary"})]},t))})}),D={name:"Default",render:R,args:{steps:F,orientation:"horizontal",size:"s",color:"primary",mobileView:!1,mobileDevice:b}},z={name:"Mobile",render:R,args:{steps:T,orientation:"horizontal",size:"m",color:"primary",mobileView:!0,mobileDevice:b},parameters:{layout:"fullscreen",viewport:{defaultViewport:"iphone14Pro"}}},P={name:"Mobile / iPhone 14 Pro Max",render:R,args:{steps:T,orientation:"horizontal",size:"m",color:"primary",mobileView:!0,mobileDevice:"iphone14ProMax"},parameters:{layout:"fullscreen",viewport:{defaultViewport:"iphone14ProMax"}}},C={name:"Mobile / More than 5",render:R,args:{steps:F,orientation:"horizontal",size:"m",color:"primary",mobileView:!0,mobileDevice:b},parameters:{layout:"fullscreen",viewport:{defaultViewport:"iphone14Pro"},docs:{description:{story:"15 шагов в узком контейнере: полный горизонтальный Stepper заменяется на первый/последний шаг, текущий шаг, соседей и `...`."}}}},I={name:"Container adaptive",parameters:{controls:{disable:!0},docs:{description:{story:"Один и тот же набор шагов в контейнерах разной ширины. Compact включается от ширины контейнера, а не от viewport."}}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[{label:"Узкий контейнер",width:260},{label:"Широкий контейнер",width:620}].map(({label:e,width:i})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(M,{variant:"C1-Medium-Comp",as:"span",children:e}),r.jsx("div",{style:{width:i,maxWidth:"100%",padding:16,border:"1px solid #E6E9F0",borderRadius:16},children:r.jsx(m,{steps:F,orientation:"horizontal",size:"s",color:"primary"})})]},e))})},j={name:"Horizontal",args:{mobileView:!1,mobileDevice:b},parameters:{controls:{include:["mobileView","mobileDevice"]},docs:{description:{story:"С текстом и без текста, размеры S и M."}}},render:Te},_={name:"Horizontal / Mobile",args:{mobileView:!0,mobileDevice:b},parameters:{controls:{include:["mobileView","mobileDevice"]},layout:"fullscreen",viewport:{defaultViewport:"iphone14Pro"},docs:{description:{story:"Горизонтальные состояния в мобильной области просмотра."}}},render:Te},V={name:"Vertical",parameters:{controls:{disable:!0},docs:{description:{story:"С текстом и без текста, размеры S и M."}}},render:()=>r.jsx("div",{style:{display:"flex",gap:80},children:["m","s"].map(e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[r.jsx(M,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:e}),r.jsx(m,{steps:T,orientation:"vertical",size:e,color:"primary"})]},e))})},L={name:"Primary / Secondary",parameters:{controls:{disable:!0},docs:{description:{story:"Активный шаг: **Primary** — красный МТС, **Secondary** — тёмный."}}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:["primary","secondary"].map(e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(M,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"capitalize"},children:e}),r.jsx(m,{steps:T,orientation:"horizontal",size:"m",color:e})]},e))})},$={name:"Icon variant",parameters:{controls:{disable:!0},docs:{description:{story:"Шаги с иконками вместо цифр."}}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:r.jsx(m,{orientation:"horizontal",size:"m",steps:[{variant:"icon",status:"done",label:"Готово",description:"Завершён"},{variant:"icon",status:"done",label:"Готово",description:"Завершён"},{variant:"icon",status:"failed",label:"Ошибка",description:"Не удалось"},{variant:"icon",status:"done",label:"Готово",description:"Завершён"}]})})};var A,N,k;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Default",
  render: renderSteps,
  args: {
    steps: STEPS_LONG,
    orientation: "horizontal",
    size: "s",
    color: "primary",
    mobileView: false,
    mobileDevice: DEFAULT_MOBILE_DEVICE
  }
}`,...(k=(N=D.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var B,U,X;z.parameters={...z.parameters,docs:{...(B=z.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Mobile",
  render: renderSteps,
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14Pro"
    }
  }
}`,...(X=(U=z.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,Z,J;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Mobile / iPhone 14 Pro Max",
  render: renderSteps,
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: "iphone14ProMax"
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14ProMax"
    }
  }
}`,...(J=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,Y;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Mobile / More than 5",
  render: renderSteps,
  args: {
    steps: STEPS_LONG,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14Pro"
    },
    docs: {
      description: {
        story: "15 шагов в узком контейнере: полный горизонтальный Stepper заменяется на первый/последний шаг, текущий шаг, соседей и \`...\`."
      }
    }
  }
}`,...(Y=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,re,ne;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Container adaptive",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Один и тот же набор шагов в контейнерах разной ширины. Compact включается от ширины контейнера, а не от viewport."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      {[{
      label: "Узкий контейнер",
      width: 260
    }, {
      label: "Широкий контейнер",
      width: 620
    }].map(({
      label,
      width
    }) => <div key={label} style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
          <Caption variant="C1-Medium-Comp" as="span">{label}</Caption>
          <div style={{
        width,
        maxWidth: "100%",
        padding: 16,
        border: "1px solid #E6E9F0",
        borderRadius: 16
      }}>
            <Steps steps={STEPS_LONG} orientation="horizontal" size="s" color="primary" />
          </div>
        </div>)}
    </div>
}`,...(ne=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,te,oe;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Horizontal",
  args: {
    mobileView: false,
    mobileDevice: DEFAULT_MOBILE_DEVICE
  },
  parameters: {
    controls: {
      include: ["mobileView", "mobileDevice"]
    },
    docs: {
      description: {
        story: "С текстом и без текста, размеры S и M."
      }
    }
  },
  render: renderHorizontalExamples
}`,...(oe=(te=j.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,se,le;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Horizontal / Mobile",
  args: {
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE
  },
  parameters: {
    controls: {
      include: ["mobileView", "mobileDevice"]
    },
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14Pro"
    },
    docs: {
      description: {
        story: "Горизонтальные состояния в мобильной области просмотра."
      }
    }
  },
  render: renderHorizontalExamples
}`,...(le=(se=_.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,pe;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Vertical",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "С текстом и без текста, размеры S и M."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 80
  }}>
      {(["m", "s"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "uppercase"
      }}>{size}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="vertical" size={size} color="primary" />
        </div>)}
    </div>
}`,...(pe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,he;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Primary / Secondary",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Активный шаг: **Primary** — красный МТС, **Secondary** — тёмный."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      {(["primary", "secondary"] as const).map(color => <div key={color} style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "capitalize"
      }}>{color}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="horizontal" size="m" color={color} />
        </div>)}
    </div>
}`,...(he=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var xe,ye,ve;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Icon variant",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Шаги с иконками вместо цифр."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>
      <Steps orientation="horizontal" size="m" steps={[{
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }, {
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }, {
      variant: "icon",
      status: "failed",
      label: "Ошибка",
      description: "Не удалось"
    }, {
      variant: "icon",
      status: "done",
      label: "Готово",
      description: "Завершён"
    }]} />
    </div>
}`,...(ve=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Mr=["Default","Mobile","MobileProMax","MobileMoreThanFive","ContainerAdaptive","Horizontal","HorizontalMobile","Vertical","PrimarySecondary","IconVariant"];export{I as ContainerAdaptive,D as Default,j as Horizontal,_ as HorizontalMobile,$ as IconVariant,z as Mobile,C as MobileMoreThanFive,P as MobileProMax,L as PrimarySecondary,V as Vertical,Mr as __namedExportsOrder,wr as default};
