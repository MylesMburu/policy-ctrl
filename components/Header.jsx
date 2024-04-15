import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import "swiper/css";
import 'swiper/css/navigation'; // module styles if you use navigation
import 'swiper/css/pagination';

export const Header = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <div className="text-center p-4">
          <div className="flex justify-center items-center mx-auto">
            {/* Swiper container */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
            >
              <SwiperSlide>
                <video controls width="500" height="500">
                  <source src="/vid3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SwiperSlide>
              <SwiperSlide>
                <video controls width="500" height="500">
                  <source src="/vid3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SwiperSlide>
              <SwiperSlide>
                <video controls width="500" height="500">
                  <source src="/vid3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SwiperSlide>
            </Swiper>
            </div>
      </div>
    </div>
  )
}
