import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as q}from"./Avatar-GIzqnXQN.js";import{T as l}from"./Text-BGtrDhtg.js";import{i as A,G as w}from"./index-B66h-egn.js";import{y as i}from"./styled-components.browser.esm-y4XIFzD1.js";import{B as s}from"./Button-DfpABke-.js";import"./index-yBjzXJbu.js";import"./mixins-ib8c4tLP.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-CYyl-vEM.js";/* empty css              */import"./Spinner-5z9YM4jE.js";import"./IconYoutube-CikJe2Kh.js";import"./createIcon-DXdYUD03.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";const N=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  padding: 6px;
  background-color: ${A};
  border-radius: 16px;
  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 12px 20px 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;
  box-sizing: border-box;
`,W=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 6px;
`,P=i.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 6px 6px;
`,c=({name:r,role:m,avatarSrc:R,avatarAlt:b,avatar:k,children:d,className:T,style:U,..._})=>e.jsxs(N,{className:T,style:U,..._,children:[e.jsxs(W,{children:[k??e.jsx(q,{src:R,alt:b??r}),e.jsxs(P,{children:[e.jsx(l,{variant:"P3-Medium-Comp",as:"span",children:r}),m&&e.jsx(l,{variant:"P4-Regular-Comp",as:"span",style:{color:w},children:m})]})]}),d&&e.jsx(F,{children:d})]});c.__docgenInfo={description:"",methods:[],displayName:"UserMenu",props:{name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["Omit"]};const de={title:"МТС/UserMenu",component:c,tags:["autodocs"],argTypes:{name:{control:"text"},role:{control:"text"},avatarSrc:{control:"text"},avatarAlt:{control:"text"}},parameters:{backgrounds:{values:[{name:"grey canvas",value:"#F2F3F7"}],default:"grey canvas"}}},p=r=>e.jsx(c,{...r,children:e.jsx(s,{variant:"menu-item",onClick:()=>{},children:"Кнопка"})}),a=p.bind({});a.args={name:"Константин Жук",role:"Администратор"};const o=p.bind({});o.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};const n=p.bind({});n.args={name:"Константин Жук"};const t=r=>e.jsxs(c,{...r,children:[e.jsx(s,{variant:"menu-item",onClick:()=>{},children:"Профиль"}),e.jsx(s,{variant:"menu-item",onClick:()=>{},children:"Настройки"}),e.jsx(s,{variant:"menu-item",onClick:()=>{},children:"Выйти"})]});t.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};t.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,f,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,M,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Кнопка
    </Button>
  </UserMenu>`,...(S=(M=n.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var j,B,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => <UserMenu {...args}>
    <Button variant="menu-item" onClick={() => {}}>
      Профиль
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Настройки
    </Button>
    <Button variant="menu-item" onClick={() => {}}>
      Выйти
    </Button>
  </UserMenu>`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const le=["Default","WithPhoto","WithoutRole","WithMultipleActions"];export{a as Default,t as WithMultipleActions,o as WithPhoto,n as WithoutRole,le as __namedExportsOrder,de as default};
