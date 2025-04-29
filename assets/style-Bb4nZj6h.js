import{d as o,l as a}from"./styled-components.browser.esm-D7OA6UWf.js";/* empty css              */import{a as i,b as e,g as s,h as r,c as l,d as p}from"./index-Cpl4D9D3.js";const t={padding:"12px 16px",borderRadius:"16px",fontSize:"16px",lineHeight:"1.5",fontWeight:400},d=a`
  min-width: 0;
  width: 100%;
  padding: ${t.padding};
  border-radius: ${t.borderRadius};
  outline: none !important;
  background-color: ${s};
  border: 1px solid ${r};

  font-family: "MTS Compact", Arial, sans-serif;
  font-size: ${t.fontSize};
  line-height: ${t.lineHeight};
  font-weight: ${t.fontWeight};
  color: ${l};
  text-overflow: ellipsis;
  outline: none;
  box-shadow: none;
  transition: border-color 0.2s ease;
  padding-right: 38px;

  &::placeholder {
    font-family: "MTS Compact", Arial, sans-serif;
    color: ${e};
    font-weight: ${t.fontWeight};
    font-size: ${t.fontSize};
  }

  &:focus {
    border-color: ${p};
  }

  &[aria-invalid="true"] {
    border-color: ${i};
  }
`,h=o.input`
  box-sizing: border-box;
  ${d}
`,m=o.div`
  color: ${i};
  font:
    12px "MTS Compact",
    "Arial",
    sans-serif;
  font-weight: 300;
`,x=o.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,b=o.label`
  color: ${({$invalidInput:n})=>n?i:e};
  font:
    14px "MTS Compact",
    "Arial",
    sans-serif;
  line-height: 20px;
  font-weight: 400;

  a {
    font-size: inherit;
    font-weight: inherit;
  }
`,u=o.div`
  position: relative;
  max-width: 100%;
  width: 500px;
`,$=o.div`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{m as E,u as I,b as S,x as W,h as a,$ as b,t as f};
