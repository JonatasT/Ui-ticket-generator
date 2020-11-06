import TextField from "@material-ui/core/TextField";

export const CustomTextField = (...props: any) => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }

    return (
        <TextField
            label={props.label}
            onChange={props.handle}
            onKeyPress={handleKeyPress}
            fullWidth 
            id="outlined-basic" 
            variant="outlined" 
        />
    );
}

export default CustomTextField;