import React from "react";

export const IconPlus = ({
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
    <g clipPath="url(#clip0_110_1353)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.68597 4.68743C3.3731 6.00031 3.27575 7.3083 3.08105 9.92429C3.03058 10.6024 3 11.3019 3 12.0015C3 12.701 3.03058 13.4005 3.08105 14.0786C3.27575 16.6946 3.3731 18.0026 4.68597 19.3155C5.99884 20.6284 7.30684 20.7257 9.92282 20.9204C10.601 20.9709 11.3005 21.0015 12 21.0015C12.6995 21.0015 13.399 20.9709 14.0772 20.9204C16.6932 20.7257 18.0012 20.6284 19.314 19.3155C20.6269 18.0026 20.7243 16.6946 20.9189 14.0786C20.9694 13.4005 21 12.701 21 12.0015C21 11.3019 20.9694 10.6024 20.9189 9.92429C20.7243 7.3083 20.6269 6.00031 19.314 4.68743C18.0012 3.37456 16.6932 3.27721 14.0772 3.08252C13.399 3.03205 12.6995 3.00146 12 3.00146C11.3005 3.00146 10.601 3.03205 9.92282 3.08252C7.30684 3.27721 5.99884 3.37456 4.68597 4.68743ZM12 8C12.5523 8 13 8.44772 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11L11 11V9C11 8.44772 11.4477 8 12 8Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_110_1353">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconPlus;
