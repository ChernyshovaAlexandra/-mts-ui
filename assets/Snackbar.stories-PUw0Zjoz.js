import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CgfFrydU.js";import{d as u}from"./styled-components.browser.esm-CzyguTxk.js";import{v as x}from"./fonts-C-rNwtaq.js";import{c as f,k as y,l as h}from"./index-DzNPuTIb.js";import"./IconAttention--HYYox4d.js";import{o as g,i as b}from"./IconMinus-B3RIS-SV.js";import"./IconDate-7erjMhfW.js";import"./IconTime-WL88UYBd.js";import{F as v}from"./index-ZH2B7Cqv.js";import{B as w}from"./Button-DyV1B2ed.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-DC7KZOMn.js";import"./omit-BiApCgfr.js";import"./index-FwlZ0Bdg.js";import"./index-B2KKL2uI.js";import"./Spinner-B0W7zFVU.js";const _=u.div`
  position: fixed;
  bottom: 24px;
  left: auto;
  right: 24px;
  margin: auto;
  width: 100%;
  padding: 24px 32px;
  color: ${f};
  background-color: #fff;
  border-radius: 24px;
  font:
    17px "MTS Compact",
    "Arial",
    sans-serif;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.12),
    0 12px 20px rgba(0, 0, 0, 0.14);
  z-index: 9999;
  animation: fade-in 0.3s ease-out;
  max-width: 80%;
  ${x};

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media screen and (min-width: 780px) {
    width: calc(100% - 48px);
  }
`,i=o.memo(({message:t,type:a,style:m,autoHideDuration:n=2e3,onClose:s})=>(o.useEffect(()=>{if(!t||!s)return;const l=setTimeout(()=>{s()},n);return()=>clearTimeout(l)},[t,n,s]),t?e.jsx("div",{style:{position:"fixed",bottom:"16px",zIndex:9999,width:"calc(100% - 32px)",...m},role:"status","aria-live":a==="error"?"assertive":"polite","aria-atomic":"true",children:e.jsx(_,{children:e.jsxs(v,{align:"center",gap:"10px",children:[a==="success"?e.jsx(g,{width:"32",height:"32",style:{color:y},"aria-hidden":"true"}):a==="error"?e.jsx(b,{width:"32",height:"32",style:{color:h},"aria-hidden":"true"}):null,e.jsx("div",{style:{flex:1},children:t})]})})}):null));i.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y={title:"МТС/Snackbar",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error"]}}},j=()=>e.jsx("div",{style:{height:"400px"},children:e.jsx(i,{type:"success",message:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Успех! действие выполнено.",e.jsx(w,{variant:"primary",btn_type:"button",width:"auto",style:{marginLeft:"10px"},children:"Хорошо"})]})})}),r=j.bind({});var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={{
  height: "400px"
}}>
    <Snackbar type="success" message={<div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
          Успех! действие выполнено.
          <Button variant="primary" btn_type="button" width="auto" style={{
      marginLeft: "10px"
    }}>
            Хорошо
          </Button>
        </div>} />
  </div>`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,Y as default};
