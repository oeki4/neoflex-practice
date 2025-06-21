import type { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="6" r="4" />
      <ellipse cx="12" cy="17" rx="7" ry="4" />
    </svg>
  );
};
