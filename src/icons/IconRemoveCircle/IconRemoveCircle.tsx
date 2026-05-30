import React from "react";

export const IconRemoveCircle = ({
  width = 24,
  height = 24,
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.04351 3.04351C1.47611 4.6109 1.3538 6.18347 1.10916 9.32861C1.04148 10.1987 1 11.0993 1 12C1 12.9007 1.04148 13.8013 1.10916 14.6714C1.3538 17.8165 1.47611 19.3891 3.04351 20.9565C4.6109 22.5239 6.18347 22.6462 9.32861 22.8908C10.1987 22.9585 11.0994 23 12 23C12.9007 23 13.8013 22.9585 14.6714 22.8908C17.8165 22.6462 19.3891 22.5239 20.9565 20.9565C22.5239 19.3891 22.6462 17.8165 22.8908 14.6714C22.9585 13.8013 23 12.9007 23 12C23 11.0993 22.9585 10.1987 22.8908 9.32861C22.6462 6.18347 22.5239 4.6109 20.9565 3.04351C19.3891 1.47611 17.8165 1.3538 14.6714 1.10916C13.8013 1.04148 12.9007 1 12 1C11.0994 1 10.1987 1.04148 9.32861 1.10916C6.18347 1.3538 4.6109 1.47611 3.04351 3.04351ZM16 10.9985C16.5523 10.9985 17 11.4463 17 11.9985C17 12.5508 16.5523 12.9985 16 12.9985H8C7.44771 12.9985 7 12.5508 7 11.9985C7 11.4463 7.44771 10.9985 8 10.9985H16Z"
      fill="currentColor"
    />
  </svg>
);

export default IconRemoveCircle;
