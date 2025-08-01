import React from "react";

export const IconDropdown = ({
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
    <g clipPath="url(#clip0_1760_4606)">
      <path
        d="M5.01246 9C4.11226 9 3.66144 10.0766 4.29798 10.7062C4.29798 10.7062 4.29797 10.7062 4.29798 10.7062L7.4273 13.8016C9.58289 15.9339 10.6607 17 12 17C13.3393 17 14.4171 15.9339 16.5727 13.8016L19.702 10.7062C20.3386 10.0766 19.8877 9 18.9875 9C18.7196 9 18.4625 9.1053 18.2731 9.29274L15.1437 12.3882C14.0255 13.4942 13.3276 14.1786 12.7544 14.6112C12.2371 15.0016 12.0565 15.0012 12.0028 15.001L12 15.001L11.9973 15.001C11.9435 15.0012 11.7629 15.0016 11.2456 14.6112C10.6724 14.1786 9.97446 13.4942 8.85627 12.3882L5.72695 9.29274C5.72695 9.29274 5.72695 9.29274 5.72695 9.29274C5.53745 9.1053 5.28044 9 5.01246 9Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1760_4606">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconDropdown;
