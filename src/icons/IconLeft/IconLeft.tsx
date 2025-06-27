import React from "react";

export const IconLeft = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
  width={props.width || 25}
  height={props.height || 24}
    viewBox="2 -1 25 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      d="M10 5L5.61326 8.65561C4.77369 9.35526 4.77369 10.6447 5.61326 11.3444L10 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 10L24 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default IconLeft;
