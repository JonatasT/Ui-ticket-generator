import TextField from "@material-ui/core/TextField";

export const Step3 = (nextStep) => {
    return (
        <form onSubmit={() => nextStep}>
            <TextField fullWidth id="outlined-basic" label="Step3..." variant="outlined"/>
        </form>
    );
}

export default Step3;