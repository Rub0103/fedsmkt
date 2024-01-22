export const Footer = () => {
    return (
        <div className='footer bg-black'>
            <div className='container footer_container flex flex-col justify-start align-stretch'>
                <div className='footer_top flex justify-between align-center sm-hidden pt-13'>
                    <div className='flex justify-start align-center col-gap-14'>
                        <img className='block' src='/src/assets/images/footer/metaquotes.png' alt=''/>
                        <img className='block' src='/src/assets/images/footer/verisign.png' alt=''/>
                        <img className='block' src='/src/assets/images/footer/unicef.png' alt=''/>
                        <img className='block' src='/src/assets/images/footer/investors.png' alt=''/>
                    </div>
                    <div className='flex justify-start align-center col-gap-3 c-grey-light'>
                        <span className='block fs-xs lh-xs fw-500 c-inherit'>Follow us on</span>
                        <a href='#' className='c-inherit'><i className='fa-brands fa-facebook-f'/></a>
                        <a href='#' className='c-inherit'><i className='fa-brands fa-twitter'/></a>
                        <a href='#' className='c-inherit'><i className='fa-brands fa-youtube'/></a>
                        <a href='#' className='c-inherit'><i className='fa-brands fa-instagram'/></a>
                        <a href='#' className='c-inherit'><i className='fa-brands fa-linkedin'/></a>
                    </div>
                </div>
                <hr className='w-100 hr hr-2 c-grey-dark mt-7 mb-3 sm-hidden'/>
                <div className='footer_bottom flex justify-between align-center pb-16 sm-py-13 xs-py-16 xs-flex-col xs-justify-center xs-align-center xs-row-gap-6'>
                    <div className='footer_menu flex justify-start align-center col-gap-1 fs-xs lh-xs c-grey-light'>
                        <a href='#' className='c-inherit decoration-none'>Privacy Policy</a>
                        <span>|</span>
                        <a href='#' className='c-inherit decoration-none'>Cookie Policy</a>
                        <span>|</span>
                        <a href='#' className='c-inherit decoration-none'>Terms and Conditions</a>
                    </div>
                    <div className='flex justify-start align-center'>
                        <img className='block' src='/src/assets/images/footer/tradingpoint.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
