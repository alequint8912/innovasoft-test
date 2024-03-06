import Layout from "layout/MainLayout/Layout";
import { ClientsCRUD, ClientMaintenance, Welcome, NotFound } from "pages";
import ProtectedRoutes from "./ProtectedRoute";

const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Welcome /> },
    { path: "/clients/edit/:clientId", element: <ClientMaintenance /> },
    { path: "/clients/add", element: <ClientMaintenance /> },
    { path: "/clients", element: <ClientsCRUD /> },
    { path: "*", element: <NotFound /> },
  ],
};

export default mainRoutes;
