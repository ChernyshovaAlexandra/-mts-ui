import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as he}from"./index-G8LIXM5I.js";import{y as t}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as ie}from"./mixins-CTkzXf3m.js";import{h as b,G as se,I as fe,l as ce,g as ve,F as Se,n as le,Q as x,J as be,z as ke,S as $,d as k}from"./index-CWlbk4Hf.js";import{B as P}from"./Button-Rt6WeiJe.js";import{T as i}from"./Text-2zki5lTF.js";import{c9 as W}from"./IconYoutube-CRYDP8rR.js";import{d as je,I as j}from"./IconAttention-OHJemvOI.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-BrDaGlgB.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./createIcon-CRC-JE94.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";/* empty css              */import"./style-afSt-2-G.js";const Te=t.div`
  background: ${ce};
  border-radius: ${be};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.08);
`,_e=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,we=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Ce=t.button`
  width: 44px;
  height: 44px;
  background: ${b};
  border: none;
  border-radius: ${se};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${le};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${x};
  }
  ${ie};
`,Ae=t.div`
  background: ${({$color:r})=>r==="white"?ce:r==="inverted"?ve:b};
  border-radius: ${fe};
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({$color:r})=>r==="white"&&"box-shadow: 0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08);"}
`,Be=t.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,$e=t.span`
  width: 20px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Pe=t.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 4px;
  border-radius: ${Se};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background: ${({$inverted:r})=>r?"rgba(255,255,255,0.12)":le};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({$inverted:r})=>r?"#FAFAFA":x};
  }
  ${ie};
`,We=t.span`
  color: #0070e5;
  cursor: ${({onClick:r})=>r?"pointer":"default"};
`,Ie=t.div`
  background: ${b};
  border-radius: ${se};
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`,qe=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #0070e5;
`,T=he.memo(({variant:r="primary",text:h,title:n,onClose:o,actionText:_,onAction:de,cancelText:w,onCancel:pe,color:C="grey",icon:f,linkText:A,onLinkClick:me,...v})=>{if(r==="tertiary")return e.jsxs(Ie,{role:"note",...v,children:[e.jsx(qe,{"aria-hidden":"true",children:e.jsx(je,{width:20,height:20})}),e.jsx(i,{variant:"P4-Regular-Comp",style:{flex:1,minWidth:0,color:x},children:h})]});if(r==="secondary"){const S=C==="inverted",ye=S?"#FAFAFA":x,xe=S?ke:$;return e.jsxs(Ae,{role:"note",$color:C,...v,children:[(f||n||o)&&e.jsxs(Be,{children:[f&&e.jsx($e,{"aria-hidden":"true",children:f}),n&&e.jsx(i,{variant:"P3-Medium-Comp",style:{flex:1,minWidth:0,color:ye},children:n}),o&&e.jsx(Pe,{onClick:o,type:"button","aria-label":"Закрыть",$inverted:S,children:e.jsx(W,{})})]}),e.jsxs(i,{variant:"P4-Regular-Comp",style:{color:xe},children:[h,A&&e.jsxs(We,{onClick:me,children:[" ",A]})]})]})}const ge=!!_,B=!!w,ue=!!o;return e.jsxs(Te,{role:"note",...v,children:[e.jsxs(_e,{children:[n&&e.jsx(i,{variant:"P2-Regular-Comp",style:{fontWeight:500,color:x},children:n}),e.jsx(i,{variant:"P3-Regular-Comp",style:{color:$},children:h})]}),ge&&e.jsxs(we,{children:[B&&e.jsx(P,{variant:"secondary",onClick:pe,style:{flex:1},children:w}),e.jsx(P,{variant:"primary",onClick:de,style:{flex:1},children:_}),!B&&ue&&e.jsx(Ce,{type:"button",onClick:o,"aria-label":"Закрыть",children:e.jsx(W,{})})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionText:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelText:{required:!1,tsType:{name:"string"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:'"white" | "grey" | "inverted"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"inverted"'}]},description:"",defaultValue:{value:'"grey"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const gr={title:"МТС/Banner",component:T,tags:["autodocs"]},Fe=({children:r})=>e.jsx("div",{style:{padding:24,background:"#F2F3F7",maxWidth:400},children:r}),a=r=>e.jsx(Fe,{children:e.jsx(T,{...r})}),s=a.bind({});s.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action")};const c=a.bind({});c.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action"),onClose:()=>console.log("close")};const l=a.bind({});l.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};const d=a.bind({});d.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",cancelText:"Нет",onCancel:()=>console.log("cancel"),actionText:"Да",onAction:()=>console.log("action")};const p=a.bind({});p.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const m=a.bind({});m.args={variant:"secondary",color:"white",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),onClose:()=>console.log("close")};const g=a.bind({});g.args={variant:"secondary",color:"inverted",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const u=a.bind({});u.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",icon:e.jsx(j,{width:20,height:20,style:{color:k}})};const y=a.bind({});y.args={variant:"tertiary",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};var I,q,F;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(F=(q=s.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,L,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,E,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var M,V,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,J,Q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,D,K;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(K=(D=m.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const ur=["PrimaryWithAction","PrimaryWithActionAndClose","PrimaryTextOnly","PrimaryWithTwoActions","SecondaryGrey","SecondaryWhite","SecondaryInverted","SecondaryNoClose","Tertiary"];export{l as PrimaryTextOnly,s as PrimaryWithAction,c as PrimaryWithActionAndClose,d as PrimaryWithTwoActions,p as SecondaryGrey,g as SecondaryInverted,u as SecondaryNoClose,m as SecondaryWhite,y as Tertiary,ur as __namedExportsOrder,gr as default};
