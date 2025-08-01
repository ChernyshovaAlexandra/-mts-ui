import React from "react";

export const IconHeart = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      d="M7.95 5C5.21625 5 3 7.15216 3 9.80685C3 14.6137 8.85 18.9836 12 20C15.15 18.9836 21 14.6137 21 9.80685C21 7.15216 18.7837 5 16.05 5C14.376 5 12.8955 5.80712 12 7.04248C11.5436 6.41112 10.9372 5.89586 10.2322 5.54033C9.52721 5.1848 8.74438 4.99946 7.95 5Z"
      fill={props.fill}
      stroke={props.stroke || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconHeart;
