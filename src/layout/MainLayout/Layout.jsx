import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

import Box from "@mui/material/Box";

const drawerWidth = 400;

export default function PersistentDrawerLeft() {
  const [open, setOpen] = useState(false);

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
    </Box>
  );
}
