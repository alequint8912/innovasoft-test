import Layout from "layout/MainLayout/Layout";
import { ClientsCRUD, ClientMaintenance, Welcome, NotFound } from "pages";
import ProtectedRoute from "./ProtectedRoute";

export const privateRoutes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/clients/edit/:clientId", element: <ClientMaintenance /> },
      { path: "/clients/add", element: <ClientMaintenance /> },
      { path: "/clients", element: <ClientsCRUD /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
