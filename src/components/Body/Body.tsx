import { WidgetContainer } from '../Widgets/WidgetContainer'
import { RegistrationBlock } from '../Sections/RegistrationBlock'
import { TradeSections } from '../Sections/TradeSections'
import { CardsSection } from '../Sections/CardsSection'
import { FormSection } from '../Sections/FormSection'
import { SwiperSection } from '../Sections/SwiperSection'
import { PromoSection } from '../Sections/PromoSection'

export const Body = () => {

    return (
        <>
            <section className='hero flex flex-col justify-center align-center'>
                <TradeSections />
            </section>
            <section className='coinblock_wrap flex flex-col justify-center align-center'>
                <WidgetContainer />
            </section>
            <section className='card_wrap flex flex-col justify-center align-center'>
                <CardsSection />
            </section>
            <section className='form_wrap flex flex-col justify-center align-center'>
                <div className='container form_wrap_container flex flex-col justify-center align-stretch'>
                    <FormSection />
                    <RegistrationBlock />
                    <p className='fs-sm lh-sm c-white text-center mb-7 sm-mb-6'>Don’t have an account? <a href='#' className='c-red'>Create one here</a> and register for the event</p>
                    <p className='fs-xs lh-xs c-white text-center'>Terms and Conditions apply<span style={{ color: '#CCB494' }}>*</span>. To read the full T&Cs, click <a href='#' className='c-red decoration-none'>here</a>.</p>
                </div>
            </section>
            <section className='event_wrap bg-white-dark'>
                <SwiperSection />
            </section>
            <section className='promo_wrap bg-white'>
                <PromoSection />
            </section>
        </>
    )
}

