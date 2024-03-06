import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { privateRoutes } from "./PrivatesRoutes";
import { publicRoutes } from "./PublicRoutes";

const Routes = () => {
  const routes = [...publicRoutes, ...privateRoutes];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Routes;
