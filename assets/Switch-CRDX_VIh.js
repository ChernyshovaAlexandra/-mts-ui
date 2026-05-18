import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{S as b}from"./Spinner-5z9YM4jE.js";import{e as g}from"./IconAttention-OHJemvOI.js";import{p as f,y as l}from"./styled-components.browser.esm-y4XIFzD1.js";import{b as y}from"./index-B66h-egn.js";import{v as $}from"./mixins-ib8c4tLP.js";const i={s:28,m:42,l:56},v={s:16,m:24,l:32},a={s:12,m:18,l:24},w={s:16,m:24,l:32},p={s:2,m:3,l:4},S="rgba(188, 195, 208, 0.5)",k="0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08)",_="0 0 8px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.08)",j="#007CFF",T=l.div`
  position: relative;
  width: ${({$size:e})=>i[e]}px;
  height: ${({$size:e})=>v[e]}px;
  border-radius: 100px;
  background: ${({$checked:e})=>e?y:S};
  transition: background 0.2s ease;
  cursor: ${({$disabled:e,$loading:t})=>e||t?"not-allowed":"pointer"};
  box-sizing: border-box;
  flex-shrink: 0;

  /* Disabled for s/m: opacity */
  ${({$disabled:e,$size:t})=>e&&t!=="l"&&f`opacity: 0.6;`}

  /* Loading overlay */
  ${({$loading:e})=>e&&f`
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 100px;
        background: rgba(188, 195, 208, 0.4);
      }
    `}

  /* Focus ring */
  &:focus-visible {
    outline: 2px solid ${j};
    outline-offset: 2px;
  }

  /* Press: stretch knob */
  &:active:not([aria-disabled="true"]) {
    > div:first-child {
      width: ${({$size:e,$checked:t})=>{const s=w[e],r=p[e],o=i[e];return t?`${o-s-r}px; left: ${o-s-r}px`:`${s}px`}};
    }
  }

  ${$};
`,N=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>a[e]}px;
  height: ${({$size:e})=>a[e]}px;
  border-radius: 100px;
  background: white;
  box-shadow: ${({$size:e})=>e==="l"?_:k};
  transition: left 0.2s ease, width 0.15s ease;
  z-index: 1;

  left: ${({$checked:e,$size:t})=>{const s=p[t],r=i[t],o=a[t];return e?`${r-o-s}px`:`${s}px`}};

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,O=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9EA3A9;
`,A=l.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>a[e]}px;
  height: ${({$size:e})=>a[e]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  left: ${({$checked:e,$size:t})=>{const s=p[t],r=i[t],o=a[t];return e?`${r-o-s}px`:`${s}px`}};
`,E={s:"0.75rem",m:"1rem",l:"1.25rem"},I=({checked:e=!1,onChange:t,disabled:s=!1,loading:r=!1,size:o="m",className:m,style:x})=>{const d=()=>{s||r||t==null||t(!e)},h=s&&o==="l",u=r;return n.jsxs(T,{role:"switch","aria-checked":e,"aria-disabled":s,tabIndex:s?-1:0,onClick:d,onKeyDown:c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),d())},$checked:e,$disabled:s,$loading:r,$size:o,className:m,style:x,children:[!u&&n.jsx(N,{$checked:e,$size:o,children:h&&n.jsx(O,{children:n.jsx(g,{width:16,height:16})})}),u&&n.jsx(A,{$checked:e,$size:o,children:n.jsx(b,{size:E[o],color:"#ffffff"})})]})};I.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{I as S};
