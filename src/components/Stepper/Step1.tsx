import CustomTextField from "../CustomTextField";

export const Step1 = ({
    nextStep,
  }: any): JSX.Element => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
  
    return (
        <>
            <CustomTextField
                name="nickname"
                label="Type your name..."
                onKeyPress={handleKeyPress}
            />
            {/*
            <Box marginTop={2}>
                <Button fullWidth onClick={(e) => nextStep(e)} type="submit">Let's go</Button>
            </Box>
            */}
        </>
    );
  };
  
  export default Step1;
  