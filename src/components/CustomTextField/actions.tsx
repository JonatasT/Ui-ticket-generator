export default function handleKeyPress(e: any, nextStep: any) {
  if(e.key === 'Enter'){
    nextStep(e);
  }
}