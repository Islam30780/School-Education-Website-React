import { Box, Container, Grid, Typography } from "@mui/material";

import heroImage from "../../assets/icons/hero.png";
import abstractDesign from "../../assets/icons/Abstract Design.png";


export function Hero() {
  return (
    <Container
      maxWidth={false}
      sx={{
        px: { xs: 2, md: 4, xl: 20 },
        py: { xs: 5, md: 7 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, lg: 7 }}
        alignItems="center"
      >
        {/* Hero Image */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: {
                xs: 330,
                md: 520,
              },
              aspectRatio: "1 / 1",
              backgroundColor: "#fdba74",
              border: "2px solid",
              borderColor: "text.primary",
              borderRadius: "14px",
              boxShadow: "6px 6px 0 #262626",
              overflow: "hidden",
            }}
          >
            {/* Abstract Design */}
            <Box
              component="img"
              src={abstractDesign}
              alt=""
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "88%",
                transform: "translate(-50%, -50%)",
                opacity: 0.7,
                zIndex: 1,
              }}
            />

            {/* Hero Image */}
            <Box
              component="img"
              src={heroImage}
              alt="Little Learners"
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: "92%",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />
          </Box>
        </Grid>

        {/* Hero Content */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          {/* Small Heading */}
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Welcome to Little Learners Academy
          </Typography>

          {/* Main Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.25rem",
                md: "3rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Where Young Minds Blossom and{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              Dreams Take Flight.
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: {
                xs: "0.875rem",
                md: "1rem",
              },
              lineHeight: 1.7,
            }}
          >
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </Typography>

          {/* Statistics */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: {
                xs: 2.5,
                md: 3,
              },
              mt: 2,
              p: 3,
              border: "2px solid",
              borderColor: "text.primary",
              borderRadius: "10px",
              backgroundColor: "#FFF7ED",
              boxShadow: "4px 4px 0 #fdba74",
            }}
          >
            {/* Stat 1 */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.875rem",
                  fontWeight: 700,
                }}
              >
                +7000
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    md: "0.875rem",
                  },
                  textAlign: "center",
                }}
              >
                Students Passed Out
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "1px",
                },
                height: {
                  xs: "1px",
                  md: "auto",
                },
                backgroundColor: "text.primary",
              }}
            />

            {/* Stat 2 */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.875rem",
                  fontWeight: 700,
                }}
              >
                +37
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    md: "0.875rem",
                  },
                  textAlign: "center",
                }}
              >
                Awards & Recognitions
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "1px",
                },
                height: {
                  xs: "1px",
                  md: "auto",
                },
                backgroundColor: "text.primary",
              }}
            />

            {/* Stat 3 */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.875rem",
                  fontWeight: 700,
                }}
              >
                +15
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "0.75rem",
                    md: "0.875rem",
                  },
                  textAlign: "center",
                }}
              >
                Experience Educators
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;