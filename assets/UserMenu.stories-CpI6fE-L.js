import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as q}from"./Avatar-DyXPwuO4.js";import{T as l}from"./Text-DOS6fvGo.js";import{I as A,g as w,d as N}from"./index-CA_YInif.js";import{g as i}from"./styled-components.browser.esm-UUNjPRYl.js";import{B as n}from"./Button-Cyu4nxtQ.js";import"./mixins-DAii6Zu4.js";import"./index-mIjS73Jk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-ZrP7Bi_n.js";/* empty css              */import"./Spinner-DQMllT-2.js";import"./IconRestaurant-hU7exjLJ.js";import"./createIcon-CuvqBQrk.js";import"./IconAttention--HYYox4d.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";const W=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  padding: 6px;
  background-color: ${A};
  border-radius: ${w};
  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 12px 20px 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;
  box-sizing: border-box;
`,P=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 6px;
`,F=i.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
`,I=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 6px 6px;
`,c=({name:r,role:p,avatarSrc:R,avatarAlt:b,avatar:k,children:d,className:T,style:U,..._})=>e.jsxs(W,{className:T,style:U,..._,children:[e.jsxs(P,{children:[k??e.jsx(q,{src:R,alt:b??r}),e.jsxs(F,{children:[e.jsx(l,{variant:"P3-Medium-Comp",as:"span",children:r}),p&&e.jsx(l,{variant:"P4-Regular-Comp",as:"span",style:{color:N},children:p})]})]}),d&&e.jsx(I,{children:d})]});c.__docgenInfo={description:"",methods:[],displayName:"UserMenu",props:{name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["Omit"]};const ve={title:"МТС/UserMenu",component:c,tags:["autodocs"],argTypes:{name:{control:"text"},role:{control:"text"},avatarSrc:{control:"text"},avatarAlt:{control:"text"}},parameters:{backgrounds:{values:[{name:"grey canvas",value:"#F2F3F7"}],default:"grey canvas"}}},m=r=>e.jsx(c,{...r,children:e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Кнопка"})}),a=m.bind({});a.args={name:"Константин Жук",role:"Администратор"};const o=m.bind({});o.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};const s=m.bind({});s.args={name:"Константин Жук"};const t=r=>e.jsxs(c,{...r,children:[e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Профиль"}),e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Настройки"}),e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Выйти"})]});t.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};t.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,f,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,M,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var j,B,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Профиль
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Настройки
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Выйти
    </Button>
  </UserMenu>`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const fe=["Default","WithPhoto","WithoutRole","WithMultipleActions"];export{a as Default,t as WithMultipleActions,o as WithPhoto,s as WithoutRole,fe as __namedExportsOrder,ve as default};
