import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{y as l,p as i}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as p}from"./mixins-CTkzXf3m.js";/* empty css              */import{Q as d}from"./index-CWlbk4Hf.js";const m={"H1-Wide":i`
    font-family: "MTS Wide", sans-serif;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 1.1;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-1.5px);
    }
  `,"H2-Wide":i`
    font-family: "MTS Wide", sans-serif;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 1.1;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-0.5px);
    }
  `,"H3-Wide":i`
    font-family: "MTS Wide", sans-serif;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
    }
  `,"H4-Wide":i`
    font-family: "MTS Wide", sans-serif;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.2;
    }
  `,"H4-Comp":i`
    font-family: "MTS Compact", sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0;
    leading-trim: none;
  `},f=l.h1`
  margin: 0;
  color: ${d};
  ${({$variant:t})=>t&&m[t]};
  ${p};
`,h=({children:t,style:a,variant:e,as:n,...s})=>{const r=n||(e==="H2-Wide"?"h2":e==="H3-Wide"?"h3":e==="H4-Wide"||e==="H4-Comp"?"h4":"h1");return o.jsx(f,{as:r,$variant:e,style:a,...s,children:t})};h.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "H1-Wide"
| "H2-Wide"
| "H3-Wide"
| "H4-Wide"
| "H4-Comp"`,elements:[{name:"literal",value:'"H1-Wide"'},{name:"literal",value:'"H2-Wide"'},{name:"literal",value:'"H3-Wide"'},{name:"literal",value:'"H4-Wide"'},{name:"literal",value:'"H4-Comp"'}]},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{h as H};
