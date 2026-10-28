import { Box, Card, Stack, Typography } from "@mui/material";
import MissionIcon from "../../assets/icons/mission.svg";
import VisionIcon from "../../assets/icons/vision.svg";

const missionVisionItems = [
  {
    title: "Mission",
    icon: MissionIcon,
    description:
      "Our mission is to provide a nurturing and inspiring learning environment where every child can explore, discover, and develop a lifelong love of learning.",
    animation: "fade-right",
  },
  {
    title: "Vision",
    icon: VisionIcon,
    description:
      "Our vision is to empower every child with the knowledge, confidence, and creativity needed to grow, succeed, and make a positive impact on the world.",
    animation: "fade-left",
  },
];

export function AboutMissionVision() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      {/* Section Heading */}
      <Stack
        spacing={2}
        alignItems="center"
        textAlign="center"
        sx={{ mb: { xs: 4, md: 6 } }}
      >
        <Box
          sx={{
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
              fontSize: 15,
              fontWeight: 500,
              color: "#262626",
            }}
          >
            Our Purpose
          </Typography>
        </Box>

        <Typography
          component="h2"
          sx={{
            fontFamily: "Raleway, Arial, sans-serif",
            fontSize: { xs: 28, sm: 36, md: 44 },
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#1A1A1A",
          }}
        >
          Our Mission & Vision
        </Typography>

        <Typography
          sx={{
            maxWidth: 750,
            fontFamily: "Outfit, Arial, sans-serif",
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.7,
            color: "#4A4A4A",
          }}
        >
          We believe every child deserves an education that inspires curiosity,
          builds confidence, and creates opportunities for a brighter future.
        </Typography>
      </Stack>

      {/* Mission & Vision Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {missionVisionItems.map((item) => (
          <Card
            key={item.title}
            data-aos={item.animation}
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              bgcolor: "#FFFFFF",
              border: "2px solid #262626",
              borderRadius: "12px",
              boxShadow: "6px 6px 0px 2px #1E1E1E",
              overflow: "visible",
              transition: "transform 0.25s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Stack spacing={3}>
              {/* Icon */}
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#FFDECC",
                  border: "2px solid #262626",
                  borderRadius: "10px",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt=""
                  sx={{
                    width: 42,
                    height: 42,
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                component="h3"
                sx={{
                  fontFamily: "Raleway, Arial, sans-serif",
                  fontSize: { xs: 24, md: 30 },
                  fontWeight: 800,
                  color: "#1A1A1A",
                }}
              >
                Our {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: "Outfit, Arial, sans-serif",
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.8,
                  color: "#4A4A4A",
                }}
              >
                {item.description}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
}