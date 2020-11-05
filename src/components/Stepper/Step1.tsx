import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Step1 = (props: any, { nextStep }: any) => {

    const update = (e: any) => {
        props.update(e.target.name, e.target.value);
    };

    return (
        <form>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                name="nickname" 
                label="Typing your name..." 
                variant="outlined" 
                onChange={update}
            />
            <Box marginTop={2}>
                <Button fullWidth onClick={nextStep} type="submit">Let's go</Button>
            </Box>
        </form>
    );
}

export default Step1;