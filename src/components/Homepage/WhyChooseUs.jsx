import React from 'react';
import { Lobster } from "@next/font/google"
import { MdCarpenter } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { FcSupport } from "react-icons/fc";
import { DiModernizr } from "react-icons/di";
import { TbTruckDelivery } from "react-icons/tb";

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const WhyChooseUs = () => {
    return (
        <div
            style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,url(/assests/comfy.jpg)` }}
            className='my-20 bg-cover bg-center h-full lg:h-[700px] p-4'>
            <div className='text-center w-full'>
                <h2 className={`${lobster.className} text-3xl md:text-5xl text-white underline`}>Why Choose Us</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-12 duration-200'>

                {/* card */}
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <MdCarpenter className='text-5xl w-full mb-8'></MdCarpenter>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Superior Craftsmanship</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-2'>
                            <p>we pride ourselves on superior craftsmanship, ensuring every piece is meticulously crafted with attention to detail. Our dedication to quality guarantees long-lasting comfort and timeless design in every product.</p>
                        </div>
                </div>
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <IoBedOutline className='text-5xl w-full mb-8'></IoBedOutline>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Eco-Friendly Materials</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-2'>
                            <p>CozyCorner is committed to sustainability, using eco-friendly materials that are both beautiful and kind to the planet. Our products are thoughtfully crafted to minimize environmental impact without compromising on quality or style.</p>
                        </div>
                </div>
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <RiArchiveDrawerFill className='text-5xl w-full mb-8'></RiArchiveDrawerFill>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Custom Comfort</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-2'>
                            <p>we offer custom comfort solutions tailored to your unique needs and preferences. Every piece is designed to provide personalized relaxation, ensuring the perfect fit for your home and lifestyle</p>
                        </div>
                </div>
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <FcSupport className='text-5xl w-full mb-8'></FcSupport>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Expert Support</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                            <p>CozyCorner provides expert support every step of the way, from product selection to post-purchase care. Our knowledgeable team is always ready to assist, ensuring a seamless and satisfying experience</p>
                        </div>
                </div>
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <DiModernizr className='text-5xl w-full mb-8'></DiModernizr>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Modern Designs</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-2'>
                            <p>CozyCorner offers modern designs that blend contemporary style with functionality, creating pieces that elevate any space. Our collection reflects the latest trends, providing timeless elegance for your home.</p>
                        </div>
                </div>
                <div className='bg-white/90 w-full px-8 py-14 text-center rounded-sm mix-blend-luminosity group cursor-pointer relative overflow-hidden'>
                        <TbTruckDelivery className='text-5xl w-full mb-8'></TbTruckDelivery>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Quick Delivery</h2>
                        <div className='absolute inset-0 bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                            <p>we ensure quick delivery, bringing your chosen pieces to your doorstep with efficiency and care. Enjoy a hassle-free shopping experience with timely arrivals of your favorite furniture</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;