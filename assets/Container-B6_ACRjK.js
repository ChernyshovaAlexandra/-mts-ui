import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CgfFrydU.js";import{l as t,d as m}from"./styled-components.browser.esm-CzyguTxk.js";import{v as r}from"./fonts-C-rNwtaq.js";const _=320,d=688,n=880,x=1168,l=1216,c=1264,k=1216,D=1360,W=1600,S=1552,w=1840,e={Mobile:t`
    max-width: ${_}px;
    margin: 0 auto;
  `,Tablet:t`
    max-width: ${d}px;
    margin: 0 auto;
  `,Desktop_XS:t`
    max-width: ${n}px;
    margin: 0 auto;
  `,Desktop_S_Normal:t`
    max-width: ${x}px;
    margin: 0 auto;
  `,Desktop_S_Wide:t`
    max-width: ${l}px;
    margin: 0 auto;
  `,Desktop_M_Normal:t`
    max-width: ${c}px;
    margin: 0 auto;
  `,Desktop_M_Wide:t`
    max-width: ${k}px;
    margin: 0 auto;
  `,Desktop_L_Normal:t`
    max-width: ${D}px;
    margin: 0 auto;
  `,Desktop_L_Wide:t`
    max-width: ${W}px;
    margin: 0 auto;
  `,Desktop_XL_Normal:t`
    max-width: ${S}px;
    margin: 0 auto;
  `,Desktop_XL_Wide:t`
    max-width: ${w}px;
    margin: 0 auto;
  `},h=m.div`
  box-sizing: border-box;
  width: 100%;
  ${e.Mobile}

  @media (min-width: 768px) {
    ${e.Tablet}
  }

  @media (min-width: 960px) {
    ${e.Desktop_XS}
  }

  @media (min-width: 1280px) {
    ${({wide:o})=>o?e.Desktop_S_Wide:e.Desktop_S_Normal}
  }

  /* Desktop M – Normal or Wide */
  @media (min-width: 1440px) {
    ${({wide:o})=>o?e.Desktop_M_Wide:e.Desktop_M_Normal}
  }

  /* Desktop L – Normal or Wide */
  @media (min-width: 1680px) {
    ${({wide:o})=>o?e.Desktop_L_Wide:e.Desktop_L_Normal}
  }

  /* Desktop XL – Normal or Wide */
  @media (min-width: 1920px) {
    ${({wide:o})=>o?e.Desktop_XL_Wide:e.Desktop_XL_Normal}
  }
  max-width: calc(100% - 40px);
  ${r};
`,u=p.memo(({children:o,wide:a=!1,style:i})=>s.jsx(h,{wide:a,style:i,children:o}));u.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wide:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{u as C};
