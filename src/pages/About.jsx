import { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import { ABOUT_COLORS } from "../components/about/aboutData";
import { AboutOverview } from "../components/about/AboutOverview";
import { AwardsSection } from "../components/about/AwardsSection";
import { HistorySection } from "../components/about/HistorySection";
import { TeamSection } from "../components/about/TeamSection";
import { AboutMissionVision } from "../components/about/MissionVisionSection";
export function About() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      offset: 80,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refreshHard();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Box
      component="article"
      sx={{
        bgcolor: ABOUT_COLORS.page,
        color: ABOUT_COLORS.ink,
        py: { xs: 3, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1596,
          px: { xs: 2, sm: 3, md: 4, lg: 0 },
          mx: "auto",
        }}
      >
        <Stack spacing={{ xs: 7, md: 12.5 }}>
          <AboutOverview />
          <AboutMissionVision />
          <AwardsSection />
          <HistorySection />
          <TeamSection />
          
        </Stack>
      </Container>
    </Box>
  );
}