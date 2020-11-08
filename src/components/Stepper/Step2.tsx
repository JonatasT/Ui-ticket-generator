import CustomTextField from "../CustomTextField";

export const Step2 = ({
    nextStep, 
    }: any): JSX.Element => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
    
    return (
        <CustomTextField
            name="field2"
            label="Step2..."
            nextStep={nextStep}
            onKeyPress={handleKeyPress}
        />

    );
}

export default Step2;