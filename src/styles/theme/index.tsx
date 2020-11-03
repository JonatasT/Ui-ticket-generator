import { createMuiTheme } from "@material-ui/core/styles";
import { red, blueGrey } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00d4ff",
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
        border: "2px solid #fff",
        padding: "12px 10px",
        "&:hover": {
          borderColor: "#00d4ff !important",
        },
      },
    },

    MuiSvgIcon: {
      fontSizeSmall: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 5,
        "&:hover": {
          color: "#00d4ff",
        },
      },
    },

    MuiButton: {
      root: {
        fontFamily: "Open Sans",
        fontSize: 15,
        textTransform: "none",
        background: "linear-gradient(45deg, #2196F3 30%, #00d4ff 90%)",
        borderRadius: 2,
        color: "black",
        fontWeight: 600,
        height: 66,
        padding: "0 30px",
        margin: "7px auto",
      },
      outlined: {
        background: "transparent",
        borderWidth: "1.5px !important",
        borderColor: "#00d4ff !important",
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