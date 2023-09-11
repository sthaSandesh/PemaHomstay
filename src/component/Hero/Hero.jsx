import { Link } from 'raviger'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BedImg, CloudImg, viewImg } from '../../assets/image';



const BackgroundImg = new Array(3).fill([viewImg, CloudImg, BedImg]).flat();

export default function Hero() {


  return (
    <div>
      <div className="hero min-h-screen bg-[url(/src/assets/view.jpeg)]">
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold text-white">Best Memories Start Here</h1>
            <Link href='/contacts'>
              <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold"
              >Reserve Now</button>
            </Link>
          </div>
        </div>
        <div className="hero-overlay bg-opacity-40"></div>
      </div>


      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         {BackgroundImg.map((BackgroundImg, idx) => (
            <SwiperSlide key={idx}>
              <img src={BackgroundImg} alt="img" className="h-screen w-screen " draggable={false} />
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  )
}
