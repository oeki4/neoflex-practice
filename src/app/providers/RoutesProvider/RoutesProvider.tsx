import type { ReactNode } from "react";

interface RoutesProviderProps {
  children: ReactNode;
}

export const RoutesProvider = (props: RoutesProviderProps) => {
  const { children } = props;
  return children;
};
