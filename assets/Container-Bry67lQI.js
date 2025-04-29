import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DatCARk7.js";import{l as e,d as m}from"./styled-components.browser.esm-D7OA6UWf.js";const r=320,_=688,d=880,n=1168,x=1216,l=1264,k=1216,D=1360,c=1600,W=1552,S=1840,t={Mobile:e`
    max-width: ${r}px;
    margin: 0 auto;
  `,Tablet:e`
    max-width: ${_}px;
    margin: 0 auto;
  `,Desktop_XS:e`
    max-width: ${d}px;
    margin: 0 auto;
  `,Desktop_S_Normal:e`
    max-width: ${n}px;
    margin: 0 auto;
  `,Desktop_S_Wide:e`
    max-width: ${x}px;
    margin: 0 auto;
  `,Desktop_M_Normal:e`
    max-width: ${l}px;
    margin: 0 auto;
  `,Desktop_M_Wide:e`
    max-width: ${k}px;
    margin: 0 auto;
  `,Desktop_L_Normal:e`
    max-width: ${D}px;
    margin: 0 auto;
  `,Desktop_L_Wide:e`
    max-width: ${c}px;
    margin: 0 auto;
  `,Desktop_XL_Normal:e`
    max-width: ${W}px;
    margin: 0 auto;
  `,Desktop_XL_Wide:e`
    max-width: ${S}px;
    margin: 0 auto;
  `},w=m.div`
  box-sizing: border-box;
  width: 100%;
  ${t.Mobile}

  @media (min-width: 768px) {
    ${t.Tablet}
  }

  @media (min-width: 960px) {
    ${t.Desktop_XS}
  }

  @media (min-width: 1280px) {
    ${({wide:o})=>o?t.Desktop_S_Wide:t.Desktop_S_Normal}
  }

  /* Desktop M – Normal or Wide */
  @media (min-width: 1440px) {
    ${({wide:o})=>o?t.Desktop_M_Wide:t.Desktop_M_Normal}
  }

  /* Desktop L – Normal or Wide */
  @media (min-width: 1680px) {
    ${({wide:o})=>o?t.Desktop_L_Wide:t.Desktop_L_Normal}
  }

  /* Desktop XL – Normal or Wide */
  @media (min-width: 1920px) {
    ${({wide:o})=>o?t.Desktop_XL_Wide:t.Desktop_XL_Normal}
  }
`,h=p.memo(({children:o,wide:a=!1,style:i})=>s.jsx(w,{wide:a,style:i,children:o}));h.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wide:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{h as C};
