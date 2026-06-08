import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-G8LIXM5I.js";import{I as j}from"./IconEdit-BJDhI4vU.js";import{p as r,y as o}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as k}from"./mixins-CTkzXf3m.js";import{L as $,Q as _,m as D,o as B,n as R,S as b}from"./index-CWlbk4Hf.js";/* empty css              */const V={s:r`font-size: 12px; line-height: 16px;`,m:r`font-size: 14px; line-height: 20px;`,l:r`font-size: 17px; line-height: 24px;`},N={s:12,m:14,l:16},P={primary:R,secondary:B,ghost:"transparent"},K=o.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: ${({$editing:e})=>e?"text":"pointer"};
  border-radius: ${$};
  padding: 0 2px;
  min-width: 0;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-weight: 400;
  color: ${_};
  ${({$size:e})=>V[e]}

  ${({$editing:e,$bg:a})=>e?r`
          outline: 1px solid ${D};
          border-radius: ${$};
        `:r`
          &:hover {
            background: ${P[a]};
          }
        `}

  ${({$showIcon:e})=>!e&&r`
      .inline-edit-icon {
        opacity: 0;
      }
      &:hover .inline-edit-icon {
        opacity: 1;
      }
    `}

  ${k};
`,M=o.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${b};
`,W=o.span`
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A=o.span`
  color: ${b};
  white-space: nowrap;
`,L=o.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: ${_};
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 40px;
`,Q=({value:e,onChange:a,onSave:p,onCancel:d,placeholder:f="Введите текст",size:y="m",bg:g="primary",showIcon:T=!0,disabled:h=!1,className:q,style:I})=>{const[t,c]=s.useState(!1),[u,l]=s.useState(e),m=s.useRef(null);s.useEffect(()=>{l(e)},[e]),s.useEffect(()=>{var i,w;t&&((i=m.current)==null||i.focus(),(w=m.current)==null||w.select())},[t]);const z=()=>{h||(l(e),c(!0))},x=()=>{c(!1),a==null||a(u),p==null||p(u)},E=()=>{c(!1),l(e),d==null||d()},S=i=>{i.key==="Enter"&&x(),i.key==="Escape"&&E()},v=N[y];return n.jsxs(K,{$size:y,$bg:g,$editing:t,$showIcon:T,className:q,style:I,onClick:t?void 0:z,role:t?void 0:"button","aria-label":t?void 0:`Редактировать: ${e||f}`,children:[!h&&n.jsx(M,{$bg:g,className:"inline-edit-icon",children:n.jsx(j,{size:16,variant:"outline",width:v,height:v})}),t?n.jsx(L,{ref:m,value:u,onChange:i=>l(i.target.value),onBlur:x,onKeyDown:S,"aria-label":"Редактирование текста"}):e?n.jsx(W,{children:e}):n.jsx(A,{children:f})]})};Q.__docgenInfo={description:"",methods:[],displayName:"InlineEdit",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Введите текст"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},bg:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{Q as I};
