import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export function Component() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/expensive">Expensive</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
