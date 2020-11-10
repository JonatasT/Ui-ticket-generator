import CustomTextField from "../CustomTextField";
import DefaultCard from "../Cards/DefaultCard";

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
                nextStep={nextStep}
                onKeyPress={handleKeyPress}
            />

            <DefaultCard/>
        </>
    );
  };
  
  export default Step1;
  