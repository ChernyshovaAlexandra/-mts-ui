import{y as o,p as s}from"./styled-components.browser.esm-y4XIFzD1.js";import{v as i}from"./mixins-ib8c4tLP.js";/* empty css              */import{a as e,G as n,B as r,C as l,E as p,m as d}from"./index-B66h-egn.js";const t={padding:"12px 16px",borderRadius:"16px",fontSize:"16px",lineHeight:"1.5",fontWeight:400},c=s`
  min-width: 0;
  width: 100%;
  padding: ${t.padding};
  border-radius: ${t.borderRadius};
  outline: none !important;
  background-color: ${r};
  border: 1px solid ${l};
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: ${t.fontSize};
  line-height: ${t.lineHeight};
  font-weight: ${t.fontWeight};
  color: ${p};
  text-overflow: ellipsis;
  outline: none;
  box-shadow: none;
  transition: border-color 0.2s ease;
  padding-right: 38px;

  &::placeholder {
    font-family: "MTS Compact", Arial, sans-serif;
    color: ${n};
    font-weight: ${t.fontWeight};
    font-size: ${t.fontSize};
  }

  &:focus {
    border-color: ${d};
  }

  &[aria-invalid="true"] {
    border-color: ${e};
  }
`,x=o.input`
  box-sizing: border-box;
  ${c}
  ${i};
`,u=o.div`
  color: ${e};
  font:
    12px "MTS Compact",
    "Arial",
    sans-serif;
  font-weight: 300;
  ${i};
`,$=o.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,b=o.label`
  color: ${({$invalidInput:a})=>a?e:n};
  font:
    14px "MTS Compact",
    "Arial",
    sans-serif;
  line-height: 20px;
  font-weight: 400;
  ${i};

  a {
    font-size: inherit;
    font-weight: inherit;
  }
`,_=o.div`
  position: relative;
  max-width: 100%;
`,y=o.div`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{u as E,y as I,x as S,$ as W,_ as a,b,t as f,c as i};
