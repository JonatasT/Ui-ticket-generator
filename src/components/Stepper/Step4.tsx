import { useState } from "react";
import Box from "@material-ui/core/Box";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';

import { StepLabel } from '@material-ui/core';
import { useStyles } from "./styles";

import { NextStep, PreviousStep } from "../Buttons/NavigationSteps/";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface FileUploaderProps {
    onUploadComplete: () => void;
    fileTypes: string[];
}

export const Step4 = ({
    nextStep,
    previousStep
    }:any,
    props: FileUploaderProps): JSX.Element => {
        
    const [files, setFiles] = useState<File[]>([]);
    const classes = useStyles();
   
    const handleInit = () => {
        console.log('FilePond instance has initialised');
    }

    return (
        <Box>
            <Box marginBottom={2}>
                <PreviousStep action={previousStep}/>
                <NextStep action={nextStep}/>
            </Box>

            <StepLabel className={classes.label}>Upload your profile image:</StepLabel>
            <FilePond
                className={classes.imageInput}
                files={files}
                allowMultiple={false}
                dropOnPage
                server="/api"
                name="files"
                oninit={() => handleInit() }
                dropValidation
                acceptedFileTypes={props.fileTypes}
                stylePanelLayout={"integrated"}
        />
       </Box>
    );
}

export default Step4;