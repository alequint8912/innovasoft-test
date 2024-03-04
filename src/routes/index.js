import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainRoutes from "./MainRoutes";

const router = createBrowserRouter([MainRoutes]);
const Routes = () => <RouterProvider router={router} />;

export default Routes;
