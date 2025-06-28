import { HomePage } from "@/pages/home";
import type { RouteProps } from "react-router";
import { LoansPage } from "@/pages/loans";

export enum AppRoutes {
  HOME = "home",
  LOANS = "loans",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOANS]: "/loans",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.LOANS]: {
    path: RoutePath.loans,
    element: <LoansPage />,
  },
};
