import React from "react";

export const IconSpinner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_36_8315"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="16"
      y="4"
      width="6"
      height="9"
    >
      <path
        d="M16.2676 6.45036L18.0988 4.0741C20.4815 5.91027 22.0032 8.79591 22.0005 12.0006H19.0004C19.0026 9.75938 17.9411 7.74006 16.2676 6.45036Z"
        fill="url(#paint0_linear_36_8315)"
      />
    </mask>
    <g mask="url(#mask0_36_8315)">
      <rect x="1" y="1.00061" width="22" height="22" fill="currentColor" />
    </g>
    <mask
      id="mask1_36_8315"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="12"
      y="12"
      width="10"
      height="11"
    >
      <path
        d="M12 19.0004C15.7006 19.0035 18.7946 16.1046 18.9905 12.3666C18.9969 12.244 19.0001 12.122 19.0002 12.0006H22.0003C22.0002 12.174 21.9955 12.3484 21.9864 12.5236C21.7065 17.8636 17.2866 22.005 12 22.0005V19.0004Z"
        fill="url(#paint1_linear_36_8315)"
      />
    </mask>
    <g mask="url(#mask1_36_8315)">
      <rect x="1" y="1.00061" width="22" height="22" fill="currentColor" />
    </g>
    <mask
      id="mask2_36_8315"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="12"
      width="10"
      height="11"
    >
      <path
        d="M11.6339 18.9906C11.7566 18.9971 11.8787 19.0003 12.0002 19.0004V22.0005C11.8266 22.0003 11.6522 21.9957 11.4769 21.9865C6.13705 21.7067 1.99574 17.287 2 12.0006H5.00008C4.99716 15.701 7.89605 18.7947 11.6339 18.9906Z"
        fill="url(#paint2_linear_36_8315)"
      />
    </mask>
    <g mask="url(#mask2_36_8315)">
      <rect x="1" y="1.00061" width="22" height="22" fill="currentColor" />
    </g>
    <mask
      id="mask3_36_8315"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="12"
      height="11"
    >
      <path
        d="M12.3666 5.00984C8.5059 4.80751 5.21217 7.7732 5.00984 11.6339C5.0034 11.7567 5.00017 11.879 5.00007 12.0006H2C2.00014 11.827 2.00475 11.6523 2.01395 11.4769C2.30299 5.96161 7.00833 1.72491 12.5236 2.01395C13.3509 2.05731 13.9864 2.76311 13.943 3.5904C13.8997 4.41769 13.1939 5.0532 12.3666 5.00984Z"
        fill="url(#paint3_linear_36_8315)"
      />
    </mask>
    <g mask="url(#mask3_36_8315)">
      <rect x="1" y="1.00061" width="22" height="22" fill="currentColor" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_36_8315"
        x1="19.0002"
        y1="12.0006"
        x2="16.0002"
        y2="4.00061"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.08" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_36_8315"
        x1="12"
        y1="19.0006"
        x2="19"
        y2="12.0006"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.35" />
        <stop offset="1" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_36_8315"
        x1="5.00018"
        y1="12.0006"
        x2="12.0002"
        y2="19.0006"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.65" />
        <stop offset="1" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_36_8315"
        x1="14.0002"
        y1="5.00064"
        x2="5.00018"
        y2="12.0006"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopOpacity="0.65" />
      </linearGradient>
    </defs>
  </svg>
);

export default IconSpinner;
