import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// import "swiper/css";
// import 'swiper/css/navigation'; // module styles if you use navigation
// import 'swiper/css/pagination';

// import logo from '@/public/logo.svg';
import forum_bg from "@/public/forum-bg.jpg";


export const Header = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <div className="text-center p-4">
          {/* <div className="flex justify-center items-center mx-auto">
            Swiper container
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              navigation={true}
              pagination={{ clickable: true }}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <Image src={logo} alt="Picture of the author" width={500} height={500} />
              </SwiperSlide>
              <SwiperSlide>
              <Image src={logo} alt="Picture of the author" width={500} height={500} />

              </SwiperSlide>
              <SwiperSlide>
              <Image src={logo} alt="Picture of the author" width={500} height={500} />

              </SwiperSlide>
            </Swiper>
            </div> */}
            <div className="relative">
                <Image 
                 src={forum_bg}
                 alt="Community Forum"
                 />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                <h1 className="font-bold text-2xl">Policy CTRL</h1>
                <p className="font-bold">Ask questions, share ideas, and connect with other climate champions.</p>
                <Link href="/geo-maps">
                  <button className="bg-green-700 px-3 py-2 rounded-md font-bold">Explore</button>
                </Link>
                </div>
            </div>
      </div>
    </div>
  )
}
