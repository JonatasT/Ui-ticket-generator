import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    ticketVisualVisual: {
          width: "650px",
          height: "320px",
          margin: "100px auto",
          position: "relative",
          transition: "all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s",
          border: "5px solid #fff",
        },
        ticketVisualWrapper: {
          width: "100%",
          height: "100%",
        },
        ticketVisualProfile: {
          padding: "calc(39px * var(--size)) calc(155px * var(--size)) calc(\n      39px * var(--size)\n    ) calc(58px * var(--size))",
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
          width: "calc(82px * var(--size))",
          height: "calc(82px * var(--size))",
          borderRadius: "50%",
        },
        ticketProfileName: {
          fontSize: "calc(32px * var(--size))",
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
        },
        ticketVisualTicketNumberWrapper: {
          position: "absolute",
          right: "35px",
          bottom: "0",
        },
        ticketVisualTicketNumber: {
          transform: "rotate(90deg) translateY(calc(100px * var(--size)))",
          transformOrigin: "bottom right",
          fontSize: "calc(40px * var(--size))",
          fontWeight: 700,
          textAlign: "center",
          paddingBottom: "35px",
          width: "calc(320px - 10px)",
          borderBottom: "2px dashed #333",
        },
  });

export const DefaultCard = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
        {/*<Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    beent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>*/}
        
        <div className="ticketVisualVisual" id="ticket">
            <div className="left"></div>
            <div className="right"></div>
            <div className={classes.ticketVisualWrapper}>
                <div className={classes.ticketVisualProfile}>
                <div className={classes.ticketProfileProfile}>
                    <img
                    src="https://github.com/medhatdawoud.png"
                    alt="medhatdawoud"
                    className={classes.ticketProfileImage}
                    />
                    <div className={classes.ticketProfileText}>
                    <p className={classes.ticketProfileName}>Medhat Dawoud</p>
                    <p className={classes.ticketProfileUsername}>
                        <span className={classes.ticketProfileGithubIcon}>
                        <img className={classes.ticketProfileGithubIcon} src="./github.svg" alt="" />
                        </span>
                        medhatdawoud
                    </p>
                    </div>
                </div>
                <div className={classes.ticketEvent}>
                    <img src="./event-logos.png" />
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