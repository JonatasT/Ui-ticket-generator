import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export const Step1 = ({
    nextStep,
    update,
  }: any) => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
  
    return (
        <>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                name="nickname" 
                label="Typing your name..." 
                variant="outlined" 
                onChange={update}
                onKeyPress={handleKeyPress}
            />
            <Box marginTop={2}>
                <Button fullWidth onClick={(e) => nextStep(e)} type="submit">Let's go</Button>
            </Box>
        </>
    );
  };
  
  export default Step1;
  