import { Suspense, useCallback } from "react";
import { Route, type RouteProps, Routes } from "react-router";
import { routeConfig } from "@/shared/config/routes/routes.tsx";

export const RoutesProvider = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<>Loading...</>}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
