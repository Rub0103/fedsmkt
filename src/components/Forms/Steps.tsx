interface ISteps {
    step: number;
    progress: {
        progress: number
        step: number
    }
}

export const Steps: React.FC<ISteps> = ({ step, progress }) => {

    return (
        <div className='form_step_holder w-100 grow-1 shrink-1 flex flex-col justify-start align-start row-gap-4'>
            <div className='form_step_header flex justify-start align-center col-gap-3'>
                <div className='form_step_num flex justify-center align-center c-green'>{/*if active className = 'c-green'*/}
                    <span className='block fs-sm lh-sm fw-700 c-white'>{step}</span>{/*if active className = 'c-white'*/}
                </div>
                <span className='fs-sm lh-sm fw-700 c-grey'>Step {step}</span>
            </div>
            <div className='progress c-white-light w-100'>
                <div className='progress-in c-green' style={{ width: `${progress.progress === 1 && progress.step === step ? '50%' : ''} ${progress.progress === 2 && progress.step === step ? '100%' : ''}` }} />
            </div>
        </div>

    )
}