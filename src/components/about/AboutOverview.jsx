import { Box, Card, Stack, Typography } from "@mui/material";

export function AboutOverview() {
  return (
    <Card
      data-aos="fade-up"
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        border: "2px solid #262626",
        borderRadius: "12px",
        boxShadow: "6px 6px 0px 2px #1E1E1E",
        p: { xs: 3, sm: 4, md: 6, lg: 8 },
      }}
    >
      {/* Abstract Design */}
      <Box
        component="img"
        src="/images/about/Abstract%20Design%20(4).svg"
        alt=""
        aria-hidden="true"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: 100, md: 160 },
          height: "auto",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) minmax(0, 1fr)",
          },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          pt: { xs: 5, md: 0 },
        }}
      >
        {/* Heading */}
        <Stack spacing={2} sx={{ maxWidth: 640 }}>
          <Box
            sx={{
              alignSelf: "flex-start",
              bgcolor: "#FFFFFF",
              border: "2px solid #262626",
              borderRadius: "8px",
              px: 2.5,
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit, Arial, sans-serif",
                fontSize: { xs: 13, md: 16 },
                fontWeight: 500,
              }}
            >
              Overview
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              fontFamily: "Raleway, Arial, sans-serif",
              fontSize: { xs: 30, sm: 38, md: 48 },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#1A1A1A",
            }}
          >
            Welcome to Little Learners Academy
          </Typography>
        </Stack>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Outfit, Arial, sans-serif",
            fontSize: { xs: 15, md: 18 },
            lineHeight: 1.6,
            color: "#333333",
          }}
        >
          A leading kinder garden school dedicated to providing a
          nurturing and stimulating environment for young learners.
          With a commitment to excellence in early education, we
          believe in shaping curious minds and building a strong
          foundation for a lifelong love of learning. Our holistic
          approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches
          their full potential.
        </Typography>
      </Box>
    </Card>
  );
}