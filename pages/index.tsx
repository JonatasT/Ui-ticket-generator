import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useStyles from "../src/styles";

export default function Index() {
	const classes = useStyles();

	return (
		<>
			<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			>
				<Box className={classes.box}>
					<Box className={classes.innerBox}>
						<FormControl>
							<Image src="/logoColor.svg" alt="UI ticket generator" className={classes.logo} height={72} width={160}/>
							
							<Typography variant="h1" component="h1" className={classes.title}>
								UI Ticket Generator
							</Typography>
							<Typography variant="h6" component="h2" className={classes.subTitle}>
								Generate yourself a custom ticket for your event! Fast and easy. You can do it!
							</Typography>

							<TextField id="outlined-basic" label="Typing your name..." variant="outlined"/>

						</FormControl>
					</Box>
				</Box>
			</Grid>
		</>
	);
} 