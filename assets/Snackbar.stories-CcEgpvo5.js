import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-mIjS73Jk.js";import{g as u}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as x}from"./mixins-DAii6Zu4.js";import{c as f,u as y,E as h,O as g}from"./index-CA_YInif.js";/* empty css              */import{bJ as b,ab as v}from"./IconRestaurant-hU7exjLJ.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import{F as w}from"./index-Cbf5Re1b.js";import{B as _}from"./Button-Cyu4nxtQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-CuvqBQrk.js";import"./genStyleUtils-0FiciY4a.js";import"./objectWithoutProperties-D1XObzAp.js";import"./omit-Duhjc17p.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./Spinner-DQMllT-2.js";const j=u.div`
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
