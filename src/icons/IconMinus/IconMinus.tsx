import React from "react";

export const IconMinus = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 17 16"
    fill="none"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2003 8C13.2003 8.41421 12.8645 8.75 12.4503 8.75H3.9502C3.53598 8.75 3.2002 8.41421 3.2002 8C3.2002 7.58579 3.53598 7.25 3.9502 7.25H12.4503C12.8645 7.25 13.2003 7.58579 13.2003 8Z"
      fill="currentColor"
    />
  </svg>
);

export default IconMinus;
