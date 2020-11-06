import { useState } from "react";
import StepWizard from "react-step-wizard";
import Box from "@material-ui/core/Box";

import useStyles from "../../styles/";

//steps
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export const Stepper = (...props: any) => {
    const classes = useStyles();

    const [state, updateState] = useState({
    form: {
        usename: "",
        },
    });

    const updateForm = (key: any, value: any) => {
    const { form }: any = state;

    form[key] = value;
    updateState({
        ...state,
        form,
    });
    };

    const setInstance = (SW: any) =>
    updateState({
        ...state,
        ...SW,
    });

    return (
        <Box className={classes.stepperWrapper}>
            <StepWizard 
                isHashEnabled={false} 
                isLazyMount={true} 
                instance={setInstance}
            >
                <Step1 form={state.form} update={updateForm} />
                <Step2 form={state.form} update={updateForm}/>
                <Step3 form={state.form} update={updateForm}/>
            </StepWizard>
        </Box>
    );
}

export default Stepper;