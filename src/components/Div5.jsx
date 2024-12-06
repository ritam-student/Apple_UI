
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

// import required modules
import { Pagination , Autoplay } from 'swiper/modules';

export default function Div5() {
  return (
    <div className='mt-3'>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination , Autoplay]}
      >
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/t0ZBZJdSQL6-uGE65O5Q2A/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px] ' /></a>
        </SwiperSlide>
        <SwiperSlide>
           <a href='#'> <img src="https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/cf/f8/d5/cff8d531-c00e-015f-cbbc-e4f33224acd7/3c395e91-fb16-4b5d-8f3f-14764a4ba325.png/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]'/></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/ce4iVY5l5cZ9hO8daBzpFA/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px] ' /></a>
        </SwiperSlide>
        <SwiperSlide>
           <a href='#'> <img src="https://is1-ssl.mzstatic.com/image/thumb/S2T1FMcov5a0GzmninlU4Q/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
           <a href='#'> <img src="https://is1-ssl.mzstatic.com/image/thumb/nJgEtlgB2Texv1t6t_X8FA/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#'> <img src="https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/689x387.jpg" alt="" className='md:h-[550px] md:w-[1000px] h-[550px] lg:h-[600px] lg:w-[1100px]' /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
