import TextField from "@material-ui/core/TextField";

export const Step2 = (nextStep) => {
    return (
        <form onSubmit={() => nextStep}>
            <TextField fullWidth id="outlined-basic" label="Step2..." variant="outlined"/>
        </form>
    );
}

export default Step2;