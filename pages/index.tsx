import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import useStyles from "../src/styles";
import { Stepper } from "../src/components/Stepper";
import Footer from "../src/components/Footer";

export default function Index() {
	const classes = useStyles();

	return (
		<Grid container direction="column" justifyContent="center" alignItems="center">
			 <Box marginTop={15} className={classes.box}>
				<Box className={classes.innerBox}>
					<FormControl>
						<Image src="/logoColor.svg" alt="UI ticket generator" className={classes.logo} height={72} width={160} alt=""/>
						<Typography variant="h1" component="h1" className={classes.title}>UI Ticket Generator</Typography>
						<Typography variant="h6" component="h2" className={classes.subTitle}>
							Generate yourself a custom ticket for your event! Fast and easy. You can do it!
						</Typography>
						<Stepper/>
					</FormControl>
					<Footer/>
				</Box>
			</Box>
		</Grid>
	);
}
