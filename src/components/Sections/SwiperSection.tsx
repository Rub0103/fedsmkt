import { Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const SwiperSection = () => {
    return (
        <div className='event_wrap_container flex flex-col justify-start align-stretch'>
            <h2 className='fs-h-2 lh-h-2 fw-800 c-text-dark text-center mb-13 sm-mb-10'>Event Gallery</h2>
            <div className='swiper_block'>
                <Swiper
                    modules={[Navigation,]}
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                >
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide flex 
justify-center align-center bg-grey'>

                        </div>
                    </SwiperSlide>
                </Swiper></div>
        </div>

    );
}

