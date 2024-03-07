import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useAuth } from "hooks";
import { useGlobalState } from "hooks";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  backgroundColor: "black",
  borderBottom: "6px solid #3897f4",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Toolbar = styled(MuiToolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ToolbarSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

// eslint-disable-next-line react/prop-types
const Header = ({ handleDrawerOpen, drawerWidth, open }) => {
  const { cleanGlobalState } = useGlobalState();
  const { getSession, logout } = useAuth();
  const sessionStringify = getSession();
  const { username } = JSON.parse(sessionStringify ?? "{}");

  const handleLogout = () => {
    cleanGlobalState();
    logout();
  };

  return (
    <AppBar position="static" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <ToolbarSection>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            COMPAÑIA PRUEBA
          </Typography>
        </ToolbarSection>
        <ToolbarSection style={{ gap: 15 }}>
          <Typography variant="h6">
            {username ?? "Nombre de usuario"}
          </Typography>
          <IconButton
            color="inherit"
            style={{ backgroundColor: "white" }}
            onClick={handleLogout}
          >
            <LogoutRoundedIcon style={{ color: "black" }} />
          </IconButton>
        </ToolbarSection>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
