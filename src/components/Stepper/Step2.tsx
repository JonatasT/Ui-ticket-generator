import Box from "@material-ui/core/Box";
import CustomTextField from "../CustomTextField";
import { NextStep, PreviousStep } from "../Buttons/NavigationSteps/";

export const Step2 = ({
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
                name="field2"
                label="Step2..."
                nextStep={nextStep}
                onKeyPress={handleKeyPress}
            />
        </Box>
        

    );
}

export default Step2;