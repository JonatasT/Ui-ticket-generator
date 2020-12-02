import { colors, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from "./styles";

export const NextStep = () => {
    const classes = useStyles();

    return (
        <IconButton className={classes.iconButtons} color="primary" aria-label="Next step">
            <ArrowForwardIcon/>
        </IconButton>
    );
}

export const PreviousStep = () => {
    const classes = useStyles();
    
    return (
        <IconButton className={classes.iconButtons} color="primary" aria-label="Next step">
            <ArrowBackIcon/>
        </IconButton>
    );
}

export default NextStep;