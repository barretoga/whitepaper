import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(async () => await import("~/pages/Home"));

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    children: [],
  },
];
