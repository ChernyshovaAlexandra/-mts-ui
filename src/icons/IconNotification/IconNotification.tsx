import React from "react";

export const IconNotification = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      d="M12 3a6 6 0 0 0-6 6v3.586a2 2 0 0 1-.586 1.414L4 15.414A1 1 0 0 0 4.707 17h14.586A1 1 0 0 0 20 15.414L18.586 14A2 2 0 0 1 18 12.586V9a6 6 0 0 0-6-6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M10 20a2 2 0 0 0 4 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default IconNotification;
