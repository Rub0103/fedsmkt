export const FormSection = () => {
    return (
        <div className='form_wrap_promo flex flex-col justify-start align-stretch'>
            <h2 className='fs-h-1 lh-h-1 c-white text-center mb-10 sm-mb-9 fw-700'>- Register Here -</h2>
            <p className='fs-md lh-md c-white text-center mb-13 mb-9'>Join us to celebrate our biggest night of the year.</p>
            <div className='form_wrap_list flex justify-start align-stretch c-white text-uppercase text-center xs-flex-col'>
                <div className='form_wrap_list_item flex flex-col justify-start align-center grow-1 shrink-1 w-100 px-2 pt-6 pb-5'>
                    <i className="fa-2x fa-regular fa-calendar-check mb-3" />
                    <span className='fs-md lh-md fw-500'>12 November 2022</span>
                </div>
                <div className='form_wrap_list_item flex flex-col justify-start align-center grow-0 shrink-1 px-6 pt-6 pb-5'>
                    <i className="fa-2x fa-regular fa-clock mb-3" />
                    <span className='fs-md lh-md fw-500 text-nowrap'>16:00 – 23:00</span>
                </div>
                <div className='form_wrap_list_item flex flex-col justify-start align-center grow-1 shrink-1 w-100 px-2 pt-6 pb-5'>
                    <i className="fa-2x fa-solid fa-location-dot mb-3" />
                    <span className='fs-md lh-md fw-500'>Centara Grand & Bangkok Convention Centre, Bangkok</span>
                </div>
            </div>
        </div>
    )
}

