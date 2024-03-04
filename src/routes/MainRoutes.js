import Layout from "layout/MainLayout/Layout";
import { ClientsCRUD, ClientMaintenance, Welcome } from "pages";

const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Welcome /> },
    { path: "/clients", element: <ClientsCRUD /> },
    { path: "/clients/:clientId", element: <ClientMaintenance /> },
  ],
};

export default mainRoutes;
