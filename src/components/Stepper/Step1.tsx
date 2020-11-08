import CustomTextField from "../CustomTextField";

import handleKeyPress from "../CustomTextField/actions";

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
        </>
    );
  };
  
  export default Step1;
  