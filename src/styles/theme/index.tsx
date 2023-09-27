import { createTheme } from "@material-ui/core/styles";
import { red, blueGrey } from "@material-ui/core/colors";

const colorThemeOne = "#FB6A89";
const colorThemeTwo = "#00d4ff";

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: colorThemeOne,
      light: colorThemeTwo,
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: [
      "'Open Sans'",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    body1: {
      color: "#919BB0",
      fontWeight: 300,
    },
    body2: {
      fontSize: 16,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        },
      },
    },

    MuiIconButton: {
      root: {
        border: "2px solid transparent",
        padding: "12px 10px",
        "&:hover": {
          borderColor: colorThemeOne+"!important",
        },
        transition: ".5s",
      },
    },

    MuiSvgIcon: {
      fontSizeSmall: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 5,
        "&:hover": {
          color: colorThemeOne,
        },
      },
    },

    MuiButton: {
      root: {
        fontFamily: "Open Sans",
        fontSize: 15,
        fontWeight: 800,
        textTransform: "none",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 56,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      outlined: {
        background: "transparent",
        borderWidth: "1.5px !important",
        borderColor: colorThemeOne+"!important",
      },
    },
    MuiButtonGroup: {
      root: {
        marginBottom: 15,
        width: "100%",
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 400,
      },
      formControl: {
        transform: "translate(0, 12px) scale(1)",
      },
    },
  },
});

export default theme;