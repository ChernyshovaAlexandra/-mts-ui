import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as q}from"./Avatar-C1lJHa58.js";import{T as l}from"./Text-2zki5lTF.js";import{i as A,G as w,S as N}from"./index-CWlbk4Hf.js";import{y as i}from"./styled-components.browser.esm-BU5pfHrT.js";import{B as n}from"./Button-Rt6WeiJe.js";import"./index-yBjzXJbu.js";import"./mixins-CTkzXf3m.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-afSt-2-G.js";/* empty css              */import"./Spinner-BrDaGlgB.js";import"./IconYoutube-CRYDP8rR.js";import"./createIcon-CRC-JE94.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";const W=i.div`
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
`,D=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 6px 6px;
`,c=({name:r,role:p,avatarSrc:R,avatarAlt:b,avatar:k,children:d,className:T,style:U,..._})=>e.jsxs(W,{className:T,style:U,..._,children:[e.jsxs(P,{children:[k??e.jsx(q,{src:R,alt:b??r}),e.jsxs(F,{children:[e.jsx(l,{variant:"P3-Medium-Comp",as:"span",children:r}),p&&e.jsx(l,{variant:"P4-Regular-Comp",as:"span",style:{color:N},children:p})]})]}),d&&e.jsx(D,{children:d})]});c.__docgenInfo={description:"",methods:[],displayName:"UserMenu",props:{name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["Omit"]};const fe={title:"МТС/UserMenu",component:c,tags:["autodocs"],argTypes:{name:{control:"text"},role:{control:"text"},avatarSrc:{control:"text"},avatarAlt:{control:"text"}},parameters:{backgrounds:{values:[{name:"grey canvas",value:"#F2F3F7"}],default:"grey canvas"}}},m=r=>e.jsx(c,{...r,children:e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Кнопка"})}),a=m.bind({});a.args={name:"Константин Жук",role:"Администратор"};const o=m.bind({});o.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};const s=m.bind({});s.args={name:"Константин Жук"};const t=r=>e.jsxs(c,{...r,children:[e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Профиль"}),e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Настройки"}),e.jsx(n,{variant:"menu-item",onClick:()=>{},children:"Выйти"})]});t.args={name:"Константин Жук",role:"Администратор",avatarSrc:"https://i.pravatar.cc/88?img=12"};t.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <UserMenu {...args}>
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
  </UserMenu>`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const he=["Default","WithPhoto","WithoutRole","WithMultipleActions"];export{a as Default,t as WithMultipleActions,o as WithPhoto,s as WithoutRole,he as __namedExportsOrder,fe as default};
