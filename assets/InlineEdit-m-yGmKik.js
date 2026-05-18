import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import{I as S}from"./IconEdit--ReOD0mK.js";import{p as r,y as o}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as j}from"./mixins-ib8c4tLP.js";import{E as $,m as k,o as D,n as B,G as b}from"./index-B66h-egn.js";/* empty css              */const R={s:r`font-size: 12px; line-height: 16px;`,m:r`font-size: 14px; line-height: 20px;`,l:r`font-size: 17px; line-height: 24px;`},V={s:12,m:14,l:16},N={primary:B,secondary:D,ghost:"transparent"},P=o.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: ${({$editing:e})=>e?"text":"pointer"};
  border-radius: 4px;
  padding: 0 2px;
  min-width: 0;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-weight: 400;
  color: ${$};
  ${({$size:e})=>R[e]}

  ${({$editing:e,$bg:a})=>e?r`
          outline: 1px solid ${k};
          border-radius: 4px;
        `:r`
          &:hover {
            background: ${N[a]};
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

  ${j};
`,K=o.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${b};
`,M=o.span`
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W=o.span`
  color: ${b};
  white-space: nowrap;
`,A=o.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: ${$};
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 40px;
`,G=({value:e,onChange:a,onSave:p,onCancel:d,placeholder:f="Введите текст",size:y="m",bg:g="primary",showIcon:_=!0,disabled:h=!1,className:T,style:q})=>{const[t,c]=s.useState(!1),[u,l]=s.useState(e),m=s.useRef(null);s.useEffect(()=>{l(e)},[e]),s.useEffect(()=>{var i,w;t&&((i=m.current)==null||i.focus(),(w=m.current)==null||w.select())},[t]);const E=()=>{h||(l(e),c(!0))},x=()=>{c(!1),a==null||a(u),p==null||p(u)},I=()=>{c(!1),l(e),d==null||d()},z=i=>{i.key==="Enter"&&x(),i.key==="Escape"&&I()},v=V[y];return n.jsxs(P,{$size:y,$bg:g,$editing:t,$showIcon:_,className:T,style:q,onClick:t?void 0:E,role:t?void 0:"button","aria-label":t?void 0:`Редактировать: ${e||f}`,children:[!h&&n.jsx(K,{$bg:g,className:"inline-edit-icon",children:n.jsx(S,{size:16,variant:"outline",width:v,height:v})}),t?n.jsx(A,{ref:m,value:u,onChange:i=>l(i.target.value),onBlur:x,onKeyDown:z,"aria-label":"Редактирование текста"}):e?n.jsx(M,{children:e}):n.jsx(W,{children:f})]})};G.__docgenInfo={description:"",methods:[],displayName:"InlineEdit",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Введите текст"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},bg:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{G as I};
