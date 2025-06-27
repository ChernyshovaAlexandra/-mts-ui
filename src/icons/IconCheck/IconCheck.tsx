import React from "react";

export const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M20 7L9.70711 17.2929C9.31658 17.6834 8.68342 17.6834 8.29289 17.2929L4 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default IconCheck;
