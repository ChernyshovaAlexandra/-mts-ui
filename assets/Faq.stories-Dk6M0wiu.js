import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import{a2 as b}from"./IconYoutube-CikJe2Kh.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";import{y as s}from"./styled-components.browser.esm-y4XIFzD1.js";import{T as g}from"./Text-BGtrDhtg.js";import{v as j}from"./mixins-ib8c4tLP.js";import{h as v,E as x}from"./index-B66h-egn.js";import{t as h}from"./style-CYyl-vEM.js";import{A as S,m as R}from"./index-C5BeFhru.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createIcon-DXdYUD03.js";/* empty css              */const I=s.div`
  background-color: ${v};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 8px;
`,F=s.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${({$isOpened:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  }

  ${j};
`,$=s(g)`
  color: ${x};
  ${({variant:e})=>e&&h[e]};
  flex: 1;
  font-size: 20px;
`,_=s(g)`
  padding: 16px 24px;
  color: ${x};
  ${({variant:e})=>e&&h[e]};
`,p=i.memo(({items:e,style:f})=>{const[w,q]=i.useState(new Set),y=i.useCallback(a=>{q(o=>{const r=new Set(o);return r.has(a)?r.delete(a):r.add(a),r})},[]);return t.jsx("section",{style:f,children:e.map((a,o)=>{const r=w.has(o),m=`faq-answer-${o}`,d=`faq-question-${o}`;return t.jsxs(I,{children:[t.jsxs(F,{type:"button",onClick:()=>y(o),"aria-expanded":r,"aria-controls":m,id:d,$isOpened:r,children:[t.jsx($,{as:"span",variant:"P4-Medium-Comp",children:a.question}),t.jsx(b,{"aria-hidden":!0})]}),t.jsx(S,{initial:!1,children:r&&t.jsx(R.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},style:{overflow:"hidden"},children:t.jsx(_,{id:m,"aria-labelledby":d,role:"region",variant:"P3-Regular-Comp",children:a.answer})})})]},o)})})});p.__docgenInfo={description:"",methods:[],displayName:"Faq",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  question: string;
  answer: string | React.ReactNode;
}`,signature:{properties:[{key:"question",value:{name:"string",required:!0}},{key:"answer",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!0}}]}}],raw:"FaqItem[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const re={title:"МТС/Faq",component:p,tags:["autodocs"]},k=e=>t.jsx("div",{style:{background:"white",width:"100%",minHeight:"100vh",padding:"40px",boxSizing:"border-box"},children:t.jsx(p,{...e})}),n=k.bind({});n.args={items:[{question:"На каких тарифах доступна опция?",answer:"Как принято считать, предприниматели в сети интернет являются только методом политического участия и указаны как претенденты на роль ключевых факторов. Банальные, но неопровергимые выводы, а также сделанные на базе интернет-аналитики выводы обнадеживают. Прежде всего, сплочённость команды профессионалов не оставляет шанса для первоочередных требований."},{question:"Когда происходит увеличение пакета?",answer:"Увеличение пакета происходит автоматически при достижении лимита в 80% от текущего объёма. Пользователь получает уведомление в приложении и SMS с датой и параметрами расширения пакета."},{question:"Условия подключения",answer:"Опция доступна только абонентам с положительным балансом, подключенным к тарифам линейки 'Мой МТС'. Подключение бесплатно, дальнейшая тарификация — согласно дополнительному пакету услуг."}]};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
  background: "white",
  width: "100%",
  minHeight: "100vh",
  padding: "40px",
  boxSizing: "border-box"
}}>
    <Faq {...args} />
  </div>`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const oe=["Default"];export{n as Default,oe as __namedExportsOrder,re as default};
