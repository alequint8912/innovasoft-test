import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import DrawerHeader from "components/DrawerHeader";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import UserIcon from "../../assets/images/user-svgrepo-com.svg";

const ItemsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  placeItems: "center",
  gap: 20,
}));

const UserName = styled(Typography)(() => ({
  fontWeight: "700",
  marginBottom: 20,
}));

const MenuLabel = styled(Typography)(() => ({
  width: "100%",
  paddingBlock: 20,
  textAlign: "center",
  fontWeight: "700",
}));

const Sidebar = ({ drawerWidth, handleDrawerClose, open }) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <ItemsContainer>
        <img
          src={UserIcon}
          alt="User profile"
          width={"40%"}
          style={{
            border: "10px solid rgba(0, 0, 0, 0.87)",
            borderRadius: "50%",
          }}
        />

        <UserName variant="h5">Nombre de Usuario</UserName>
      </ItemsContainer>
      <Divider />
      <MenuLabel variant="h5">MENU</MenuLabel>
      <Divider />
      <List>
        {[
          { label: "INICIO", iconText: "IN" },
          { label: "Consulta clientes", iconText: "CC" },
        ].map(({ label, iconText }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Typography color={"#1976d2"}>{iconText}</Typography>
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
