import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-G8LIXM5I.js";import{r as l}from"./index-DoeU9KPV.js";import{y as m}from"./styled-components.browser.esm-BU5pfHrT.js";import{l as u,h as x,Q as g}from"./index-CWlbk4Hf.js";import{B as d}from"./Button-Rt6WeiJe.js";import{T as b}from"./Text-2zki5lTF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B6ujFmsw.js";import"./Spinner-BrDaGlgB.js";import"./IconYoutube-CRYDP8rR.js";import"./createIcon-CRC-JE94.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";import"./mixins-CTkzXf3m.js";/* empty css              */import"./style-afSt-2-G.js";const f=m.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: ${u};
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 12px 24px;
    gap: 24px;
  }
`;m.div`
  width: 100%;
  height: 1px;
  background: ${x};
`;const c=p.memo(({text:e="Мы используем куки, чтобы сайт был для вас удобнее",acceptText:i="Хорошо",onAccept:o})=>l.createPortal(r.jsxs(f,{role:"region","aria-label":"Уведомление об использовании cookies",children:[r.jsx(b,{variant:"P4-Regular-Comp",style:{flex:1,color:g},children:e}),r.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:o,children:i})]}),document.body)),X={title:"МТС/CookieBanner",component:c,tags:["autodocs"]},t=e=>{const[i,o]=p.useState(!0);return r.jsx("div",{style:{padding:24,background:"#F2F3F7",minHeight:200},children:i?r.jsx(c,{...e,onAccept:()=>o(!1)}):r.jsx(d,{btn_type:"button",variant:"secondary",width:"auto",onClick:()=>o(!0),children:"Показать снова"})})};t.args={text:"Мы используем куки, чтобы сайт был для вас удобнее",acceptText:"Хорошо"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div style={{
    padding: 24,
    background: "#F2F3F7",
    minHeight: 200
  }}>
      {visible ? <CookieBanner {...args} onAccept={() => setVisible(false)} /> : <Button btn_type="button" variant="secondary" width="auto" onClick={() => setVisible(true)}>
          Показать снова
        </Button>}
    </div>;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Y=["Default"];export{t as Default,Y as __namedExportsOrder,X as default};
