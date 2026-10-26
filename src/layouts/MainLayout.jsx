import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;