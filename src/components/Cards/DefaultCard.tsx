import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import { BorderRight } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    ticketVisualVisual: {
      width: 650,
      height: 320,
      margin: "5px auto",
      position: "relative",
      display: "grid",
      transition: "all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s",
      borderRadius: 20,
      background: "linear-gradient(to right, #d25778, #ec585c, #e7d155, #56a8c6)",      
    },
    ticketVisualWrapper: {
      width: "98.5%",
      height: "97%",
      background: "black",
      alignSelf:  "center",
      justifySelf: "center",
      borderRadius: 15,
    },
    ticketVisualProfile: {
      padding: "39px 155px 39px 58px",
    },
    ticketProfileText: {
      margin: "0",
    },
    ticketProfileProfile: {
      display: "flex",
      flexDirection: "row",
    },
    ticketEvent: {
      marginTop: "25px",
      marginLeft: "-10px",
    },
    ticketProfileImage: {
      width: "82px",
      height: "82px",
      borderRadius: "50%",
    },
    ticketProfileName: {
      fontSize: "32px",
      margin: "10px 0 5px 20px",
      fontWeight: 700,
    },
    ticketProfileUsername: {
      margin: "0 0 5px 20px",
      color: "#8a8f98",
      display: "flex",
    },
    ticketProfileGithubIcon: {
      width: "18px",
      height: "18px",
      marginRight: "5px",
      marginTop: 2,
    },
    ticketVisualTicketNumberWrapper: {
      position: "absolute",
      right: 135,
      bottom: "0",
    },
    ticketVisualTicketNumber: {
      transform: "rotate(90deg)",
      translateY: 100,
      transformOrigin: "bottom right",
      fontSize: "40px",
      fontWeight: 700,
      textAlign: "center",
      paddingBottom: "35px",
      width: "310px",
      borderBottom: "2px dashed #333",
    },
  });

export const DefaultCard = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.ticketVisualVisual} id="ticket">
            <div className="left"></div>
            <div className="right"></div>
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
                        <img className={classes.ticketProfileGithubIcon} src="https://raw.githubusercontent.com/gerardbrian19/nextjs-conf-ticket/5c78bf6b55b66de605998b8e1c5640bf4773e00c/github.svg" alt="" />
                        </span>
                        jonatast
                    </p>
                    </div>
                </div>
                <div className={classes.ticketEvent}>
                    <img src="https://raw.githubusercontent.com/gerardbrian19/nextjs-conf-ticket/main/event-logos.png" />
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

