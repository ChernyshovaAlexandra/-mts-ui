import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{p as c,y as _}from"./styled-components.browser.esm-BU5pfHrT.js";import{h as v,Q as y,g as ee,x as te,e as se,F as ne,G as oe,M as re}from"./index-CWlbk4Hf.js";import{v as ie}from"./mixins-CTkzXf3m.js";import{t as $}from"./style-afSt-2-G.js";import{I as ae}from"./IconChevronDown-DMxy4cGU.js";import{a as k,I as le,b as ce}from"./IconCross-COM3iMpw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./createIcon-CRC-JE94.js";const de={medium:c`
    border-radius: ${oe};
    padding: 12px 10px;
    gap: 4px;
    ${$["P4-Regular-Comp"]}
    line-height: 1;
  `,small:c`
    border-radius: ${ne};
    padding: 12px 10px;
    gap: 4px;
    ${$["P4-Regular-Comp"]}
    line-height: 1;
  `},pe=_.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;
  box-sizing: border-box;
  user-select: none;

  ${({$size:t})=>de[t]}

  /* Default state */
  background: ${v};
  color: ${y};
  border: 1px solid transparent;

  /* Selected filled */
  ${({$selected:t,$selectedVariant:s})=>t&&s==="filled"&&c`
      background: ${ee};
      color: ${te};
    `}

  /* Selected outline */
  ${({$selected:t,$selectedVariant:s})=>t&&s==="outline"&&c`
      background: ${v};
      color: ${y};
      border: 1px solid ${y};
    `}

  /* Disabled */
  ${({$disabled:t})=>t&&c`
      background: ${se};
      color: ${y};
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  /* Hover (only non-disabled) */
  ${({$disabled:t})=>!t&&c`
      &:hover {
        filter: brightness(0.95);
      }
      &:active {
        transform: scale(0.98);
      }
      &:focus-visible {
        box-shadow: 0 0 0 2px #007cff;
      }
    `}

  ${ie}
`,w=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,z=_.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: inherit;
  flex-shrink: 0;
  line-height: 1;
  border-radius: ${re};
  background: ${({$onDark:t})=>t?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.08)"};

  &:hover {
    background: ${({$onDark:t})=>t?"rgba(255,255,255,0.25)":"rgba(0,0,0,0.14)"};
  }
`,i=({size:t="medium",selected:s=!1,selectedVariant:n="filled",disabled:o=!1,icon:r,menu:S=!1,menuOpen:l=!1,onClose:b,onClick:K,children:X,...Y})=>{const j=s&&n==="filled",Z=()=>!S&&b?e.jsx(z,{type:"button",$onDark:j,onClick:p=>{p.stopPropagation(),b(p)},"aria-label":"Удалить",children:e.jsx(k,{size:16})}):S?s&&b?e.jsx(z,{type:"button",$onDark:j,onClick:p=>{p.stopPropagation(),b(p)},"aria-label":"Сбросить",children:e.jsx(k,{size:16})}):e.jsx(w,{children:l?e.jsx(le,{size:16}):e.jsx(ae,{size:16})}):null;return e.jsxs(pe,{type:"button",$size:t,$selected:s,$selectedVariant:n,$disabled:o,disabled:o,onClick:o?void 0:K,"aria-pressed":s,...Y,children:[r&&e.jsx(w,{children:r}),X,Z()]})},a=({children:t,style:s,...n})=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,...s},...n,children:t});i.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{size:{required:!1,tsType:{name:"union",raw:'"medium" | "small"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedVariant:{required:!1,tsType:{name:"union",raw:'"filled" | "outline"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Leading icon or graphic"},menu:{required:!1,tsType:{name:"boolean"},description:"Shows trailing chevron that flips when open; when selected shows × instead",defaultValue:{value:"false",computed:!1}},menuOpen:{required:!1,tsType:{name:"boolean"},description:"Controls chevron direction when menu=true",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"× handler — for form chip (always shows ×) or menu chip when selected"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};a.__docgenInfo={description:"",methods:[],displayName:"ChipGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const $e={title:"МТС/Chip",component:i,tags:["autodocs"]},u=()=>{const t=["Молоко","Сыр","Кефир","Ряженка","Сметана"],[s,n]=d.useState("Ряженка");return e.jsx(a,{children:t.map(o=>e.jsx(i,{selected:s===o,onClick:()=>n(o===s?null:o),children:o},o))})},m=()=>{const t=["Минибон","Синнабон","Капкейк","Шоколад","Круассан"],[s,n]=d.useState(new Set(["Синнабон","Шоколад"])),o=r=>{n(S=>{const l=new Set(S);return l.has(r)?l.delete(r):l.add(r),l})};return e.jsx(a,{children:t.map(r=>e.jsx(i,{selected:s.has(r),onClick:()=>o(r),children:r},r))})},h=()=>{const[t,s]=d.useState("Музыка");return e.jsx(a,{children:["Музыка","Путешествия","Животные"].map(n=>e.jsx(i,{selected:t===n,icon:e.jsx(ce,{size:16}),onClick:()=>s(n),children:n},n))})},f=()=>{const[t,s]=d.useState(!1),[n,o]=d.useState(!1);return e.jsx(a,{children:e.jsx(i,{menu:!0,menuOpen:t,selected:n,onClick:()=>{n||s(r=>!r)},onClose:()=>{o(!1),s(!1)},children:"Chip"})})},C=()=>{const[t,s]=d.useState(["Option 1","Option 2"]);return e.jsx(a,{children:t.map(n=>e.jsx(i,{selected:!0,onClose:()=>s(o=>o.filter(r=>r!==n)),children:n},n))})},x=()=>e.jsxs(a,{children:[e.jsx(i,{size:"medium",children:"Medium 44"}),e.jsx(i,{size:"small",children:"Small 32"}),e.jsx(i,{size:"medium",selected:!0,children:"Medium Selected"}),e.jsx(i,{size:"small",selected:!0,children:"Small Selected"})]}),g=()=>e.jsxs(a,{children:[e.jsx(i,{children:"Default"}),e.jsx(i,{selected:!0,children:"Selected"}),e.jsx(i,{selected:!0,selectedVariant:"outline",children:"Selected Alt"}),e.jsx(i,{disabled:!0,children:"Disabled"})]});u.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"Multiselect"};h.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};f.__docgenInfo={description:"",methods:[],displayName:"MenuChip"};C.__docgenInfo={description:"",methods:[],displayName:"FormChip"};x.__docgenInfo={description:"",methods:[],displayName:"Sizes"};g.__docgenInfo={description:"",methods:[],displayName:"States"};var I,M,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const options = ["Молоко", "Сыр", "Кефир", "Ряженка", "Сметана"];
  const [selected, setSelected] = useState<string | null>("Ряженка");
  return <ChipGroup>
      {options.map(o => <Chip key={o} selected={selected === o} onClick={() => setSelected(o === selected ? null : o)}>
          {o}
        </Chip>)}
    </ChipGroup>;
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var G,N,T;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const options = ["Минибон", "Синнабон", "Капкейк", "Шоколад", "Круассан"];
  const [selected, setSelected] = useState<Set<string>>(new Set(["Синнабон", "Шоколад"]));
  const toggle = (o: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(o) ? next.delete(o) : next.add(o);
      return next;
    });
  };
  return <ChipGroup>
      {options.map(o => <Chip key={o} selected={selected.has(o)} onClick={() => toggle(o)}>
          {o}
        </Chip>)}
    </ChipGroup>;
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var D,O,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState("Музыка");
  return <ChipGroup>
      {["Музыка", "Путешествия", "Животные"].map(o => <Chip key={o} selected={selected === o} icon={<IconMusic size={16} />} onClick={() => setSelected(o)}>
          {o}
        </Chip>)}
    </ChipGroup>;
}`,...(q=(O=h.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var E,V,H;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  return <ChipGroup>
      <Chip menu menuOpen={open} selected={selected} onClick={() => {
      if (!selected) setOpen(v => !v);
    }} onClose={() => {
      setSelected(false);
      setOpen(false);
    }}>
        Chip
      </Chip>
    </ChipGroup>;
}`,...(H=(V=f.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var L,B,F;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [chips, setChips] = useState(["Option 1", "Option 2"]);
  return <ChipGroup>
      {chips.map(c => <Chip key={c} selected onClose={() => setChips(prev => prev.filter(x => x !== c))}>
          {c}
        </Chip>)}
    </ChipGroup>;
}`,...(F=(B=C.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var P,W,A;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => <ChipGroup>
    <Chip size="medium">Medium 44</Chip>
    <Chip size="small">Small 32</Chip>
    <Chip size="medium" selected>Medium Selected</Chip>
    <Chip size="small" selected>Small Selected</Chip>
  </ChipGroup>`,...(A=(W=x.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var Q,U,J;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <ChipGroup>
    <Chip>Default</Chip>
    <Chip selected>Selected</Chip>
    <Chip selected selectedVariant="outline">Selected Alt</Chip>
    <Chip disabled>Disabled</Chip>
  </ChipGroup>`,...(J=(U=g.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const ke=["Default","Multiselect","WithIcon","MenuChip","FormChip","Sizes","States"];export{u as Default,C as FormChip,f as MenuChip,m as Multiselect,x as Sizes,g as States,h as WithIcon,ke as __namedExportsOrder,$e as default};
