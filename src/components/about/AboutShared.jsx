import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";

import {
  ABOUT_COLORS,
  EMAIL_ICON,
} from "./aboutData";

export function AboutSectionHeading({
  id,
  eyebrow,
  title,
  description,
  compact = false,
}) {
  return (
    <Stack
      data-aos="fade-up"
      spacing={1.5}
      alignItems="center"
      textAlign="center"
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: compact ? 920 : 1100,
        mb: { xs: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          bgcolor: ABOUT_COLORS.white,
          color: ABOUT_COLORS.text,
          border: `2px solid ${ABOUT_COLORS.ink}`,
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
          {eyebrow}
        </Typography>
      </Box>

      <Typography
        id={id}
        component="h2"
        sx={{
          color: "#1A1A1A",
          fontFamily: "Raleway, Arial, sans-serif",
          fontSize: {
            xs: 30,
            sm: 38,
            md: 48,
            lg: 58,
          },
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: "-0.025em",
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: ABOUT_COLORS.text,
            fontFamily: "Outfit, Arial, sans-serif",
            fontSize: { xs: 15, md: 18 },
            lineHeight: 1.6,
            maxWidth: 1040,
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}

export function MissionVisionCard({
  title,
  iconImage,
  fallbackIcon,
  children,
}) {
  return (
    <Card
      data-aos={title === "Mission" ? "fade-right" : "fade-left"}
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 3, md: 5, lg: 6 },
        bgcolor: ABOUT_COLORS.white,
        color: ABOUT_COLORS.ink,
        border: `2px solid ${ABOUT_COLORS.ink}`,
        borderRadius: "12px",
        boxShadow: "6px 6px 0px 2px #1E1E1E",
      }}
    >
      <Stack
        spacing={{ xs: 3, md: 5 }}
        sx={{ height: "100%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography
            component="h3"
            sx={{
              fontFamily: "Raleway, Arial, sans-serif",
              fontSize: { xs: 27, md: 38, lg: 46 },
              fontWeight: 800,
              color: "#1A1A1A",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              flex: "0 0 auto",
              width: { xs: 54, md: 72 },
              height: { xs: 54, md: 72 },
              display: "grid",
              placeItems: "center",
              borderRadius: "10px",
              bgcolor: ABOUT_COLORS.peach,
              border: `2px solid ${ABOUT_COLORS.ink}`,
              fontSize: { xs: 30, md: 40 },
              lineHeight: 1,
              color: ABOUT_COLORS.ink,
            }}
          >
            <Box
              component="img"
              src={iconImage}
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              sx={{
                width: { xs: 48, md: 68 },
                height: { xs: 48, md: 68 },
                objectFit: "contain",
              }}
            />
            <Box sx={{ display: "none" }}>
              {fallbackIcon}
            </Box>
          </Box>
        </Stack>

        <Typography
          sx={{
            fontFamily: "Outfit, Arial, sans-serif",
            color: ABOUT_COLORS.text,
            fontSize: { xs: 15, md: 18 },
            lineHeight: 1.6,
          }}
        >
          {children}
        </Typography>
      </Stack>
    </Card>
  );
}

export function AboutAwardCard({
  award,
  animationDelay = 0,
}) {
  return (
    <Box
      data-aos="flip-left"
      data-aos-delay={animationDelay}
      sx={{
        position: "relative",
        pt: 5,
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 3,
          zIndex: 1,
          width: 58,
          height: 58,
          bgcolor: ABOUT_COLORS.peach,
          border: `2px solid ${ABOUT_COLORS.ink}`,
          borderRadius: "10px",
          display: "grid",
          placeItems: "center",
          fontSize: 30,
          color: ABOUT_COLORS.ink,
        }}
      >
        <Box
          component="img"
          src={award.iconImage}
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          sx={{
            width: 30,
            height: 30,
            objectFit: "contain",
          }}
        />
        <Box sx={{ display: "none" }}>
          {award.icon}
        </Box>
      </Box>

      <Card
        elevation={0}
        sx={{
          height: "100%",
          minHeight: { xs: 0, md: 330 },
          p: { xs: 3, md: 4 },
          pt: { xs: 5, md: 6 },
          bgcolor: ABOUT_COLORS.white,
          border: `2px solid ${ABOUT_COLORS.ink}`,
          borderRadius: "12px",
          boxShadow: "6px 6px 0px 2px #1E1E1E",
        }}
      >
        <Stack spacing={2}>
          <Typography
            component="h3"
            sx={{
              fontFamily: "Raleway, Arial, sans-serif",
              fontSize: { xs: 21, md: 25 },
              lineHeight: 1.3,
              fontWeight: 800,
              color: "#1A1A1A",
            }}
          >
            {award.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Outfit, Arial, sans-serif",
              color: ABOUT_COLORS.muted,
              fontSize: { xs: 14, md: 17 },
              lineHeight: 1.55,
            }}
          >
            {award.description}
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}

export function AboutTeacherCard({
  teacher,
  animationDelay = 0,
}) {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
      elevation={0}
      sx={{
        p: { xs: 2, md: 3.5 },
        bgcolor: ABOUT_COLORS.white,
        border: `2px solid ${ABOUT_COLORS.ink}`,
        borderRadius: "12px",
        boxShadow: "6px 6px 0px 2px #1E1E1E",
      }}
    >
      <Stack spacing={2.5}>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
        >
          <Avatar
            src={teacher.image}
            alt={teacher.name}
            variant="rounded"
            sx={{
              width: { xs: 64, md: 76 },
              height: { xs: 64, md: 76 },
              flex: "0 0 auto",
              bgcolor: ABOUT_COLORS.peach,
              color: ABOUT_COLORS.ink,
              border: `2px solid ${ABOUT_COLORS.ink}`,
              borderRadius: "10px",
              fontFamily: "Raleway, Arial, sans-serif",
              fontWeight: 800,
            }}
          >
            {teacher.initials}
          </Avatar>

          <Typography
            component="h3"
            sx={{
              flex: 1,
              fontFamily: "Raleway, Arial, sans-serif",
              fontSize: { xs: 17, sm: 20, md: 25 },
              lineHeight: 1.3,
              fontWeight: 800,
              color: ABOUT_COLORS.text,
            }}
          >
            {teacher.name}
          </Typography>

          <Button
            component="a"
            href={`mailto:${teacher.email}`}
            aria-label={`Email ${teacher.name}`}
            sx={{
              minWidth: 42,
              width: 42,
              height: 42,
              p: 1,
              bgcolor: ABOUT_COLORS.peach,
              color: ABOUT_COLORS.ink,
              border: `2px solid ${ABOUT_COLORS.ink}`,
              borderRadius: "8px",
              "&:hover": {
                bgcolor: ABOUT_COLORS.orange,
              },
            }}
          >
            <Box
              component="img"
              src={EMAIL_ICON}
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              sx={{
                width: 22,
                height: 22,
                objectFit: "contain",
              }}
            />
            <Box sx={{ display: "none" }}>✉</Box>
          </Button>
        </Stack>

        <Box
          sx={{
            bgcolor: ABOUT_COLORS.page,
            border: `2px solid ${ABOUT_COLORS.ink}`,
            borderRadius: "10px",
            p: { xs: 2, md: 2.5 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit, Arial, sans-serif",
              fontSize: { xs: 13, md: 15 },
              lineHeight: 1.55,
              color: ABOUT_COLORS.text,
              mb: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{ fontWeight: 700 }}
            >
              Qualification:{" "}
            </Box>
            {teacher.qualification}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Outfit, Arial, sans-serif",
              fontSize: { xs: 13, md: 15 },
              lineHeight: 1.55,
              color: ABOUT_COLORS.text,
            }}
          >
            {teacher.bio}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}