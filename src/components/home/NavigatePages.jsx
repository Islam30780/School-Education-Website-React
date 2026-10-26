import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const pageCards = [
  {
    title: "About Us",
    path: "/about",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    path: "/academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    path: "/student-life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Admissions",
    path: "/admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];

function DecorativeDivider() {
  return (
    <Stack
      aria-hidden="true"
      alignItems="center"
      direction="row"
      spacing={0.75}
      sx={{ width: "100%" }}
    >
      <Box
        sx={{
          width: 16,
          height: 16,
          flex: "0 0 auto",
          border: "1.5px solid",
          borderColor: "text.primary",
          borderRadius: "50%",
          bgcolor: "background.paper",
        }}
      />

      {Array.from({ length: 6 }, (_, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            flex: 1,
            height: 6,
            bgcolor: "#ffbe99",

            "&::after": {
              position: "absolute",
              top: 2,
              right: 0,
              left: 0,
              height: 1.5,
              bgcolor: "text.primary",
              content: '""',
            },
          }}
        />
      ))}

      <Box
        sx={{
          width: 16,
          height: 16,
          flex: "0 0 auto",
          border: "1.5px solid",
          borderColor: "text.primary",
          borderRadius: "50%",
          bgcolor: "background.paper",
        }}
      />
    </Stack>
  );
}

function NavigationCard({ description, title, path }) {
  return (
    <Paper
      component="article"
      elevation={0}
      sx={{
        display: "flex",
        minWidth: 0,
        minHeight: 380,
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        border: "1.5px solid",
        borderColor: "divider",
        borderRadius: "9px",
        boxShadow: "6px 6px 0 1px #1e1e1e",
        p: "50px",

        "@media (min-width:1200px)": {
          minHeight: 530,
          borderWidth: 2,
          borderRadius: "12px",
          p: "80px",
        },

        "@media (max-width:699px)": {
          minHeight: 0,
          p: 3,
        },
      }}
    >
      <Stack
        spacing={{ xs: 3, md: "30px", xl: "50px" }}
        alignItems="center"
      >
        <Stack
          spacing={{ xs: 2, md: "30px" }}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            component="h2"
            variant="h2"
            sx={{
              width: "100%",
              fontSize: { xs: 28, md: 32, xl: 48 },
              lineHeight: { xs: "36px", md: "41.6px", xl: "62.4px" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>

          <DecorativeDivider />
        </Stack>

        <Typography
          component="p"
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: 14, md: 13, xl: 20 },
            lineHeight: { xs: "21px", md: "19.5px", xl: "30px" },
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      </Stack>

      <Button
        component={Link}
        to={path}
        fullWidth
        disableElevation
        disableRipple
        endIcon={
          <ArrowForward
            sx={{
              fontSize: { xs: 20, xl: 30 },
            }}
          />
        }
        variant="contained"
        sx={{
          mt: 4,
          minHeight: 46,
          border: "1.5px solid",
          borderColor: "divider",
          borderRadius: "7px",
          bgcolor: "secondary.main",
          boxShadow: "4px 4px 0 1px #1e1e1e",
          color: "#333",

          fontSize: {
            xs: 14,
            md: 13,
            xl: 20,
          },

          lineHeight: {
            xs: "21px",
            md: "19.5px",
            xl: "30px",
          },

          "&:hover": {
            bgcolor: "secondary.main",
            boxShadow: "4px 4px 0 1px #1e1e1e",
          },

          "@media (min-width:1200px)": {
            minHeight: 70,
            borderWidth: 2,
            borderRadius: "10px",
          },
        }}
      >
        Learn More
      </Button>
    </Paper>
  );
}

export function NavigatePages() {
  return (
    <Box
      component="section"
      aria-labelledby="navigate-pages-heading"
      sx={{
        width: "100%",
        maxWidth: 1596,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 6, md: "64px", xl: "100px" },
      }}
    >
      <Stack
        component="header"
        alignItems="center"
        spacing={{ xs: 1.5, md: 1, xl: 1 }}
        sx={{
          width: "100%",
          px: { xs: 2, md: 12, xl: "300px" },
        }}
      >
        <Button
          disableElevation
          disableRipple
          variant="outlined"
          sx={{
            minHeight: 30,
            px: 1.5,
            py: 0.25,
            border: "1.5px solid",
            borderColor: "common.black",
            borderRadius: "4px",
            color: "#333",
            fontSize: { xs: 12, xl: 18 },
            lineHeight: { xs: "18px", xl: "27px" },

            "&:hover": {
              borderColor: "common.black",
              bgcolor: "transparent",
            },

            "@media (min-width:1200px)": {
              minHeight: 51,
              px: 2.5,
              py: 1.25,
              borderWidth: 2,
              borderRadius: "8px",
            },
          }}
        >
          Explore More
        </Button>

        <Typography
          id="navigate-pages-heading"
          component="h1"
          variant="h1"
          sx={{
            width: "100%",
            fontSize: { xs: 34, md: 40, xl: 58 },
            lineHeight: { xs: "44px", md: "52px", xl: "75.4px" },
            textAlign: "center",
          }}
        >
          Navigate through our Pages
        </Typography>

        <Typography
          component="p"
          variant="body1"
          sx={{
            width: "100%",
            color: "text.secondary",
            fontSize: { xs: 13, xl: 20 },
            lineHeight: { xs: "19.5px", xl: "30px" },
            textAlign: "center",
          }}
        >
          Your gateway to discovering a wealth of valuable information about
          our kindergarten school, Feel free to explore and learn more about
          the enriching experiences that await your child at our kindergarten
          school.
        </Typography>
      </Stack>

      <Box
        component="section"
        aria-label="School pages"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: "28px", xl: "50px" },
        }}
      >
        {pageCards.map((card) => (
          <NavigationCard key={card.title} {...card} />
        ))}
      </Box>
    </Box>
  );
}