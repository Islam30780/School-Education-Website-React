import { Box } from "@mui/material";

import { ABOUT_TEACHERS } from "./aboutData";

import {
  AboutSectionHeading,
  AboutTeacherCard,
} from "./AboutShared";

export function TeamSection() {
  return (
    <Box
      component="section"
      aria-labelledby="about-team-heading"
    >
      <AboutSectionHeading
        id="about-team-heading"
        eyebrow="Our Teachers With Experties"
        title="Our Team Members"
        description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
          mt: { xs: 4, md: 6 },
        }}
      >
        {ABOUT_TEACHERS.map((teacher, index) => (
          <AboutTeacherCard
            key={teacher.name}
            teacher={teacher}
            animationDelay={(index % 2) * 120}
          />
        ))}
      </Box>
    </Box>
  );
}