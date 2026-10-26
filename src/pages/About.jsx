import { Box, Typography } from "@mui/material";

export function About() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1">
        About Us
      </Typography>

      <Typography sx={{ mt: 2 }}>
        This is the About page.
      </Typography>
    </Box>
  );
}