import{g as o,f as s}from"./styled-components.browser.esm-UUNjPRYl.js";import{v as i}from"./mixins-DAii6Zu4.js";/* empty css              */import{x as e,d as n,y as r,f as l,c as p,v as d}from"./index-CA_YInif.js";const t={padding:"12px 16px",borderRadius:"16px",fontSize:"16px",lineHeight:"1.5",fontWeight:400},f=s`
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
  ${f}
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
`,v=o.div`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{u as E,_ as I,b as S,$ as W,x as a,v as b,t as f,f as i};
