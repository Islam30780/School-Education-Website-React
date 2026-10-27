import DiamondOutlined from "@mui/icons-material/DiamondOutlined";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Twitter from "@mui/icons-material/Twitter";
import logoFooter from "../../assets/icons/logo_Footer.svg";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const contactDetails = [
  {
    label: "hello@littlelearners.com",
    href: "mailto:hello@littlelearners.com",
icon: EmailOutlinedIcon  },
  {
    label: "+91 91813 23 2309",
    href: "tel:+9191813232309",
icon: PhoneOutlinedIcon  },
  {
    label: "Somewhere in the World",
    href: "#location",
    icon: LocationOnOutlinedIcon,
  },
];

const footerNavigation = [
  {
    title: "Home",
    links: [
      { label: "Features", path: "/#benefits" },
      { label: "Our Testimonials", path: "/#testimonials" },
      { label: "FAQ", path: "/#faq" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Mission", path: "/about" },
      { label: "Our Vision", path: "/about" },
      { label: "Awards and Recognitions", path: "/about" },
      { label: "History", path: "/about" },
      { label: "Teachers", path: "/about" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Special Features", path: "/academics" },
      { label: "Gallery", path: "/academics" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Information", path: "/contact" },
      { label: "Map & Direction", path: "/contact" },
    ],
  },
];

const policyLinks = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: LinkedIn,
    href: "#",
  },
];

export function Footer() {
  return (
    <Paper
      component="footer"
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "1820px",
        mx: "auto",
        overflow: "hidden",
        border: "2px solid",
        borderColor: "divider",
        borderRadius: "12px",
        px: { xs: 3, sm: 6, lg: "113px" },
        pt: { xs: 6, sm: 10, lg: "100px" },
        pb: 5,
        mt: { xs: 6, md: 10 },
      }}
    >
      <Stack spacing={{ xs: 6, lg: "50px" }}>
        {/* Top */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, lg: 10 }}
          alignItems="flex-start"
        >
          {/* Brand + Contact */}
          <Stack
            component="section"
            spacing="50px"
            sx={{
              width: { xs: "100%", lg: "519px" },
              flexShrink: 0,
            }}
          >
            <Stack spacing={2.5}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ minHeight: "50px" }}
              >
                <Box
                  sx={{
                    width: "42px",
                    height: "42px",
                    display: "grid",
                    placeItems: "center",
                    color: "text.primary",
                  }}
                >
                  <img
                    src={logoFooter}
                    alt="Little Learners Logo"
                    style={{ width: "100%", height: "100%" }}
                  />    
                </Box>

                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  Little Learners
                </Typography>
              </Stack>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </Typography>
            </Stack>

            {/* Contact */}
            <Stack
              spacing={3}
              component="address"
              sx={{ fontStyle: "normal" }}
            >
              {contactDetails.map(({ label, href, icon: Icon }) => (
                <Button
                  key={label}
                  component="a"
                  href={href}
                  variant="text"
                  disableRipple
                  sx={{
                    justifyContent: "flex-start",
                    width: "fit-content",
                    minWidth: 0,
                    p: 0,
                    color: "text.primary",

                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  startIcon={
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        width: "44px",
                        height: "44px",
                        border: "2px solid",
                        borderColor: "divider",
                        borderRadius: "6px",
                        bgcolor: "secondary.main",
                      }}
                    >
                      <Icon sx={{ fontSize: "24px" }} />
                    </Box>
                  }
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Navigation */}
          <Stack
            component="nav"
            aria-label="Footer navigation"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 5, sm: "30px" }}
            sx={{
              flex: 1,
              width: "100%",
            }}
          >
            {footerNavigation.map(({ title, links }) => (
              <Stack
                key={title}
                component="section"
                spacing={3}
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography component="h2" variant="subtitle1">
                  {title}
                </Typography>

                <Stack spacing={1.75}>
                  {links.map(({ label, path }) => (
                    <Link
                      key={label}
                      component={RouterLink}
                      to={path}
                      variant="body1"
                      underline="none"
                      sx={{
                        width: "fit-content",
                        color: "text.secondary",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* Bottom */}
        <Stack spacing="30px" alignItems="center">
          <Divider
            sx={{
              width: "100%",
              borderColor: "divider",
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* Policies */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              flexWrap="wrap"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "divider" }}
                />
              }
            >
              {policyLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  variant="body2"
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    whiteSpace: "nowrap",

                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>

            {/* Social */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  aria-label={label}
                  sx={{
                    width: "56px",
                    height: "56px",
                    border: "2px solid",
                    borderColor: "divider",
                    borderRadius: "8px",
                    bgcolor: "primary.main",
                    color: "text.primary",

                    "&:hover": {
                      bgcolor: "secondary.main",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: "24px" }} />
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              borderColor: "divider",
            }}
          />

          <Typography
            component="p"
            variant="body2"
            align="center"
            sx={{
              color: "text.secondary",
            }}
          >
            Copyright © 2026 Little Learners Academy. All rights reserved.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}