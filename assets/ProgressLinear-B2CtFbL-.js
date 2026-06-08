import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{y as t,p as w,O as T}from"./styled-components.browser.esm-BU5pfHrT.js";import{F as m,D as $,a as L,b as i,B as _,S as j}from"./index-CWlbk4Hf.js";import{v as b}from"./mixins-CTkzXf3m.js";const y={progress:i,paused:"#FAC031",indeterminate:i,success:i,error:L},S={success:"#12B23F",error:"#D8400C"},R={s:"4px",m:"8px",l:"32px"},M=T`
  0%   { transform: translateX(-100%) }
  100% { transform: translateX(250%) }
`,q=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  ${b};
`,I=t.div`
  position: relative;
  height: ${({$size:e})=>R[e]};
  border-radius: ${m};
  background: ${$};
  overflow: hidden;
  width: 100%;
`,O=t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({$progress:e})=>100-e}%;
  border-radius: ${m};
  background: ${({$type:e})=>y[e]};
  transition: ${({$type:e})=>e==="indeterminate"?"none":"right 0.3s ease"};

  ${({$type:e})=>e==="indeterminate"&&w`
      right: auto;
      left: 0;
      width: 40%;
      animation: ${M} 1.4s ease-in-out infinite;
    `}
`,a=t.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({$align:e})=>e==="right"?"right: 8px;":"left: 8px;"}
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${_};
  white-space: nowrap;
  pointer-events: none;
`,p=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({$type:e})=>S[e]};
`,u=t.span`
  flex: 1;
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: inherit;
`,P=t.span`
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${j};
`,V=()=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.68597 4.68597C3.3731 5.99884 3.27575 7.30684 3.08105 9.92282C3.03058 10.601 3 11.3005 3 12C3 12.6995 3.03058 13.399 3.08105 14.0772C3.27575 16.6932 3.3731 18.0012 4.68597 19.314C5.99884 20.6269 7.30684 20.7243 9.92282 20.9189C10.601 20.9694 11.3005 21 12 21C12.6995 21 13.399 20.9694 14.0772 20.9189C16.6932 20.7243 18.0012 20.6269 19.314 19.314C20.6269 18.0012 20.7243 16.6932 20.9189 14.0772C20.9694 13.399 21 12.6995 21 12C21 11.3005 20.9694 10.601 20.9189 9.92282C20.7243 7.30684 20.6269 5.99884 19.314 4.68597C18.0012 3.3731 16.6932 3.27575 14.0772 3.08105C13.399 3.03058 12.6995 3 12 3C11.3005 3 10.601 3.03058 9.92282 3.08105C7.30684 3.27575 5.99884 3.3731 4.68597 4.68597ZM16.207 10.2071C16.5975 9.81658 16.5975 9.18342 16.207 8.79289C15.8165 8.40237 15.1833 8.40237 14.7928 8.79289L10.9999 12.5858L9.707 11.2929C9.31648 10.9024 8.68331 10.9024 8.29279 11.2929C7.90226 11.6834 7.90226 12.3166 8.29279 12.7071L10.2928 14.7071C10.6833 15.0976 11.3165 15.0976 11.707 14.7071L16.207 10.2071Z",fill:"currentColor"})}),k=()=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.68597 4.68743C3.3731 6.00031 3.27575 7.3083 3.08105 9.92429C3.03058 10.6024 3 11.3019 3 12.0015C3 12.701 3.03058 13.4005 3.08105 14.0786C3.27575 16.6946 3.3731 18.0026 4.68597 19.3155C5.99884 20.6284 7.30684 20.7257 9.92282 20.9204C10.601 20.9709 11.3005 21.0015 12 21.0015C12.6995 21.0015 13.399 20.9709 14.0772 20.9204C16.6932 20.7257 18.0012 20.6284 19.314 19.3155C20.6269 18.0026 20.7243 16.6946 20.9189 14.0786C20.9694 13.4005 21 12.701 21 12.0015C21 11.3019 20.9694 10.6024 20.9189 9.92429C20.7243 7.3083 20.6269 6.00031 19.314 4.68743C18.0012 3.37456 16.6932 3.27721 14.0772 3.08252C13.399 3.03205 12.6995 3.00146 12 3.00146C11.3005 3.00146 10.601 3.03205 9.92282 3.08252C7.30684 3.27721 5.99884 3.37456 4.68597 4.68743ZM15.2071 8.79241C15.5976 9.18293 15.5976 9.81609 15.2071 10.2066L13.414 11.9997L15.2071 13.7927C15.5976 14.1833 15.5976 14.8164 15.2071 15.207C14.8166 15.5975 14.1834 15.5975 13.7929 15.207L11.9998 13.4139L10.2071 15.2066C9.81658 15.5971 9.18342 15.5971 8.79289 15.2066C8.40237 14.8161 8.40237 14.1829 8.79289 13.7924L10.5856 11.9997L8.7929 10.207C8.40237 9.81643 8.40237 9.18327 8.7929 8.79274C9.18342 8.40222 9.81658 8.40222 10.2071 8.79274L11.9998 10.5855L13.7929 8.79241C14.1834 8.40188 14.8166 8.40188 15.2071 8.79241Z",fill:"currentColor"})}),z=({type:e="progress",size:n="m",progress:l=0,label:f,pausedText:C="Загрузка приостановлена",successText:o="Завершено",errorText:g="Не удалось загрузить файл",className:h,style:x})=>{const d=e==="success"||e==="error",r=n==="l",v=d||e==="indeterminate"?100:Math.min(100,Math.max(0,l)),c=f??(e==="paused"?C:void 0);return s.jsxs(q,{className:h,style:x,children:[s.jsxs(I,{$size:n,children:[s.jsx(O,{$type:e,$progress:v}),r&&e==="progress"&&s.jsxs(a,{$align:"left",children:[l,"%"]}),r&&e==="success"&&s.jsx(a,{$align:"right",children:o}),r&&e==="error"&&s.jsx(a,{$align:"right",children:"Ошибка"})]}),e==="success"&&!r&&s.jsxs(p,{$type:"success",children:[s.jsx(u,{children:o}),s.jsx(V,{})]}),e==="error"&&s.jsxs(p,{$type:"error",children:[s.jsx(u,{children:g}),s.jsx(k,{})]}),!d&&e!=="indeterminate"&&c&&s.jsx(P,{children:c})]})};z.__docgenInfo={description:"",methods:[],displayName:"ProgressLinear",props:{type:{required:!1,tsType:{name:"union",raw:'"progress" | "paused" | "indeterminate" | "success" | "error"',elements:[{name:"literal",value:'"progress"'},{name:"literal",value:'"paused"'},{name:"literal",value:'"indeterminate"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"progress"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},pausedText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Загрузка приостановлена"',computed:!1}},successText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Завершено"',computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Не удалось загрузить файл"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{z as P};
