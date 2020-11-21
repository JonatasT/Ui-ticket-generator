import { makeStyles } from '@material-ui/core/styles';

const primaryColor = "#FB6A89";

export const useStyles = makeStyles({
    label: {
        marginBottom: 15,
    },
    imageInput: {
        borderColor: "#fff",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 4,

        "&:hover": {
            borderColor: primaryColor,
            transition: ".5s",
        },
    },
});