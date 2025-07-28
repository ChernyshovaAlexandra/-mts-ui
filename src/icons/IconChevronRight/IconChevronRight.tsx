import type { SVGProps } from "react";

export const IconChevronRight = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path
      d="M9.24609 5.62795C9.24609 4.62506 10.4579 4.12282 11.1666 4.83196L13.8046 7.4716C15.9379 9.60624 17.0046 10.6736 17.0046 11.9999C17.0046 13.3262 15.9379 14.3935 13.8046 16.5281L11.1666 19.1677C10.4579 19.8769 9.24609 19.3746 9.24609 18.3718C9.24609 18.0732 9.36462 17.7869 9.5756 17.5758L12.2136 14.9361C13.3252 13.8238 13.9956 13.1463 14.4158 12.5952C14.6098 12.3408 14.6924 12.1854 14.7279 12.1002C14.7548 12.0358 14.7547 12.013 14.7546 12.0014L14.7546 11.9999L14.7546 11.9983C14.7547 11.9867 14.7548 11.9639 14.7279 11.8995C14.6924 11.8143 14.6098 11.6589 14.4158 11.4045C13.9956 10.8534 13.3253 10.1759 12.2136 9.06356L9.5756 6.42393C9.36462 6.21282 9.24609 5.9265 9.24609 5.62795Z"
      fill="currentColor"
    />
  </svg>
);

export default IconChevronRight;
