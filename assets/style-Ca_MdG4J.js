import{d as i,l as s}from"./styled-components.browser.esm-CzyguTxk.js";import{v as o}from"./fonts-C-rNwtaq.js";import{a as e,b as n,g as r,h as l,c as p,d}from"./index-DzNPuTIb.js";const t={padding:"12px 16px",borderRadius:"16px",fontSize:"16px",lineHeight:"1.5",fontWeight:400},c=s`
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
`,h=i.input`
  box-sizing: border-box;
  ${c}
  ${o};
`,x=i.div`
  color: ${e};
  font:
    12px "MTS Compact",
    "Arial",
    sans-serif;
  font-weight: 300;
  ${o};
`,u=i.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,b=i.label`
  color: ${({$invalidInput:a})=>a?e:n};
  font:
    14px "MTS Compact",
    "Arial",
    sans-serif;
  line-height: 20px;
  font-weight: 400;
  ${o};

  a {
    font-size: inherit;
    font-weight: inherit;
  }
`,$=i.div`
  position: relative;
  max-width: 100%;
  width: 500px;
`,_=i.div`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{x as E,$ as I,b as S,u as W,h as a,_ as b,t as f,c as i};
