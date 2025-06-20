import type { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return children;
};
