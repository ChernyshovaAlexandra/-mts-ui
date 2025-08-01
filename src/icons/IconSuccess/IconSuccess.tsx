import React from "react";

export const IconSuccess = ({
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
    <g clipPath="url(#clip0_78_3680)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.68597 4.68597C3.3731 5.99884 3.27575 7.30684 3.08105 9.92282C3.03058 10.601 3 11.3005 3 12C3 12.6995 3.03058 13.399 3.08105 14.0772C3.27575 16.6932 3.3731 18.0012 4.68597 19.314C5.99884 20.6269 7.30684 20.7243 9.92282 20.9189C10.601 20.9694 11.3005 21 12 21C12.6995 21 13.399 20.9694 14.0772 20.9189C16.6932 20.7243 18.0012 20.6269 19.314 19.314C20.6269 18.0012 20.7243 16.6932 20.9189 14.0772C20.9694 13.399 21 12.6995 21 12C21 11.3005 20.9694 10.601 20.9189 9.92282C20.7243 7.30684 20.6269 5.99884 19.314 4.68597C18.0012 3.3731 16.6932 3.27575 14.0772 3.08105C13.399 3.03058 12.6995 3 12 3C11.3005 3 10.601 3.03058 9.92282 3.08105C7.30684 3.27575 5.99884 3.3731 4.68597 4.68597ZM16.207 10.2071C16.5975 9.81658 16.5975 9.18342 16.207 8.79289C15.8165 8.40237 15.1833 8.40237 14.7928 8.79289L10.9999 12.5858L9.707 11.2929C9.31648 10.9024 8.68331 10.9024 8.29279 11.2929C7.90226 11.6834 7.90226 12.3166 8.29279 12.7071L10.2928 14.7071C10.6833 15.0976 11.3165 15.0976 11.707 14.7071L16.207 10.2071Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_78_3680">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconSuccess;
