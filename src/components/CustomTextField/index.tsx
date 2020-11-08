import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import Typography from "@material-ui/core/Typography";


export const CustomTextField = (props: any, {
    update,
  }: any): JSX.Element => {
  
    return (
        <>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                name={props.name}
                label={props.label}
                variant="outlined" 
                onChange={update}
                onKeyPress={props.onKeyPress}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                            <Box fontStyle="italic" marginRight={1}>
                                <Typography variant="body1">Press enter</Typography>
                            </Box>
                            <ArrowRightAltOutlinedIcon color="primary"/>
                      </InputAdornment>
                    ),
                  }}
            />
        </>
    );
  };
  
  export default CustomTextField;
  