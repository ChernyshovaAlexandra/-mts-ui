import React from "react";

export const IconSettings = ({
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
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992.008.085.012.171.012.257 0 .086-.004.172-.012.257-.008.379.137.751.43.992l1.003.827c.293.241.402.673.26 1.03l-1.298 2.247c-.232.402-.732.59-1.169.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a7.39 7.39 0 0 1-.22.127c-.331.183-.581.495-.645.87l-.213 1.281c-.09.541-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a7.39 7.39 0 0 1-.22-.127c-.325-.196-.72-.257-1.075-.124l-1.217.456c-.437.1-.937-.088-1.169-.49l-1.298-2.247c-.142-.357-.033-.789.26-1.03l1.003-.827c.293-.241.438-.613.43-.992a6.93 6.93 0 0 1 0-.514c.008-.379-.137-.751-.43-.992l-1.003-.827a1.125 1.125 0 0 1-.26-1.431l1.296-2.247a1.125 1.125 0 0 1 1.37-.49l1.217.456c.355.133.75.072 1.075-.124a7.39 7.39 0 0 1 .22-.127c.332-.184.582-.496.645-.87l.213-1.281Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSettings;
