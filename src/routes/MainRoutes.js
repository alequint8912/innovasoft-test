import Layout from "layout/MainLayout/Layout";
import { ClientsCRUD } from "pages";

const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [{ path: "/", element: <ClientsCRUD /> }],
};

export default mainRoutes;
