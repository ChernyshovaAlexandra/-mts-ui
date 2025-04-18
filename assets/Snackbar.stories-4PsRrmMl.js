import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DatCARk7.js";import{d as m}from"./styled-components.browser.esm-Cp418-ky.js";import{c as d}from"./index-DItf0zJP.js";/* empty css              */import{B as l}from"./Button-BxuodsOd.js";const u=m.div`
  position: fixed;
  bottom: 24px;
  left: auto;
  right: 24px;
  margin: auto;
  width: calc(100% - 48px);
  padding: 24px 32px;
  color: ${d};
  background-color: #fff;
  border-radius: 24px;
  font: 17px "MTS Compact", "Arial", sans-serif;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 12px 20px rgba(0, 0, 0, 0.14);
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
`,r=c.memo(({message:a,type:i,style:p})=>a?e.jsx("div",{style:{width:"100%",position:"relative",...p},children:e.jsx(u,{$type:i,children:a})}):null);r.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},type:{required:!0,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const S={title:"МТС/Snackbar",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error"]}}},x=()=>e.jsx(r,{type:"success",message:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Успех! действие выполнено.",e.jsx(l,{variant:"primary",btn_type:"button",width:"auto",style:{marginLeft:"10px"},children:"Хорошо"})]})}),t=x.bind({});var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Snackbar type="success" message={<div style={{
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
      </div>} />`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,S as default};
