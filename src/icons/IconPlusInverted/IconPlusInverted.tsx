import React from "react";

export const IconPlusInverted = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 25 25"
    fill="none"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      d="M11.5 19.9336C11.5 20.4859 11.9477 20.9336 12.5 20.9336C13.0523 20.9336 13.5 20.4859 13.5 19.9336V13.9336H19.5C20.0523 13.9336 20.5 13.4859 20.5 12.9336C20.5 12.3813 20.0523 11.9336 19.5 11.9336H13.5V5.93359C13.5 5.38131 13.0523 4.93359 12.5 4.93359C11.9477 4.93359 11.5 5.38131 11.5 5.93359L11.5 11.9336H5.5C4.94771 11.9336 4.5 12.3813 4.5 12.9336C4.5 13.4859 4.94771 13.9336 5.5 13.9336H11.5L11.5 19.9336Z"
      fill="currentColor"
    />
  </svg>
);

export default IconPlusInverted;
