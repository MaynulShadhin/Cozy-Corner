'use client'
import { motion } from "framer-motion"
import React from 'react';
import { Lobster } from "@next/font/google"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
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
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
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
                            <div className='h-[250px] md:h-[500px] lg:h-[900px]'>
                                <div className='flex items-center justify-center w-full h-full'>
                                    <div className='text-center'>
                                        <motion.h1
                                            initial={{ x: -100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 },
                                                ease: "easeIn",
                                                duration: 1,
                                            }}
                                            className={`${lobster.className} text-white text-2xl md:text-6xl font-semibold`}>{banner.title}</motion.h1>
                                        <motion.button
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 },
                                                ease: "easeIn",
                                                duration: 1,
                                            }}
                                            className='text-white border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-slate-800 duration-150 mt-6 '>DISCOVER</motion.button>
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