import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DatCARk7.js";import{d as u}from"./styled-components.browser.esm-D7OA6UWf.js";import{c as f,j as x,k as y}from"./index-Cpl4D9D3.js";/* empty css              */import{a as g}from"./IconInfo-b578O3wf.js";import"./IconDropdown-VAelotV7.js";import"./IconLock-x38zUXh9.js";import{f as h}from"./IconSpinner-BC1lCUAM.js";import"./IconX-Dzjln_tM.js";import{F as b}from"./index-BySMgFWK.js";import{B as v}from"./Button-DkdDPGaX.js";import"./omit-Mdp0r3hm.js";import"./index-JDkdBrmE.js";import"./index-C9zM6nuj.js";import"./Spinner-BG6yZGO4.js";const j=u.div`
  position: fixed;
  bottom: 24px;
  left: auto;
  right: 24px;
  margin: auto;
  width: calc(100% - 48px);
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
`,s=o.memo(({message:t,type:n,style:d,autoHideDuration:i=2e3,onClose:a})=>(o.useEffect(()=>{if(!t||!a)return;const l=setTimeout(()=>{a()},i);return()=>clearTimeout(l)},[t,i,a]),t?e.jsx("div",{style:{width:"100%",position:"relative",...d},children:e.jsx(j,{children:e.jsxs(b,{align:"center",gap:"10px",children:[n==="success"?e.jsx(h,{width:"32",height:"32",style:{color:x}}):n==="error"?e.jsx(g,{width:"32",height:"32",style:{color:y}}):e.jsx(e.Fragment,{}),e.jsx("div",{style:{flex:1},children:t})]})})}):null));s.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y={title:"МТС/Snackbar",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error"]}}},w=()=>e.jsx("div",{style:{height:"400px"},children:e.jsx(s,{type:"success",message:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Успех! действие выполнено.",e.jsx(v,{variant:"primary",btn_type:"button",width:"auto",style:{marginLeft:"10px"},children:"Хорошо"})]})})}),r=w.bind({});var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,Y as default};
