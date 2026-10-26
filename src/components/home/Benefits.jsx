import { Box, Container, Grid, Typography } from "@mui/material";

import UnionIcon from "../../assets/icons/Union.png";
import CrownIcon from "../../assets/icons/crown.fill.svg";
import FaceMaskIcon from "../../assets/icons/facemask.fill.svg";
import Icon6 from "../../assets/icons/Icon (6).svg";
import Icon2 from "../../assets/icons/Icon (2).svg";
import Icon9 from "../../assets/icons/Icon (9).svg";

const benefits = [
  {
    icon: UnionIcon,
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development.",
  },
  {
    icon: CrownIcon,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: FaceMaskIcon,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: Icon6,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: Icon2,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: Icon9,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to encourage seamless communication and collaboration.",
  },
];

export function Benefits() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4, lg: 10, xl: 20 },
      }}
    >
      <Container maxWidth={false}>
        {/* Section Label */}
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 3 },
            py: 1,
            border: "2px solid",
            borderColor: "text.primary",
            backgroundColor: "#FFF7ED",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
              },
            }}
          >
            Children Deserve Bright Future
          </Typography>
        </Box>

        {/* Section Heading */}
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            mt: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.875rem",
                sm: "2.25rem",
              },
              fontWeight: 700,
            }}
          >
            Our Benefits
          </Typography>

          <Typography
            sx={{
              maxWidth: "48rem",
              textAlign: "center",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
              lineHeight: 1.7,
            }}
          >
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </Typography>
        </Box>

        {/* Benefits Cards */}
        <Grid
          container
          columnSpacing={{ xs: 0, md: 3 }}
          rowSpacing={{ xs: 6, md: 6 }}
        >
          {benefits.map((benefit) => (
            <Grid
              key={benefit.title}
              size={{ xs: 12, md: 6, xl: 4 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  p: {
                    xs: 2.5,
                    sm: 3,
                    lg: 4,
                  },
                  pt: {
                    xs: 4,
                    sm: 4,
                    lg: 5,
                  },
                  backgroundColor: "background.paper",
                  border: "2px solid",
                  borderColor: "text.primary",
                  borderRadius: "10px",
                  boxShadow: "4px 4px 0 #262626",
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: {
                      xs: -20,
                      sm: -24,
                    },
                    left: {
                      xs: 16,
                      sm: 20,
                    },
                    width: {
                      xs: 40,
                      sm: 48,
                    },
                    height: {
                      xs: 40,
                      sm: 48,
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "primary.main",
                    border: "2px solid",
                    borderColor: "text.primary",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={benefit.icon}
                    alt=""
                    sx={{
                      width: {
                        xs: 20,
                        sm: 24,
                      },
                      height: {
                        xs: 20,
                        sm: 24,
                      },
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Content */}
                <Typography
                  component="h3"
                  sx={{
                    mt: 2,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.125rem",
                    },
                    fontWeight: 700,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.875rem",
                    },
                    lineHeight: 1.7,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}