import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import{y as u}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as x}from"./mixins-CTkzXf3m.js";import{Q as f,J as y,b as h,r as g}from"./index-CWlbk4Hf.js";/* empty css              */import{bH as b,a8 as v}from"./IconYoutube-CRYDP8rR.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";import{F as w}from"./index-CcLQi1tL.js";import{B as _}from"./Button-Rt6WeiJe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CRC-JE94.js";import"./genStyleUtils-H7UieH10.js";import"./omit-BVcYdL5y.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./Spinner-BrDaGlgB.js";const j=u.div`
  position: fixed;
  bottom: 24px;
  left: auto;
  right: 24px;
  margin: auto;
  width: 100%;
  padding: 24px 32px;
  color: ${f};
  background-color: #fff;
  border-radius: ${y};
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
`,s=n.memo(({message:e,type:i,style:d,autoHideDuration:o=2e3,onClose:a})=>(n.useEffect(()=>{if(!e||!a)return;const l=setTimeout(()=>{a()},o);return()=>clearTimeout(l)},[e,o,a]),e?t.jsx("div",{style:{position:"fixed",bottom:"16px",zIndex:9999,width:"calc(100% - 32px)",...d},role:"status","aria-live":i==="error"?"assertive":"polite","aria-atomic":"true",children:t.jsx(j,{children:t.jsxs(w,{align:"center",gap:"10px",children:[i==="success"?t.jsx(b,{width:"32",height:"32",style:{color:h},"aria-hidden":"true"}):i==="error"?t.jsx(v,{width:"32",height:"32",style:{color:g},"aria-hidden":"true"}):null,t.jsx("div",{style:{flex:1},children:e})]})})}):null));s.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const st={title:"МТС/Snackbar",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error"]}}},S=()=>t.jsx("div",{style:{height:"400px"},children:t.jsx(s,{type:"success",message:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Успех! действие выполнено.",t.jsx(_,{variant:"primary",btn_type:"button",width:"auto",style:{marginLeft:"10px"},children:"Хорошо"})]})})}),r=S.bind({});var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ot=["Default"];export{r as Default,ot as __namedExportsOrder,st as default};
