import Box from "@material-ui/core/Box";
import CustomTextField from "../CustomTextField";
import { NextStep, PreviousStep } from "../Buttons/NavigationSteps/";

export const Step1 = ({
    nextStep,
    previousStep,
  }: any): JSX.Element => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
  
    return (
        <Box>
            <Box marginBottom={2}>
                <PreviousStep action={previousStep}/>
                <NextStep action={nextStep}/>
            </Box>
            
            <CustomTextField
                name="nickname"
                label="Type your name..."
                nextStep={nextStep}
                onKeyPress={handleKeyPress}
            />
        </Box>
    );
  };
  
  export default Step1;
  