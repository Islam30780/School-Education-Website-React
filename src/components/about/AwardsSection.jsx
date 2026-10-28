import { useState } from "react";

import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import {
  ABOUT_AWARDS,
  ABOUT_COLORS,
} from "./aboutData";

import {
  AboutAwardCard,
  AboutSectionHeading,
} from "./AboutShared";

export function AwardsSection() {
  const [awardOffset, setAwardOffset] = useState(0);

  const orderedAwards = ABOUT_AWARDS.map(
    (_, index) =>
      ABOUT_AWARDS[
        (index + awardOffset) % ABOUT_AWARDS.length
      ]
  );

  const nextAwards = () => {
    setAwardOffset(
      (offset) => (offset + 1) % ABOUT_AWARDS.length
    );
  };

  const previousAwards = () => {
    setAwardOffset(
      (offset) =>
        (offset - 1 + ABOUT_AWARDS.length) %
        ABOUT_AWARDS.length
    );
  };

  return (
    <Box
      component="section"
      aria-labelledby="about-awards-heading"
    >
      <AboutSectionHeading
        id="about-awards-heading"
        eyebrow="Our Achievements"
        title="Our Awards and Recognitions"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
          mt: { xs: 4, md: 6 },
        }}
      >
        {orderedAwards.map((award, index) => (
          <AboutAwardCard
            key={award.title}
            award={award}
            animationDelay={index * 120}
          />
        ))}
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 4 }}
      >
        <Typography
          sx={{
            fontFamily: "Raleway, Arial, sans-serif",
            fontWeight: 800,
            fontSize: { xs: 17, md: 22 },
            color: "#1A1A1A",
          }}
        >
          8 More Awards
        </Typography>

        <Stack direction="row" spacing={1.5}>
          <Button
            onClick={previousAwards}
            aria-label="Previous awards"
            sx={{
              minWidth: 44,
              width: 44,
              height: 44,
              p: 0,
              bgcolor: ABOUT_COLORS.white,
              color: ABOUT_COLORS.ink,
              border: `2px solid ${ABOUT_COLORS.ink}`,
              borderRadius: "8px",
              fontSize: 23,
              "&:hover": {
                bgcolor: ABOUT_COLORS.peach,
              },
            }}
          >
            ‹
          </Button>

          <Button
            onClick={nextAwards}
            aria-label="Next awards"
            sx={{
              minWidth: 44,
              width: 44,
              height: 44,
              p: 0,
              bgcolor: ABOUT_COLORS.white,
              color: ABOUT_COLORS.ink,
              border: `2px solid ${ABOUT_COLORS.ink}`,
              borderRadius: "8px",
              fontSize: 23,
              "&:hover": {
                bgcolor: ABOUT_COLORS.peach,
              },
            }}
          >
            ›
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}