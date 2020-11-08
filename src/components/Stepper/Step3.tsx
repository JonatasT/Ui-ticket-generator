import CustomTextField from "../CustomTextField";

export const Step3 = ({
    nextStep, 
    }: any): JSX.Element => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
    
    return (
        <CustomTextField
            name="field3"
            label="Step3..."
            nextStep={nextStep}
            onKeyPress={handleKeyPress}
        />

    );
}

export default Step3;