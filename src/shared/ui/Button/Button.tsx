import "./button.scss";
import type { ReactNode } from "react";

interface ButtonProps {
  color?: "primary";
  wrap?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { color = "primary", wrap = true, children } = props;
  return (
    <button
      className={[
        "button",
        `button_${color}`,
        `button_${wrap ? "wrap" : "no-wrap"}`,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
