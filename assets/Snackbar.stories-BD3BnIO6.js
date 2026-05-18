import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{y as u}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as x}from"./mixins-ib8c4tLP.js";import{E as f,b as y,r as h}from"./index-B66h-egn.js";/* empty css              */import{bF as g,a7 as b}from"./IconYoutube-CikJe2Kh.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";import{F as v}from"./index-CM37Qly0.js";import{B as w}from"./Button-DfpABke-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";import"./genStyleUtils-DZ7vnBUQ.js";import"./omit-Z8POZ-D9.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./Spinner-5z9YM4jE.js";const _=u.div`
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
`,s=n.memo(({message:t,type:a,style:d,autoHideDuration:o=2e3,onClose:i})=>(n.useEffect(()=>{if(!t||!i)return;const l=setTimeout(()=>{i()},o);return()=>clearTimeout(l)},[t,o,i]),t?e.jsx("div",{style:{position:"fixed",bottom:"16px",zIndex:9999,width:"calc(100% - 32px)",...d},role:"status","aria-live":a==="error"?"assertive":"polite","aria-atomic":"true",children:e.jsx(_,{children:e.jsxs(v,{align:"center",gap:"10px",children:[a==="success"?e.jsx(g,{width:"32",height:"32",style:{color:y},"aria-hidden":"true"}):a==="error"?e.jsx(b,{width:"32",height:"32",style:{color:h},"aria-hidden":"true"}):null,e.jsx("div",{style:{flex:1},children:t})]})})}):null));s.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Z={title:"МТС/Snackbar",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error"]}}},j=()=>e.jsx("div",{style:{height:"400px"},children:e.jsx(s,{type:"success",message:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Успех! действие выполнено.",e.jsx(w,{variant:"primary",btn_type:"button",width:"auto",style:{marginLeft:"10px"},children:"Хорошо"})]})})}),r=j.bind({});var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ee=["Default"];export{r as Default,ee as __namedExportsOrder,Z as default};
