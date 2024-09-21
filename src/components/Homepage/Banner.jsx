'use client'
import React from 'react';
import { Merriweather } from "@next/font/google"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700']
})


const Banner = () => {

    const banners = [
        {
            title: "Unique Collection",
        },
        {
            title: "Elegance Look"
        },
        {
            title: "Aesthetic Feel",
        },
    ]

    return (
        <div className='pb-10 relative'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                // autoplay={{
                //     delay: 10000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {
                    banners.map((banner, index) => (
                        <SwiperSlide
                            className='bg-cover'
                            style={{ backgroundImage: `url(/assests/banner/${index + 1}.jpg)` }}
                            key={index}
                        >
                            <div className='h-[250px] md:h-[600px] lg:h-screen'>
                                <div className='flex items-center justify-center w-full h-full'>
                                    <div className='text-center'>
                                        <h1 className={`${merriweather.className} text-white text-6xl font-semibold`}>{banner.title}</h1>
                                        <button className='text-white border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-slate-800 duration-150 mt-6 font-thin'>DISCOVER</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;