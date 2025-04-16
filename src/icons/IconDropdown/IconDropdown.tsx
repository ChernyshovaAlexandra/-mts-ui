import React from "react";

const IconDropdown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 26 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M9.01246 13C8.11226 13 7.66144 14.0766 8.29798 14.7062L11.4273 17.8016C13.5829 19.9339 14.6607 21 16 21C17.3393 21 18.4171 19.9339 20.5727 17.8016L23.702 14.7062C24.3386 14.0766 23.8877 13 22.9875 13C22.7196 13 22.4625 13.1053 22.2731 13.2927L19.1437 16.3882C18.0255 17.4942 17.3276 18.1786 16.7544 18.6112C16.2371 19.0016 16.0565 19.0012 16.0028 19.001L16 19.001L15.9973 19.001C15.9435 19.0012 15.7629 19.0016 15.2456 18.6112C14.6724 18.1786 13.9745 17.4942 12.8563 16.3882L9.72695 13.2927C9.53745 13.1053 9.28044 13 9.01246 13Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);

export default IconDropdown;
