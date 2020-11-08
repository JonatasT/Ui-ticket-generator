export const handleKeyPress = ({
    nextStep,
  }: any) => {
    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
  }

export default handleKeyPress;