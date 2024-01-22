
export  const PromoSection = () => {
    return (
        <div className='container promo_wrap_container flex flex-nowrap justify-start align-start sm-w-100 sm-flex-col sm-flex-wrap'>
            <div className='promo_main flex flex-col justify-start align-start sm-w-100 mr-10 sm-mr-0 sm-align-center sm-mb-14'>
                <hr className='hr hr-4 hr-70 c-red mb-10 ml-0 sm-ml-auto sm-mb-6' />
                <h2 className='fs-h-xl lh-h-xl fw-900 c-grey-dark mb-14 sm-text-center sm-mb-6'>
                    Big<span className='c-red'>.</span> <br className='sm-hidden' />Fair<span className='c-red'>.</span> <br className='sm-hidden' />Human<span className='c-red'>.</span>
                </h2>
                <p className='promo_main_text fs-md lh-md c-grey-dark sm-text-center'>Learn why over <strong>5 million<br className='sm-hidden' /> clients choose XM</strong> as their <br className='sm-hidden' />trusted online broker.</p>
            </div>
            <div className='promo_list flex flex-wrap justify-between align-start col-gap-20 row-gap-20 ml-20 sm-ml-0 xs-row-gap-12 xs-text-center'>
                <div className='promo_list_item flex flex-col justify-start align-start grow-1 shrink-1 w-100 xs-justify-center xs-align-center xs-ml-auto xs-mr-auto'>
                    <img className='block promo_list_item_icon mb-5' src='/src/assets/images/shield_icon.png' alt='' />
                    <span className='block fs-lg lh-lg c-grey-dark fw-700 mb-4'>Authorised and Regulated</span>
                    <p className='block fs-sm lh-sm c-grey-dark'>At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.</p>
                </div>
                <div className='promo_list_item flex flex-col justify-start align-start grow-1 shrink-1 w-100 xs-justify-center xs-align-center xs-ml-auto xs-mr-auto'>
                    <img className='block promo_list_item_icon mb-5' src='/src/assets/images/users_icon.png' alt='' />
                    <span className='block fs-lg lh-lg c-grey-dark fw-700 mb-4'>Committed and Fair</span>
                    <p className='block fs-sm lh-sm c-grey-dark'>We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
                </div>
                <div className='promo_list_item flex flex-col justify-start align-start grow-1 shrink-1 w-100 xs-justify-center xs-align-center xs-ml-auto xs-mr-auto'>
                    <img className='block promo_list_item_icon mb-5' src='/src/assets/images/award_icon.png' alt='' />
                    <span className='block fs-lg lh-lg c-grey-dark fw-700 mb-4'>Multi-Award-Winning</span>
                    <p className='block fs-sm lh-sm c-grey-dark'>Over the years we have received over 40 awards for the quality of our products and services.</p>
                </div>
                <div className='promo_list_item flex flex-col justify-start align-start grow-1 shrink-1 w-100 xs-justify-center xs-align-center xs-ml-auto xs-mr-auto'>
                    <img className='block promo_list_item_icon mb-5' src='/src/assets/images/support_icon.png' alt='' />
                    <span className='block fs-lg lh-lg c-grey-dark fw-700 mb-4'>24/7 Support</span>
                    <p className='block fs-sm lh-sm c-grey-dark'>Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
                </div>
            </div>
        </div>
    )
}
