import {
  Box,
  Card,
  Stack,
  Typography,
} from "@mui/material";

import {
  ABOUT_COLORS,
  ABOUT_HISTORY,
  ABSTRACT_DESIGN,
} from "./aboutData";

import { AboutSectionHeading } from "./AboutShared";

export function HistorySection() {
  return (
    <Box
      component="section"
      aria-labelledby="about-history-heading"
    >
      <AboutSectionHeading
        id="about-history-heading"
        eyebrow="Our Progressive Journey"
        title="Our History"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment."
      />

      <Card
        elevation={0}
        sx={{
          mt: { xs: 4, md: 6 },
          p: { xs: 3, sm: 4, md: 7, lg: 9 },
          bgcolor: ABOUT_COLORS.white,
          border: `2px solid ${ABOUT_COLORS.ink}`,
          borderRadius: "12px",
          boxShadow: "6px 6px 0px 2px #1E1E1E",
        }}
      >
        <Stack spacing={{ xs: 4, md: 5 }}>
          {ABOUT_HISTORY.map((item, index) => (
            <Box
              key={item.year}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "150px minmax(0, 1fr)",
                  md: "190px minmax(0, 1fr)",
                },
                gap: { xs: 2, md: 5 },
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  bgcolor: ABOUT_COLORS.white,
                  border: `2px solid ${ABOUT_COLORS.ink}`,
                  borderRadius: "10px",
                  px: { xs: 2, md: 2.5 },
                  py: 1.5,
                  boxShadow: "4px 4px 0px #1E1E1E",
                  width: "fit-content",
                  minWidth: { xs: 140, sm: 150 },
                }}
              >
                <Box
                  component="img"
                  src={ABSTRACT_DESIGN}
                  alt=""
                  aria-hidden="true"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  sx={{
                    width: { xs: 34, md: 45 },
                    height: "auto",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Raleway, Arial, sans-serif",
                    fontSize: { xs: 30, md: 40, lg: 48 },
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "#1A1A1A",
                  }}
                >
                  {item.year}
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Raleway, Arial, sans-serif",
                    fontSize: { xs: 20, md: 24 },
                    fontWeight: 800,
                    mb: 1,
                    color: "#1A1A1A",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Outfit, Arial, sans-serif",
                    fontSize: { xs: 14, md: 17 },
                    lineHeight: 1.6,
                    color: ABOUT_COLORS.text,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              {index < ABOUT_HISTORY.length - 1 && (
                <Box
                  aria-hidden="true"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    left: { sm: 12, md: 15 },
                    top: "calc(100% + 8px)",
                    height: { sm: 48, md: 58 },
                    width: 3,
                    bgcolor: ABOUT_COLORS.orange,
                    zIndex: 0,
                  }}
                />
              )}
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}