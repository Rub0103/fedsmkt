import { useState } from "react";
import { Steps } from "../Forms/Steps";
import { Form } from "../Forms/Form";
import { RegistrationMessage } from "../RegistrationMessage/RegistrationMessage";

export const RegistrationBlock = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [proggress, setProgress] = useState({ progress: 0, step: 1 });

    const handleNext = (data: Record<string, string>) => {
        const items = Object.values(data).filter((item: any) => item !== '')
        setProgress({ progress: items.length, step: currentStep })
        if (currentStep === 3) return
        setCurrentStep((prevStep) => prevStep + 1);
    };


    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <>
                    <div className='form_step_wrap flex flex-nowrap justify-start align-start col-gap-5 mb-12'>
                        <Steps step={1} progress={proggress} />
                        <Steps step={2} progress={proggress} />
                    </div>
                    <Form step={currentStep} handleNext={handleNext} />
                </>
            case 2:
                return <>
                    <div className='form_step_wrap flex flex-nowrap justify-start align-start col-gap-5 mb-12'>
                        <Steps step={1} progress={proggress} />
                        <Steps step={2} progress={proggress} />
                    </div>
                    <Form step={currentStep} handleNext={handleNext} />
                </>
            default:
                return <div>
                    <RegistrationMessage />
                </div>;
        }
    };

    return (
        < >
            {renderStepContent()}
        </>
    )
}
