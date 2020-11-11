import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./DefaultCard/styles";

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

