import Layout from "layout/MainLayout/Layout";
import { ClientsCRUD, ClientMaintenance, Welcome } from "pages";

const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Welcome /> },
    { path: "/clients/edit/:clientId", element: <ClientMaintenance /> },
    { path: "/clients/add", element: <ClientMaintenance /> },
    { path: "/clients", element: <ClientsCRUD /> },
  ],
};

export default mainRoutes;
