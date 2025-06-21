import { RoutesProvider } from "@/app/providers/RoutesProvider/RoutesProvider.tsx";
import { BrowserRouter } from "react-router";

export const AppProvider = () => {
  return (
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  );
};
