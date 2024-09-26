'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const OurClients = () => {

    const testimonials = [
        {
            review: "CozyCorner has transformed my living space! The furniture is not only stylish but also incredibly comfortable. The entire shopping experience was seamless, from browsing to delivery. Highly recommended!",
            img: "https://i.ibb.co.com/nbd4R4h/pexels-stefanstefancik-91227.jpg",
            name: "Aaron Smith"
        },
        {
            review: "I’m so impressed with the quality and craftsmanship of the pieces I purchased from CozyCorner. Their customer service team was helpful and responsive, making sure my order arrived on time. Will definitely shop here again!",
            img: "https://i.ibb.co.com/HNry7MB/pexels-danxavier-1239291.jpg",
            name: "Adele Rhodes"
        },
        {
            review: "I found exactly what I was looking for at CozyCorner. The variety and design options are fantastic, and the furniture fits perfectly in my home. Great value for money and excellent service!",
            img: "https://i.ibb.co.com/7GBkbR8/pexels-justin-shaifer-501272-1222271.jpg",
            name: "Drink Water"
        },
    ]

    return (
        <div className='mx-auto container my-12'>
            <div className='text-center w-full'>
                <h2 className='text-5xl font-semibold'>Our Customers</h2>
                <p className='mt-4'>Our customers are the heart of CozyCorner, inspiring us to provide quality products and exceptional service.</p>
            </div>

            {/* review swiper */}
            <div
                style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,url(/assests/clientbg.jpg)` }}
                className='mt-8 bg-cover bg-center'>
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='flex flex-col md:flex-row items-start justify-between w-full gap-12 p-8'>
                                    <div className='w-[400px] h-[280px] '>
                                        <Image className='rounded-full' src={testimonial.img} alt={testimonial.name} width={400} height={300}></Image>
                                    </div>
                                    <div>
                                        <h1 className='text-7xl text-white mt-8'>’’</h1>
                                        <h2 className='text-3xl mb-2 font-medium text-white'>{testimonial.name}</h2>
                                        <p className='text-white'>{testimonial.review}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default OurClients;