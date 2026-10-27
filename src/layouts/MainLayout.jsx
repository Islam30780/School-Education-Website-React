import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      <Box component="main">
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;