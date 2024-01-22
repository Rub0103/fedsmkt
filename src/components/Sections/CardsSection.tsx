export const CardsSection = () => {
    return (
        <div className='container card_wrap_container flex flex-col justify-center align-stretch'>
            <h2 className='fs-h-1 lh-h-1 c-white fw-300 text-center mb-6'>Why <strong>Trade</strong> <br className='hidden xs-block' />with XM?</h2>
            <hr className='hr hr-2 hr-70 c-green mb-6' />
            <p className='fs-sm lh-sm c-white text-center mb-7'>
                We have been providing traders around the world with the same <strong>premium experience</strong>
                for over a decade. As an <strong>industry-leader</strong>, we know what
                the modern trader needs to be <strong>successful</strong> in the markets.
            </p>
            <div className='card_grid sm-flex flex-col justify-start align-stretch sm-row-gap-6'>
                <div className='card card-1 flex flex-col justify-start align-start px-13 py-13 sm-px-10 sm-py-10 xs-px-7 xs-py-11'>
                    <span className='card_title fs-h-3 lh-h-3 fw-700 c-white mb-6 xs-fs-lg xs-lh-lg xs-mb-5'>Superior Trade Execution</span>
                    <hr className='hr hr-2 hr-50 c-green mb-6 ml-0 xs-mb-5' />
                    <p className='card_text fs-md lh-md sm-fs-sm sm-lh-sm c-white '><strong>99</strong>% of trades are executed in <strong>less than a second</strong>, with no requotes or rejections.</p>
                    <img className='card_icon card_icon--1' src='/src/assets/images/cards/1.png' alt='' />
                </div>
                <div className='card card-2 flex flex-col justify-start align-start px-13 py-13 sm-px-10 sm-py-10 xs-px-7 xs-py-11'>
                    <span className='card_title fs-h-3 lh-h-3 fw-700 c-white mb-6 xs-fs-lg xs-lh-lg xs-mb-5'>Competitive Pricing</span>
                    <hr className='hr hr-2 hr-50 c-green mb-6 ml-0 xs-mb-5' />
                    <p className='card_text fs-md lh-md sm-fs-sm sm-lh-sm c-white'>We offer some of the <strong>lowest spreads</strong> and we don’t charge commissions.</p>
                    <img className='card_icon card_icon--2' src='/src/assets/images/cards/2.png' alt='' />
                </div>
                <div className='card card-3 flex flex-col justify-start align-start px-13 py-13 sm-px-10 sm-py-10 xs-px-7 xs-py-11'>
                    <span className='card_title fs-h-3 lh-h-3 fw-700 c-white mb-6 xs-fs-lg xs-lh-lg xs-mb-5'>Advanced Technology</span>
                    <hr className='hr hr-2 hr-50 c-green mb-6 ml-0 xs-mb-5' />
                    <p className='card_text fs-md lh-md sm-fs-sm sm-lh-sm c-white'>Trade on <strong>MT4</strong> or <strong>MT5</strong>, with expert tools, across desktop, web and mobile.</p>
                    <img className='card_icon card_icon--3' src='/src/assets/images/cards/3.png' alt='' />
                </div>
                <div className='card card-4 flex flex-col justify-start align-start px-13 py-13 sm-px-10 sm-py-10 xs-px-7 xs-py-11'>
                    <span className='card_title fs-h-3 lh-h-3 fw-700 c-white mb-6 xs-fs-lg xs-lh-lg xs-mb-5'>Start with $5</span>
                    <hr className='hr hr-2 hr-50 c-green mb-6 ml-0 xs-mb-5' />
                    <p className='card_text fs-md lh-md sm-fs-sm sm-lh-sm c-white'>Start trading your preferred instruments with as little as a <strong>$5 minimum deposit</strong>.</p>
                    <img className='card_icon card_icon--4' src='/src/assets/images/cards/4.png' alt='' />
                </div>
            </div>
        </div>
    );
};
