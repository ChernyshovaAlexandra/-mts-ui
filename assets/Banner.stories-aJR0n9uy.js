import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as ye}from"./index-Dx_1l3Sb.js";import{y as t}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as ie}from"./mixins-ib8c4tLP.js";import{h as S,l as se,g as he,n as ce,E as y,y as fe,G as P,d as k}from"./index-B66h-egn.js";import{B as W}from"./Button-DfpABke-.js";import{T as i}from"./Text-BGtrDhtg.js";import{c8 as $}from"./IconYoutube-CikJe2Kh.js";import{d as ve,I as j}from"./IconAttention-OHJemvOI.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-5z9YM4jE.js";import"./IconBookmark-CFJE0vQI.js";import"./createIcon-DXdYUD03.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";/* empty css              */import"./style-CYyl-vEM.js";const be=t.div`
  background: ${se};
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.08);
`,Se=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ke=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,je=t.button`
  width: 44px;
  height: 44px;
  background: ${S};
  border: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${ce};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${y};
  }
  ${ie};
`,Te=t.div`
  background: ${({$color:r})=>r==="white"?se:r==="inverted"?he:S};
  border-radius: 20px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({$color:r})=>r==="white"&&"box-shadow: 0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08);"}
`,we=t.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,Ce=t.span`
  width: 20px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,_e=t.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 4px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background: ${({$inverted:r})=>r?"rgba(255,255,255,0.12)":ce};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({$inverted:r})=>r?"#FAFAFA":y};
  }
  ${ie};
`,Ae=t.span`
  color: #0070e5;
  cursor: ${({onClick:r})=>r?"pointer":"default"};
`,Be=t.div`
  background: ${S};
  border-radius: 16px;
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`,Pe=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #0070e5;
`,T=ye.memo(({variant:r="primary",text:h,title:n,onClose:o,actionText:w,onAction:le,cancelText:C,onCancel:de,color:_="grey",icon:f,linkText:A,onLinkClick:pe,...v})=>{if(r==="tertiary")return e.jsxs(Be,{role:"note",...v,children:[e.jsx(Pe,{"aria-hidden":"true",children:e.jsx(ve,{width:20,height:20})}),e.jsx(i,{variant:"P4-Regular-Comp",style:{flex:1,minWidth:0,color:y},children:h})]});if(r==="secondary"){const b=_==="inverted",ue=b?"#FAFAFA":y,xe=b?fe:P;return e.jsxs(Te,{role:"note",$color:_,...v,children:[(f||n||o)&&e.jsxs(we,{children:[f&&e.jsx(Ce,{"aria-hidden":"true",children:f}),n&&e.jsx(i,{variant:"P3-Medium-Comp",style:{flex:1,minWidth:0,color:ue},children:n}),o&&e.jsx(_e,{onClick:o,type:"button","aria-label":"Закрыть",$inverted:b,children:e.jsx($,{})})]}),e.jsxs(i,{variant:"P4-Regular-Comp",style:{color:xe},children:[h,A&&e.jsxs(Ae,{onClick:pe,children:[" ",A]})]})]})}const me=!!w,B=!!C,ge=!!o;return e.jsxs(be,{role:"note",...v,children:[e.jsxs(Se,{children:[n&&e.jsx(i,{variant:"P2-Regular-Comp",style:{fontWeight:500,color:y},children:n}),e.jsx(i,{variant:"P3-Regular-Comp",style:{color:P},children:h})]}),me&&e.jsxs(ke,{children:[B&&e.jsx(W,{variant:"secondary",onClick:de,style:{flex:1},children:C}),e.jsx(W,{variant:"primary",onClick:le,style:{flex:1},children:w}),!B&&ge&&e.jsx(je,{type:"button",onClick:o,"aria-label":"Закрыть",children:e.jsx($,{})})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionText:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelText:{required:!1,tsType:{name:"string"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:'"white" | "grey" | "inverted"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"inverted"'}]},description:"",defaultValue:{value:'"grey"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const nr={title:"МТС/Banner",component:T,tags:["autodocs"]},We=({children:r})=>e.jsx("div",{style:{padding:24,background:"#F2F3F7",maxWidth:400},children:r}),a=r=>e.jsx(We,{children:e.jsx(T,{...r})}),s=a.bind({});s.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action")};const c=a.bind({});c.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action"),onClose:()=>console.log("close")};const l=a.bind({});l.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};const d=a.bind({});d.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",cancelText:"Нет",onCancel:()=>console.log("cancel"),actionText:"Да",onAction:()=>console.log("action")};const p=a.bind({});p.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const m=a.bind({});m.args={variant:"secondary",color:"white",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),onClose:()=>console.log("close")};const g=a.bind({});g.args={variant:"secondary",color:"inverted",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const u=a.bind({});u.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",icon:e.jsx(j,{width:20,height:20,style:{color:k}})};const x=a.bind({});x.args={variant:"tertiary",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};var q,I,F;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(F=(I=s.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var R,L,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var E,O,G;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var M,V,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var X,z,D;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(oe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const or=["PrimaryWithAction","PrimaryWithActionAndClose","PrimaryTextOnly","PrimaryWithTwoActions","SecondaryGrey","SecondaryWhite","SecondaryInverted","SecondaryNoClose","Tertiary"];export{l as PrimaryTextOnly,s as PrimaryWithAction,c as PrimaryWithActionAndClose,d as PrimaryWithTwoActions,p as SecondaryGrey,g as SecondaryInverted,u as SecondaryNoClose,m as SecondaryWhite,x as Tertiary,or as __namedExportsOrder,nr as default};
