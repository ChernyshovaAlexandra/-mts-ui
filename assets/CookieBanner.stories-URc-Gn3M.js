import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-mIjS73Jk.js";import{r as h}from"./index-BssJU-4Y.js";import{g as b}from"./styled-components.browser.esm-UUNjPRYl.js";import{w as y,m as _,c as k}from"./index-CA_YInif.js";import{B as x}from"./Button-pyJ4to3r.js";import{T as B}from"./Text-DOS6fvGo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-XdMz6ftz.js";import"./Spinner-Cwbmsakg.js";import"./IconYoutube-D-UZz_iv.js";import"./createIcon-CuvqBQrk.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import"./mixins-DAii6Zu4.js";/* empty css              */import"./style-ZrP7Bi_n.js";const w=b.div`
  position: fixed;
  bottom: ${({$bottomOffset:r})=>r};
  left: 0;
  right: 0;
  z-index: 9999;
  background: ${y};
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 12px 24px calc(12px + env(safe-area-inset-bottom, 0px));
    gap: 24px;
  }
`;b.div`
  width: 100%;
  height: 1px;
  background: ${_};
`;const g=u.memo(({text:r="Мы используем куки, чтобы сайт был для тебя удобнее",acceptText:a="Хорошо",onAccept:i,bottomOffset:n=0,style:f,className:v})=>h.createPortal(e.jsxs(w,{$bottomOffset:typeof n=="number"?`${n}px`:n,style:f,className:v,role:"region","aria-label":"Уведомление об использовании cookies",children:[e.jsx(B,{variant:"P4-Regular-Comp",style:{flex:1,color:k},children:r}),e.jsx(x,{btn_type:"button",variant:"primary",width:"auto",onClick:i,children:a})]}),document.body)),ot={title:"МТС/CookieBanner",component:g,tags:["autodocs"]},t=r=>{const[a,i]=u.useState(!0);return e.jsx("div",{style:{padding:24,background:"#F2F3F7",minHeight:200},children:a?e.jsx(g,{...r,onAccept:()=>i(!1)}):e.jsx(x,{btn_type:"button",variant:"secondary",width:"auto",onClick:()=>i(!0),children:"Показать снова"})})};t.args={text:"Мы используем куки, чтобы сайт был для тебя удобнее",acceptText:"Хорошо"};const o=t.bind({});o.args={text:"Мы используем куки, чтобы сайт был для тебя удобнее",bottomOffset:"calc(72px + env(safe-area-inset-bottom, 0px))"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const it=["Default","AboveTabBar"];export{o as AboveTabBar,t as Default,it as __namedExportsOrder,ot as default};
