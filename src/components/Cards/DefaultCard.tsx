import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import { BorderRight } from "@material-ui/icons";

const size        = 1;
const background  = "#000";
const color1      = "#d25778";
const color2      = "#ec585c";
const color3      = "#e7d155";
const color4      = "#56a8c6";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    ticketVisualVisual: {
      width: 650,
      height: 320,
      margin: "100px auto",
      position: "relative",
      transition: "all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s",
      background: `linear-gradient(
        to right, 
        ${color1}, 
        ${color2}, 
        ${color3}, 
        ${color4})`,
      borderRadius: 20,
      padding: 5,
      '&::before': {
        content: `''`,
        display: "block",
        position: "absolute",
        top: 130,
        left: -30,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: `${color1}`,
        zIndex: 2,
      },
      '&::after': {
        content: `''`,
        display: "block",
        position: "absolute",
        top: 130,
        right: -30,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: `${color4}`,
        zIndex: 2,
      },
    },
    ticketVisualWrapper: {
      width: "100%",
      height: "100%",
      position: "relative",
      background: `${background}`,
      borderRadius: 15,
      '&::before': {
        content: `''`,
        display: "block",
        position: "absolute",
        top: 130,
        left: -30,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: `${background}`,
        zIndex: 3,
      },
      '&::after': {
        content: `''`,
        display: "block",
        position: "absolute",
        top: 130,
        right: -30,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: `${background}`,
        zIndex: 3,
      },
    },

    left: {
      position: "absolute",
      top: 110,
      left: -50,
      width: 50,
      height: 100,
      background: `${background}`,
      zIndex: 4,
    },

    right: {
      position: "absolute",
      top: 110,
      right: -50,
      width: 50,
      height: 100,
      background: `${background}`,
      zIndex: 4,
    },

    ticketVisualProfile: {
      padding: `
        calc( 39px * ${size}) 
        calc(155px * ${size}) 
        calc( 39px * ${size}) 
        calc( 58px * ${size})`,
    },

    ticketProfileText: {
      margin: 0,
    },

    ticketProfileProfile: {
      display: "flex",
      flexDirection: "row",
      alignItems: "end",
    },

    ticketEvent: {
      marginTop: 10,
      marginLeft: -5,
    },

    ticketProfileImage: {
      width:  `calc(82px * ${size})`,
      height: `calc(82px * ${size})`,
      borderRadius: "50%",
    },

    ticketProfileName: {
      fontSize: `calc(32px * ${size})`,
      margin: "10px 0 5px 20px",
      fontWeight: 700,
    },

    ticketProfileUsername: {
      margin: "0 0 5px 20px",
      color: "#8a8f98",
      display: "flex",
    },

    ticketProfileGithubIcon: {
      width: 18,
      height: 18,
      marginRight: 7,
      marginLeft: -2,
      marginTop: 2,
    },

    ticketVisualTicketNumberWrapper: {
      position: "absolute",
      right: 140,
      bottom: 0,
    },

    ticketVisualTicketNumber: {
      transform: "rotate(90deg)",
      translateY: `calc(100px * ${size})`,
      transformOrigin: "bottom right",
      fontSize: `calc(40px * ${size})`,
      fontWeight: 700,
      textAlign: "center",
      paddingBottom: 35,
      width: 310,
      borderBottom: "2px dashed #333",
    },
  });

export const DefaultCard = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
          <div className={classes.ticketVisualVisual} id="ticket">
            <div className={classes.left}></div>
              <div className={classes.right}></div>
                <div className={classes.ticketVisualWrapper}>
                  <div className={classes.ticketVisualProfile}>
                    <div className={classes.ticketProfileProfile}>
                      <img
                        src="https://github.com/jonatast.png"
                        alt="jonatast"
                        className={classes.ticketProfileImage}
                      />
                      <div className={classes.ticketProfileText}>
                        <p className={classes.ticketProfileName}>Jonatas Teixeira</p>
                        <p className={classes.ticketProfileUsername}>
                          <span className={classes.ticketProfileGithubIcon}>
                            <img 
                              className={classes.ticketProfileGithubIcon} 
                              src="https://raw.githubusercontent.com/gerardbrian19/nextjs-conf-ticket/5c78bf6b55b66de605998b8e1c5640bf4773e00c/github.svg" alt="" />
                          </span>
                          jonatast
                        </p>
                      </div>
                    </div>
                  <div className={classes.ticketEvent}>
                    <img 
                      className={classes.ticketEvent}
                      src="https://raw.githubusercontent.com/gerardbrian19/nextjs-conf-ticket/main/event-logos.png" />
                  </div>
                </div>
                <div className={classes.ticketVisualTicketNumberWrapper}>
                  <div className={classes.ticketVisualTicketNumber}>№ 014747</div>
                </div>
              </div>
          </div>
        </>
    );
}


export default DefaultCard;

