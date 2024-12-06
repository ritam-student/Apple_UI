
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {  Autoplay } from 'swiper/modules';

export default function Div6() {
  return (
    <div className='mt-6'>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        autoplay={{
            delay: 250,
            disableOnInteraction: false,
          }}
        speed={9000}
        loop={true}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/21/a9/dc/21a9dcf7-3e65-05c4-6e4a-7b338d6544f2/media-HI_BC_0090-9535223-Artwork-iOS-316496.png/286x161.jpg" alt="" className='h-[150px] w-[400px] ' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/c2/57/1c/c2571c2b-6be5-1c49-0dd3-fa4c50ed9bd5/3067f4b4-dc21-4823-8b8d-1592efa996a7.png/131x131SC.DN01.jpg?l=en-US" alt="" className='h-[150px] w-[400px] ' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bd/60/67/bd6067ae-64ac-04df-dc96-4757069c37dd/6610be22-3caa-493c-90b0-a8f73520c9bf.png/286x161.jpg" alt="" className='h-[150px] w-[400px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/b7/52/00/b7520011-8ec1-f579-0d0c-c69203873d1e/e12fda86-52fb-4d7d-8017-260155a31696.png/286x161.jpg" alt="" className='h-[150px] w-[400px]' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a5/d1/8c/a5d18c90-2be5-f4e1-a721-96ff70ebe095/U0MtTVMtV1ctR3Jvb3ZlLWR5bmFtaWNzLUFkYW1fSUQ9MTI3NDgwMjE0My5wbmc.png/131x131SC.DN01.jpg?l=en-US" alt="" className='h-[150px] w-[400px] ' /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='#'><img src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/286x161.jpg" alt="" className='h-[150px] w-[400px]' /></a>
        </SwiperSlide>
      </Swiper>
    </ div>
  );
}
