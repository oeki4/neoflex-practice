import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return (
    <div
      className={["max-w-[1370px] m-auto px-2 md:px-4", className].join(" ")}
    >
      {children}
    </div>
  );
};
