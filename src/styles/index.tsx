import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { relative } from "path";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        marginBottom: 8,
        lineHeight: 1
    },
    subTitle: {
        marginBottom: 50,
        lineHeight: 1.2
    },
    logo: {
      transform: "rotate(-45deg)",
      marginBottom: 100,
      marginLeft: -10,
      marginTop: -30,
    },
    logoMenu: {
      transform: "rotate(-45deg)",
      marginTop: 50,
      marginLeft: 20,
      zIndex: 3,
      position: "absolute",
    },
    logoLandscape: {
      marginTop: 58,
    },
    wrapper: {
      overflow: "hidden",
      margin: 0,
      padding: 0,
    },
    stepperWrapper: {
      width: "100%",
    },
    box: {
      height: "100vh",
      padding: theme.spacing(2),
      display: "grid",
    },
    innerBox: {
      placeSelf: "center",
      maxWidth: 550
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    socialMedia: {
      position: "fixed",
      rotate: "270deg",
      left: "5rem",
      top: "-8rem",
    },
    footer: {
      textDecoration: "none",
      display: "flex",
      justifyContent: "space-between",
      width: 200,
    },
    link: {
      textDecoration: "none",
      color: "#FB6A89",
      transition: ".2s",
      "&:hover": {
        color: "#00d4ff",
        transition: ".2s"
      }
    }
  })
);

export default useStyles;