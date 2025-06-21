import { HomePage } from "@/pages/home";
import type { RouteProps } from "react-router";

export enum AppRoutes {
  HOME = "home",
  // CREDITS = 'loans',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  // [AppRoutes.ABOUT]: '/loans',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
};
