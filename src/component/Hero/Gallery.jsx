import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BedImg, CloudImg, viewImg } from '../../assets/image';

const galleries = new Array(3).fill([viewImg, CloudImg, BedImg]).flat();

export default function Gallery() {
  return (
      <div className=" space-y-5 bg-gray-200 text-center">
        <div className="text-center text-4xl font-bold flex gap-4 items-center justify-center ">
          <h1 className='text-red-600 mt-8'>Our</h1>
          <h1 className='text-orange-600 mt-8'>Galleries</h1> 

        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          style={{
            // @ts-expect-error props
            '--swiper-navigation-color': '#21202F',
            '--swiper-pagination-color': '#21202F'
          }}
          watchSlidesProgress={true}
          spaceBetween={40}
          modules={[Pagination, Navigation, Autoplay]}
          loop={true}
          pagination={{
            clickable: true
          }}
          centeredSlides
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            760: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 4
            }
          }}
          className="mySwiper"
        >
          {galleries.map((gallery, idx) => (
            <SwiperSlide key={idx}>
              <img src={gallery} alt="img" className="h-64 mb-16 select-none rounded-lg shadow-black shadow-xl" draggable={false} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
  );
}
