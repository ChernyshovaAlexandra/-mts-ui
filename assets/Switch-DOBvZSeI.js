import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{S as $}from"./Spinner-BrDaGlgB.js";import{e as g}from"./IconAttention-OHJemvOI.js";import{p as m,y as l}from"./styled-components.browser.esm-BU5pfHrT.js";import{O as p,b as y}from"./index-CWlbk4Hf.js";import{v}from"./mixins-CTkzXf3m.js";const i={s:28,m:42,l:56},w={s:16,m:24,l:32},a={s:12,m:18,l:24},S={s:16,m:24,l:32},d={s:2,m:3,l:4},k="rgba(188, 195, 208, 0.5)",_="0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08)",j="0 0 8px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.08)",T="#007CFF",O=l.div`
  position: relative;
  width: ${({$size:e})=>i[e]}px;
  height: ${({$size:e})=>w[e]}px;
  border-radius: ${p};
  background: ${({$checked:e})=>e?y:k};
  transition: background 0.2s ease;
  cursor: ${({$disabled:e,$loading:t})=>e||t?"not-allowed":"pointer"};
  box-sizing: border-box;
  flex-shrink: 0;

  /* Disabled for s/m: opacity */
  ${({$disabled:e,$size:t})=>e&&t!=="l"&&m`opacity: 0.6;`}

  /* Loading overlay */
  ${({$loading:e})=>e&&m`
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${p};
        background: rgba(188, 195, 208, 0.4);
      }
    `}

  /* Focus ring */
  &:focus-visible {
    outline: 2px solid ${T};
    outline-offset: 2px;
  }

  /* Press: stretch knob */
  &:active:not([aria-disabled="true"]) {
    > div:first-child {
      width: ${({$size:e,$checked:t})=>{const s=S[e],r=d[e],o=i[e];return t?`${o-s-r}px; left: ${o-s-r}px`:`${s}px`}};
    }
  }

  ${v};
`,N=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>a[e]}px;
  height: ${({$size:e})=>a[e]}px;
  border-radius: ${p};
  background: white;
  box-shadow: ${({$size:e})=>e==="l"?j:_};
  transition: left 0.2s ease, width 0.15s ease;
  z-index: 1;

  left: ${({$checked:e,$size:t})=>{const s=d[t],r=i[t],o=a[t];return e?`${r-o-s}px`:`${s}px`}};

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,A=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9EA3A9;
`,E=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>a[e]}px;
  height: ${({$size:e})=>a[e]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  left: ${({$checked:e,$size:t})=>{const s=d[t],r=i[t],o=a[t];return e?`${r-o-s}px`:`${s}px`}};
`,I={s:"0.75rem",m:"1rem",l:"1.25rem"},K=({checked:e=!1,onChange:t,disabled:s=!1,loading:r=!1,size:o="m",className:x,style:h})=>{const u=()=>{s||r||t==null||t(!e)},b=s&&o==="l",f=r;return n.jsxs(O,{role:"switch","aria-checked":e,"aria-disabled":s,tabIndex:s?-1:0,onClick:u,onKeyDown:c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),u())},$checked:e,$disabled:s,$loading:r,$size:o,className:x,style:h,children:[!f&&n.jsx(N,{$checked:e,$size:o,children:b&&n.jsx(A,{children:n.jsx(g,{width:16,height:16})})}),f&&n.jsx(E,{$checked:e,$size:o,children:n.jsx($,{size:I[o],color:"#ffffff"})})]})};K.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{K as S};
