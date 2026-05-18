import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-Dx_1l3Sb.js";import{y as M}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as T}from"./mixins-ib8c4tLP.js";import{b as W,C as k}from"./index-B66h-egn.js";import{B as d}from"./Button-DfpABke-.js";import{C as m}from"./Caption-C1APNMb6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-5z9YM4jE.js";import"./IconYoutube-CikJe2Kh.js";import"./createIcon-DXdYUD03.js";import"./IconAttention-OHJemvOI.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";/* empty css              */const L={s:4,m:8},$=M.div`
  display: flex;
  gap: 4px;
  width: 100%;
  ${T};
`,w=M.div`
  flex: 1;
  height: ${({$size:e})=>L[e]}px;
  border-radius: 12px;
  background: ${({$completed:e})=>e?W:k};
  transition: background 0.2s ease;
`,s=({total:e,current:r,size:t="s",className:a,style:D})=>n.jsx($,{className:a,style:D,role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":e,"aria-label":`Шаг ${r} из ${e}`,children:Array.from({length:e},(B,c)=>n.jsx(w,{$completed:c<r,$size:t},c))});s.__docgenInfo={description:"",methods:[],displayName:"StepLine",props:{total:{required:!0,tsType:{name:"number"},description:""},current:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ie={title:"МТС/StepLine",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'\n**StepLine** — индикатор прогресса по шагам в виде полос.\n\nИспользуется как упрощённая альтернатива Steps там, где не нужны подписи.\n\n| Prop | Тип | Описание |\n|---|---|---|\n| `total` | `number` | Общее количество шагов |\n| `current` | `number` | Сколько шагов завершено (0 — ни одного, `total` — все) |\n| `size` | `"s" \\| "m"` | Размер: S=4px, M=8px |\n\nКаждый сегмент — отдельная полоса: зелёная (выполнено) или серая (не выполнено).\n        '}}},argTypes:{total:{control:{type:"number",min:1,max:10}},current:{control:{type:"number",min:0,max:10}},size:{control:"radio",options:["s","m"]},style:{control:!1},className:{control:!1}}},i={name:"Default",args:{total:3,current:1,size:"s"},decorators:[e=>n.jsx("div",{style:{maxWidth:400},children:n.jsx(e,{})})]},o={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"**S** — высота 4px, **M** — высота 8px."}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:350},children:["s","m"].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsx(m,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:e.toUpperCase()}),n.jsx(s,{total:3,current:1,size:e})]},e))})},l={name:"Состояния",parameters:{controls:{disable:!0},docs:{description:{story:"Заполнение шагов: первый пройден — все пройдены."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:64,flexWrap:"wrap"},children:[{label:"Первый шаг пройден",current:1},{label:"Все шаги пройдены",current:3}].map(({label:e,current:r})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,minWidth:200,flex:1},children:[n.jsx(m,{variant:"C1-Medium-Comp",as:"span",children:e}),n.jsx(s,{total:3,current:r,size:"s"})]},e))})},p={name:"Интерактивный",parameters:{controls:{disable:!0}},render:()=>{const[e,r]=_.useState(1),t=4;return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[n.jsx(s,{total:t,current:e,size:"s"}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(d,{variant:"secondary",size:"s",onClick:()=>r(a=>Math.max(0,a-1)),disabled:e===0,children:"← Назад"}),n.jsx(d,{variant:"primary",size:"s",onClick:()=>r(a=>Math.min(t,a+1)),disabled:e===t,children:"Далее →"})]}),n.jsxs(m,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:["Шаг ",e," из ",t]})]})}};var u,x,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  args: {
    total: 3,
    current: 1,
    size: "s"
  },
  decorators: [Story => <div style={{
    maxWidth: 400
  }}><Story /></div>]
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Размеры",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "**S** — высота 4px, **M** — высота 8px."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    maxWidth: 350
  }}>
      {(["s", "m"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{
        textTransform: "uppercase"
      }}>
            {size.toUpperCase()}
          </Caption>
          <StepLine total={3} current={1} size={size} />
        </div>)}
    </div>
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var g,h,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Состояния",
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Заполнение шагов: первый пройден — все пройдены."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 64,
    flexWrap: "wrap"
  }}>
      {[{
      label: "Первый шаг пройден",
      current: 1
    }, {
      label: "Все шаги пройдены",
      current: 3
    }].map(({
      label,
      current
    }) => <div key={label} style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minWidth: 200,
      flex: 1
    }}>
          <Caption variant="C1-Medium-Comp" as="span">{label}</Caption>
          <StepLine total={3} current={current} size="s" />
        </div>)}
    </div>
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,j,z;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Интерактивный",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [current, setCurrent] = useState(1);
    const total = 4;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 400
    }}>
        <StepLine total={total} current={current} size="s" />
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <Button variant="secondary" size="s" onClick={() => setCurrent(p => Math.max(0, p - 1))} disabled={current === 0}>
            ← Назад
          </Button>
          <Button variant="primary" size="s" onClick={() => setCurrent(p => Math.min(total, p + 1))} disabled={current === total}>
            Далее →
          </Button>
        </div>
        <Caption variant="C1-Regular-Comp" as="span" style={{
        color: "#626C77"
      }}>
          Шаг {current} из {total}
        </Caption>
      </div>;
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const oe=["Default","Sizes","States","Interactive"];export{i as Default,p as Interactive,o as Sizes,l as States,oe as __namedExportsOrder,ie as default};
