import { IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const NextStep = () => {
    return (
        <IconButton color="primary" aria-label="Next step">
            <ArrowForwardIcon/>
        </IconButton>
    );
}

export const PreviousStep = () => {
    return (
        <IconButton color="primary" aria-label="Next step">
            <ArrowBackIcon/>
        </IconButton>
    );
}

export default NextStep;