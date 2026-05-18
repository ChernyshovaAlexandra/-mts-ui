import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{p as a,y as p}from"./styled-components.browser.esm-y4XIFzD1.js";import{m as u,l as o,e as c,h as m}from"./index-B66h-egn.js";import{v as x}from"./mixins-ib8c4tLP.js";const d="0px 0px 16px rgba(0,0,0,0.08), 0px 4px 16px rgba(0,0,0,0.08)",n="0px 8px 16px rgba(0,0,0,0.08), 0px 4px 24px rgba(0,0,0,0.12)",b="rgba(255, 255, 255, 0.08)",f={default:a`
    background: ${o};
    box-shadow: ${d};
  `,"default-no-shadow":a`
    background: ${o};
  `,grey:a`
    background: ${m};
  `,outline:a`
    background: ${o};
    border: 1px solid ${c};
  `,transparent:a`
    background: ${b};
    backdrop-filter: blur(20px);
  `},v=p.div`
  border-radius: 24px;
  padding: 16px;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({$variant:e})=>f[e]}

  ${({$interactive:e,$variant:t})=>e&&a`
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: ${n};
      }

      &:active {
        transform: translateY(0);
        box-shadow: ${t==="default"?d:"none"};
      }

      &:focus-visible {
        outline: none;
        transform: translateY(-4px);
        box-shadow: ${n};
        border: 1px solid ${u};
      }
    `}

  ${x}
`,g=({variant:e="default",children:t,onClick:s,...l})=>{const r=!!s;return i.jsx(v,{$variant:e,$interactive:r,onClick:s,role:r?"button":void 0,tabIndex:r?0:void 0,...l,children:t})};g.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "default-no-shadow" | "grey" | "outline" | "transparent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"default-no-shadow"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"transparent"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};export{g as C};
