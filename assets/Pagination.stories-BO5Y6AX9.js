import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-mIjS73Jk.js";import{g as m}from"./styled-components.browser.esm-UUNjPRYl.js";import{t as B,q as b,c as x,d as R,m as G}from"./index-CA_YInif.js";import{v as H}from"./mixins-DAii6Zu4.js";import{t as L}from"./style-ZrP7Bi_n.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */const J=m.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (min-width: 769px) { gap: 12px; }
`,y=m.div`
  display: ${({$compact:e})=>e?"flex":"none"};
  align-items: center;
  gap: inherit;
  @media (min-width: 769px) {
    display: ${({$compact:e})=>e?"none":"flex"};
  }
`,f=m.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: ${B};
  background: ${({$active:e})=>e?b:"transparent"};
  color: ${x};
  ${L["P3-Medium-Comp"]}
  line-height: 24px;
  cursor: pointer;
  transition: opacity 0.15s, background 0.15s;
  &:hover:not(:disabled) { background: ${b}; }
  &:focus-visible { outline: 2px solid ${x}; outline-offset: 2px; }
  &:disabled { color: ${R}; opacity: 0.6; cursor: default; }
  > span { font-size: 28px; font-weight: 400; line-height: 21px; }
  ${H}
`,K=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: ${x};
  ${L["P3-Medium-Comp"]}
`;function Q(e,r,s){return r<=(s?5:7)?Array.from({length:r},(l,g)=>g+1):s?e<=3?[1,2,3,"ellipsis",r]:e>=r-2?[1,"ellipsis",r-2,r-1,r]:[1,"ellipsis",e,"ellipsis",r]:e<=4?[1,2,3,4,5,"ellipsis",r]:e>=r-3?[1,"ellipsis",r-4,r-3,r-2,r-1,r]:[1,"ellipsis",e-1,e,e+1,"ellipsis",r]}const h=({currentPage:e,totalPages:r,onPageChange:s,disabled:l=!1,"aria-label":g="Пагинация",...O})=>{const n=Number.isFinite(r)?Math.max(0,Math.floor(r)):0;if(n<=1)return null;const t=Number.isFinite(e)?Math.min(n,Math.max(1,Math.floor(e))):1,P=V=>Q(t,n,V).map((i,z)=>i==="ellipsis"?a.jsx(K,{"aria-hidden":"true",children:"…"},`ellipsis-${z}`):a.jsx(f,{type:"button",$active:i===t,"aria-current":i===t?"page":void 0,"aria-label":`Страница ${i}`,disabled:l,onClick:()=>{i!==t&&s(i)},children:i},i));return a.jsxs(J,{...O,"aria-label":g,children:[n>2&&a.jsx(f,{type:"button",disabled:l||t===1,"aria-label":"Предыдущая страница",onClick:()=>s(t-1),children:a.jsx("span",{"aria-hidden":"true",children:"‹"})}),a.jsx(y,{$compact:!0,children:P(!0)}),a.jsx(y,{$compact:!1,children:P(!1)}),n>2&&a.jsx(f,{type:"button",disabled:l||t===n,"aria-label":"Следующая страница",onClick:()=>s(t+1),children:a.jsx("span",{"aria-hidden":"true",children:"›"})})]})};h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"aria-label":{defaultValue:{value:'"Пагинация"',computed:!1},required:!1}},composes:["Omit"]};const se={title:"МТС/Pagination",component:h,tags:["autodocs"],args:{currentPage:1,totalPages:12},render:e=>a.jsx(F,{...e}),decorators:[e=>a.jsx("div",{style:{background:G,padding:24},children:a.jsx(e,{})})]},F=e=>{const[r,s]=A.useState(e.currentPage);return a.jsx(h,{...e,currentPage:r,onPageChange:s})},o=e=>a.jsx(F,{...e}),c={args:{totalPages:2}},d={args:{currentPage:6,totalPages:12}},p={args:{currentPage:12,totalPages:12}},u={args:{currentPage:6,totalPages:12,disabled:!0}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var j,_,$;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"args => <InteractivePagination {...args} />",...($=(_=o.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var v,M,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    totalPages: 2
  }
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var w,S,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentPage: 6,
    totalPages: 12
  }
}`,...(q=(S=d.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var C,T,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    currentPage: 12,
    totalPages: 12
  }
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,N,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    currentPage: 6,
    totalPages: 12,
    disabled: true
  }
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const te=["Default","TwoPages","MiddlePage","LastPage","Disabled"];export{o as Default,u as Disabled,p as LastPage,d as MiddlePage,c as TwoPages,te as __namedExportsOrder,se as default};
