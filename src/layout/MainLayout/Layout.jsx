import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

import Box from "@mui/material/Box";
import { Snackbar } from "@mui/material";

import { GlobalContext } from "context/GlobalState";
import { useContext } from "react";

const drawerWidth = 400;

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { notification, cleanNotificacion } = useContext(GlobalContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
        open={open}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <Main open={open} drawerWidth={drawerWidth}>
        <Outlet />
      </Main>
      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={3000}
        onClose={cleanNotificacion}
        message={notification?.message ?? ""}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
