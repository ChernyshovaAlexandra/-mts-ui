import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-Dx_1l3Sb.js";import{r as l}from"./index-DoeU9KPV.js";import{y as m}from"./styled-components.browser.esm-y4XIFzD1.js";import{l as u,h as x,E as g}from"./index-B66h-egn.js";import{B as d}from"./Button-DfpABke-.js";import{T as b}from"./Text-BGtrDhtg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B6ujFmsw.js";import"./Spinner-5z9YM4jE.js";import"./IconYoutube-CikJe2Kh.js";import"./createIcon-DXdYUD03.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";import"./mixins-ib8c4tLP.js";/* empty css              */import"./style-CYyl-vEM.js";const f=m.div`
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
`;const c=p.memo(({text:e="Мы используем куки, чтобы сайт был для вас удобнее",acceptText:i="Хорошо",onAccept:o})=>l.createPortal(r.jsxs(f,{role:"region","aria-label":"Уведомление об использовании cookies",children:[r.jsx(b,{variant:"P4-Regular-Comp",style:{flex:1,color:g},children:e}),r.jsx(d,{btn_type:"button",variant:"primary",width:"auto",onClick:o,children:i})]}),document.body)),K={title:"МТС/CookieBanner",component:c,tags:["autodocs"]},t=e=>{const[i,o]=p.useState(!0);return r.jsx("div",{style:{padding:24,background:"#F2F3F7",minHeight:200},children:i?r.jsx(c,{...e,onAccept:()=>o(!1)}):r.jsx(d,{btn_type:"button",variant:"secondary",width:"auto",onClick:()=>o(!0),children:"Показать снова"})})};t.args={text:"Мы используем куки, чтобы сайт был для вас удобнее",acceptText:"Хорошо"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,K as default};
