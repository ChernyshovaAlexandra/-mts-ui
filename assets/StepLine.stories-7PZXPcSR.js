import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-G8LIXM5I.js";import{y as D}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as T}from"./mixins-CTkzXf3m.js";import{F as W,b as k,D as L}from"./index-CWlbk4Hf.js";import{B as d}from"./Button-Rt6WeiJe.js";import{C as m}from"./Caption-YytOdcIh.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-BrDaGlgB.js";import"./IconYoutube-CRYDP8rR.js";import"./createIcon-CRC-JE94.js";import"./IconAttention-OHJemvOI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";/* empty css              */const $={s:4,m:8},w=D.div`
  display: flex;
  gap: 4px;
  width: 100%;
  ${T};
`,B=D.div`
  flex: 1;
  height: ${({$size:e})=>$[e]}px;
  border-radius: ${W};
  background: ${({$completed:e})=>e?k:L};
  transition: background 0.2s ease;
`,s=({total:e,current:t,size:n="s",className:a,style:M})=>r.jsx(w,{className:a,style:M,role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":e,"aria-label":`Шаг ${t} из ${e}`,children:Array.from({length:e},(E,c)=>r.jsx(B,{$completed:c<t,$size:n},c))});s.__docgenInfo={description:"",methods:[],displayName:"StepLine",props:{total:{required:!0,tsType:{name:"number"},description:""},current:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const de={title:"МТС/StepLine",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'\n**StepLine** — индикатор прогресса по шагам в виде полос.\n\nИспользуется как упрощённая альтернатива Steps там, где не нужны подписи.\n\n| Prop | Тип | Описание |\n|---|---|---|\n| `total` | `number` | Общее количество шагов |\n| `current` | `number` | Сколько шагов завершено (0 — ни одного, `total` — все) |\n| `size` | `"s" \\| "m"` | Размер: S=4px, M=8px |\n\nКаждый сегмент — отдельная полоса: зелёная (выполнено) или серая (не выполнено).\n        '}}},argTypes:{total:{control:{type:"number",min:1,max:10}},current:{control:{type:"number",min:0,max:10}},size:{control:"radio",options:["s","m"]},style:{control:!1},className:{control:!1}}},i={name:"Default",args:{total:3,current:1,size:"s"},decorators:[e=>r.jsx("div",{style:{maxWidth:400},children:r.jsx(e,{})})]},o={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"**S** — высота 4px, **M** — высота 8px."}}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:350},children:["s","m"].map(e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(m,{variant:"C1-Medium-Comp",as:"span",style:{textTransform:"uppercase"},children:e.toUpperCase()}),r.jsx(s,{total:3,current:1,size:e})]},e))})},l={name:"Состояния",parameters:{controls:{disable:!0},docs:{description:{story:"Заполнение шагов: первый пройден — все пройдены."}}},render:()=>r.jsx("div",{style:{display:"flex",gap:64,flexWrap:"wrap"},children:[{label:"Первый шаг пройден",current:1},{label:"Все шаги пройдены",current:3}].map(({label:e,current:t})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,minWidth:200,flex:1},children:[r.jsx(m,{variant:"C1-Medium-Comp",as:"span",children:e}),r.jsx(s,{total:3,current:t,size:"s"})]},e))})},p={name:"Интерактивный",parameters:{controls:{disable:!0}},render:()=>{const[e,t]=_.useState(1),n=4;return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[r.jsx(s,{total:n,current:e,size:"s"}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(d,{variant:"secondary",size:"s",onClick:()=>t(a=>Math.max(0,a-1)),disabled:e===0,children:"← Назад"}),r.jsx(d,{variant:"primary",size:"s",onClick:()=>t(a=>Math.min(n,a+1)),disabled:e===n,children:"Далее →"})]}),r.jsxs(m,{variant:"C1-Regular-Comp",as:"span",style:{color:"#626C77"},children:["Шаг ",e," из ",n]})]})}};var u,x,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const ue=["Default","Sizes","States","Interactive"];export{i as Default,p as Interactive,o as Sizes,l as States,ue as __namedExportsOrder,de as default};
