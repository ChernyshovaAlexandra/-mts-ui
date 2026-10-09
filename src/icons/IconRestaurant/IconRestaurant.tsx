import React from "react";

export const IconRestaurant = ({
  "aria-label": ariaLabel,
  role,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    <path d="M8.33333 5C9.25381 5 10 5.74619 10 6.66667V13.3333C10 14.5671 10.6703 15.6444 11.6667 16.2207L11.6667 6.66667C11.6667 5.74619 12.4129 5 13.3333 5C14.2538 5 15 5.74619 15 6.66667L15 16.2207C15.9963 15.6444 16.6667 14.5671 16.6667 13.3333V6.66667C16.6667 5.74619 17.4129 5 18.3333 5C19.2538 5 20 5.74619 20 6.66667V13.3333C20 16.4397 17.8754 19.0499 15 19.79L15 33.3333C15 34.2538 14.2538 35 13.3333 35C12.4129 35 11.6667 34.2538 11.6667 33.3333L11.6667 19.79C8.79129 19.0499 6.66667 16.4397 6.66667 13.3333V6.66667C6.66667 5.74619 7.41286 5 8.33333 5Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 5C25.7589 5 25 5.75891 25 6.6667C25.0002 15.5556 25.001 24.4445 25.001 33.3333C25.001 34.2538 25.7472 35 26.6677 35C27.5881 35 28.3343 34.2538 28.3343 33.3333L28.3343 25H29.2726C32.1719 25 35.001 23.471 35.001 20.2409C35.001 17.617 34.5184 14.014 33.3671 11.0079C32.2537 8.10088 30.1242 5 26.6667 5Z" fill="currentColor" />
  </svg>
);

export default IconRestaurant;
