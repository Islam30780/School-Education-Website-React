import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
  mode: "light",

  primary: {
    main: "#FFB366",
  },

  secondary: {
    main: "#FB8500",
  },

  background: {
    default: "#FFFDF7",
    paper: "#FFFFFF",
  },

  text: {
    primary: "#262626",
    secondary: "#666666",
  },

  divider: "#262626",
},

  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
  },
});

export default theme;