import React from "react";

export const IconTrophyGold = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 10}
    height={props.height || 10.4}
    viewBox="0 0 10 10.4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
<g>
<path d="M9.59961 0.400391V1.59961C9.59961 2.48327 8.88366 3.2002 8 3.2002H2C1.11634 3.2002 0.400391 2.48327 0.400391 1.59961V0.400391H9.59961Z" stroke="#F37F19" strokeWidth="0.8"/>
<path d="M8.2689 2L8.25914 2.74805C8.24045 3.46021 8.19792 4.0757 8.15367 4.67969C8.07352 5.77348 7.68124 6.93126 6.48961 7.11328C6.145 7.16589 5.50162 7.20018 5.00035 7.2002C4.49904 7.2002 3.85483 7.1659 3.51011 7.11328C2.31866 6.93114 1.92619 5.77341 1.84605 4.67969C1.8018 4.07569 1.75927 3.46022 1.74058 2.74805L1.73082 2V0H8.2689V2Z" fill="#F37F19"/>
<path d="M4.99995 7L4.99995 9.8" stroke="#F37F19" strokeWidth="0.8" strokeLinejoin="round"/>
<path d="M7.88457 10H2.11534" stroke="#F37F19" strokeWidth="0.8" strokeLinejoin="round"/>
</g>
  </svg>
);

export default IconTrophyGold;
