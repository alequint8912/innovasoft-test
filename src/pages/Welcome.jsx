import { Typography, Box } from "@mui/material";
const Welcome = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" style={{ fontWeight: "700" }}>
        Bienvenido
      </Typography>
    </Box>
  );
};

export default Welcome;
