import Box from "@material-ui/core/Box";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Link from "next/link";
import styles from "../../styles";

export const Footer = (): JSX.Element => {
    const classes = styles();
    return (
        <Box className={classes.footer} marginTop={10} width="100%" alignContent="space-between">
            Made with
            {
                <Link href="https://nextjs.org/">
                    <a className={classes.link}>
                        NextJS 
                    </a>
                </Link>
            } {<FavoriteBorderIcon/>} by 
            {
                <Link href="https://github.com/JonatasT">
                    <a className={classes.link} >JonatasT</a>
                </Link>
            }
        </Box>
    );
}

export default Footer;