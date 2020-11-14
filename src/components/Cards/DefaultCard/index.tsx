import { useStyles } from "./styles";

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
                              src="/githubLogo.svg" alt="Github" />
                          </span>
                          jonatast
                        </p>
                      </div>
                    </div>
                  <div className={classes.ticketEvent}>
                    <img 
                      className={classes.ticketEvent}
                      src="/eventLogos.png" />
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

