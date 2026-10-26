import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Academics",
    path: "/academics",
  },
  {
    label: "Admissions",
    path: "/admissions",
  },
  {
    label: "Student Life",
    path: "/student-life",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* =========================
          Admission Banner
      ========================== */}

      <Box
        sx={{
          px: {
            xs: 2,
            md: 4,
          },

          pt: 2,
        }}
      >
        <Box
          sx={{
            py: 1.5,

            textAlign: "center",

            backgroundColor: "primary.main",

            color: "text.primary",

            border: "2px solid",

            borderColor: "text.primary",

            borderRadius: "14px",

            boxShadow: "4px 4px 0 #262626",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,

              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
                md: "1rem",
              },
            }}
          >
            Admission is Open, Grab your seat now
          </Typography>
        </Box>
      </Box>

      {/* =========================
          Navbar
      ========================== */}

      <Box
        sx={{
          px: {
            xs: 2,
            md: 4,
          },

          py: 2,
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "background.paper",

            color: "text.primary",

            border: "2px solid",

            borderColor: "text.primary",

            borderRadius: "18px",

            boxShadow: "6px 6px 0 #262626",

            overflow: "hidden",
          }}
        >
          <Toolbar
            sx={{
              minHeight: {
                xs: 64,
                md: 70,
              },

              px: {
                xs: 1.5,
                md: 0,
              },
            }}
          >
            {/* =========================
                Logo
            ========================== */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",

                px: { xs: 2, md: 3 },
                py: 2,

                backgroundColor: "primary.main",

                color: "text.primary",

                textDecoration: "none",

                flexGrow: { xs: 1, md: 0 },

                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,

                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                  },
                }}
              >
                Little Learners
              </Typography>
            </Box>

            {/* =========================
                Desktop Navigation
            ========================== */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                ml: "auto",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    px: 2,

                    color: "text.primary",

                    borderLeft: "2px solid",

                    borderColor: "divider",

                    borderRadius: 0,

                    textTransform: "none",

                    fontSize: "1rem",

                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Theme Button */}

              <Button
                sx={{
                  mx: 1,

                  color: "text.primary",

                  border: "2px solid",

                  borderColor: "text.primary",

                  borderRadius: "10px",

                  textTransform: "none",

                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                Theme
              </Button>
            </Box>

            {/* =========================
                Mobile Menu Button
            ========================== */}

            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open menu"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "text.primary",

                border: "2px solid",

                borderColor: "text.primary",

                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* =========================
          Mobile Drawer
      ========================== */}

      {/* Mobile Menu */}
<Collapse in={mobileOpen} timeout={350}>
  <Box
    sx={{
      mx: { xs: 2, md: 4 },
      mb: 2,
      backgroundColor: "background.paper",
      border: "2px solid",
      borderColor: "text.primary",
      borderRadius: "14px",
      boxShadow: "5px 5px 0 #262626",
      overflow: "hidden",
    }}
  >
    <List sx={{ py: 1 }}>
      {navItems.map((item) => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              px: 3,
              py: 1.5,
              color: "text.primary",
              borderBottom: "1px solid",
              borderColor: "divider",

              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem>
        <Button
          fullWidth
          sx={{
            py: 1.2,
            color: "text.primary",
            border: "2px solid",
            borderColor: "text.primary",
            borderRadius: "10px",
            textTransform: "none",

            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Theme
        </Button>
      </ListItem>
    </List>
  </Box>
</Collapse>
    </>
  );
};

export default Navbar;