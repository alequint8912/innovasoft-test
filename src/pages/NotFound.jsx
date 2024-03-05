import WarningIcon from "@mui/icons-material/Warning";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  placeItems: "center",
}));

const IconContainer = styled(Box)(() => ({
  display: "flex",
  placeItems: "center",
  gap: 20,
}));

const MainLabel = styled(Typography)(() => ({
  color: "#3598db",
  fontWeight: "700",
}));

const NotFoundMessage = styled(Typography)(() => ({
  color: "#706a6f",
}));

const NotFound = () => {
  return (
    <MainContainer>
      <Container>
        <IconContainer>
          <WarningIcon style={{ color: "#3598db", fontSize: "7rem" }} />
          <MainLabel variant="h1">404</MainLabel>
        </IconContainer>
        <NotFoundMessage variant="h3">Oops... Page Not Found!</NotFoundMessage>
      </Container>
    </MainContainer>
  );
};

export default NotFound;
