import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./index-mIjS73Jk.js";import{g as t}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as ie}from"./mixins-DAii6Zu4.js";import{m as S,g as se,s as fe,w as ce,b as ve,t as be,a as le,c as x,u as Se,l as ke,d as $,H as k}from"./index-CA_YInif.js";import{B as P}from"./Button-Cyu4nxtQ.js";import{T as i}from"./Text-DOS6fvGo.js";import{cc as W}from"./IconRestaurant-hU7exjLJ.js";import{I as je,b as j}from"./IconAttention--HYYox4d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DQMllT-2.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./createIcon-CuvqBQrk.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";/* empty css              */import"./style-ZrP7Bi_n.js";const Te=t.div`
  background: ${ce};
  border-radius: ${Se};
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
  background: ${S};
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
  background: ${({$color:r})=>r==="white"?ce:r==="inverted"?ve:S};
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
  border-radius: ${be};
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
`,qe=t.div`
  background: ${S};
  border-radius: ${se};
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`,Ie=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #0070e5;
`,T=he.memo(({variant:r="primary",text:h,title:n,onClose:o,actionText:_,onAction:de,cancelText:w,onCancel:pe,color:C="grey",icon:f,linkText:A,onLinkClick:me,...v})=>{if(r==="tertiary")return e.jsxs(qe,{role:"note",...v,children:[e.jsx(Ie,{"aria-hidden":"true",children:e.jsx(je,{width:20,height:20})}),e.jsx(i,{variant:"P4-Regular-Comp",style:{flex:1,minWidth:0,color:x},children:h})]});if(r==="secondary"){const b=C==="inverted",ye=b?"#FAFAFA":x,xe=b?ke:$;return e.jsxs(Ae,{role:"note",$color:C,...v,children:[(f||n||o)&&e.jsxs(Be,{children:[f&&e.jsx($e,{"aria-hidden":"true",children:f}),n&&e.jsx(i,{variant:"P3-Medium-Comp",style:{flex:1,minWidth:0,color:ye},children:n}),o&&e.jsx(Pe,{onClick:o,type:"button","aria-label":"Закрыть",$inverted:b,children:e.jsx(W,{})})]}),e.jsxs(i,{variant:"P4-Regular-Comp",style:{color:xe},children:[h,A&&e.jsxs(We,{onClick:me,children:[" ",A]})]})]})}const ge=!!_,B=!!w,ue=!!o;return e.jsxs(Te,{role:"note",...v,children:[e.jsxs(_e,{children:[n&&e.jsx(i,{variant:"P2-Regular-Comp",style:{fontWeight:500,color:x},children:n}),e.jsx(i,{variant:"P3-Regular-Comp",style:{color:$},children:h})]}),ge&&e.jsxs(we,{children:[B&&e.jsx(P,{variant:"secondary",onClick:pe,style:{flex:1},children:w}),e.jsx(P,{variant:"primary",onClick:de,style:{flex:1},children:_}),!B&&ue&&e.jsx(Ce,{type:"button",onClick:o,"aria-label":"Закрыть",children:e.jsx(W,{})})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionText:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelText:{required:!1,tsType:{name:"string"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:'"white" | "grey" | "inverted"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"inverted"'}]},description:"",defaultValue:{value:'"grey"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const mr={title:"МТС/Banner",component:T,tags:["autodocs"]},Fe=({children:r})=>e.jsx("div",{style:{padding:24,background:"#F2F3F7",maxWidth:400},children:r}),a=r=>e.jsx(Fe,{children:e.jsx(T,{...r})}),s=a.bind({});s.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action")};const c=a.bind({});c.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",actionText:"Действие",onAction:()=>console.log("action"),onClose:()=>console.log("close")};const l=a.bind({});l.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};const d=a.bind({});d.args={variant:"primary",title:"Заголовок",text:"Какое-то сообщение. Рекомендуемый размер две-три строки.",cancelText:"Нет",onCancel:()=>console.log("cancel"),actionText:"Да",onAction:()=>console.log("action")};const p=a.bind({});p.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const m=a.bind({});m.args={variant:"secondary",color:"white",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),onClose:()=>console.log("close")};const g=a.bind({});g.args={variant:"secondary",color:"inverted",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",onLinkClick:()=>console.log("link click"),icon:e.jsx(j,{width:20,height:20,style:{color:k}}),onClose:()=>console.log("close")};const u=a.bind({});u.args={variant:"secondary",color:"grey",title:"Заголовок",text:"Какое-то сообщение. Синее слово в конце можно менять и оно не является ссылкой — кликать можно на всю карточку.",linkText:"Подробнее",icon:e.jsx(j,{width:20,height:20,style:{color:k}})};const y=a.bind({});y.args={variant:"tertiary",text:"Какое-то сообщение. Рекомендуемый размер две-три строки."};var q,I,F;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(F=(I=s.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var R,L,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,E,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,M,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var X,z,D;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <Stage>
    <Banner {...args} />
  </Stage>`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const gr=["PrimaryWithAction","PrimaryWithActionAndClose","PrimaryTextOnly","PrimaryWithTwoActions","SecondaryGrey","SecondaryWhite","SecondaryInverted","SecondaryNoClose","Tertiary"];export{l as PrimaryTextOnly,s as PrimaryWithAction,c as PrimaryWithActionAndClose,d as PrimaryWithTwoActions,p as SecondaryGrey,g as SecondaryInverted,u as SecondaryNoClose,m as SecondaryWhite,y as Tertiary,gr as __namedExportsOrder,mr as default};
