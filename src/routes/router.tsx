import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
  lazyRouteComponent,
} from "@tanstack/react-router";

import * as Root from "./root.route";
import * as Index from "./index.route";

const rootRoute = new RootRoute({
  component: Root.Component,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index.Component,
});

const expensive = new Route({
  getParentRoute: () => rootRoute,
  path: "/expensive",
  component: lazyRouteComponent(() => import("./expensive.route"), "Component"),
});

const routeTree = rootRoute.addChildren([indexRoute, expensive]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}
