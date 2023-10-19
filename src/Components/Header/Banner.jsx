
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Banner = () => {
    return (
        <div className=' hidden lg:block my-12'>
            <h1 className='my-4 text-gray-800 text-center font-bold text-2xl'>Dive Into The Glamorous World</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={true}

                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='w-auto h-auto' src="https://i.ibb.co/mqgtJNb/cosmetics1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-auto h-auto' src="https://i.ibb.co/zXjpgj3/Cosmetics2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-auto h-auto' src="https://i.ibb.co/f0ZGrhP/Cosmetics3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-auto h-auto' src="https://i.ibb.co/gMVfy6W/Cosmetics4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-auto h-auto' src="https://i.ibb.co/fx5N2km/Cosmetics5.jpg" alt="" /></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Banner;