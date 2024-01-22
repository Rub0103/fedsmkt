
export const RegistrationMessage = () => {
    return (
        <div className='registration container flex flex-col w-100 justify-center align-center px-6 py-8 bg-green-lighter border-green align-stretch mb-10'>
            <div className='flex w-100 justify-start align-center mb-8'>
                <img className='mr-4' src="/src/assets/images/circle-check-solid.png" alt="check" />
                <p className='c-green'>Registration Successful</p>
            </div>
            <div className='flex justify-start align-center'>
                <i className="fa fa-solid fa-caret-right mr-2 c-green" />
                <p className='c-green fs-sm'>Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
            </div>
        </div>
    )
}