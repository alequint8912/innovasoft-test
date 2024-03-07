import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box style={{ width: "100%", textAlign: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
