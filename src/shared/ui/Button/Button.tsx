import "./button.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "transparent";
  wrap?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    color = "primary",
    wrap = true,
    children,
    className,
    ...otherProps
  } = props;
  return (
    <button
      className={[
        "button",
        `button_${color}`,
        `button_${wrap ? "wrap" : "no-wrap"}`,
        className,
      ].join(" ")}
      {...otherProps}
    >
      {children}
    </button>
  );
};
